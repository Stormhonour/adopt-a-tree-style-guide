// ---------------------------------------------
// STYLE GUIDE: JAVASCRIPT


// ---------------------------------------------
// STYLE GUIDE: DUPLICATE DEMO EXAMPLES IN CODE BLOCKS

// Escape HTML
//  - Parameters:
//    - str {string} : Takes a string and returns it with HTML entities escaped
// Example:
// >>> escapeHtml("<div>Foo & Bar</div>")
// "&lt;div&gt;Foo &amp; Bar&lt;/div&gt;"
function escapeHtml(str) {
    const div = document.createElement("div");
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
}

// Trim whitespace and preserve indentation
//  - Parameters:
//    - code {string} : Takes a string and trims extra whitespace

function reIndentCode(code) {
    const lines = [];
    const linesArr = code.split("\n");

    linesArr.forEach(function (line, index) {
        if (line.trim() === "" && index === 0) {
            return;
        }

        if (line.trim() === "" && index === linesArr.length - 1) {
            return;
        }

        lines.push(line);
    });

    const line1 = lines[0];

    // Get the number of whitespace indentation characters on the first line
    // by comparing the length of the string with and without trimmed whitespace
    const whitespaceLen = line1.length - line1.trimLeft().length;

    // Loop through all lines and remove conditionally whitespace to the left equal to the whitespace on line 1
    return lines.map(function (line) {
        return line.length - line.trimLeft().length >= whitespaceLen ? line.substring(whitespaceLen, line.length) : line;
    }).join("\n");
}

// Append style guide demos to code blocks
function styleBlockAppendCode() {
    const styleBlocks = document.querySelectorAll(".style-guide-demo-block");

    styleBlocks.forEach(function (styleBlock) {
        const demo = styleBlock.querySelector(".style-guide-demo-each");
        const code = reIndentCode(escapeHtml(demo.innerHTML));
        const container = document.createElement("div");
        container.classList.add("style-guide-code-block", "js-style-guide-code-block");
        const preBlock = document.createElement("pre");
        const codeBlock = document.createElement("code");
        codeBlock.innerHTML = code;
        preBlock.appendChild(codeBlock);
        container.appendChild(preBlock);
        styleBlock.appendChild(container);
    });
}

styleBlockAppendCode();


const btnCode = document.querySelectorAll(".js-btn-style-guide-code");
const btnCodeArray = Array.from(btnCode);

// Toggle style guide demos on clicking "Code" button
function btnToggleCode(element) {
    const parentCode = element.parentNode.querySelector(".js-style-guide-code-block");
    parentCode.classList.toggle("style-guide-code-block--show");
}

btnCodeArray.forEach(function (button) {
    button.addEventListener("click", function () {
        btnToggleCode(this);
    });
});


// ---------------------------------------------
// STYLE GUIDE: NAVIGATION

// Navigation: Toggle style guide menu on button click
const navTrigger = document.getElementById("js-btn-style-guide-menu");
const toggleElement = document.getElementById("js-style-guide-sidebar");
const sidebarLinks = document.querySelectorAll("#js-style-guide-sidebar a");

const toggleSidebar = function () {
    toggleElement.classList.toggle("style-guide-sidebar--show");
}

const hideSidebar = function () {
    toggleElement.classList.remove("style-guide-sidebar--show");
}

navTrigger.addEventListener("click", toggleSidebar);

// Navigation: Hide style-guide menu on clicking sidebar links
sidebarLinks.forEach(function (item) {
    item.addEventListener("click", hideSidebar);
});