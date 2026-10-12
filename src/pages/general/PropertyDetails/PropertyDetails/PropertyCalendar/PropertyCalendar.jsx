//! ---------------------------------------- Import

import { ProjectIcons } from "@/components";
import { MONTH_NAME } from "@/data";
import { useState } from "react";
import { CalendarMonth } from "@/pages";
import { pluralFixer } from "@/utils";

//! ---------------------------------------- Functions

//! --------------------
function getMonthDate(date, monthOffset = 0, day = 1) {
  return new Date(date.getFullYear(), date.getMonth() + monthOffset, day);
}

//! --------------------
function bookedDays(property, selectedDate, checkIn) {
  return property?.booked_dates?.dates?.some((booked) => {
    const [bookedYear, bookedMonth, bookedDay] = booked.split("-");

    const bookedDate = new Date(
      Number(bookedYear),
      Number(bookedMonth) - 1,
      Number(bookedDay),
    );

    return bookedDate > checkIn && bookedDate < selectedDate;
  });
}

//! ---------------------------------------- Component (PropertyCalendar)
function PropertyCalendar({
  property,
  setCheckIn,
  setCheckOut,
  checkIn,
  checkOut,
}) {
  //! ---------------------------------------- Variables

  const present = new Date();

  const currentMonth = new Date(present.getFullYear(), present.getMonth(), 1);

  //! ---------------------------------------- Hooks

  const [dynamicDate, setDynamicDate] = useState(currentMonth);

  const [handleCheckIn, setHandleCheckIn] = useState(true);

  const [hoverDate, setHoverDate] = useState();

  //! ---------------------------------------- Functions

  function bookingFn({ year, month, day }) {
    //! ---------- Variables

    const selectedDate = new Date(year, month, day);

    //! ---------- Check In

    if (handleCheckIn) {
      setCheckOut(null);
      setCheckIn(null);
      setCheckIn(selectedDate);
      setHandleCheckIn(false);
      return;
    }

    //! ---------- Change Check In

    if (selectedDate <= checkIn) {
      setCheckIn(selectedDate);
      return;
    }

    //! ---------- Check Forbidden Range
    const hasConflict = bookedDays(property, selectedDate, checkIn);
    //! ---------- Forbidden

    if (hasConflict) {
      alert("There are some booked days in your chosen days");

      setCheckOut(null);
      setCheckIn(null);
      setHandleCheckIn(true);

      return;
    }

    //! ---------- Check Out

    setCheckOut(selectedDate);
    setHandleCheckIn(true);
  }

  //! ---------------------------------------- Variables

  //! -------------------- Disabled

  //!
  const isPreviousDisabled = dynamicDate <= currentMonth;

  //! -------------------- Month

  //!
  const nextMonth = getMonthDate(dynamicDate, 1);

  //!
  const currentMonthName = MONTH_NAME[dynamicDate.getMonth()];

  //!
  const nextMonthName = MONTH_NAME[nextMonth.getMonth()];

  //! -------------------- Year

  //!
  const currentYear = dynamicDate.getFullYear();

  //!
  const nextYear = nextMonth.getFullYear();

  //! -------------------- (CheckIn & checkOut) Dates
  //! ---------- CheckIn
  //!
  const checkInYear = checkIn?.getFullYear();

  //!
  const checkInMonth = MONTH_NAME[checkIn?.getMonth()];

  //!
  const checkInDay = checkIn?.getDate();

  //! ---------- CheckOut
  //!
  const checkOutYear = checkOut?.getFullYear();

  //!
  const checkOutMonth = MONTH_NAME[checkOut?.getMonth()];

  //!
  const checkOutDay = checkOut?.getDate();

  //! ---------------------------------------- Functions

  function goToPreviousMonth() {
    if (isPreviousDisabled) return;

    setDynamicDate(getMonthDate(dynamicDate, -2));
  }

  function goToNextMonth() {
    setDynamicDate(getMonthDate(dynamicDate, 2));
  }

  function nightsNumber() {
    if (!checkIn || !checkOut) return;
    const quantity = ((checkOut - checkIn) * 10 ** -3) / (3600 * 24);
    return quantity;
  }

  //! ---------------------------------------- Return
  return (
    <div id="calendar" className="scroll-mt-83 flex-col-stretch gap-5">
      {/* Calendar Information */}

      <span className="flex-col-stretch gap-1">
        <h3 className="text-xl font-semibold text-gray-900">
          {checkIn && checkOut && pluralFixer(nightsNumber(), "night")} in{" "}
          {property?.city}
        </h3>
        <div className="flex gap-1">
          <p className="text-sm text-gray-600">
            {checkIn
              ? checkInMonth + " " + checkInDay + " , " + checkInYear
              : "Check in"}
          </p>
          {` - `}
          <p className="text-sm text-gray-600">
            {checkOut
              ? checkOutMonth + " " + checkOutDay + " , " + checkOutYear
              : "Check out"}
          </p>
        </div>
      </span>

      <div className="flex-col-stretch gap-5">
        {/* Calendar Header */}

        <div className="flex items-center justify-between">
          {/* Previous Month */}

          <button
            onClick={goToPreviousMonth}
            disabled={isPreviousDisabled}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors cursor-pointer disabled:cursor-not-allowed disabled:opacity-40"
            aria-label="Previous month"
          >
            <ProjectIcons type="rewind" />
          </button>

          {/* Month Names */}

          <div className="flex items-center gap-8">
            <div className="text-base font-semibold text-gray-900">
              {currentMonthName} {currentYear}
            </div>

            <div className="text-base font-semibold text-gray-900">
              {nextMonthName} {nextYear}
            </div>
          </div>

          {/* Next Month */}

          <button
            onClick={goToNextMonth}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors cursor-pointer"
            aria-label="Next month"
          >
            <ProjectIcons type="forward" />
          </button>
        </div>

        {/* Two Months */}

        <div className="grid grid-cols-2 grid-rows-1 grid-flow-row gap-8">
          {/* Current Month */}

          <CalendarMonth
            date={dynamicDate}
            present={present}
            {...{
              property,
              bookingFn,
              checkIn,
              checkOut,
              hoverDate,
              setHoverDate,
            }}
          />

          {/* Next Month */}

          <CalendarMonth
            date={nextMonth}
            {...{
              property,
              bookingFn,
              checkIn,
              checkOut,
              hoverDate,
              setHoverDate,
            }}
          />
        </div>

        {/* Clear Dates */}
        {checkIn && checkOut && (
          <button
            onClick={() => {
              setCheckIn(null);
              setCheckOut(null);
            }}
            className="text-sm font-semibold text-gray-900 underline hover:text-gray-700 cursor-pointer self-start"
          >
            Clear dates
          </button>
        )}
      </div>
    </div>
  );
}

//! ---------------------------------------- Export

export default PropertyCalendar;
