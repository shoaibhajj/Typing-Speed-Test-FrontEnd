declare module "most-common-words-by-language" {
  function getWordsList(language: string, count?: number): string[];
  export = getWordsList;
}
