import { FormToShorten } from './components/FormToShorten/FormToShorten'
import { ListOfLinks } from './components/ListOfLinks/ListOfLinks'
import { getShortenLink } from './services/get-shorten-link'
import { useSelector } from 'react-redux'
import { RootState } from './context/app/store'
import { Header } from './components/Header/Header'

function App() {
  const links = useSelector((state: RootState) => state.links.value)

  return (
    <>
      <Header />
      <main>
        {/* <FormToShorten shorteLink={getShortenLink} />
				<ListOfLinks links={links} /> */}
      </main>
    </>
  )
}

export default App