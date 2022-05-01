import React,{useState,useEffect} from 'react'
import './App.css';
import axios from 'axios'
import bootstrap from 'bootstrap/dist/css/bootstrap.min.css';
import {useParams } from "react-router-dom";

function Details() {
    const {id}=useParams();
    const[details,setDetails]=useState({});
    useEffect(()=>{
        const getDetail=async()=>{
            const res=await axios.get(`https://reqres.in/api/users/${id}`)
            setDetails(res.data.data)
        }
        getDetail();
    },[id])
  return (
      <>
    <div className="container">
        <h3>User Detail</h3>
        <img className="userDetailImage" src={details.avatar} alt="user Image"/>
        <p>First Name : {details.first_name}</p>
        <p>Last Name : {details.last_name}</p>
        <p>Email : {details.email}</p>
    </div>
    <hr/>
    </>
  )
}

export default Details