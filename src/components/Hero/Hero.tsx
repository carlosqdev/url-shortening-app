import { GetStarted } from '../GetStarted/GetStarted'
import './Hero.css'

export const Hero = () => {
  return (
    <section className='hero'>
      <div className='hero_wrapper'>

        <div className='hero_illustration'>
        </div>

        <div className='hero_content'>

          <h1 className='hero_heading'>More than just shorter links</h1>

          <p className='hero_paragraph' role='paragraph'>
        Build your brand’s recognition and get detailed insights on how your links are performing.
          </p>

          <GetStarted />
        </div>
      </div>
    </section>
  )
}