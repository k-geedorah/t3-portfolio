import Link from "next/link";
import { useSession } from "next-auth/react";
export default function Layout({ children }) {
  const { data: sessionData } = useSession();
  return (
    <>
      <AdminNavbar />
      {sessionData ? (
        <main>{children}</main>
      ) : (
        <div className="min-h-[500px]">
        <div className="flex justify-center content-center">
        <Link href="/login" className="rounded-full bg-zinc-800/90  px-4 py-1 text-sm font-medium  text-zinc-200 ring-1 ring-white/10">Please Sign In</Link>
        </div>
        </div>
      )}

      <AdminFooter />
    </>
  );
}
const AdminNavbar = () => {
  return (
    <nav className="flex justify-center p-5">
      <ul className="flex rounded-full  bg-zinc-800/90 text-sm font-medium text-zinc-200 ring-1 ring-white/10">
        <li className="relative block px-3 py-2 hover:text-teal-400">
          <Link href="/admin/articles/create">Create</Link>
        </li>
        <li className="relative block px-3 py-2 hover:text-teal-400">
          <Link href="/admin/articles">Edit/Delete</Link>
        </li>
      </ul>
    </nav>
  );
};
const AdminFooter = () => {
  return (
    <footer>
      <div className="border-t border-zinc-700/40 pt-10 pb-16">
        <div className="flex justify-between gap-6 px-16">
          <div className="flex gap-6 text-sm font-medium text-zinc-200">
            <Link
              className=" hover:text-teal-400"
              href="/admin/articles/create"
            >
              Create{" "}
            </Link>
            <Link className=" hover:text-teal-400" href="/admin/articles">
              Edit/Delete
            </Link>
          </div>
          <p className="text-sm text-zinc-400">© 2023 All rights reserved. </p>
        </div>
      </div>
    </footer>
  );
};
