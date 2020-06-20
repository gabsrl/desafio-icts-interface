import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
`;

export const SearchBar = styled.div`
  display: flex;
  width: 50%;
  height: 57px;
  display: flex;
  align-items: center;
  position: relative;

  input {
    font-family: 'Open Sans',  sans-serif;
    font-weight: 600;
    font-size: 1.8rem;
    line-height: 25px;
    color: #707070;

    padding-left: 10px;
    width: 100%;
    height: 100%;
    border:none;
    border-radius: 20px;

    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.25);
  }

  svg {
    position: absolute;
    font-size: 3.7rem;
    color: #ADADAD;
    right: 8px;

  }

  @media (max-width: 425px) {
    height: 45px;
  }
`;


export const Card = styled.div`
  position: relative;
  display: flex;
  width: 80%;
  height: 90%;
  justify-content: center;
  background: #FFFFFF;
  box-shadow: 0px 2px 25px rgba(0, 0, 0, 0.25);
  border-radius: 20px;


`;

// verificar  aqui display: flex, configurar flexGrow e flexShrink
export const Table = styled.table`
  flex-grow: 3;
  flex-shrink: 3;
  flex-direction: column;
  width: 100%;
  border-collapse: collapse;

  font-family: 'Open Sans' , sans-serif;
  font-weight: 600;
  thead {

    tr{
      th {
        font-size: 2.4rem;
        color:  #525151;
        padding-bottom: 10px;
      }
    }
  }


  tbody {
    tr {
      border: 1px solid #D6D5D5;
      border-left-width: 0px;
      border-right-width: 0px;
        td {
          text-align: center;
          font-size: 2.0rem;
          color: #616060;
        svg {
          font-size: 3.7rem;
          color: #883EF0;
          margin-right: 10px;
        }
      }
    }
  }

  @media (max-width: 768px) {
    .collapsable-m {
      display: none;
    }

  }

  @media (max-width: 425px) {
    .collapsable-s {
      display: none;
    }

  }
`;

export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center
`

export const TextModal = styled.h2`
  font-family: 'Open Sans', sans-serif;
  color:#616060;
  font-size: 2.0rem;
`
export const ButtonModal = styled.button`
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
`;
