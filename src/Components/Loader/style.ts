import { keyframes, styled } from 'styled-components'

const rotate = keyframes`
from{
transform: rotate(0deg);
}
to{
 transform: rotate(360deg);
}
`
export const Loading = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  font-size: 2rem;
  margin: 200px auto 0;

  svg {
    animation: ${rotate} 1s linear infinite;
  }
`
