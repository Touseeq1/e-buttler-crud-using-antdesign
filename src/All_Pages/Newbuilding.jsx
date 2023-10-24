import React from 'react'
import e from "../Images/Vectors/e.png";
import Sidebar from '../components/sidebar/Sidebar';
import Navbar from './Navbar';
import { Outlet } from 'react-router-dom';
const Newbuilding = () => {
    return (
        <div className='container-fluid'>   {/*style={{border:'1px solid red'}}*/}
            <div className='row'>
                <div className='col-lg-2 sidebar_column' >
                    <div className='side_bar'>
                        <div className='img mt-3'> <img src={e} width="130" height="60" /></div>
                        <Sidebar />
                    </div>
                </div>
                <div className='col-12 col-sm-12 col-md-12 col-lg-10'>
                    <Navbar />
                    <Outlet/>
                </div>
            </div>
        </div>
    )
}

export default Newbuilding