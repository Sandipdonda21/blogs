import React, { useState } from 'react'
import app from '../components/fire'
import { collection,getFirestore, getDocs  ,doc} from "firebase/firestore"; 




function Blogs() {
    const [info , setInfo] = useState([]);
    
    const db = getFirestore(app);
    const readData = async()=>{
        const docSnap = await getDocs(collection(db, "blogs")).then((querySnapshot) => {
            console.log(querySnapshot)
        });
        console.log(info)
    }
    readData();
  return (
    <div>Blogs</div>
  )
}

export default Blogs