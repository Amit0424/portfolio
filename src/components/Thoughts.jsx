import React, { forwardRef } from 'react'

const Thoughts = forwardRef((props, ref) => {
     return (
          <>
               <section className='pt-8 md:pt-20 lg:pt-20 pb-8 md:pb-12 lg:pb-20 bg-bodyColor dark:bg-bodyColorDarkMode' ref={ref}>
                    <div className="px-4 max-w-5xl mx-auto">
                         <h2 className="text-4xl text-titleColor text-center pb-2 text-titleColor dark:text-titleColorDarkMode">Thoughts</h2>
                         <span className=" text-center block text-sm mb-12 text-titleColor dark:text-titleColorDarkMode">I Wrote What I Felt</span>

                         <div className="mx-auto lg:p-6 py-6">
                              <div className="mx-auto w-fit md:w-1/2 border border-solid border-black dark:border-white border-opacity-10 rounded-xl bg-bodyColor dark:bg-bodyColorDarkMode px-4 sm:px-12 py-8 text-titleColor dark:text-titleColorDarkMode">
                                   <div className='flex items-center gap-6'>
                                        <h3 className="service_title text-h3 mb-4 font-medium ">Coming Soon </h3>
                                   </div>
                                   <div className='flex items-center pb-8'>
                                        <p className="services_model-description ">This Section is Under Development</p>
                                   </div>
                              </div>
                         </div>
                    </div>
               </section>
          </>
     )
})

export default Thoughts