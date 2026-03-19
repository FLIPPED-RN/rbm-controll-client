import { useNavigate } from 'react-router'
import RBMLogo from '../assets/rbm.png'
import { Spinner } from '../components/ui/spinner'
import { useEffect } from 'react'

export default function LoadingPage() {
	const navigate = useNavigate()

	useEffect(()=>{
		const timer = setTimeout(()=>{
			navigate('/login')
		}, 5000)
		return () => clearTimeout(timer)
	}, [navigate])

	return (
		<div className='h-full'>
			<div className='flex flex-col items-center justify-between h-full py-25'>
				<img src={RBMLogo} alt="RBM LOGO" className='size-60'/>
				<Spinner 
					className='size-10'
				/>
			</div>
		</div>
	)
}