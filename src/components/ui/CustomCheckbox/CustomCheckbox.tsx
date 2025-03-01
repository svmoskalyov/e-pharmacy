import { useState } from 'react'
import styles from './CustomCheckbox.module.scss'

interface CustomCheckboxProps {
  label: string
  onChange: (isChecked: boolean) => void
  initialChecked?: boolean
}

function CustomCheckbox({
  label,
  onChange,
  initialChecked = false
}: CustomCheckboxProps) {
  const [isChecked, setIsChecked] = useState(initialChecked)

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked)
    onChange(!isChecked)
  }

  return (
    <label className={styles.checkboxContainer}>
      <input
        type="checkbox"
        checked={isChecked}
        onChange={handleCheckboxChange}
        className={styles.checkboxInput}
      />
      <span className={styles.checkboxLabel}>{label}</span>
    </label>
  )
}

export default CustomCheckbox
