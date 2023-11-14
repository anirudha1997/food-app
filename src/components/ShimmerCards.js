import "../assets/css/Shimmer.css";
const ShimmerCards = () => {
  const animateShimmer = {
    background: "linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%)",
    backgroundSize: "200% 100%",
    animation: "shimmer 1.5s infinite",
  };

  return (
    <div className="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-y-5 pt-[15px]">
      <div
        className="col-span-1 h-[350px] bg-slate-200 m-4 p-4"
        style={animateShimmer}
      ></div>
      <div
        className="col-span-1 h-[350px] bg-slate-200 m-4 p-4"
        style={animateShimmer}
      ></div>
      <div
        className="col-span-1 h-[350px] bg-slate-200 m-4 p-4"
        style={animateShimmer}
      ></div>
      <div
        className="col-span-1 h-[350px] bg-slate-200 m-4 p-4"
        style={animateShimmer}
      ></div>
      <div
        className="col-span-1 h-[350px] bg-slate-200 m-4 p-4"
        style={animateShimmer}
      ></div>
      <div
        className="col-span-1 h-[350px] bg-slate-200 m-4 p-4"
        style={animateShimmer}
      ></div>
      <div
        className="col-span-1 h-[350px] bg-slate-200 m-4 p-4"
        style={animateShimmer}
      ></div>
      <div
        className="col-span-1 h-[350px] bg-slate-200 m-4 p-4"
        style={animateShimmer}
      ></div>
      <div
        className="col-span-1 h-[350px] bg-slate-200 m-4 p-4"
        style={animateShimmer}
      ></div>
      <div
        className="col-span-1 h-[350px] bg-slate-200 m-4 p-4"
        style={animateShimmer}
      ></div>
    </div>
  );
};

export default ShimmerCards;
