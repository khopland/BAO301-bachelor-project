import { useMutation, useQuery } from '@tanstack/react-query'
import { Category, Course, CourseType, Skill, Tag } from '../shearedTypes'
import { useState } from 'react'

export function NewCourse() {
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
  //   const tagQuery = useQuery<Tag[]>({
  //     queryKey: ['tag'],
  //     queryFn: () => fetch('/api/tag').then((res) => res.json()),
  //   })

  const mutation = useMutation<Course, void>({
    mutationFn: async () => {
      const body = {
        name,
        description,
        level,
        price,
        duration,
        wbsCode: WBS,
        
        categories: [
          {
            id: category,
          },
        ],
        type: {
          id: type,
        },
        skills: [
          {
            id: skill,
          },
        ],
      }

      console.log('called')
      const req = await fetch('/api/course', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      })

      return await req.json()
    },
  })
  // fetch('/todos', { method: 'POST' }).then((x) => x.json())

  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [WBS, setWBS] = useState('')
  const [duration, setDuration] = useState('00:00:00')
  const [price, setPrice] = useState('0.00')
  const [level, setLevel] = useState(0)
  const [category, setCategory] = useState('')
  const [type, setType] = useState('')
  const [skill, setSkill] = useState('')

  return (
    <main className="ml-[5rem] p-5 flex flex-col h-[100vh]">
      <div className="h-screen flex flex-col justify-center ">
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
            <div className="mb-6">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="price"
              >
                Price
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="price"
                type="number"
                placeholder="0.00"
                step="0.01"
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>

            <MultiListFormElement
              label="level"
              list={[
                ['1', 'Beginner'],
                ['2', 'Intermediate'],
                ['3', 'Expert'],
              ]}
              onChange={(v) => setLevel(Number(v))}
            />

            <MultiListFormElement
              label="category"
              list={categoryQuery.data?.map((x) => [x.id, x.name])}
              onChange={(v) => setCategory(v)}
            />

            <MultiListFormElement
              label="type"
              list={typeQuery.data?.map((x) => [x.id, x.name])}
              onChange={(v) => setType(v)}
            />

            <MultiListFormElement
              label="skill"
              list={skillQuery.data?.map((x) => [x.id, x.name])}
              onChange={(v) => setSkill(v)}
            />

            <div className="flex items-center justify-between pt-3">
              <button
                onClick={() => mutation.mutate()}
                className=" bg-tertiary text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
              >
                Create Course
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

function StringFormElement(props: {
  label: string
  placeholder?: string
  onChange: (value: string) => void
}) {
  return (
    <div className="mb-6">
      <label
        className="block text-gray-700 text-sm font-bold mb-2"
        htmlFor={props.label}
      >
        {props.label}
      </label>
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id={props.label}
        type="text"
        placeholder={props.placeholder ?? props.label}
        onChange={(e) => props.onChange(e.target.value)}
      />
    </div>
  )
}

function MultiListFormElement(props: {
  label: string
  list: [string, string][] | undefined
  onChange: (value: string) => void
}) {
  return (
    <div className="mb-6">
      <label
        className="block text-gray-700 text-sm font-bold mb-2"
        htmlFor={props.label}
      >
        {props.label}
      </label>
      <select
        id={props.label}
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        onChange={(e) => props.onChange(e.target.value)}
        defaultValue=""
      >
        <option value="">Choose a {props.label}</option>
        {props.list?.map((val, i) => (
          <option key={i} value={val[0]}>
            {val[1]}
          </option>
        ))}
      </select>
    </div>
  )
}
