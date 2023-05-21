import { createContext, useEffect, useState } from 'react'
import { User } from './sharedTypes'
import { useQuery } from '@tanstack/react-query'

type UserContext = {
  user: User | null
  users: User[]
  changeUser: (id: string) => void
  refresh: () => Promise<void>
  loading: boolean
}

export const userContext = createContext<UserContext>({
  user: null,
  users: [],
  changeUser: () => {
    throw new Error('Context not initialized')
  },
  refresh: async () => {},
  loading: true,
})

export const UserProvider = ({ children }: { children: JSX.Element[] }) => {
  const [loading, setLoading] = useState(true)
  const [user, setUser] = useState<User | null>(null)
  const [users, setUsers] = useState<User[]>([])
  const { data, refetch } = useQuery<User[]>({
    queryKey: ['users'],
    queryFn: () => fetch('/api/user').then((res) => res.json()),
  })

  useEffect(() => {
    setUsers(data ?? [])
    setUser((data ?? [])[0])
    setLoading(false)
  }, [data])
  const refresh = async () => {
    await refetch()
  }
  const changeUser = (id: string) => {
    setUser(users.filter((x) => x.id === id)[0])
  }

  return (
    <userContext.Provider value={{ user, users, changeUser, refresh, loading }}>
      {children}
    </userContext.Provider>
  )
}
