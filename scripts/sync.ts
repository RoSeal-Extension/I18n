import { BASE_DIRECTORY, MESSAGES_FILE } from "./constants.ts";
import { getLanguage } from "./getLanguage.ts";

const { string: englishString, object: englishObject } = await getLanguage("en");

for await (const { name: locale } of Deno.readDir(BASE_DIRECTORY)) {
    if (locale !== "en") {
        const { string: oldLocaleString, object: localeObject } = await getLanguage(locale);

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
