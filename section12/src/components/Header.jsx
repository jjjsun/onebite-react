import './Header.css'

const Header = ({title, leftChild, rightChid}) => {
    return (
        <header className='Header'>
            <div className='header_left'>{leftChild}</div>
            <div className='header_center'>{title}</div>
            <div className='header_right'>{rightChid}</div>
        </header>
    )
}

export default Header;