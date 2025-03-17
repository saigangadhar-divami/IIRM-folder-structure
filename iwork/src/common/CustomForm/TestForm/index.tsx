import ReusableForm from "../ReusableForm";
import { formFields, formFieldre } from "../TestForm/formFields";
import styled from "styled-components";

const FormWrapper = styled.div`
  margin-bottom: 32px;
`;

const TestForm = () => {
  const handleFormSubmit = (data: Record<string, any>) => {
    console.log("Form Data:", data);
  };

  return (
    <div>
      <FormWrapper>
        <h2>Reusable Form</h2>
        {/* Default 1 column layout */}
        <ReusableForm fields={formFields} onSubmit={handleFormSubmit} />
      </FormWrapper>

      <FormWrapper>
        <h2>Form with 2 Columns</h2>
        <ReusableForm
          fields={formFieldre}
          onSubmit={handleFormSubmit}
          columns={2}
        />
      </FormWrapper>

      <FormWrapper>
        <h2>Form with 3 Columns</h2>
        <ReusableForm
          fields={formFields}
          onSubmit={handleFormSubmit}
          columns={3}
        />
      </FormWrapper>
    </div>
  );
};

export default TestForm;
