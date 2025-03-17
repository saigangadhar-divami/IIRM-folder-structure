// src/data/formFields.ts
export interface FieldOption {
  label: string;
  value: string;
}

export type FieldType =
  | "text"
  | "email"
  | "number"
  | "select"
  | "checkbox"
  | "radio"
  | "date"
  | "password";

export interface FormField {
  name: string;
  label: string;
  type: FieldType;
  required?: boolean;
  options?: FieldOption[];
}

export const formFields: FormField[] = [
  {
    name: "title",
    label: "Title",
    type: "select",
    required: true,
    options: [
      { label: "Mr", value: "Mr" },
      { label: "Mrs", value: "Mrs" },
      { label: "Ms", value: "Ms" },
    ],
  },
  {
    name: "loginName",
    label: "Login Name",
    type: "text",
    required: true,
  },
  {
    name: "password",
    label: "Password",
    type: "password",
    required: true,
  },
  {
    name: "firstName",
    label: "First Name",
    type: "text",
    required: true,
  },
  {
    name: "lastName",
    label: "Last Name",
    type: "text",
    required: true,
  },
  {
    name: "email",
    label: "Email ID",
    type: "email",
    required: true,
  },
  {
    name: "mobile",
    label: "Mobile",
    type: "text",
    required: true,
  },
  {
    name: "role",
    label: "Role",
    type: "select",
    required: true,
    options: [
      { label: "Select", value: "select" },
      { label: "Admin", value: "admin" },
      { label: "User", value: "user" },
    ],
  },
  {
    name: "location",
    label: "Location",
    type: "select",
    required: true,
    options: [
      { label: "Select", value: "select" },
      { label: "New York", value: "newYork" },
      { label: "London", value: "london" },
    ],
  },
  {
    name: "department",
    label: "Department",
    type: "select",
    required: true,
    options: [
      { label: "Select", value: "select" },
      { label: "IT", value: "it" },
      { label: "HR", value: "hr" },
    ],
  },
  {
    name: "designation",
    label: "Designation",
    type: "select",
    required: true,
    options: [
      { label: "Select", value: "select" },
      { label: "Manager", value: "manager" },
      { label: "Engineer", value: "engineer" },
    ],
  },
  {
    name: "reporting",
    label: "Reporting",
    type: "select",
    required: true,
    options: [
      { label: "Select", value: "select" },
      { label: "Yes", value: "yes" },
      { label: "No", value: "no" },
    ],
  },
  {
    name: "iirmEmpId",
    label: "IIRM Emp-ID",
    type: "text",
    required: true,
  },
  {
    name: "workRole",
    label: "Work Role",
    type: "select",
    required: true,
    options: [
      { label: "Select", value: "select" },
      { label: "Developer", value: "developer" },
      { label: "Tester", value: "tester" },
    ],
  },
];

export const formFieldre: FormField[] = [
  { name: "firstName", label: "First Name", type: "text", required: true },
  { name: "email", label: "Email", type: "email", required: true },
  { name: "age", label: "Age", type: "number" },
  {
    name: "gender",
    label: "Gender",
    type: "select",
    required: true,
    options: [
      { label: "Male", value: "male" },
      { label: "Female", value: "female" },
    ],
  },
];
