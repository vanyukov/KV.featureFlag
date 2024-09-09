import { useEffect } from "react"
import PlayArrowIcon from "@mui/icons-material/PlayArrow"
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline"
import { MainLayout } from "layout"
import { useAppDispatch } from "store"
import { featuresEditItem, featuresGetAll, featuresRemoveItem, TFeature, useFeatureList } from "feature/Features"
import { Button } from "ui"
import { cdnList } from "./fixture"
import { SendError } from "./SendError"
import style from "./Sentry.module.scss"

export function Sentry() {
  useEffect(() => {
    dispatch(featuresGetAll())
  }, [])

  const list = useFeatureList()
  const featureCdn = list.find(item => item.title == "mxm_sentryDns")

  const dispatch = useAppDispatch()
  const handlerRemove = () => {
    if (!featureCdn) {
      return
    }
    void dispatch(featuresRemoveItem({ ...featureCdn, status: "off" }))
  }
  const handlerSave = (url: string) => {
    if (!featureCdn) {
      return
    }
    void dispatch(featuresEditItem({ ...featureCdn, status: "on", value: url }))
  }

  return (
    <MainLayout>
      <h1>Sentry</h1>
      <div className="pt12 pb12">
        {cdnList().map(item => (
          <div className="flex g8 pt12" key={item.url}>
            <p className={style.lineTitle}>
              {item.title}
              <br />
              <a href={item.project} target="_blank">
                go project
              </a>
            </p>
            <p>{item.url}</p>
            {featureCdn?.value == item.url && featureCdn.status == "on" ? (
              <Button color="primary" size="small" variant="text" onClick={handlerRemove}>
                <CheckCircleOutlineIcon color="primary" className="w100" />
              </Button>
            ) : (
              <Button
                color="primary"
                size="large"
                variant="contained"
                onClick={() => {
                  handlerSave(item.url)
                }}
              >
                <PlayArrowIcon />
              </Button>
            )}
          </div>
        ))}
      </div>
      <SendError />
    </MainLayout>
  )
}
