export { parse as parseJSONC } from "https://deno.land/std@0.211.0/jsonc/mod.ts";
export { type MessageFormatElement } from "https://esm.sh/v135/@formatjs/icu-messageformat-parser@2.7.3";
export { default as I18n } from "https://esm.sh/v135/intl-messageformat@10.5.8";

export type MessagesFile = Record<string, {
    message: string;
}>;

export const BASE_DIRECTORY = "./locales";
export const MESSAGES_FILE = "messages.jsonc";
