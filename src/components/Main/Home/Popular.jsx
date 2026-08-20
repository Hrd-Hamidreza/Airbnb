//! ---------------------------------------- Import
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { useRef } from "react";
import { Link } from "react-router-dom";
//! ---------------------------------------- Component (Popular)
function Popular() {
  //! ---------------------------------------- Hooks
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  //! ---------------------------------------- Return
  return (
    <>
      <section className="w-full bg-white flex flex-col gap-5 p-10">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold text-gray-900">
            Popular homes in Tampere
          </h2>
          {/* Navigation Buttons */}
          <div className="flex items-center gap-2">
            <button
              ref={prevRef}
              type="button"
              aria-label="Previous"
              className="flex items-center justify-center w-9 h-9 rounded-full border border-gray-300 bg-white transition-all duration-200 hover:shadow-md disabled:opacity-40 cursor-pointer disabled:cursor-not-allowed"
            >
              <svg
                className="w-5 h-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button
              ref={nextRef}
              type="button"
              aria-label="Next"
              className="flex items-center justify-center w-9 h-9 rounded-full border border-gray-300 bg-white transition-all duration-200 hover:shadow-md disabled:opacity-40 cursor-pointer disabled:cursor-not-allowed"
            >
              <svg
                className="w-5 h-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
        <div>
          <Swiper
            modules={[Navigation]}
            onBeforeInit={(swiper) => {
              swiper.params.navigation.prevEl = prevRef?.current;
              swiper.params.navigation.nextEl = nextRef?.current;
            }}
            navigation
            slidesPerView={"auto"}
            spaceBetween={8}
          >
            {Array.from({ length: 6 }).map((_, index) => (
              <SwiperSlide key={index} className="!w-[240px]">
                <Link
                  to={`/listDetails`}
                  className="relative group cursor-pointer block"
                >
                  <div className="relative rounded-xl overflow-hidden">
                    <img
                      src="https://cdn.jabama.com/image/jabama-images/2495251/41b4573d-3519-498b-81b7-39d43534869b.jpg?x-img=v1%2Fformat%2Ctype_webp%2Fresize%2Cw_400"
                      alt="Apartment in Tampere"
                      className="w-full h-[242px] object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute top-3 left-3 bg-white px-2 py-1 rounded-md text-xs font-semibold shadow-sm">
                      Guest favorite
                    </div>
                    <button
                      type="button"
                      className="absolute top-3 right-3 p-2 rounded-full bg-white hover:bg-gray-100 z-10"
                      aria-label="Save"
                    >
                      <svg
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                      </svg>
                    </button>
                  </div>
                  <div className="mt-2">
                    <h3 className="text-[15px] font-medium text-gray-900 truncate group-hover:underline leading-tight">
                      Apartment in Tampere
                    </h3>
                    <p className="text-[15px] text-gray-600 mt-1 leading-tight">
                      Jan 9-11
                    </p>
                    <p className="text-[15px] text-gray-600 leading-tight">
                      Individual host
                    </p>
                    <div className="flex items-center justify-between mt-1.5">
                      <div className="flex items-baseline gap-1">
                        <span className="text-[15px] font-semibold text-gray-900">
                          € 145
                        </span>
                        <span className="text-[15px] text-gray-600">
                          for 2 nights
                        </span>
                      </div>
                      <div className="flex items-center gap-1">
                        <svg
                          className="w-3.5 h-3.5 fill-current text-black"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                        </svg>
                        <span className="text-[15px] text-gray-900 font-medium">
                          4.86
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </>
  );
}
//! ---------------------------------------- Export
export default Popular;
