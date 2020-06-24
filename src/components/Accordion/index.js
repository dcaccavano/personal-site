import React from 'react';
import AccordionItem from './AccordionItem';

const Accordion = () => {
  return (
    <React.Fragment>
      <AccordionItem title={'Senior Software Engineer at VerticalChange'}>
        <React.Fragment>
          <div>July 2017 - June 2020</div>
          <p>
            At VerticalChange, we built ambitious software solutions for nonprofits
            and government agencies. Our clients used our off the shelf software as
            well as custom tailored experiences just for them. While there, my
            projects included:
          </p>
          <ul>
            <li>
              Implementing a complete overhaul of our UI using css-modules and
              custom designed components
            </li>
            <li>
              Helping to update our stack to use webpack and react in lieu of a
              legacy angular framework
            </li>
            <li>
              Building a complete attendance tracking solution from the ground up
              with the capability of tracking thousands of early childhood students
            </li>
            <li>
              Updating and enhancing nearly every facet of our product from our
              form builder to our reports and contact tracking systems
            </li>
          </ul>
        </React.Fragment>
      </AccordionItem>
      <AccordionItem title={'Senior Software Engineer at Citrix'}>
        <React.Fragment>
          <div>October 2014 - July 2017</div>
          <p>
            At Citrix, I was brought in as part of an acquisition of RightSignature,
            an online document signing application. While at Citrix I worked heavily on:
          </p>
          <ul>
            <li>
              Integrating the RightSignature experience into different workflows
              and applications within Citrix
            </li>
            <li>
              Completely overhauling the UI of RightSignature to better adhere to
              the rest of the Citrix software ecosystem using Emberjs and Sass
            </li>
          </ul>
        </React.Fragment>
      </AccordionItem>
      <AccordionItem title={'Software Engineer at RightSignature'}>
        <React.Fragment>
          <div>April 2013 - October 2014</div>
          <p>
            At RightSignature we built an ambitious product that allowed people
            to fill out and sign documents online. We were the underdog in a growing
            market but we regularly punched way above our weight as a small
            development team. Some notable projects included:
          </p>
          <ul>
            <li>
              Building a separate application from the ground up with the latest
              (at the time) Angularjs concepts
            </li>
            <li>
              Helping to rebuild our form building experience to make it quicker
              and easier to turn a physical form into a digital one using advanced
              techniques, such as automatically detecting where form fields needed
              to be placed.
            </li>
          </ul>
        </React.Fragment>
      </AccordionItem>
      <AccordionItem title={'Software Engineer at ELC Technologies'}>
        <React.Fragment>
          <div>June 2011 - April 2013</div>
          <p>
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
    </React.Fragment>
  );
};

export default Accordion;
