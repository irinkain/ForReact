import React, {useState, useEffect} from 'react';
import './App.css';
import { Container, Row, Col, Card, Button, InputGroup, Form } from 'react-bootstrap'
import allproducts from './products'
function App() {
  const [list, setList] = useState()
  const [selectedCategory, setSelectedCategory] = useState();
  const [newProductName, setNewProductName] = useState()
  const [products,setProducts] = useState({});
  const [categories,setCategories] = useState([]);
    useEffect(() => {
      setCategories(Object.keys(allproducts))
      setList(allproducts)
    }, []);
    const handleClick = (event) => {
        if(event.target.checked){
          setProducts({ ...products,[event.target.value]: list[event.target.value] });  
        }
        if(!event.target.checked){
          let newArray = {...products};
          delete newArray[event.target.value];
          setProducts(newArray);
        }
    }
    const removeProduct = (category,id) => {
      console.log("cashla")
    }
    const handleCategory = (event) => {
      setSelectedCategory(event.target.value)
    }
    const handleNameChange = (event) => {
      setNewProductName(event.target.value)
    }
    const handleSubmit = () => {
      let newArray = {...list}
      newArray[selectedCategory].push({
        id: `name${234}`,
        name: newProductName
      })
      setList(newArray)
    }
  return (
    <div className="App">
        <InputGroup className="mb-3">
          {categories && categories.map((el,index) => 
          <InputGroup.Prepend>
            <InputGroup.Checkbox onClick={handleClick} value={el} />
            {el}
          </InputGroup.Prepend>
          )}
         </InputGroup>
        <Container>
          <Row>
             {categories &&  Object.keys(products).map(el => products[el].map(product=> 
            <Col>
                <Card style={{ width: '18rem' }} key={product.id}>
                <Card.Img variant="top" src={product.img} />
                <Card.Body>
                  <Card.Title>{product.name}</Card.Title>
                  <Card.Text>
                    Category: {product.category}
                  </Card.Text>
                  <Button variant="danger" onClick={() => removeProduct(product.category,product.id)}>Remove</Button>
                </Card.Body>
            </Card>
            </Col>
                ))}
                       
          </Row>
      </Container>

      <Form>
  <Form.Group controlId="exampleForm.ControlInput1">
    <Form.Label>Product Name</Form.Label>
    <Form.Control type="name" placeholder="Product Name" onChange={(event) => handleNameChange(event)}/>
  </Form.Group>
    <Form.Group controlId="exampleForm.ControlSelect2">
    <Form.Label>Categories</Form.Label>
    <Form.Control as="select" onChange={(event) => handleCategory(event)}>
      {categories.map(el => <option value={el}>{el}</option>)}
    </Form.Control>
  </Form.Group>
  <Button variant="primary" onClick={handleSubmit}>Submit</Button>{' '}
</Form>
    </div>
  );
}

export default App;
