import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Checkbox,
  Rating,
  Slider,
  Typography,
} from '@mui/material'
import { useEffect, useState } from 'react'

function Components() {
  const [counter, setCounter] = useState(0)
  const [rating, setRating] = useState<number | null>(0)

  const [slider, setSlider] = useState<number | number[]>(0)

  const [title, setTitle] = useState('')

  useEffect(() => {
    fetch('/api/hello')
      .then((response) => response.json())
      .then((data) => setTitle(data?.text))
  }, [])

  return (
    <div className="flex flex-col pl-72 p-12 ">
      <h1 className="text-primary text-4xl font-bold">{title}</h1>
      <br />

      <h1>counter {counter}</h1>
      <div className="flex-1	flex">
        <Button
          className="w-2 "
          variant="contained"
          onClick={() => setCounter((x) => x + 1)}
        >
          +1
        </Button>
        <Button
          className="w-2"
          variant="outlined"
          onClick={() => setCounter((x) => x - 1)}
        >
          -1
        </Button>
      </div>
      <br />
      <h1>slider {slider}</h1>
      <div className="w-64">
        <Slider
          defaultValue={0}
          max={100}
          aria-label="Default"
          valueLabelDisplay="auto"
          onChange={(_, value) => setSlider(value)}
        />
      </div>

      <Rating
        name="simple-controlled"
        value={rating}
        onChange={(event, newValue) => {
          setRating(newValue)
        }}
      />
      <Checkbox className="w-2" />
      <Checkbox className="w-2" defaultChecked />

      <Card sx={{ maxWidth: 300 }}>
        <CardMedia
          sx={{ height: 140 }}
          className="bg-gray-400"
          image="/static/images/cards/contemplative-reptile.jpg"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lorum
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </Card>
    </div>
  )
}

export default Components
