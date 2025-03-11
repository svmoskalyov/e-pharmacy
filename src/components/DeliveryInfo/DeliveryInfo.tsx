import { SubmitHandler, useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { toast } from 'react-toastify'
import { useCartStore } from '../../stores/cartStore'
import Button from '../ui/Button'
import s from './DeliveryInfo.module.scss'

interface DeliveryInfoValue {
  name: string
  email: string
  phone: string
  address: string
  paymentMethod: string
  totalAmount?: number
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
  phone: yup.string().min(8).max(18).required('phone is required'),
  address: yup.string().min(2).max(64).required('address is required'),
  paymentMethod: yup.string().required('Choice is a required field')
})

function DeliveryInfo() {
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<DeliveryInfoValue>({
    resolver: yupResolver(schema)
  })
  const { cart, setCart } = useCartStore()

  const totalAmount = cart
    .reduce(
      (total, product) => total + parseFloat(product.price) * product.buyCount,
      0
    )
    .toFixed(2)

  const onSubmit: SubmitHandler<DeliveryInfoValue> = data => {
    if (totalAmount === '0.00') {
      return toast.warning('add product to cart')
    } else {
      const newData = { ...data, totalAmount }
      console.log('order sended: ', newData)
      toast.success('order sended')
      setCart([])
      reset()
    }
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

      <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
        <div className={s.inputsBox}>
          <label className={s.label}>
            <span>Name</span>
            <input
              {...register('name')}
              className={s.input}
              placeholder="Enter text"
            />
            <p className={s.error}>{errors.name?.message}</p>
          </label>

          <label className={s.label}>
            <span>Email</span>
            <input
              {...register('email')}
              className={s.input}
              placeholder="Enter text"
            />
            <p className={s.error}>{errors.email?.message}</p>
          </label>

          <label className={s.label}>
            <span>Phone</span>
            <input
              {...register('phone')}
              className={s.input}
              placeholder="Enter text"
            />
            <p className={s.error}>{errors.phone?.message}</p>
          </label>

          <label className={s.label}>
            <span>Address</span>
            <input
              {...register('address')}
              className={s.input}
              placeholder="Enter text"
            />
            <p className={s.error}>{errors.address?.message}</p>
          </label>
        </div>
        <span className={s.line}></span>

        <div className={s.wrapBox}>
          <div className={s.titleBox}>
            <h3 className={s.title}>Payment method</h3>
            <p className={s.subtitle}>
              You can pay us in a multiple way in our payment gateway system.
            </p>
          </div>

          <div className={s.radioGroup}>
            <label className={s.radioLabel}>
              <input
                {...register('paymentMethod')}
                type="radio"
                value="Cash On Delivery"
                className={s.radioInput}
              />
              <span className={s.radioText}>Cash On Delivery</span>
            </label>

            <label className={s.radioLabel}>
              <input
                {...register('paymentMethod')}
                type="radio"
                value="Bank"
                className={s.radioInput}
              />
              <span className={s.radioText}>Bank</span>
            </label>
            <p className={s.radioError}>{errors.paymentMethod?.message}</p>
          </div>
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
              <span className={s.rupee}>&#x9F3;</span>
              {totalAmount}
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
