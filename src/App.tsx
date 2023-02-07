import { FormToShorten } from './components/FormToShorten'
import { getShortenLink } from './services/get-shorten-link'

function App() {
	return (
		<main>
			<FormToShorten shorteLink={getShortenLink} />
		</main>
	)
}

export default App