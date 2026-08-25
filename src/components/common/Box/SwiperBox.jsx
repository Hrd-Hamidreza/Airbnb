//! ---------------------------------------- Import
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { SwiperCard, NavigationBtn } from "@/components";
//! ---------------------------------------- Component (SwiperBox)
function SwiperBox({ box }) {
  //! ---------------------------------------- Hooks
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  //! ---------------------------------------- Return
  return (
    <>
      {/* Head */}
      <div className="flex flex-col">
        {/* Title Text */}
        <div className="flex items-center justify-between">
          {/* Text */}
          <h2 className="text-2xl font-semibold text-gray-900">{box?.title}</h2>
          {/* Navigation Buttons */}
          <NavigationBtn {...{ prevRef, nextRef }} />
        </div>
        {/* SubTitle */}
        <h2 className="text-lg text-gray-700">{box?.subTitle}</h2>
      </div>
      {/* Swiper */}
      <div>
        <Swiper
          modules={[Navigation]}
          navigation
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef?.current;
            swiper.params.navigation.nextEl = nextRef?.current;
          }}
          spaceBetween={8}
          slidesPerView="auto"
        >
          {box?.cards?.map((card) => (
            <SwiperSlide key={card?.id} className="!w-[240px]">
              <SwiperCard {...{ card, type: box.type }} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}
//! ---------------------------------------- Export
export default SwiperBox;
