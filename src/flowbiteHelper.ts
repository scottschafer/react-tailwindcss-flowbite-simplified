/**
 * Iterate through all elements after the document is loaded that have a title attribute and create a
 * flowbite tooltip for them.
 */

import { initPopovers, initTooltips } from "flowbite";

const flowbiteHelper = () => {
  try {
    // Find all elements with a title attribute
    const elementsWithTitle = document.querySelectorAll('[title]');
    
    if (elementsWithTitle.length === 0) {
      console.debug('No elements with title attribute found');
      return;
    }
    
    let idIndex = 1;
    elementsWithTitle.forEach((element) => {
      // Create a unique tooltip ID
      let tooltipId;
      while (true) {
        tooltipId = `generated-tooltip-${idIndex}`;
        if (!document.getElementById(tooltipId)) break;
        idIndex++;
      }
      
      // Get the tooltip content from the title attribute
      const tooltipContent = element.getAttribute('title') || '';
      
      // Set the data-title attribute and remove the title
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
    
    // Initialize popovers
    initTooltips();
    console.debug('Flowbite tooltips initialized');
  } catch (error) {
    console.error('Error initializing flowbite tooltips:', error);
  }
};

let initialized = false;
export const initFlowbiteHelper = () => {
  if (initialized) return;
  
  // Run the helper when the DOM is fully loaded
  document.addEventListener('DOMContentLoaded', flowbiteHelper);
  
  // Also run after a short delay to catch dynamically loaded content
  setTimeout(() => {
    flowbiteHelper();
  }, 100);
  
  // Add a mutation observer to handle dynamically added elements
  const observer = new MutationObserver((mutations) => {
    let shouldRun = false;
    mutations.forEach(mutation => {
      if (mutation.addedNodes.length > 0) {
        for (let i = 0; i < mutation.addedNodes.length; i++) {
          const node = mutation.addedNodes[i];
          if (node.nodeType === 1 && (node as Element).hasAttribute('title')) {
            shouldRun = true;
            break;
          }
        }
      }
    });
    
    if (shouldRun) {
      flowbiteHelper();
    }
  });
  
  observer.observe(document.body, { childList: true, subtree: true });
  initialized = true;
}