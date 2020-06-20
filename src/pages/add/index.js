import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MdClose, MdSubject, MdAttachMoney, MdDescription, MdLayers, MdRemoveRedEye, MdConfirmationNumber} from 'react-icons/md';

import api from '../../services/api';
import Container from '../../components/container';

import { CardContainer, CardHeader,Title, Form, InputContainer, ActionContainer ,Button } from './style';

const AddProduct = (props) => {

  const [cod, setCod] = useState('');
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');
  const [ammount, setAmmount] = useState('');
  const [status, setStatus] = useState('');

  const [productIdToUpdate, setProductIdToUpdate] = useState('');

  const getFields = () => {
    return {
      cod: parseInt(cod),
      price: parseInt(price),
      ammount: parseInt(ammount),
      name,
      description,
      category,
      status
    }

  }

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    try {
      const response = await api.post('/products', getFields());

      setCod('');
      setName('');
      setPrice('');
      setCategory('');
      setDescription('');
      setAmmount('');
      setStatus('');

      console.log(response);
      alert('Produto Cadastrado!');
    } catch(err) {
      alert('Occoreu um erro :(.');
    }
  }

  const  handleUpdate = async (evt) => {
    try {
      evt.preventDefault();
      const updatedProduct = await api.put(`products/${productIdToUpdate}`, getFields());
      console.log(updatedProduct);
      alert('Produto atualizado com sucesso!') ;
    }catch(err) {
      alert('Erro ao atualizar o produto :(');
      console.log(err);
    }
  }

    useEffect(() => {
      const getProduct = async () => {
        try {
          const { match } = props;
          const productId = decodeURIComponent(match.params.id);
          if (productId !== 'add') {
            setProductIdToUpdate(productId);
            const response = await api.get(`/products/${productId}`);
            const { product } = response.data;
            console.log(product);

            setCod(product.cod);
            setName(product.name);
            setPrice(product.price);
            setCategory(product.category);
            setDescription(product.description);
            setAmmount(product.ammount);
            setStatus(product.status);

          }
        } catch(err) {
          console.log(err);
        }
      }

      getProduct();

    },[props]);

  return(
    <Container>
      <CardContainer style={{marginTop: '60px'}}>
        <CardHeader>
          <div/>
          {
            productIdToUpdate ? <Title>Produto COD: {cod}</Title> : <Title>Adicionar novo produto</Title>
          }
          <Link to="/">
            <MdClose />
          </Link>
        </CardHeader>

        <Form>
        <InputContainer>
            <MdConfirmationNumber />
            <input placeholder="Código do produto" onChange={(evt) => setCod(evt.target.value)} value={cod} />
          </InputContainer>

          <InputContainer>
            <MdSubject />
            <input placeholder="Nome do produto" onChange={(evt) => setName(evt.target.value)} value={name} />
          </InputContainer>

          <InputContainer>
            <MdAttachMoney />
            <input placeholder="Valor" onChange={(evt) => setPrice(evt.target.value)} value={price}/>
          </InputContainer>

          <InputContainer>
            <MdDescription />
            <input placeholder="Descrição" onChange={(evt) => setDescription(evt.target.value)} value={description} />
          </InputContainer>

          <InputContainer>
            <MdDescription />
            <input placeholder="Categoria" onChange={(evt) => setCategory(evt.target.value)} value={category} />
          </InputContainer>

          <InputContainer>
            <MdLayers />
            <input placeholder="Estoque" onChange={(evt) => setAmmount(evt.target.value) } value={ammount} />
          </InputContainer>

          <InputContainer>
            <MdRemoveRedEye />
            <input placeholder="Status" onChange={(evt) => setStatus(evt.target.value) } value={status} />
          </InputContainer>


          <ActionContainer>
            {
              productIdToUpdate ?
                <Button onClick={handleUpdate} >Atualizar</Button>
              :
              <Button onClick={handleSubmit}>Finalizar</Button>
            }

            <Button>
              <Link to="/">
                Cancelar
              </Link>
            </Button>
          </ActionContainer>

        </Form>
      </CardContainer>
    </Container>
  );
}


export default AddProduct;
