import styled from 'styled-components'

export const SectionProduct = styled.section`
  width: 100%;
  max-width: 300px;
  background: white;

  display: flex;
  flex-direction: column;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  border-radius: 20px;

  img {
    width: 100%;
  }

  button {
    position: absolute;
    right: 0;
    top: 0;
    width: 45px;
    height: 45px;
    margin: 12px 15px;
    color: #0c5dd6;
    display: none;
    align-items: center;
    justify-content: center;
    border: none;
    border-radius: 50px;
    background: rgba(255, 255, 255, 0.8);
    font-size: 1.5;
    cursor: pointer;
  }

  &:hover button {
    display: flex;
  }

  &:hover {
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  }
`
export const DivInfos = styled.div`
  padding: 20px;
  border-top: 1px solid #ddd;

  h2 {
    font-size: 30px;
    font-weight: 300;
    display: block;
    margin-bottom: 10px;
  }

  h3 {
    font-size: 15px;
    color: rgba(0, 0, 0, 0.5);
    line-height: 1.5;
    font-weight: 500;
  }
`
