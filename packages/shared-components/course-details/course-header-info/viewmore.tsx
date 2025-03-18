'use client'
export default function Viewmore(){

    
  const handleScroll = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

    return(
        <button onClick={()=>handleScroll("latestreviews")} className='reviewLink block small text-primary-400 hover:text-primary-500 hover:underline'>View reviews</button>
    ) 
}