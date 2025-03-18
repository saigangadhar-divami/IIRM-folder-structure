// Define field types
export type FieldType =
  | "text"
  | "number"
  | "select"
  | "checkbox"
  | "radio"
  | "textarea"
  | "password"
  | "email"
  | "date";

// Define the structure for form field options (for select dropdowns)
export interface FieldOption {
  label: string;
  value: string | number;
}

// Define validation rules
export interface ValidationRules {
  required?: string | boolean;
  pattern?: RegExp;
  maxLength?: { value: number; message: string };
}

// Define the structure of a form field
export interface FormField {
  name: string;
  label: string;
  type: FieldType;
  required?: boolean;
  options?: FieldOption[]; // Only applicable for select fields
  validation?: ValidationRules;
  hidden?: boolean;
  disabled?: boolean;
}
