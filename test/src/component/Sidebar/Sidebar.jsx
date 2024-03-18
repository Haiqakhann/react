import { Link } from "react-router-dom"

const list =[    
    {
        name : 'HOME',
        link : '/'
    },

    {
        name : 'TASK1',
        link : '/task1'
    },
    
    {
        name : 'TASK2',
        link : '/task2'
    },
    
    {
        name : 'TASK3',
        link : '/task3'
    },
    
    {
        name : 'TASK4',
        link : '/task4'
    },
    
    {
        name : 'TASK5',
        link : '/task5'
    }
]


const Sidebar =()=>{
    return(
        <>
            <ul>
                {
                    list.map((item,key)=>{
                        return (
                            <Link key={key} to={item.link}>{item.name}</Link> 
                        )          
                    })
                }
            
            </ul>
            
        </>
    )
}

export default Sidebar