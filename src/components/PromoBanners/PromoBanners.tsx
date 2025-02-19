import SectionWrapper from '../SectionWrapper'
import s from './PromoBanners.module.scss'

const banners = [
  { title: 'Huge Sale', discount: '70', btnName: 'Shop now' },
  {
    title: 'Secure delivery',
    discount: '100',
    btnName: 'Read more'
  },
  { title: 'Off', discount: '35', btnName: 'Shop now' }
]

function PromoBanners() {
  return (
    <SectionWrapper>
      <ul className={s.list}>
        {banners.map((e, i) => (
          <li className={s.item} key={i}>
            <div className={s.box}>
              <div className={s.number}>{i + 1}</div>
              <h3 className={s.title}>{e.title}</h3>
            </div>
            <div className={s.box}>
              <span className={s.discount}>{e.discount}%</span>
              <button
                className={s.btn}
                onClick={() => console.log(`${e.discount}`)}
              >
                {e.btnName}
              </button>
            </div>
          </li>
        ))}
      </ul>
    </SectionWrapper>
  )
}

export default PromoBanners
