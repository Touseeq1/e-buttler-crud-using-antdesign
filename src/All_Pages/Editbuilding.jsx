import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import {updataContact } from '../redux/Action'
import {useDispatch, useSelector} from "react-redux"
const Editbuilding = () => {
    const { id } = useParams()
    const dispatch = useDispatch()
    const mystate = useSelector((state1)=> state1.ChangeThenumber)
    const myNewstate = mystate.find((cont) => cont.id=== parseInt(id)); 
    const [building, setBuilding]=useState("")
    const [countries, setCountries]=useState("")
    const [status, setStatus]=useState("")
    useEffect(() => {
        if (myNewstate) {
          setBuilding(myNewstate.building)      // Call Name from Redux
          setCountries(myNewstate.countries)    // Call Email from Redux
          setStatus(myNewstate.status)}         // Call Number from Redux
      }, [myNewstate])
    const data = {id: id, building,countries,status}
    console.log("EditIData", data)
      const updateData=(data)=>{
        console.log("myNewstate", data)
        dispatch(updataContact(data))}
   function formSubmit(e) {
        e.preventDefault();
        updateData(data)}
    return (
        <div>
            <div className='row'>
                <div className='col-12'>
                    <div className="card">
                        <div className="card-body">
                                    <form className='form' onSubmit={formSubmit}>
                                        <label className="form-label fw-bold">Edit General information</label>
                                        <div className="row g-3 align-items-center">
                                            <div className="col-5">
                                                <input type="text" className="form-control" name="id" value={id}/>
                                            </div>
                                            <div className="col-5">
                                                <input type="text" className="form-control" value={building} name="building" onChange={(e)=>setBuilding(e.target.value)} />
                                            </div>
                                            <div className="col-5">
                                                <input type="text" className="form-control" value={countries} name="status" onChange={(e)=>setCountries(e.target.value)} />
                                            </div>
                                            <div className="col-5">
                                                <input type="text" className="form-control" value={status} name="countries" onChange={(e)=>setStatus(e.target.value)} />
                                            </div>
                                        </div>
                                        <div className='row'>
                                            <div className='col-5'>
                                                <button type="submit" className="btn btn-primary mt-4 form-control">Upldate</button>
                                            </div>
                                            <div className='col-5'>
                                                <Link to="/table" className="btn btn-primary mt-4 form-control" >Back</Link>
                                            </div>
                                        </div>
                                    </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Editbuilding