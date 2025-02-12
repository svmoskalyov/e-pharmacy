import logow1x from '../../../assets/images/logo-w1x.png'
import logow2x from '../../../assets/images/logo-w2x.png'
import logog1x from '../../../assets/images/logo-g1x.png'
import logog2x from '../../../assets/images/logo-g2x.png'
import s from './Logo.module.scss'

type LogoProps = {
  place?: string
}

function Logo({ place }: LogoProps) {
  return (
    <div className={s.logo}>
      <div
        className={s.img}
        style={
          {
            '--logo1x': `url(${place === 'home' ? logow1x : logog1x})`,
            '--logo2x': `url(${place === 'home' ? logow2x : logog2x})`
          } as React.CSSProperties
        }
      ></div>
      <span
        className={s.text}
        style={
          {
            color:
              place === 'home' ? 'var(--text-secondary)' : 'var(--text-primary)'
          } as React.CSSProperties
        }
      >
        E-Pharmacy
      </span>
    </div>
  )
}

export default Logo
