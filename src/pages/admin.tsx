import { useState } from "react";
import AddArticle from "../comps/AddArticle";
import Edit from "../comps/Edit";
import Footer from "../comps/Footer";
import NavBar from "../comps/NavBar";
import { signIn, signOut, useSession } from "next-auth/react";

export default function Admin() {
  const [add, isAddActive] = useState(true);
  const { data: sessionData } = useSession();
  return (
    <>
      <NavBar />
      <div className="flex flex-col items-center justify-center gap-4 pb-5">
        <p className="text-center text-2xl text-white">
          {sessionData && <span>Logged in as {sessionData.user?.name}</span>}
        </p>
        <button
          className="rounded-full bg-white/10 px-10 py-3 font-semibold text-white no-underline transition hover:bg-white/20"
          onClick={sessionData ? () => void signOut() : () => void signIn()}
        >
          {sessionData ? "Sign out" : "Sign in"}
        </button>
      </div>
      {sessionData ? (
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
      ) : (
        <div className="flex content-center justify-center pb-10">
          <p className="text-xl font-bold text-zinc-100">please sign in</p>
        </div>
      )}
      <Footer />
    </>
  );
}
