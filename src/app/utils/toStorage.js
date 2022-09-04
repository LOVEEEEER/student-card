export function toStorage(key, item) {
  localStorage.setItem(key, JSON.stringify(item));
}
