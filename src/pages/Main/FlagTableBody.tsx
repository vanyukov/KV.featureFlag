import { TableBody } from "ui"
import { featuresGetAll, useFeatureList } from "feature/Features"
import { FlagRow } from "./FlagRow"
import { useEffect } from "react"
import { useAppDispatch } from "store"

export const FlagTableBody = () => {
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(featuresGetAll())
  }, [])
  const list = useFeatureList()
  return (
    <TableBody>
      {list.map(item => (
        <FlagRow key={item.id} item={item} />
      ))}
    </TableBody>
  )
}
