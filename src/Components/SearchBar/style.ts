import styled from 'styled-components'

export const FormContainer = styled.form`
  display: flex;
  background: white;
  width: 100%;
  max-width: 500px;
  justify-content: space-between;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.1);
  gap: 13px;
  padding-right: 13px;

  input {
    flex-grow: 1;
    padding: 13px;
    border: none;
    outline: none;
    font-size: 0.8rem;
    font-weight: 800;
    border-right: 1px solid #ddd;
  }

  button {
    border: none;
    background: none;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #333;
  }
`
