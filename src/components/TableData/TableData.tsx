import SpendsData from "./../../App";
import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { IconButton, Tooltip } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
interface Props {
  children: (typeof SpendsData)[];
  onDelete: (id: string) => void;
}

interface TableData {
  description: string;
  title: string;
  amount: number;
  type: "Entertainment" | "Groceries" | "Utilities";
  id: number;
  delete: JSX.Element;
}

const numberFormat = (value: number | bigint) =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(value);

interface Column {
  id: "title" | "description" | "amount" | "type" | "id" | "Delete";
  label: string;
  minWidth?: number;
  align?: "right";
  format?: (value: number) => string;
}

function total(children: readonly SpendsData[]) {
  return children.map(({ amount }) => amount).reduce((sum, i) => sum + i, 0);
}

const columns: readonly Column[] = [
  { id: "title", label: "Title", minWidth: 170 },
  { id: "description", label: "User Description", minWidth: 100 },
  {
    id: "type",
    label: "Category",
    minWidth: 170,
    align: "right",
    format: (value: number) => value.toLocaleString("en-US"),
  },
  {
    id: "amount",
    label: "Amount",
    minWidth: 170,
    align: "right",
    format: (value: number) => numberFormat(value),
  },
  {
    id: "Delete",
    label: "Delete this item",
    minWidth: 170,
    align: "right",
  },
];

interface Data {
  name: string;
  code: string;
  population: number;
  size: number;
  density: number;
}

function createData(
  name: string,
  code: string,
  population: number,
  size: number
): Data {
  const density = population / size;
  return { name, code, population, size, density };
}

const TableData = ({ children, onDelete }: Props) => {
  let data: TableData[] = [...children];
  data.forEach(
    (el) =>
      (el.delete = (
        <Tooltip title="Delete">
          <IconButton>
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      ))
  );
  const rows = data;
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <>
      {children.length === 0 ? (
        <p>
          <strong>Looks like you don't have any spends</strong>
        </p>
      ) : (
        // <div>{JSON.stringify(children)}</div>
        <Paper sx={{ width: "100%", overflow: "hidden" }}>
          <TableContainer sx={{ maxHeight: 440 }}>
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  {columns.map((column) => (
                    <TableCell
                      key={column.id}
                      align={column.align}
                      style={{ minWidth: column.minWidth }}
                    >
                      {column.label}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {rows
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row) => {
                    return (
                      <TableRow
                        hover
                        role="checkbox"
                        tabIndex={-1}
                        key={row.title}
                      >
                        {columns.map((column) => {
                          const value = row[column.id];
                          return (
                            <>
                              <TableCell key={column.id} align={column.align}>
                                {column.format && typeof value === "number"
                                  ? column.format(value)
                                  : value}
                                <Tooltip title="Delete">
                                  <IconButton onClick={onDelete(column.id)}>
                                    <DeleteIcon />
                                    Delete this spend
                                  </IconButton>
                                </Tooltip>
                              </TableCell>
                            </>
                          );
                        })}
                      </TableRow>
                    );
                  })}
                <TableRow>
                  <TableCell colSpan={3}>Total</TableCell>
                  <TableCell align="right">
                    {numberFormat(total(children))}
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[10, 25, 100]}
            component="div"
            count={rows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Paper>
      )}
    </>
  );
};

export default TableData;
