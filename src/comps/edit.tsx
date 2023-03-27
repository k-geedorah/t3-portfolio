import Router from "next/router";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { api } from "y/utils/api";
import { URLS } from "y/constants/urls";
type FormData = {
  title: string;
  content: string;
};

export default function Edit() {
  const edittingArticles = api.articles.update.useMutation();
  const articles = api.articles.getAll.useQuery();
  const data = articles.data;
  const [switchID, setID] = useState("");
  const articleDelete = api.articles.delete.useMutation();
  const { register, handleSubmit } = useForm<FormData>();
  const onSubmit = handleSubmit((data) => {
    const editID = switchID;
    console.log(editID);
    edittingArticles.mutate({
      id: editID,
      data: data,
    });
    setID("");
    Router.push(`${URLS.ARTICLES}/${editID}`);
  });
  return (
    <>
      <div className=" w-11/12 px-16">
        {data?.map((article) => (
          <div className="mb-5 rounded-xl border transition hover:bg-zinc-800">
            <div>
              <h2 className="p-4 text-base font-semibold text-zinc-100">
                {article.title}
              </h2>
              <p className=" px-4 text-sm text-zinc-400">{article.content}</p>
            </div>
            {switchID === article.id && (
              <div>
                <form onSubmit={onSubmit}>
                  <div className="flex flex-col content-center ">
                    <input
                      {...register("title", { required: true })}
                      defaultValue={article.title}
                      className="mt-2 w-full rounded-md bg-zinc-500 px-3"
                    />
                    <textarea
                      {...register("content", { required: true })}
                      defaultValue={article.content}
                      className="full my-2 h-[50px] w-full rounded-md bg-zinc-500 px-3"
                    />
                    <input
                      type="submit"
                      value="Save"
                      className="m-2 w-20 cursor-pointer content-center rounded-full bg-zinc-800/90  px-4 py-1 text-sm font-medium text-white text-zinc-200 ring-1 ring-white/10 "
                    />
                  </div>
                </form>
              </div>
            )}
            <div className="mb-5 flex justify-evenly">
              <button
                className="rounded-full bg-zinc-800/90  px-4 py-1 text-sm font-medium text-white text-zinc-200 ring-1 ring-white/10"
                onClick={() => {
                  articleDelete.mutate(article.id);
                  Router.push(URLS.ADMIN);
                }}
              >
                {" "}
                Delete
              </button>
              <button
                className="rounded-full bg-zinc-800/90  px-4 py-1 text-sm font-medium text-white text-zinc-200 ring-1 ring-white/10"
                onClick={() => setID(article.id)}
              >
                Edit
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
