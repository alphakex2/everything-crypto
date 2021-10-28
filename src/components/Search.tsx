const SearchInput: React.FC = () => {
  return (
    <div className="p-2">
      <div className="flex items-center bg-white border-2 rounded-full shadow-xl">
        <input
          className="w-full px-6 py-0 leading-tight text-gray-700 rounded-l-full focus:outline-none"
          id="search"
          type="text"
          placeholder="Search"
        />

        <div className="p-2">
          <button className="flex items-center justify-center w-12 h-5 p-2 text-white bg-blue-500 rounded-full hover:bg-blue-400 focus:outline-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}
export default SearchInput
