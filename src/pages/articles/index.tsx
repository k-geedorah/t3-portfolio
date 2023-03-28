import NavBar from "../../components/NavBar";
import Head from "next/head";
import Footer from "../../components/Footer";
import Router from "next/router";
import { URLS } from "../../constants/urls";
import { type Key } from "react";
import { api } from "y/utils/api";

export default function Page() {
  // const articles=api.articles.getAll.useQuery();
  const articles = api.articles.getAll.useQuery();
  const data = articles.data;
  return (
    <div>
      <Head>
        <title>Articles</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      <div className="w-11/12 px-16">
        <h1 className="my-10 text-4xl font-bold tracking-tight text-zinc-100">
          Writing on software design, company building, and the aerospace
          industry.
        </h1>
        <p className="mb-10 text-base text-zinc-400">
          All of my long-form thoughts on programming, leadership, product
          design, and more, collected in chronological order.
        </p>
        {data?.map(
          (article: {
            id: Key;
            createdAt: Object;
            title: string;
            content: string;
          }) => (
            <div key={article.id}>
              <div className="grid grid-cols-3">
                <div className="col-span-1 border-l-[1px] border-zinc-600 p-4">
                  <time className="flex justify-start pl-3.5 text-sm text-zinc-500">
                    {/* {article.createdAt} */}
                  </time>
                </div>
                <div
                  className="col-span-2 mb-5 rounded-xl transition hover:bg-zinc-800"
                  onClick={() => {
                    Router.push(`${URLS.ARTICLES}/${article.id}`);
                  }}
                >
                  <h2 className="p-4 text-base font-semibold text-zinc-100">
                    {article.title}
                  </h2>
                  <p className=" px-4 text-sm text-zinc-400">
                    {article.content.substring(0, 100) + "..."}
                  </p>
                  <h2 className="inherit py-4 pl-4 text-sm font-medium text-teal-500">
                    Read Article {">"}
                  </h2>
                </div>
              </div>
            </div>
          )
        )}
      </div>
      <Footer />
    </div>
  );
}
