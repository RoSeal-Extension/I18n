import { parse as parseJSONC } from "https://deno.land/std@0.184.0/jsonc/mod.ts";

type MessagesFile = Record<string, {
    message: string;
}>;

const BASE_DIRECTORY = "./locales";
const MESSAGES_FILE = "messages.jsonc";

const englishString = await Deno.readTextFile(`${BASE_DIRECTORY}/en/${MESSAGES_FILE}`);
const englishObject = parseJSONC(englishString) as MessagesFile;

for await (const { name: locale } of Deno.readDir(BASE_DIRECTORY)) {
    if (locale !== "en") {
        const oldLocaleString = await Deno.readTextFile(
            `${BASE_DIRECTORY}/${locale}/${MESSAGES_FILE}`,
        );
        const localeObject = parseJSONC(
            oldLocaleString,
        ) as MessagesFile;

        let localeString = englishString;
        for (const [key, value] of Object.entries(englishObject)) {
            localeString = localeString.replace(
                `"message": "${value.message.replaceAll('"', '\\"')}"`,
                `"message": "${localeObject[key]?.message?.replaceAll('"', '\\"') ?? ""}"`,
            );
        }
        const translatedByText = oldLocaleString.match(/(\/\/ Translated by:.+)/);
        if (translatedByText?.[1]) {
            localeString += `\n${translatedByText[1]}`;
        }

        await Deno.writeTextFile(`${BASE_DIRECTORY}/${locale}/${MESSAGES_FILE}`, localeString);
    }
}
