export interface FieldType {
    name: string; // Add this line
    type:
      | "text"
      | "number"
      | "email"
      | "password"
      | "date"
      | "textarea"
      | "select"
      | "checkbox"
      | "radio"
      | "richtext";
    label: string;
    required?: boolean;
    validation?: Record<string, any>;
    options?: { label: string; value: string | number }[];
    disabled?: boolean;
    hidden?: boolean;
  }