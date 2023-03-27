import * as React from "react";
import { useForm } from "react-hook-form";
import { URLS } from "y/constants/urls";
import { api } from "y/utils/api";
import Router from "next/router";
type FormData = {
  title: string;
  content: string;
};

export default function AddArticle() {
  const [state, setState] = React.useState("");
  const onInput = (e) => setState(e.target.value);

  const articleAdd = api.articles.create.useMutation();
  const { register, handleSubmit } = useForm<FormData>();
  const onSubmit = handleSubmit(async (data, e) => {
    const { title, content } = data;
    await articleAdd.mutate({ title, content });
    e.target.reset();
    Router.push(URLS.ARTICLES);
  });
  return (
    <div className=" flex w-5/6 flex-col place-content-center content-center justify-center">
      <form onSubmit={onSubmit}>
        <div className="flex flex-col content-center ">
          <input
            {...register("title", { required: true })}
            className="m-2 w-full rounded-md bg-zinc-500 px-3 placeholder:text-zinc-300"
            placeholder="Insert Title"
            onInput={onInput}
          />
          <textarea
            {...register("content", { required: true })}
            className="m-2 h-[100px] w-full rounded-md bg-zinc-500 px-3 placeholder:text-zinc-300"
            placeholder="Insert Content"
          />
          <input
            type="submit"
            value="Save"
            className="m-2 w-20 cursor-pointer content-center rounded-full bg-zinc-800/90  px-4 py-1 text-sm font-medium text-white text-zinc-200 ring-1 ring-white/10"
          />
        </div>
      </form>
    </div>
  );
}
