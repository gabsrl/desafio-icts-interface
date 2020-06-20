import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';
import { MdEdit, MdDelete, MdAddCircle} from 'react-icons/md';


import api from '../../services/api';

import Spinner, { SpinnerContainer } from '../../components/spinner';
import Button from '../../components/button';
import {
  Container,
  ModalContainer,
  TextModal,
  Card,
  Table,
} from './style';

const Main = (props) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setModalOpen] = useState(false);
  const [productToDelete, setProductToDelete] = useState('');
  const [productRemoved, setProductRemoved] = useState({});

  useEffect(() => {
    const getData = async() => {
      try {
        const result = await api.get('/products');
        console.log(result);
        setProducts(result.data);
      }catch(err) {
        console.log(err);
      }
      setLoading(false);
    }
    getData();

    Modal.setAppElement("#root");

  },[productRemoved]);

  const handleOnDelete = async () => {
    try {
      const response = await api.delete(`/products/${productToDelete}`);
      console.log(response);
      alert('Produto foi deletado com sucesso!');
      setModalOpen(false);
      setProductRemoved(response.data.productToRemove);
    } catch(err) {
      alert('Erro ao deletar produto.')
    }
  }
  return (
    <Container>
      <Modal
        isOpen={isModalOpen}
        contentLabel="Meu modal"
      >
        <ModalContainer>
          <TextModal>Tem certeza que deseja apagar o produto?</TextModal>
          <div style={{display: 'flex'}}>
            <Button style={{marginRight: '20px'}} onClick={handleOnDelete}>Sim</Button>
            <Button onClick={() => setModalOpen(false)} >Nao</Button>
          </div>

        </ModalContainer>
      </Modal>
      <Card style={{marginTop: '50px'}}>
        <Link to={`/product/add`}>
          <MdAddCircle
            style={{fontSize: '5.0rem', position: 'absolute', right: '-5px', top: '-5px', color: '#400297'}}
          />
        </Link>

        {
          loading ?
            (
              <SpinnerContainer>
                <Spinner  color="#400297" size={30}/>
              </SpinnerContainer>
            ) :
            <Table style={{marginTop: '30px'}}>
          <thead>
            <tr>
              <th>COD</th>
              <th>NOME</th>
              <th className="collapsable-s">VALOR</th>
              <th className="collapsable-s">ESTOQUE</th>
              <th className="collapsable-m">STATUS</th>
              <th></th>
            </tr>
          </thead>

          <tbody>
            {
              products && products.length > 0 ?
                products.map((item) => (
                  <tr key={item._id}>
                    <td>{item.cod}</td>
                    <td>{item.name}</td>
                    <td className="collapsable-s">{item.price}</td>
                    <td className="collapsable-s">{item.ammount}</td>
                    <td className="collapsable-m">{item.status}</td>
                    <td>
                      <Link to={`/product/${encodeURIComponent(item._id)}`}>
                        <MdEdit />
                      </Link>
                      <MdDelete onClick={() => {setProductToDelete(item._id); setModalOpen(true);}} />
                    </td>
                  </tr>
                )):
                <tr>
                  <td colSpan="6">Nenhum produto cadastrado no momento</td>
                </tr>

            }

          </tbody>

        </Table>
        }


      </Card>
    </Container>
  )
}

export default Main;
