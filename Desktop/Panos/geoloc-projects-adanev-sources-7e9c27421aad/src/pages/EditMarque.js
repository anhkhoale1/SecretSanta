import React, { useEffect, useState } from 'react';
import { API, graphqlOperation } from 'aws-amplify';
import { getMarque } from '../../graphql/queries';
import { updateMarque } from '../../graphql/mutations';
import { useHistory, useParams } from 'react-router-dom';
import Header from "components/Headers/Header.js";

import {
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  Button,
  Container,
} from 'reactstrap';

const EditMarque = () => {
  const { id } = useParams();
  const history = useHistory();
  const [marque, setMarque] = useState({
    name: '',
    status: '',
    supplier: '',
  });

  useEffect(() => {
    const fetchMarque = async () => {
      const apiData = await API.graphql(
        graphqlOperation(getMarque, { id: id })
      );
      setMarque(apiData.data.getMarque);
    };

    fetchMarque();
  }, [id]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setMarque({ ...marque, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const { name, status, supplier } = marque;

    const input = {
      id,
      name,
      status,
      supplier,
    };

    try {
      await API.graphql(graphqlOperation(updateMarque, { input }));
      history.push('/admin/Tables');
    } catch (err) {
      console.log('error updating marque:', err);
    }
  };

  return (
    <>
    <Header />
    <Container className="mt--7" fluid>
    <Card>
      <CardHeader>Edit Marque</CardHeader>
      <CardBody>
        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <Input
              type="text"
              name="name"
              value={marque.name}
              placeholder="Enter marque name"
              onChange={handleChange}
              required
            />
          </FormGroup>
          <FormGroup>
            <Input
              type="text"
              name="Slug"
              value={marque.status}
              placeholder="Enter marque Slug"
              onChange={handleChange}
              required
            />
          </FormGroup>
          <FormGroup>
            <Input
              type="text"
              name="Type"
              value={marque.supplier}
              placeholder="Enter marque Type"
              onChange={handleChange}
              required
            />
          </FormGroup>
          <FormGroup>
            <Input
              type="text"
              name="Supplier"
              value={marque.supplier}
              placeholder="Enter marque supplier"
              onChange={handleChange}
              required
            />
          </FormGroup>
          <Button color="primary" type="submit">
            Update
          </Button>
        </Form>
      </CardBody>
    </Card>
    </Container>
    </>
  );
};

export default EditMarque;
