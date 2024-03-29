import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import  { faFacebookF ,faInstagram,faTwitter,faGoogle,faYoutube} from '@fortawesome/free-brands-svg-icons'

import style from './Icon.module.css'

// import { Link } from "react-router-dom";

const list = [
    {
        name : faFacebookF,
        link : 'www.facebook.com'
    },
    {
        name : faInstagram,
        link : 'www.instagram.com'
    },
    {
        name : faTwitter,
        link : 'www.twitter.com'
    },
    {
        name : faGoogle,
        link : 'www.google.com'
    },
    {
        name : faYoutube,
        link : 'www.youtube.com'
    }
]

const Icon = ()=>{
    return (
        <>
            {
                list.map(item=>{
                    return(    
                    <div className={style.icon}>
                        <a href={item.link} target='blank'  className={style.icona}>
                        <FontAwesomeIcon icon={item.name} />                    
                        </a>    
                    </div>
                    )
                })
            }   
        </>
        )
}

export default Icon