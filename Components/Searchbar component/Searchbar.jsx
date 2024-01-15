// src/components/Searchbar.js
export default function Searchbar() {
  return (
    <div className="bg-[#172227] py-8 lg:pt-[120px]">
      <div className="container mx-auto">
        <h2 className="text-center text-3xl lg:text-[40px] mb-9 font-bold text-[#00CC8C]">
        Students <span className="text-white">of the Year</span>
        </h2>
        <form className="flex justify-center">
          <div className="relative overflow-hidden text-gray-50 md:min-w-[380px] lg:min-w-[440px] rounded-[63px]">
            <input
              type="search"
              id="search-dropdown"
              className="block w-full bg-white px-4 py-2.5 pr-10 focus:outline-none rounded-[63px] placeholder:text-neutral-400 text-neutral-800"
              placeholder="Search by Student"
              required
            />
            <button
              type="submit"
              className="absolute right-0 inline-flex items-center justify-center w-10 top-0 h-full rounded-e-lg text-neutral-800"
            >
              <svg
                className="h-4 w-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
              <span className="sr-only">Search</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
