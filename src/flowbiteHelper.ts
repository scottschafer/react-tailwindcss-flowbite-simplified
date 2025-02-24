/**
 * Iterate through all elements after the document is loaded that have a title attribute and create a
 * flowbite tooltip for them.
 */

import { initPopovers } from "flowbite";

const flowbiteHelper = () => {
  // Find all elements with a title attribute
  const elementsWithTitle = document.querySelectorAll('[title]');
  
  let idIndex = 1;
  elementsWithTitle.forEach((element, index) => {
    // Create a unique tooltip ID
    let tooltipId;
    while (true) {
      tooltipId = `generated-tooltip-${idIndex}`;
      if (!document.getElementById(tooltipId)) break;
      idIndex++;
    }
    
    // Get the tooltip content from the title attribute
    const tooltipContent = element.getAttribute('title') || '';
    
    // Set the data-tooltip-target attribute and remove the title
    element.setAttribute('data-title', tooltipContent);
    element.setAttribute('data-tooltip-target', tooltipId);
    element.removeAttribute('title');
    
    // Create the tooltip div
    const tooltipDiv = document.createElement('div');
    tooltipDiv.id = tooltipId;
    tooltipDiv.setAttribute('role', 'tooltip');
    tooltipDiv.setAttribute('data-popper-placement', 'top');
    tooltipDiv.className = 'absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-xs opacity-0 tooltip dark:bg-gray-700';
    tooltipDiv.innerHTML = `
      ${tooltipContent}
      <div class="tooltip-arrow" data-popper-arrow></div>
    `;
    
    // Insert the tooltip div after the element
    element.insertAdjacentElement('afterend', tooltipDiv);
  });
  initPopovers();
};

let initialized = false;
export const initFlowbiteHelper = () => {
  // return;
  if (initialized) return;
  // Run the helper when the DOM is fully loaded
  document.addEventListener('DOMContentLoaded', flowbiteHelper);
  initialized = true;
  setTimeout(() => {
    flowbiteHelper();
  });
}