//Todo ---------------------------------------- Import

import { useState } from "react";

//Todo ---------------------------------------- Variables

const DAYS = ["S", "M", "T", "W", "T", "F", "S"];

//Todo ---------------------------------------- Functions

//Todo -------------------- getMonthDays
function getMonthDays(date) {
  return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
}

//Todo -------------------- getMonthStartDay
function getMonthStartDay(date) {
  return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
}

//Todo -------------------- createCalendarDays
function createCalendarDays({
  date,
  property,
  present,
  checkIn,
  checkOut,
  hoverDate,
}) {
  //Todo ---------- Variables
  const daysInMonth = getMonthDays(date);
  const firstDay = getMonthStartDay(date);
  const year = date?.getFullYear();
  const month = date?.getMonth();

  //Todo
  const edditedDates = property?.booked_dates?.dates?.map((booked) => {
    const [year, month, day] = booked.split("-");
    return {
      year,
      month: String(Number(month - 1)),
      day,
    };
  });

  //Todo
  const bookedDays = edditedDates?.filter(
    (booked) => Number(booked.year) === year && Number(booked.month) === month,
  );

  //Todo
  const calendarDays = [];

  //Todo ---------- Conditions
  for (let i = 0; i < firstDay; i++) {
    calendarDays.push({
      day: null,
      booked: false,
      deadDays: null,
      isCheckIn: null,
      isCheckOut: null,
      isBetween: null,
      hover: null,
    });
  }

  //Todo
  for (let day = 1; day <= daysInMonth; day++) {
    const isBooked = bookedDays?.some((booked) => Number(booked.day) === day);
    const currentDay = new Date(year, month, day);
    calendarDays.push({
      day,
      booked: isBooked,
      deadDays: currentDay < present,
      isCheckIn:
        checkIn?.getFullYear() === year &&
        checkIn?.getMonth() === month &&
        checkIn?.getDate() === day,
      isCheckOut:
        checkOut?.getFullYear() === year &&
        checkOut?.getMonth() === month &&
        checkOut?.getDate() === day,
      isBetween:
        checkIn && checkOut && currentDay > checkIn && currentDay < checkOut,
      hover:
        !checkOut &&
        checkIn &&
        hoverDate &&
        currentDay > checkIn &&
        currentDay <= hoverDate,
    });
  }
  //Todo ---------- Return
  return calendarDays;
}

//? ---------------------------------------- Component (CalendarMonth)
function CalendarMonth({
  date,
  property,
  present,
  bookingFn,
  checkIn,
  checkOut,
  hoverDate,
  setHoverDate,
}) {
  //! ---------------------------------------- Functions
  function hoverDateFn({ year, month, day }) {
    if (!checkIn || day === null) {
      setHoverDate(null);
      return;
    }
    const hoverDate = new Date(year, month, day);
    if (hoverDate > checkIn) {
      setHoverDate(hoverDate);
    } else {
      setHoverDate(null);
    }
  }

  //! ---------------------------------------- Variables
  const calendarDays = createCalendarDays({
    date,
    property,
    present,
    checkIn,
    checkOut,
    hoverDate,
  });

  //! ---------------------------------------- Return
  return (
    <div className="flex-col-stretch justify-start gap-4">
      {/* Week Days */}

      <div className="grid grid-cols-7 gap-1 font-extrabold">
        {DAYS.map((day, index) => (
          <div key={index} className="text-xs text-gray-600 text-center">
            {day}
          </div>
        ))}
      </div>

      {/* Calendar Days */}

      <div className="grid grid-cols-7 gap-1">
        {calendarDays?.map(
          (
            { day, booked, deadDays, isCheckIn, isCheckOut, isBetween, hover },
            index,
          ) => (
            <button
              onMouseEnter={() => {
                if (day === null) {
                  setHoverDate(null);
                  return;
                }

                if (!checkIn) return;
                hoverDateFn({
                  year: date.getFullYear(),
                  month: date.getMonth(),
                  day,
                });
              }}
              onClick={() => {
                if (day === null) return;
                bookingFn({
                  year: date.getFullYear(),
                  month: date.getMonth(),
                  day,
                });
              }}
              key={
                day === null
                  ? `empty-${index}`
                  : `${date.getFullYear()}-${date.getMonth()}-${day}`
              }
              disabled={day === null || booked || deadDays}
              className={`text-sm text-center py-2 rounded-full cursor-pointer 
              ${deadDays ? "text-gray-300" : "text-gray-600"}
              ${day === null ? "disabled:cursor-default" : "disabled:cursor-not-allowed"} 
              ${booked && "bg-rose-950 text-white"} 
              ${isCheckIn && "bg-green-300"}
              ${isCheckOut && "bg-rose-300"}
              ${isBetween && !booked && "bg-gray-300"}
              ${hover && "bg-gray-300"}
              `}
            >
              {day}
            </button>
          ),
        )}
      </div>
    </div>
  );
}
//! ---------------------------------------- Export
export default CalendarMonth;
