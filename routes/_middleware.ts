import { withLive } from "$live/live.ts";

export const handler = withLive({
  siteId: 599,
  site: "site-teste",
  domains: ["site-teste.deco.site"],
});