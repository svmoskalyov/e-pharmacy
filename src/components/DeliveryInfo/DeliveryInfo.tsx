import { ChangeEvent, FormEvent, useState } from 'react'
import Input from '../ui/Input'
import s from './DeliveryInfo.module.scss'
// import CustomCheckbox from '../ui/CustomCheckbox'
import RadioButton from '../ui/RadioButton'

function DeliveryInfo() {
  const [error, setError] = useState('')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    option: ''
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

  // const [checkboxStates, setCheckboxStates] = useState({
  //   checkbox1: false,
  //   checkbox2: true
  // })

  // const handleCheckboxChange = (id: string, isChecked: boolean) => {
  //   setCheckboxStates({
  //     ...checkboxStates,
  //     [id]: isChecked
  //   })
  //   console.log(`${id}:`, isChecked)
  // }

  const [selectedOption, setSelectedOption] = useState<string>('')
  console.log(selectedOption)

  const handleOptionChange = (value: string) => {
    setSelectedOption(value)
    console.log('Choised:', value)
    setFormData({ ...formData, option: value })
  }

  return (
    <div className={s.deliveryInfo}>
      <h3>Enter shipping info</h3>
      <p>
        Enter your delivery address where you get the product. You can also send
        any other location where you send the products.
      </p>

      <div>
        <form onSubmit={handleSubmit}>
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
          />
          <Input
            type="tel"
            label="Phone"
            name="phone"
            placeholder="Enter text"
            value={formData.phone}
            onChange={handleInputChange}
          />
          <Input
            type="text"
            label="Address"
            name="address"
            placeholder="Enter text"
            value={formData.address}
            onChange={handleInputChange}
          />
          <p>---</p>
          <h3>Payment method</h3>
          <p>You can pay us in a multiple way in our payment gateway system.</p>
          
          {/* <div>
            <CustomCheckbox
              label="check-1"
              onChange={isChecked =>
                handleCheckboxChange('checkbox1', isChecked)
              }
              initialChecked={checkboxStates.checkbox1}
            />
            <CustomCheckbox
              label="check-2"
              onChange={isChecked =>
                handleCheckboxChange('checkbox2', isChecked)
              }
              initialChecked={checkboxStates.checkbox2}
            />
          </div> */}

          <div>
            <RadioButton
              options={['one', 'two', 'three']}
              onChange={handleOptionChange}
            />
          </div>
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  )
}

export default DeliveryInfo
