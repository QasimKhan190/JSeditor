function abc(command) {
    let selection = window.getSelection();
    if (selection.rangeCount > 0 && !selection.isCollapsed) {
        // Selected text par styling apply karo
        document.execCommand(command);
    } else {
        // Koi text select nahi hai, poora text change karo
        let textDiv = document.getElementById("text");
        if (command === "bold") {
            textDiv.style.fontWeight = (textDiv.style.fontWeight === "bold") ? "normal" : "bold";
        } else if (command === "italic") {
            textDiv.style.fontStyle = (textDiv.style.fontStyle === "italic") ? "normal" : "italic";
        } else if (command === "underline") {
            textDiv.style.textDecoration = (textDiv.style.textDecoration === "underline") ? "none" : "underline";
        }
    }
}

function cc() {
    let color = document.getElementById("colorPicker").value;
    let selection = window.getSelection();

    if (selection.rangeCount > 0 && !selection.isCollapsed) {
        document.execCommand("foreColor", false, color);
    } else {
        document.getElementById("text").style.color = color;
    }
}