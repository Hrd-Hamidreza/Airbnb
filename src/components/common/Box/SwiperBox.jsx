//! ---------------------------------------- Import
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { NavigationBtn, SeeAllCard } from "@/components";
//! ---------------------------------------- Component (SwiperBox)
function SwiperBox({ data = [], title, subTitle, ComponentCard }) {
  //! ---------------------------------------- Variables
  const from = 0;
  const to = Math.floor(window.innerWidth / 240);
  //! ---------------------------------------- Hooks
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  //! ---------------------------------------- Return
  return (
    <>
      <div className="flex flex-col">
        <div className="flex items-center justify-between">
          {/* title */}
          <h2 className="text-2xl font-semibold text-gray-900">{title}</h2>

          {/* Navigation Buttons */}
          <NavigationBtn {...{ prevRef, nextRef }} />
        </div>
        {subTitle && <h3>{subTitle}</h3>}
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
          {/* ComponentCard */}
          {data?.slice(from, to)?.map((card) => (
            <SwiperSlide key={card?.id} className="!w-60">
              <ComponentCard {...{ card }} />
            </SwiperSlide>
          ))}

          {/* SeeAllCards */}
          {data?.length > to && (
            <SwiperSlide className="!w-60">
              <SeeAllCard {...{ data, to }} />
            </SwiperSlide>
          )}
        </Swiper>
      </div>
    </>
  );
}
//! ---------------------------------------- Export
export default SwiperBox;
