export default ({ env }) => ({
  host: env("HOST", "0.0.0.0"),
  port: env.int("PORT", 1337),
  app: {
    keys: env.array("APP_KEYS"),
  },
  // Allow your domain
  allowedHosts: ["dev.legalsister.org", "www.dev.legalsister.org"],
});
