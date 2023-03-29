import Link from "next/link";
import { URLS } from "../constants/urls";

export default function Footer() {
  return (
    <footer>
      <div className="border-t border-zinc-700/40 pt-10 pb-16">
        <div className="flex justify-between gap-6 px-16">
          <div className="flex gap-6 text-sm font-medium text-zinc-200">
            <Link className=" hover:text-teal-400" href={URLS.ABOUT}>
              About{" "}
            </Link>
            <Link className=" hover:text-teal-400" href={URLS.ARTICLES}>
              Articles
            </Link>
          </div>
          <p className="text-sm text-zinc-400">© 2023 All rights reserved. </p>
        </div>
      </div>
    </footer>
  );
}
