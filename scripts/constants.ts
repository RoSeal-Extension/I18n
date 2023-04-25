export { type MessageFormatElement } from "https://esm.sh/v117/@formatjs/icu-messageformat-parser@2.3.1";
export { parse as parseJSONC } from "https://deno.land/std@0.184.0/jsonc/mod.ts";
export { default as I18n } from "https://esm.sh/v117/intl-messageformat@10.3.4";

export type MessagesFile = Record<string, {
    message: string;
}>;

export const BASE_DIRECTORY = "./locales";
export const MESSAGES_FILE = "messages.jsonc";
