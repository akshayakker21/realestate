import React from 'react'
import "./Child.css";
import SearchBar from '../SearchBar';

function Child() {
  // const {filter,setFilter} = useState("")
  return (
    <section  className='child-wrapper'> 
    <div className='paddings innerWidth flexCenter child-container'>
      <div className='flexColStart child-left'>
        <div className='col-xl-12 col-lg-6 col-md-4 col-sm-6 Child-title'>
          <h1 style={{color:'black'}}>The Home <br/> Should Be The <br/>Treasure Chest Of Living</h1>
        
    
          <spa style={{color:'grey'}}>Find a variety of properties that suits you very easily</spa><br></br>
          <span style={{color:'grey'}}>Forget all difficulties in finding a residence of you</span><br/><br/>
          <span className='orangeText'>Explore more</span>
          <br></br><br/>
          {/* <form class="d-flex">
        <input class="form-control me-sm-2" type="search" placeholder="Search" style={{width:'500px',borderColor:'blue'}}></input>
        <button class="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
      </form> */}
      <SearchBar />
          </div>



      </div>
      <div className='flexCenter child-right'>
        <div className='col-xl-12 col-lg-6 col-md-4 col-sm-6 image-container'>
          
          <img src='https://th.bing.com/th/id/OIP.4qvs5goMJJ6qEW2OsXQPtgHaFj?rs=1&pid=ImgDetMain' alt=''/>

        </div>

      </div>

    </div>

        
    </section>
  )
}

export default Child