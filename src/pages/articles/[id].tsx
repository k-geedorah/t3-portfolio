import NavBar from "../../comps/navbar";
import Head from "next/head";
import Footer from "../../comps/footer";
import { useRouter } from "next/router";
import { api } from "y/utils/api";

export default function Article() {
  const router = useRouter();
  const { id } = router.query;
  const allData = api.articles.byId.useQuery(id);

  return (
    <div>
      <Head>
        <title>Article: {allData.data?.title}</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      <div className="w-11/12 px-16 h-screen">
        <h1 className="my-10 text-4xl font-bold tracking-tight text-zinc-100">
          {allData.data?.title}
        </h1>
        <p className="text-xl font-bold text-zinc-100">{allData.data?.content}</p>
      </div>
      <Footer />
    </div>
  );
}
