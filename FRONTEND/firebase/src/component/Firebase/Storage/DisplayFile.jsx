import  { useEffect, useState } from 'react';
import { storage } from '../../../config/firebase-config';
import { ref, getDownloadURL } from 'firebase/storage';


function DisplayImage() {
  const [url, setUrl] = useState("");

  useEffect(() => {
    const fetchImage = async () => {
      const reff =  ref(storage,'images/Screenshot 2024-04-24 152154.png')
      const urll = await getDownloadURL(reff)
      setUrl(urll)
    }
    fetchImage();
  }, []);

  
  return (
    <div>
      <img src={url} alt="Uploaded" />
    </div>
  );
}

export default DisplayImage;
