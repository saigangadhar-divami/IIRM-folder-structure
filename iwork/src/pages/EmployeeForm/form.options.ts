import { FieldOption } from "./form.types";

// Define options for select dropdown fields
export const DEPARTMENT_OPTIONS: FieldOption[] = [
  { label: "IT", value: 1 },
  { label: "HR", value: 2 },
  { label: "Finance", value: 3 },
  { label: "Sales", value: 4 },
];
export const SALUTATION_OPTIONS: FieldOption[] = [
  { label: "Mr.", value: "Mr." },
  { label: "Mrs.", value: "Mrs." },
  { label: "Ms.", value: "Ms." },
  { label: "Dr.", value: "Dr." },
];

export const ROLE_OPTIONS: FieldOption[] = [
  { label: "Admin", value: 1 },
  { label: "User", value: 2 },
  { label: "Manager", value: 3 },
];

export const LOCATION_OPTIONS: FieldOption[] = [
  { label: "New York", value: 1 },
  { label: "London", value: 2 },
  { label: "Berlin", value: 3 },
];

export const DESIGNATION_OPTIONS: FieldOption[] = [
  { label: "Software Engineer", value: 1 },
  { label: "Senior Software Engineer", value: 2 },
  { label: "Team Lead", value: 3 },
  { label: "Project Manager", value: 4 },
  { label: "Technical Architect", value: 5 },
  { label: "Business Analyst", value: 6 },
  { label: "QA Engineer", value: 7 },
  { label: "DevOps Engineer", value: 8 },
  { label: "UI/UX Designer", value: 9 },
  { label: "Product Manager", value: 10 },
];
