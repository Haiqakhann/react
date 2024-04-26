import { useState } from 'react';
import { storage } from '../../../config/firebase-config';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';

const Uploadfile = ()=>{
    
    const [file, setFile] = useState(null);

    const handleChange = (e) => {
    if (e.target.files[0]) {
        setFile(e.target.files[0]);
    }
    };

    const handleUpload =async (e) => {
        if (file) {
            try {
                const storageRef = ref(storage, `images/${file.name}`);
                const value = uploadBytes(storageRef, file)
                console.log('Uploaded a blob or file!');
                const url = await getDownloadURL(value.ref)
                console.log(`file available at ${url}`)
    
            } catch (error) {
                console.log(error.message);
                
            }                
        }
    };
    return(
        <div>
            <input type="file" onChange={handleChange} />
            <button onClick={handleUpload}>upload</button>            
        </div>
    )

}

export default Uploadfile