import { useNavigate } from 'react-router'
import { SubmitHandler, useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useAuthStore } from '../../stores/authStore'
import { loginUser } from '../../services/api'
import Button from '../ui/Button'
import s from './LoginForm.module.scss'

type LoginFormProps = {
  popupAuth?: boolean
}

interface LoginFormValues {
  email: string
  password: string
}

const schema = yup.object().shape({
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
    .required('password is required')
})

function LoginForm({ popupAuth }: LoginFormProps) {
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<LoginFormValues>({
    resolver: yupResolver(schema)
  })
  const navigate = useNavigate()
  const { isLoading, error } = useAuthStore()

  if (error !== null) {
    console.log('error notify --', error)
  }

  const onSubmit: SubmitHandler<LoginFormValues> = async data => {
    const logined = await loginUser(data)
    if (logined.success) {
      console.log('🚀 ~ notify-green ~ logined:', logined.message)
      navigate('/')
      reset()
    } else {
      console.log('🚀 ~ notify-red ~ logined:', logined.message)
    }
  }

  return (
    <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
      <div className={s.inputsBox} style={{ height: popupAuth ? '' : '206px' }}>
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
            {...register('password')}
            className={s.input}
            type="password"
            placeholder="Password"
          />
          <p className={s.error}>{errors.password?.message}</p>
        </label>
      </div>

      <Button type="submit">{isLoading ? 'Loading...' : 'Log in'}</Button>
    </form>
  )
}

export default LoginForm
