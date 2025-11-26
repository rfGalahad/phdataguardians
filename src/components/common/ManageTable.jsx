import { useMemo, useState } from "react";
import {
  Table, TableBody, TableCell, TableContainer, TableHead, TableRow,
  Paper, Checkbox, TablePagination, TableSortLabel, IconButton
} from "@mui/material";



export const ManageTable = ({
  columns = [],
  rows = [],
  onSelectionChange,
  actions,
  loading = false,
}) => {

  const [selected, setSelected] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [sortConfig, setSortConfig] = useState({
    field: null,
    direction: "asc",
  });
  

  const start = page * rowsPerPage;
  const end = start + rowsPerPage;

  const handleSelect = (id) => {
    const newSelected = selected.includes(id)
      ? selected.filter(x => x !== id)
      : [...selected, id];

    setSelected(newSelected);

    // Notify parent
    onSelectionChange?.(newSelected);
  };


  const handleSelectAll = (e) => {
    const newSelected = e.target.checked ? rows.map(r => r.id) : [];
    setSelected(newSelected);
    onSelectionChange?.(newSelected);
  };

  const handleSort = (field) => {
    setSortConfig((prev) => {
      if (prev.field === field) {
        return {
          field,
          direction: prev.direction === "asc" ? "desc" : "asc",
        };
      }
      return { field, direction: "asc" };
    });
  };

  const sortedRows = useMemo(() => {
    if (!sortConfig.field) return rows;

    return [...rows].sort((a, b) => {
      const aValue = a[sortConfig.field];
      const bValue = b[sortConfig.field];

      if (aValue < bValue) return sortConfig.direction === "asc" ? -1 : 1;
      if (aValue > bValue) return sortConfig.direction === "asc" ? 1 : -1;
      return 0;
    });
  }, [rows, sortConfig]);


  return (
    <Paper>
      <TableContainer sx={{ overflowX: "auto" }}>
        <Table>
          {/* TABLE HEADER */}
          <TableHead sx={{ background: "#053261" }}>
            <TableRow>

              {/* HEADER CHECKBOX */}
              <TableCell padding="checkbox">
                <Checkbox
                  indeterminate={selected.length > 0 && selected.length < rows.length}
                  checked={rows.length > 0 && selected.length === rows.length}
                  onChange={handleSelectAll}
                  sx={{ color: "white" }}
                />
              </TableCell>

              {/* HEADER CELL */}
              {columns.map(col => (
                <TableCell
                  key={col.field}
                  sortDirection={sortConfig.field === col.field ? sortConfig.direction : false}
                  sx={{ color: "white", textTransform: 'uppercase' }}
                >
                  {col.sortable ? (
                    <TableSortLabel
                      active={sortConfig.field === col.field}
                      direction={
                        sortConfig.field === col.field ? sortConfig.direction : "asc"
                      }
                      onClick={() => handleSort(col.field)}
                      sx={{
                        color: "white",
                        "&:hover": {
                          color: "white",
                        },
                        "&.Mui-active": { color: "white" },
                        "& .MuiTableSortLabel-icon": { color: "white !important" },
                      }}
                    >
                      {col.headerName}
                    </TableSortLabel>
                  ) : (
                    col.headerName
                  )}
                </TableCell>
              ))}

              {/* HEADER ACTIONS */}
              {actions && (
                <TableCell sx={{ color: "white", textAlign: "center", textTransform: 'uppercase' }}>
                  Actions
                </TableCell>
              )}
            </TableRow>
          </TableHead>

          {/* TABLE BODY */}
          <TableBody>
            {loading ? (
              <TableRow>
                <TableCell colSpan={columns.length + 2} align="center">Loading...</TableCell>
              </TableRow>
            ) : sortedRows.length > 0 ? (
              <>
                {sortedRows.slice(start, end).map(row => (
                  <TableRow key={row.id}>
                    {/* CHECKBOX */}
                    <TableCell padding="checkbox">  
                      <Checkbox
                        checked={selected.includes(row.id)}
                        onChange={() => handleSelect(row.id)}
                      />
                    </TableCell>

                    {/* BODY CELL */}
                    {columns.map(col => (
                      <TableCell key={col.field}>
                        {col.render ? col.render(row[col.field], row) : row[col.field]}
                      </TableCell>
                    ))}

                    {/* ACTIONS */}
                    {actions && (
                      <TableCell sx={{ width: '1%', whiteSpace: 'nowrap' }}>
                        {actions(row)}
                      </TableCell>
                    )}
                  </TableRow>
                ))}
              </>
            ) : (
              <TableRow>
                <TableCell colSpan={columns.length + 2} align="center">No data found</TableCell>
              </TableRow>
            )}
            
          </TableBody>
        </Table>

        <TablePagination
          component="div"
          count={rows.length}
          page={page}
          onPageChange={(e, newPage) => setPage(newPage)}
          rowsPerPage={rowsPerPage}
          onRowsPerPageChange={(e) => {
            setRowsPerPage(parseInt(e.target.value, 10));
            setPage(0);
          }}
        />
      </TableContainer>
    </Paper>
  );
}
