export default function SearchField(params) {
  return (
    <div>
      <input
        type="text"
        placeholder="Enter Keyword"
        className="p-2 border-[0.1px] border-gray-390 h-[35px] rounded-sm shadow-sm  text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
      />
      <button className="bg-green-700 h-[35px] ml-1 w-[40px] border-r-4 border-white rounded-r-md">
        <i className="fa fa-search text-white"></i>
      </button>
    </div>
  );
}
