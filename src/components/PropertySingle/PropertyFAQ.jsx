"use client"
import { useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";

const faqs = [
    {
        id: 1,
        icon: "🏡",
        question: "How much bond do I need to pay?",
        answer: "The bond amount depends on your rental agreement and state regulations."
    },
    {
        id: 2,
        icon: "📈",
        question: "Can my landlord increase my rent?",
        answer: "Your landlord can only increase rent under certain conditions specified in your lease."
    },
    {
        id: 3,
        icon: "📜",
        question: "Can I break my lease early?",
        answer: "Breaking a lease early may involve penalties unless specified otherwise in your contract."
    },
    {
        id: 4,
        icon: "🔧",
        question: "My landlord won’t fix something—what can I do?",
        answer: "Contact your landlord in writing. If unresolved, check your state's rental dispute services."
    },
];

export default function PropertyFAQ() {
    const [openId, setOpenId] = useState(null);

    const toggleFAQ = (id) => {
        setOpenId(openId === id ? null : id);
    };

    return (
        <div className="w-full mt-10">
            <h2 className="md:text-2xl sm:text-xl text-md font-semibold text-gray-800 md:mb-5 mb-2 md:text-left text-center">Renter FAQ's</h2>
            <div className="space-y-2">
                {faqs.map((faq) => (
                    <div
                        key={faq.id}
                        className="border border-gray-200 rounded-lg overflow-hidden"
                    >
                        <button
                            className="flex items-center justify-between w-full p-4 text-left hover:bg-gray-50"
                            onClick={() => toggleFAQ(faq.id)}
                        >
                            <span className="flex items-center gap-2">
                                <span className="text-xl">{faq.icon}</span>
                                <span className="font-medium">{faq.question}</span>
                            </span>
                            <span className="">
                                {openId === faq.id ? <FaAngleUp className="w-5 h-5"/> : <FaAngleDown className="w-5 h-5"/>}
                            </span>
                        </button>
                        {openId === faq.id && (
                            <div className="p-4 text-gray-600 border-t border-gray-200">
                                {faq.answer}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}
