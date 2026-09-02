//! ---------------------------------------- Import
import { Link } from "react-router-dom";
//! ---------------------------------------- Component (ListDetails)
function ListDetails() {
  return (
    <>
      <section className="mb-12 pt-6">
        <div className="flex items-center justify-between mb-6 px-[2%]">
          <h2 className="text-2xl font-semibold text-gray-900">
            Popular homes in Tampere
          </h2>
          <div className="flex items-center gap-2">
            <button
              type="button"
              className="swiper-prev-tampere p-2 rounded-full border border-gray-300 bg-gray-100 cursor-not-allowed transition-all duration-200"
              aria-label="Previous"
            >
              <svg
                className="w-5 h-5 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button
              type="button"
              className="swiper-next-tampere p-2 rounded-full border border-gray-300 bg-white hover:shadow-md transition-all duration-200"
              aria-label="Next"
            >
              <svg
                className="w-5 h-5 text-gray-900"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className="px-[2%]">
          <div
            className="swiper swiper-tampere !pb-4"
            data-swiper="tampere"
            data-space-between="8"
          >
            <div className="swiper-wrapper">
              <div className="swiper-slide !w-[253px]">
                <Link
                  to={``}
                  href="listing-detail.html"
                  className="relative group cursor-pointer block"
                >
                  <div className="relative rounded-xl overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=400&h=300&fit=crop"
                      alt="Apartment in Tampere"
                      className="w-full h-60 object-cover transition-transform duration-300 group-hover:scale-105"
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
              </div>
              <div className="swiper-slide !w-[253px]">
                <Link
                  to={``}
                  href="listing-detail.html"
                  className="relative group cursor-pointer block"
                >
                  <div className="relative rounded-xl overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?w=400&h=300&fit=crop"
                      alt="Apartment in Tampere"
                      className="w-full h-60 object-cover transition-transform duration-300 group-hover:scale-105"
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
                      Jan 2-4
                    </p>
                    <p className="text-[15px] text-gray-600 leading-tight">
                      Business host
                    </p>
                    <div className="flex items-center justify-between mt-1.5">
                      <div className="flex items-baseline gap-1">
                        <span className="text-[15px] font-semibold text-gray-900">
                          € 150
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
                          4.92
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="swiper-slide !w-[253px]">
                <Link
                  to={``}
                  href="listing-detail.html"
                  className="relative group cursor-pointer block"
                >
                  <div className="relative rounded-xl overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1484154218962-a197022b5858?w=400&h=300&fit=crop"
                      alt="Apartment in Tampere"
                      className="w-full h-60 object-cover transition-transform duration-300 group-hover:scale-105"
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
                          € 139
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
                          4.9
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="swiper-slide !w-[253px]">
                <Link
                  to={``}
                  href="listing-detail.html"
                  className="relative group cursor-pointer block"
                >
                  <div className="relative rounded-xl overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=400&h=300&fit=crop"
                      alt="Home in Tampere"
                      className="w-full h-60 object-cover transition-transform duration-300 group-hover:scale-105"
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
                      Home in Tampere
                    </h3>
                    <p className="text-[15px] text-gray-600 mt-1 leading-tight">
                      Mar 20-22
                    </p>
                    <p className="text-[15px] text-gray-600 leading-tight">
                      Individual host
                    </p>
                    <div className="flex items-center justify-between mt-1.5">
                      <div className="flex items-baseline gap-1">
                        <span className="text-[15px] font-semibold text-gray-900">
                          € 283
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
                          5
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="swiper-slide !w-[253px]">
                <Link
                  to={``}
                  href="listing-detail.html"
                  className="relative group cursor-pointer block"
                >
                  <div className="relative rounded-xl overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=400&h=300&fit=crop"
                      alt="Apartment in Pirkkala"
                      className="w-full h-60 object-cover transition-transform duration-300 group-hover:scale-105"
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
                      Apartment in Pirkkala
                    </h3>
                    <p className="text-[15px] text-gray-600 mt-1 leading-tight">
                      Jan 2-4
                    </p>
                    <p className="text-[15px] text-gray-600 leading-tight">
                      Individual host
                    </p>
                    <div className="flex items-center justify-between mt-1.5">
                      <div className="flex items-baseline gap-1">
                        <span className="text-[15px] font-semibold text-gray-900">
                          € 154
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
                          5
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="swiper-slide !w-[253px]">
                <Link
                  to={``}
                  href="listing-detail.html"
                  className="relative group cursor-pointer block"
                >
                  <div className="relative rounded-xl overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=400&h=300&fit=crop"
                      alt="Apartment in Tampere"
                      className="w-full h-60 object-cover transition-transform duration-300 group-hover:scale-105"
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
                          € 278
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
                          4.96
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="swiper-slide !w-[253px]">
                <Link
                  to={``}
                  href="listing-detail.html"
                  className="relative group cursor-pointer block"
                >
                  <div className="relative rounded-xl overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400&h=300&fit=crop"
                      alt="Apartment in Tampere"
                      className="w-full h-60 object-cover transition-transform duration-300 group-hover:scale-105"
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
                      Jan 15-17
                    </p>
                    <p className="text-[15px] text-gray-600 leading-tight">
                      Business host
                    </p>
                    <div className="flex items-center justify-between mt-1.5">
                      <div className="flex items-baseline gap-1">
                        <span className="text-[15px] font-semibold text-gray-900">
                          € 115
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
                          4.89
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="mb-12 pt-6">
        <div className="flex items-center justify-between mb-6 px-[2%]">
          <h2 className="text-2xl font-semibold text-gray-900">
            Available in Tallinn this weekend
          </h2>
          <div className="flex items-center gap-2">
            <button
              type="button"
              className="swiper-prev-tallinn p-2 rounded-full border border-gray-300 bg-gray-100 cursor-not-allowed transition-all duration-200"
              aria-label="Previous"
            >
              <svg
                className="w-5 h-5 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button
              type="button"
              className="swiper-next-tallinn p-2 rounded-full border border-gray-300 bg-white hover:shadow-md transition-all duration-200"
              aria-label="Next"
            >
              <svg
                className="w-5 h-5 text-gray-900"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className="px-[2%]">
          <div
            className="swiper swiper-tallinn !pb-4"
            data-swiper="tallinn"
            data-space-between="8"
          >
            <div className="swiper-wrapper">
              <div className="swiper-slide !w-[253px]">
                <Link
                  to={``}
                  href="listing-detail.html"
                  className="relative group cursor-pointer block"
                >
                  <div className="relative rounded-xl overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1505843512647-910227c83fe2?w=400&h=300&fit=crop"
                      alt="Condo in Tallinn"
                      className="w-full h-60 object-cover transition-transform duration-300 group-hover:scale-105"
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
                      Condo in Tallinn
                    </h3>
                    <p className="text-[15px] text-gray-600 mt-1 leading-tight">
                      Dec 26-28
                    </p>
                    <p className="text-[15px] text-gray-600 leading-tight">
                      Business host
                    </p>
                    <div className="flex items-center justify-between mt-1.5">
                      <div className="flex items-baseline gap-1">
                        <span className="text-[15px] font-semibold text-gray-900">
                          € 98
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
                          4.76
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="swiper-slide !w-[253px]">
                <Link
                  to={``}
                  href="listing-detail.html"
                  className="relative group cursor-pointer block"
                >
                  <div className="relative rounded-xl overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1486304877000-0f035397e38f?w=400&h=300&fit=crop"
                      alt="Apartment in Tallinn"
                      className="w-full h-60 object-cover transition-transform duration-300 group-hover:scale-105"
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
                      Apartment in Tallinn
                    </h3>
                    <p className="text-[15px] text-gray-600 mt-1 leading-tight">
                      Dec 26-28
                    </p>
                    <p className="text-[15px] text-gray-600 leading-tight">
                      Individual host
                    </p>
                    <div className="flex items-center justify-between mt-1.5">
                      <div className="flex items-baseline gap-1">
                        <span className="text-[15px] font-semibold text-gray-900">
                          € 112
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
                          4.88
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="swiper-slide !w-[253px]">
                <Link
                  to={``}
                  href="listing-detail.html"
                  className="relative group cursor-pointer block"
                >
                  <div className="relative rounded-xl overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1554995207-c18c203602cb?w=400&h=300&fit=crop"
                      alt="Condo in Tallinn"
                      className="w-full h-60 object-cover transition-transform duration-300 group-hover:scale-105"
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
                      Condo in Tallinn
                    </h3>
                    <p className="text-[15px] text-gray-600 mt-1 leading-tight">
                      Dec 26-28
                    </p>
                    <p className="text-[15px] text-gray-600 leading-tight">
                      Business host
                    </p>
                    <div className="flex items-center justify-between mt-1.5">
                      <div className="flex items-baseline gap-1">
                        <span className="text-[15px] font-semibold text-gray-900">
                          € 105
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
                          4.82
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="swiper-slide !w-[253px]">
                <Link
                  to={``}
                  href="listing-detail.html"
                  className="relative group cursor-pointer block"
                >
                  <div className="relative rounded-xl overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400&h=300&fit=crop"
                      alt="Apartment in Tallinn"
                      className="w-full h-60 object-cover transition-transform duration-300 group-hover:scale-105"
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
                      Apartment in Tallinn
                    </h3>
                    <p className="text-[15px] text-gray-600 mt-1 leading-tight">
                      Dec 26-28
                    </p>
                    <p className="text-[15px] text-gray-600 leading-tight">
                      Business host
                    </p>
                    <div className="flex items-center justify-between mt-1.5">
                      <div className="flex items-baseline gap-1">
                        <span className="text-[15px] font-semibold text-gray-900">
                          € 125
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
                          4.91
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="swiper-slide !w-[253px]">
                <Link
                  to={``}
                  href="listing-detail.html"
                  className="relative group cursor-pointer block"
                >
                  <div className="relative rounded-xl overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=400&h=300&fit=crop"
                      alt="Room in Tallinn"
                      className="w-full h-60 object-cover transition-transform duration-300 group-hover:scale-105"
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
                      Room in Tallinn
                    </h3>
                    <p className="text-[15px] text-gray-600 mt-1 leading-tight">
                      Dec 26-28
                    </p>
                    <p className="text-[15px] text-gray-600 leading-tight">
                      Individual host
                    </p>
                    <div className="flex items-center justify-between mt-1.5">
                      <div className="flex items-baseline gap-1">
                        <span className="text-[15px] font-semibold text-gray-900">
                          € 75
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
                          4.79
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="swiper-slide !w-[253px]">
                <Link
                  to={``}
                  href="listing-detail.html"
                  className="relative group cursor-pointer block"
                >
                  <div className="relative rounded-xl overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?w=400&h=300&fit=crop"
                      alt="Apartment in Põhja-Tallinna"
                      className="w-full h-60 object-cover transition-transform duration-300 group-hover:scale-105"
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
                      Apartment in Põhja-Tallinna
                    </h3>
                    <p className="text-[15px] text-gray-600 mt-1 leading-tight">
                      Dec 26-28
                    </p>
                    <p className="text-[15px] text-gray-600 leading-tight">
                      Business host
                    </p>
                    <div className="flex items-center justify-between mt-1.5">
                      <div className="flex items-baseline gap-1">
                        <span className="text-[15px] font-semibold text-gray-900">
                          € 118
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
                          4.85
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="swiper-slide !w-[253px]">
                <Link
                  to={``}
                  href="listing-detail.html"
                  className="relative group cursor-pointer block"
                >
                  <div className="relative rounded-xl overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1484154218962-a197022b5858?w=400&h=300&fit=crop"
                      alt="Guesthouse in Tallinn"
                      className="w-full h-60 object-cover transition-transform duration-300 group-hover:scale-105"
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
                      Guesthouse in Tallinn
                    </h3>
                    <p className="text-[15px] text-gray-600 mt-1 leading-tight">
                      Dec 26-28
                    </p>
                    <p className="text-[15px] text-gray-600 leading-tight">
                      Business host
                    </p>
                    <div className="flex items-center justify-between mt-1.5">
                      <div className="flex items-baseline gap-1">
                        <span className="text-[15px] font-semibold text-gray-900">
                          € 135
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
                          4.73
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full bg-white py-12 px-6">
        <div className="max-w-[1760px] mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Inspiration for future getaways
          </h2>
          <div className="flex items-center gap-8 mb-8 overflow-x-auto pb-2 scrollbar-hide">
            <button className="text-sm font-semibold whitespace-nowrap pb-2 border-b-2 text-gray-900 border-gray-900">
              Popular
            </button>
            <button className="text-sm font-semibold whitespace-nowrap pb-2 border-b-2 text-gray-500 border-transparent">
              Arts &amp; culture
            </button>
            <button className="text-sm font-semibold whitespace-nowrap pb-2 border-b-2 text-gray-500 border-transparent">
              Beach
            </button>
            <button className="text-sm font-semibold whitespace-nowrap pb-2 border-b-2 text-gray-500 border-transparent">
              Mountains
            </button>
            <button className="text-sm font-semibold whitespace-nowrap pb-2 border-b-2 text-gray-500 border-transparent">
              Outdoors
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div className="space-y-4">
              <Link to={``} className="block hover:underline">
                <div className="font-semibold text-gray-900">Athens</div>
                <div className="text-sm text-gray-600">House rentals</div>
              </Link>
              <Link to={``} className="block hover:underline">
                <div className="font-semibold text-gray-900">
                  Pocono Mountains
                </div>
                <div className="text-sm text-gray-600">Cabin rentals</div>
              </Link>
              <Link to={``} className="block hover:underline">
                <div className="font-semibold text-gray-900">Daytona Beach</div>
                <div className="text-sm text-gray-600">Villa rentals</div>
              </Link>
              <Link to={``} className="block hover:underline">
                <div className="font-semibold text-gray-900">Gulf Shores</div>
                <div className="text-sm text-gray-600">Condo rentals</div>
              </Link>
              <Link to={``} className="block hover:underline">
                <div className="font-semibold text-gray-900">Oahu</div>
                <div className="text-sm text-gray-600">Vacation rentals</div>
              </Link>
              <Link to={``} className="block hover:underline">
                <div className="font-semibold text-gray-900">Barcelona</div>
                <div className="text-sm text-gray-600">Apartment rentals</div>
              </Link>
            </div>
            <div className="space-y-4">
              <Link to={``} className="block hover:underline">
                <div className="font-semibold text-gray-900">
                  West Palm Beach
                </div>
                <div className="text-sm text-gray-600">Vacation rentals</div>
              </Link>
              <Link to={``} className="block hover:underline">
                <div className="font-semibold text-gray-900">Madrid</div>
                <div className="text-sm text-gray-600">Vacation rentals</div>
              </Link>
              <Link to={``} className="block hover:underline">
                <div className="font-semibold text-gray-900">Raleigh</div>
                <div className="text-sm text-gray-600">Condo rentals</div>
              </Link>
              <Link to={``} className="block hover:underline">
                <div className="font-semibold text-gray-900">Dallas</div>
                <div className="text-sm text-gray-600">Monthly Rentals</div>
              </Link>
              <Link to={``} className="block hover:underline">
                <div className="font-semibold text-gray-900">Amsterdam</div>
                <div className="text-sm text-gray-600">Vacation rentals</div>
              </Link>
              <Link to={``} className="block hover:underline">
                <div className="font-semibold text-gray-900">Kauai</div>
                <div className="text-sm text-gray-600">Monthly Rentals</div>
              </Link>
            </div>
            <div className="space-y-4">
              <Link to={``} className="block hover:underline">
                <div className="font-semibold text-gray-900">Whistler</div>
                <div className="text-sm text-gray-600">Condo rentals</div>
              </Link>
              <Link to={``} className="block hover:underline">
                <div className="font-semibold text-gray-900">Detroit</div>
                <div className="text-sm text-gray-600">Monthly Rentals</div>
              </Link>
              <Link to={``} className="block hover:underline">
                <div className="font-semibold text-gray-900">Albuquerque</div>
                <div className="text-sm text-gray-600">Apartment rentals</div>
              </Link>
              <Link to={``} className="block hover:underline">
                <div className="font-semibold text-gray-900">Charlotte</div>
                <div className="text-sm text-gray-600">House rentals</div>
              </Link>
            </div>
          </div>
          <div className="flex justify-end">
            <Link
              to={``}
              className="text-sm font-semibold text-gray-900 hover:underline flex items-center gap-1"
            >
              Show more
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
//! ---------------------------------------- Export
export default ListDetails;
