# jQuery plugin for getting selection or replace a text in input field and textarea

## Get selection

    $(selector).fieldSelection(); // {start: XXX, end: XXX, length: XXX}

## Replace selection - insert a string at caret position
 
    $(selector).fieldSelection('My text'); 
    