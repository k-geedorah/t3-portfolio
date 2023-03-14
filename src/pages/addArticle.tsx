import * as React from "react";
import { useForm } from "react-hook-form";
import Footer from "y/comps/footer";
import NavBar from "y/comps/navbar";
import { api } from "y/utils/api";

type FormData = {
  title: string;
  content: string;
};

export default function App() {
  const articleAdd = api.articles.create.useMutation();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  const onSubmit = handleSubmit((data) => {
    const { title, content } = data;
    articleAdd.mutate({ title, content });
    return data;
  });

  return (
    <>
    <NavBar/>
    <div  className=' flex flex-col justify-center content-center place-content-center h-4/6'>
      <form onSubmit={onSubmit}>
        <div className="flex flex-col content-center ">
        <input {...register("title")} className="m-2 w-3/4 rounded-md bg-zinc-300 px-3" placeholder="Insert Title"/>
        <input {...register("content")} className="w-3/4 h-3/4 m-2 rounded-md bg-zinc-300 px-3" placeholder="Insert Content"/>
        <input type="submit" className="cursor-pointer rounded-md w-20 m-2 text-white border-black border bg-slate-600 hover:bg-slate-500 content-center" />
        </div>
      </form>
    </div>
    <Footer/>
    </>
  );
}
