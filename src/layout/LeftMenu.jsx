import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './LeftMenu.css';

const LeftMenu = () => {
    useEffect(() => {
        getMenus();
    }, []);
    const [menus, setMenus] = useState([]);
    const [curMenu, setCurMenu] = useState(null);
    let timer;

    const getMenus = () => {
        axios.post('/api/menuList').then(res => {
            if (res && res.data) {
                setMenus(res.data);
            }
        });
    };
    const enterMenu = (type) => {
        let current = menus.find(item => item.type === type);
        setCurMenu(current);
    };

    const leaveMenu = () => {
        timer = setTimeout(() => {
            setCurMenu(null);
        }, 150);
    };

    const enterSubMenu = () => {
        clearTimeout(timer);
    };

    const leaveSubMenu = () => {
        setCurMenu(null);
    };

    const goItems = () => {
        setCurMenu(null);
    };
    return (
        <div className="m-menu">
            <div className="nav"
                onMouseLeave={leaveMenu}>
                <div className='menu-title'>Test Admin</div>
                {menus.map(item => (
                    <div key={item.type}
                        className="menu-item"
                        onMouseEnter={() => enterMenu(item.type)}
                    >
                        {item.name}
                    </div>
                ))}
            </div>
            {

                !curMenu ? null : <div className="sub-menu"
                    onMouseEnter={enterSubMenu}
                    onMouseLeave={leaveSubMenu}
                >
                    {
                        curMenu.child && curMenu.child.map(item => (
                            <div className="sub-menu-items"
                                onClick={() => goItems()}>
                                <div className="sub-item">
                                    {item}
                                </div>
                            </div>
                        ))
                    }
                </div>
            }
        </div>
    );
};

export default LeftMenu;