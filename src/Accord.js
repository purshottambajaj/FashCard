import React, { useState } from 'react';

function Accord({ items }) {
    const [activeIndex, setActiveIndex] = useState(null);

  return (
    <div className="accordion">
      {items.map((item, index) => (
        <div key={index} className="accordion-item">
          <button
            className="accordion-button"
            onClick={() => setActiveIndex(index)}
          >
            {item.title}
          </button>
          <div
            className={`accordion-content ${
              activeIndex === index ? 'show' : ''
            }`}
          >
            {item.content}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Accord;
