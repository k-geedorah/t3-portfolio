import Router from "next/router";
import { api } from "y/utils/api";
import { URLS } from "y/constants/urls";
import Layout from "y/components/Layout";

export default function ArticlesPage() {
  const articles = api.articles.getAll.useQuery();
  const data = articles.data;
  const articleDelete = api.articles.delete.useMutation();
  return (
      <Layout>
        <div className=" min-h-screen w-11/12 px-16">
          {data?.map((article) => (
            <div className="mb-5 rounded-xl border transition hover:bg-zinc-800">
              <div>
                <h2 className="p-4 text-base font-semibold text-zinc-100">
                  {article.title}
                </h2>
                <p className=" px-4 text-sm text-zinc-400">{article.content}</p>
              </div>
              <div className="mb-5 flex justify-evenly">
                <button
                  className="rounded-full bg-zinc-800/90  px-4 py-1 text-sm font-medium  text-zinc-200 ring-1 ring-white/10"
                  onClick={() => {
                    articleDelete.mutate(article.id);
                    Router.push(`${URLS.ADMIN}/articles`);
                  }}
                >
                  {" "}
                  Delete
                </button>
                <button
                  className="rounded-full bg-zinc-800/90  px-4 py-1 text-sm font-medium  text-zinc-200 ring-1 ring-white/10"
                  onClick={() =>
                    Router.push(`${URLS.ADMIN}/articles/${article.id}`)
                  }
                >
                  Edit
                </button>
              </div>
            </div>
          ))}
        </div>
      </Layout>
  );
}
