// convex/functions.js

import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values"

export default defineSchema({
    user: defineTable({
        clerkId: v.string(),
        email: v.string(),
        username: v.string(),
        imageUrl: v.string(),
    })
        .index("by_email", ["email"])
        .index("by_clerkId", ["clerkId"]),

    // chat: defineTable({
    //     id: v.string(),
    //     type: v.string(),
    //     participantIds: v.array(v.string()),
    //     lastMessageId: v.string(),
    //     lastMessageAt: v.string(),
    // })

})
