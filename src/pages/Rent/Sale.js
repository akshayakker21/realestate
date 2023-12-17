import React, {useEffect, useState } from 'react';
import {Card,Row,Col,CardSubtitle} from 'reactstrap'

import axios from 'axios'




  const Sale =()=> {
    const [data, setData] = useState([{
     
    }]);

  useEffect(() => {
    const fetchData =async () => {
      try{
        let response = await axios.get("http://localhost:3021/fetch2" )
        console.log(response.data)
        setData(response.data)
      }catch(err){
        throw err
      }
    }
    fetchData();
  },[]);
  return (
    
        <div>
           <Row>
        {data.map((item) =>(
            <Col>
        <Card style={{width: '18rem'}}>
          <br></br>
        <Card.Img src={item.image} alt='' style={{width:'140px',height:'150px'}}></Card.Img>
        <Card.Body>
          <Card.Title>{item.name}</Card.Title>
          <CardSubtitle>{item.price}</CardSubtitle>
          <Card.Text>{item.detail}</Card.Text>
          {/* <Button variant="primary" onClick={() => addToCart(item)}>
                  Add to Cart
                </Button> */}
          </Card.Body>
      </Card>
      </Col>
    ))}
    </Row>
    </div>
    
    

    
   
  )
}

export default Sale;