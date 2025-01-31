import * as MuiButton from "@mui/material/Button"
import React from "react"

export type ButtonProps = MuiButton.ButtonProps

export const Button = React.forwardRef(({ children, ...props }: ButtonProps, ref) => (
  //@ts-ignore
  <MuiButton.default variant="contained" ref={ref} {...props}>
    {children}
  </MuiButton.default>
))
