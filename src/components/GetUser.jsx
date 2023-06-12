import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom'

export const GetUser = () => {
    const id = useParams().id
    const [data, setData] = useState([])

    useEffect(() => {
        const fetchData = async () => {

            const res = await axios.get("https://node5.onrender.com/user/user/" + id)
            console.log(res.data.data);
            setData(res.data.data)
        }
        fetchData();

    }, [])

    return (
        <div>
            <h2>Name : {data.name}</h2>
            <h2>Email : {data.email}</h2>
            <h2>Age : {data.age}</h2>
            <h2>isActive : {data.isActive ? "Active" : "Inactive"}</h2>
            <Link to={"/getallusers"} className='btn btn-dark' >Go Back</Link>
        </div>
    )
}
