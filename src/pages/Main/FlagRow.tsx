import { useEffect, useState } from "react"
import { Button, TableCell, TableRow, TextField } from "ui"
import AddIcon from "@mui/icons-material/Add"
import RemoveIcon from "@mui/icons-material/Remove"
import EditIcon from "@mui/icons-material/Edit"
import ReplayIcon from "@mui/icons-material/Replay"
import { featuresEditItem, featuresRemoveItem } from "feature/Features"
import { useAppDispatch } from "store"
import { TFeature } from "feature/Features"
import { Value } from "sass"

type TFlagRow = { item: TFeature }

export const FlagRow = ({ item }: TFlagRow) => {
  const [isEdited, setIsEdited] = useState(false)
  const [editedItem, setEditedItem] = useState({ ...item })
  const dispatch = useAppDispatch()

  const handlerSave = () => {
    setIsEdited(false)
    void dispatch(featuresEditItem({ ...editedItem, status: "on" }))
  }

  const handlerReload = () => {
    setIsEdited(false)
    void dispatch(featuresEditItem({ ...editedItem, value: editedItem.defaultValue, status: "on" }))
  }

  const handlerRemove = () => {
    void dispatch(featuresRemoveItem({ ...editedItem, status: "off" }))
  }

  useEffect(() => {
    setEditedItem({ ...item })
  }, [item])

  return (
    <TableRow>
      <TableCell>
        <Button
          color={editedItem.status == "off" ? "primary" : "secondary"}
          size="small"
          variant="text"
          onClick={handlerSave}
          disabled={editedItem.status == "on"}
        >
          <AddIcon />
        </Button>
        <Button
          color={editedItem.status == "on" ? "primary" : "secondary"}
          size="small"
          variant="text"
          onClick={handlerRemove}
          disabled={editedItem.status == "off"}
        >
          <RemoveIcon />
        </Button>
        <Button color="secondary" size="small" variant="text" onClick={handlerSave} disabled={!isEdited}>
          <EditIcon />
        </Button>
        <Button color="secondary" size="small" variant="text" onClick={handlerReload}>
          <ReplayIcon />
        </Button>
      </TableCell>
      <TableCell>{editedItem.title}</TableCell>
      <TableCell>
        <TextField
          multiline
          value={editedItem.value}
          label="ticket"
          onChange={event => {
            setIsEdited(true)
            setEditedItem({ ...editedItem, value: event.target.value })
          }}
        />
      </TableCell>
    </TableRow>
  )
}
