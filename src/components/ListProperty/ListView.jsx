import React from 'react';

const ListView = ({ data }) => {
  return (
    <div className="space-y-4">
        <img
         src='/images/listimge.png'
         className='w-[100%]'
         />

      {data.map((property) => (
        <div
          key={property.id}
          className="flex items-center justify-between border border-gray-200 rounded-xl p-3 shadow-sm space-x-4"
        >
          <div  className="flex items-center justify-between">
            <div>
          <img
            src={property.image}
            alt={property.title}
            className="w-72 h-72 object-cover rounded-xl"
          />
         </div>
         <div className="p-5 space-6 flex flex-col justify-center items-start">
            <span className="text-green-600 font-semibold text-[#2C9143] bg-green-100 px-3 py-1 text-[14px] rounded-xl">{property.type}</span>
            <h3 className="font-bold text-[#222934] text-[24px]">{property.price} / week</h3>
            <p className="text-gray-600">{property.location}</p>
            <div className="text-xs text-gray-500 mt-1">
              🛏 {property.beds} | 🛁 {property.baths} | 🚗 {property.parking}
            </div>
          </div>
          </div>
          <div className='w-[15%]'>
            <img
            src={property.icons}
            alt={property.title}
            className="w-[25%] object-cover rounded"
          />
          <h3 className="font-bold   text-[#222934] text-[20px]">{property.independent}</h3>
            <p className=" text-[#939AA5] text-[16px]">{property.titlesub}</p>
            </div>
        </div>
      ))}
    </div>
  );
};

export default ListView;
