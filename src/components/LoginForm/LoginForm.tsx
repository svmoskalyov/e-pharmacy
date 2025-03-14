import { useLocation, useNavigate } from 'react-router'
import { SubmitHandler, useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { toast } from 'react-toastify'
import { useAuthStore } from '../../stores/authStore'
import { loginUser } from '../../services/api'
import useMediaQuery from '../../hooks/useMediaQuery'
import Button from '../ui/Button'
import Spinner from '../ui/Spinner'
import s from './LoginForm.module.scss'

type LoginFormProps = {
  popup?: boolean
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

function LoginForm({ popup }: LoginFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<LoginFormValues>({
    resolver: yupResolver(schema)
  })
  const navigate = useNavigate()
  const { pathname } = useLocation()
  const { isLoading, error } = useAuthStore()
  const isTablet = useMediaQuery('(min-width: 768px)')
  const changeWidth = popup ? '100%' : '280px'

  if (error !== null) {
    toast.error(error)
  }

  const onSubmit: SubmitHandler<LoginFormValues> = async data => {
    const logined = await loginUser(data)
    if (logined.success) {
      toast.success(logined.message)
      if (popup) {
        navigate(pathname)
      } else {
        navigate('/')
      }
    } else {
      toast.error(logined.message)
    }
  }

  return (
    <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
      <div
        className={s.inputsBox}
        style={{ height: popup ? '' : isTablet ? '102px' : '206px' }}
      >
        <label className={s.label} style={{ width: `${changeWidth}` }}>
          <input
            {...register('email')}
            className={s.input}
            placeholder="Email address"
          />
          <p className={s.error}>{errors.email?.message}</p>
        </label>

        <label className={s.label} style={{ width: `${changeWidth}` }}>
          <input
            {...register('password')}
            className={s.input}
            type="password"
            placeholder="Password"
          />
          <p className={s.error}>{errors.password?.message}</p>
        </label>
      </div>
      <div style={{ width: `${changeWidth}` }}>
        <Button type="submit">{isLoading ? <Spinner /> : 'Log in'}</Button>
      </div>
    </form>
  )
}

export default LoginForm
