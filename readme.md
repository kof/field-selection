# Get text selection or replace selected text in input field or textarea.

## Get selection.

    // As jquery plugin
    $(selector).fieldSelection(); // {start: xxx, end: xxx, length: xxx, text: xxx}

    // As commonjs module
    var fieldSelection = require('field-selection');
    fieldSelection.get(element);

    // Via window global.
    window.fieldSelection.get(element);

## Replace selection - insert a string at caret position.

    // As jquery plugin
    $(selector).fieldSelection('My text');

    // As commonjs module
    var fieldSelection = require('field-selection');
    fieldSelection.replace(element, 'new text');

    // Via window global.
    window.fieldSelection.replace(element, 'new text');
