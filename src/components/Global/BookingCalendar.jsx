"use client";
import { useState } from "react";
import { addMonths, format } from "date-fns";

export default function BookingCalendar() {
  const [selectedDate, setSelectedDate] = useState(new Date("2025-03-02"));
  const [selectedTime, setSelectedTime] = useState("14:00 - 16:30");

  // Generate days for one month
  const generateMonth = (monthOffset) => {
    const firstDay = new Date();
    firstDay.setMonth(firstDay.getMonth() + monthOffset);
    firstDay.setDate(1);

    const days = [];
    const monthName = format(firstDay, "MMMM");
    const year = firstDay.getFullYear();

    const startDay = firstDay.getDay();
    for (let i = 0; i < startDay; i++) {
      days.push(null);
    }

    const daysInMonth = new Date(year, firstDay.getMonth() + 1, 0).getDate();
    for (let day = 1; day <= daysInMonth; day++) {
      days.push(new Date(year, firstDay.getMonth(), day));
    }

    return { monthName, year, days };
  };

  const months = [generateMonth(0), generateMonth(1), generateMonth(2)];

  return (
    <div className="bg-white mt-10">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="md:text-2xl sm:text-xl text-md font-semibold text-gray-800 md:mb-5 mb-2 md:text-left text-center">Inspection</h2>
        <button className="border rounded-full px-4 py-1 text-sm hover:bg-gray-50">
          View my Inspection Plan
        </button>
      </div>

      {/* Date & Time selectors */}
      <div className="flex flex-wrap items-center gap-4 mb-6">
        <div className="flex items-center gap-2 border p-2 rounded">
          <span className="font-medium">Day:</span>
          <span>{format(selectedDate, "EEEE d, MMMM")}</span>
        </div>

        <div className="flex items-center gap-2 border p-2 rounded">
          <span className="font-medium">Time:</span>
          <span>{selectedTime}</span>
        </div>

        <button className="border rounded px-4 py-1 hover:bg-gray-50 flex items-center gap-2">
          <span role="img" aria-label="clock">⏰</span> Add to calendar
        </button>
      </div>

      {/* Calendar months */}
      <div className="flex gap-8 overflow-x-auto">
        {months.map((month, mIndex) => (
          <div key={mIndex} className="w-48">
            <div className="text-center font-medium mb-2">
              {month.monthName} {month.year}
            </div>
            <div className="grid grid-cols-7 text-xs text-gray-500 mb-1">
              {["m", "t", "w", "t", "f", "s", "s"].map((d, i) => (
                <div key={i} className="text-center capitalize">{d}</div>
              ))}
            </div>
            <div className="grid grid-cols-7 gap-1 text-sm">
              {month.days.map((day, i) =>
                day ? (
                  <button
                    key={i}
                    onClick={() => setSelectedDate(day)}
                    className={`w-7 h-7 flex items-center justify-center rounded-full
                      ${
                        format(day, "yyyy-MM-dd") ===
                        format(selectedDate, "yyyy-MM-dd")
                          ? "bg-indigo-600 text-white"
                          : "hover:bg-gray-100"
                      }`}
                  >
                    {day.getDate()}
                  </button>
                ) : (
                  <div key={i}></div>
                )
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
