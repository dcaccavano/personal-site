import React from 'react';
import Accordion from './components/Accordion';
import AccordionItem from './components/Accordion/AccordionItem';
import RightContentSection from './components/RightContentSection';

import linkedin from './images/linkedin.svg';
import github from './images/github.svg';

const App = () => {
  return (
    <div className="p-8 rounded-xlg shadow-mainInset">
      <section className="md:flex md:justify-start md:space-x-12 mb-8">
        <div className="md:w-1/3">
          <h1 className="mb-4 text-5xl font-light font-mainSerif text-center text-main md:text-right md:py-1">Dan Caccavano</h1>
          <div className="flex items-center justify-around md:justify-end md:space-x-4 md:w-full w-1/4 md:mx-0 mx-auto mb-8">
            <a href="https://www.linkedin.com/in/dcaccavano/" target="_blank" rel="noopener noreferrer">
              <img className="transition-all duration-300 h-8 hover:shadow-md hover:opacity-100 opacity-25 rounded-full" src={linkedin} alt="linkedin-logo"/>
            </a>
            <a href="https://github.com/dcaccavano" target="_blank" rel="noopener noreferrer">
              <img className="transition-all duration-300 h-8 hover:shadow-md hover:opacity-100 opacity-25 rounded-full" src={github} alt="github-logo"/>
            </a>
          </div>
        </div>
        <div className="w-full md:w-2/3">
          <RightContentSection>
            <p className="mb-8 text-gray-800 text-lg leading-relaxed">
              I am a <span className="font-semibold">front end software engineer </span> and I have been
              developing applications for over <span className="font-semibold">10 years. </span>
              I have worked at large 10,000+ employee
              enterprise software companies, as well as scrappy startups.
              I love working on interesting projects and building amazing applications.
            </p>
            <p className="mb-8 text-gray-800 text-lg leading-relaxed">
              I am also the father of two amazing daughters, I live in Portland, OR,
              and when I am not coding, I love woodworking, doing arts and craft
              and having adventures with the kiddos, listening to my records,
              playing board games, and hiking.
            </p>
            <p className="mb-8 text-gray-800 text-lg leading-relaxed">
              I have extensive experience using
              <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer" className="ml-1 text-red-500 hover:underline">
                Reactjs
              </a>
              ,
              <a href="https://rubyonrails.org/" target="_blank" rel="noopener noreferrer" className="ml-1 text-red-500 hover:underline">
                Ruby on Rails
              </a>
              ,
              <a href="https://emberjs.com/" target="_blank" rel="noopener noreferrer" className="ml-1 text-red-500 hover:underline">
                Reactjs
              </a>
              ,
              <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer" className="ml-1 text-red-500 hover:underline">
                Emberjs
              </a>
              ,
              <a href="https://tailwindcss.com/" target="_blank" rel="noopener noreferrer" className="ml-1 text-red-500 hover:underline">
                tailwindcss
              </a>
              , and
              <a href="https://webpack.js.org/" target="_blank" rel="noopener noreferrer" className="ml-1 text-red-500 hover:underline">
                Webpack
              </a>
              .
            </p>
          </RightContentSection>
        </div>
      </section>
      <section className="md:flex md:justify-start md:space-x-12 mb-8">
        <div className="md:w-1/3">
          <h2 className="mb-4 text-4xl font-light font-mainSerif text-center text-main md:text-right md:py-1">Experience</h2>
        </div>
        <div className="w-full md:w-2/3">
          <Accordion>
            <AccordionItem date={'July 2017 - June 2020'} position={'Sr. Software Engineer'} company={'VerticalChange'}>
              <React.Fragment>
                <div className="text-main md:hidden" >July 2017 - June 2020</div>
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
                <div className="text-main md:hidden">October 2014 - July 2017</div>
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
                <div className="text-main md:hidden">April 2013 - October 2014</div>
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
                <div className="text-main md:hidden">June 2011 - April 2013</div>
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
      <section className="md:flex md:justify-start md:space-x-12 mb-8">
        <div className="md:w-1/3">
          <h2 className="mb-4 text-4xl font-light font-mainSerif text-center text-main md:text-right md:py-1">Education</h2>
        </div>
        <div className="w-full md:w-2/3">
          <RightContentSection>
            <ul className="text-lg">
              <li className="mb-4"><span className="font-normal">Master of Arts in Teaching</span> University of Portland - 2007</li>
              <li className="mb-4"><span className="font-normal">BA in English Literature</span> University of Portland - 2005</li>
            </ul>
          </RightContentSection>
        </div>
      </section>
      <section className="md:flex md:justify-start md:space-x-12 mb-8">
        <div className="md:w-1/3">
          <h2 className="mb-4 text-4xl font-light font-mainSerif text-center text-main md:text-right md:py-1">Contact</h2>
        </div>
        <div className="w-full md:w-2/3">
          <RightContentSection>
            <form name="contact" method="POST" data-netlify="true">
              <input type="hidden" name="form-name" value="contact" />
              <div className="mb-4 mx-auto md:mx-0 md:w-3/4">
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="rounded-full shadow-sm form-input placeholder-gray-700 text-gray-800 block w-full py-4 px-6 sm:text-sm sm:leading-5 bg-mainBg shadow-mainInset mt-1 outline-none"
                  placeholder="Name"
                />
              </div>
              <div className="mb-4 mx-auto md:mx-0 md:w-3/4">
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="rounded-full shadow-sm form-input placeholder-gray-700 text-gray-800 block w-full py-4 px-6 sm:text-sm sm:leading-5 bg-mainBg shadow-mainInset mt-1 outline-none"
                  placeholder="Email address"
                />
              </div>
              <div className="mb-4 mx-auto md:mx-0 md:w-3/4">
                <textarea
                  id="message"
                  name="message"
                  className="rounded-xlg shadow-sm form-input placeholder-gray-700 text-gray-800 block w-full py-4 px-6 sm:text-sm sm:leading-5 bg-mainBg shadow-mainInset mt-1 outline-none"
                  placeholder="Message"
                />
              </div>
              <button type="submit" className="w-full md:w-auto px-8 py-3 border border-transparent text-sm leading-5 font-semibold rounded-full shadow-mainOutset text-white bg-main hover:shadow-mainFocus focus:outline-none transition duration-300 ease-in-out">Send</button>
            </form>
          </RightContentSection>
        </div>
      </section>
    </div>
  );
}

export default App;
