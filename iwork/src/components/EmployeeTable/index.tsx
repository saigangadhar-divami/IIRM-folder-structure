import { useEffect, useState } from "react";
import { ColDef } from "ag-grid-community";
import ServerSideGrid from "../../common/ServerSideGrid";
import ClientSideGrid from "../../common/ClientSideGrid";
import { Tooltip } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import {
  ActionsCell,
  DeleteIconButton,
  EditIconButton,
  GlobalStyles,
} from "./styles";
import { useNavigate } from "react-router-dom";

export var rowData = [
  {
    id: 1,
    salutation: "Mr.",
    firstName: "John",
    lastName: "Doe",
    emailId: "john.doe1@example.com",
    mobile: "+1234567801",
    loginName: "john.doe1",
    roleId: 1,
    locationId: 1,
    verticalId: 1,
    departmentId: 1,
    designationId: 1,
    reportingUserId: 1,
    iirmEmpId: "EMP1001",
    iworkRoleId: 1,
  },
  {
    id: 2,
    salutation: "Ms.",
    firstName: "Jane",
    lastName: "Smith",
    emailId: "jane.smith2@example.com",
    mobile: "+1234567802",
    loginName: "jane.smith2",
    roleId: 2,
    locationId: 2,
    verticalId: 2,
    departmentId: 2,
    designationId: 2,
    reportingUserId: 2,
    iirmEmpId: "EMP1002",
    iworkRoleId: 2,
  },
  {
    id: 3,
    salutation: "Mr.",
    firstName: "Michael",
    lastName: "Brown",
    emailId: "michael.brown3@example.com",
    mobile: "+1234567803",
    loginName: "michael.brown3",
    roleId: 3,
    locationId: 3,
    verticalId: 3,
    departmentId: 3,
    designationId: 3,
    reportingUserId: 3,
    iirmEmpId: "EMP1003",
    iworkRoleId: 3,
  },
  {
    id: 4,
    salutation: "Ms.",
    firstName: "Emily",
    lastName: "Davis",
    emailId: "emily.davis4@example.com",
    mobile: "+1234567804",
    loginName: "emily.davis4",
    roleId: 4,
    locationId: 4,
    verticalId: 1,
    departmentId: 4,
    designationId: 4,
    reportingUserId: 4,
    iirmEmpId: "EMP1004",
    iworkRoleId: 4,
  },
  {
    id: 5,
    salutation: "Mr.",
    firstName: "David",
    lastName: "Wilson",
    emailId: "david.wilson5@example.com",
    mobile: "+1234567805",
    loginName: "david.wilson5",
    roleId: 5,
    locationId: 5,
    verticalId: 2,
    departmentId: 5,
    designationId: 5,
    reportingUserId: 5,
    iirmEmpId: "EMP1005",
    iworkRoleId: 5,
  },
  {
    id: 6,
    salutation: "Ms.",
    firstName: "Sophia",
    lastName: "Martinez",
    emailId: "sophia.martinez6@example.com",
    mobile: "+1234567806",
    loginName: "sophia.martinez6",
    roleId: 1,
    locationId: 6,
    verticalId: 3,
    departmentId: 1,
    designationId: 6,
    reportingUserId: 6,
    iirmEmpId: "EMP1006",
    iworkRoleId: 6,
  },
  {
    id: 7,
    salutation: "Mr.",
    firstName: "James",
    lastName: "Anderson",
    emailId: "james.anderson7@example.com",
    mobile: "+1234567807",
    loginName: "james.anderson7",
    roleId: 2,
    locationId: 7,
    verticalId: 1,
    departmentId: 2,
    designationId: 1,
    reportingUserId: 7,
    iirmEmpId: "EMP1007",
    iworkRoleId: 7,
  },
  {
    id: 8,
    salutation: "Ms.",
    firstName: "Olivia",
    lastName: "Thomas",
    emailId: "olivia.thomas8@example.com",
    mobile: "+1234567808",
    loginName: "olivia.thomas8",
    roleId: 3,
    locationId: 8,
    verticalId: 2,
    departmentId: 3,
    designationId: 2,
    reportingUserId: 1,
    iirmEmpId: "EMP1008",
    iworkRoleId: 8,
  },
  {
    id: 9,
    salutation: "Mr.",
    firstName: "Daniel",
    lastName: "Jackson",
    emailId: "daniel.jackson9@example.com",
    mobile: "+1234567809",
    loginName: "daniel.jackson9",
    roleId: 4,
    locationId: 9,
    verticalId: 3,
    departmentId: 4,
    designationId: 3,
    reportingUserId: 2,
    iirmEmpId: "EMP1009",
    iworkRoleId: 1,
  },
  {
    id: 10,
    salutation: "Ms.",
    firstName: "Emma",
    lastName: "White",
    emailId: "emma.white10@example.com",
    mobile: "+1234567810",
    loginName: "emma.white10",
    roleId: 5,
    locationId: 10,
    verticalId: 1,
    departmentId: 5,
    designationId: 4,
    reportingUserId: 3,
    iirmEmpId: "EMP1010",
    iworkRoleId: 2,
  },
];

for (let i = 11; i <= 102; i++) {
  rowData.push({
    id: i,
    salutation: i % 2 === 0 ? "Ms." : "Mr.",
    firstName: `First${i}`,
    lastName: `Last${i}`,
    emailId: `user${i}@example.com`,
    mobile: `+12345678${i.toString().padStart(2, "0")}`,
    loginName: `user${i}`,
    roleId: (i % 5) + 1,
    locationId: (i % 10) + 1,
    verticalId: (i % 3) + 1,
    departmentId: (i % 5) + 1,
    designationId: (i % 6) + 1,
    reportingUserId: (i % 7) + 1,
    iirmEmpId: `EMP10${i}`,
    iworkRoleId: (i % 8) + 1,
  });
}

function EmployeeTable() {
  const [rows, setRows] = useState<any[]>([]);

  const [currentPage, setCurrentPage] = useState(1);

  const [loading, setLoading] = useState(false);
  const [hoveredRowId, setHoveredRowId] = useState<number | null>(null);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setRows(rowData.slice((currentPage - 1) * 10, currentPage * 10 + 10));
    }, 2000);
  }, [currentPage]);

  const columns: ColDef[] = [
    { field: "id", headerName: "ID", width: 100 },
    { field: "salutation", headerName: "Salutation", width: 120 },
    {
      field: "name",
      headerName: "Name",
      width: 200,
      cellStyle: { textAlign: "left" },
      filter: "agTextColumnFilter",
      valueGetter: (params: any) =>
        `${params.data.firstName} ${params.data.lastName}`,
      cellRenderer: (params: any) => {
        return (
          <div
            title={`${params.data.firstName} ${params.data.lastName}`}
            style={{
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            {params.data.firstName} {params.data.lastName}
          </div>
        );
      },
    },
    {
      field: "emailId",
      headerName: "Email",
      width: 250,
    },
    { field: "mobile", headerName: "Mobile", width: 150 },
    { field: "loginName", headerName: "Login Name", width: 150 },
    { field: "roleId", headerName: "Role ID", width: 100 },
    { field: "locationId", headerName: "Location ID", width: 120 },
    { field: "verticalId", headerName: "Vertical ID", width: 120 },
    { field: "departmentId", headerName: "Department ID", width: 140 },
    { field: "designationId", headerName: "Designation ID", width: 140 },
    { field: "reportingUserId", headerName: "Reporting User ID", width: 160 },
    { field: "iirmEmpId", headerName: "IIRM Employee ID", width: 150 },
    { field: "iworkRoleId", headerName: "IWork Role ID", width: 140 },
    {
      headerName: "",
      field: "actions",
      width: 80,
      sortable: false,
      cellStyle: (params) => ({
        textAlign: "right",
        borderLeft: "none",
      }),
      headerClass: "no-left-border-header",
      cellRenderer: (params: any) => {
        const isHovered = hoveredRowId === params.node.rowIndex;

        const handleEdit = (e: any) => {
          e.stopPropagation();
        };

        const handleDelete = (e: any) => {
          e.stopPropagation();
        };

        return (
          <ActionsCell
            sx={{
              display: isHovered ? "flex" : "none",
            }}
            className="actions-cell"
          >
            <Tooltip title="Edit">
              <EditIconButton size="small" onClick={handleEdit}>
                <EditIcon fontSize="small" />
              </EditIconButton>
            </Tooltip>
            <Tooltip title="Delete">
              <DeleteIconButton
                size="small"
                onClick={handleDelete}
                sx={{ ml: 1 }}
              >
                <DeleteIcon fontSize="small" />
              </DeleteIconButton>
            </Tooltip>
          </ActionsCell>
        );
      },
    },
  ];
  const [search, setSearch] = useState("");

  const filterRows = () => {
    if (search.length > 0) {
      return rowData.filter((row) => {
        return Object.values(row).some((value) => {
          return String(value).toLowerCase().includes(search.toLowerCase());
        });
      });
    }
    return rowData;
  };

  const PAGE_SIZE = 4;
  const [pageSize, setPageSize] = useState(PAGE_SIZE);
  const navigate = useNavigate();

  return (
    <>
      <div>
        <input
          type="text"
          placeholder="Search"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
        <GlobalStyles />
        <ClientSideGrid
          rowData={filterRows()}
          columnDefs={columns}
          paginationPageSize={10}
          paginationPageSizeSelector={[5, 10, 20]}
          height={603}
          onRowClicked={(event) =>
            navigate(`/employeeDetails/${event.data.id}`, { state: { row: event.data } })
          }
          onCellMouseOver={(event) => setHoveredRowId(event.node.rowIndex)}
          onCellMouseOut={() => setHoveredRowId(null)}
        />

        <ServerSideGrid
          key="messages-grid"
          rows={rowData.slice(
            (currentPage - 1) * pageSize,
            currentPage * pageSize
          )}
          totalRecords={rowData.length}
          currentPage={currentPage}
          loading={loading}
          onPageChange={setCurrentPage}
          columns={columns}
          pageSize={pageSize}
          pageSizeOptions={[4, 5, 10, 20]}
          onPageSizeChange={(pageSize) => [
            setPageSize(pageSize),
            setCurrentPage(1),
          ]}
          defaultColDef={{
            filter: true,
            floatingFilter: true,
            sortable: false,
          }}
        />
      </div>
    </>
  );
}

export default EmployeeTable;
