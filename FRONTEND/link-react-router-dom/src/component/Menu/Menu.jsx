// import { Link } from "react-router-dom";
import style from './Menu.module.css'
import { NavLink } from "react-router-dom";

let menuList =  [
    {
        name : 'Home',
        link : '/'
    },
    {
        name : 'About',
        link : 'about'
    },
    {
        name : 'Portfolio',
        link : 'portfolio'
    },
    {
        name : 'ContactUs',
        link : 'contactus'
    }
]




const Menu = ()=>{
   return(
    menuList.map((item,i)=>{
        return(
            <li key={i} >
                <NavLink 
                    style={({ isActive}) => {
                        return {
                          color: isActive ? "pink" : "white"
                        };
                    }}
                    // className={({ isActive, isPending }) => {
                    //     return isActive ? "active" : isPending ? "pending" : "";
                    // }}
                    to={item.link} >
                        {item.name}
                </NavLink>
            </li>
        )
    })
   )
}

export default Menu