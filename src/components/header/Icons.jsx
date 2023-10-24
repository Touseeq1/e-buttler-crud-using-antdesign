import React from 'react'
import search3 from "../../Images/Vectors/search3.png";
import noti3 from "../../Images/Vectors/noti3.png";
import msg3 from "../../Images/Vectors/msg3.png";
import profile3 from "../../Images/Vectors/profile3.png";
const Icons = () => {
    return (
        <div>
            <div className='icons'>
                <img src={search3} width="22" height="22"/>
                <img src={msg3} width="22" height="22" />
                <img src={noti3} width="22" height="22" />
                <img className='profile' src={profile3} width="33" height="33" />
            </div>
        </div>
    )
}

export default Icons