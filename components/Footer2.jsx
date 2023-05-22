/* eslint-disable @next/next/no-img-element */
import React from 'react'

const Footer2 = () => {

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


      const contactItems2 = [
        {
          name: 'PROPERTY PROFESSIONALS/ <br/>AGENTS',
          email: 'agent@zimogroup.org',
        },
        {
          name: 'ADVERTISING',
          email: 'advertising@zimogroup.org',
        },
        {
          name: ' SPONSORSHIP',
          email: 'sponsor@zimogroup.org',
        },
        {
          name: ' PARTNERS',
          email: 'partners@zimogroup.org',
        },
        {
          name: 'LEGAL',
          email: 'legal@zimogroup.org',
        },
        {
          name: 'CORPORATE',
          email: 'corporate@zimogroup.org',
        },
        {
          name: ' MARKETING',
          email: 'marketing@zimogroup.org',
        },
      ];


  return (
    <>
    <div className='w-full  '>
        <div className='md:flex h-full w-full '>

        <div className='flex flex-col md:w-[70%] w-full justify-between items-start mt-10'>
            <div className='w-full flex justify-between '>
            <div className='ml-4'>
                        <div className='text-black uppercase text-[12px] font-Lato tracking-[2px]'>
                          enquiries
                        </div>
                        <div onClick={() => handleClick('realestate@zimogroup.org')} className='text-black text-[12px] font-Lato tracking-[2px] cursor-pointer hover:text-customgolden'>
                          hello@zimogroup.org
                        </div>
            </div>
            <div1>
                    <img src='/images/P14CONTACT.png' alt=''  className=' mr-36'/> 
            </div1>

            </div>
            
            <div className='flex flex-col'>
                <div className='w-[80%]'>
                <img src='/images/P14ZimoLogo.png' alt='' className='  mt-10 md:ml-4' /> 
                <img src='/images/P14Des.png' alt=''  className='  mt-10 md:mb-0 mb-10 ml-4'/>  
                </div>
                
            </div>

            <div className='w-full md:mt-0 mt-10 md:mb-0 mb-4 md:ml-0 ml-5'>
                <div className='text-black text-[12px] font-Lato tracking-[2px] w-full md:mb-6 md:ml-4  md:mr-0 mr-2'>ZIMO is a wholly owned subsidiary company of ZIMO GROUP LIMITED.<br/>
                                The registered office is: 71-75 Shelton Street, Covent Garden, London, WC2H 9JQ, <br/> England, United Kingdom.</div>
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
                                    className='text-black text-[12px] font-Lato tracking-[1px] cursor-pointer hover:text-customgolden'
                                    >
                                    {item.email}
                                    </div>
                                </div>
                                ))}



                        </div>

            </div>



            <div className='flex flex-col justify-center items-start  md:w-[20%]  w-[60%] md:ml-4 mt-8'>
                <div className=' ml-4 md:ml-0'>
                                    
                {contactItems2.map((item) => (
                                <div className='mb-2' key={item.name}>
                                    <div className='text-black uppercase text-[12px] font-Lato tracking-[2px]'>
                                    {item.name}
                                    </div>
                                    <div
                                    onClick={() => handleClick(item.email)}
                                    className='text-black text-[12px] font-Lato tracking-[1px] cursor-pointer hover:text-customgolden'
                                    >
                                    {item.email}
                                    </div>
                                </div>
                                ))}

                            </div>



                            <div className='md:ml-0 ml-4  mt-4'>
                            <div className='text-black uppercase text-[12px] font-Lato tracking-[2px] mb-4'>
                                    press
                                </div>
                                
                                <div className='mb-2'>
                                <div className='text-black uppercase text-[12px] font-Lato tracking-[2px]'>
                                    UNITED KINGDOM
                                </div>
                                <div onClick={() => handleClick('press-uk@zimogroup.org')} className='text-black text-[12px] font-Lato tracking-[2px] cursor-pointer hover:text-customgolden'>
                                    press-uk@zimogroup.org
                                </div>
                                </div>
                                <div className='mb-2'>
                                <div className='text-black uppercase text-[12px] font-Lato tracking-[2px]'>
                                    EUROPE
                                </div>
                                <div onClick={() => handleClick('press-eu@zimogroup.org')} className='text-black text-[12px] font-Lato tracking-[2px] cursor-pointer hover:text-customgolden'>
                                    press-eu@zimogroup.org
                                </div>
                                </div>
                                <div className='mb-2'>
                                <div className='text-black uppercase text-[12px] font-Lato tracking-[2px]'>
                                    NORTH AMERICA
                                </div>
                                <div onClick={() => handleClick('press-na@zimogroup.org')} className='text-black text-[12px] font-Lato tracking-[2px] cursor-pointer hover:text-customgolden'>
                                    press-na@zimogroup.org
                                </div>
                                </div>
                                <div className='mb-2'>
                                <div className='text-black uppercase text-[12px] font-Lato tracking-[2px]'>
                                    MIDDLE EAST
                                </div>
                                <div onClick={() => handleClick('press-me@zimogroup.org')} className='text-black text-[12px] font-Lato tracking-[2px] cursor-pointer hover:text-customgolden'>
                                    press-me@zimogroup.org
                                </div>
                                </div>
                                <div className='mb-2'>
                                <div className='text-black uppercase text-[12px] font-Lato tracking-[2px]'>
                                    ASIA/AUSTRALIA
                                </div>
                                <div onClick={() => handleClick('press-apac@zimogroup.org')} className='text-black text-[12px] font-Lato tracking-[2px] cursor-pointer hover:text-customgolden'>
                                    press-apac@zimogroup.org
                                </div>
                                </div>
                                <div className='mb-2'>
                                <div className='text-black uppercase text-[12px] font-Lato tracking-[2px]'>
                                    AFRICA
                                </div>
                                <div onClick={() => handleClick('press-af@zimogroup.org')} className='text-black text-[12px] font-Lato tracking-[2px] cursor-pointer hover:text-customgolden'>
                                    press-af@zimogroup.org
                                </div>
                                </div>
                                <div className='mb-2'>
                                <div className='text-black uppercase text-[12px] font-Lato tracking-[2px]'>
                                    CHINA/HONG KONG
                                </div>
                                <div onClick={() => handleClick('press-ch@zimogroup.org')} className='text-black text-[12px] font-Lato tracking-[2px] cursor-pointer hover:text-customgolden'>
                                    press-ch@zimogroup.org
                                </div>
                                </div>
                    </div>


                    </div>



                <div className='md:stactic relative flex md:flex-col md:justify-end md:items-end justify-around md:w-[10%] w-[100%] md:mr-4 md:mb-4 mb'>
                    <div></div>
                          <div><img src='/images/P14QR.png' alt='' className='md:static absolute bottom-4' /></div>
                      </div>



        </div>
    </div>
    </>
  )
}

export default Footer2