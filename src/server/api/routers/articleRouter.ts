import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "../trpc";


export const articlesRouter = createTRPCRouter({
        create: publicProcedure
            .input(z.object({ title: z.string(),content:z.string() }))
            .mutation(({ input,ctx}) => {
                return ctx.prisma.article.create({
                    data: {
                        title:input.title,
                        content:input.content,
                }
            })
        }),
        byId: publicProcedure
        .input(z.string())
        .query(({ input,ctx }) => {
                return ctx.prisma.article.findUnique({
                    where:{
                        id:input
                    },
                })
    }),
    getAll: publicProcedure
    .query(({ctx})=>{
        return ctx.prisma.article.findMany()
    }),

    });