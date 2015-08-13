findAndReplace('Creemee', 'Soft serve', document);
findAndReplace('Creamee', 'Soft serve', document);
findAndReplace('creemee', 'soft serve', document);
findAndReplace('creamee', 'soft serve', document);

function findAndReplace(a, b, el) {
    if (!el) el = document.body;
    var nodes = el.childNodes;
    for (var n = 0; n < nodes.length; n++) {
        if (nodes[n].nodeType == Node.TEXT_NODE) {
            nodes[n].textContent = nodes[n].textContent.replace(a, b);
        } else {
            findAndReplace(a, b, nodes[n]);
        }
    }
}
