
const convexConfig = {
    providers: [
        {
            domain: process.env.CONVEX_DOMAIN! as string,
            applicationID: "convex",
        },
    ]
};

export default convexConfig;