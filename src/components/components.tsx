import { Link } from "react-router-dom"

    const comps = [

    {src:'https://cloud.appwrite.io/v1/storage/buckets/670bf3d800356f2d1307/files/670bfa57002fc8873ab8/view?project=66cc3f88001fcc4896d5&project=66cc3f88001fcc4896d5&mode=admin',title:''},
    {src:'https://cloud.appwrite.io/v1/storage/buckets/670bf3d800356f2d1307/files/670bfa57002fc8873ab8/view?project=66cc3f88001fcc4896d5&project=66cc3f88001fcc4896d5&mode=admin',title:''},
    {src:'https://cloud.appwrite.io/v1/storage/buckets/670bf3d800356f2d1307/files/670bfa57002fc8873ab8/view?project=66cc3f88001fcc4896d5&project=66cc3f88001fcc4896d5&mode=admin',title:''},
    {src:'https://cloud.appwrite.io/v1/storage/buckets/670bf3d800356f2d1307/files/670bfa57002fc8873ab8/view?project=66cc3f88001fcc4896d5&project=66cc3f88001fcc4896d5&mode=admin',title:''},
    {src:'https://cloud.appwrite.io/v1/storage/buckets/670bf3d800356f2d1307/files/670bfa57002fc8873ab8/view?project=66cc3f88001fcc4896d5&project=66cc3f88001fcc4896d5&mode=admin',title:''},

]

const Screen = ({item}:any) =>{
    return(
      <video poster="" height={400} width={200} src={item.src} loop autoPlay muted  className="rounded-xl transition-transform ease-in-out hover:scale-110 cursor-pointer" />
    )
}

function Components() {
  return (
    <div className="mt-16">
      <div className="flex flex-row justify-between items-baseline"><div className="text-3xl sm:text-5xl font-semibold">Components</div></div>
      <div className="grid sm:grid-cols-5 items-center mt-7 justify-center">

      {comps.map((item)=>
        <div>
            <Screen item={item} />
        </div>
    )} 
          </div>
          <Link to={'/components'}>
          <div className=" flex flex-row items-center justify-center mt-11"><div className="border p-3 rounded-xl">Browse all</div></div>
          </Link>
    </div>
  )
}

export default Components
