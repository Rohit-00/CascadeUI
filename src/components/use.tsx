function Use() {
  return (
    <section className="sm:py-16 mt-16 hidden sm:block">
    <div className="container mx-auto px-6 ">
      <h2 className="text-3xl sm:text-5xl font-bold text-center">Two ways to install</h2>
      <div className="font-base mb-11 text-center mt-4">and both are easy peasy</div>
      </div>
      <div className='flex flex-row justify-evenly items-center'>
      <div className="flex flex-col items-center">
      <div className='sm:text-3xl font-semibold'>NPM Package</div>
      
    <div className="">
    <div className="flex flex-row items-center gap-2 mt-7">
    <div className="border w-8 h-8 justify-center items-center flex rounded-full">1</div>
    <div >Install the package for the component</div>
    
    </div>
    <div className="border h-9 w-0 ml-4"></div>
    <div className="flex flex-row items-center gap-2 ">
    <div className="border w-8 h-8 justify-center items-center flex rounded-full">2</div>
    <div >Use it like a champ</div>
    </div>
    </div>
    </div>

      <div className="border-r h-48 border-gray-300 sm:ml-16"></div>
      <div className="flex flex-col items-center">
      <div className='sm:text-3xl font-semibold'>Copy & Paste</div>
      
    <div className="">
    <div className="flex flex-row items-center gap-2 mt-7">
    <div className="border w-8 h-8 justify-center items-center flex rounded-full">1</div>
    <div >Install the dependencies given for the component</div>
    
    </div>
    <div className="border h-9 w-0 ml-4"></div>
    <div className="flex flex-row items-center gap-2 ">
    <div className="border w-8 h-8 justify-center items-center flex rounded-full">2</div>
    <div >Copy and Paste the source code like a champ</div>
    </div>
    </div>
    </div>
      </div>
      </section>
  )
}

export default Use