import styled from "styled-components";

// Outer container
export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: #f8f9fa;
  padding: 20px;
`;

// Card Layout
export const Card = styled.div`
  background: #ffffff;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  max-width: 600px;
  width: 100%;
`;

// Title Styling
export const Title = styled.h1`
  text-align: center;
  color: #2c3e50;
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 20px;
  border-bottom: 2px solid #007bff;
  padding-bottom: 10px;
`;

// Individual Detail Row
export const DetailRow = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 0;
  border-bottom: 1px solid #f1f1f1;

  &:last-child {
    border-bottom: none;
  }
`;

// Label for Data
export const Label = styled.span`
  font-weight: bold;
  color: #34495e;
  font-size: 16px;
`;

// Value of Data
export const Value = styled.span`
  color: #2c3e50;
  font-size: 16px;
`;

// Styled Website Link
export const WebsiteLink = styled.a`
  color: #007bff;
  text-decoration: none;
  font-weight: bold;

  &:hover {
    text-decoration: underline;
  }
`;
