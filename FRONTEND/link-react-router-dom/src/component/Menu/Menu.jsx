import { Link } from "react-router-dom";
import style from './Menu.module.css'

let menuList =  [
    {
        name : 'Home',
        link : '/'
    },
    {
        name : 'About',
        link : '/about'
    },
    {
        name : 'Portfolio',
        link : '/portfolio'
    },
    {
        name : 'ContactUs',
        link : '/contactus'
    }
]

// const li = {
//     margin: "5px 25px",
//     padding: "10px",
//     color : "white"
// }



const Menu = ()=>{
   return(
    menuList.map((item,i)=>{
        return(
            <li key={i} className={style.li}>
                <Link className={style.a} to={item.link}>{item.name}</Link>
            </li>
        )
    })
   )
}

export default Menu