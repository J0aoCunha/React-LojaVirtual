import styled from 'styled-components'

export const SectionCartItem = styled.section`
  display: flex;
  align-items: flex-start;
  border-bottom: 1px solid #ddd;
  padding-bottom: 20px;
  margin-bottom: 20px;

  img {
    width: 70px;
  }

  &:last-child {
    border-bottom: none;
  }
`

export const DivInfosItem = styled.div`
  flex-grow: 1;
  padding: 0 35px 0 10px;
  font-weight: 500;
  position: relative;
  h3 {
    font-size: 0.85rem;
    color: rgba(0, 0, 0, 0.5);
  }

  span {
    font-size: 25px;
  }

  button {
    position: absolute;
    top: 0;
    right: 0;
    color: #d83232;
    font-size: 1.4rem;
    border: none;
    background: none;
    cursor: pointer;
  }
`
