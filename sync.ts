import { parse as parseJSONC } from "https://esm.sh/v108/jsonc-parser@3.2.0";

type MessagesFile = Record<string, {
    message: string;
}>;

const BASE_DIRECTORY = "./locales";
const MESSAGES_FILE = "messages.jsonc";

const englishString = await Deno.readTextFile(`${BASE_DIRECTORY}/en/${MESSAGES_FILE}`);
const englishObject = parseJSONC(englishString) as MessagesFile;

for await (const { name: locale } of Deno.readDir(BASE_DIRECTORY)) {
    if (locale !== "en") {
        const localeObject = parseJSONC(
            await Deno.readTextFile(`${BASE_DIRECTORY}/${locale}/${MESSAGES_FILE}`),
        ) as MessagesFile;

        let localeString = englishString;
        for (const [key, value] of Object.entries(englishObject)) {
            localeString = localeString.replace(
                `"message": "${value.message.replaceAll('"', '\\"')}"`,
                `"message": "${localeObject[key]?.message ?? ""}"`,
            );
        }

        await Deno.writeTextFile(`${BASE_DIRECTORY}/${locale}/${MESSAGES_FILE}`, localeString);
    }
}
