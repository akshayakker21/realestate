import React from 'react';
import { Card,CardBody,CardTitle,CardSubtitle,CardText,Button } from 'reactstrap';
import './Buy.css';
import {useNavigate} from 'react-router-dom';




function Buy() {
  const navigate = useNavigate();
  // const handleClick = () => {
  //   // Example navigation
  //   navigate('/Page1');
  return (
    

<div className='paddings innerWidth r-container'>
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
    src="https://img.staticmb.com/mbphoto/property/cropped_images/2023/Apr/10/Photo_h600_w900/66439247_10_hatsAppImage20230410at11.53.34_600_900.jpeg"
  />
  <CardBody>
    <CardTitle tag="h5">
    Vikram Tripuraneni
    </CardTitle>
    <CardSubtitle
      className="mb-2 text-muted"
      tag="h6"
    >
       3 BHK Flat For Sale in Central Court Apartments, Somajiguda, Hyderabad
    </CardSubtitle>
    <CardText>
    ₹94 Lac
    </CardText>
    <Button  style={{width:250,backgroundColor:'blueviolet'}} onClick={() => navigate("/properties/card1")} >
    View Details
    </Button>
  </CardBody>
</Card>
</div>



<div class="col-xl-3 col-lg-4 col-md-4 col-sm-6 card-container ">

<Card
  style={{
    width: '18rem'
  }}
>
  <img
    alt="Sample"
    src="https://img.staticmb.com/mbphoto/property/cropped_images/2023/Apr/10/Photo_h300_w450/66439247_1_hatsAppImage20230410at11.53.351_300_450.jpeg"
  />
  <CardBody>
    <CardTitle tag="h5">
    Balaji Prasanna
    </CardTitle>
    <CardSubtitle
      className="mb-2 text-muted"
      tag="h6"
    >
       4 BHK House for Sale in AS Rao Nagar Hyderabad
    </CardSubtitle>
    <CardText>
    ₹ 6 Cr
    </CardText>
    <Button  style={{width:250,backgroundColor:'blueviolet'}} onClick={() => navigate("/properties/card2")}>
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
    src="https://img.staticmb.com/mbphoto/property/cropped_images/2023/May/25/Photo_h300_w450/9949_IMG20230525WA0005_300_450.jpg"
  />
  <CardBody>
    <CardTitle tag="h5">
    kalyani
    </CardTitle>
    <CardSubtitle
      className="mb-2 text-muted"
      tag="h6"
    >
       Owner's 3 BHK Flat for Sale A S Rao Nagar Kapra Hyderabad
    </CardSubtitle>
    <CardText>
    ₹ 2 Cr
    </CardText>
    <Button  style={{width:250,backgroundColor:'blueviolet'}} onClick={() => navigate("/properties/card3")}>
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
    src="https://img.staticmb.com/mbphoto/property/cropped_images/2023/Sep/16/Photo_h300_w450/69105165_8_PropertyImage783-2378216469991_300_450.jpg"
  />
  <CardBody>
    <CardTitle tag="h5">
    priyanka
    </CardTitle>
    <CardSubtitle
      className="mb-2 text-muted"
      tag="h6"
    >
       3 BHK House for Sale in Rajiv Gandhi Nagar Suraram Hyderabad
    </CardSubtitle>
    <CardText>
    ₹ 1.2 Cr
    </CardText>
    <Button  style={{width:250,backgroundColor:'blueviolet'}} onClick={() => navigate("/properties/card4")}>
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
    src="https://img.staticmb.com/mbphoto/property/cropped_images/2023/Jun/09/Photo_h300_w450/67444021_3_PropertyImage960-7534050370111_300_450.jpg"
  />
  <CardBody>
    <CardTitle tag="h5">
    mahesh
    </CardTitle>
    <CardSubtitle
      className="mb-2 text-muted"
      tag="h6"
    >
      3 BHK Villa for Sale in Kollur, Outer Ring Road Hyderabad
    </CardSubtitle>
    <CardText>
    ₹ 1.8 Cr
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
    src="https://img.staticmb.com/mbphoto/property/cropped_images/2023/Aug/04/Photo_h600_w900/68464549_2_PropertyImage363-2639326963061_600_900.jpg"
  />
  <CardBody>
    <CardTitle tag="h5">
    rajendar
    </CardTitle>
    <CardSubtitle
      className="mb-2 text-muted"
      tag="h6"
    >
       2 BHK House for Sale in Chitkul Hyderabad
    </CardSubtitle>
    <CardText>
    ₹ 9 Cr
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

export default Buy