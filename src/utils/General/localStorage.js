//! ---------------------------------------- Import
//! ---------------------------------------- Functions
//! --------------------
export function setDataToLocalStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}
//! --------------------
export function getDataFromLocalStorage(key) {
  const storage = localStorage.getItem(key);
  return JSON.parse(storage);
}
//! --------------------
export function removeFromLocalStorage(key) {
  localStorage.removeItem(key);
}
