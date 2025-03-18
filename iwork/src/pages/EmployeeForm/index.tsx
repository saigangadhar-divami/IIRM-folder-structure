import React, { forwardRef, useImperativeHandle } from "react";
import ReusableForm from "../../common/CustomForm/ReusableForm";
import { employeeTableFields } from "./formFields";
import { FormWrapper, FormTitle } from "./formStyles";

const initialFormState = {
  salutation: "",
  firstName: "",
  lastName: "",
  emailId: "",
  mobile: "",
  loginName: "",
  password: "",
  roleId: 0,
  locationId: 0,
  verticalId: 0,
  departmentId: 0,
  designationId: 0,
  reportingUserId: 0,
  iirmEmpId: "",
  iworkRoleId: 0,
  id: 0,
};

export interface TestFormRef {
  handleEdit: (rowData: Record<string, any>) => void;
}

const EmployeeForm = forwardRef<TestFormRef>((props, ref) => {
  const [isEditMode, setIsEditMode] = React.useState(false);
  const [formData, setFormData] = React.useState(initialFormState);

  useImperativeHandle(ref, () => ({
    handleEdit: (rowData: Record<string, any>) => {
      setIsEditMode(true);
      setFormData({
        ...initialFormState,
        ...rowData,
      });
    },
  }));

  const handleFormSubmit = (data: Record<string, any>) => {
    const formatMobileNumber = (number: string) => {
      if (!number) return "";
      const cleanNumber = number.replace(/\D/g, "");
      return cleanNumber.startsWith("+") ? cleanNumber : `+${cleanNumber}`;
    };

    const formattedData = {
      ...(isEditMode ? { id: formData.id } : {}),
      salutation: data.salutation || "",
      firstName: data.firstName || "",
      lastName: data.lastName || "",
      emailId: data.emailId || "",
      mobile: formatMobileNumber(data.mobile),
      loginName: data.loginName || "",
      password: data.password || "",
      roleId: Number(data.roleId) || 0,
      locationId: Number(data.locationId) || 0,
      verticalId: Number(data.verticalId) || 0,
      departmentId: Number(data.departmentId) || 0,
      designationId: Number(data.designationId) || 0,
      reportingUserId: Number(data.reportingUserId) || 0,
      iirmEmpId: data.iirmEmpId || "",
      iworkRoleId: Number(data.iworkRoleId) || 0,
    };

    console.log(
      isEditMode ? "Updated Data:" : "New Data:",
      JSON.stringify(formattedData, null, 2)
    );

    // Reset form
    setFormData(initialFormState);
    setIsEditMode(false);
  };

  return (
    <FormWrapper>
      <FormTitle variant="h4">
        {isEditMode ? "Edit Employee" : "Add Employee"}
      </FormTitle>
      <ReusableForm
        fields={employeeTableFields}
        onSubmit={handleFormSubmit}
        columns={1}
        isEditMode={isEditMode}
        initialData={formData}
        submitButtonText={isEditMode ? "Save Changes" : "Create"}
      />
    </FormWrapper>
  );
});

export default EmployeeForm;
