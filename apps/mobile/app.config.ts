import "dotenv/config";
export default {
  expo: {
    name: "Questigo",
    slug: "questigo",
    scheme: "questigo",
    newArchEnabled: true,
    extra: {
      SUPABASE_URL: process.env.EXPO_PUBLIC_SUPABASE_URL,
      SUPABASE_ANON_KEY: process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY,
    },
  },
};
