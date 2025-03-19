// import React, { useState, useRef, useCallback } from "react";
// import CommonAGGrid from "../../common/ClientSideGrid";
// import { AgGridReact } from "ag-grid-react";
// import "ag-grid-community/styles/ag-grid.css";
// import "ag-grid-community/styles/ag-theme-alpine.css";
// import { Container, SearchInput } from "./styles";
// import { Delete, EditNotifications } from "@mui/icons-material";
// import { IconButton } from "@mui/material";


  
// const CompanyTable: React.FC = () => {
//   const [searchText, setSearchText] = useState("");
//   const gridRef = useRef<AgGridReact>(null);

// //   const dummyData = [
// //     {
// //       companyId: 9,
// //       companyName: "Test Company",
// //       displayName: "Test Co",
// //       companyTypeLid: 1,
// //       companyTagLid: 2,
// //       currencyId: 3,
// //       industrySegmentId: 4,
// //       groupCompanyLid: 5,
// //       noOfEmployees: 100,
// //       website: "https://www.testcompany.com",
// //       dateOfIncorporation: "2023-01-01",
// //       panCardNumber: "ABCDE1234F",
// //       registrationNo: "REG123456789",
// //       existingBrokerLid: 6,
// //       paidUpCapital: 5000000,
// //       tanNumber: "TAN1234567",
// //     },
// //     {
// //       companyId: 10,
// //       companyName: "Test Company 2",
// //       displayName: "Test Co 2",
// //       companyTypeLid: 2,
// //       companyTagLid: 3,
// //       currencyId: 1,
// //       industrySegmentId: 5,
// //       groupCompanyLid: 2,
// //       noOfEmployees: 250,
// //       website: "https://www.testcompany2.com",
// //       dateOfIncorporation: "2018-06-15",
// //       panCardNumber: "FGHIJ5678K",
// //       registrationNo: "REG987654321",
// //       existingBrokerLid: 4,
// //       paidUpCapital: 10000000,
// //       tanNumber: "TAN7654321",
// //     },
// //     {
// //       companyId: 11,
// //       companyName: "test Company 3",
// //       displayName: "Test Co 3",
// //       companyTypeLid: 3,
// //       companyTagLid: 4,
// //       currencyId: 2,
// //       industrySegmentId: 6,
// //       groupCompanyLid: 3,
// //       noOfEmployees: 150,
// //       website: "https://www.testcompany3.com",
// //       dateOfIncorporation: "2020-09-10",
// //       panCardNumber: "KLMNO9012L",
// //       registrationNo: "REG456789123",
// //       existingBrokerLid: 5,
// //       paidUpCapital: 7500000,
// //       tanNumber: "TAN9876543",
// //     },
// //     {
// //       companyId: 12,
// //       companyName: "test Company 4",
// //       displayName: "Test Co 4",
// //       companyTypeLid: 1,
// //       companyTagLid: 5,
// //       currencyId: 4,
// //       industrySegmentId: 7,
// //       groupCompanyLid: 1,
// //       noOfEmployees: 500,
// //       website: "https://www.testcompany4.com",
// //       dateOfIncorporation: "2015-03-25",
// //       panCardNumber: "QRSTU1234M",
// //       registrationNo: "REG321654987",
// //       existingBrokerLid: 3,
// //       paidUpCapital: 20000000,
// //       tanNumber: "TAN6543210",
// //     },
// //   ];


// const dummyData = [];
// const baseYear = 2000;

// for (let index = 0; index < 20; index++) {
//   dummyData.push({
//     companyId: index + 1,
//     companyName: `Company ${index + 1}`,
//     displayName: `Co ${index + 1}`,
//     companyTypeLid: (index % 3) + 1,
//     companyTagLid: (index % 5) + 1,
//     currencyId: (index % 4) + 1,
//     industrySegmentId: (index % 7) + 1,
//     groupCompanyLid: (index % 6) + 1,
//     noOfEmployees: Math.floor(Math.random() * 500) + 50,
//     website: `https://www.company${index + 1}.com`,
//     dateOfIncorporation: `20${(baseYear + (index % 15))}-${String((index % 12) + 1).padStart(2, "0")}-${String((index % 9) + 1).padStart(2, "0")}`,
//     panCardNumber: `PAN${index + 1000}`,
//     registrationNo: `REG${index + 100000}`,
//     existingBrokerLid: (index % 5) + 1,
//     paidUpCapital: Math.floor(Math.random() * 50000000) + 1000000,
//     tanNumber: `TAN${index + 2000}`,
//   });
// }

//   const columnDefs = [
//     { headerName: "Company ID", field: "companyId", filter:true },
//     { headerName: "Company Name", field: "companyName", filter: "agTextColumnFilter" },
//     { headerName: "Display Name", field: "displayName", filter: "agTextColumnFilter" },
//     {
//       headerName: "Website",
//       field: "website",
//       filter: "agTextColumnFilter",
//       cellRenderer: (params: any) => {
//         return (
//           <a href={params.value} target="_blank" rel="noopener noreferrer" title={params.value}>
//             {params.value}
//           </a>
//         );
//       },
//     },
//     { headerName: "Incorporation Date", field: "dateOfIncorporation", filter: "agDateColumnFilter" },
//     { headerName: "PAN", field: "panCardNumber", filter: "agTextColumnFilter" },
//     { headerName: "Registration No", field: "registrationNo", filter: "agTextColumnFilter" },
//     { headerName: "Paid-up Capital", field: "paidUpCapital", filter: "agNumberColumnFilter" },
//     { headerName: "TAN", field: "tanNumber", filter: "agTextColumnFilter" },
//     {
//       headerName: "Actions",
//       field: "actions",
//       cellRenderer: (params: any) => {
//         return (
//             <div style={{ display: "flex", gap: "8px" }}>
//               <IconButton size="small" title="Edit">
//                 <EditNotifications fontSize="small" />
//               </IconButton>
//               <IconButton size="small" title="Delete">
//                 <Delete fontSize="small" />
//               </IconButton>
//             </div>
//         );
//       },
//       width: 120,
//     },
//   ];
//   // Function to handle search filtering
//   const onSearchChange = useCallback(
//     (e: React.ChangeEvent<HTMLInputElement>) => {
//       const value = e.target.value;
//       setSearchText(value);
//       if (gridRef.current?.api) {
//         gridRef.current.api.setGridOption("quickFilterText", value);
//       }
//     },
//     []
//   );

//   return (
//     <Container>
//       <SearchInput
//         type="text"
//         placeholder="Search..."
//         value={searchText}
//         onChange={onSearchChange}
//       />
//       <CommonAGGrid
//         // loading={true}
//         rowData={dummyData}
//         columnDefs={columnDefs}
//         paginationPageSize={10}
//         paginationPageSizeSelector={[10, 20, 50]}
//         // height={500}
//         gridRef={gridRef} 
//       />
//     </Container>
//   );
// };

// export default CompanyTable;






import React, { useState, useRef, useCallback } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import CommonAGGrid from "../../common/ClientSideGrid";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import { Container, SearchInput, RowHoverStyle } from "./styles";
import { Delete, Edit } from "@mui/icons-material";
import { IconButton } from "@mui/material";

const CompanyTable: React.FC = () => {
  const [searchText, setSearchText] = useState("");
  const gridRef = useRef<AgGridReact>(null);
  const navigate = useNavigate(); // Initialize useNavigate

  // Dummy data
  const dummyData = [];
  for (let index = 0; index < 20; index++) {
    dummyData.push({
      companyId: index + 1,
      companyName: `Company ${index + 1}`,
      displayName: `Co ${index + 1}`,
      website: `https://www.company${index + 1}.com`,
      dateOfIncorporation: `20${2000 + (index % 15)}-${String((index % 12) + 1).padStart(2, "0")}-${String((index % 9) + 1).padStart(2, "0")}`,
      panCardNumber: `PAN${index + 1000}`,
      registrationNo: `REG${index + 100000}`,
      paidUpCapital: Math.floor(Math.random() * 50000000) + 1000000,
      tanNumber: `TAN${index + 2000}`,
    });
  }

  // Redirect on row click
  const onRowClicked = (event: any) => {
    navigate(`/company/${event.data.companyId}`, { state: { company: event.data } });
  };

  const columnDefs = [
    { headerName: "Company ID", field: "companyId", filter: true },
    { headerName: "Company Name", field: "companyName", filter: "agTextColumnFilter" },
    { headerName: "Display Name", field: "displayName", filter: "agTextColumnFilter" },
    {
      headerName: "Website",
      field: "website",
      cellRenderer: (params: any) => (
        <a href={params.value} target="_blank" rel="noopener noreferrer">{params.value}</a>
      ),
    },
    { headerName: "Incorporation Date", field: "dateOfIncorporation", filter: "agDateColumnFilter", filterParams: "dateFilterParams"},
    { headerName: "PAN", field: "panCardNumber", filter: "agTextColumnFilter" },
    { headerName: "Registration No", field: "registrationNo", filter: "agTextColumnFilter" },
    { headerName: "Paid-up Capital", field: "paidUpCapital", filter: "agNumberColumnFilter" },
    { headerName: "TAN", field: "tanNumber", filter: "agTextColumnFilter" },
    {
      headerName: "",
      field: "actions",
      cellRenderer: () => (
        <div className="actions-cell">
          <IconButton size="small" title="Edit"><Edit fontSize="small" /></IconButton>
          <IconButton size="small" title="Delete"><Delete fontSize="small" /></IconButton>
        </div>
      ),
      width: 100,
      pinned: "right",
      suppressMovable: true,
      resizable: false,
      sortable: false,
    },
  ];

  // Search filter
  const onSearchChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
    if (gridRef.current?.api) {
      gridRef.current.api.setGridOption("quickFilterText", e.target.value);
    }
  }, []);

  return (
    <Container>
      <RowHoverStyle />
      <SearchInput type="text" placeholder="Search..." value={searchText} onChange={onSearchChange} />
      <CommonAGGrid
        rowData={dummyData}
        columnDefs={columnDefs}
        paginationPageSize={10}
        paginationPageSizeSelector={[10, 20, 50]}
        gridRef={gridRef}
        onRowClicked={onRowClicked} // Attach row click event
      />
    </Container>
  );
};

export default CompanyTable;
