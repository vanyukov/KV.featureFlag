import { useEffect, useState } from "react"
import PlayArrowIcon from "@mui/icons-material/PlayArrow"
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline"
import ContentCopyIcon from "@mui/icons-material/ContentCopy"
import { MainLayout } from "layout"
import { useAppDispatch } from "store"
import { featuresEditItem, featuresGetAll, featuresRemoveItem, useFeatureList } from "feature/Features"
import { Button, TextField, Tooltip } from "ui"
import { wsList } from "./wsList"
import { copyToClipboard } from "common/copyToClipboard"

export const Wss = () => {
  useEffect(() => {
    dispatch(featuresGetAll())
  }, [])

  const list = useFeatureList()
  const featureWss = list.find(item => item.title == "debug:websocket")

  const dispatch = useAppDispatch()
  const handlerRemove = () => {
    if (!featureWss) {
      return
    }
    void dispatch(featuresRemoveItem({ ...featureWss, status: "off" }))
  }
  const handlerSave = (url: string) => {
    if (!featureWss) {
      return
    }
    void dispatch(featuresEditItem({ ...featureWss, status: "on", value: url }))
  }

  const [stend, setStend] = useState(25)
  const [wssUrl, setWssUrl] = useState("")
  useEffect(() => {
    setWssUrl(`wss://web${stend}_zenitbet.dev.almara.org/wss`)
  }, [stend])
  const setLsCommand = (url: string) => `localStorage.setItem("debug:websocket", "${url}");`

  return (
    <MainLayout>
      <h1>WSS </h1>
      <h2>Set stend wss</h2>
      {featureWss && (
        <p className="pb12">
          Current WSS url: <strong>{featureWss.value}</strong>
        </p>
      )}
      <div className="flex align-center g8 pt12">
        <TextField
          value={stend}
          label="Stend number"
          type="number"
          onChange={event => {
            setStend(+event.target.value)
          }}
        />
        <p>{wssUrl}</p>
        {featureWss?.status == "on" && featureWss.value == wssUrl ? (
          <Button color="primary" size="small" variant="text" onClick={handlerRemove}>
            <CheckCircleOutlineIcon color="primary" className="w100" />
          </Button>
        ) : (
          <Button
            color="primary"
            size="large"
            variant="contained"
            disabled={!stend}
            onClick={() => {
              handlerSave(wssUrl)
            }}
          >
            <PlayArrowIcon />
          </Button>
        )}
        <Tooltip title={setLsCommand(wssUrl)} placement="left-start">
          <Button
            color="secondary"
            size="large"
            variant="contained"
            disabled={!stend}
            onClick={() => {
              copyToClipboard(setLsCommand(wssUrl))
            }}
          >
            <ContentCopyIcon />
          </Button>
        </Tooltip>
      </div>
      {wsList.map(item => (
        <div className="flex align-center justify-between g8 pt12 " key={item.id}>
          <p className="pb12 w100">
            set {item.title}: <strong>{item.link}</strong>
          </p>

          {featureWss?.status == "on" && featureWss.value == item.link ? (
            <Button color="primary" size="small" variant="text" onClick={handlerRemove}>
              <CheckCircleOutlineIcon color="primary" className="w100" />
            </Button>
          ) : (
            <Button
              color="primary"
              size="large"
              variant="contained"
              disabled={!stend}
              onClick={() => {
                handlerSave(item.link)
              }}
            >
              <PlayArrowIcon />
            </Button>
          )}
          <Tooltip title={setLsCommand(item.link)} placement="left-start">
            <Button
              color="secondary"
              size="large"
              variant="contained"
              disabled={!stend}
              onClick={() => {
                copyToClipboard(setLsCommand(item.link))
              }}
            >
              <ContentCopyIcon />
            </Button>
          </Tooltip>
        </div>
      ))}
    </MainLayout>
  )
}
