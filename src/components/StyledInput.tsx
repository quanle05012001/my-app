import React from "react";
import styled from "styled-components";

const InputWrapper = styled.div`
    margin-bottom: 1rem;
`;

const InputField = styled.input`
    width: 100%;
    padding: 0.5rem;
    border: none;
    border-radius: 4px;
    margin-bottom: 0.5rem;
    @media (max-width: 768px) {
        // Adjust styles for mobile devices
    }
`;

interface InputProps {
    type: string;
    name: string;
    placeholder: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const StyledInput: React.FC<InputProps> = ({ type, placeholder, value, onChange }) => (
    <InputWrapper>
        <InputField type={type} placeholder={placeholder} value={value} onChange={onChange} />
    </InputWrapper>
);
  
export default StyledInput;