import { createTRPCRouter } from "y/server/api/trpc";
import { articlesRouter } from "./routers/articleRouter";
/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  articles:articlesRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
