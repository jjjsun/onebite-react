import './Header.css'


const Header = () => {
    return (
        <div className="Header">
            <div className="today">
                <h3>오늘은 📆</h3>
            </div>
            <div className="date">
                <h1>{new Date().toDateString()}</h1>
            </div>
            
        </div>
    )
}

export default Header;