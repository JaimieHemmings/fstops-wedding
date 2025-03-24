'use client'
import React, { useState } from 'react'

interface Question {
  question: string
  answer: string
}

interface AccordionProps {
  questions: Question[]
}

const Accordion: React.FC<AccordionProps> = ({ questions }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  return (
    <div className="space-y-4">
      {questions.map((question, index) => (
        <div 
          key={index} 
          className="border-b border-gray-200 pb-4"
        >
          <button
            onClick={() => toggleAccordion(index)}
            className="w-full text-left font-semibold py-2 flex justify-between items-center"
          >
            {question.question}
            <span className={`transform transition-transform ${activeIndex === index ? 'rotate-180' : ''}`}>
              ↓
            </span>
          </button>
          <div 
            className={`transition-all duration-200 ${
              activeIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
            } overflow-hidden`}
          >
            <p className="py-2 text-gray-600">
              {question.answer}
            </p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Accordion