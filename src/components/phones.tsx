import { Iphone15Pro } from "./iphone"

function Phone() {
  return (
    <div className="relative flex flex-row justify-center ">
      <Iphone15Pro src="https://i.ibb.co/bHnBKd3/on-Board-Animation.webp" className="sm:size-[30rem] size-[25rem] max-w-fit z-40 transition-transform ease-in-out hover:scale-110 cursor-pointer"/>
      <Iphone15Pro src="https://i.ibb.co/gdRH7wT/Animated-Buttongif.webp" className="sm:size-[30rem] size-[25rem] max-w-fit absolute rotate-12  right-4 transition-transform ease-in-out hover:scale-110 cursor-pointer hover:z-50"/>
      <Iphone15Pro src="https://i.ibb.co/nRyDfw3/Credit-Card-ezgif-com-video-to-webp-converter.webp" className="sm:size-[30rem] size-[25rem] max-w-fit absolute -rotate-12  left-4 transition-transform ease-in-out hover:scale-110 cursor-pointer hover:z-50"/>
    </div>
  )
}

export default Phone
