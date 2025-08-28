"use client";
import { useState } from "react";
import { Send } from "lucide-react";
import Image from "next/image";

export default function AgentContactCard({
    price = "$650",
    period = "/week",
    name = "Antoni Francki",
    agency = "Independent Property Group North - Lyneham",
    phone = "+61 2 61- ----",
    avatar = "/global/profile.jpg",
}) {
    const [yourName, setYourName] = useState("Bob Smith");
    const [months, setMonths] = useState("6 months");
    const [enquiry, setEnquiry] = useState("Contract details");
    const [message, setMessage] = useState(
        `Hello, my name is (Bob Smith). I am interested in applying to this property for (6 months). Could you please provide me with the (Contract details) on this property?`
    );

    return (
        <div className="w-full mx-auto border border-[#E7EDF3] rounded-2xl p-5 bg-[#F6F7F9] space-y-4">
            {/* Price */}
            <div className="text-green-600 text-md font-normal">APARTMENT</div>
            <div className="text-3xl font-bold text-[#222934]">
                {price}{" "}
                <span className="text-[#727C8D] text-lg font-normal">{period}</span>
            </div>

            {/* Agent Info */}
            <div className="flex items-center space-x-3 rounded-xl p-3 bg-white">
                <Image
                    src={avatar}
                    alt={name}
                    width={50}
                    height={50}
                    className="rounded-full object-cover"
                />
                <div>
                    <h3 className="font-semibold text-gray-800">{name}</h3>
                    <p className="text-sm text-gray-500">{agency}</p>
                </div>
            </div>

            {/* Phone */}
            <div className="rounded-xl px-3 py-4 text-gray-700 bg-white">
                <span className="text-sm text-[#78808B]">Phone Number</span>
                <div className="flex justify-between items-center ">
                    <span className="text-sm">{phone}</span>
                    <button className="px-3 py-2 rounded-full text-sm text-[#6B6B6B] font-medium border border-[#ECECEC] bg-white">
                        Click to Reveal Number
                    </button>
                </div>
            </div>

            {/* Inputs */}
            <div className="space-y-3">
                {/* Name */}
                <input
                    type="text"
                    value={yourName}
                    onChange={(e) => {
                        setYourName(e.target.value);
                        setMessage(
                            `Hello, my name is (${e.target.value}). I am interested in applying to this property for (${months}). Could you please provide me with the (${enquiry}) on this property?`
                        );
                    }}
                    className="w-full rounded-lg px-3 py-4 text-sm  outline-none bg-white"
                    placeholder="Your Name"
                />

                {/* Months Select */}
                <select
                    value={months}
                    onChange={(e) => {
                        setMonths(e.target.value);
                        setMessage(
                            `Hello, my name is (${yourName}). I am interested in applying to this property for (${e.target.value}). Could you please provide me with the (${enquiry}) on this property?`
                        );
                    }}
                    className="w-full rounded-lg px-3 py-4 text-sm focus:ring-2 focus:ring-green-500 outline-none bg-white"
                >
                    <option>3 months</option>
                    <option>6 months</option>
                    <option>12 months</option>
                </select>

                {/* Enquiry Select */}
                <select
                    value={enquiry}
                    onChange={(e) => {
                        setEnquiry(e.target.value);
                        setMessage(
                            `Hello, my name is (${yourName}). I am interested in applying to this property for (${months}). Could you please provide me with the (${e.target.value}) on this property?`
                        );
                    }}
                    className="w-full rounded-lg px-3 py-4 text-sm outline-none bg-white"
                >
                    <option>Contract details</option>
                    <option>Inspection details</option>
                    <option>Application process</option>
                </select>
            </div>

            {/* Message Box */}
            <div className="relative">
                <textarea
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full rounded-lg px-3 py-4 text-sm text-gray-700 resize-none bg-white"
                />
                <button className="absolute bottom-3 right-3 bg-[#202A54] text-white p-2 rounded-full hover:bg-green-600">
                    <Send size={16} />
                </button>
            </div>

            {/* Action Buttons */}
            <div className="flex space-x-3">
                <button className="flex-1 text-[#6B6B6B]  px-4 py-3 border border-[#E7E7E7] rounded-full text-sm font-medium bg-white">
                    Apply Now
                </button>
                <button className="flex-1 bg-[#202A54] text-white rounded-full px-4 py-2 text-sm font-medium hover:bg-green-700">
                    Get in Touch
                </button>
            </div>

            <p className="text-md mt-10 text-gray-500">
                Contact this agent for viewings and purchase!
            </p>
        </div>
    );
}
