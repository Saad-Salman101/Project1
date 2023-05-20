/* eslint-disable @next/next/no-img-element */
import React from 'react'

const Footer2 = () => {

    const handleClick = (email) => {
        window.location.href = `mailto:${email}`;
      };

  return (
    <>
    <div className='w-full  '>
        <div className='md:flex h-full w-full '>

        <div className='flex flex-col md:w-[60%] w-full justify-between items-start'>
            <div className='w-full flex justify-between '>
            <div className='ml-4'>
                        <div className='text-black uppercase text-[12px] font-Lato tracking[2px]'>
                          enquiries
                        </div>
                        <div onClick={() => handleClick('realestate@zimogroup.org')} className='text-black text-[12px] font-Lato tracking[2px] cursor-pointer hover:font-bold'>
                          hello@zimogroup.org
                        </div>
            </div>
            <div >
                    <img src='/images/P14CONTACT.png' alt='' /> 
            </div>

            </div>
            
            <div className='flex flex-col'>
                <div>
                <img src='/images/P14ZimoLogo.png' alt='' className='  mt-10 md:ml-4' /> 
                <img src='/images/P14Des.png' alt=''  className='  mt-10 md:mb-0 mb-10 ml-4'/>  
                </div>
                
            </div>

            <div className='w-full md:mt-0 mt-10 md:mb-0 mb-4'>
                <div className='text-black text-[12px] font-Lato tracking[2px] w-full md:mb-6 ml-4 '>ZIMO is a wholly owned subsidiary company of ZIMO GROUP LIMITED.
                                The registered office is: 71-75 Shelton Street, Covent Garden, London, WC2H 9JQ, England, United Kingdom.</div>
            </div>


        </div>

       
            <div className='md:flex md:flex-col md:justify-center md:items-end   md:w-[30%] flex w-[100%]  '>

                        <div className='md:ml-0 ml-5' >
                        <div className='mb-2'>
                            <div className='text-black uppercase text-[12px] font-Lato tracking[2px]'>
                            REAL ESTATE
                            </div>
                            <div onClick={() => handleClick('realestate@zimogroup.org')} className='text-black text-[12px] font-Lato tracking[2px] cursor-pointer hover:font-bold'>
                            realestate@zimogroup.org
                            </div>
                        </div>
                        <div className='mb-2'>
                            <div className='text-black uppercase text-[12px] font-Lato tracking[2px] '>
                            cars
                            </div>
                            <div onClick={() => handleClick('cars@zimogroup.org')} className='text-black text-[12px] font-Lato tracking[2px] cursor-pointer hover:font-bold'>
                            cars@zimogroup.org
                            </div>
                        </div>
                        <div className='mb-2'>
                            <div className='text-black uppercase text-[12px] font-Lato tracking[2px] '>
                            yachts
                            </div>
                            <div onClick={() => handleClick('yachts@zimogroup.org')} className='text-black text-[12px] font-Lato tracking[2px] cursor-pointer hover:font-bold'>
                            yachts@zimogroup.org
                            </div>
                        </div>
                        <div className='mb-2'>
                            <div className='text-black uppercase text-[12px] font-Lato tracking[2px]'>
                            watches
                            </div>
                            <div onClick={() => handleClick('watches@zimogroup.org')} className='text-black text-[12px] font-Lato tracking[2px] cursor-pointer hover:font-bold'>
                            watches@zimogroup.org
                            </div>
                        </div>
                        <div className='mb-2'>
                            <div className='text-black uppercase text-[12px] font-Lato tracking[2px]'>
                            jets
                            </div>
                            <div onClick={() => handleClick('jets@zimogroup.org')} className='text-black text-[12px] font-Lato tracking[2px] cursor-pointer hover:font-bold'>
                            jets@zimogroup.org
                            </div>
                        </div>
                        <div className='mb-2'>
                            <div className='text-black uppercase text-[12px] font-Lato tracking[2px]'>
                            private islands
                            </div>
                            <div onClick={() => handleClick('privateislands@zimogroup.org')} className='text-black text-[12px] font-Lato tracking[2px] cursor-pointer hover:font-bold'>
                            privateislands@zimogroup.org
                            </div>
                        </div>
                        <div className='mb-2'>
                            <div className='text-black uppercase text-[12px] font-Lato tracking[2px]'>
                            diamonds
                            </div>
                            <div onClick={() => handleClick('diamonds@zimogroup.org')} className='text-black text-[12px] font-Lato tracking[2px] cursor-pointer hover:font-bold'>
                            diamonds@zimogroup.org
                            </div>
                        </div>
                        <div className='mb-2'>
                            <div className='text-black uppercase text-[12px] font-Lato tracking[2px]'>
                            travel the world
                            </div>
                            <div onClick={() => handleClick('ttw@zimogroup.org')} className='text-black text-[12px] font-Lato tracking[2px] cursor-pointer hover:font-bold'>
                            ttw@zimogroup.org
                            </div>
                        </div>
                        </div>

            </div>



            <div className='flex flex-col justify-center items-start  md:w-[40%]  w-[60%] md:ml-4'>
                <div className='  '>
                    <div className='mb-2'>
                            <div className='text-black uppercase text-[12px] font-Lato tracking[2px]'>
                                PROPERTY PROFESSIONALS/AGENTS
                            </div>
                            <div onClick={() => handleClick('agent@zimogroup.org')} className='text-black text-[12px] font-Lato tracking[2px] cursor-pointer hover:font-bold'>
                                agent@zimogroup.org
                            </div>
                            </div>
                            <div className='mb-2'>
                            <div className='text-black uppercase text-[12px] font-Lato tracking[2px]'>
                                ADVERTISING
                            </div>
                            <div onClick={() => handleClick('advertising@zimogroup.org')} className='text-black text-[12px] font-Lato tracking[2px] cursor-pointer hover:font-bold'>
                                advertising@zimogroup.org
                            </div>
                            </div>
                            <div className='mb-2'>
                            <div className='text-black uppercase text-[12px] font-Lato tracking[2px] '>
                                SPONSORSHIP
                            </div>
                            <div onClick={() => handleClick('sponsor@zimogroup.org')} className='text-black text-[12px] font-Lato tracking[2px] cursor-pointer hover:font-bold'>
                                sponsor@zimogroup.org
                            </div>
                            </div>
                            <div className='mb-2'>
                            <div className='text-black uppercase text-[12px] font-Lato tracking[2px]'>
                                PARTNERS
                            </div>
                            <div onClick={() => handleClick('partners@zimogroup.org')} className='text-black text-[12px] font-Lato tracking[2px] cursor-pointer hover:font-bold'>
                                partners@zimogroup.org
                            </div>
                            </div>
                            <div className='mb-2'>
                            <div className='text-black uppercase text-[12px] font-Lato tracking[2px]'>
                                LEGAL
                            </div>
                            <div onClick={() => handleClick('legal@zimogroup.org')} className='text-black text-[12px] font-Lato tracking[2px] cursor-pointer hover:font-bold'>
                                legal@zimogroup.org
                            </div>
                            </div>
                            <div className='mb-2'>
                            <div className='text-black uppercase text-[12px] font-Lato tracking[2px]'>
                                CORPORATE
                            </div>
                            <div onClick={() => handleClick('corporate@zimogroup.org')} className='text-black text-[12px] font-Lato tracking[2px] cursor-pointer hover:font-bold'>
                                corporate@zimogroup.org
                            </div>
                            </div>
                            <div className='mb-2'>
                            <div className='text-black uppercase text-[12px] font-Lato tracking[2px]'>
                                MARKETING
                            </div>
                            <div onClick={() => handleClick('marketing@zimogroup.org')} className='text-black text-[12px] font-Lato tracking[2px] cursor-pointer hover:font-bold'>
                                marketing@zimogroup.org
                            </div>
                            </div>
                            </div>



                            <div className='md:ml-0  mt-4'>
                            <div className='text-black uppercase text-[12px] font-Lato tracking[2px] mb-4'>
                                    press
                                </div>
                                
                                <div className='mb-2'>
                                <div className='text-black uppercase text-[12px] font-Lato tracking[2px]'>
                                    UNITED KINGDOM
                                </div>
                                <div onClick={() => handleClick('press-uk@zimogroup.org')} className='text-black text-[12px] font-Lato tracking[2px] cursor-pointer hover:font-bold'>
                                    press-uk@zimogroup.org
                                </div>
                                </div>
                                <div className='mb-2'>
                                <div className='text-black uppercase text-[12px] font-Lato tracking[2px]'>
                                    EUROPE
                                </div>
                                <div onClick={() => handleClick('press-eu@zimogroup.org')} className='text-black text-[12px] font-Lato tracking[2px] cursor-pointer hover:font-bold'>
                                    press-eu@zimogroup.org
                                </div>
                                </div>
                                <div className='mb-2'>
                                <div className='text-black uppercase text-[12px] font-Lato tracking[2px]'>
                                    NORTH AMERICA
                                </div>
                                <div onClick={() => handleClick('press-na@zimogroup.org')} className='text-black text-[12px] font-Lato tracking[2px] cursor-pointer hover:font-bold'>
                                    press-na@zimogroup.org
                                </div>
                                </div>
                                <div className='mb-2'>
                                <div className='text-black uppercase text-[12px] font-Lato tracking[2px]'>
                                    MIDDLE EAST
                                </div>
                                <div onClick={() => handleClick('press-me@zimogroup.org')} className='text-black text-[12px] font-Lato tracking[2px] cursor-pointer hover:font-bold'>
                                    press-me@zimogroup.org
                                </div>
                                </div>
                                <div className='mb-2'>
                                <div className='text-black uppercase text-[12px] font-Lato tracking[2px]'>
                                    ASIA/AUSTRALIA
                                </div>
                                <div onClick={() => handleClick('press-apac@zimogroup.org')} className='text-black text-[12px] font-Lato tracking[2px] cursor-pointer hover:font-bold'>
                                    press-apac@zimogroup.org
                                </div>
                                </div>
                                <div className='mb-2'>
                                <div className='text-black uppercase text-[12px] font-Lato tracking[2px]'>
                                    AFRICA
                                </div>
                                <div onClick={() => handleClick('press-af@zimogroup.org')} className='text-black text-[12px] font-Lato tracking[2px] cursor-pointer hover:font-bold'>
                                    press-af@zimogroup.org
                                </div>
                                </div>
                                <div className='mb-2'>
                                <div className='text-black uppercase text-[12px] font-Lato tracking[2px]'>
                                    CHINA/HONG KONG
                                </div>
                                <div onClick={() => handleClick('press-ch@zimogroup.org')} className='text-black text-[12px] font-Lato tracking[2px] cursor-pointer hover:font-bold'>
                                    press-ch@zimogroup.org
                                </div>
                                </div>
                    </div>


                    </div>






                

                <div className='flex flex-col md:justify-end justify-start md:items-start   md:w-[5%] w-[20%] md:mr-4 md:mb-4'>
                          <img src='/images/P14QR.png' alt='' />
                      </div>






        </div>
    </div>
    </>
  )
}

export default Footer2