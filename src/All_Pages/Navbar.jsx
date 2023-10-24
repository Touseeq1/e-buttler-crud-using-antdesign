import React from 'react'
import { useNavigate } from 'react-router-dom';
import plus from "../Images/Vectors/plus.png";
import Drawsidbr from '../components/sidebar/Drawsidbr';
import Icons from '../components/header/Icons';
const Navbar = () => {
  const navigate = useNavigate()
  const addBuilding = () => {
    navigate("/addbuilding")
  }
  return (
    <div>
      <nav>
        <div className='main-nav'>
          <div className='gen-h'>
            <h5>Building</h5>
          </div>
          <div className='btn-icon'>
            <div className='btnn'>
              <button onClick={addBuilding} className='button'>
                <p><span><img className='plus_img' src={plus} width="10" height='10' /></span>
                  Add New Building</p>
              </button>
              <button onClick={addBuilding} className='plus_button'>
                <img className='plus_imgg' src={plus} width="10" height='10' />
              </button>
              <Drawsidbr/>
            </div>
            <Icons/>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar