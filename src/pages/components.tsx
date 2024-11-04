const comps = [

    {src:'https://cloud.appwrite.io/v1/storage/buckets/670bf3d800356f2d1307/files/670bfa57002fc8873ab8/view?project=66cc3f88001fcc4896d5&project=66cc3f88001fcc4896d5&mode=admin',title:'Animated Button',poster:'https://i.ibb.co/ZhRFs43/Untitled-design.png'},
    {src:'https://cloud.appwrite.io/v1/storage/buckets/670bf3d800356f2d1307/files/671c400e0023a10aac89/view?project=66cc3f88001fcc4896d5&project=66cc3f88001fcc4896d5&mode=admin',title:'Animated Sign In form',poster:''},
    {src:'https://cloud.appwrite.io/v1/storage/buckets/670bf3d800356f2d1307/files/671c400700018980ac2c/view?project=66cc3f88001fcc4896d5&project=66cc3f88001fcc4896d5&mode=admin',title:'Circular Progress',poster:''},
    {src:'https://cloud.appwrite.io/v1/storage/buckets/670bf3d800356f2d1307/files/671c3ff8002d2bfce862/view?project=66cc3f88001fcc4896d5&project=66cc3f88001fcc4896d5&mode=admin',title:'Circular Progress Number',poster:''},
    {src:'https://cloud.appwrite.io/v1/storage/buckets/670bf3d800356f2d1307/files/671c3fee000c04f75efe/view?project=66cc3f88001fcc4896d5&project=66cc3f88001fcc4896d5&mode=admin',title:'Hold to open menu',poster:''},
    {src:'https://cloud.appwrite.io/v1/storage/buckets/670bf3d800356f2d1307/files/671c3fe8003700d7248e/view?project=66cc3f88001fcc4896d5&project=66cc3f88001fcc4896d5&mode=admin',title:'Animated Tabs',poster:''},
    {src:'https://cloud.appwrite.io/v1/storage/buckets/670bf3d800356f2d1307/files/671c3fdf00140966e248/view?project=66cc3f88001fcc4896d5&project=66cc3f88001fcc4896d5&mode=admin',title:'Password toggle',poster:''},
]

const Screen = ({item}:any) =>{
    return(
      <div className="mt-9 "><div className="justify-center items-center flex flex-col transition-transform ease-in-out hover:scale-110 cursor-pointer"><video poster={item.poster} height={400} width={200} src={item.src} loop autoPlay muted  className=" rounded-xl " />{item.title} </div> </div> 
    )
}

function ComponentsPage() {
  return (
    <div className="mt-16">
      <div className="flex flex-row justify-between items-baseline"><div className="text-3xl sm:text-5xl font-semibold">Components</div><a href="https://uidocs.pages.dev/components/animatedbutton/" target="_blank"><div>Documentation</div></a></div>
      <div className="grid sm:grid-cols-4 justify-center items-center self-center">
      {comps.map((item)=>
        <div>
            <Screen item={item} />
        </div>
    )} 
          </div>
    </div>
  )
}

export default ComponentsPage
