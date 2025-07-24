import { getUsageStatus } from "@/lib/usage";
import { createTRPCRouter, protectedProcedure } from "@/trpc/init";

export const usageRouter = createTRPCRouter({
  status: protectedProcedure.query(async () => { // Prefix 'ctx' with an underscore
    try {
      const result = await getUsageStatus();
      return result;
    } catch {
      return null;
    }
  }),
});