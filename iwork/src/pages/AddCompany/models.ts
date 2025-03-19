export interface Validation {
    required?: string;
    pattern?: RegExp;
    min?: number;
  }
  
  export interface FormField {
    name: string;
    label: string;
    type: string;
    required: boolean;
    validation?: Validation;
    options?: { value: string; label: string }[];
  }
  
  export interface FormGroup {
    name: string;
    label: string;
    type: string;
    fields: FormField[];
  }

  export interface companyTypes {
    value: string;
    label: string;
  }