import React from 'react'

const Testimonialcomponents = () => {
  return (
        <div className='testimonials-container bg-white'> 
            <div className="max-w-container mx-auto"> 
                <div className='testimonials-card-container px-[16px] md:px-[20px] py-[34px] lg:py-[60px] lg:px-[0]'>
                    <div className='testimonials-header mb-[26px] md:mb-[32px]'>
                        <h2 className='font-bold'>Testimonials</h2>
                        <p className='font-normal small mt-[8px]'>Subheading</p>
                    </div>
                    <div className='testimonials-inner-wrap grid grid-cols-1 lg:grid-cols-2 gap-[16px]'>
                        <div className='video-container rounded-[8px] overflow-hidden'>
                            <img className='block w-full'  src='/assets/images/testimonials/video_thumb_img.jpg' width={600} height={316} />
                        </div>
                        <div className='testimonial-card grid content-between p-[24px] rounded-[8px] gap-[16px] bg-primary-500'>
                            <h5 className='font-medium para-lg md:text-heading5 md:head text-white'>“Whatuni has really supported me from the moment I started thinking about university. I started scanning reviews of universities I like and it lead me to a course and university I did not expect! “</h5>
                            <div className='testimonial-footer'>
                                <div className='author-name font-semibold small text-white'>Nikki</div>
                                <p className='small text-white'>Criminology Bsc (Hons) Northumbria University</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>    
        </div>
  )
}

export default Testimonialcomponents