import {useState} from 'react';import api from '../../services/api';
export default function EmployeeForm(){const[f,setF]=useState({name:'',email:'',department:''});
const submit=async(e)=>{e.preventDefault();await api.post('/employees',f);alert('Employee Added');};
return <form onSubmit={submit}><input placeholder='Name' onChange={e=>setF({...f,name:e.target.value})}/><input placeholder='Email' onChange={e=>setF({...f,email:e.target.value})}/><input placeholder='Department' onChange={e=>setF({...f,department:e.target.value})}/><button>Add</button></form>}