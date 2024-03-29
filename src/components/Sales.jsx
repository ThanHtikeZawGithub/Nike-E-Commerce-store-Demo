import React from 'react';
import Item from './utils/Item';
import Title from './utils/Title';

const Sales = ({ifPopularsales, endpoint:{title, items}}) => {
    
  return (
    <>

    <div className='nike-container' id='sales'>
        <Title title={title}/>
        <div className={`grid items-center justify-items-center gap-7 lg:gap-5 mt-7
            ${ifPopularsales===true ? 'grid-cols-3 xl:grid-cols-2 sm:grid-cols-1':'grid-cols-4 xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1'}`}>
        {items?.map((item, idx) => (
            <Item
            {...item}
            key={idx}
            ifPopularsales={ifPopularsales}
            />
        ))}
        </div>
    </div>
    </>
  )
}

export default Sales;