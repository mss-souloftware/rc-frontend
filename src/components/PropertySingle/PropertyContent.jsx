import React from 'react'
import Specs from './Specs'
import Tags from './Tags'
import Description from './Description'
import MapBox from './MapBox'
import BookingCalendar from '../Global/BookingCalendar'
import AmenitiesDistance from '../Global/AmenitiesDistance'
import { FaSchool, FaBus, FaShoppingCart, FaHospital, FaClinicMedical } from "react-icons/fa";
import PropertyFAQ from './PropertyFAQ'

export default function PropertyContent({ data }) {
    const propertyAmenities = [
        { name: "Canberra Grammar School", distance: "1.6km", icon: <FaSchool /> },
        { name: "City Interchange", distance: "3.2km", icon: <FaBus /> },
        { name: "Dickson Centre", distance: "4.1km", icon: <FaShoppingCart /> },
        { name: "Calvary Hospital", distance: "2.8km", icon: <FaHospital /> },
        { name: "Manuka Shopping Centre", distance: "1.2km", icon: <FaShoppingCart /> },
        { name: "Phillip Community Health Centre", distance: "3.9km", icon: <FaClinicMedical /> },
    ];

    return (
        <div>
            <span className='text-green-600 uppercase text-sm'>{data.type}</span>
            <h1 className='text-4xl text-[#1A2349] mt-4'>{data.name}</h1>
            <Specs data={data} />
            <Tags data={data} />
            <Description />
            <MapBox />
            <BookingCalendar />
            <AmenitiesDistance amenities={propertyAmenities} />
            <PropertyFAQ />
        </div>
    )
}
