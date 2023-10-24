import React, { useState } from 'react';
import { Button, Drawer } from 'antd';
import Sidebar from "./Sidebar";
import burger from "../../Images/Vectors/bur3.png";
import search3 from "../../Images/Vectors/search3.png";
import noti3 from "../../Images/Vectors/noti3.png";
import msg3 from "../../Images/Vectors/msg3.png";
import profile3 from "../../Images/Vectors/profile3.png";
import e from "../../Images/Vectors/e.png";

const Drawsidbr = () => {
    const [open, setOpen] = useState(false);
    const showDrawer = () => {
        setOpen(true);
    };
    const onClose = () => {
        setOpen(false);
    };
    return (
        <>
            <Button className='open' onClick={showDrawer}>
                <img src={burger} width="30" height="25" />
            </Button>  {/* first way for sidebar width: width={window.innerWidth > 1200 ? 800 : 'auto'} second way: width={80%}*/}

            <Drawer className="drawer" placement="right" width={window.innerWidth > 1200 ? 800 : 'auto'} height="50" onClose={onClose} open={open}
                extra={
                    <div>
                        <div className="icon_img">
                            <img src={search3} width="19" height="19" />
                            <img src={msg3} width="19" height="19" />
                            <img src={noti3} width="19" height="19" />
                            <img className='profile' src={profile3} width="31" height="31" />
                        </div>
                    </div>}>
                <div className='imgg'>
                    <img src={e} width="180" />
                </div>
                <Sidebar />
            </Drawer>
        </>
    );
};
export default Drawsidbr
    ;