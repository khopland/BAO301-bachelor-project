import React, { useEffect, useState } from 'react'
import DiscoverHeader from '../components/Discover/Header'
import FilterMenu from '../components/Discover/FilterMenu'
import FilterItems from '../components/Discover/FilterItem'
import CourseList from '../components/Discover/CourseList'
import { SearchBar } from '../components/Common/SearchBar'
import CourseItem from '../components/Discover/CourseItem'
import { useQuery } from '@tanstack/react-query'
import { useDebounce } from 'use-debounce'
import { Course } from '../sharedTypes'
import { Button, Drawer, Spinner, Typography } from '@material-tailwind/react'

export type QueryBody = {
  courseTypeId?: string
  categoryId?: string
  skillId?: string
  tagIds?: string[]
  level?: number
  price?: number
  language?: string
  name?: string
  sortByPrice?: boolean
}

export const DiscoverPage: React.FC = () => {
  const [query, setQuery] = useState<QueryBody>({} as QueryBody)
  const [searchString, setSearchString] = useState('')
  const [openRight, setOpenRight] = useState(false)
  const [searchDebounced] = useDebounce(searchString, 300)

  const openDrawerRight = () => setOpenRight(true)
  const closeDrawerRight = () => setOpenRight(false)

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
    <main className="container p-5 md:pl-[6rem] mx-auto md:grid-cols-7 grid grid-cols-1 gap-5 auto-rows-max h-[99vh] min-w-0 max-w-7xl relative">
      <section className="md:col-span-7 rounded-2xl bg-surface text-on-primary-container p-4">
        <SearchBar search={searchString} setSearch={setSearchString} />
      </section>
      <section className="fixed right-2 bottom-10 z-10">
        <Button
          color="deep-purple"
          className="md:hidden flex items-center gap-4 rounded-3xl bg-primary-container hover:shadow-primary-container text-on-primary-container"
          onClick={openDrawerRight}
        >
          <i className="material-icons-round h-5 w-5">filter_list</i>
          <p className="mt-.5">Filters</p>
        </Button>
      </section>

      <aside className="md:col-span-2 hidden md:block">
        <FilterMenu>
          <FilterItems setQuery={setQuery} />
        </FilterMenu>
      </aside>

      <Drawer
        placement="right"
        open={openRight}
        onClose={closeDrawerRight}
        className="md:hidden bg-surface overflow-y-auto rounded-tl-2xl rounded-bl-2xl py-4"
        overlayProps={{ className: 'md:hidden fixed' }}
      >
        <section className="sticky flex flex-row-reverse mr-5 bg-surface">
          <Button
            className="md:hidden flex items-center bg-transparent shadow-none text-on-primary-container p-2
          hover:shadow-none hover:bg-gray-500 hover:bg-opacity-20 rounded-full mb-0"
            onClick={closeDrawerRight}
          >
            <i className="material-icons-round rotate-180">menu_open</i>
          </Button>
        </section>
        <FilterMenu>
          <FilterItems setQuery={setQuery} />
        </FilterMenu>
      </Drawer>

      <section className="md:col-start-3 md:col-end-8 rounded-2xl no-elevate bg-surface text-on-primary-container flex flex-col gap-3 px-7 py-7">
        <CourseList>
          {isLoading ? <Spinner className="h-12 w-12" /> : <></>}
          {data != null && data.length > 0 ? (
            data.map((course) => (
              <React.Fragment key={course.id}>
                <CourseItem
                  id={course.id}
                  title={course.name}
                  image={course.categories[0].name}
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
            <>Sorry, no courses matched your search.</>
          )}
        </CourseList>
      </section>
      <section className="" />
    </main>
  )
}
