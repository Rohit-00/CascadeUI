
const VerticalSteps = () => {
  return (
    <div className="mt-9">
        <div className="sm:text-6xl text-3xl font-semibold">How to Integrate:</div>
        <div className="p-2 borderZZZZ w-9 rounded-full h-9 justify-center items-center flex bg-slate-900">1.</div>
        <svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">
      {/* Draw a line from (10, 10) to (190, 190) */}
      <line 
        x1="10" 
        y1="10" 
        x2="10" 
        y2="200" 
        stroke="white" // Line color
        strokeWidth="2" // Line thickness
      />
    </svg>
    </div>
  );
};

export default VerticalSteps;
