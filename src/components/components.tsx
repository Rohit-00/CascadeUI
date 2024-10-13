import { Iphone15Pro } from "./iphone"

const comps = [
    {src:'https://i.ibb.co/gdRH7wT/Animated-Buttongif.webp',title:''},
    {src:'https://i.ibb.co/bHnBKd3/on-Board-Animation.webp',title:''},
    {src:'https://i.ibb.co/SQXT9gL/Multi-Step-Loader-ezgif-com-video-to-webp-converter.webp',title:''},
    {src:'https://i.ibb.co/GsSFXyz/Animated-Listt-ezgif-com-video-to-webp-converter-1.webp',title:''},
    {src:'https://i.ibb.co/nRyDfw3/Credit-Card-ezgif-com-video-to-webp-converter.webp',title:''},
    {src:'',title:''},
]

const Screen = ({item}:any) =>{
    return(
        <Iphone15Pro src={item.src} className="  h-[400px] w-[200px]  m-10 transition-transform ease-in-out hover:scale-110 cursor-pointer rounded-lg"></Iphone15Pro>
    )
}

function Components() {
  return (
    <div className="mt-9">
      <div className="text-3xl sm:text-6xl font-semibold">Components</div>
      <div className="grid sm:grid-cols-5 justify-center items-center ">
    {comps.map((item)=>
    <div><Screen item={item}/></div>
    )}
      </div>
    </div>
  )
}

export default Components
