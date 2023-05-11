export { type MessageFormatElement } from "https://esm.sh/v120/@formatjs/icu-messageformat-parser@2.4.0";
export { parse as parseJSONC } from "https://deno.land/std@0.186.0/jsonc/mod.ts";
export { default as I18n } from "https://esm.sh/v120/intl-messageformat@10.3.5";

export type MessagesFile = Record<string, {
    message: string;
}>;

export const BASE_DIRECTORY = "./locales";
export const MESSAGES_FILE = "messages.jsonc";
