import React, {useEffect, useState } from 'react';
import {Card,Row,Col} from 'reactstrap'

import axios from 'axios'




  function Rent() {
    const [data, setData] = useState([{
     
    }]);

  useEffect(() => {
    const fetchData =async () => {
      try{
        let response = await axios.get("http://localhost:3208/fetch3" )
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
            <Col key={item.batchno} sm={4}>
      <Card style={{width: '18rem'}}>
        <Card.Img>{item.img}</Card.Img>
        <Card.Body>
          <Card.Title>{item.title}</Card.Title>
          
          <Card.price>{item.price}</Card.price>
          <Card.description>{item.description}</Card.description>
          </Card.Body>
      </Card>
      </Col>
    ))}
    </Row>
    </div>
    
    

    
   
  )
}

export default Rent;