import { GetStarted } from '../GetStarted/GetStarted'
import './CallToAction.css'

export const CallToAction = () => {
  return (
    <section className='callToAction'>
      <h4 className='callToAction_title'>Boots your links todays</h4>
      <GetStarted />
    </section>
  )
}