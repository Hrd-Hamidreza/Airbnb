//! ---------------------------------------- Import
//! ---------------------------------------- Variables
const imagesLength = 4;
//! ---------------------------------------- Component (PropertyPhotoesSkeleton)
function PropertyPhotoesSkeleton() {
  //! ---------------------------------------- Return
  return (
    <>
      <div id="photos" className="scroll-mt-83">
        <div className="grid xl:grid-cols-3 grid-flow-row max-h-145 overflow-auto gap-4">
          {Array.from({ length: imagesLength }).map((_, index) => (
            <div key={index} className={`rounded-xl overflow-hidden skeleton`}>
              <img
                alt={`Image-${index + 1}`}
                className="xl:h-70 w-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
//! ---------------------------------------- Export
export default PropertyPhotoesSkeleton;
