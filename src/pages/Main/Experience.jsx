//! ---------------------------------------- Import
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
//! ---------------------------------------- Component (Experience)
function Experience() {
  //! ---------------------------------------- Return
  return (
    <>
      <section className="w-full bg-white py-12 px-6">
        <div className="max-w-[1760px] mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Popular experiences in Helsinki
          </h2>
          <div>
            <Swiper slidesPerView={"auto"} spaceBetween={8}>
              {Array.from({ length: 8 }).map((_, index) => (
                <SwiperSlide key={index} className="!w-[253px]">
                  <div className="relative group cursor-pointer">
                    <div className="relative rounded-xl overflow-hidden">
                      <img
                        src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop"
                        alt="Explore Helsinki with a Local Guide"
                        className="w-full h-[242px] object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-3 left-3 bg-white px-2 py-1 rounded-md text-xs font-semibold shadow-sm">
                        Popular
                      </div>
                      <button
                        type="button"
                        className="absolute top-3 right-3 p-2 rounded-full bg-white hover:bg-gray-100"
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
                      <h3 className="text-[15px] font-medium text-gray-900 group-hover:underline">
                        Explore Helsinki with a Local Guide
                      </h3>
                      <p className="text-sm text-gray-600 mt-1">
                        Individual host
                        <br />
                        From € 43 / guest
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>
      <section className="w-full bg-white py-12 px-6">
        <div className="max-w-[1760px] mx-auto">
          <h2 className="text-2xl font-bold text-gray-900">Airbnb Originals</h2>
          <p className="text-lg text-gray-600 mt-1 mb-6">
            Hosted by the world's most interesting people
          </p>
          <div
            className="swiper swiper-originals !pb-4"
            data-swiper=""
            data-space-between="10"
          >
            <div className="swiper-wrapper">
              <Swiper slidesPerView={"auto"} spaceBetween={8}>
                {Array.from({ length: 8 }).map((_, index) => (
                  <SwiperSlide key={index} className="!w-[253px]">
                    <div className="relative group cursor-pointer">
                      <div className="relative rounded-xl overflow-hidden">
                        <img
                          src="https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=400&h=300&fit=crop"
                          alt="Street art and culture tour"
                          className="w-full h-[242px] object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute top-3 left-3 bg-white px-2 py-1 rounded-md text-xs font-semibold shadow-sm">
                          Original
                        </div>
                        <button
                          type="button"
                          className="absolute top-3 right-3 p-2 rounded-full bg-white hover:bg-gray-100"
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
                        <h3 className="text-[15px] font-medium text-gray-900 group-hover:underline">
                          Street art and culture tour
                        </h3>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
//! ---------------------------------------- Export
export default Experience;
