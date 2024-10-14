    const comps = [
    {src:'https://cloud.appwrite.io/v1/storage/buckets/670bf3d800356f2d1307/files/670bf4250008ecb6c9a5/view?project=66cc3f88001fcc4896d5&project=66cc3f88001fcc4896d5&mode=admin',title:''},
    {src:'https://cloud.appwrite.io/v1/storage/buckets/670bf3d800356f2d1307/files/670d0a40001a1506aea3/view?project=66cc3f88001fcc4896d5&project=66cc3f88001fcc4896d5&mode=admin',title:''},
    {src:'https://cloud.appwrite.io/v1/storage/buckets/670bf3d800356f2d1307/files/670d0a3500172ecc3b46/view?project=66cc3f88001fcc4896d5&project=66cc3f88001fcc4896d5&mode=admin',title:''},
    {src:'https://cloud.appwrite.io/v1/storage/buckets/670bf3d800356f2d1307/files/670d0a2c001ca6043c15/view?project=66cc3f88001fcc4896d5&project=66cc3f88001fcc4896d5&mode=admin',title:''},
    {src:'https://cloud.appwrite.io/v1/storage/buckets/670bf3d800356f2d1307/files/670bfa57002fc8873ab8/view?project=66cc3f88001fcc4896d5&project=66cc3f88001fcc4896d5&mode=admin',title:''},
]

const Screen = ({item}:any) =>{
    return(
      <div className="mt-9 h-24 "> <video height={400} width={200} src={item.src} loop autoPlay muted  className="rounded-xl transition-transform ease-in-out hover:scale-110 cursor-pointer" /> </div> 
    )
}

function Components() {
  return (
    <div className="mt-9">
      <div className="flex flex-row justify-between items-baseline"><div className="text-3xl sm:text-6xl font-semibold">Components</div><div>all components</div></div>
      <div className="grid sm:grid-cols-5 justify-center items-center ">
      {comps.map((item)=>
        <div>
            <Screen item={item} />
        </div>
    )} 
          </div>
    </div>
  )
}

export default Components
