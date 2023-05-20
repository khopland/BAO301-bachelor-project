import { Fragment, useContext, useState } from 'react'
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  IconButton,
  Chip,
  Typography,
} from '@material-tailwind/react'
import { FC } from 'react'
import { Tag } from '../../sharedTypes'
import { useQuery } from '@tanstack/react-query'
import { userContext } from '../../UserContext'

interface AddInterestsProps {
  className?: string
  interests?: Tag[]
}

export const AddInterests: FC<AddInterestsProps> = ({ interests }) => {
  const { user, refresh } = useContext(userContext)
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(!open)
  const [selectedInterests, setSelectedInterests] = useState<Tag[]>(
    interests || []
  )

  const tagsQuery = useQuery<Tag[]>({
    queryKey: ['tag'],
    queryFn: () => fetch('/api/tag').then((res) => res.json()),
  })

  const handleChipClick = (tag: Tag) => {
    if (selectedInterests.some((interest) => interest.id === tag.id)) {
      setSelectedInterests(
        selectedInterests.filter((interest) => interest.id !== tag.id)
      )
    } else {
      setSelectedInterests([...selectedInterests, tag])
    }
  }

  const submitInterests = async () => {
    const response = await fetch('/api/user/interest', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        UserId: user?.id,
        Interests: selectedInterests.map((interest) => interest.id),
      }),
    })

    if (response.ok) {
      await refresh()
    }
    handleOpen()
  }

  return (
    <Fragment>
      <IconButton
        onClick={handleOpen}
        className="flex items-center bg-transparent shadow-none text-on-primary-container p-2
            hover:shadow-none hover:bg-gray-500 hover:bg-opacity-20 rounded-full mb-"
      >
        <i className="material-icons-round">edit</i>
      </IconButton>
      <Dialog
        open={open}
        size={'lg'}
        handler={handleOpen}
        className="bg-background p-6"
      >
        <DialogHeader className="pb-0">Select Your Interests</DialogHeader>
        <DialogBody className=" flex flex-wrap gap-1 pt-0 overflow-scroll">
          <Typography className="text-sm md:text-base text-on-background mb-2">
            By adding your areas of interest, you can receive course suggestions
            tailored to your preferences. This means you spend less time
            searching for the right course and more time learning about the
            topics you love.
          </Typography>

          {tagsQuery.data
            ?.map((tag, i) => (
              <button key={i} onClick={() => handleChipClick(tag)}>
                <Chip
                  className={`text-on-secondary-container capitalize text-xs font-semibold ${
                    selectedInterests?.find(
                      (interest) => interest.id === tag.id
                    )
                      ? '!bg-secondary-container opacity-1'
                      : '!opacity-20 !bg-surface'
                  }`}
                  size="lg"
                  value={tag.name}
                  variant={
                    selectedInterests?.find(
                      (interest) => interest.id === tag.id
                    )
                      ? 'filled'
                      : 'ghost'
                  }
                />
              </button>
            ))
            .reverse()}
        </DialogBody>
        <DialogFooter>
          <Button
            variant="text"
            onClick={handleOpen}
            className="text-primary mr-1"
            color="deep-purple"
          >
            <span>Cancel</span>
          </Button>
          <Button
            color="deep-purple"
            onClick={submitInterests}
            className="text-on-primary bg-primary"
          >
            <span>Confirm</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </Fragment>
  )
}
