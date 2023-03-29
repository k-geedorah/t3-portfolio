import { useRouter } from "next/router";
import { api } from "y/utils/api";
import { useForm } from "react-hook-form";
import Router from "next/router";
import Layout from "y/components/Layout";
type FormData = {
  title: string;
  content: string;
};

export default function ArticleId() {
  const router = useRouter();
  const { articleId } = router.query;
  const articleResponse = api.articles.byId.useQuery(articleId);
  const edittingArticles = api.articles.update.useMutation();
  const { register, handleSubmit } = useForm<FormData>();
  const onSubmit = handleSubmit((data) => {
    edittingArticles.mutate({
      id: articleId,
      data: data,
    });
    Router.push(`/admin/articles/`);
  });
  return (
    <Layout>
      {" "}
      <div className="h-screen w-11/12 px-16">
        <h1 className="my-10 text-4xl font-bold tracking-tight text-zinc-100">
          {articleResponse.data?.title}
        </h1>
        <p className="text-xl font-bold text-zinc-100">
          {articleResponse.data?.content}
        </p>
        <form onSubmit={onSubmit}>
          <div className="flex flex-col content-center ">
            <input
              {...register("title", { required: true })}
              defaultValue={articleResponse.data?.title}
              className="mt-2 w-full rounded-md bg-zinc-500 px-3"
            />
            <textarea
              {...register("content", { required: true })}
              defaultValue={articleResponse.data?.content}
              className="full my-2 h-[50px] w-full rounded-md bg-zinc-500 px-3"
            />
            <input
              type="submit"
              value="Save"
              className="m-2 w-20 cursor-pointer content-center rounded-full bg-zinc-800/90  px-4 py-1 text-sm font-medium text-zinc-200 ring-1 ring-white/10 "
            />
          </div>
        </form>
      </div>
    </Layout>
  );
}
