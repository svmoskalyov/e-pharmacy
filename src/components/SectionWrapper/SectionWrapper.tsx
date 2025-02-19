import { ReactNode } from 'react'
import s from './SectionWrapper.module.scss'

interface SectionWrapperProps {
  children: ReactNode
}

function SectionWrapper({ children }: SectionWrapperProps) {
  return <section className={s.sectionWrapper}>{children}</section>
}

export default SectionWrapper
