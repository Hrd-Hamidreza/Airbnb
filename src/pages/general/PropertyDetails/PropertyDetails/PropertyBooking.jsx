//! ---------------------------------------- Import
import { ProjectIcons } from "@/components";
import { pluralFixer } from "@/utils";
import { useState } from "react";
//! ---------------------------------------- Component (PropertyBooking)
function PropertyBooking({ property, checkIn, checkOut, ...rest }) {
  //! ---------------------------------------- Functions
  function nightsNumber() {
    if (!checkIn || !checkOut) return;
    const quantity = ((checkOut - checkIn) * 10 ** -3) / (3600 * 24);
    return quantity;
  }
  //! ----------
  function calculateExpenses() {
    if (!checkIn || !checkOut) return null;

    const nights = nightsNumber();
    const pricePerNight = Number(property?.price_per_night ?? 0);
    const cleaningFee = 50;
    const serviceFee = pricePerNight * nights * 0.15;

    const accommodationCost = pricePerNight * nights;

    return {
      pricePerNight,
      nights,
      accommodationCost,
      cleaningFee,
      serviceFee,
      total: accommodationCost + cleaningFee + serviceFee,
    };
  }
  //! ---------------------------------------- Variables
  const expenses = calculateExpenses();
  //! ---------- CheckIn
  //!
  const checkInYear = checkIn?.getFullYear();

  //!
  const checkInMonth = checkIn?.getMonth() + 1;

  //!
  const checkInDay = checkIn?.getDate();

  //! ---------- CheckOut
  //!
  const checkOutYear = checkOut?.getFullYear();

  //!
  const checkOutMonth = checkOut?.getMonth() + 1;

  //!
  const checkOutDay = checkOut?.getDate();

  //! ---------------------------------------- Return
  return (
    <>
      <div {...rest}>
        <div className="sticky xl:top-58 w-full space-y-5">
          <div className="xl:min-h-21 bg-white rounded-xl p-4 flex items-start gap-3 shadow-sm shadow-rose-500">
            <ProjectIcons
              type={`diamond`}
              className="text-rose-500 relative top-1"
            />
            <div className="flex-col-center items-start">
              <div className="font-semibold text-gray-900">Rare find!</div>
              <div className="text-sm text-gray-600">
                This place is usually booked
              </div>
            </div>
          </div>
          <div className="border border-gray-300 rounded-xl p-6 shadow-lg space-y-3">
            <div className="space-y-2">
              <div className="text-2xl font-bold text-gray-900">
                €{" "}
                {expenses
                  ? expenses?.total
                  : Number(property?.price_per_night ?? 0)}
              </div>
              <div className="text-sm text-gray-600 font-semibold">
                {expenses
                  ? checkIn && checkOut
                    ? pluralFixer(nightsNumber(), "night")
                    : " - nights"
                  : `per night`}
              </div>
              <hr className="border-gray-300" />
              <div className="space-y-2 text-sm">
                <div className="flex justify-between font-semibold">
                  <span className="text-gray-600">Price per night</span>
                  <span className="text-gray-900">
                    € {Number(property?.price_per_night ?? 0)}
                  </span>
                </div>
                <hr className="border-gray-300" />
                <div className="flex justify-between font-semibold">
                  <span className="text-gray-600">
                    {`€ ${expenses?.pricePerNight ? expenses?.pricePerNight : "Price per night"} × ${expenses?.nights ? pluralFixer(expenses?.nights, "night") : "- Nights"}`}
                  </span>
                  <span className="text-gray-900">
                    €{" "}
                    {expenses
                      ? expenses?.pricePerNight.toFixed(2) * expenses?.nights
                      : "-"}
                  </span>
                </div>
                <hr className="border-gray-300" />
                <div className="flex justify-between font-semibold">
                  <span className="text-gray-600">Cleaning fee</span>
                  <span className="text-gray-900">
                    € {expenses?.cleaningFee.toFixed(2) ?? "-"}
                  </span>
                </div>
                <hr className="border-gray-300" />
                <div className="flex justify-between font-semibold">
                  <span className="text-gray-600">Service fee</span>
                  <span className="text-gray-900">
                    € {expenses?.serviceFee.toFixed(2) ?? "-"}
                  </span>
                </div>
                <hr className="border-gray-300" />
                <div className="flex justify-between font-bold">
                  <span className="text-gray-900">Total</span>
                  <span className="text-gray-900">
                    € {expenses?.total.toFixed(2) ?? "-"}
                  </span>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-2 border border-gray-300 rounded-lg p-3">
                <div className="flex-col-center font-bold gap-1 text-sm">
                  <div className="font-semibold text-gray-900">CHECK-IN</div>
                  <div className="text-gray-600">
                    {checkIn
                      ? checkInMonth + "/" + checkInDay + "/" + checkInYear
                      : "-"}
                  </div>
                </div>
                <div className="flex-col-center font-bold gap-1 text-sm">
                  <div className="font-semibold text-gray-900">CHECKOUT</div>
                  <div className="text-gray-600">
                    {checkOut
                      ? checkOutMonth + "/" + checkOutDay + "/" + checkOutYear
                      : "-"}
                  </div>
                </div>
              </div>
              <div className="border border-gray-300 rounded-lg p-3 space-y-1">
                <div className="text-xs font-semibold text-gray-900">
                  GUESTS
                </div>
                <div className="text-sm text-gray-600">
                  {`${pluralFixer(property?.max_guests, "guest")}`}
                </div>
              </div>
            </div>
            <a
              href="payment.html"
              className="block w-full bg-rose-500 text-white font-semibold py-3 rounded-lg text-center hover:bg-rose-700 transition-colors"
            >
              Reserve
            </a>
            <p className="text-sm text-center text-gray-600">
              You won't be charged yet
            </p>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <ProjectIcons type={`flag`} />
              <a href="#" className="underline">
                Report this listing
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
//! ---------------------------------------- Export
export default PropertyBooking;
