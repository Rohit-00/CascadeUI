    const comps = [

      {src:'https://cloud.appwrite.io/v1/storage/buckets/670bf3d800356f2d1307/files/671c400e0023a10aac89/view?project=66cc3f88001fcc4896d5&project=66cc3f88001fcc4896d5&mode=admin',title:'Animated Sign In form',poster:'',link:''},
      {src:'https://cloud.appwrite.io/v1/storage/buckets/670bf3d800356f2d1307/files/671c3ff8002d2bfce862/view?project=66cc3f88001fcc4896d5&project=66cc3f88001fcc4896d5&mode=admin',title:'Circular Progress Number',poster:''},
      {src:'https://cloud.appwrite.io/v1/storage/buckets/670bf3d800356f2d1307/files/671c3fee000c04f75efe/view?project=66cc3f88001fcc4896d5&project=66cc3f88001fcc4896d5&mode=admin',title:'Hold to open menu',poster:''},
      {src:'https://cloud.appwrite.io/v1/storage/buckets/670bf3d800356f2d1307/files/671c3fe8003700d7248e/view?project=66cc3f88001fcc4896d5&project=66cc3f88001fcc4896d5&mode=admin',title:'Animated Tabs',poster:''},
      {src:'https://cloud.appwrite.io/v1/storage/buckets/670bf3d800356f2d1307/files/671c3fdf00140966e248/view?project=66cc3f88001fcc4896d5&project=66cc3f88001fcc4896d5&mode=admin',title:'Password toggle',poster:''},

]

const Screen = ({item}:any) =>{
    return(
   <a href={item.link}> <video poster="" height={400} width={200} src={item.src} loop autoPlay muted  className="rounded-xl transition-transform ease-in-out hover:scale-110 cursor-pointer m-6" /> </a> 
    )
}


function Components() {
  return (
    <div className=" mt-96 sm:mt-32 justify-center items-center">
     <div className="flex flex-col">
        <div className="text-blue-500 text-xl font-bold text-center">
          Increasing day by day
        </div>
      <div className="sm:text-5xl text-3xl font-bold text-center">
      Components
      </div>
      <div className="dark:text-gray-300 mt-2 sm:mt-5 text-center mb-3 sm:mb-9">
      The library is expanding as I make new components every now and then<br/>
      follow me on twitter to find out what component I'm working on
      </div>
      </div>

      <div className="flex sm:flex-row mx-14">

      {comps.map((item)=>
        <div>
            <Screen item={item} />
        </div>
    )} 
          </div>
          <a href='https://uidocs.pages.dev/components/animatedbutton/' target="_blank">
          <div className=" flex flex-row items-center justify-center mt-11"><div className="border border-gray-800 dark:border-gray-300 p-3 rounded-xl">Browse all</div></div>
          </a>
    </div>
  )
}

export default Components
