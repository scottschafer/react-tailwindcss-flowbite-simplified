import React from 'react';

function FlowbiteHTMLPage() {
  return (
    <div className="twscdd twscdd-elements">
      <div className="stack-v gap-lg w-full">
        <h1>Flowbite HTML</h1>
        
        {
          ['', 'sm', 'lg'].map(size => (
            <div className="stack-v gap-md w-full items-center" key={`size-${size}`}>
              <label>Buttons {size ? `(${size})` : ''}</label>
              <div className="stack-h gap-lg">
                <button title="Primary Button!" data-tooltip-placement="left" className={`primary ${size}`}>primary</button>
                <button title="Secondary Button!" data-tooltip-placement="right" className={`secondary ${size}`}>secondary</button>
                <button className={`text ${size}`}>text</button>
                <button className={`warning icon-warning ${size}`}>warning</button>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  );}

export default FlowbiteHTMLPage; 