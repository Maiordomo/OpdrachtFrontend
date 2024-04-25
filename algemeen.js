let backendurl = "https://yc2403webapp.azurewebsites.net/"  
//let backendurl = "http://127.0.0.1:5000/"
const blobServiceUrl = 'https://felixuploadimages.blob.core.windows.net/$web';

function maakmenubalk() {
    document.getElementById("menubalk").innerHTML = `
    
    <header class="py-3 mb-3 border-bottom fixed-top">
    <div class="container-fluid d-flex align-items-center justify-content-between">
        <div class="col-4">
        <!-- Logo -->
        <div class="logo">
            <a href="index.html"><img src="logo.png" class="img-thumbnail" alt="..."></a>
        </div>
        </div>
        

        <div class="col-4">
            <div class="row justify-content-center align-items-center">
             <a class="btn btn-primary" href="allerecepten.html" role="button">ALLE RECEPTEN</a>
            </div>

        <div class="row justify-content-center align-items-center">
            <form class="w-300 mx-3" role="search">
                    <input type="search" class="form-control" placeholder="Zoek recept..." aria-label="Search">
                </form>
           
        </div>  
    </div>




<div class="col-4">
         <div class="navbaricoontjes">  
        <div class="col text-end">

        <a class="button" href="receptaanmaken.html">
            <img src="https://static.vecteezy.com/system/resources/thumbnails/017/350/122/small/add-icon-design-png.png"
                alt="Bootstrap" width="80" height="65" />
        </a>
        <!-- </div>

    <div class="row col-3"> -->
        <a class="button" href="inloggen.html">
            <img src="https://icons.veryicon.com/png/o/miscellaneous/two-color-webpage-small-icon/user-244.png"
                alt="Bootstrap" width="80" height="65" />
        </a>
        <!-- </div>

    <div class="row col-3"> -->
        <a class="button" href="mijnfavorieterecepten.html">
            <img src="https://cdn0.iconfinder.com/data/icons/small-n-flat/24/678087-heart-512.png"
                alt="Bootstrap" width="80" height="65" />
        </button>
    </div>
    </div>
    </div>


    </div>

       
    </div>
    <link rel="stylesheet" href="main.css">
</header>

        `;
    document.getElementById("footerbalk").innerHTML = `
    <div id="footerbalk"></div>
        <footer class=" container-fluid">
            <div class="row">
                <div class=" col-12">Bedankt voor het bezoeken van onze website! Fijne dag!</div>
                <div class="col-md-4 col-12"><a href="algemenevoorwaarden.html">Algemene voorwaarden</a></div>
                <div class="col-md-4 offset-md-4 col-12"><a href="privacybeleid.html">Privacybeleid</a></div>
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
            alert("Afbeelding succesvol geupload!");
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


    fetch(backendurl + "receptaanmaken/" + stap, { mode: "cors" }).then(response => {
        if (response.ok) {
            alert("Stap succesvol geupload!");
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
    document.getElementById("omschrijving").innerHTML = "Omschrijving van recept: " + naam;



    fetch(backendurl + "receptaanmaken/" + naam, { mode: "cors" }).then(response => {
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