import React from 'react';

export default props => (
    <div className='well mt-3 mb-3'>
        <h4>{props.name}</h4>
        <p>{props.description}</p>
        <div className='row justify-content-center'>
            <a className="btn btn-primary col-4" href={`https://maps.google.com/?q=${props.location[0]},${props.location[1]}`} role="button">Visit!</a>
        </div>
    </div>
);