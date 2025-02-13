import { useCallback, useEffect } from 'react'
import Icon from '../ui/Icon'
import s from './Drawer.module.scss'

interface DrawerProps {
  isOpen: boolean
  onClose: () => void
  children: React.ReactNode
}

function Drawer({ isOpen, onClose, children }: DrawerProps) {
  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.currentTarget === e.target) {
      onClose()
    }
  }

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.code === 'Escape') {
        onClose()
      }
    },
    [onClose]
  )

  useEffect(() => {
    if (!isOpen) return
    window.addEventListener('keydown', handleKeyDown)
    document.documentElement.style.overflow = 'hidden'

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      document.documentElement.style.overflowX = 'hidden'
      document.documentElement.style.overflowY = 'auto'
    }
  }, [handleKeyDown, isOpen])

  return (
    <div
      className={isOpen ? `${s.backdrop} ${s.open}` : `${s.backdrop}`}
      onClick={handleBackdropClick}
    >
      <div className={isOpen ? `${s.drawer} ${s.open}` : `${s.drawer}`}>
        <div className={s.wrapperBtnCloseDrawer}>
          <button aria-label="close drawer" onClick={onClose}>
            <Icon name="close" size="32px" />
          </button>
        </div>
        {children}
      </div>
    </div>
  )
}

export default Drawer
