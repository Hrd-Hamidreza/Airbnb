//! ---------------------------------------- Import
import NavigationBtnSkeleton from "../../Btn/NavigationBtnSkeleton";
import CardsSkeleton from "../../Card/Skeleton/MainCardsSkeleton";
//! ---------------------------------------- Variables
const skeletonCount = 5;
//! ---------------------------------------- Component (MainSwiperBoxSkeleton)
function MainSwiperBoxSkeleton() {
  //! ---------------------------------------- Return
  return (
    <>
      <div className="flex flex-col">
        <div className="flex items-center justify-between">
          {/* title */}
          <h2 className="skeleton w-3/12">.</h2>

          {/* Navigation Buttons */}
          <NavigationBtnSkeleton />
        </div>
      </div>

      {/* Swiper */}
      <div>
        <div className="flex gap-8">
          {/* ComponentCard */}
          {Array.from({ length: skeletonCount }).map((_, index) => (
            <div key={index} className="!w-60">
              <CardsSkeleton />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
//! ---------------------------------------- Export
export default MainSwiperBoxSkeleton;
