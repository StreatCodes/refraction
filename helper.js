function htmlEntities(str) {
    return String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

window.addEventListener('load', () => {
    const codeBlocks = document.getElementsByClassName('html-ify');
    for(const block of codeBlocks) {
        block.innerHTML = htmlEntities(block.innerHTML);
    }
});