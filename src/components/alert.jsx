import React from 'react';
const AlertComponent = (props) => {
    const message = props.message

    if(!message) return null;

    return (
    <div className='container mx-auto'>
    <div className="border-2 text-sm rounded-lg block w-full p-2.5 border-red-700 bg-red-100">
    <div>
        {message}
    </div>
    </div>
    </div>
    );
};

export default AlertComponent;