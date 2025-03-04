import { ChangeEvent, FormEvent, useState } from 'react'
import Button from '../ui/Button'
import Input from '../ui/Input'
import s from './LoginForm.module.scss'

type LoginFormProps = {
  popupAuth?: boolean
}

function LoginForm({ popupAuth }: LoginFormProps) {
  const [error, setError] = useState('')
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }))
  }

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()
    console.log('Data form:', formData)
    if (formData.email === '') setError('name is not empty')
  }

  return (
    <form className={s.form} onSubmit={handleSubmit}>
      <div className={s.inputsBox} style={{ height: popupAuth ? '' : '206px' }}>
        <Input
          type="email"
          name="email"
          placeholder="Email address"
          placeholdercolor="#1d1e2166"
          value={formData.email}
          onChange={handleInputChange}
          error={error}
        />
        <Input
          type="password"
          name="password"
          placeholder="Password"
          placeholdercolor="#1d1e2166"
          value={formData.password}
          onChange={handleInputChange}
          error={error}
        />
      </div>
      <Button type="submit">Log in</Button>
    </form>
  )
}

export default LoginForm
