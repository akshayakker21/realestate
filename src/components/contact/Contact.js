import React from 'react'
import './Contact.css'
import { MdCall } from 'react-icons/md'
import {BsFillChatDotsFill} from 'react-icons/bs'
import {HiChatBubbleBottomCenter} from 'react-icons/hi2'

function Contact() {
  return (
    <div>

        <section className='c-wrapper'>
            <div className='paddings innerWidth flexCenter c-container'>
                <div className='flexColStart c-left'>
                    <span className='orangeText'>Contact Us</span>
                    <span className='primaryText'>Easy to Contact Us </span>
                    <span className='secondaryText'>We always ready to help providing the best services for you. We belive a good place to live can make your life better</span>
                    <div className='flexColStart contactModes'>
                        <div className='flexStart row'>
                            <div className='flexColCenter mode'>
                                <div className='flexStart'>
                                    <div className='flexCenter icon'>
                                        <MdCall size={25}/>
                                    </div>
                                    <div className='flexColStart detail'>
                                        <span className='PrimaryText'>Call</span>
                                        <span className='secondaryText'>999 555 2554</span>
                                    </div>
                                </div>
                                <div className='flexCenter button'>Call Now</div>
                            </div>

                             
                             
                            <div className='flexColCenter mode'>
                                <div className='flexStart'>
                                    <div className='flexCenter icon'>
                                        <BsFillChatDotsFill size={25}/>
                                    </div>
                                    <div className='flexColStart detail'>
                                        <span className='PrimaryText'>Chat</span>
                                        <span className='secondaryText'>999 555 2554</span>
                                    </div>
                                </div>
                                <div className='flexCenter button'>Chat Now</div>
                            </div>



                            <div className='flexColCenter mode'>
                                <div className='flexStart'>
                                    <div className='flexCenter icon'>
                                        <BsFillChatDotsFill size={25}/>
                                    </div>
                                    <div className='flexColStart detail'>
                                        <span className='PrimaryText'>Video Call</span>
                                        <span className='secondaryText'>999 555 2554</span>
                                    </div>
                                </div>
                                <div className='flexCenter button'>Video call Now</div>
                            </div>



                            <div className='flexColCenter mode'>
                                <div className='flexStart'>
                                    <div className='flexCenter icon'>
                                        <BsFillChatDotsFill size={25}/>
                                    </div>
                                    <div className='flexColStart detail'>
                                        <span className='PrimaryText'>Message</span>
                                        <span className='secondaryText'>999 555 2554</span>
                                    </div>
                                </div>
                                <div className='flexCenter button'>Message Now</div>
                            </div>

                            
                        </div>
                    </div>
                </div>
                <div className='c-right'>
                    <div className='col-xl-12 col-lg-6 col-md-4 col-sm-6 image-container'>
                        {/* <img src='https://th.bing.com/th/id/R.6c2f7bd91232d4df42b91d526d4d110a?rik=W2M%2fbqusx40CLw&riu=http%3a%2f%2fwww.nabasoft.com%2fwp-content%2fuploads%2f2016%2f04%2freal_Estate.jpg&ehk=arsXz5L2FsAYHdkdSfSXEgVAgUoj8jf6XxNpW6j4A%2bU%3d&risl=&pid=ImgRaw&r=0' alt=''/>
                         */}
                          <img src='https://th.bing.com/th/id/R.54afef8d30a96aec0b08c7c87b02f58b?rik=jVftgkGHLKmStQ&riu=http%3a%2f%2fwww.contemporist.com%2fwp-content%2fuploads%2f2015%2f09%2fapartment-building_110915_03.jpg&ehk=NQgvF2ndNL%2fmkpVqfVOcPyxsihUEAUT8s%2b8hGgr%2fpxg%3d&risl=&pid=ImgRaw&r=0' alt=''></img>
                    </div>
                </div>
            </div>
        </section>


    </div>
  )
}

export default Contact