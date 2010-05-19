/**
 * jQuery plugin for selection and replacement of text in input and textarea
 * 
 * @version 0.1
 * @author Oleg Slobodskoi (jsui.de) 
 */

(function($, document) {
    
/**
 * Extend jQuery's prototype
 * @param {string} [text]
 */
$.fn.fieldSelection = function( text ) {
    var ret;
    this.each(function(){
        this.focus();
        ret = text ? replace(this, text||'') : get(this);
    });
    return ret || this;
};

/**
 * Get selection
 * @param {Object} elem
 */
function get( elem ) {
    var data = {start: 0, end: elem.value.length, length: 0};

    // dom 3
    if ( elem.selectionStart >= 0 ) {
        data.start = elem.selectionStart;
        data.end = elem.selectionEnd;
        data.length = data.end - data.start;
        data.text = elem.value.substr(data.start, data.length);
    // IE    
    } else if ( document.selection ) {
        var r = document.selection.createRange();
        if ( !r ) return data;
        var tr = elem.createTextRange(),
            ctr = tr.duplicate();
            
        tr.moveToBookmark(r.getBookmark());
        ctr.setEndPoint('EndToStart', tr);
        data.start = ctr.text.length;
        data.end = ctr.text.length + r.text.length;
        data.text = r.text;
        data.length = r.text.length;
    }
    
    return data;
}

/**
 * Replace selection
 * @param {Object} elem
 * @param {string} text
 */
function replace( elem, text ) {
    // dom 3
    if ( elem.selectionStart >= 0 ) {
        var start = elem.selectionStart,
            end = elem.selectionEnd; 
        elem.value = elem.value.substr(0, start) + text + elem.value.substr(end);
        var pos = start + text.length;
        elem.selectionStart = pos;
        elem.selectionEnd = pos; 
    // IE    
    } else if ( document.selection ) {
        var range = document.selection.createRange();
        range.text = text;
        range.move('character', 0);   
        range.select();    
    } else {
        // browser not supported - set at the end
        elem.value += text;
        // scroll to the end of textarea to show inserted
        elem.scrollTop = 100000;   
    }
}

})(jQuery, window.document);

