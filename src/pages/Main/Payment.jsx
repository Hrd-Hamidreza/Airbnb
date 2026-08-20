//! ---------------------------------------- Import

//! ---------------------------------------- Component (Payment)
function Payment() {
  return (
    <>
      <div className="max-w-[1760px] mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <div className="mb-10">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">
                Choose when to pay
              </h2>
              <div className="space-y-4">
                <label className="flex items-start gap-4 p-5 border-2 border-gray-900 rounded-xl cursor-pointer">
                  <input
                    type="radio"
                    name="pay"
                    checked
                    className="mt-1 w-5 h-5"
                  />
                  <div className="font-semibold text-gray-900">
                    Pay € 590.00 now
                  </div>
                </label>
                <label className="flex items-start gap-4 p-5 border border-gray-300 rounded-xl cursor-pointer">
                  <input type="radio" name="pay" className="mt-1 w-5 h-5" />
                  <div>
                    <div className="font-semibold text-gray-900 mb-1">
                      Pay over time with Klarna
                    </div>
                    <div className="text-sm text-gray-600">
                      Choose a flexible payment option.
                    </div>
                  </div>
                </label>
                <button className="w-full bg-gray-900 text-white font-semibold py-4 rounded-lg hover:bg-gray-800 mt-6">
                  Next
                </button>
              </div>
            </div>
            <div className="mb-10">
              <h2 className="text-xl font-semibold text-gray-400">
                Add a payment method
              </h2>
            </div>
            <div className="mb-10">
              <h2 className="text-xl font-semibold text-gray-400">
                Review your request
              </h2>
            </div>
          </div>
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              <div className="border border-gray-200 rounded-xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&h=600&fit=crop"
                  alt="Listing"
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-sm font-semibold">★ 4.85</span>
                    <span className="text-sm text-gray-600">(475)</span>
                    <span className="text-xs font-semibold bg-gray-100 px-2 py-0.5 rounded">
                      Guest favorite
                    </span>
                  </div>
                  <h3 className="font-semibold text-gray-900">
                    Cozy studio near Pyynikki
                  </h3>
                </div>
              </div>
              <div className="border border-gray-200 rounded-xl p-4">
                <div className="font-semibold text-gray-900 mb-1">
                  Free cancellation
                </div>
                <div className="text-sm text-gray-600">
                  Cancel before 4:00 PM for a full refund.
                </div>
              </div>
              <div className="border border-gray-200 rounded-xl p-4">
                <div className="text-sm text-gray-600 mb-1">Dates</div>
                <div className="font-semibold text-gray-900">Jan 3-8, 2026</div>
                <div className="border-t border-gray-200 pt-4 mt-4">
                  <div className="text-sm text-gray-600 mb-1">Guests</div>
                  <div className="font-semibold text-gray-900">1 adult</div>
                </div>
              </div>
              <div className="border border-gray-200 rounded-xl p-4">
                <div className="text-sm font-semibold text-gray-900 mb-4">
                  Price details
                </div>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">€ 118.00 x 5 nights</span>
                    <span>€ 590.00</span>
                  </div>
                  <div className="border-t border-gray-200 pt-3 flex justify-between font-semibold">
                    <span>Total (EUR)</span>
                    <span>€ 590.00</span>
                  </div>
                </div>
              </div>
              <div className="bg-green-50 border border-green-200 rounded-xl p-4">
                <div className="font-semibold text-green-900 text-[15px]">
                  Price is below the 60-day average
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
//! ---------------------------------------- Export
export default Payment;
