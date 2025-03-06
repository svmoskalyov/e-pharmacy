import { useNavigate } from 'react-router'
import { SubmitHandler, useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { registerUser } from '../../services/api'
import { useAuthStore } from '../../stores/authStore'
import Button from '../ui/Button'
import s from './RegisterForm.module.scss'

interface RegistrationFormValues {
  name: string
  email: string
  password: string
  phone: string
}

const schema = yup.object().shape({
  name: yup.string().min(2).max(32).required('name is required'),
  email: yup
    .string()
    .email('invalid format')
    .min(3)
    .max(64)
    .matches(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/, 'invalid format')
    .required('email is required'),
  password: yup
    .string()
    .min(8, 'password must contain at least 8 characters')
    .required('password is required'),
  phone: yup.string().min(8).max(18).required('phone is required')
})

function RegisterForm() {
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<RegistrationFormValues>({
    resolver: yupResolver(schema)
  })
  // const navigate = useNavigate()
  const { isLoading, error } = useAuthStore()

  if (error !== null) {
    console.log('error notify --', error)
  }

  const onSubmit: SubmitHandler<RegistrationFormValues> = async data => {
    console.log(data)
    const registered = await registerUser(data)
    console.log('🚀 ~ reguser:', registered)

    if (registered.success) {
      console.log('🚀 ~ notify-green ~ reguser:', registered.message)
      // navigate('/login')
      reset()
    } else {
      console.log('🚀 ~ notify-red ~ reguser:', registered.message)
    }
  }

  return (
    <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
      <div className={s.inputsBox}>
        <label className={s.label}>
          <input
            {...register('name')}
            className={s.input}
            placeholder="User Name"
          />
          <p className={s.error}>{errors.name?.message}</p>
        </label>

        <label className={s.label}>
          <input
            {...register('email')}
            className={s.input}
            placeholder="Email address"
          />
          <p className={s.error}>{errors.email?.message}</p>
        </label>

        <label className={s.label}>
          <input
            {...register('phone')}
            className={s.input}
            placeholder="Phone number"
          />
          <p className={s.error}>{errors.phone?.message}</p>
        </label>

        <label className={s.label}>
          <input
            {...register('password')}
            className={s.input}
            type="password"
            placeholder="Password"
          />
          <p className={s.error}>{errors.password?.message}</p>
        </label>
      </div>

      <Button type="submit">{isLoading ? 'Loading...' : 'Register'}</Button>
    </form>
  )
}

export default RegisterForm
