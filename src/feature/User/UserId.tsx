import { useEffect, useState } from "react"
import ContentCopyIcon from "@mui/icons-material/ContentCopy"
import { Button, TextField } from "ui"
import { getCookieValue } from "common/cookie"
import { copyToClipboard } from "common/copyToClipboard"

export const UserId = () => {
  const [userId, setUserId] = useState("")
  useEffect(() => {
    getCookieValue("userId").then(res => {
      if (typeof res == "string") {
        setUserId(res)
      }
    })
  }, [])
  if (!userId) {
    return null
  }
  return (
    <div className="flex pt12 pb12">
      <TextField id="outlined-basic" label="User Id:" variant="outlined" value={userId} />
      <Button
        color="primary"
        size="small"
        variant="text"
        onClick={() => {
          copyToClipboard(userId)
        }}
      >
        <ContentCopyIcon />
      </Button>
    </div>
  )
}
