// let backendurl = "https://yc2403webapp.azurewebsites.net"
let backendurl = "http://127.0.0.1:5000"


function maakmenubalk(){
    document.getElementById("menubalk").innerHTML = `
    <div id="menubalk">
    <header class="py-3 mb-3 border-bottom">
    <div class="container-fluid d-flex align-items-center justify-content-between">
        <!-- Logo -->
        <a href="index.html"><img src="logo.png" class="img-thumbnail" alt="..."></a>

        <!-- Search Form -->
        <form class="w-50 mx-3" role="search">
            <input type="search" class="form-control" placeholder="Search..." aria-label="Search">
        </form>

        <!-- Dropdown Menu -->
        <div class="flex-shrink-0 dropdown pull"></div>
        <a href="#" class="d-block link-body-emphasis text-decoration-none dropdown-toggle"
            data-bs-toggle="dropdown" aria-expanded="false">
        </a>
        <ul class="dropdown-menu text-small shadow">
            <li><a class="dropdown-item" href="#">New project...</a></li>
            <li><a class="dropdown-item" href="#">Settings</a></li>
            <li><a class="dropdown-item" href="#">Profile</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item" href="#">Sign out</a></li>
        </ul>
    </div>
</header>

    </div>

        
        <div><a href="allerecepten.html">alle recepten</a></div>
        <div><a href="mijnfavorieterecepten.html">mijn favoriete recepten</a></div>
        <div><a href="inloggen.html">inloggen</a></div>
        <div><a href="receptaanmaken.html">receptaanmaken</a></div>
        <div><a href="erik.html">testpagina 1 erik</a></div>
    
        `
    }

    //<div><a href="index.html">home</a></div> 