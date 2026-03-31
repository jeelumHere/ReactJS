import React from 'react'

const ProductCard = (props) => {
  return (
    <div className='card'>

       {/* top section */}
        <div className="top">

          <div className='image'><img src={props.image} alt={props.company} /></div>
          <button>Save <svg width="10" height="14" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 1 H9 V13 L5 10 L1 13 Z"
              fill="white" stroke="black" stroke-width="0.8" />
          </svg></button>

        </div>


        {/* center section */}
        <div className="center">



          <h3>{props.company}<span>{props.daysAgo}</span> </h3>
          <h1>{props.jobTitle}</h1>


          <div className='tag'>
            <button>{props.tag1}</button>
            <button>{props.tag2}</button>
          </div>




        </div>



        {/* Bottom section */}
        <div className="bottom">


          <div className='border'></div>

          <div style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
              <h3>{props.salary}</h3>
            <div className='apply'><button>Apply Now</button></div>
          </div>

          <p>{props.location}</p>



        </div>


      </div>
  )
}

export default ProductCard
