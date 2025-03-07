import {
  getAuth,
  createUserWithEmailAndPassword,
  UserCredential,
  signInWithEmailAndPassword,
  signOut
} from 'firebase/auth'
import { getFirestore, doc, setDoc, getDoc } from 'firebase/firestore'
import './firebaseConfig'
import { useAuthStore } from '../stores/authStore'

const auth = getAuth()
const db = getFirestore()

interface LoginData {
  email: string
  password: string
}

interface RegistrationData extends LoginData {
  name: string
  phone: string
}

interface InfoResult {
  success: boolean
  message: string
}

export const registerUser = async ({
  name,
  email,
  password,
  phone
}: RegistrationData): Promise<InfoResult> => {
  const { setIsLoading, setError } = useAuthStore.getState()
  setIsLoading(true)
  setError(null)

  try {
    const userCredential: UserCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    )
    const user = userCredential.user

    await setDoc(doc(db, 'users', user.uid), {
      name,
      email,
      phone
    })

    setIsLoading(false)
    return { success: true, message: 'Registration successful!' }
  } catch (error: unknown) {
    if (error instanceof Error) {
      setError(error.message)
      setIsLoading(false)
      return { success: false, message: error.message }
    }
    setError('An unknown error occurred')
    return { success: false, message: 'An unknown error occurred' }
  }
}

export const loginUser = async ({
  email,
  password
}: LoginData): Promise<InfoResult> => {
  const { setIsLoading, setError, setUser, setIsAuth } = useAuthStore.getState()
  setIsLoading(true)
  setError(null)

  try {
    const userCredential: UserCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    )
    const user = userCredential.user

    const userDoc = await getDoc(doc(db, 'users', user.uid))
    if (userDoc.exists()) {
      setUser({
        uid: user.uid,
        email: userDoc.data()?.email || '',
        ...userDoc.data()
      })
    } else {
      setUser({ uid: user.uid, email: user.email ?? '' })
    }

    setIsAuth(true)
    setIsLoading(false)
    return { success: true, message: 'Login successful!' }
  } catch (error: unknown) {
    if (error instanceof Error) {
      setError(error.message)
      setIsLoading(false)
      return { success: false, message: error.message }
    } else {
      setError('An unknown error occurred')
      return { success: false, message: 'An unknown error occurred' }
    }
  }
}

export const logoutUser = async (): Promise<InfoResult> => {
  const { setIsLoading, setError, setUser, setIsAuth } = useAuthStore.getState()
  setIsLoading(true)
  setError(null)

  try {
    await signOut(auth)
    setUser(null)
    setIsAuth(false)
    setIsLoading(false)
    return { success: true, message: 'Logout successful!' }
  } catch (error: unknown) {
    if (error instanceof Error) {
      setError(error.message)
      setIsLoading(false)
      return { success: false, message: error.message }
    } else {
      setError('An unknown error occurred')
      return { success: false, message: 'An unknown error occurred' }
    }
  }
}
