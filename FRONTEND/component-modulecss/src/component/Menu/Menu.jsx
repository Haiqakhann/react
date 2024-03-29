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
        name : 'MatchCenter',
        link : '/matchcenter'
    },
    {
        name : 'News',
        link : '/news'
    },
    {
        name : 'Gallery',
        link : '/gallery'
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
                {item.name}
            </li>
        )
    })
   )
}

export default Menu