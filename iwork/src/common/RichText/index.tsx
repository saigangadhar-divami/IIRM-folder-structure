// import React from "react";
// import ReactQuill from "react-quill";
// import "react-quill/dist/quill.snow.css"; // Quill styles

// interface RichTextEditorProps {
//   value: string;
//   onChange: (value: string) => void;
//   className?: string;
//   richTextLabel?: string;
// }

// const RichText: React.FC<RichTextEditorProps> = ({ value, onChange, className,richTextLabel }) => {

//   return (
//     <div className="richTextContainer">
//         <div className="richTextLabel">{richTextLabel}</div>
//       <ReactQuill theme="snow" value={value} onChange={onChange} className={className}/>
//     </div>
//   );
// };

// export default RichText;


import React from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"; // Quill styles
import styled from "styled-components"; // Import styled-components

interface RichTextEditorProps {
  value: string;
  onChange: (value: string) => void;
  className?: string;
  richTextLabel?: string;
}

// Styled components
const Container = styled.div`
  border: 1px solid #ccc; /* Example style */
  border-radius: 4px; /* Example style */
  padding: 10px; /* Example style */
  background-color: #fff; /* Example style */
`;

const Label = styled.div`
  font-weight: bold; /* Example style */
  margin-bottom: 8px; /* Example style */
  color: #333; /* Example style */
`;

const StyledReactQuill = styled(ReactQuill)`
  /* Add any specific styles for ReactQuill here */
 
  .ql-container {
    min-height: 200px; /* Example style */
  }
`;

const RichText: React.FC<RichTextEditorProps> = ({ value, onChange, className, richTextLabel }) => {
  return (
    <Container className={className}>
      {richTextLabel && <Label>{richTextLabel}</Label>}
      <StyledReactQuill theme="snow" value={value} onChange={onChange} />
    </Container>
  );
};

export default RichText;

// ... existing code ...