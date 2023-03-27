import React from 'react'
import DiscoverHeader from '../components/Discover/Header'
import FilterMenu from '../components/Discover/FilterMenu'
import FilterItems from '../components/Discover/FilterItem'
import CourseList from '../components/Discover/CourseList'
import { SearchBar } from '../components/Common/SearchBar'
import { Chip } from '../components/Common/Chip'
import CourseItem from '../components/Discover/CourseItem'

const title = 'Discover new courses'
const description =
  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas ducimus distinctio, maiores, vel suscipit neque animi velit natus libero exercitationem, dignissimos omnis perferendis voluptate sed autem. In eaque excepturi dolorem.'
var courseData = [
  {
    id: 1,
    title: 'AZ-204: Getting started',
    description:
      'Learn how to implement Azure compute solutions, create Azure Functions, implement and manage web apps, develop solutions and more!',
    duration: '45hrs',
    level: 'Intermediate',
    provider: 'Glasspaper AS',
    courseType: 'Digital',
    image: 'src/components/Assets/course-illustration.jpg',
  },
  {
    id: 2,
    title: 'AZ-900: Too easy',
    description:
      'Learn how to implement Azure compute solutions, create Azure Functions, implement and manage web apps, develop solutions and more!',
    duration: '12hrs',
    level: 'Intermediate',
    provider: 'Glasspaper AS',
    courseType: 'Digital',
    image: 'src/components/Assets/course-illustration.jpg',
  },
  {
    id: 3,
    title: 'AZ-204: Getting started',
    description:
      'Learn how to implement Azure compute solutions, create Azure Functions, implement and manage web apps, develop solutions and more!',
    duration: '45hrs',
    level: 'Intermediate',
    provider: 'Glasspaper AS',
    courseType: 'Digital',
    image: 'src/components/Assets/course-illustration.jpg',
  },
  {
    id: 4,
    title: 'AZ-900: Too easy',
    description:
      'Learn how to implement Azure compute solutions, create Azure Functions, implement and manage web apps, develop solutions and more!',
    duration: '12hrs',
    level: 'Intermediate',
    provider: 'Glasspaper AS',
    courseType: 'Digital',
    image: 'src/components/Assets/course-illustration.jpg',
  },
]

export const DiscoverPage: React.FC = () => {
  return (
    <main className="ml-[5rem] p-5 grid grid-cols-7 gap-5 auto-rows-max h-[99vh] w-100 relative">
      <header className="gap-5 col-span-7 bg-transparent p-0">
        <DiscoverHeader title={title} description={description} />
      </header>

      <aside className="col-span-2">
        <FilterMenu>
          <FilterItems />
        </FilterMenu>
      </aside>

      <section className="col-start-3 col-end-8 rounded-2xl no-elevate bg-surface text-on-primary-container flex flex-col gap-3 px-7 py-7">
        <SearchBar />
        <div className="flex flex-wrap gap-2 px-5">
          <Chip label="A chip" icon="done"></Chip>
          <Chip label="A chip" icon="done"></Chip>
          <Chip label="A chip" icon="done"></Chip>
          <Chip label="A chip" icon="done"></Chip>
          <Chip label="A chip" icon="done"></Chip>
        </div>

        <CourseList>
          {courseData.map((course) => (
            <React.Fragment key={course.id}>
              <CourseItem
                title={course.title}
                image={course.image}
                description={course.description}
                duration={course.duration}
                level={course.level}
                provider={course.provider}
                courseType={course.courseType}
              />
            </React.Fragment>
          ))}
        </CourseList>
      </section>
      <section className=""></section>
    </main>
  )
}
