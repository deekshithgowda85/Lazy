import { auth } from '@clerk/nextjs/server';
import { initTRPC, TRPCError } from '@trpc/server';
import { cache } from 'react';
import superjason from 'superjson';

export const createTRPCContext = cache(async () => {
  const session = await auth()
  return {
    auth: session
  }
})

export type Context = Awaited<ReturnType<typeof createTRPCContext>>;



const t = initTRPC.context<Context>().create({
  transformer: superjason,
});

const isAuthed = t.middleware(({ next, ctx }) => {
  if (!ctx.auth?.userId){
    throw new TRPCError({
      code: 'UNAUTHORIZED',
      message: 'Not authenticated'
    })
  }
  return next({
    ctx: {
      auth: ctx.auth
    }
  })
})



export const createTRPCRouter = t.router;
export const createCallerFactory = t.createCallerFactory;
export const baseProcedure = t.procedure;
export const protectedProcedure = t.procedure.use(isAuthed);