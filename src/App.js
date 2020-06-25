import React from 'react';
import Accordion from './components/Accordion';
import AccordionItem from './components/Accordion/AccordionItem';
import RightContentSection from './components/RightContentSection';

import angularLogo from './images/angular-logo.svg';
import emberLogo from './images/ember-logo.svg';
import railsLogo from './images/rails-logo.svg';
import reactLogo from './images/react-logo.svg';
import tailwindLogo from './images/tailwind-logo.png';
import webpackLogo from './images/webpack-logo.svg';

const App = () => {
  return (
    <React.Fragment>
      <section className="md:flex md:justify-start md:space-x-8 mb-8">
        <div className="md:w-1/6">
          <h1 className="mb-4 text-xl text-center text-gray-800 md:text-right md:py-1">About Me</h1>
        </div>
        <div className="w-full md:w-5/6">
          <RightContentSection>
            <p className="mb-8 text-gray-800">
              My name is Dan Caccavano. I am a software engineer and I have been
              developing applications for over 10 years. My passion is front end
              web development, as well as a healthy amount of cross-over with
              product and UX/UI design, but I have experience across many parts of
              the software stack. I have worked at large 10,000+ employee
              enterprise software companies, as well as scrappy startups.
              I love working on interesting projects and building amazing applications.
            </p>
            <p className="text-gray-800">
              I am also the father of two amazing daughters, I live in Portland, OR,
              and when I am not coding, I love woodworking, doing arts and craft
              and having adventures with the kiddos, listening to my records,
              playing board games, and hiking.
            </p>
          </RightContentSection>
        </div>
      </section>
      <section className="md:flex md:justify-start md:space-x-8 mb-8">
        <div className="md:w-1/6">
          <h1 className="mb-4 text-xl text-center text-gray-800 md:text-right md:py-1">Skills</h1>
        </div>
        <div className="w-full md:w-5/6">
          <RightContentSection>
            <p className="mb-8 text-gray-800">
              For over 10 years I have worked with many different languages
              and frameworks and I have cultivated expertise in the following:
            </p>
            <div className="flex flex-row justify-around md:items-baseline">
              <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer" className="mb-4 md:mb-0 group flex items-center flex-col">
                <img className="transition-all duration-300 h-8 mb-2 opacity-50 group-hover:opacity-100" alt="framework-logo" src={reactLogo}/>
                <span className="transition-all duration-300 text-gray-600 group-hover:text-gray-800">Reactjs</span>
              </a>
              <a href="https://rubyonrails.org/" target="_blank" rel="noopener noreferrer" className="mb-4 md:mb-0 group flex items-center flex-col">
                <img className="transition-all duration-300 h-8 mb-2 opacity-50 group-hover:opacity-100" alt="framework-logo" src={railsLogo}/>
                <span className="transition-all duration-300 text-gray-600 group-hover:text-gray-800">Ruby on Rails</span>
              </a>
              <a href="https://emberjs.com/" target="_blank" rel="noopener noreferrer" className="mb-4 md:mb-0 group flex items-center flex-col">
                <img className="transition-all duration-300 h-8 mb-2 opacity-50 group-hover:opacity-100" alt="framework-logo" src={emberLogo}/>
                <span className="transition-all duration-300 text-gray-600 group-hover:text-gray-800">Emberjs</span>
              </a>
              <a href="https://tailwindcss.com/" target="_blank" rel="noopener noreferrer" className="mb-4 md:mb-0 group flex items-center flex-col">
                <img className="transition-all duration-300 h-8 mb-2 opacity-50 group-hover:opacity-100" alt="framework-logo" src={tailwindLogo}/>
                <span className="transition-all duration-300 text-gray-600 group-hover:text-gray-800">tailwindcss</span>
              </a>
              <a href="https://angular.io/" target="_blank" rel="noopener noreferrer" className="mb-4 md:mb-0 group flex items-center flex-col">
                <img className="transition-all duration-300 h-8 mb-2 opacity-50 group-hover:opacity-100" alt="framework-logo" src={angularLogo}/>
                <span className="transition-all duration-300 text-gray-600 group-hover:text-gray-800">Angularjs</span>
              </a>
              <a href="https://webpack.js.org/" target="_blank" rel="noopener noreferrer" className="mb-4 md:mb-0 group flex items-center flex-col">
                <img className="transition-all duration-300 h-8 mb-2 opacity-50 group-hover:opacity-100" alt="framework-logo" src={webpackLogo}/>
                <span className="transition-all duration-300 text-gray-600 group-hover:text-gray-800">Webpack</span>
              </a>
            </div>
          </RightContentSection>
        </div>
      </section>
      <section className="md:flex md:justify-start md:space-x-8 mb-8">
        <div className="md:w-1/6">
          <h1 className="mb-4 text-xl text-center text-gray-800 md:text-right md:py-1">Experience</h1>
        </div>
        <div className="w-full md:w-5/6">
          <Accordion>
            <AccordionItem date={'July 2017 - June 2020'} position={'Sr. Software Engineer'} company={'VerticalChange'}>
              <React.Fragment>
                <div className="text-gray-600 md:hidden" >July 2017 - June 2020</div>
                <p className="my-2 italic">
                  At VerticalChange, we built ambitious software solutions for nonprofits
                  and government agencies. Our clients used our off the shelf software as
                  well as custom tailored experiences just for them. While there, my
                  projects included:
                </p>
                <ul className="list-disc pl-4">
                  <li className="mb-2">
                    Implementing a complete overhaul of our UI using css-modules and
                    custom designed components
                  </li>
                  <li className="mb-2">
                    Helping to update our stack to use webpack and react in lieu of a
                    legacy angular framework
                  </li>
                  <li className="mb-2">
                    Building a complete attendance tracking solution from the ground up
                    with the capability of tracking thousands of early childhood students
                  </li>
                  <li className="mb-2">
                    Updating and enhancing nearly every facet of our product from our
                    form builder to our reports and contact tracking systems
                  </li>
                </ul>
              </React.Fragment>
            </AccordionItem>
            <AccordionItem date={'October 2014 - July 2017'} position={'Sr. Software Engineer'} company={'Citrix'}>
              <React.Fragment>
                <div className="text-gray-600 md:hidden">October 2014 - July 2017</div>
                <p className="my-2 italic">
                  At Citrix, I was brought in as part of an acquisition of RightSignature,
                  an online document signing application. While at Citrix I worked heavily on:
                </p>
                <ul className="list-disc pl-4">
                  <li className="mb-2">
                    Integrating the RightSignature experience into different workflows
                    and applications within Citrix
                  </li>
                  <li className="mb-2">
                    Completely overhauling the UI of RightSignature to better adhere to
                    the rest of the Citrix software ecosystem using Emberjs and Sass
                  </li>
                </ul>React.Fragment
              </React.Fragment>
            </AccordionItem>
            <AccordionItem date={'April 2013 - October 2014'} position={'Software Engineer'} company={'RightSignature'}>
              <React.Fragment>
                <div className="text-gray-600 md:hidden">April 2013 - October 2014</div>
                <p className="my-2 italic">
                  At RightSignature we built an ambitious product that allowed people
                  to fill out and sign documents online. We were the underdog in a growing
                  market but we regularly punched way above our weight as a small
                  development team. Some notable projects included:
                </p>
                <ul className="list-disc pl-4">
                  <li className="mb-2">
                    Building a separate application from the ground up with the latest
                    (at the time) Angularjs concepts
                  </li>
                  <li className="mb-2">
                    Helping to rebuild our form building experience to make it quicker
                    and easier to turn a physical form into a digital one using advanced
                    techniques, such as automatically detecting where form fields needed
                    to be placed.
                  </li>
                </ul>
              </React.Fragment>
            </AccordionItem>
            <AccordionItem date={'June 2011 - April 2013'} position={'Software Engineer'} company={'ELC Technologies'}>
              <React.Fragment>
                <div className="text-gray-600 md:hidden">June 2011 - April 2013</div>
                <p className="my-2 italic">
                  ELC was a consultancy where we worked on vastly different projects for
                  different clients. Engagements lasted from a couple of months to
                  several years. I got my start at ELC  and while there, I worked on
                  several key projects including a social networking platform for ESPN
                  used by thousands, a platform for up and coming filmmakers called
                  JuntoBox Films, an online exercise platform for crossfit enthusiasts,
                  and many other internal and external projects.
                </p>
              </React.Fragment>
            </AccordionItem>
          </Accordion>
        </div>
      </section>
      <section className="md:flex md:justify-start md:space-x-8 mb-8">
        <div className="md:w-1/6">
          <h1 className="mb-4 text-xl text-center text-gray-800 md:text-right md:py-1">Contact</h1>
        </div>
        <div className="w-full md:w-5/6">
          <RightContentSection>
            <form name="contact" method="POST" data-netlify="true">
              <input type="hidden" name="form-name" value="contact" />
              <div className="mb-4">
                <label for="name" class="block text-sm leading-5 font-medium text-gray-700">Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="rounded-md shadow-sm form-input block w-1/2 py-2 px-4 sm:text-sm sm:leading-5 border border-gray-400 mt-1 outline-none focus:shadow-focus focus:bg-blue-100"
                  placeholder="John Doe"
                />
              </div>
              <div className="mb-4">
                <label for="email" class="block text-sm leading-5 font-medium text-gray-700">Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="rounded-md shadow-sm form-input block w-1/2 py-2 px-4 sm:text-sm sm:leading-5 border border-gray-400 mt-1 outline-none focus:shadow-focus focus:bg-blue-100"
                  placeholder="johndoe@example.com"
                />
              </div>
              <div className="mb-4">
                <label for="message" class="block text-sm leading-5 font-medium text-gray-700">Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="rounded-md shadow-sm form-input block w-1/2 py-2 px-4 sm:text-sm sm:leading-5 border border-gray-400 mt-1 outline-none focus:shadow-focus focus:bg-blue-100"
                  placeholder="Hello"
                />
              </div>
              <button type="submit" className="px-4 py-2 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-blue-600 hover:bg-blue-500 focus:outline-none focus:shadow-outline-blue focus:border-blue-700 active:bg-blue-700 transition duration-150 ease-in-out">Send</button>
            </form>
          </RightContentSection>
        </div>
      </section>
    </React.Fragment>
  );
}

export default App;
