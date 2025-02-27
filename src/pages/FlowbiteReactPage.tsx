import React from 'react';
import { Button } from "flowbite-react";

function FlowbitePage() {
  return (
    <div className="twscdd">
      <div className="stack-v gap-lg w-full">
        <h1>Flowbite and Tailwind</h1>
        
        {
          ['', 'sm', 'lg'].map(size => (
            <div className="stack-v gap-md w-full items-center" key={`size-${size}`}>
              <label>Buttons {size ? `(${size})` : ''}</label>
              <div className="stack-h gap-lg">
                <Button title="Primary Button!" data-tooltip-placement="left" className={`primary ${size}`}>primary</Button>
                <Button title="Secondary Button!" data-tooltip-placement="right" className={`secondary ${size}`}>secondary</Button>
                <Button className={`text ${size}`}>text</Button>
                <Button className={`warning icon-warning ${size}`}>warning</Button>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  );}

export default FlowbitePage; 