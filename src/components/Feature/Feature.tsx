import { IFeature } from '../../types'
import './Feature.css'

export const Feature = ({ img, title, description }: IFeature) => {
  return (
    <li className='feature'>
      <figure>
        <img width={40} height={40} src={img} alt={`Image of ${title}`} />
      </figure>
      <div className='feature_wrapper'>
        <h3 className='feature_title'>{title}</h3>
        <p className='feature_description' role='paragraph'>
          {description}
        </p>
      </div>
    </li>
  )
}
