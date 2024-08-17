import { useEffect, useState } from "react"
import { Button, Link, TableCell, TableRow, TextField } from "ui"
import AddIcon from "@mui/icons-material/Add"
import RemoveIcon from "@mui/icons-material/Remove"
import SaveIcon from "@mui/icons-material/Save"
import ReplayIcon from "@mui/icons-material/Replay"
import { featuresEditItem, featuresRemoveItem } from "feature/Features"
import { useAppDispatch } from "store"
import { TFeature } from "feature/Features"

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
          <SaveIcon />
        </Button>
        <Button color="secondary" size="small" variant="text" onClick={handlerReload}>
          <ReplayIcon />
        </Button>
      </TableCell>
      <TableCell>
        {editedItem.title}{" "}
        {editedItem.href && (
          <Link href={"/" + editedItem.href}>
            <h3>{editedItem.href} page</h3>
          </Link>
        )}
      </TableCell>
      <TableCell>
        <TextField
          multiline
          value={editedItem.value}
          label="value"
          onChange={event => {
            setIsEdited(true)
            setEditedItem({ ...editedItem, value: event.target.value })
          }}
        />
      </TableCell>
    </TableRow>
  )
}
