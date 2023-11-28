import React from 'react'



const volunteers = [
    {
      id: 1,
      image: '/img/hand-5040992_1280.jpg',
     
    },
  
  ];
export default function Volunteer() {
  return (
    <>
        {volunteers.map((item) => (
            
              <div
                style={{
                  backgroundImage: `url(${item.image})`,
                }}
                className="bg-cover bg-center h-[100vh] md:h-[50vh] flex items-center justify-start m-10 rounded-xl "
              >
            <div className=""></div>
              </div>
            
              
          ))}
    </>
  )
}
