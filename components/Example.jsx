import React from 'react';

const Footer = () => {
  const handleClick = (email) => {
    window.location.href = `mailto:${email}`;
  };

  const contactItems = [
    {
      name: 'REAL ESTATE',
      email: 'realestate@zimogroup.org',
    },
    {
      name: 'CARS',
      email: 'cars@zimogroup.org',
    },
    {
      name: 'YACHTS',
      email: 'yachts@zimogroup.org',
    },
    {
      name: 'WATCHES',
      email: 'watches@zimogroup.org',
    },
    {
      name: 'JETS',
      email: 'jets@zimogroup.org',
    },
    {
      name: 'PRIVATE ISLANDS',
      email: 'privateislands@zimogroup.org',
    },
    {
      name: 'DIAMONDS',
      email: 'diamonds@zimogroup.org',
    },
    {
      name: 'TRAVEL THE WORLD',
      email: 'ttw@zimogroup.org',
    },
  ];

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

        <div className='md:flex md:flex-col md:justify-center md:items-end   md:w-[10%] flex w-[100%]  '>

          <div className='md:ml-0 ml-5' >

          {contactItems.map((item) => (
  <div className='mb-2' key={item.name}>
    <div className='text-black uppercase text-[12px] font-Lato tracking-[2px]'>
      {item.name}
    </div>
    <div
      onClick={() => handleClick(item.email)}
      className='text-black text-[12px] font-Lato tracking-[2px] cursor-pointer hover:text-customgolden'
    >
      {item.email}
    </div>
  </div>
))}



          </div>

        </div>



      </div>
    </>
  );
};

export default Footer;
