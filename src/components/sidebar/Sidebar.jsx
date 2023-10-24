import React from 'react';
import am3 from "../../Images/Vectors/am3.png";
import bellboy3 from "../../Images/Vectors/bellboy3.png";
import parcel3 from "../../Images/Vectors/parcel3.png";
import visitors from "../../Images/Vectors/visitors.png";
import bs3 from "../../Images/Vectors/bs3.png";
import { Menu } from 'antd';
function getItem(label, key, icon, children, type) {
    return { key, icon, children, label, type, };
}
const items = [
    getItem('Amenities', 'sub1', <img src={am3} width="22" height="22" />, [
        getItem('Bellboy'),
        getItem('Bellboy listing'),
        getItem('Option 11'),
        getItem('Option 12'),
    ]),
    getItem('Bellboy', 'sub2', <img src={bellboy3} width="22" height="22" />, [
        getItem('Bellboy'),
        getItem('Bellboy listing'),
        getItem('Option 11'),
        getItem('Option 12'),
    ]),
    getItem('Parcels', 'sub3', <img src={parcel3} width="22" height="22" />, [
        getItem('Option 9'),
        getItem('Option 10'),
        getItem('Option 11'),
        getItem('Option 12'),
    ]),
    getItem('Visitors', 'sub4', <img src={visitors} width="22" height="22" />, [
        getItem('Option 9'),
        getItem('Option 10'),
        getItem('Option 11'),
        getItem('Option 12'),
    ]),
    getItem('Maintenance', 'sub5', <img src={bs3} width="22" height="22" />, [
        getItem('Option 9'),
        getItem('Option 10'),
        getItem('Option 11'),
        getItem('Option 12'),
    ]),];
const Sidebar = () => {
    return (
        <>
        <Menu
        // style={{ width: 300, }}
        // defaultSelectedKeys={['1']}
        // defaultOpenKeys={['sub1']}
        mode="inline"
        items={items}/>
        </>
    );
};
export default Sidebar;