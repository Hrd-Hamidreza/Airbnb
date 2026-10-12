//! ---------------------------------------- Import
//! ---------------------------------------- Functions
export function pluralFixer(value, singularWord) {
  if (value === 1) {
    return value + ` ${singularWord}`;
  } else {
    return value + ` ${singularWord.concat("s")}`;
  }
}
//! --------------------
