//! ---------------------------------------- Import

//! ---------------------------------------- Component (Services)
function Services() {
  return (
    <>
      <section className="w-full bg-white py-12 px-6">
        <div className="max-w-[1760px] mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Services in Helsinki
          </h2>
          <div
            className="swiper swiper-service-cats !pb-4"
            data-swiper=""
            data-space-between="10"
          >
            <div className="swiper-wrapper">
              <div className="swiper-slide !w-[200px]">
                <div>
                  <div className="relative rounded-xl overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?w=300&h=300&fit=crop"
                      alt="Photography"
                      className="w-full h-[200px] object-cover"
                    />
                  </div>
                  <div className="mt-3">
                    <h3 className="text-[15px] font-medium text-gray-900">
                      Photography
                    </h3>
                    <p className="text-sm text-gray-600 mt-1">1 available</p>
                  </div>
                </div>
              </div>
              <div className="swiper-slide !w-[200px]">
                <div>
                  <div className="relative rounded-xl overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=300&h=300&fit=crop"
                      alt="Chefs"
                      className="w-full h-[200px] object-cover"
                    />
                  </div>
                  <div className="mt-3">
                    <h3 className="text-[15px] font-medium text-gray-900">
                      Chefs
                    </h3>
                    <p className="text-sm text-gray-600 mt-1">Coming soon</p>
                  </div>
                </div>
              </div>
              <div className="swiper-slide !w-[200px]">
                <div>
                  <div className="relative rounded-xl overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1556911220-bff31c812dba?w=300&h=300&fit=crop"
                      alt="Prepared meals"
                      className="w-full h-[200px] object-cover"
                    />
                  </div>
                  <div className="mt-3">
                    <h3 className="text-[15px] font-medium text-gray-900">
                      Prepared meals
                    </h3>
                    <p className="text-sm text-gray-600 mt-1">Coming soon</p>
                  </div>
                </div>
              </div>
              <div className="swiper-slide !w-[200px]">
                <div>
                  <div className="relative rounded-xl overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=300&h=300&fit=crop"
                      alt="Massage"
                      className="w-full h-[200px] object-cover"
                    />
                  </div>
                  <div className="mt-3">
                    <h3 className="text-[15px] font-medium text-gray-900">
                      Massage
                    </h3>
                    <p className="text-sm text-gray-600 mt-1">Coming soon</p>
                  </div>
                </div>
              </div>
              <div className="swiper-slide !w-[200px]">
                <div>
                  <div className="relative rounded-xl overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=300&fit=crop"
                      alt="Training"
                      className="w-full h-[200px] object-cover"
                    />
                  </div>
                  <div className="mt-3">
                    <h3 className="text-[15px] font-medium text-gray-900">
                      Training
                    </h3>
                    <p className="text-sm text-gray-600 mt-1">Coming soon</p>
                  </div>
                </div>
              </div>
              <div className="swiper-slide !w-[200px]">
                <div>
                  <div className="relative rounded-xl overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=300&h=300&fit=crop"
                      alt="Makeup"
                      className="w-full h-[200px] object-cover"
                    />
                  </div>
                  <div className="mt-3">
                    <h3 className="text-[15px] font-medium text-gray-900">
                      Makeup
                    </h3>
                    <p className="text-sm text-gray-600 mt-1">Coming soon</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full bg-white py-12 px-6">
        <div className="max-w-[1760px] mx-auto">
          <h2 className="text-2xl font-bold text-gray-900">
            Discover services on Airbnb
          </h2>
          <p className="text-lg text-gray-600 mt-1 mb-6">Chefs</p>
          <div
            className="swiper swiper-service-chefs !pb-4"
            data-swiper=""
            data-space-between="10"
          >
            <div className="swiper-wrapper">
              <div className="swiper-slide !w-[253px]">
                <div className="relative group cursor-pointer">
                  <div className="relative rounded-xl overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1542838132-92c53300491e?w=400&h=300&fit=crop"
                      alt="Authentic Roman meal"
                      className="w-full h-[242px] object-cover group-hover:scale-105 transition-transform duration-300"
                    />

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
                      Authentic Roman meal
                    </h3>
                  </div>
                </div>
              </div>
              <div className="swiper-slide !w-[253px]">
                <div className="relative group cursor-pointer">
                  <div className="relative rounded-xl overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=400&h=300&fit=crop"
                      alt="Hyperlocal, foraged fare by Clair"
                      className="w-full h-[242px] object-cover group-hover:scale-105 transition-transform duration-300"
                    />

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
                      Hyperlocal, foraged fare by Clair
                    </h3>
                    <p className="text-sm text-gray-600 mt-1">
                      From € 85/guest
                    </p>
                  </div>
                </div>
              </div>
              <div className="swiper-slide !w-[253px]">
                <div className="relative group cursor-pointer">
                  <div className="relative rounded-xl overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1556911220-bff31c812dba?w=400&h=300&fit=crop"
                      alt="Behind the flame by Erick"
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
                      Behind the flame by Erick
                    </h3>
                    <p className="text-sm text-gray-600 mt-1">Popular</p>
                  </div>
                </div>
              </div>
              <div className="swiper-slide !w-[253px]">
                <div className="relative group cursor-pointer">
                  <div className="relative rounded-xl overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
                      alt="Cali-Mediterranean menus by Liza"
                      className="w-full h-[242px] object-cover group-hover:scale-105 transition-transform duration-300"
                    />

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
                      Cali-Mediterranean menus by Liza
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
//! ---------------------------------------- Export
export default Services;
