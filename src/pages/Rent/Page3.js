import React from 'react'
import { Card,CardHeader,ListGroup,ListGroupItem,CardSubtitle,CardBody,Button,CardTitle,CardText} from 'reactstrap'
import {useNavigate} from 'react-router-dom';
function Page3() {
  const navigate = useNavigate();
  return (
    <div>
      <img src='https://img.staticmb.com/mbphoto/property/cropped_images/2023/May/25/Photo_h300_w450/9949_IMG20230525WA0005_300_450.jpg' alt=''/>
      <Card
  style={{
    width:800
  }}
>
  <CardHeader>
    Owner Name :  kalyani
  </CardHeader>
  <ListGroup flush>
    <ListGroupItem>
    Price Breakup : 
₹3.01 Cr₹92 Lac | ₹2 cr Approx. Registration Charges
    </ListGroupItem>
    <ListGroupItem>
    Booking Amount : 
₹5.0 Lac
    </ListGroupItem>
    <ListGroupItem>
    Address : 
    Owner's 3 BHK Flat for Sale A S Rao Nagar Kapra Hyderabad
    </ListGroupItem>
    <ListGroupItem>
     Ownership : 
Freehold
    </ListGroupItem>
    <ListGroupItem>
    Additional Rooms : 
Puja Room
    </ListGroupItem>
    <ListGroupItem>
    Contact : 9564254255
    </ListGroupItem>
   
  </ListGroup>
</Card>
      
<div className='r-head flexColStart'>
            <span className='orangeText'>Best choices</span>
            <span className='primaryText'>Popular Residencies</span>
          </div>

<div className='row'>

<div class="col-xl-3 col-lg-4 col-md-4 col-sm-6 card-container ">

<Card
  style={{
    width: '18rem'
  }}
>
  <img
    alt="Sample"
    src="https://img.staticmb.com/mbphoto/property/cropped_images/2023/Nov/05/Photo_h300_w450/69464189_1_1699187959943-4611_300_450.jpg"
  />
  <CardBody>
    <CardTitle tag="h5">
    harish
    </CardTitle>
    <CardSubtitle
      className="mb-2 text-muted"
      tag="h6"
    >
       3 BHK House for Sale in Rampally Hyderabad 
    </CardSubtitle>
    <CardText>
    ₹ 75 lac
    </CardText>
    <Button  style={{width:250,backgroundColor:'blueviolet'}} onClick={() => navigate("/properties/card5")}>
      View Details
    </Button>
  </CardBody>
</Card>
</div>


<div class="col-xl-3 col-lg-4 col-md-4 col-sm-6 card-container">

<Card
  style={{
    width: '18rem'
  }}
>
  <img
    alt="Sample"
    src="https://img.staticmb.com/mbphoto/property/cropped_images/2023/Oct/16/Photo_h300_w450/69590871_5_PropertyImage5-81738136623311_300_450.jpg "
  />
  <CardBody>
    <CardTitle tag="h5">
    yella raju
    </CardTitle>
    <CardSubtitle
      className="mb-2 text-muted"
      tag="h6"
    >
      Owner's 2 BHK Flat for Sale in Sri Sai Residency Ecil ECIL
    </CardSubtitle>
    <CardText>
    ₹ 58 lac
    </CardText>
    <Button  style={{width:250,backgroundColor:'blueviolet'}} onClick={() => navigate("/properties/card6")}>
      View Details
    </Button>
  </CardBody>
</Card>
</div>



<div class="col-xl-3 col-lg-4 col-md-4 col-sm-6 card-container">

<Card
  style={{
    width: '18rem'
  }}
>
  <img
    alt="Sample"
    src="https://img.staticmb.com/mbphoto/property/cropped_images/2023/Aug/18/Photo_h300_w450/7f383960-b118-45f9-9f85-5b1fe318d54b_68451575_300_450.jpg "
  />
  <CardBody>
    <CardTitle tag="h5">
    raghupathi
    </CardTitle>
    <CardSubtitle
      className="mb-2 text-muted"
      tag="h6"
    >
       Owner's Plot for Sale in Westerne County Shankarpalli Road 
    </CardSubtitle>
    <CardText>
    ₹ 3.1 Cr
    </CardText>
    <Button  style={{width:250,backgroundColor:'blueviolet'}}>
      View Details
    </Button>
  </CardBody>
</Card>
</div>


<div class="col-xl-3 col-lg-4 col-md-4 col-sm-6 card-container">

<Card 
  style={{
    width: '18rem'
  }}
>
  <img
    alt="Sample"
    src="https://img.staticmb.com/mbphoto/property/cropped_images/2023/Jun/03/Photo_h300_w450/66481683_4_PropertyImage1685800840212_300_450.jpg"
  />
  <CardBody>
    <CardTitle tag="h5">
    Venkatesh
    </CardTitle>
    <CardSubtitle
      className="mb-2 text-muted"
      tag="h6"
    >
       3 BHK Flat For Sale in Central Court Apartments, Somajiguda
    </CardSubtitle>
    <CardText>
    ₹1 cr
    </CardText>
    <Button  style={{width:250,backgroundColor:'blueviolet'}}>
      View Details
    </Button>
  </CardBody>
</Card>


</div>
</div>


      
    </div>
  )
}

export default Page3