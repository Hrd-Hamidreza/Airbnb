//! ---------------------------------------- Import
//! ---------------------------------------- Component (PropertyLocation)
function PropertyLocation({ property, ...rest }) {
  //! ---------------------------------------- Return
  return (
    <>
      <div id="location" className="scroll-mt-83 flex-col-center items-stretch">
        <div {...rest} className="opacity-0 pointer-events-none" />
        <div className="flex-center flex-col items-stretch mb-3">
          <h3 className="text-xl font-semibold text-gray-900">
            Where you'll be
          </h3>
          <p className="text-lg text-gray-600">{`${property?.city}, ${property?.country}`}</p>
        </div>
        <div className="w-full h-150 bg-gray-200 rounded-xl overflow-hidden relative">
          <iframe
            src="https://maps.google.com/maps?q=61.4978,23.7610&amp;hl=en&amp;z=15&amp;output=embed"
            width="100%"
            height="100%"
            style={{ border: "0" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="absolute inset-0"
            title="Map"
          ></iframe>
        </div>
      </div>
    </>
  );
}
//! ---------------------------------------- Export
export default PropertyLocation;
