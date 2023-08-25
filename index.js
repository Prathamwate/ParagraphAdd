const root = document.getElementById("root");

function addParagraph(){
    const iny = document.getElementById("inputText").value;
    const p = document.createElement("p");
    p.innerText = iny;
    root.appendChild(p);
    document.getElementById("inputText").value = "";
}