import { Iphone15Pro } from "./iphone"

function Phone() {
  return (
    <div className="relative flex flex-row justify-center ">
      <Iphone15Pro src="" className="sm:size-[30rem] size-[25rem] max-w-fit z-40 transition-transform ease-in-out hover:scale-110 cursor-pointer"/>
      <Iphone15Pro src="" className="sm:size-[30rem] size-[25rem] max-w-fit absolute rotate-12  right-4 transition-transform ease-in-out hover:scale-110 cursor-pointer hover:z-50"/>
      <Iphone15Pro src="" className="sm:size-[30rem] size-[25rem] max-w-fit absolute -rotate-12  left-4 transition-transform ease-in-out hover:scale-110 cursor-pointer hover:z-50"/>
    </div>
  )
}

export default Phone
