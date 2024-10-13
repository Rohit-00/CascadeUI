import { useState } from "react";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [isFading, setIsFading] = useState(false);

  const tabs = [
    { label: "Step 1", content:<div>Install dependencies</div>},
    { label: "Step 2", content: "Content for Tab 2" },
    { label: "Step 3", content: "Content for Tab 3" },
  ];

  const handleTabChange = (index:any) => {
    setIsFading(true); // Start fade-out animation

    // After the fade-out animation completes, change the tab and trigger fade-in
    setTimeout(() => {
      setActiveTab(index);
      setIsFading(false); // Start fade-in animation
    }, 300); // Match this with the transition duration
  };

  return (
    <div className="flex flex-col items-center justify-center mt-10">
      {/* Tabs with highlight animation */}
      <div className="relative border-b border-gray-300 mb-4">
        <ul className="flex space-x-4 relative">
          {tabs.map((tab, index) => (
            <li key={index}>
              <button
                className={`px-4 py-2 font-semibold relative ${
                  activeTab === index
                    ? "dark:text-white text-black"
                    : "text-gray-500 hover:dark:text-white hover:text-black"
                }`}
                onClick={() => handleTabChange(index)}
              >
                {tab.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Animated Highlighter */}
        <div
          className="absolute bottom-0 h-[2px] bg-black dark:bg-white transition-all duration-300"
          style={{
            width: `${100 / tabs.length}%`, // Divide by the number of tabs
            transform: `translateX(${activeTab * 100}%)`, // Move based on the active tab
          }}
        />
      </div>

      {/* Content with animation */}
      <div
        className={`tab-content transition-opacity duration-300 ${
          isFading ? "opacity-0" : "opacity-100"
        }`}
      >
        {tabs.map((tab, index) => (
          <div
            key={index}
            className={`tab-pane ${activeTab === index ? "block" : "hidden"}`}
          >
            <div className="h-96">
            <p>{tab.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tabs;
