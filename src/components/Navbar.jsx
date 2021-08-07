import {useState} from 'react'
import NavItems from "./SharedComponets/NavItems";
import {CgMenuRight, CgMenuLeft} from 'react-icons/cg'

function Navbar() {

    const [show, setShow] = useState(false)

    const onclick = () => {
        show === false ? setShow(true) : setShow(false)
    }

    window.onscroll = () => {
        setShow(false)
    }

    return (
        <nav className="w-full bg-white z-50 py-4 transition duration-1000">
            <div className="w-11/12 flex items-center justify-between m-auto">

                

                <ul className="fixed top-0 right-0 flex flex-col h-screen w-max">
                    <NavItems href='#Home'>Home</NavItems>
                    <NavItems href='#Home'>Home</NavItems>
                    <NavItems href='#Home'>Home</NavItems>
                    <NavItems href='#Home'>Home</NavItems>
                    <NavItems href='#Home'>Home</NavItems>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
