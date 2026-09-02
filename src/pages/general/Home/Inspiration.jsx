//! ---------------------------------------- Import
import { ProjectIcons } from "@/components";
import { inspirationsService } from "@/services";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
//! ---------------------------------------- Component (Inspiration)
function Inspiration() {
  //! ---------------------------------------- Hooks
  const [idx, setIdx] = useState(0);
  //! ---------------------------------------- Functions
  const { inspirationsData, inspirationsLabels } = inspirationsService();
  //! ---------------------------------------- Return
  return (
    <>
      <section className="w-full bg-white flex flex-col gap-5">
        <h2 className="text-3xl font-bold text-gray-900">
          Inspiration for future getaways
        </h2>
        <div className="flex items-center gap-8 overflow-x-auto scrollbar-hide">
          {inspirationsLabels?.map((label, index) => (
            <button
              key={index}
              onClick={() => setIdx(index)}
              className={`col text-sm font-semibold whitespace-nowrap py-1 text-gray-900  cursor-pointer ${idx === index ? "border-gray-950 border-b-2" : "hover:border-b-2 border-gray-400"}`}
            >
              {label}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-3 grid-rows-6 grid-flow-col gap-6">
          {inspirationsData[inspirationsLabels[idx]]?.destinations
            ?.slice(0, 18)
            .map((destination, index) => (
              <div key={index} className="col-auto">
                <Link to={`/`} className="block hover:underline">
                  <div className="font-semibold text-gray-900">
                    {destination.name}
                  </div>
                  <div className="text-sm text-gray-600">
                    {destination.type}
                  </div>
                </Link>
              </div>
            ))}
        </div>
        <div className="flex justify-end">
          <Link
            to={`/`}
            className="text-sm font-semibold text-gray-900 hover:underline flex items-center gap-1"
          >
            Show more
            <ProjectIcons type={"down"} />
          </Link>
        </div>
      </section>
    </>
  );
}
//! ---------------------------------------- Export
export default Inspiration;
