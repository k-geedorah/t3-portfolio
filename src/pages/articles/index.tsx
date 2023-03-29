import NavBar from "../../components/NavBar";
import Head from "next/head";
import Footer from "../../components/Footer";
import ArticleListItem from "y/components/ArticleListItem";
import { api } from "y/utils/api";

export default function Page() {
  const articles = api.articles.getAll.useQuery();
  const data = articles.data;
  // const articles=api.articles.getAll.useQuery();
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
        <ArticleListItem data={data} />
      </div>
      <Footer />
    </div>
  );
}
