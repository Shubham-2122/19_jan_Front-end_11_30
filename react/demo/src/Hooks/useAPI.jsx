import axios from 'axios'
import React, { useEffect, useState } from 'react'

function useAPI(Api) {

    const [user,setuser] = useState([])
  
    useEffect(()=>{
        fetchdata()
    },[])

    const fetchdata=async()=>{
        const res = await axios.get(Api);
        setuser(user)
    }

    return {user}

}

export default useAPI
