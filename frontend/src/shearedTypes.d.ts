export type Course = {
  id: string
  name: string
  description: string
  categories: Category[]
  skills: Skill[]
  type: CourseType
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

export type CourseType = {
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

export type Enrollment ={
  id: string
  user: string
  course: Course
  status: number
  progress: string
}
export type User = {
  id: string
  firstName: string
  lastName: string
  position: string
  contact: string
  skills: Skill[]
  enrollments: Enrollment[]
}
