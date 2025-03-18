import React from "react";
import CommonAGGrid from "../../common/ClientSideGrid";

const CompanyTable:React.FC = () => {
  const dummyData = [
    {
      companyId: 9,
      companyName: "Test Company",
      displayName: "Test Co",
      companyTypeLid: 1,
      companyTagLid: 2,
      currencyId: 3,
      industrySegmentId: 4,
      groupCompanyLid: 5,
      noOfEmployees: 100,
      website: "https://www.testcompany.com",
      dateOfIncorporation: "2023-01-01",
      panCardNumber: "ABCDE1234F",
      registrationNo: "REG123456789",
      existingBrokerLid: 6,
      paidUpCapital: 5000000,
      tanNumber: "TAN1234567",
    },
    {
      companyId: 10,
      companyName: "Global Tech",
      displayName: "GlobalTech",
      companyTypeLid: 2,
      companyTagLid: 3,
      currencyId: 1,
      industrySegmentId: 5,
      groupCompanyLid: 2,
      noOfEmployees: 250,
      website: "https://www.globaltech.com",
      dateOfIncorporation: "2018-06-15",
      panCardNumber: "FGHIJ5678K",
      registrationNo: "REG987654321",
      existingBrokerLid: 4,
      paidUpCapital: 10000000,
      tanNumber: "TAN7654321",
    },
    {
      companyId: 11,
      companyName: "Innovate Solutions",
      displayName: "InnovateSol",
      companyTypeLid: 3,
      companyTagLid: 4,
      currencyId: 2,
      industrySegmentId: 6,
      groupCompanyLid: 3,
      noOfEmployees: 150,
      website: "https://www.innovatesolutions.com",
      dateOfIncorporation: "2020-09-10",
      panCardNumber: "LMNOP6789L",
      registrationNo: "REG456789123",
      existingBrokerLid: 5,
      paidUpCapital: 7500000,
      tanNumber: "TAN9876543",
    },
    {
      companyId: 12,
      companyName: "NextGen Enterprises",
      displayName: "NextGen",
      companyTypeLid: 1,
      companyTagLid: 5,
      currencyId: 4,
      industrySegmentId: 7,
      groupCompanyLid: 1,
      noOfEmployees: 500,
      website: "https://www.nextgen.com",
      dateOfIncorporation: "2015-03-25",
      panCardNumber: "QRSTU1234M",
      registrationNo: "REG321654987",
      existingBrokerLid: 3,
      paidUpCapital: 20000000,
      tanNumber: "TAN6543210",
    }
  ];

  const columnDefs = [
    { headerName: "Company ID", field: "companyId" },
    { headerName: "Company Name", field: "companyName" },
    { headerName: "Display Name", field: "displayName" },
    { headerName: "Employees", field: "noOfEmployees" },
    { headerName: "Website", field: "website" },
    { headerName: "Incorporation Date", field: "dateOfIncorporation" },
    { headerName: "PAN", field: "panCardNumber" },
    { headerName: "Registration No", field: "registrationNo" },
    { headerName: "Paid-up Capital", field: "paidUpCapital" },
    { headerName: "TAN", field: "tanNumber" },
  ];

  return (
    <CommonAGGrid
      rowData={dummyData}
      columnDefs={columnDefs}
      paginationPageSize={10}
      paginationPageSizeSelector={[10, 20, 50]}
      height={500}
    />
  );
};

export default CompanyTable;
