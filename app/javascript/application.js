// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import '@hotwired/turbo-rails';
import 'controllers';
import '@popperjs/core';
import * as bootstrap from 'bootstrap';

// Initialize Bootstrap components on page load and Turbo navigation
document.addEventListener('DOMContentLoaded', initializeBootstrap);
document.addEventListener('turbo:load', initializeBootstrap);

function initializeBootstrap() {
  // Initialize dropdowns
  const dropdownElementList = document.querySelectorAll(
    '[data-bs-toggle="dropdown"]'
  );
  Array.from(dropdownElementList).map(
    (dropdownToggleEl) => new bootstrap.Dropdown(dropdownToggleEl)
  );

  // Initialize tooltips
  const tooltipTriggerList = document.querySelectorAll(
    '[data-bs-toggle="tooltip"]'
  );
  Array.from(tooltipTriggerList).map(
    (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
  );

  // Initialize popovers
  const popoverTriggerList = document.querySelectorAll(
    '[data-bs-toggle="popover"]'
  );
  Array.from(popoverTriggerList).map(
    (popoverTriggerEl) => new bootstrap.Popover(popoverTriggerEl)
  );

  // Initialize modals
  const modalList = document.querySelectorAll('.modal');
  Array.from(modalList).forEach((modal) => new bootstrap.Modal(modal));
}
