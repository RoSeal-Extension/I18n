// TODO: Finish this
import { I18n, type MessageFormatElement } from "./constants.ts";
import { getLanguage } from "./getLanguage.ts";

export async function validateLanguage(locale: string) {
    const errors: string[] = [];
    let language: Awaited<ReturnType<typeof getLanguage>> | undefined;
    const i18n: Record<string, {
        i18n: I18n;
        raw: string;
    }> = {};
    try {
        language = await getLanguage(locale);

        for (const [message, value] of Object.entries(language.object)) {
            try {
                i18n[message] = {
                    i18n: new I18n(value.message),
                    raw: value.message,
                };
            } catch (err) {
                errors.push(`Failed to parse message "${message}" in locale "${locale}": ${err}`);
            }
        }
    } catch (err) {
        errors.push(`Failed to parse locale "${locale}": ${err}`);
    }

    return {
        errors,
        language,
        i18n,
    };
}

export async function validateLanguageAst(locale: string) {
    const errors: string[] = [];
    const warnings: string[] = [];
    const language = await validateLanguage(locale);
    const english = await validateLanguage("en");

    if (language.errors.length) {
        errors.push(...language.errors);
    }

    if (english.errors.length) {
        errors.push(...english.errors);
    }

    if (!errors.length) {
        Object.entries(english.i18n).forEach(([message, englishValue]) => {
            if (englishValue.raw.length) {
                const translationValue = language.i18n[message];
                if (!translationValue.raw.length) {
                    warnings.push(`"${message}" in "${locale}" is empty`);
                } else {
                    const englishAst = englishValue.i18n.getAst().filter((ast) => ast.type !== 0);
                    const translationAst = translationValue.i18n.getAst().filter((
                        ast,
                    ) => ast.type !== 0);
                }
            }
        });
    }

    return errors;
}
