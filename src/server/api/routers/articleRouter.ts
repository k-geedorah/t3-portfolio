import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "../trpc";


export const articlesRouter = createTRPCRouter({
        create: publicProcedure
            .input(z.object({ title: z.string().min(1),content:z.string().min(1) }))
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
        delete: publicProcedure
        .input(z.string())
        .mutation(({ctx, input:id})=>{
            return ctx.prisma.article.delete({where:{id}})
        }),
        update:publicProcedure
        .input(z.object({
            id:z.string(),
            data:z.object({
                title:z.string().min(1).optional(),
                content:z.string().min(1).optional()
            })}))
        .mutation(({ctx,input})=>{
            const {id,data}=input;
            return ctx.prisma.article.update({
                where:{id},
            data})
        }),
    });