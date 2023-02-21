import { useSelector } from 'react-redux'

import { Header } from './components/Header/Header'
import { Hero } from './components/Hero/Hero'
import { Form } from './components/Form/Form'
import { ListOfLinks } from './components/ListOfLinks/ListOfLinks'
import { CallToAction } from './components/CallToAction/CallToAction'

import { RootState } from './context/app/store'
import { getShortenLink } from './services/get-shorten-link'
import { Footer } from './components/Footer/Footer'

function App() {
  const links = useSelector((state: RootState) => state.links.value)

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Form shorteLink={getShortenLink} />
        <ListOfLinks links={links} />
        <CallToAction />
        <Footer />
      </main>
    </>
  )
}

export default App
