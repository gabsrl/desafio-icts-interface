import styled from 'styled-components';

export const CardContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
  height: 500px;

  background: #FFFFFF;
  box-shadow: 0px 2px 25px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
`;

export const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding-right: 10px;
  margin-bottom: 50px;
  svg{
    font-size: 2.4rem;
    color: #ADADAD;
  }
`

export const Title = styled.div`
  font-family: 'Roboto', sans-serif;
  font-size: 3.2rem;
  font-weight: 700;
  color: #525151
`;


export const Form = styled.form`
  width: 70%;
`;

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;

  svg {
    font-size: 2.1rem;
    color: #8F49F2;
    margin-right: 15px;
  }

  input {
    width: 100%;
    font-family: 'Open Sans', sans-serif;
    font-size: 2.0rem;
    line-height: 27px;
    color: #616060;

    border: none;
    border-bottom: 1px solid #D6D5D5;
  }

`;

export const ActionContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-top: 30px;
`;


