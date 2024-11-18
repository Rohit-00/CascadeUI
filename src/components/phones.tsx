import { Iphone15Pro } from "./iphone"

function Phone() {
  return (
    <div className="relative flex flex-row justify-center mx-4 sm:mx-0">
      <Iphone15Pro src="https://cloud.appwrite.io/v1/storage/buckets/670bf3d800356f2d1307/files/6729051300136c77b52c/view?project=66cc3f88001fcc4896d5&project=66cc3f88001fcc4896d5&mode=admin" className="sm:size-[30rem] size-[25rem] max-w-fit z-30 transition-transform ease-in-out hover:scale-110 cursor-pointer"/>
      <Iphone15Pro src="https://cloud.appwrite.io/v1/storage/buckets/670bf3d800356f2d1307/files/672907f7001166cb7b84/view?project=66cc3f88001fcc4896d5&project=66cc3f88001fcc4896d5&mode=admin" className="sm:size-[30rem] size-[25rem] max-w-fit absolute rotate-12  right-4 transition-transform ease-in-out hover:scale-110 cursor-pointer hover:z-40"/>
      <Iphone15Pro src="https://cloud.appwrite.io/v1/storage/buckets/670bf3d800356f2d1307/files/672908ed0019fe85d208/view?project=66cc3f88001fcc4896d5&project=66cc3f88001fcc4896d5&mode=admin" className="sm:size-[30rem] size-[25rem] max-w-fit absolute -rotate-12  left-4 transition-transform ease-in-out hover:scale-110 cursor-pointer hover:z-40"/>
    </div>
  )
}

export default Phone
