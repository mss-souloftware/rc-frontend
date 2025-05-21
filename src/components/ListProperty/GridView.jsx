import React from 'react';

const GridView = ({ data }) => {
  return (
    <div className="">
        <img
         src='/images/listimge.png'
         className='w-[100%]'
         />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {data.map((property) => (
        <div key={property.id} className=" rounded p-3 shadow-sm">
          <img
            src={property.image}
            alt={property.title}
            className="w-full h-40 object-cover rounded"
          />
          <h3 className="mt-2 font-bold">{property.title}</h3>
          <p className="text-gray-600">{property.location}</p>
          <p className="text-green-600 font-semibold">${property.price}</p>
          <div className="text-xs text-gray-500 mt-1">
            🛏 {property.beds} | 🛁 {property.baths} | 🚗 {property.parking}
          </div>
        </div>
      ))}
    </div>
    </div>
  );
};

export default GridView;
