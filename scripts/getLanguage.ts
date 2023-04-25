import { BASE_DIRECTORY, MESSAGES_FILE, type MessagesFile, parseJSONC } from "./constants.ts";

export async function getLanguage(locale: string) {
    const string = await Deno.readTextFile(`${BASE_DIRECTORY}/${locale}/${MESSAGES_FILE}`);
    const object = parseJSONC(string) as MessagesFile;

    return {
        string,
        object,
    };
}
