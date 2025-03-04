import { ChangeEvent, FormEvent, useState } from 'react'
import Button from '../ui/Button'
import Input from '../ui/Input'
import s from './RegisterForm.module.scss'

function RegisterForm() {
  const [error, setError] = useState('')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
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
    if (formData.name === '') setError('name is not empty')
  }

  return (
    <form className={s.form} onSubmit={handleSubmit}>
      <div className={s.inputsBox}>
        <Input
          type="text"
          name="name"
          placeholder="User Name"
          placeholdercolor="#1d1e2166"
          value={formData.name}
          onChange={handleInputChange}
          error={error}
        />
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
          type="tel"
          name="phone"
          placeholder="Phone number"
          placeholdercolor="#1d1e2166"
          value={formData.phone}
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
      <Button type="submit">Register</Button>
    </form>
  )
}

export default RegisterForm
