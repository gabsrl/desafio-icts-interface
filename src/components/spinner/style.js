import styled from 'styled-components';
export const SpinnerWrapper = styled.div`

  svg {
    @keyframes rotate {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg)
      }
    }
    animation: rotate 1s linear infinite
  }
`;


export const SpinnerContainer  = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

