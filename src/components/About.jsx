import React, { forwardRef } from 'react'
import Photo from '../assets/avatar2.png';


const About = forwardRef((props, ref) => {
     return (
       <>
         <section
           className="pt-8 md:pt-20 lg:pt-20 pb-8 md:pb-12 lg:pb-20 bg-bodyColor dark:bg-bodyColorDarkMode"
           ref={ref}
         >
           <div className="px-4 max-w-5xl mx-auto">
             <h2 className="text-4xl text-titleColor dark:text-titleColorDarkMode text-center pb-2">
               About Me
             </h2>
             <span className=" text-center block text-sm mb-12 text-titleColor dark:text-titleColorDarkMode">
               My Introduction
             </span>
             <div className="container mx-auto grid grid-cols-1 gap-10 lg:gap-6 lg:grid-cols-2">
               <img
                 src={Photo}
                 alt="main_image"
                 className="h-56 lg:h-[350px] rounded-3xl justify-self-center"
               />

               {/* About Info */}
               <div className="text-center lg:text-left px-auto lg:pr-6 w-full">
                 <div className="justify-center grid grid-cols-2 xsm:grid-cols-3 gap-2 mb-8 w-11/12 mx-auto">
                   <div className="bg-containerColor dark:bg-containerColorDarkMode border border-solid border-black border-opacity-10 rounded-xl text-center py-2 px-1 sm:py-3 sm:px-2 lg:py-4 lg:px-5">
                     <i className="uil uil-award-alt about_icon text-3xl text-titleColor dark:text-titleColorDarkMode mb-2"></i>
                     <h3 className="text-small font-medium text-titleColor dark:text-titleColorDarkMode">
                       Experience
                     </h3>
                     <span className="text-tiny text-titleColor dark:text-titleColorDarkMode">
                       1+ Years
                     </span>
                   </div>
                   <div className="bg-containerColor dark:bg-containerColorDarkMode border border-solid border-black border-opacity-10 rounded-xl text-center py-2 px-1 sm:py-3 sm:px-2 lg:py-4 lg:px-5">
                     <i className="uil uil-bag-alt about_icon text-3xl text-titleColor dark:text-titleColorDarkMode mb-2"></i>
                     <h3 className="text-small font-medium text-titleColor dark:text-titleColorDarkMode">
                       Completed
                     </h3>
                     <span className="text-tiny text-titleColor dark:text-titleColorDarkMode">
                       5+ Project
                     </span>
                   </div>
                   <div className="bg-containerColor dark:bg-containerColorDarkMode border border-solid border-black border-opacity-10 rounded-xl text-center py-2 px-1 sm:py-3 sm:px-2 lg:py-4 lg:px-5">
                     <i className="uil uil-headphones-alt about_icon text-3xl text-titleColor dark:text-titleColorDarkMode mb-2"></i>
                     <h3 className="text-small font-medium text-titleColor dark:text-titleColorDarkMode">
                       {" "}
                       Support
                     </h3>
                     <span className="text-tiny text-titleColor dark:text-titleColorDarkMode">
                       Online 24/7
                     </span>
                   </div>
                 </div>
                 {/* About Description */}

                 <p className="p-0 sm:pr-20 sm:pl-20 lg:p-0 lg:pr-5 mb-3 text-titleColor dark:text-titleColorDarkMode">
                   <strong>Mobile App Developer</strong>, I create mobile apps
                   that are fast, and built with best practices. My journey of a
                   developer started a year ago and I am working as Flutter
                   Developer in a start-up and have done many freelancing
                   projects right from scratch.
                 </p>

                 {/* About Social Button */}
                 <div className="flex justify-between">
                   <a
                     href="https://www.linkedin.com/in/amit0424/"
                     target="_blank"
                     className="button button--flex bg-titleColor dark:bg-titleColorDarkMode space-x-2 my-10 text-containerColor dark:text-containerColorDarkMode"
                     rel="noreferrer"
                   >
                     <span>LinkedIn </span>
                     <i className="uil uil-linkedin-alt text-xl"></i>
                   </a>
                   <a
                     href="https://github.com/Amit0424"
                     target="_blank"
                     className="button button--flex bg-titleColor dark:bg-titleColorDarkMode space-x-2 my-10 text-containerColor dark:text-containerColorDarkMode"
                     rel="noreferrer"
                   >
                     <span>Github </span>
                     <i className="uil uil-github-alt text-xl"></i>
                   </a>
                 </div>
               </div>
             </div>
           </div>
         </section>
       </>
     );
}
)

export default About