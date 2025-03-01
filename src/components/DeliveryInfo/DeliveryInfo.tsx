import { ChangeEvent, FormEvent, useState } from 'react'
import Input from '../ui/Input'
import s from './DeliveryInfo.module.scss'
import RadioButton from '../ui/RadioButton'
import Button from '../ui/Button'

function DeliveryInfo() {
  const [error, setError] = useState('')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    option: 'Cash On Delivery'
  })

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }))
  }

  const handleOptionChange = (value: string) => {
    setFormData({ ...formData, option: value })
  }

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()
    console.log('Data form:', formData)
    if (formData.name === '') setError('name is not empty')
  }

  return (
    <div className={s.deliveryInfo}>
      <div className={s.titleBox}>
        <h3 className={s.title}>Enter shipping info</h3>
        <p className={s.subtitle}>
          Enter your delivery address where you get the product. You can also
          send any other location where you send the products.
        </p>
      </div>

      <form className={s.form} onSubmit={handleSubmit}>
        <div className={s.inputsBox}>
          <Input
            type="text"
            label="Name"
            name="name"
            placeholder="Enter text"
            value={formData.name}
            onChange={handleInputChange}
            error={error}
          />
          <Input
            type="email"
            label="Email"
            name="email"
            placeholder="Enter text"
            value={formData.email}
            onChange={handleInputChange}
            error={error}
          />
          <Input
            type="tel"
            label="Phone"
            name="phone"
            placeholder="Enter text"
            value={formData.phone}
            onChange={handleInputChange}
            error={error}
          />
          <Input
            type="text"
            label="Address"
            name="address"
            placeholder="Enter text"
            value={formData.address}
            onChange={handleInputChange}
            error={error}
          />
        </div>
        <span className={s.line}></span>

        <div className={s.wrapBox}>
          <div className={s.titleBox}>
            <h3 className={s.title}>Payment method</h3>
            <p className={s.subtitle}>
              You can pay us in a multiple way in our payment gateway system.
            </p>
          </div>

          {/* <div className={s.radioBox}> */}
          <RadioButton
            options={['Cash On Delivery', 'Bank']}
            onChange={handleOptionChange}
          />
          {/* </div> */}
        </div>
        <span className={s.line}></span>

        <div className={s.wrapBox}>
          <div className={s.titleBox}>
            <h3 className={s.title}>Order details </h3>
            <p className={s.subtitle}>
              Shipping and additionnal costs are calculated based on values you
              have entered.
            </p>
          </div>
          <div className={s.order}>
            <span>Total:</span>
            <span>
              <span className={s.rupee}>&#x9F3;</span>122.00
            </span>
          </div>
          <div>
            <Button type="submit">Place order</Button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default DeliveryInfo
