const Btn = ({children, href}) => {
    return (
        <a href={`${href}`} className='btn'>
            {children}
        </a>
    )
}

export default Btn
