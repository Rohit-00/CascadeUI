const comps = [

    {src:'https://cloud.appwrite.io/v1/storage/buckets/670bf3d800356f2d1307/files/670bfa57002fc8873ab8/view?project=66cc3f88001fcc4896d5&project=66cc3f88001fcc4896d5&mode=admin',title:'Animated Button',poster:''},
    {src:'https://cloud.appwrite.io/v1/storage/buckets/670bf3d800356f2d1307/files/670bfa57002fc8873ab8/view?project=66cc3f88001fcc4896d5&project=66cc3f88001fcc4896d5&mode=admin',title:'Animated Button',poster:''},
    {src:'https://cloud.appwrite.io/v1/storage/buckets/670bf3d800356f2d1307/files/670bfa57002fc8873ab8/view?project=66cc3f88001fcc4896d5&project=66cc3f88001fcc4896d5&mode=admin',title:'Animated Button',poster:''},
    {src:'https://cloud.appwrite.io/v1/storage/buckets/670bf3d800356f2d1307/files/670bfa57002fc8873ab8/view?project=66cc3f88001fcc4896d5&project=66cc3f88001fcc4896d5&mode=admin',title:'Animated Button',poster:''},
    {src:'https://cloud.appwrite.io/v1/storage/buckets/670bf3d800356f2d1307/files/670bfa57002fc8873ab8/view?project=66cc3f88001fcc4896d5&project=66cc3f88001fcc4896d5&mode=admin',title:'Animated Button',poster:''},
    {src:'https://cloud.appwrite.io/v1/storage/buckets/670bf3d800356f2d1307/files/670bfa57002fc8873ab8/view?project=66cc3f88001fcc4896d5&project=66cc3f88001fcc4896d5&mode=admin',title:'Animated Button',poster:''},
    {src:'https://cloud.appwrite.io/v1/storage/buckets/670bf3d800356f2d1307/files/670bfa57002fc8873ab8/view?project=66cc3f88001fcc4896d5&project=66cc3f88001fcc4896d5&mode=admin',title:'Animated Button',poster:''},
    {src:'https://cloud.appwrite.io/v1/storage/buckets/670bf3d800356f2d1307/files/670bfa57002fc8873ab8/view?project=66cc3f88001fcc4896d5&project=66cc3f88001fcc4896d5&mode=admin',title:'Animated Button',poster:''},



]

const Screen = ({item}:any) =>{
    return(
      <div className="mt-9 "><div className="justify-center items-center flex flex-col transition-transform ease-in-out hover:scale-110 cursor-pointer"><video poster="" height={400} width={200} src={item.src} loop autoPlay muted  className=" rounded-xl " />{item.title} </div> </div> 
    )
}

function ComponentsPage() {
  return (
    <div className="mt-16">
      <div className="flex flex-row justify-between items-baseline"><div className="text-3xl sm:text-5xl font-semibold">Components</div><div>Documentation</div></div>
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
