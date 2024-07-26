import SearchField from "../../components/SearchField";
import Button from "../../components/Button";

export default function index(params) {
  return (
    <>
      <h1 className="text-3xl font-bolder mb-5">Category Managements</h1>
      <div className="bg bg-white p-3 rounded-md">
        <div className="flex justify-between border-b border-gray-200 pb-2">
          <SearchField />
          <Button btnType="create" />
        </div>
        <div class="flex flex-col">
          <div class="p-1.5 min-w-full inline-block align-middle">
            <div class="overflow-hidden">
              <table class="min-w-full divide-y divide-gray-200">
                <thead>
                  <tr>
                    <th
                      scope="col"
                      class="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase"
                    >
                      S.N
                    </th>
                    <th
                      scope="col"
                      class="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase"
                    >
                      Name
                    </th>
                    <th
                      scope="col"
                      class="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase"
                    >
                      Age
                    </th>
                    <th
                      scope="col"
                      class="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase"
                    >
                      Address
                    </th>
                    <th
                      scope="col"
                      class="px-6 py-3 text-end text-xs font-medium text-gray-500 uppercase"
                    >
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-gray-200">
                  <tr>
                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">
                      1
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">
                      John Brown
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                      45
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                      New York No. 1 Lake Park
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
                      <button
                        type="button"
                        class="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 focus:outline-none focus:text-blue-800 disabled:opacity-50 disabled:pointer-events-none"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
