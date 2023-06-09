export { parse as parseJSONC } from "https://deno.land/std@0.191.0/jsonc/mod.ts";
export { type MessageFormatElement } from "https://esm.sh/v125/@formatjs/icu-messageformat-parser@2.4.0";
export { default as I18n } from "https://esm.sh/v125/intl-messageformat@10.3.5";

export type MessagesFile = Record<string, {
    message: string;
}>;

export const BASE_DIRECTORY = "./locales";
export const MESSAGES_FILE = "messages.jsonc";
