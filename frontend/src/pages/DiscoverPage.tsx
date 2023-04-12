import React, { useEffect, useState } from 'react'
import DiscoverHeader from '../components/Discover/Header'
import FilterMenu from '../components/Discover/FilterMenu'
import FilterItems from '../components/Discover/FilterItem'
import CourseList from '../components/Discover/CourseList'
import { SearchBar } from '../components/Common/SearchBar'
import { Chip } from '../components/Common/Chip'
import CourseItem from '../components/Discover/CourseItem'
import { useQuery } from '@tanstack/react-query'
import { useDebounce } from 'use-debounce'
import { Course } from '../shearedTypes'

const title = 'Discover new courses'
const description =
  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas ducimus distinctio, maiores, vel suscipit neque animi velit natus libero exercitationem, dignissimos omnis perferendis voluptate sed autem. In eaque excepturi dolorem.'

export type QueryBody = {
  courseTypeId?: string
  categoryId?: string
  skillId?: string
  tagId?: string
  level?: number
  language?: string
  name?: string
}

export const DiscoverPage: React.FC = () => {
  const [query, setQuery] = useState<QueryBody>({} as QueryBody)
  const [searchString, setSearchString] = useState('')
  const [searchDebounced] = useDebounce(searchString, 300)

  useEffect(() => {
    setQuery((q) => {
      return { ...q, name: searchDebounced }
    })
  }, [searchDebounced])

  const { isLoading, error, data } = useQuery<Course[]>({
    queryKey: ['discovery', query],
    queryFn: () =>
      fetch('/api/course/query', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(query),
      }).then((res) => res.json()),
    keepPreviousData: true,
  })

  return (
    <main className="ml-[5rem] p-5 grid grid-cols-7 gap-5 auto-rows-max h-[99vh] w-100 relative">
      <header className="gap-5 col-span-7 bg-transparent p-0">
        <DiscoverHeader title={title} description={description} />
      </header>

      <aside className="col-span-2">
        <FilterMenu>
          <FilterItems setQuery={setQuery} />
        </FilterMenu>
      </aside>

      <section className="col-start-3 col-end-8 rounded-2xl no-elevate bg-surface text-on-primary-container flex flex-col gap-3 px-7 py-7">
        <SearchBar search={searchString} setSearch={setSearchString} />
        <div className="flex flex-wrap gap-2 px-5">
          <Chip label="A chip" icon="done" />
          <Chip label="A chip" icon="done" />
          <Chip label="A chip" icon="done" />
          <Chip label="A chip" icon="done" />
          <Chip label="A chip" icon="done" />
        </div>

        <CourseList>
          {isLoading ? <div>Loading...</div> : <></>}
          {data != null && data.length > 0 ? (
            data.map((course) => (
              <React.Fragment key={course.id}>
                <CourseItem
                  id={course.id}
                  title={course.name}
                  image={'src/components/Assets/course-illustration.jpg'}
                  description={course.description}
                  duration={course.duration}
                  level={
                    course.level === 1
                      ? 'Beginner'
                      : course.level === 2
                      ? 'Intermediate'
                      : course.level === 3
                      ? 'Expert'
                      : course.level.toString()
                  }
                  provider={course.provider.name}
                  courseType={course.type.name}
                />
              </React.Fragment>
            ))
          ) : (
            <>No Contnet</>
          )}
        </CourseList>
      </section>
      <section className="" />
    </main>
  )
}
