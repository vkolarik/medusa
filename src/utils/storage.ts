export const storeInStorage = <T>(
  storage: "session" | "local",
  key: string,
  value: T
) => {
  if (storage === "session") sessionStorage.setItem(key, JSON.stringify(value))
  else localStorage.setItem(key, JSON.stringify(value))
}

export const getFromStorage = <T>(
  storage: "session" | "local",
  key: string
): T | null => {
  const item =
    storage === "session"
      ? sessionStorage.getItem(key)
      : localStorage.getItem(key)
  if (item === null) return null
  return JSON.parse(item) as T
}

export const removeFromStorage = (
  storage: "session" | "local",
  key: string
) => {
  if (storage === "session") sessionStorage.removeItem(key)
  else localStorage.removeItem(key)
}
