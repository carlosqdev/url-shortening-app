import { IFeature } from './types'
import imgBrand from './assets/images/icon-brand-recognition.svg'
import imgDetailed from './assets/images/icon-detailed-records.svg'
import imgFully from './assets/images/icon-fully-customizable.svg'

export const features: IFeature[] = [
  {
    img: imgBrand,
    title: 'Brand Recognition',
    description: 'Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content.'
  },
  {
    img: imgDetailed,
    title: 'Detailed Records',
    description: 'Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.'
  },
  {
    img: imgFully,
    title: 'Fully Customizable',
    description: 'Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.'
  }
]
