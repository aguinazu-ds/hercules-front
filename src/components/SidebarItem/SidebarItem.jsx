import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import AssessmentOutlinedIcon from '@mui/icons-material/AssessmentOutlined';
import SwapVerticalCircleOutlinedIcon from '@mui/icons-material/SwapVerticalCircleOutlined';
import CalculateOutlinedIcon from '@mui/icons-material/CalculateOutlined';
import SourceOutlinedIcon from '@mui/icons-material/SourceOutlined';

import { Icon } from '@mui/material';


import { useState } from 'react';

export default function SidebarItem({item}) {
    const [open, setOpen] = useState(false);
    const MaterialIcon = ({icon}) => {
        switch (icon) {
            case 'DescriptionOutlinedIcon':
                return <DescriptionOutlinedIcon />;
            case 'AssessmentOutlinedIcon':
                return <AssessmentOutlinedIcon />;
            case 'SwapVerticalCircleOutlinedIcon':
                return <SwapVerticalCircleOutlinedIcon />;
            case 'CalculateOutlinedIcon':
                return <CalculateOutlinedIcon />;
            case 'SourceOutlinedIcon':
                return <SourceOutlinedIcon />;
            default:
                return null;
        }
    } 

    if (item.childrens) {
        return (
            <div className={open ? "sidebar-item open" : "sidebar-item"}>
                <div className="sidebar-title" onClick={() => setOpen(!open)}>
                    <MaterialIcon icon={item.icon} />
                    <span>
                        {item.title}
                    </span>
                    <KeyboardArrowDownIcon className='arrowDown'/>

                </div>
                <div className="sidebar-content">
                    {item.childrens.map((child, index) => 
                        <div className='child'>
                            <span className='line'></span>
                            <div className='sidebar-item-child'>
                            {child.title}
                            </div>
                        </div>)}
                </div>
            </div>
        )
    } else {
        return (
            <div className="sidebar-item">
                <div className="sidebar-title">
                    <span>
                        {item.title}
                    </span>
                </div>
            </div>
        )
    }
}