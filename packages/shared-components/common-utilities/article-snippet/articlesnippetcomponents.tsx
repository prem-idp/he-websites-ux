import Link from 'next/link'
import React from 'react'

const Articlesnippetcomponents = () => {
  return (
    <div className='articlesnippet-container bg-white'> 
        <div className="max-w-container mx-auto">
            <div className='articlesnippet-card-container flex flex-col lg:flex-row justify-between gap-[20px] px-[16px] md:px-[20px] xl:px-[0] py-[40px] md:py-[64px]'>
                <div className='h5'>Level 1 heading</div>
                <div className='flex flex-col gap-[8px] w-full lg:w-[calc(100%_-_289px)]'>
                    <div className='flex flex-col gap-[24px]'>
                        <p className='para font-normal'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris quis tellus non mauris interdum viverra sed non enim. Proin sodales turpis sed leo aliquet faucibus. Duis rhoncus turpis nec facilisis sollicitudin. Integer purus tellus, condimentum id urna commodo, venenatis posuere urna. Ut euismod pharetra odio, sit amet suscipit nisl porta id. Aenean sem dolor, ullamcorper quis egestas vel, bibendum eu lectus. Integer eget orci scelerisque, iaculis tellus quis, ultrices dolor. Etiam tincidunt nunc nec viverra auctor. Etiam id porttitor ligula. Donec ac sapien sapien. Donec id tristique est. Mauris congue porttitor metus, in eleifend nisl porttitor sit amet.</p>

                        <p className='para font-normal'>Aliquam a sapien sed orci tempor egestas sed faucibus diam. Donec ut metus quis tortor feugiat aliquam. Phasellus odio nunc, fringilla sit amet elit et, molestie commodo quam. Vivamus scelerisque aliquet varius. Proin imperdiet molestie ex ut egestas. Interdum et malesuada fames ac ante ipsum primis in faucibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla fermentum eleifend pharetra. Sed fringilla vestibulum dolor eleifend congue. Aenean fermentum, leo vitae pellentesque dignissim, metus tellus molestie purus, et dictum turpis augue id nunc. Integer et scelerisque arcu.</p>
                    </div>
                    <div className='small font-semibold text-primary-400 hover:underline cursor-pointer'>- Read less</div>
                </div>
            </div>
        </div>
    </div>    
  )
}

export default Articlesnippetcomponents