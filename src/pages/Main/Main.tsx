import { MainLayout } from "layout"
import { Paper, Table, TableCell, TableContainer, TableHead, TableRow } from "ui"
import { FlagTableBody } from "./FlagTableBody"

export function Main() {
  return (
    <MainLayout>
      <div className="container">
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
      </div>
    </MainLayout>
  )
}
