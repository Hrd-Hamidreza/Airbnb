//! ---------------------------------------- Import
import { ProjectIcons } from "@/components";
import { pluralFixer } from "@/utils";
import { useState } from "react";
//! ---------------------------------------- Component (PropertyHost)
function PropertyHost({ property }) {
  //! ---------------------------------------- Hook
  const [status, setStatus] = useState({ loading: true });
  //! ---------------------------------------- Variables
  const avatar = property?.host?.avatar;
  //! ---------------------------------------- Return
  return (
    <>
      <div className="flex-center flex-col gap-5 items-stretch">
        <h2 className="text-2xl font-semibold text-gray-900">Meet your host</h2>
        <div className="grid lg:grid-cols-2 xl:grid-cols-2 gap-12">
          <div className="col-auto space-y-4">
            <div className="flex-center justify-start gap-5">
              {/* Image */}
              <div className="relative w-24 h-24">
                {/* Loading */}
                {!avatar
                  ? null
                  : status.loading && (
                      <div className="skeleton-box rounded-full" />
                    )}
                {/* Error */}
                {!avatar || status.error ? (
                  <div className="absolute inset-0 bg-gray-500 flex-col-center">
                    <ProjectIcons type={`stop`} className={`text-7xl`} />
                    <span className="font-bold">Not uploaded</span>
                  </div>
                ) : (
                  <img
                    src={avatar}
                    alt={property?.host?.name}
                    className={`w-24 h-24 rounded-full object-cover ${status.loaded ? "opacity-100" : "opacity-0"}`}
                    onLoad={() => setStatus({ loading: false, loaded: true })}
                    onError={() => setStatus({ loading: false, error: true })}
                  />
                )}
                {/* loaded */}
                <div className="absolute bottom-0 right-0 w-6 h-6 bg-rose-500 rounded-full flex items-center justify-center border-2 border-white text-white p-1">
                  <ProjectIcons type={`tick`} />
                </div>
              </div>

              {/* Rest */}
              <div className="flex flex-col items-start">
                <div className="font-semibold text-2xl text-gray-900">
                  {property?.host?.name}
                </div>

                {property?.host?.is_superhost && (
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <ProjectIcons type={`star`} />
                    <span>Superhost</span>
                  </div>
                )}

                <div className="space-y-1 flex flex-col items-start">
                  {property?.reviews?.length != null && (
                    <div className="text-sm text-gray-600">
                      {pluralFixer(property?.reviews?.length, "review")}
                    </div>
                  )}

                  {property?.average_rating != null && (
                    <div className="text-sm text-gray-600 flex-center gap-1">
                      <span>{property?.average_rating}</span>
                      <ProjectIcons type={`star`} />
                      <span>Rating</span>
                    </div>
                  )}

                  {property?.host?.years_hosting != null && (
                    <div className="text-sm text-gray-600">
                      {`${pluralFixer(property?.host?.years_hosting, "year")} hosting`}
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="group/bio flex-center justify-start gap-3 text-lg cursor-pointer">
                <ProjectIcons type={`book`} />
                <div className="relative text-sm text-gray-900 w-full">
                  <p className="line-clamp-1 w-full break-words first-letter:capitalize">
                    {property?.host?.bio}
                  </p>
                  <p className="absolute top-0 left-0 z-10 w-full break-words whitespace-normal rounded-xl bg-gray-50 px-5 py-2 leading-relaxed opacity-0 group-hover/bio:opacity-100 xl:max-h-25 overflow-auto first-letter:capitalize shadow-[0px_0px_5px_var(--color-gray-500)] font-semibold transition duration-300 ease-in-out cursor-auto">
                    {property?.host?.bio}
                  </p>
                </div>
              </div>

              {property?.host?.work && (
                <div className="flex-center justify-start gap-2.5 text-lg">
                  <ProjectIcons type={`bag`} className={`relative right-0.5`} />
                  <span className="text-sm text-gray-900">
                    {property?.host?.work}
                  </span>
                </div>
              )}

              {property?.host?.is_superhost && (
                <div>
                  <div className="font-semibold text-lg text-gray-900 flex-center flex-col gap-1 items-stretch">
                    {property?.host?.name} is a Superhost
                  </div>
                  <p className="text-sm text-gray-600">
                    Superhosts are experienced, highly rated hosts who are
                    committed to providing great stays for guests.
                  </p>
                </div>
              )}

              {(property?.host?.response_time ||
                property?.host?.response_rate) && (
                <div>
                  <div className="text-lg font-semibold text-gray-900 flex-center flex-col gap-1 items-stretch">
                    Host details
                  </div>

                  {property?.host?.response_time && (
                    <div className="text-sm text-gray-600">
                      {`Responds within: ${property?.host?.response_time ?? ""}`}
                    </div>
                  )}

                  {property?.host?.response_rate && (
                    <div className="text-sm text-gray-600">
                      {`Response rate: ${property?.host?.response_rate ?? ""}%`}
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
          <div className="col-auto flex flex-col items-stretch gap-3">
            {property?.host?.co_hosts.length > 0 && (
              <div className="text-lg font-semibold text-gray-900 flex-center flex-col gap-1 items-stretch">
                <h3>Co-hosts</h3>
                <ul className="grid grid-cols-2 gap-3 xl:max-h-43 overflow-auto">
                  {property?.host?.co_hosts.map((host, index) => (
                    <li key={host?.id} className="col-auto">
                      <img
                        src={host?.avatar}
                        alt={host?.name}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      <span className="text-sm text-gray-900">
                        {host?.name}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {property?.host?.type === "individual" && (
              <p className="text-xs text-gray-600 flex flex-col">
                This listing is offered by an individual.
                <a href="#" className="underline">
                  Learn more
                </a>
              </p>
            )}

            <div className="flex items-start gap-2">
              <span className="w-10 h-auto">
                <ProjectIcons
                  type={`protect`}
                  className={`text-rose-500 w-full h-full`}
                />
              </span>
              <p className="text-xs text-gray-600">
                To help protect your payment, always use Airbnb to send money
                and communicate with hosts.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
//! ---------------------------------------- Export
export default PropertyHost;
