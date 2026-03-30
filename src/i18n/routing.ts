import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["en", "fr", "de", "nl", "es"],
  defaultLocale: "en",
  localePrefix: "as-needed",
});
