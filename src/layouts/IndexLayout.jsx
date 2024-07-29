import SearchField from "../components/SearchField";
import Button from "../components/Button";
import { Suspense } from "react";
import { Await } from "react-router-dom";
import SkeletonLoader from "../components/SkeletonLoading";

export default function IndexLayout({ title, items }) {
  console.log(items);
  return (
    <>
      <h1 className="text-3xl font-bolder mb-5">{title}</h1>
      <div className="bg bg-white p-3 rounded-md">
        <div className="flex justify-between border-b border-gray-200 pb-2">
          <SearchField />
          <Button btnType="create" />
        </div>
        <div class="flex flex-col mt-4">
          <div class="container mx-auto">
            <div class="overflow-x-auto">
              <table class="min-w-full ">
                <thead class="bg-gray-200 border-b">
                  <tr>
                    <th class="py-3 px-4">#</th>
                    <th class="py-3 px-4">Name</th>
                    <th class="py-3 px-4">Email</th>
                  </tr>
                </thead>
                <Suspense fallback={<SkeletonLoader />}>
                  <tbody>
                    <Await resolve={items}>
                      {(items) => (
                        <>
                          {items.map((item, index) => (
                            <tr class="border border-gray-300">
                              <td class="py-3 px-4 text-center">{index + 1}</td>
                              <td class="py-3 px-4 text-center">{item.name}</td>
                              <td class="py-3 px-4 text-center">
                                {item.email}
                              </td>
                            </tr>
                          ))}
                        </>
                      )}
                    </Await>
                  </tbody>
                </Suspense>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
