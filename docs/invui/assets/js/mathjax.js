window.MathJax = {
    tex: {
        inlineMath: [["\\(", "\\)"]],
        displayMath: [["\\[", "\\]"]],
        processEscapes: true,
        processEnvironments: true
    },
    options: {
        ignoreHtmlClass: ".*|",
        processHtmlClass: "arithmatex",
        enableMenu: false
    }
};

document$.subscribe(() => {
    MathJax.typesetPromise()
})

//show beian on cn
var href = location.href;
if (href.indexOf("netheritetree") > -1) {
	beian.setAttribute('style','display:inline;');
}