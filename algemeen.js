// let backendurl = "https://yc2403webapp.azurewebsites.net"
let backendurl = "http://127.0.0.1:5000/"
const blobServiceUrl = 'https://felixuploadimages.blob.core.windows.net/$web';

function maakmenubalk() {
    document.getElementById("menubalk").innerHTML = `
    
    <header class="py-3 mb-3 border-bottomd fixed-top">
    <div class="container-fluid d-flex align-items-center justify-content-between">
        <!-- Logo -->
        <a href="index.html"><img src="logo.png" class="img-thumbnail" alt="..."></a>
        
        <div class="col d-flex align-items-center justify-content-center">
            <a class="btn btn-primary" href="allerecepten.html" role="button">Alle recepten</a>
        </div>
      
      <!-- Search Form -->
      <div class="row align-items-center justify-content-center" id="zoekbalk">
        <form class="w-200 mx-3" role="search">
          <input type="search" class="form-control" placeholder="Zoek recept..." aria-label="Search">
        </form>
      </div>
      

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
    <link rel="stylesheet" href="main.css">
</header>

    <div class="linkjes">      
        <div><a href="allerecepten.html">alle recepten</a></div>
        <div><a href="mijnfavorieterecepten.html">mijn favoriete recepten</a></div>
        <div><a href="inloggen.html">inloggen</a></div>
        <div><a href="receptaanmaken.html">receptaanmaken</a></div>
        <div><a href="erik.html">testpagina 1 erik</a></div>
    </div>
    
        `;
    document.getElementById("footerbalk").innerHTML = `
    <div id="footerbalk"></div>
        <footer class=" container-fluid">
            <div class="row">
                <div class=" col-12">Bedankt voor het bezoeken van onze website! Fijne dag!</div>
                <div class="col-md-4 col-12">Algemene voorwaarde</div>
                <div class="col-md-4 offset-md-4 col-12">Privacybeleid</div>
            </div>
        </footer>   
        `
}


//<div><a href="index.html">home</a></div>  style="text-align: center;"

// functie voor het uploaden van afbeeldingen<div id="menubalk" class="fixed-top">

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
    const sasToken = 'sp=rawd&st=2024-04-15T07:33:03Z&se=2024-05-31T15:33:03Z&sip=0.0.0.0-255.255.255.255&sv=2022-11-02&sr=c&sig=zkUX3UQya0Gd%2BM%2BGdAVtLrELBKWgOiHXGaHVTLvSfiQ%3D'; // Your SAS token without the leading "?"
    // URL to the Azure Blob Storage container
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

    
    fetch("http://127.0.0.1:5000/receptaanmaken/"+stap,{mode:"cors"}).then(response => {
        if (response.ok) {
            alert("Stap succesvol geüpload!");
        } else {
            alert("Upload mislukt. Statuscode: " + response.status);
        }
    })
        .catch(error => {
            console.error("Fout tijdens het uploaden:", error);
        });     
    //fetch(`https://yc2403webapp.azurewebsites.net/erik/${naamrecept}/${waarderingrecept}`)
}

function receptnaamtoevoegen() {
    console.log("naaminvoer");
    let naam = document.getElementById("naaminvoer").value;
    console.log(naam);
    document.getElementById("omschrijving").innerHTML = "Omschrijving van recept: " + naam ;
    

    
    fetch("http://127.0.0.1:5000/receptaanmaken/"+naam,{mode:"cors"}).then(response => {
        if (response.ok) {
            alert("Recept Template succesvol gecreëerd!");
        } else {
            alert("Template mislukt. Statuscode: " + response.status);
        }
    })
        .catch(error => {
            console.error("Fout tijdens het creëren:", error);
        });     
    //fetch(`https://yc2403webapp.azurewebsites.net/erik/${naamrecept}/${waarderingrecept}`)
}