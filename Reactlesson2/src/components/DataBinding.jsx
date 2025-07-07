import React from 'react';

const DataBinding = () => {
    let name = "Rohit";
    let age = 25;
    return (
        <div className='row'>
            <div className="col">
                Name is  {name}
                <br />
                Age is  {age}
            </div>
        </div>
    );
};

export default DataBinding;