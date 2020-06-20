import styled from 'styled-components';
const Button = styled.button`
  width: 133px;
  height: 37px;
  border: none;
  background: #660EE1;
  border-radius: 4px;

  font-family: 'Roboto', sans-serif;
  font-weight: 700;
  font-size: 2.0rem;
  line-height: 23px;
  text-align: center;
  color: #FCFBFB;
  a {
    color: #FCFBFB;
    text-decoration: none;
  }

  @media (max-width: 425px) {
    width: 80px;
    height: 37px;
  }
`;

export default Button;
