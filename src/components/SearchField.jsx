export default function SearchField(params) {
  return (
    <div>
      <input
        type="text"
        className="p-2 bg-[#ededed] h-[35px] rounded-sm shadow-sm bg-white text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
      />
      <button className="bg-green-700 h-[35px] ml-1 w-[40px] border-r-4 border-white rounded-r-md">
        <i className="fa fa-search text-white"></i>
      </button>
    </div>
  );
}