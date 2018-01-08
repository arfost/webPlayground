function getSelectionText() {
    var text = "";
    var activeEl = document.activeElement;
    var activeElTagName = activeEl ? activeEl.tagName.toLowerCase() : null;
    if (
      (activeElTagName == "textarea") || (activeElTagName == "input" &&
      /^(?:text|search|password|tel|url)$/i.test(activeEl.type)) &&
      (typeof activeEl.selectionStart == "number")
    ) {
        text = activeEl.value.slice(activeEl.selectionStart, activeEl.selectionEnd);
    } else if (window.getSelection) {
        text = window.getSelection().toString();
    }
    return text;
}
s = getSelectionText();
if (!s || s=='') s = prompt('Enter%20search%20terms%20for%20Wikipedia',''); 
open('http://en.wikipedia.org' + (s ? '/w/index.php?title=Special:Search&search=' + encodeURIComponent(s) : '')).focus();