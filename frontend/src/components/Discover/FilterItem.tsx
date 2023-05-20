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
import { Category, CourseType, Skill, Tag } from '../../sharedTypes'

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
  const tagsQuery = useQuery<Tag[]>({
    queryKey: ['tag'],
    queryFn: () => fetch('/api/tag').then((res) => res.json()),
  })
  const skillsQuery = useQuery<Skill[]>({
    queryKey: ['skill'],
    queryFn: () => fetch('/api/skill').then((res) => res.json()),
  })

  const [selectedLevel, setSelectedLevel] = useState<number>()
  const [selectedType, setSelectedType] = useState<string[]>([])
  const [selectedCategory, setSelectedCategory] = useState<string[]>([])
  const [selectedTag, setSelectedTag] = useState<string[]>([])
  const [selectedSkill, setSelectedSkill] = useState<string[]>([])

  useEffect(() => {
    setQuery((q) => {
      return {
        ...q,
        categoryIds: selectedCategory,
        courseTypeIds: selectedType,
        level: selectedLevel,
        tagIds: selectedTag,
        skillIds: selectedSkill,
      }
    })
  }, [
    selectedSkill,
    selectedTag,
    selectedCategory,
    selectedType,
    selectedLevel,
  ])

  const [isLevelOpen, setIsLevelOpen] = useState(false)
  const [isCategoryOpen, setIsCategoryOpen] = useState(false)
  const [isCourseTypeOpen, setIsCourseTypeOpen] = useState(false)
  const [isTagsOpen, setIsTagsOpen] = useState(false)
  const [isSkillsOpen, setIsSkillsOpen] = useState(false)

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
          className="py-1 text-on-secondary-container hover:text-on-secondary-container border-b-deep-purple-50"
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
        open={isCourseTypeOpen}
        icon={<Icon id={3} open={isCourseTypeOpen ? 3 : 0} />}
      >
        <AccordionHeader
          onClick={() => setIsCourseTypeOpen((prev) => !prev)}
          className="py-1 text-on-secondary-container hover:text-on-secondary-container border-b-deep-purple-50"
        >
          <h3 className="text-lg font-semibold mb-3">Course Types</h3>
        </AccordionHeader>
        <AccordionBody className="grid grid-cols-1">
          {typeQuery.data != null ? (
            typeQuery.data.map((type, i) => (
              <Fragment key={type.id + i}>
                <Checkbox
                  className="checked:bg-primary checked:border-primary checked:before:bg-primary border-on-primary-container p-0"
                  labelProps={{
                    className:
                      'text-sm font-semibold text-on-secondary-container capitalize mt-0',
                  }}
                  id={type.id}
                  label={type.name}
                  checked={selectedType.includes(type.id)}
                  onChange={(e) => {
                    if (e.target.checked) {
                      setSelectedType((prevTypes) => [...prevTypes, type.id])
                    } else {
                      setSelectedType((prevTypes) =>
                        prevTypes.filter((id) => id !== type.id)
                      )
                    }
                  }}
                />
              </Fragment>
            ))
          ) : (
            <></>
          )}
        </AccordionBody>
      </Accordion>

      <Accordion
        open={isCategoryOpen}
        icon={<Icon id={2} open={isCategoryOpen ? 2 : 0} />}
      >
        <AccordionHeader
          onClick={() => setIsCategoryOpen((prev) => !prev)}
          className="py-1 text-on-secondary-container hover:text-on-secondary-container border-b-deep-purple-50"
        >
          <h3 className="text-lg font-semibold">Categories</h3>
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
                  id={category.id}
                  label={category.name}
                  checked={selectedCategory.includes(category.id)}
                  onChange={(e) => {
                    if (e.target.checked) {
                      setSelectedCategory((prevCategories) => [
                        ...prevCategories,
                        category.id,
                      ])
                    } else {
                      setSelectedCategory((prevCategories) =>
                        prevCategories.filter((id) => id !== category.id)
                      )
                    }
                  }}
                />
              </Fragment>
            ))
          ) : (
            <></>
          )}
        </AccordionBody>
      </Accordion>

      <Accordion
        open={isTagsOpen}
        icon={<Icon id={4} open={isTagsOpen ? 4 : 0} />}
      >
        <AccordionHeader
          onClick={() => setIsTagsOpen((prev) => !prev)}
          className="py-1 text-on-secondary-container hover:text-on-secondary-container border-b-deep-purple-50"
        >
          <h3 className="text-lg font-semibold">Tags</h3>
        </AccordionHeader>
        <AccordionBody className="grid grid-cols-1">
          {tagsQuery.data != null ? (
            tagsQuery.data.map((tag, i) => (
              <Fragment key={tag.id}>
                <Checkbox
                  className="checked:bg-primary checked:border-primary checked:before:bg-primary border-on-primary-container p-0"
                  labelProps={{
                    className:
                      'text-sm font-semibold text-on-primary-container capitalize mt-0',
                  }}
                  id={tag.id}
                  label={tag.name}
                  checked={selectedTag.includes(tag.id)}
                  onChange={(e) => {
                    if (e.target.checked) {
                      setSelectedTag((prevTags) => [...prevTags, tag.id])
                    } else {
                      setSelectedTag((prevTags) =>
                        prevTags.filter((id) => id !== tag.id)
                      )
                    }
                  }}
                />
              </Fragment>
            ))
          ) : (
            <></>
          )}
        </AccordionBody>
      </Accordion>

      <Accordion
        open={isSkillsOpen}
        icon={<Icon id={5} open={isSkillsOpen ? 5 : 0} />}
      >
        <AccordionHeader
          onClick={() => setIsSkillsOpen((prev) => !prev)}
          className="py-1 text-on-secondary-container hover:text-on-secondary-container border-b-deep-purple-50"
        >
          <h3 className="text-lg font-semibold">Skills</h3>
        </AccordionHeader>
        <AccordionBody className="grid grid-cols-1">
          {skillsQuery.data != null ? (
            skillsQuery.data.map((skill, i) => (
              <Fragment key={skill.id}>
                <Checkbox
                  className="checked:bg-primary checked:border-primary checked:before:bg-primary border-on-primary-container p-0"
                  labelProps={{
                    className:
                      'text-sm font-semibold text-on-primary-container capitalize mt-0',
                  }}
                  id={skill.id}
                  label={skill.name}
                  checked={selectedSkill.includes(skill.id)}
                  onChange={(e) => {
                    if (e.target.checked) {
                      setSelectedSkill((prevSkills) => [
                        ...prevSkills,
                        skill.id,
                      ])
                    } else {
                      setSelectedSkill((prevSkills) =>
                        prevSkills.filter((id) => id !== skill.id)
                      )
                    }
                  }}
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
