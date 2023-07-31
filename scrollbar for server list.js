(function() {
const cssTemplateString = `
.fixedScrollbar::-webkit-scrollbar {
    width: 8px !important;
}
.fixedScrollbar::-webkit-scrollbar-corner {
    background-color: transparent;
}
.fixedScrollbar::-webkit-scrollbar-thumb {
    background-clip: padding-box;
    border: 2px solid transparent;
    border-radius: 4px;
    background-color: var(--background-primary);
    min-height: 80px;
}
.fixedScrollbar::-webkit-scrollbar-track {
    border-color: transparent;
    background-color: transparent;
    border: 2px solid transparent;
}
.fixedScrollbar {
    scrollbar-width: thin;
}
`;
const styleTag = document.createElement("style");
styleTag.innerHTML = cssTemplateString;
document.head.insertAdjacentElement('beforeend', styleTag);

let recheckElement = setInterval(() => {
    let serverList = document.querySelector("[aria-label='Servers']");
    if (serverList && serverList.parentElement && !serverList.parentElement.classList.contains("fixedScrollbar")) {
        serverList.parentElement.classList.add("fixedScrollbar");
    }
}, 300);

})();