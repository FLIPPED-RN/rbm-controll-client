import RBMLogo from '../assets/rbm.png'
import { Button } from '../components/ui/button'

export default function LoadingPage() {
	return (
		<div>
			<div>
				<img src={RBMLogo} alt="лалалал" className=''/>
				<Button>Hello!</Button>
			</div>
		</div>
	)
}