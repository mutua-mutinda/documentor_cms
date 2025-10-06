export default ({ env }) => ({
  host: env("HOST", "0.0.0.0"),
  port: env.int("PORT", 1338),
  url: env("STRAPI_ADMIN_BACKEND_URL", "https://dev.legalsister.org"),
  app: {
    keys: env.array("APP_KEYS"),
  },
  proxy: true,
  // Allow your domain
  allowedHosts: ["dev.legalsister.org", "www.dev.legalsister.org"],
});
