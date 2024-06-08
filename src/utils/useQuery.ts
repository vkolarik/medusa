import { usePathname, useSearchParams, useRouter } from "next/navigation"
import { useCallback } from "react"

export const useQuery = () => {
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const router = useRouter()

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString())
      params.set(name, value)
      router.push(pathname + "?" + params.toString(), { scroll: false })
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [searchParams]
  )

  const createQueryStringArray = useCallback(
    (data: { name: string; value: string }[]) => {
      const params = new URLSearchParams(searchParams.toString())
      data.forEach(({ name, value }) => params.set(name, value))

      router.push(pathname + "?" + params.toString(), { scroll: false })
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [searchParams]
  )

  const removeQueryString = useCallback(
    (name: string) => {
      const params = new URLSearchParams(searchParams.toString())
      params.delete(name)

      router.push(pathname + "?" + params.toString(), { scroll: false })
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [searchParams]
  )

  const resetQueries = useCallback(
    () => {
      router.push(pathname, { scroll: false })
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [searchParams]
  )

  const getQueryString = useCallback(
    (name: string) => {
      return searchParams.get(name)
    },
    [searchParams]
  )

  return {
    searchParams,
    createQueryString,
    removeQueryString,
    getQueryString,
    createQueryStringArray,
    resetQueries
  }
}
