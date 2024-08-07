import { v } from "convex/values";
import { mutation, query } from "../_generated/server";


export const create = mutation({
    args: {
        clerkId: v.string(),
        email: v.string(),
        username: v.string(),
        imageUrl: v.string(),
    },
    handler: async (ctx, args) => {
        await ctx.db.insert("user", args)
    }
})

export const get = query({
    args: {
        clerkId: v.string(),
    },
    async handler(ctx, args) {
        return await ctx.db
            .query("user")
            .withIndex("by_clerkId", (q) => q.eq("clerkId", args.clerkId))
            .unique()
    },
});