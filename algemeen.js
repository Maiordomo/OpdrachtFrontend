// let backendurl = "https://yc2403webapp.azurewebsites.net"
let backendurl = "http://127.0.0.1:5000/"

function maakmenubalk() {
    document.getElementById("menubalk").innerHTML = `
    <div id="menubalk" class="fixed-top">
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
    
        `;
    document.getElementById("footerbalk").innerHTML = `
        <footer class="fixed-bottom container-fluid">
            <div class="row">
                <div class=" col-12">Bedankt voor het bezoeken van onze website! Fijne dag!</div>
                <div class="col-md-4 col-12">Algemene voorwaarde</div>
                <div class="col-md-4 offset-md-4 col-12">Privacybeleid</div>
            </div>
        </footer>   
        `
}


//<div><a href="index.html">home</a></div>  style="text-align: center;"

// functie voor het uploaden van afbeeldingen

function uploadFile() {
    // Define the elements
    const fileInput = document.getElementById('fileInput'); // The ID of your input type="file"
    const statusLabel = document.getElementById('statusLabel'); // The ID of an element to display the upload status


    const file = fileInput.files[0];
    if (!file) {
        console.error('No file selected for upload.');
        statusLabel.textContent = 'No file selected for upload.';
        return;
    }

    // Construct the full SAS URL from your Azure portal information
    const sasToken = 'sp=racwd&st=2024-04-08T11:34:46Z&se=2024-04-08T19:34:46Z&spr=https&sv=2022-11-02&sr=c&sig=G28MSrE8n0GI6RWbUZ3jI3lFiX64PVoECIIys5hUths%3D'; // Your SAS token without the leading "?"
    const blobServiceUrl = 'https://felixuploadimages.blob.core.windows.net/$web'; // URL to the Azure Blob Storage container
    const blobName = file.name; // Use the file's name as the blob name or set your own
    const fullUrl = `${blobServiceUrl}/${blobName}?${sasToken}`;

    fetch(fullUrl, {
        method: 'PUT',
        headers: {
            'x-ms-blob-type': 'BlockBlob',
            'Content-Type': file.type,
        },
        body: file,
    }).then(response => {
        if (response.ok) {
            alert("Afbeelding succesvol geüpload!");
        } else {
            alert("Upload mislukt. Statuscode: " + response.status);
        }
    })
        .catch(error => {
            console.error("Fout tijdens het uploaden:", error);
        });

}

function staptoevoegen() {
    console.log("stapinleveren");
    let stap = document.getElementById("stapinvoer").value;
    console.log(stap);
    
    fetch("http://127.0.0.1:5000/receptaanmaken/"+stap,{mode:"cors"})
    //fetch(`https://yc2403webapp.azurewebsites.net/erik/${naamrecept}/${waarderingrecept}`)
}