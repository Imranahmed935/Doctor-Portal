import React from 'react';

const Primary = ({children}) => {
    return (
        <div>
            <button className="btn btn-primary bg-gradient-to-r from-success to-primary">{children}</button>
        </div>
    );
};

export default Primary;