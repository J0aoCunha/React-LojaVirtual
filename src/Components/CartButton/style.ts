import styled from 'styled-components'

export const ButtonContainer = styled.button`
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px;
  background: none;
  border: none;
  position: relative;
  margin-left: 20px;
  color: #333;
  cursor: pointer;

  span {
    position: absolute;
    top: 0;
    left: 0;

    width: 15px;
    height: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: red;

    color: white;
    font-size: 11px;
    font-weight: 600;
    border-radius: 15px;
  }
`
