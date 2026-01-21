import { getRequestConfig } from "next-intl/server";
import { locales, defaultLocale, type Locale } from "./config";

export default getRequestConfig(async ({ locale }) => {
  // Use the locale from the request, fallback to default
  const resolvedLocale =
    locale && locales.includes(locale as Locale)
      ? (locale as string)
      : defaultLocale;

  console.log(`[i18n] Loading messages for locale: ${resolvedLocale}`);

  return {
    locale: resolvedLocale,
    messages: (await import(`../messages/${resolvedLocale}.json`)).default,
  };
});
