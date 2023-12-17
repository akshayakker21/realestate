import React from 'react'
import "./Value.css"
// import {
//     Accordion,
//     AccordionItem,
//     AccordionItemHeading,
//     AccordionItemButton,
//     AccordionItemPannel,
//     AccordionItemState
// }from 'react-accessible-accordion'
import "react-accessible-accordion/dist/fancy-example.css";
// import {MdOutlineArrowDropDown} from 'react-icons/md';
// import data from '../../utils/accordion'


function Value() {

    
    


  return (
    <div>

        <section className='v-wrapper'>
            <div className='paddings innerWidth flexCenter v-container'>
                <div className='v-left'>
                    <div className='imagevalue-container'>
                        <img src='https://www.wallpaperflare.com/static/626/186/333/architectural-design-architecture-blue-sky-building-wallpaper.jpg' alt=''/>
                    </div>
                </div>

                <div className='flexColStart v-right'>
                    <span className='orangeText'>Our Value</span>
                    <span className='primaryText'>Value We Give to You</span>
                    <span className='secondaryText'>We always ready to help by providing the best services for you.
                        <br/>
                        We belive a good place to live can make your life better 
                    </span>


               
            <div className='paddings innerwidth g-container'>
                <div className='flexColCenter inner-Container'>
                    <span className='primaryText'>Get started with LivinEstate </span>
                    <span className='secondaryText'>Find your residence soon</span>
                    <button className='button'>
                        <a href='mailto:pothkanooriaishwarya@gmail.com'>Get started</a>
                    </button>

                </div>
            </div>
       

                    {/* <Accordion 
                    className='accordion'
                    allowMultipleExpanded={false}
                    preExpanded={[0]}
                    >
                      {
                        DataTransfer.map((item,i)=>{
                          return (
                            <AccordionItem className='accordionItem' key={i} uuid={i}
                            >
                              <AccordionItemHeading>
                                <AccordionItemButton>
                                  <div className='flexCenter icon'>{item.icon}</div>
                                </AccordionItemButton>
                              </AccordionItemHeading>
                              <AccordionItemPannel>

                              </AccordionItemPannel>
                            </AccordionItem>
                          );
                        })
                      }

                    </Accordion> */}







                    




                    
                        




                </div>
            </div>
        </section>
        
    </div>
  )
}

export default Value