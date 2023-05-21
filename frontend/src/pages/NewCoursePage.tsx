import { useMutation, useQuery } from '@tanstack/react-query'
import { z } from 'zod'
import {
  Category,
  Course,
  CourseType,
  Provider,
  Skill,
  Tag,
} from '../sharedTypes'
import { useState } from 'react'
import { StringFormElement } from '../components/Forms/StringFormElement'
import { ListFormElement } from '../components/Forms/ListFormElement'
import { NumberFormElement } from '../components/Forms/NumberFormElement'

const formValidator = z.object({
  name: z.string().min(3),
  description: z.string().min(1),
  level: z.number().min(1).max(3),
  price: z.string().min(0),
  duration: z
    .string()
    .regex(
      new RegExp(/^[0-9]{1,}:[0-9]{2}:[0-9]{2}$/),
      'dose not match HH:MM:SS, ex. 0:10:00'
    ),
  language: z.string().min(1),
  wbsCode: z.string().min(1),
  provider: z.object({ id: z.string() }),
  categories: z.array(z.object({ id: z.string() })),
  type: z.object({ id: z.string() }),
  tags: z.array(z.object({ id: z.string() })),
  skills: z.array(z.object({ id: z.string() })),
})

export function NewCourse() {
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [WBS, setWBS] = useState('')
  const [duration, setDuration] = useState('00:00:00')
  const [price, setPrice] = useState('0.00')
  const [level, setLevel] = useState(0)
  const [category, setCategory] = useState('')
  const [language, setLanguage] = useState('')
  const [type, setType] = useState('')
  const [skill, setSkill] = useState('')
  const [tag, setTag] = useState('')
  const [provider, setProvider] = useState('')

  const categoryQuery = useQuery<Category[]>({
    queryKey: ['category'],
    queryFn: () => fetch('/api/category').then((res) => res.json()),
  })
  const typeQuery = useQuery<CourseType[]>({
    queryKey: ['type'],
    queryFn: () => fetch('/api/type').then((res) => res.json()),
  })
  const skillQuery = useQuery<Skill[]>({
    queryKey: ['skill'],

    queryFn: () => fetch('/api/skill').then((res) => res.json()),
  })
  const providerQuery = useQuery<Provider[]>({
    queryKey: ['provider'],
    queryFn: () => fetch('/api/provider').then((res) => res.json()),
  })
  const tagQuery = useQuery<Tag[]>({
    queryKey: ['tag'],
    queryFn: () => fetch('/api/tag').then((res) => res.json()),
  })

  const mutation = useMutation<Course, { message: string }>({
    mutationFn: async () => {
      const body = {
        name,
        description,
        level,
        price,
        duration,
        language,
        wbsCode: WBS,
        provider: { id: provider },
        categories: [{ id: category }],
        type: { id: type },
        tags: [{ id: tag }],
        skills: [{ id: skill }],
      }
      const req = await formValidator.parseAsync(body)

      const res = await fetch('/api/course', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(req),
      })

      return await res.json()
    },
  })

  return (
    <main className="ml-[5rem] p-5 flex flex-col h-[100vh]">
      <div className=" flex flex-col justify-center ">
        <h1 className="self-center text-center text-6xl pb-4 pt-8">
          Create Course
        </h1>

        <div className="w-full max-w-lg self-center">
          <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <StringFormElement label="Name" onChange={(v) => setName(v)} />

            <StringFormElement
              label="Description"
              onChange={(v) => setDescription(v)}
            />

            <StringFormElement label="WBS" onChange={(v) => setWBS(v)} />

            <StringFormElement
              label="Duration"
              placeholder="HH:MM:SS"
              onChange={(v) => setDuration(v)}
            />

            <StringFormElement
              label="Language"
              onChange={(v) => setLanguage(v)}
            />

            <NumberFormElement
              label="Price"
              placeholder="0.00"
              step="0.01"
              onChange={(v) => setPrice(v)}
            />

            <ListFormElement
              label="Level"
              list={[
                ['1', 'Beginner'],
                ['2', 'Intermediate'],
                ['3', 'Expert'],
              ]}
              onChange={(v) => setLevel(Number(v))}
            />

            <ListFormElement
              label="Category"
              list={categoryQuery.data?.map((x) => [x.id, x.name])}
              onChange={(v) => setCategory(v)}
            />

            <ListFormElement
              label="Type"
              list={typeQuery.data?.map((x) => [x.id, x.name])}
              onChange={(v) => setType(v)}
            />

            <ListFormElement
              label="Skill"
              list={skillQuery.data?.map((x) => [x.id, x.name])}
              onChange={(v) => setSkill(v)}
            />

            <ListFormElement
              label="Provider"
              list={providerQuery.data?.map((x) => [x.id, x.name])}
              onChange={(v) => setProvider(v)}
            />
            <ListFormElement
              label="Tag"
              list={tagQuery.data?.map((x) => [x.id, x.name])}
              onChange={(v) => setTag(v)}
            />

            <div className="flex items-center justify-between pt-3">
              <button
                disabled={mutation.isLoading}
                onClick={() => mutation.mutate()}
                className=" bg-tertiary text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
              >
                Create Course
              </button>
            </div>

            {mutation.isSuccess && <h2>Success</h2>}
            {mutation.isError && <h2>Failed {mutation.error.message}</h2>}
          </div>
        </div>
      </div>
    </main>
  )
}
