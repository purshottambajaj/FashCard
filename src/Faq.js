// Faq.js

import React from 'react';
import { Accordion, AccordionItem, AccordionItemHeading, AccordionItemButton, AccordionItemPanel } from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';

const faqItems = [
  {
    question: "What harsh truths do you prefer to ignore?",
    answer: "Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat occaecat ut occaecat consequat est minim minim esse tempor laborum consequat esse adipisicing eu reprehenderit enim."
  },
  {
    question: "Is free will real or just an illusion?",
    answer: "In ad velit in ex nostrud dolore cupidatat consectetur ea in ut nostrud velit in irure cillum tempor laboris sed adipisicing eu esse duis nulla non."
  },
  {
    question: "Is free will real or just an illusion?",
    answer: "In ad velit in ex nostrud dolore cupidatat consectetur ea in ut nostrud velit in irure cillum tempor laboris sed adipisicing eu esse duis nulla non."
  },
  {
    question: "Is free will real or just an illusion?",
    answer: "In ad velit in ex nostrud dolore cupidatat consectetur ea in ut nostrud velit in irure cillum tempor laboris sed adipisicing eu esse duis nulla non."
  },
  
];

const Faq = () => {
  return (
    <div className='container p-3 mx-auto'>
      <Accordion allowZeroExpanded={true} className="border rounded overflow-hidden">
        {faqItems.map((item, index) => (
          <AccordionItem key={index} className={`border-b py-6 ${index === faqItems.length - 1 ? 'border-b-0' : ''}`}>
            <AccordionItemHeading>
              <AccordionItemButton className="bg-gray-200 border border-blue-900 rounded-full p-4 flex justify-between items-center cursor-pointer">
                <span className="text-gray-800 flex-grow truncate">
                  {item.question}
                </span>
                <span className="text-2xl font-bold">+</span>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel className="p-4">
              <p>
                {item.answer}
              </p>
            </AccordionItemPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default Faq;
