export const storeInStorage = (
  storage: 'session' | 'local',
  key: string,
  value: string
) => {
  if (storage === 'session') sessionStorage.setItem(key, value)
  else localStorage.setItem(key, value)
}

export const getFromStorage = (
  storage: 'session' | 'local',
  key: string
): string => {
  return storage === 'session'
    ? sessionStorage.getItem(key) ?? ''
    : localStorage.getItem(key) ?? ''
}

export const removeFromStorage = (
  storage: 'session' | 'local',
  key: string
) => {
  if (storage === 'session') sessionStorage.removeItem(key)
  else localStorage.removeItem(key)
}
