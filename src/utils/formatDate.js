// src/utils/formatDate.js

/**
 * Formats a Date object to a readable string.
 * Default format: "Month Day, Year" e.g. "May 30, 2025"
 * 
 * @param {Date | string | number} dateInput - Date object or date string/number
 * @param {Object} options - Optional Intl.DateTimeFormat options
 * @returns {string} Formatted date string
 */
export function formatDate(dateInput, options) {
    if (!dateInput) return ''
  
    const date = dateInput instanceof Date ? dateInput : new Date(dateInput)
  
    if (isNaN(date)) return ''
  
    const defaultOptions = { year: 'numeric', month: 'long', day: 'numeric' }
    const formatOptions = options || defaultOptions
  
    return date.toLocaleDateString(undefined, formatOptions)
  }
  