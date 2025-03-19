// http://jsonblob.com/1351559948064186368

import { FormField} from "../EmployeeForm/form.types";
import { companyTypes } from "./models";


// export const data1 = [
//     {
//       "name": "companyData",
//       "label": "Company Data",
//       "type": "group",
//       "fields": [
//         {
//           "name": "companyId",
//           "label": "Company ID",
//           "type": "text",
//           "required": true,
//           "validation": {
//             "required": "Company ID is required"
//           }
//         },
//         {
//           "name": "companyName",
//           "label": "Company Name",
//           "type": "text",
//           "required": true,
//           "validation": {
//             "required": "Company Name is required"
//           }
//         },
//         {
//           "name": "displayName",
//           "label": "Display Name",
//           "type": "text",
//           "required": true,
//           "validation": {
//             "required": "Display Name is required"
//           }
//         },
//         {
//           "name": "companyTypeLid",
//           "label": "Company Type",
//           "type": "select",
//           "required": true,
//           "options": "COMPANY_TYPE_OPTIONS",
//           "validation": {
//             "required": "Company Type is required"
//           }
//         },
//         {
//           "name": "companyTagLid",
//           "label": "Company Tag",
//           "type": "select",
//           "required": true,
//           "options": "COMPANY_TAG_OPTIONS",
//           "validation": {
//             "required": "Company Tag is required"
//           }
//         },
//         {
//           "name": "currencyId",
//           "label": "Currency",
//           "type": "select",
//           "required": true,
//           "options": "CURRENCY_OPTIONS",
//           "validation": {
//             "required": "Currency is required"
//           }
//         },
//         {
//           "name": "industrySegmentId",
//           "label": "Industry Segment",
//           "type": "select",
//           "required": true,
//           "options": "INDUSTRY_SEGMENT_OPTIONS",
//           "validation": {
//             "required": "Industry Segment is required"
//           }
//         },
//         {
//           "name": "groupCompanyLid",
//           "label": "Group Company",
//           "type": "select",
//           "required": true,
//           "options": "GROUP_COMPANY_OPTIONS",
//           "validation": {
//             "required": "Group Company is required"
//           }
//         },
//         {
//           "name": "noOfEmployees",
//           "label": "Number of Employees",
//           "type": "number",
//           "required": true,
//           "validation": {
//             "required": "Number of Employees is required",
//             "min": 1
//           }
//         },
//         {
//           "name": "website",
//           "label": "Website",
//           "type": "url",
//           "required": true,
//           "validation": {
//             "required": "Website is required",
//             "pattern": "^https?:\\/\\/.+"
//           }
//         }
//       ]
//     },
//     {
//       "name": "addressDetails",
//       "label": "Address Details",
//       "type": "group",
//       "fields": [
//         {
//           "name": "addressType",
//           "label": "Address Type",
//           "type": "select",
//           "required": true,
//           "options": "ADDRESS_TYPE_OPTIONS",
//           "validation": {
//             "required": "Address Type is required"
//           }
//         },
//         {
//           "name": "address1",
//           "label": "Address Line 1",
//           "type": "text",
//           "required": true,
//           "validation": {
//             "required": "Address Line 1 is required"
//           }
//         },
//         {
//           "name": "area",
//           "label": "Area",
//           "type": "text",
//           "required": false
//         },
//         {
//           "name": "country",
//           "label": "Country",
//           "type": "select",
//           "required": true,
//           "options": "COUNTRY_OPTIONS",
//           "validation": {
//             "required": "Country is required"
//           }
//         },
//         {
//           "name": "state",
//           "label": "State",
//           "type": "select",
//           "required": true,
//           "options": "STATE_OPTIONS",
//           "validation": {
//             "required": "State is required"
//           }
//         },
//         {
//           "name": "city",
//           "label": "City",
//           "type": "select",
//           "required": true,
//           "options": "CITY_OPTIONS",
//           "validation": {
//             "required": "City is required"
//           }
//         },
//         {
//           "name": "pincode",
//           "label": "Pincode",
//           "type": "text",
//           "required": false,
//           "validation": {
//             "pattern": "^[0-9]{6}$"
//           }
//         },
//         {
//           "name": "email",
//           "label": "Email",
//           "type": "email",
//           "required": false,
//           "validation": {
//             "pattern": "^\\S+@\\S+\\.\\S+$"
//           }
//         },
//         {
//           "name": "phone1",
//           "label": "Phone 1",
//           "type": "text",
//           "required": true,
//           "validation": {
//             "required": "Phone 1 is required",
//             "pattern": "^[0-9]+$"
//           }
//         },
//         {
//           "name": "phone2",
//           "label": "Phone 2",
//           "type": "text",
//           "required": false,
//           "validation": {
//             "pattern": "^[0-9]+$"
//           }
//         },
//         {
//           "name": "mobileOrTollFree",
//           "label": "Mobile / Toll-Free",
//           "type": "text",
//           "required": false,
//           "validation": {
//             "pattern": "^[0-9]+$"
//           }
//         },
//         {
//           "name": "fax",
//           "label": "Fax",
//           "type": "text",
//           "required": false
//         }
//       ]
//     }
//   ]
 export const COMPANY_TYPE_OPTIONS: companyTypes[] = [
    { value: 'private', label: 'Private' },
    { value: 'public', label: 'Public' },
    { value: 'non_profit', label: 'Non-Profit' },
    { value: 'government', label: 'Government' },
    { value: 'partnership', label: 'Partnership' },
    { value: 'sole_proprietorship', label: 'Sole Proprietorship' },
  ];

  export const COMPANY_TAG_OPTIONS:companyTypes[]  = [
    { value: 'tech', label: 'Tech' },
    { value: 'finance', label: 'Finance' },
    { value: 'healthcare', label: 'Healthcare' },
    { value: 'education', label: 'Education' },
  ];
  
  export const CURRENCY_OPTIONS:companyTypes[]  = [
    { value: 'usd', label: 'USD' },
    { value: 'eur', label: 'EUR' },
    { value: 'inr', label: 'INR' },
    { value: 'gbp', label: 'GBP' },
  ];
  
  export const INDUSTRY_SEGMENT_OPTIONS:companyTypes[]  = [
    { value: 'software', label: 'Software' },
    { value: 'hardware', label: 'Hardware' },
    { value: 'services', label: 'Services' },
    { value: 'manufacturing', label: 'Manufacturing' },
  ];
  
  export const GROUP_COMPANY_OPTIONS:companyTypes[]  = [
    { value: 'group_a', label: 'Group A' },
    { value: 'group_b', label: 'Group B' },
    { value: 'group_c', label: 'Group C' },
  ];
  
  export const ADDRESS_TYPE_OPTIONS:companyTypes[]  = [
    { value: 'home', label: 'Home' },
    { value: 'office', label: 'Office' },
  ];
  
  export const COUNTRY_OPTIONS:companyTypes[]  = [
    { value: 'us', label: 'United States' },
    { value: 'ca', label: 'Canada' },
    { value: 'in', label: 'India' },
    { value: 'uk', label: 'United Kingdom' },
  ];
  
  export const STATE_OPTIONS:companyTypes[]  = [
    { value: 'ca', label: 'California' },
    { value: 'ny', label: 'New York' },
    { value: 'tx', label: 'Texas' },
  ];
  
  export const CITY_OPTIONS:companyTypes[]  = [
    { value: 'sf', label: 'San Francisco' },
    { value: 'nyc', label: 'New York City' },
    { value: 'la', label: 'Los Angeles' },
  ];

export const data1: FormField[] = [
        {
          name: "companyId",
          label: "Company ID",
          type: "text",
          required: true,
          validation: { required: "Company ID is required" },
        },
        {
          name: "companyName",
          label: "Company Name",
          type: "text",
          required: true,
          validation: { required: "Company Name is required" },
        },
        {
          name: "displayName",
          label: "Display Name",
          type: "text",
          required: true,
          validation: { required: "Display Name is required" },
        },
        {
          name: "companyTypeLid",
          label: "Company Type",
          type: "select",
          required: true,
          options: COMPANY_TYPE_OPTIONS,
          validation: { required: "Company Type is required" },
        },
        {
          name: "companyTagLid",
          label: "Company Tag",
          type: "select",
          required: true,
          options: COMPANY_TAG_OPTIONS,
          validation: { required: "Company Tag is required" },
        },
        {
          name: "currencyId",
          label: "Currency",
          type: "select",
          required: true,
          options: CURRENCY_OPTIONS,
          validation: { required: "Currency is required" },
        },
        {
          name: "industrySegmentId",
          label: "Industry Segment",
          type: "select",
          required: true,
          options: INDUSTRY_SEGMENT_OPTIONS,
          validation: { required: "Industry Segment is required" },
        },
        {
          name: "groupCompanyLid",
          label: "Group Company",
          type: "select",
          required: true,
          options: GROUP_COMPANY_OPTIONS,
          validation: { required: "Group Company is required" },
        },
        {
          name: "noOfEmployees",
          label: "Number of Employees",
          type: "number",
          required: true,
          validation: { required: "Number of Employees is required" },
        },
        {
          name: "remarks",
          label: "Remarks",
          type: "richtext",
          required: true,
          validation: { required: "Remarks is required" },
        },
        // {
        //   name: "website",
        //   label: "Website",
        //   type: "url",
        //   required: true,
        //   validation: { required: "Website is required", pattern: /^https?:\/\/.+/ },
        // },
  ];



  