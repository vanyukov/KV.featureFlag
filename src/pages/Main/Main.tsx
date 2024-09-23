import { MainLayout } from "layout"
import { Paper, Table, TableCell, TableContainer, TableHead, TableRow } from "ui"
import { UserId } from "feature/User"
import { FlagTableBody } from "./FlagTableBody"

export function Main() {
  return (
    <MainLayout>
      <UserId />
      <TableContainer component={Paper}>
        <Table stickyHeader size="small">
          <TableHead>
            <TableRow>
              <TableCell width="20%">Edit</TableCell>
              <TableCell>Title</TableCell>
              <TableCell>Value</TableCell>
            </TableRow>
          </TableHead>
          <FlagTableBody />
        </Table>
      </TableContainer>
    </MainLayout>
  )
}
