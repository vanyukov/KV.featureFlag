import { useEffect, useState } from "react"
import { Link, Paper, TextField } from "ui"
import { domainList } from "./domainList"
import { getPathname } from "./getPathname"
import style from "./GoToPage.module.scss"

export type GoToPageProps = {}

export function GoToPage({}: GoToPageProps) {
  const [stend, setStend] = useState(7)
  const [pathname, setPathname] = useState('')

  useEffect(() => {
    getPathname().then(res => {
      setPathname(res)
    })
  }, [])

  if (!pathname) {
    return null
  }

  return (
    <Paper>
      <div className={style.wrap}>
        {domainList.map(item => (
          <div className={style.line} key={item.url}>
            <Link href={`${item.url}${pathname}`.replace("%", String(stend))} target="_blank">
              Go to {item.title}
            </Link>
            {item.haveStandNuber && (
              <TextField
                value={stend}
                label="Stend number"
                type="number"
                onChange={event => {
                  setStend(+event.target.value)
                }}
              />
            )}
          </div>
        ))}
      </div>
    </Paper>
  )
}
