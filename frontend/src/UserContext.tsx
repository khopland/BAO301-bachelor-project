import { createContext, useEffect, useState } from 'react'
import { User } from './sharedTypes'
import { useQuery } from '@tanstack/react-query'

type UserContext = {
  user: User | null
  users: User[]
  changeUser: (id: string) => void
  refresh: () => Promise<void>
}

export const userContext = createContext<UserContext>({
  user: null,
  users: [],
  changeUser: () => {
    throw new Error('Context not initialized')
  },
  refresh: async () => {},
})

export const UserProvider = ({ children }: { children: JSX.Element[] }) => {
  const [user, setUser] = useState<User | null>(null)
  const [users, setUsers] = useState<User[]>([])
  const { data, refetch } = useQuery<User[]>({
    queryKey: ['users'],
    queryFn: () => fetch('/api/user').then((res) => res.json()),
  })

  useEffect(() => {
    setUsers(data ?? [])
    setUser((data ?? [])[0])
  }, [data])
  const refresh = async () => {
    await refetch()
  }
  const changeUser = (id: string) => {
    setUser(users.filter((x) => x.id === id)[0])
  }

  return (
    <userContext.Provider value={{ user, users, changeUser, refresh }}>
      {children}
    </userContext.Provider>
  )
}
