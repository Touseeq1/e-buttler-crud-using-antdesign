import React from 'react'
import { useState} from 'react'
import { useNavigate } from "react-router-dom";
import {useDispatch, useSelector} from "react-redux"
import { addContact } from '../redux/Action'
import { Link } from "react-router-dom";
const Addbuilding = () => {
  const navigate = useNavigate()
  const mystate = useSelector((state1)=> state1.ChangeThenumber)
 const dispatch = useDispatch()
 const [building, setBuilding]=useState("")
 const [countries, setCountries]=useState("")
 const [status, setStatus]=useState("")
    // const [inputField, setInputField] = useState({building: "", countries: "", status: ""})
    // const inputChange = (e) => {
    //   setInputField({ ...inputField, [e.target.name]: e.target.value }) 
    //   document.getElementById("form").reset();}
    const data = {id:mystate[mystate.length-1].id+1 ,building, countries,status}
    function handleSubmit(e) {
      e.preventDefault();
      dispatch(addContact(data))}
    return (
      <div>
        <div className='row'>
          <div className='col-12'>
            <div className="card">
              <div className="card-body">
                    <form onSubmit={handleSubmit}>
                      <label className="form-label fw-bold">General information</label>
                      <div className="row g-3 align-items-center">
                        <div className="col-12">
                          <input type="text" className="form-control" placeholder='Enter Building name' name="building" onChange={(e)=>setBuilding(e.target.value)}/>
                        </div>
                        <div className="col-6">
                          <input type="text" className="form-control" placeholder='Enter countries' name="countries" onChange={(e)=>setCountries(e.target.value)}/>
                        </div>
                        <div className="col-6">
                          <input type="text" className="form-control" placeholder='Enter status' name="status" onChange={(e)=>setStatus(e.target.value)} />
                        </div>
                      </div>
                      <div className='row'>
                        <div className='col-6'>
                          <button type="submit" className="btn btn-primary mt-4 form-control">addBuilding</button>
                        </div>
                        <div className='col-6'>
                        <Link  to="/table" className="btn btn-primary mt-4 form-control"> Back</Link>
                      </div>
                      </div>
                    </form>
                 
              </div>
            </div>
          </div>
        </div>
      </div>)}
  export default Addbuilding