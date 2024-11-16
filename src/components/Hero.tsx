import { Link } from "react-router-dom"
import Phone from "./phones"

const Hero = () => {
  return (
    <div className="flex  flex-col sm:flex-row mt-10 items-center justify-between">
      <div className="w-full"><div className=" sm:text-7xl text-3xl font-bold"><a>Beautiful Apps <br/> With Minimal Effort</a>
      </div>
      <div className="text-gray-400">
        Collection of stunning animated components that are easy to integrate
      </div>
      <div className="flex flex-row  gap-4 items-center mt-6">
      <a href={'https://uidocs.pages.dev/components/animatedbutton/'}>
      <div className="p-3 border-2 rounded-lg">
        Components
      </div>
      </a>
      <a href="https://uidocs.pages.dev/components/animatedbutton/" target="_blank">
      <div>
        Documentation
      </div>
      </a>
      </div>
      </div>
      <div className="w-full mt-9">
        <Phone/>
      </div>
    </div>
  )
}

export default Hero
