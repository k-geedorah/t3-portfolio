import { useState } from "react";
import { signIn, signOut, useSession } from "next-auth/react";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";

export default function Admin() {
  const { data: sessionData } = useSession();
  return (
    <>
    <NavBar/>
        <div className="flex flex-col items-center justify-center gap-4 pb-5">
          <button
            className="rounded-full bg-white/10 px-10 py-3 font-semibold text-white no-underline transition hover:bg-white/20"
            onClick={sessionData ? () => void signOut() : () => void signIn()}
          >
            {sessionData ? "Sign out" : "Sign in"}
          </button>
        </div>
        {sessionData ? (
          <div className="flex flex-row px-20">
            <p  className="text-xl font-bold text-zinc-100">Logged in as {sessionData.user?.name}</p>
          </div>
        ) : (
          <div className="flex content-center justify-center pb-10">
            <p className="text-xl font-bold text-zinc-100">please sign in</p>
          </div>
        )}
        <Footer/>
    </>
  );
}
