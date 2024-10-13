import { Iphone15Pro } from "./iphone"

function Phone() {
  return (
    <div className="relative flex flex-row justify-center ">
      <Iphone15Pro className="sm:size-[30rem] size-[25rem] max-w-fit z-40"/>
      <Iphone15Pro className="sm:size-[30rem] size-[25rem] max-w-fit absolute rotate-12  right-4"/>
      <Iphone15Pro className="sm:size-[30rem] size-[25rem] max-w-fit absolute -rotate-12  left-4"/>
    </div>
  )
}

export default Phone
