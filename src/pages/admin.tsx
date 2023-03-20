import { useState } from "react";
import AddArticle from "y/comps/addArticle";
import Edit from "y/comps/edit";
import Footer from "y/comps/footer";
import NavBar from "y/comps/navbar";

export default function Admin() {
  const [add, isAddActive] = useState(true);
  return (
    <>
      <NavBar />
      <div className="flex flex-row px-20">
        <div className="flex w-1/6 flex-col border-r-[1px] border-zinc-600 p-4">
          <button
            className="my-5 flex justify-center rounded-full bg-zinc-800/90 px-1 py-3 text-sm font-medium text-zinc-200 ring-1 ring-white/10 hover:bg-zinc-700"
            onClick={() => {
              isAddActive(true);
            }}
          >
            Add
          </button>

          <button
            className="my-5 flex justify-center rounded-full bg-zinc-800/90 px-1 py-3 text-sm font-medium text-zinc-200 ring-1 ring-white/10 hover:bg-zinc-700"
            onClick={() => {
              isAddActive(false);
            }}
          >
            Edit/Delete
          </button>
        </div>
        <div className="flex w-full">{add ? <AddArticle /> : <Edit />} </div>
      </div>
      <Footer />
    </>
  );
}
