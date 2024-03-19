import React from 'react';
import dashboard from '../../../assests/images/dashboard.jpg'

const DashboardHome = () => {
    return (
        <div>
            <div className="min-h-screen hero" style={{ backgroundImage: `url(${dashboard})` }}></div>
        </div>
    );
};

export default DashboardHome;