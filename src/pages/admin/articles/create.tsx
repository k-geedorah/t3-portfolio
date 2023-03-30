import * as React from "react";
import { useForm } from "react-hook-form";
import { URLS } from "y/constants/urls";
import { api } from "y/utils/api";
import Router from "next/router";
import Layout from "y/components/Layout";
type FormData = {
  title: string;
  content: string;
};

export default function CreateArticle() {
  const articleAdd = api.articles.create.useMutation();
  const { register, handleSubmit } = useForm<FormData>();
  const onSubmit = handleSubmit(async (data) => {
    const { title, content } = data;
    await articleAdd.mutate({ title, content });
    Router.push(`${URLS.ADMIN}/articles`);
  });
  return (
    <Layout>
      <div className=" flex min-h-[500px] w-5/6 flex-col justify-center">
        <form onSubmit={onSubmit}>
          <div className="flex flex-col ">
            <input
              {...register("title", { required: true })}
              className="m-2 w-full rounded-md bg-zinc-500 px-3 placeholder:text-zinc-300"
              placeholder="Insert Title"
            />
            <textarea
              {...register("content", { required: true })}
              className="m-2 h-[100px] w-full rounded-md bg-zinc-500 px-3 placeholder:text-zinc-300"
              placeholder="Insert Content"
            />
            <input
              type="submit"
              value="Save"
              className="m-2 w-20 cursor-pointer content-center rounded-full bg-zinc-800/90  px-4 py-1 text-sm font-medium  text-zinc-200 ring-1 ring-white/10"
            />
          </div>
        </form>
      </div>
    </Layout>
  );
}
