//! ---------------------------------------- Import
import { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Keyboard, Navigation } from "swiper/modules";
import "swiper/css";
import ProjectIcons from "../Icon/ProjectIcons";
//! ---------------------------------------- Component (GalleryModal)
function GalleryModal({ openGallery, data, imageIndex, setImageIndex, close }) {
  if (!openGallery) return null;
  //! ---------------------------------------- Hooks
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const swiperRef = useRef(null);
  //! --------------------
  useEffect(() => {
    if (!openGallery || !swiperRef.current) return;

    const swiper = swiperRef.current;

    swiper.params.navigation.prevEl = prevRef.current;
    swiper.params.navigation.nextEl = nextRef.current;

    swiper.navigation.init();
    swiper.navigation.update();

    return () => {
      swiper.navigation.destroy();
    };
  }, [openGallery]);
  //! ---------------------------------------- Function
  const handleIcon = (idx) => {
    swiperRef?.current?.slideTo(idx);
  };
  //! ---------------------------------------- Return
  return (
    <>
      <div
        onClick={(event) => {
          if (event.target === event.currentTarget) {
            close();
          }
        }}
        className="fixed inset-0 bg-black/90 z-51 flex items-center justify-between p-10"
      >
        {/* close */}
        <button
          onClick={close}
          className="absolute left-10 top-10 cursor-pointer w-10 h-10 rounded-full bg-mist-800 flex-center text-2xl font-bold text-white"
        >
          <ProjectIcons type={`close`} />
        </button>

        {/* prevEl */}
        <button
          ref={prevRef}
          aria-label="previous"
          className="cursor-pointer w-10 h-10 rounded-full text-white bg-mist-800  flex-center text-2xl font-bold disabled:cursor-not-allowed disabled:opacity-20"
        >
          <ProjectIcons type={`rewind`} className={`relative right-0.5`} />
        </button>

        {/* Slide */}
        <div className="w-4/6 h-[85vh] flex flex-col items-center gap-3">
          <div className="flex-center gap-2 cursor-pointer">
            {Array.from({ length: data?.length }).map((_, idx) => (
              <ProjectIcons
                onClick={() => handleIcon(idx)}
                key={idx}
                type={`circle`}
                className={`${idx === imageIndex ? "text-rose-500 text-xl" : "text-white text-s"}`}
              />
            ))}
          </div>
          <div className="w-full flex-1 min-h-0">
            <Swiper
              modules={[Navigation, Keyboard]}
              onSlideChange={(swiper) => setImageIndex(swiper?.activeIndex)}
              onSwiper={(swiper) => {
                swiperRef.current = swiper;
              }}
              initialSlide={imageIndex}
              spaceBetween={0}
              slidesPerView={1}
              className="w-full h-full"
              allowTouchMove={true}
              loop={false}
              watchSlidesProgress={true}
              keyboard={{ enabled: true }}
            >
              {data?.map((image, index) => (
                <SwiperSlide
                  key={image?.id}
                  className="flex items-center justify-center"
                >
                  <img
                    alt={`Image-${index + 1}`}
                    src={image?.url}
                    className="h-full w-full object-contain"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>

        {/* nextEl */}
        <button
          ref={nextRef}
          aria-label="next"
          className="cursor-pointer w-10 h-10 rounded-full text-white bg-mist-800  flex-center text-2xl font-bold disabled:cursor-not-allowed disabled:opacity-20"
        >
          <ProjectIcons type={`forward`} className={`relative left-0.5`} />
        </button>
      </div>
    </>
  );
}
//! ---------------------------------------- Export
export default GalleryModal;
