export type Chorse = {
  id: string
  name: string
  description: string
  categories: Category[]
  skills: Skill[]
  type: ChorseType
  provider: Provider
  price: number
  tags: Tag[]
  level: number
  language: string
  duration: string
  wbsCode: string
}

export type Category = {
  id: string
  name: string
  description: string
}
export type Skill = {
  id: string
  name: string
  description: string
}

export type ChorseType = {
  id: string
  name: string
  description: string
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
