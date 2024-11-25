import  { useEffect, useRef } from 'react'

const InfiniteScrollCards = () => {
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (scrollContainer) {
      const scrollWidth = scrollContainer.scrollWidth
      const animationDuration = scrollWidth / 50 // Adjust speed here

      scrollContainer.style.animationDuration = `${animationDuration}s`
    }
  }, [])

  return (
    <>
    <div className="flex flex-col sm:mt-32 mt-[30rem]">
    <div className="text-blue-500 text-xl font-bold text-center">
      Increasing day by day
    </div>
  <div className="sm:text-5xl text-3xl font-bold text-center">
  Components
  </div>
  <div className="dark:text-gray-300 mt-2 sm:mt-5 text-center sm:mb-9 sm:w-[40rem] self-center">
  Clean and beautiful animated components that can make your app look and feel 10x better.
  </div>
  </div>
    <div className="relative w-full overflow-hidden py-3 sm:mt-0 ">
         
      {/* Left gradient overlay */}
      <div className="absolute left-0 top-0 z-10 h-full w-2/6 bg-gradient-to-r dark:from-black from-white to-transparent"></div>
      
      {/* Right gradient overlay */}
      <div className="absolute right-0 top-0 z-10 h-full w-2/6 bg-gradient-to-l dark:from-black from-white to-transparent"></div>
      
      {/* Scrolling container */}
      <div 
        ref={scrollRef}
        className="flex animate-scroll gap-4 py-4"
        style={{ width: 'fit-content' }}
      >
        {[...Array(10)].map((_, index) => (
          <div
            key={index}
            className="h-96 w-56 flex-shrink-0 rounded-lg bg-gray-200 shadow-md"
          ></div>
        ))}
      </div>
    </div>
    </>
  )
}

export default InfiniteScrollCards

