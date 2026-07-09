function printp(text, color, font)
{
    let p = document.createElement("p");
    p.textContent = text;
    p.style.color = color;

    if (font == 0) 
    { 
        p.style.fontStyle = "normal";
    }
    else if (font == 1) 
    { 
        p.style.fontStyle = "italic";
    }
    else if (font == 2)
    {
        p.style.fontWeight = "bold";
    }

    document.getElementById("output").appendChild(p);
}

function printh1(text, color, font)
{
    let h1 = document.createElement("h1");
    h1.textContent = text;
    h1.style.color = color;

    if (font == 0) 
    { 
        h1.style.fontStyle = "normal";
    }
    else if (font == 1) 
    { 
        h1.style.fontStyle = "italic";
    }
    else if (font == 2)
    {
        h1.style.fontWeight = "bold";
    }

    document.getElementById("output").appendChild(h1);
}

function printh2(text, color, font)
{
    let h2 = document.createElement("h2");
    h2.textContent = text;
    h2.style.color = color;

    if (font == 0) 
    { 
        h2.style.fontStyle = "normal";
    }
    else if (font == 1) 
    { 
        h2.style.fontStyle = "italic";
    }
    else if (font == 2)
    {
        h2.style.fontWeight = "bold";
    }

    document.getElementById("output").appendChild(h2);
}

function printh4(text, color, font)
{
    let h4 = document.createElement("h4");
    h4.textContent = text;
    h4.style.color = color;

    if (font == 0) 
    { 
        h4.style.fontStyle = "normal";
    }
    else if (font == 1) 
    { 
        h4.style.fontStyle = "italic";
    }
    else if (font == 2)
    {
        h4.style.fontWeight = "bold";
    }

    document.getElementById("output").appendChild(h4);
}

/*
FOR FONT:
0 = normal 
1 = italic/emphasis
2 = bold
*/






//CREATE TEXT BUTTON
let buttongrab = document.getElementById("grabshit");
buttongrab.addEventListener("click", fullcreate);

let grabvalues = [];

function grab() 
{
    let textinput = document.getElementById("text").value;
    let colorinput = document.getElementById("color").value;
    let styleinput = document.querySelector('input[name="style"]:checked').value;
    let fontinput = document.querySelector('input[name="font"]:checked').value;
    grabvalues = [textinput + "", colorinput + "", styleinput + "", fontinput + ""]
    console.log(grabvalues);
}


function createtext()
{
    let check = grabvalues[2];

    if (check == "p")
    {
        printp(grabvalues[0], grabvalues[1], grabvalues[3]);
    }
    else if (check == "h1")
    {
        printh1(grabvalues[0], grabvalues[1], grabvalues[3]);
    }
    else if (check == "h2")
    {
        printh2(grabvalues[0], grabvalues[1], grabvalues[3]);
    }
    else if (check == "h4")
    {
        printh4(grabvalues[0], grabvalues[1], grabvalues[3]);
    }

}

function fullcreate()
{
    grab();
    createtext();
}




//RESET PAGE BUTTON
let buttonreset = document.getElementById("resetshit");
buttonreset.addEventListener("click", resetpage);


function resetpage() 
{
    let reset = document.getElementById("output");
    reset.textContent= "";
}















