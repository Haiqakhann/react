
import style from './Footer.module.css'
import Icon from '../Icon/Icon'
import Menu from '../Menu/Menu'
// import ReactDOM from 'react-dom'



const Footer = ()=>{
    return(
        <footer className={style.footer}>
            <div className={style.iconcontainer}>
                <Icon/>        
            </div>
            <div>
                <ul className={style.dropdown}>
                    <Menu className={style.menu}/>
                </ul>
            </div>
        </footer>

    )
}


export default Footer