import { realtime } from "../../../config/firebase-config";
import { ref, child, push,get, update, remove, set} from "firebase/database"; 
import { useEffect, useState } from "react";

const RCrud = ()=>{

  const [formdata, setFormdata] = useState({
    name:"",
    email:"",
    department:"",
    salary:""
  });
  const [data,setData] = useState()
  const [edit,setEdit]=useState(false)
  const [id,setId]=useState(false)
  const [create,setCreate] = useState(false)

  const dbRef= ref(realtime)
  
  const Onchange=(e)=>{
      const {name,value}=e.target
      setFormdata({...formdata ,[name]:value})  
  }

  const Onsumbit  = (e)=>{
      e.preventDefault()

      if(edit) handleEdit(formdata)
      else  add(formdata)
      setFormdata(
        {
          name:"",
          email:"",
          department:"",
          salary:""
        }
      )
      setCreate(!create)
      setEdit(!edit)
  }

  const add = (Data)=>{
    const postData = {
      Data
    };

    // Get a key for a new Post.
    const newPostKey = push(child(ref(realtime), 'employees/')).key;

    const updates = {};
    updates['/employees/' + newPostKey] = postData;

    return update(ref(realtime), updates);
  }
      
  useEffect(() => {
    get(child(dbRef, `employees/`)).then((snapshot) => {
        if (snapshot.exists()) {
            setData(snapshot.val());
        } else {
            console.log("No data available");
        }
    }).catch((error) => {
        console.error('error while reading',error);
    });
});

  const deletee = async(e)=>{
    try {
      const id = e.target.value
      console.log(id)
      await remove(ref(realtime, `employees/${id}`))
    } 
    catch (e) {
        console.error("Error deleting document: ", e);
    } 
  }
  
  const updatee = (item)=>{
    setCreate(!create)
    setEdit(!edit)
    setId(item)
    console.log(item)
    setFormdata(
      {
        name:data[item].Data.name,
        email:data[item].Data.email,
        department:data[item].Data.department,
        salary:data[item].Data.salary
      }
    )
  }


  
  const handleEdit = async(Data)=>{
    console.log(id,Data)
    try {
      await update(ref(realtime, `employees/${id}`), Data)
      console.log('data updated successfully')
    }
    catch (e) {
      console.error("Error editing document: ", e);
    }
  }

  if(create){
    return(
      <div>  
        <h1>enter employee record</h1>
        <form onSubmit={Onsumbit}>
          <input type="text" name='name' value={formdata.name} placeholder="enter name"  onChange={Onchange}  />
          <input type="email" name='email' value={formdata.email} placeholder='enter email' onChange={Onchange} />
          <input type="text" name='department' value={formdata.department} placeholder="enter department"  onChange={Onchange}  />
          <input type="number" name='salary'  value={formdata.salary} placeholder="enter salary"  onChange={Onchange}  />
          <input type="submit" value={edit?'update':'create'} />
        </form>   
      </div>  
    )
  }
  else{
    return(
      <div>
        <button 
          onClick={
            ()=>setCreate(!create)
          }
        >
          add employee
        </button>      
        <div>
          
          <table>
            <thead>
              <tr>
                <th>name</th>
                <th>email</th>
                <th>department</th>
                <th>salary</th>
                <th>delete</th>
                <th>update</th>
              </tr>
            </thead>

            <tbody>          
              {
                data && Object.keys(data).map((item,i)=>{
                  return(
                    <tr key={i}>
                      <td >
                        {/* {item} */}
                        {data[item].Data.name}
                      </td>
                      <td >
                        {data[item].Data.email}
                      </td>
                      <td >
                        {data[item].Data.department}
                      </td>
                      <td >
                        {data[item].Data.salary}
                      </td>
                      
                      <td>
                        <button value={item} onClick={deletee}>delete</button>  
                      </td>
                      <td>
                        <button value={item} onClick={()=>updatee(item)}>update</button>  
                      </td>
                    </tr>
                  )
                }) 
              }
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}
export default RCrud