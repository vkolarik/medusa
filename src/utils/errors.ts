import { toast } from "sonner"

export const handleMessage = (message: string) => {
  for (const key in errorMessagesMap) {
    if (message.includes(key)) {
      return toast.error(errorMessagesMap[key])
    }
  }
  if (message.includes("Error")) return toast.error('Nastala chyba. Zkuste to prosím znovu.')
  return toast.success("Registrace byla úspěšná")
}

const errorMessagesMap: { [key: string]: string } = {
  'A customer with the given email already has an account. Log in instead.': 'Uživatel s tímto emailem již existuje',
  'Invalid email format': 'Neplatný formát emailu',
  'Password must be at least 6 characters long': 'Heslo musí mít alespoň 6 znaků',
  'First name is required': 'Jméno je povinné',
  'Last name is required': 'Příjmení je povinné',
  'Password is required': 'Heslo je povinné',
  'An internal server error occurred': 'Došlo k interní chybě serveru',
  'Too many requests. Please try again later.': 'Příliš mnoho požadavků. Zkuste to prosím později.',
  'Invalid password format': 'Neplatný formát hesla',
  'Validation failed': 'Ověření se nezdařilo',
  'Database error': 'Chyba databáze',
  'Invalid input': 'Neplatný vstup',
  'Wrong email or password.': 'Neplatné přihlašovací údaje'
};

