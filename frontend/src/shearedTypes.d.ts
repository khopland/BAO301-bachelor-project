export type Chorse = {
  id: string
  name: string
  description: string
  categories: Provider[]
  skills: Provider[]
  type: Provider
  provider: Provider
  price: number
  tags: Tag[]
  level: number
  language: string
  duration: string
  wbsCode: string
}

export type Provider = {
  id: string
  name: string
  description: string
}

export type Tag = {
  id: string
  name: string
}
