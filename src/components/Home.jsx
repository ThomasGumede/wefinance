import { useContext } from "react"
import DishItems from "./SharedComponets/DishItems"
import {stateContext} from '../stateManager/stateContext'

const Home = () => {

    const state = useContext(stateContext)

    return (
        <div id='#home' className='relative space-y-6 w-full sm:flex items-center justify-between my-16'>
            
        </div>
    )
}

export default Home
