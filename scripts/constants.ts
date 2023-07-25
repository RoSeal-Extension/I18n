export { parse as parseJSONC } from "https://deno.land/std@0.195.0/jsonc/mod.ts";
export { type MessageFormatElement } from "https://esm.sh/v129/@formatjs/icu-messageformat-parser@2.6.0";
export { default as I18n } from "https://esm.sh/v129/intl-messageformat@10.4.0";

export type MessagesFile = Record<string, {
    message: string;
}>;

export const BASE_DIRECTORY = "./locales";
export const MESSAGES_FILE = "messages.jsonc";
