import React, { forwardRef } from 'react'

const Projects = forwardRef((props, ref) => {
     const projects = {
          1: {
               'heading': 'PHYSIQUE: A GYM SUPPLIMENT DELIVERY WEBSITE',
               'description-1': 'A marketplace site where gym-supplements can be found and can also order.',
               'description-2': 'Implemented the dynamic content management through Sanity.',
               'tech-used': ' JavaScript | NextJS | Sanity | Zustand',
               'demo-link': 'https://physique.vercel.app',
               'github-link': 'https://github.com/Vikashup2109/Physique'
          },
          2: {
               'heading': 'PHOTU STUDIO: A PLACE TO FIND ROYALTY FREE PHOTOS',
               'description-1': 'A photo gallary site where all photos from Unsplash, Pexels and Pixabay can be found and can also download.',
               'description-2': 'Implemented by fetching data from respective site through API.',
               'tech-used': 'JavaScript | React | APIs | TailwindCSS',
               'demo-link': 'https://photus.vercel.app',
               'github-link': 'https://github.com/Vikashup2109/Photus'
          },
          3: {
               'heading': 'Vikash: My Personal Portfolio Website.',
               'description-1': 'A place where one can find all professional details about me.',
               'description-2': 'Used MongoDB database to update details.',
               'tech-used': 'JavaScript | React | TailwindCSS | MongoDB ',
               'demo-link': '',
               'github-link': ''
          },
          4: {
               'heading': 'pc-beast: A one pager portfolio website.',
               'description-1': 'Minimilistic one Page Website having all the professional details.',
               'description-2': 'Made this for a leading Open Source Contributer.',
               'tech-used': 'JavaScript | React | TailwindCSS | CSS | Vercel',
               'demo-link': 'https://photus.vercel.app',
               'github-link': 'https://github.com/pc-beast/pc-beast-portfolio'
          },
          5: {
               'heading': 'OPEN VOICE: A REAL TIME VOICE CHAT PLATFORM(ONGOING)',
               'description-1': 'Platform for real-time voice chatting after room creation with proper authentication System.',
               'description-2': 'Can do CRUD Operations with Rooms in this platform.',
               'tech-used': 'JavaScript | React | NodeJS | MongoDB | Express | Material- ui',
               'demo-link': '',
               'github-link': ''
          }
     }
     return (
          <>
               <section className='pt-8 md:pt-20 lg:pt-20 pb-8 md:pb-12 lg:pb-20 bg-bodyColor dark:bg-bodyColorDarkMode' ref={ref}>
                    <div className="px-4 max-w-6xl mx-auto">
                         <h2 className="text-4xl text-titleColor text-center pb-2 text-titleColor dark:text-titleColorDarkMode">Projects</h2>
                         <span className=" text-center block text-sm mb-12 text-titleColor dark:text-titleColorDarkMode">What I Delivered</span>

                         <div className="service_container mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 lg:p-6 py-6">

                              {Object.values(projects).map(project => {
                                   return (
                                        <div className="service_content border border-solid border-black border-opacity-10 rounded-xl bg-containerColor dark:bg-containerColorDarkMode px-4 sm:px-6 py-8">
                                             <h3 className="service_title text-normal mb-4 font-bold uppercase text-titleColor dark:text-titleColorDarkMode">{project.heading}</h3>
                                             <div className='flex items-center pb-8'>
                                                  <ul className="project_description-list list-disc list-inside text-small">
                                                       <li className="project_description-li py-3 text-titleColor dark:text-titleColorDarkMode">{project['description-1']}</li>
                                                       <li className="project_description-li py-3 text-titleColor dark:text-titleColorDarkMode">{project['description-2']}</li>
                                                  </ul>
                                             </div>
                                             <div className='flex items-center pb-4'>
                                                  <h3 className="tech_used text-titleColor text-small font-bold text-titleColor dark:text-titleColorDarkMode">{project['tech-used']}</h3>
                                             </div>
                                             <div className='flex items-center pt-2 justify-between'>
                                                  <a href={project['demo-link']} className="inline-block bg-titleColor/90 dark:bg-titleColorDarkMode/90 py-1 px-3 rounded-xl button--flex text-containerColor dark:text-containerColorDarkMode" target="_blank" rel="noreferrer">
                                                       <span>Demo</span>
                                                  </a>
                                                  <a href={project['github-link']} className="inline-block bg-titleColor/90 dark:bg-titleColorDarkMode/90 py-1 px-3 rounded-xl button--flex text-containerColor dark:text-containerColorDarkMode" target="_blank" rel="noreferrer">
                                                       <span>Code</span>
                                                  </a>
                                             </div>
                                        </div>
                                   )
                              })}
                              <div className="service_content border border-solid border-black border-opacity-10 rounded-xl bg-containerColor dark:bg-containerColorDarkMode px-4 sm:px-6 py-8 my-auto">
                                   <h3 className="text-normal mb-4 font-bold uppercase text-titleColor dark:text-titleColorDarkMode">Find out more projects </h3>
                                   <a href='https://github.com/Vikashup2109?tab=repositories' className="text-normal mb-4 space-x-4 cursor-pointer text-titleColor dark:text-titleColorDarkMode" target="_blank" rel="noreferrer">
                                        <span>Check Out here</span>
                                        <i className="uil uil-arrow-right text-h3 hover:translate-x-1"></i>
                                        <i className="uil uil-github-alt font-bold text-h2"></i>
                                   </a>

                              </div>

                         </div>
                    </div>
               </section>
          </>
     )
})

export default Projects