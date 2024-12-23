import { Deck } from "./deck";

function Code() {
  return (
    <div className="mt-32 sm:mt-16 flex flex-col sm:flex-col   sm:items-center  sm:mx-20">
      <div className="flex flex-col">
        <div className="text-blue-500 text-xl font-bold text-center">
          No CLI tool required
        </div>
      <div className="sm:text-5xl text-3xl font-bold text-center">
      Reusable Component
      </div>
      <div className="dark:text-gray-300 mt-2 sm:mt-5 text-center mb-3 sm:mb-9 sm:w-[40rem] ">
      Every Component is a seperate npm package, so you don't need to install any cli tool to use them.
      </div>
      </div>
      <div className="mb-9 mt-9 sm:mb-0 sm:mt-0">
        <Deck/>
      </div>
      </div>
  );
}

export default Code;
