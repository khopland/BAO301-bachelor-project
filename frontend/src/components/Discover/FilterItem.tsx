import {
  Chip,
  Checkbox,
  Accordion,
  AccordionBody,
  AccordionHeader,
} from '@material-tailwind/react'
import { Fragment, Dispatch, SetStateAction, useState, useEffect } from 'react'
import { QueryBody } from '../../pages/DiscoverPage'
import { useQuery } from '@tanstack/react-query'
import { Category, CourseType } from '../../sharedTypes'

var levels = ['Beginner', 'Intermediate', 'Expert']

type FilterItemProps = {
  setQuery: Dispatch<SetStateAction<QueryBody>>
}

const FilterItem = ({ setQuery }: FilterItemProps) => {
  const categoryQuery = useQuery<Category[]>({
    queryKey: ['category'],
    queryFn: () => fetch('/api/category').then((res) => res.json()),
  })
  const typeQuery = useQuery<CourseType[]>({
    queryKey: ['type'],
    queryFn: () => fetch('/api/type').then((res) => res.json()),
  })

  const [selectedCategory, setSelectedCategory] = useState<string>()
  const [selectedType, setSelectedType] = useState<string>()
  const [selectedLevel, setSelectedLevel] = useState<number>()

  useEffect(() => {
    setQuery((q) => {
      return {
        ...q,
        categoryId: selectedCategory,
        courseTypeId: selectedType,
        level: selectedLevel,
      }
    })
  }, [selectedCategory, selectedType, selectedLevel])

  const [isLevelOpen, setIsLevelOpen] = useState(true)
  const [isCategoryOpen, setIsCategoryOpen] = useState(true)
  const [isCourseTypeOpen, setIsCourseTypeOpen] = useState(true)

  type IconProps = {
    id: number
    open: number
  }

  const Icon: React.FC<IconProps> = ({ id, open }) => {
    return id === open ? (
      <i className="material-icons">keyboard_arrow_up</i>
    ) : (
      <i className="material-icons">keyboard_arrow_down</i>
    )
  }

  return (
    <div className="flex flex-col gap-0 my-2">
      <Accordion
        open={isLevelOpen}
        icon={<Icon id={1} open={isLevelOpen ? 1 : 0} />}
      >
        <AccordionHeader
          onClick={() => setIsLevelOpen((prev) => !prev)}
          className="py-1 text-on-secondary-container hover:text-on-secondary-container"
        >
          <h3 className="text-lg font-semibold">Level</h3>
        </AccordionHeader>
        <AccordionBody>
          <div className="flex flex-grow-0 flex-col gap-2">
            {levels.map((level, i) => (
              <Fragment key={level}>
                <button
                  onClick={() => {
                    setSelectedLevel(selectedLevel == i + 1 ? undefined : i + 1)
                  }}
                >
                  <Chip
                    className={`!text-on-secondary-container capitalize text-sm ${
                      selectedLevel == i + 1
                        ? '!bg-secondary-container'
                        : '!opacity-20 !bg-surface'
                    }`}
                    size="lg"
                    value={level}
                    variant={selectedLevel == i + 1 ? 'filled' : 'ghost'}
                  />
                </button>
              </Fragment>
            ))}
          </div>
        </AccordionBody>
      </Accordion>

      <Accordion
        open={isCategoryOpen}
        icon={<Icon id={2} open={isCategoryOpen ? 2 : 0} />}
      >
        <AccordionHeader
          onClick={() => setIsCategoryOpen((prev) => !prev)}
          className="py-1 text-on-secondary-container hover:text-on-secondary-container"
        >
          <h3 className="text-lg font-semibold">Category</h3>
        </AccordionHeader>
        <AccordionBody className="grid grid-cols-1">
          {categoryQuery.data != null ? (
            categoryQuery.data.map((category, i) => (
              <Fragment key={category.id}>
                <Checkbox
                  className="checked:bg-primary checked:border-primary checked:before:bg-primary border-on-primary-container p-0"
                  labelProps={{
                    className:
                      'text-sm font-semibold text-on-primary-container capitalize mt-0',
                  }}
                  containerProps={{
                    className: '',
                  }}
                  id={category.id}
                  label={category.name}
                  checked={selectedCategory === category.id}
                  onChange={(e) =>
                    setSelectedCategory(
                      e.target.checked ? category.id : undefined
                    )
                  }
                />
              </Fragment>
            ))
          ) : (
            <></>
          )}
        </AccordionBody>
      </Accordion>

      <Accordion
        open={isCourseTypeOpen}
        icon={<Icon id={3} open={isCourseTypeOpen ? 3 : 0} />}
      >
        <AccordionHeader
          onClick={() => setIsCourseTypeOpen((prev) => !prev)}
          className="py-1 text-on-secondary-container hover:text-on-secondary-container"
        >
          <h3 className="text-lg font-semibold mb-3">Course types</h3>
        </AccordionHeader>
        <AccordionBody className="grid grid-cols-1">
          {typeQuery.data != null ? (
            typeQuery.data.map((type, i) => (
              <Fragment key={type.id + i}>
                <Checkbox
                  className="checked:bg-primary checked:border-primary checked:before:bg-primary border-on-primary-container p-0"
                  containerProps={{
                    className: 'mt-1',
                  }}
                  labelProps={{
                    className:
                      'text-sm font-semibold text-on-secondary-container capitalize',
                  }}
                  id={type.id}
                  label={type.name}
                  checked={selectedType === type.id}
                  onChange={(e) =>
                    setSelectedType(e.target.checked ? type.id : undefined)
                  }
                />
              </Fragment>
            ))
          ) : (
            <></>
          )}
        </AccordionBody>
      </Accordion>
    </div>
  )
}

export default FilterItem
