function Use() {
  return (
    <section className="sm:py-16 mt-16 hidden sm:block">
 <div className="flex flex-col">
        <div className="text-blue-500 text-xl font-bold text-center">
          Pretty straight forward
        </div>
      <div className="sm:text-5xl text-3xl font-bold text-center">
      Two ways to install
      </div>
      <div className="dark:text-gray-300 mt-2 sm:mt-5 text-center mb-3 sm:mb-9 sm:w-[40rem] self-center">
      Cascade UI gives you two ways to install the components into your codebase either via npm package or simple copy paste for better control
      </div>
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