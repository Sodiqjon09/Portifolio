import React, { useEffect, useState } from 'react'
import axios from 'axios';
export default function FetchData() {
    const [data, setData] = useState([]);

    const fetchData = async ()=>{
        const API_URL = 'http://localhost:3000/users'
        // fetch(API_URL)
        //     .then(res=>res.json())
        //     .then(data=>{
        //         console.log(data);
        //         setData(data);
        //     })

       const res = await axios.get(API_URL);
       console.log(res.data);
       setData(res.data)
    }

    useEffect(()=>{
        fetchData();
    },[])
  return (
    <h1>{data?.map((item, index)=>{
        return <div key={index}><span>{item.id}</span><br /></div>
    })}</h1>

  )
}
