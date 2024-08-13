import React, { useEffect, useState } from 'react';
import Routs from './Routs/Routs';

const Route = () => {
    const [create, setCreate] = useState([]);
    useEffect(()=>{
        fetch('create.json')
        .then(res=> res.json())
        .then(data => setCreate(data))
    }, [])
    return (
        <div className='grid grid-cols-1 md:grid-cols-3 gap-12 container mx-auto'>
            
            {
                create.map(routs => <Routs key={routs.id} routs={routs}></Routs>)
            }
        </div>
    );
};

export default Route;