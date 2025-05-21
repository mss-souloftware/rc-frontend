const PropertyCard = ({ property }) => {
  return (
    <div className="bg-white rounded shadow p-3">
      <img src={property.image} alt="" className="rounded h-36 w-full object-cover" />
      <h3 className="mt-2 font-bold">${property.price} / week</h3>
      <p className="text-sm text-gray-600">{property.address}</p>
      <div className="text-xs text-gray-500 mt-1">
        🛏 {property.beds} | 🛁 {property.baths} | 🚗 {property.parking}
      </div>
    </div>
  );
};

export default PropertyCard;
