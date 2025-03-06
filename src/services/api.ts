import {
  getAuth,
  createUserWithEmailAndPassword,
  UserCredential
} from 'firebase/auth'
import { getFirestore, doc, setDoc } from 'firebase/firestore'
import './firebaseConfig'
import { useAuthStore } from '../stores/authStore'

const auth = getAuth()
const db = getFirestore()

interface RegistrationData {
  name: string
  email: string
  password: string
  phone: string
}

interface RegistrationResult {
  success: boolean
  message: string
}

export const registerUser = async (
  data: RegistrationData
): Promise<RegistrationResult> => {
  const { setIsLoading, setError, setUser } = useAuthStore.getState()
  setIsLoading(true)
  setError(null)

  try {
    const userCredential: UserCredential = await createUserWithEmailAndPassword(
      auth,
      data.email,
      data.password
    )
    const user = userCredential.user

    await setDoc(doc(db, 'users', user.uid), {
      name: data.name,
      email: data.email,
      phone: data.phone
    })

    const userData = {
      uid: user.uid,
      name: data.name,
      email: data.email,
      phone: data.phone
    }
    console.log("🚀 ~ userData:", userData)

    setUser(userData)
    setIsLoading(false)
    return { success: true, message: 'Registration successful!' }
  } catch (error: unknown) {
    if (error instanceof Error) {
      setError(error.message)
      setIsLoading(false)
      return { success: false, message: error.message }
    }
    return { success: false, message: 'An unknown error occurred' }
  }
}
