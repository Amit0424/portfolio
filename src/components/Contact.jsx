import React, { forwardRef } from 'react'

const Contact = forwardRef((props, ref) => {
     return (
          <>
               <section className='w-full pt-8 md:pt-20 lg:pt-20 pb-8 md:pb-12 lg:pb-20 bg-bodyColor dark:bg-bodyColorDarkMode' ref={ref}>
                    <div className="px-4 max-w-full xsm:max-w-5xl mx-auto">
                         <h2 className="text-4xl text-titleColor dark:text-titleColorDarkMode text-center pb-2">Contact Me</h2>
                         <span className="text-center block text-sm mb-4 text-titleColor dark:text-titleColorDarkMode">Get in Touch</span>
                         <span className="text-center block text-normal sm:text-h3 mb-12 text-titleColor dark:text-titleColorDarkMode p-4 bg-containerColor dark:bg-containerColorDarkMode w-fit mx-auto
                                             border-2 border-black border-opacity-10 rounded-xl text-center"># I am available for hire and open to any ideas of cooperation.</span>

                         <div className="flex flex-col md:flex-row justify-center sm:gap-4 lg:gap-24 pb-12 mx-auto">
                              <div className="w-full md:w-2/6 lg:w-1/2">
                                   <h3 className="text-center text-h3 font-medium mb-6 text-titleColor dark:text-titleColorDarkMode">Talk to me</h3>
                                   <div className="mx-auto grid grid-cols-1 gap-6 justify-center pb-12">

                                        <div className="w-56 xsm:w-80 sm:w-96 md:w-36 lg:w-96 mx-auto bg-containerColor dark:bg-containerColorDarkMode border border-black border-opacity-10 rounded-xl text-center px-4 sm:px-4 pb-4">
                                             <i className="uil uil-fast-mail text-h1 text-titleColor dark:text-titleColorDarkMode"></i>
                                             <h3 className="title text-small font-bold text-titleColor dark:text-titleColorDarkMode">Email</h3>
                                             <span className="data text-small block sm:hidden lg:block mb-3 text-titleColor dark:text-titleColorDarkMode">amitjat2406@gmail.com</span>
                                             <a href="mailto:amitjat2406@gmail.com"
                                                  className=" text-titleColor dark:text-titleColorDarkMode text-small inline-flex items-center justify center gap-1"
                                                  target="_blank" rel="noreferrer"
                                             > Write Me
                                                  <i className="uil uil-arrow-right text-normal"></i>
                                             </a>
                                        </div>

                                        <div className="w-56 xsm:w-80 sm:w-40 lg:w-96 mx-auto bg-containerColor dark:bg-containerColorDarkMode border border-black border-opacity-10 rounded-xl text-center px-4 sm:px-4 py-4">
                                             <i className="uil uil-linkedin-alt text-h2 text-titleColor dark:text-titleColorDarkMode"></i>
                                             <h3 className="text-small font-bold mt-4 text-titleColor dark:text-titleColorDarkMode">LinkedIn</h3>
                                             <span className="text-small block sm:hidden lg:block mb-3 text-titleColor dark:text-titleColorDarkMode">@Amit0424</span>
                                             <a href="https://linkedin.com/in/Amit0424"
                                                  className=" text-titleColor dark:text-titleColorDarkMode text-small inline-flex items-center justify center gap-1"
                                                  target="_blank" rel="noreferrer"
                                             > Connect
                                                  <i className="uil uil-arrow-right text-normal"></i>
                                             </a>
                                        </div>

                                        <div className="w-56 xsm:w-80 sm:w-40 lg:w-96 mx-auto bg-containerColor dark:bg-containerColorDarkMode border border-black border-opacity-10 rounded-xl text-center px-4 sm:px-4 py-4">
                                             <i className="uil uil-whatsapp text-h2 text-titleColor dark:text-titleColorDarkMode"></i>
                                             <h3 className="text-small font-bold mt-2 text-titleColor dark:text-titleColorDarkMode">Whatsapp</h3>
                                             <span className="text-small block sm:hidden lg:block mb-3 text-titleColor dark:text-titleColorDarkMode">+91 8561911466</span>
                                             <a href={`https://api.whatsapp.com/send?phone=918561911466&text=Hey`}
                                                  className=" text-titleColor dark:text-titleColorDarkMode text-small inline-flex items-center justify center gap-1"
                                                  target="_blank" rel="noreferrer"
                                             > Write Me
                                                  <i className="uil uil-arrow-right text-normal"></i>
                                             </a>
                                        </div>
                                   </div>
                              </div>
                              <div className="w-full md:w-4/6 lg:w-1/2">
                                   <h3 className="text-center text-h3 font-medium mb-6 text-titleColor dark:text-titleColorDarkMode">Write me your project</h3>
                                   <form action="" className="w-60 xsm:w-80 md:w-96 mx-auto">

                                        <div className="relative mb-8 h-16">
                                             <label htmlFor="" className="absolute -top-3 left-5 text-smaller p-1 bg-bodyColor dark:bg-bodyColorDarkMode text-titleColor dark:text-titleColorDarkMode">Name</label>
                                             <input
                                                  type="text"
                                                  name='name'
                                                  className='top-0 left-0 w-full h-full border-2 border-solid border-black dark:border-white border-opacity-30 bg-inherit text-textColor outline-0 rounded-xl p-6'
                                                  placeholder='Insert your Name'
                                             />
                                        </div>
                                        <div className="relative mb-8 h-16">
                                             <label htmlFor="" className="absolute -top-3 left-5 text-smaller p-1 bg-bodyColor dark:bg-bodyColorDarkMode text-titleColor dark:text-titleColorDarkMode">Email</label>
                                             <input
                                                  type="email"
                                                  name='email'
                                                  className='top-0 left-0 w-full h-full border-2 border-solid border-black dark:border-white border-opacity-30 bg-inherit text-textColor outline-0 rounded-xl p-6'
                                                  placeholder='Insert your Email'
                                             />
                                        </div>
                                        <div className="relative mb-8">
                                             <label htmlFor="" className="absolute -top-3 left-5 text-smaller p-1 bg-bodyColor dark:bg-bodyColorDarkMode text-titleColor dark:text-titleColorDarkMode">Project</label>
                                             <textarea name="project" cols="30" rows="10"
                                                  className='resize-none top-0 left-0 w-full h-full border-2 border-solid border-black dark:border-white border-opacity-30 bg-inherit text-textColor outline-0 rounded-xl p-6'
                                                  placeholder='Write your project'
                                             ></textarea>
                                        </div>
                                        <button className="button button--flex bg-titleColor dark:bg-titleColorDarkMode space-x-2 my-4 text-containerColor dark:text-containerColorDarkMode">
                                             <span>Send Message</span>
                                             <i className="uil uil-location-arrow"></i>
                                        </button>
                                   </form>
                              </div>
                         </div>
                    </div>
               </section>
          </>
     )
})

export default Contact