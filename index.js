

const generateBtn = document.getElementById("generatebtn");

const singlehexcolorgenerator = () => {
    const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    
    let hexcolor = "#"; 
    for (let i = 0; i < 6; i++) {
        let random = Math.floor(Math.random() * hex.length);
        hexcolor += hex[random];
    }
    return hexcolor;
};

const colorpalettegenerator = () => {
    const colorPalette = [];
    for (let i = 0; i < 4; i++) {
        colorPalette.push(singlehexcolorgenerator());
    }
    return colorPalette;
};



const rendercolorpalette = () => {
    const colorsContainer = document.querySelector(".container-fluid");

    colorsContainer.innerHTML = "";  // Clear previous colors

    const colorPalette = colorpalettegenerator();

    colorPalette.forEach((color, i) => {
        const colorDiv = document.createElement("div");
        colorDiv.id = `color${i + 1}`;
        colorDiv.style.background = color;
        colorDiv.classList.add("color-box");

        // Create paragraph to hold the color code
        const colorText = document.createElement("p");
        colorText.innerText = `Color: ${color}`;
        
        // Append the paragraph to the color box 
        colorDiv.appendChild(colorText);
     
        // Append the color box to the container
        colorsContainer.append(colorDiv);
    });

    
    const copytoclipboard = (text) => {
        navigator.clipboard.writeText(text)
            .then(() => {
                alert('Text copied to clipboard: ' + text); // Concatenate the text to the alert message
            }).catch(err => {
                console.error('Failed to copy text:', err);
            });
    };
    

    // Use querySelectorAll to get all the p tags inside color-box divs
    const colorTexts = document.querySelectorAll(".color-box p");
    colorTexts.forEach(p => {
        p.addEventListener("click", () => copytoclipboard(p.innerText));
    });
};
rendercolorpalette();
generateBtn.addEventListener("click", rendercolorpalette);
