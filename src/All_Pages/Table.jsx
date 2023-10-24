import React from 'react'
import edit from "../Images/Vectors/edit.png";
import del from "../Images/Vectors/del.png";
import dot from "../Images/Vectors/dot3.png";
import { Button, Dropdown, Space } from 'antd';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux"
import { useState } from 'react';
import { deleteContact, updataContact } from '../redux/Action'
const Table = () => {
    const dispatch = useDispatch()
    const mystate = useSelector((state1) => state1.ChangeThenumber)
    // console.log("Mystate", mystate)
    const navigate = useNavigate()
    const [id, setId] = useState("")
    const handlerDelete = (id) => {
        console.log("delete is click", id)
        dispatch(deleteContact(id))
    }
    const handlerEdit = (id) => {
        dispatch(updataContact(id))
        console.log("edit is clicked")
        navigate(`/editbuilding/${id}`)
    }
    const items = [{
        key: '2',
        label: (
            <div className='edit'>
                <a onClick={() => handlerEdit(id)}><img src={edit} width='20' /></a><h5>Edit</h5></div>),
    },
    {
        key: '3',
        label: (
            <div className='delete'>
                <a onClick={() => handlerDelete(id)} ><img src={del} width='27' /></a><h5>Delete</h5></div>),
    },];
    return (
        <div>
            <div className='row'>
                <div className='col-12 '>
                        <div className='card'>
                            <div className='card-body'>
                                <table className='table table-borderless' >
                                    <thead>
                                        <tr>
                                            <th >ID</th>
                                            <th>Building</th>
                                            <th>Countries</th>
                                            <th>Status</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {mystate.map((val, i) => {
                                            console.log("mapVal", val)
                                            return (
                                                <tr className='tr' key={i} >
                                                    <td>{val.id}</td>
                                                    <td>{val.building}</td>
                                                    <td>{val.countries}</td>
                                                    <td>{val.status}</td>
                                                    <td><Space direction="vertical">
                                                        <Space wrap>
                                                            <Dropdown menu={{ items, }} onClick={() => setId(val.id)}>
                                                                <Button className='dot_btn'><img src={dot} width='25' /></Button>
                                                            </Dropdown>
                                                        </Space></Space></td></tr>)})}
                                    </tbody>
                                </table>
                                <div className='pagination'>
                                    <nav>
                                        <ul className="pagination">
                                            <li>
                                                <a className="page-link"> <span>&laquo;</span></a>
                                            </li>
                                            <li><a className="page-link" href="#">1</a></li>
                                            <li><a className="page-link" href="#">2</a></li>
                                            <li><a className="page-link" href="#">..</a></li>
                                            <li><a className="page-link" href="#">9</a></li>
                                            <li><a className="page-link" href="#">10</a></li>
                                            <li><a className="page-link"><span>&raquo;</span></a></li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    
                </div>
            </div>
        </div>
    )
}

export default Table