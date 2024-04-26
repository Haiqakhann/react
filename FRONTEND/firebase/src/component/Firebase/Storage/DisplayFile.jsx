import React, { useEffect, useState } from 'react';
import { storage } from '../../../config/firebase-config';


function DisplayFile() {
  const [url, setUrl] = useState("");

  useEffect(() => {
    const fetchImage = async () => {
      const url = await storage.ref('images').child('Screenshot 2024-04-24 152154.png').getDownloadURL();
      setUrl(url);
    };

    fetchImage();
  }, []);

  return (
    <div>
      <img src={url} alt="Uploaded" />
    </div>
  );
}

export default DisplayFile;