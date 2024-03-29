import Menu from '../Menu/Menu'
import style from './Header.module.css'


const Header = () => {
    return(
        <header className={style.header}>
        <nav>            
            <ul className={style.dropdown}>
                <Menu className={style.menu}/>
            </ul>
        </nav>
    </header>

    )
}

export default Header