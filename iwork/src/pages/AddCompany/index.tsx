import React from "react";
import ReusableForm from "../../common/CustomForm/ReusableForm";
import { data1 } from "./constants";
import { useForm } from "react-hook-form";

const AddCompany = () => {

const { reset } = useForm();
const handleFormSubmit = (formData: Record<string, any>) => {
  // Clean the RichText input by removing Quill cursor artifacts
  const cleanedData = {
    ...formData,
    description: formData.description?.replace(/<span class="ql-cursor">.*?<\/span>/g, ""), // Removes cursor span
  };

  console.log("Cleaned Form Data:", cleanedData);
  reset();
};

  return (
    <div>
      <h1>Add Company</h1>
      <ReusableForm
        fields={data1}
        onSubmit={handleFormSubmit}
        columns={2}
        defaultValues={{}} // Pass empty object or predefined values
      />
    </div>
  );
};

export default AddCompany;
