import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { MdEdit, MdDelete, MdSearch, MdAddCircle} from 'react-icons/md';


import api from '../../services/api';


import {
  Container,
  SearchBar,
  Card,
  Table,
} from './style';

const Main = (props) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getData = async() => {
      try {
        const result = await api.get('/products');
        console.log(result);
        setProducts(result.data);
      }catch(err) {
        console.log(err);
      }

    }

    getData();
  },[]);
  return (
    <Container>
      <SearchBar style={{marginTop: '40px'}}>
        <input placeholder="Buscar produto por código..." />
        <MdSearch />
      </SearchBar>
      <Card style={{marginTop: '50px'}}>
        <Link to={`/product/add`}>
          <MdAddCircle
            style={{fontSize: '50px', position: 'absolute', right: '-5px', top: '-5px', color: '#883EF0'}}
          />
        </Link>

        <Table style={{marginTop: '30px'}}>
          <thead>
            <tr>
              <th>COD</th>
              <th>NOME</th>
              <th>VALOR</th>
              <th className="collapsable-s">ESTOQUE</th>
              <th className="collapsable-m">STATUS</th>
              <th className="collapsable-s"></th>
            </tr>
          </thead>

          <tbody>
            {
              products && products.length > 0 ?
                products.map((item) => (
                  <tr key={item._id}>
                    <td>{item.cod}</td>
                    <td>{item.name}</td>
                    <td>{item.price}</td>
                    <td className="collapsable-s">{item.ammount}</td>
                    <td className="collapsable-m">{item.status}</td>
                    <td className="collapsable-s">
                      <Link to={`/product/${encodeURIComponent(item._id)}`}>
                        <MdEdit />
                      </Link>
                      <MdDelete/>
                    </td>
                  </tr>
                )):
                <tr>
                  <td colSpan="6">Nenhum produto cadastrado no momento</td>
                </tr>

            }

          </tbody>

        </Table>
      </Card>
    </Container>
  )
}

export default Main;
