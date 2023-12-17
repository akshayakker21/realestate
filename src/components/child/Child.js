import React from 'react'
import "./Child.css";
import SearchBar from '../SearchBar';

function Child() {
  // const {filter,setFilter} = useState("")
  return (
    <section  className='child-wrapper'> 
    <div className='paddings innerWidth flexCenter child-container'>
      <div className='flexColStart child-left'>
        <div className='Child-title'>
          <h1 style={{color:'black'}}>The Home <br/> Should Be The <br/>Treasure Chest Of Living</h1>
        
    
          <span style={{color:'grey'}}>Find a variety of properties that suits you very easily</span><br></br>
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
        <div className='image-container'>
          
          <img src='https://th.bing.com/th/id/R.6c2f7bd91232d4df42b91d526d4d110a?rik=W2M%2fbqusx40CLw&riu=http%3a%2f%2fwww.nabasoft.com%2fwp-content%2fuploads%2f2016%2f04%2freal_Estate.jpg&ehk=arsXz5L2FsAYHdkdSfSXEgVAgUoj8jf6XxNpW6j4A%2bU%3d&risl=&pid=ImgRaw&r=0' alt=''/>

        </div>

      </div>

    </div>

        
    </section>
  )
}

export default Child