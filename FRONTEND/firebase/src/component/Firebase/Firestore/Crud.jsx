import { db } from "../../../config/firebase-config";
import { collection, addDoc,getDocs ,deleteDoc,doc,setDoc} from "firebase/firestore"; 
import { useEffect, useState } from "react";

const Crud = ()=>{

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
  
  const Onchange=(e)=>{
      const {name,value}=e.target
      setFormdata({...formdata ,[name]:value})  
  }

  const Onsumbit  =async (e)=>{
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

  const add = async(data)=>{
    try {
      await addDoc(collection(db, "employees"), {
        name:data.name,
        email:data.email,
        department:data.department,
        salary:data.salary      
      });        
    } 
    catch (e) {
      console.error("Error adding document: ", e);
    } 
  }
      
  useEffect(()=>{
    const read = async()=>{
      try {
          const querySnapshot = await getDocs(collection(db, "employees"));
          setData(querySnapshot.docs)
        } 
      catch (e) {
          console.error("Error reading document: ", e);
        } 
  }
    read()
  }, [data])

  const deletee = async(e)=>{
    try {
      const id = e.target.value
      console.log(id)
      await deleteDoc(doc(db, "employees", id));
    } 
    catch (e) {
        console.error("Error deleting document: ", e);
    } 
  }
  
  const update = (item)=>{
    setCreate(!create)
    setEdit(!edit)
    setId(item.id)
    console.log(item)
    setFormdata(
      {
        name:item.data().name,
        email:item.data().email,
        department:item.data().department,
        salary:item.data().salary
      }
    )
  }


  
  const handleEdit = async(data)=>{
    try {
      setDoc(doc(db, "employees", id), {
        name:data.name,
        email:data.email,
        department:data.department,
        salary:data.salary
      });
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
                data && data.map((item,i)=>{
                  return(
                    <tr key={i}>
                      <td >
                        {item.data().name}
                      </td>
                      <td >
                        {item.data().email}
                      </td>
                      <td >
                        {item.data().department}
                      </td>
                      <td >
                        {item.data().salary}
                      </td>
                      <td>
                        <button value={item.id} onClick={deletee}>delete</button>  
                      </td>
                      <td>
                        <button value={item.id} onClick={()=>update(item)}>update</button>  
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
export default Crud