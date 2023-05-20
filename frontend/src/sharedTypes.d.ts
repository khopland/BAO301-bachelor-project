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

export type Segment = {
  id: string
  name: string
  description: string
  categories: Category[]
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

export type Enrollment = {
  id: string
  user: User
  course: Course
  status: number
  progress: string
}

export type userEnrollment = {
  id: string
  user: string
  course: Course
  status: number
  progress: string
}
export type Contact = {
  id: string
  address: string
  city: string
  country: string
  zipcode: string
  phone: string
  email: string
}
export type User = {
  id: string
  firstName: string
  lastName: string
  position: string
  contact: Contact
  skills: Skill[]
  interests: Tag[]
  enrollments: userEnrollment[]
}
