let backendurl = "https://yc2403webapp.azurewebsites.net"
// let backendurl = "http://127.0.0.1:5000"


function maakmenubalk(){
    document.getElementById("menubalk").innerHTML = `
        <div><a href="index.html">home</a></div>
        <div><a href="allerecepten.html">alle recepten</a></div>
        <div><a href="mijnfavorieterecepten.html">mijn favoriete recepten</a></div>
        <div><a href="inloggen.html">inloggen</a></div>
        <div><a href="receptaanmaken.html">receptaanmaken</a></div>
        <div><a href="erik.html">testpagina 1 erik</a></div>
        `
    }