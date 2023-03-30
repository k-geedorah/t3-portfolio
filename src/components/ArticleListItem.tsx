import Router from "next/router";
import { URLS } from "../constants/urls";

interface myCompProps {
  id: any;
  title: string;
  content: string;
}

export default function ArticleListItem({ id, title, content }: myCompProps) {
  return (
    <div className="grid grid-cols-3">
      <div className="col-span-1 border-l-[1px] border-zinc-600 p-4">
        <time className="flex justify-start pl-3.5 text-sm text-zinc-500">
          {/* {article.createdAt} */}
        </time>
      </div>
      <div
        className="col-span-2 mb-5 rounded-xl transition hover:bg-zinc-800"
        onClick={() => {
          Router.push(`${URLS.ARTICLES}/${id}`);
        }}
      >
        <h2 className="p-4 text-base font-semibold text-zinc-100">{title}</h2>
        <p className=" px-4 text-sm text-zinc-400">
          {content.substring(0, 100) + "..."}
        </p>
        <h2 className="inherit py-4 pl-4 text-sm font-medium text-teal-500">
          Read Article {">"}
        </h2>
      </div>
    </div>
  );
}
