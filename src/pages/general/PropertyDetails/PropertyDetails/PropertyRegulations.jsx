//! ---------------------------------------- Import
import { ProjectIcons } from "@/components";
import { Link } from "react-router-dom";
//! ---------------------------------------- Component (PropertyRegulations)
function PropertyRegulations() {
  //! ---------------------------------------- Return
  return (
    <>
      <div className="flex-col-center items-stretch gap-5">
        <h3 className="text-xl font-semibold text-gray-900">Things to know</h3>
        <div className="grid md:grid-cols-2 xl:grid-cols-3 grid-rows-1 gap-5">
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-2">
              <ProjectIcons type={`date`} />
              <span className="font-semibold text-gray-900">
                Cancellation policy
              </span>
            </div>
            <p className="text-sm text-gray-600 line-clamp-3">
              Free cancellation for 24 hours. After that, the reservation is
              non-refundable.
            </p>
            <Link to={``} className="text-sm text-gray-600 underline">
              Learn more
            </Link>
          </div>
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-2">
              <ProjectIcons type={`house`} />
              <span className="font-semibold text-gray-900">House rules</span>
            </div>
            <p className="text-sm text-gray-600 line-clamp-3">
              {`Check-in: 3:00 PM - 11:00 PM\nCheckout before 12:00 PM\n2 guests maximum`}
            </p>
            <Link to={``} className="text-sm text-gray-600 underline">
              Learn more
            </Link>
          </div>
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-2">
              <ProjectIcons type={`protect`} />
              <span className="font-semibold text-gray-900">
                Safety &amp; property
              </span>
            </div>
            <p className="text-sm text-gray-600 line-clamp-3">
              {`Carbon monoxide detector not required
              Smoke alarm
              Must climb stairs`}
            </p>
            <Link to={``} className="text-sm text-gray-600 underline">
              Learn more
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
//! ---------------------------------------- Export
export default PropertyRegulations;
