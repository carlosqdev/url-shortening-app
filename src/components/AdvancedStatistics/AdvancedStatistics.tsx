import { features } from '../../constants'
import { Feature } from '../Feature/Feature'
import './AdvancedStatistics.css'

export const AdvancedStatistics = () => {
  return (
    <section className='advancedStatistics'>
      <header>
        <h2 className='advancedStatistics_title'>Advanced Statistics</h2>
        <p className='advancedStatistics_paragraph' role='paragraph'>
          Track how your links are performing across the web with our advanced
          statistics dashboard.
        </p>
      </header>

      <ul className='advancedStatistics_wrapper'>
        {features?.map((feature) => (
          <Feature
            key={feature.title}
            img={feature.img}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </ul>
    </section>
  )
}
