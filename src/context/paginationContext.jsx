import React from 'react';
import { useState } from 'react';

export const PaginationContext = React.createContext();

function PaginationProvider(props){
    const [count, setCount] = useState(5);
    const [startCount, setStartCount]= useState(1);
    const [display , setDisplay]= useState(false);
    const [sort, setSort]= useState('easy');

    const state = {
        count,
        startCount,
        display, 
        sort,
        setCount,
        setStartCount,
        setDisplay,
        setSort,
    };

    return(
        <PaginationContext.Provider value={state}>
            {props.children}
        </PaginationContext.Provider>
    );
}

export default PaginationProvider;