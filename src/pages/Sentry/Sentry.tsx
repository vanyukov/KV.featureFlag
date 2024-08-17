import { useState } from "react"
import PlayArrowIcon from "@mui/icons-material/PlayArrow"
import { MainLayout } from "layout"
import { Button, Checkbox, FormControlLabel, TextField } from "ui"
import { runError } from "./runError"

export function Sentry() {
  const [errorText, setErrorText] = useState("Sentry Test Error")
  const [addDate, setAddDate] = useState(false)
  const [count, setCount] = useState(1)
  return (
    <MainLayout>
      <div className="container">
        <h1>Sentry</h1>
        <div className="flex g8">
          <TextField
            value={errorText}
            label="Error text"
            onChange={event => {
              setErrorText(event.target.value)
            }}
          />
          <FormControlLabel
            control={
              <Checkbox
                value={addDate}
                onChange={() => {
                  setAddDate(!addDate)
                }}
              />
            }
            label="add Date"
          />
          <TextField
            value={count}
            label="count"
            type="number"
            onChange={event => {
              setCount(Number.parseInt(event.target.value))
            }}
          />
          <Button
            color="primary"
            size="large"
            variant="contained"
            onClick={()=>{runError(errorText, addDate, count)}}
          >
            <PlayArrowIcon />
          </Button>
        </div>
      </div>
    </MainLayout>
  )
}
