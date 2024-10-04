// Write your code here!
const mainId = document.getElementById("main");
mainId.remove()

const newHeader = document.createElement("h1")

newHeader.id = "victory";  
newHeader.textContent = "Phyl is the champion"
document.body.appendChild(newHeader)


