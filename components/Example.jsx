import React from 'react';

const Footer = () => {
  const handleClick = (email) => {
    window.location.href = `mailto:${email}`;
  };

  return (
    <>
      <div className='h-screen w-full overflow-x-hidden overflow-y-hidden'>
        {/* Rest of the code */}
        <div className='md:w-[20%] md:h-[100%]  md:flex md:flex-col md:justify-center'>
          <div>
            <div
              className='mb-2'
              onClick={() => handleClick('realestate@zimogroup.org')}
            >
              <div className='text-black uppercase text-size-[12px] font-Lato tracking[2px] font-bold'>
                REAL ESTATE
              </div>
              <div className='text-black text-size-[12px] font-Lato tracking[2px]'>
                realestate@zimogroup.org
              </div>
            </div>
            <div
              className='mb-2'
              onClick={() => handleClick('cars@zimogroup.org')}
            >
              <div className='text-black uppercase text-size-[12px] font-Lato tracking[2px] font-bold'>
                cars
              </div>
              <div className='text-black text-size-[12px] font-Lato tracking[2px]'>
                cars@zimogroup.org
              </div>
            </div>
            {/* Rest of the elements */}
          </div>
        </div>
        {/* Rest of the code */}
      </div>
    </>
  );
};

export default Footer;
