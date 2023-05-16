var xhr = new XMLHttpRequest();

xhr.onreadystatechange = function () {
    if (this.readyState == 4) {
        switch (this.status) {
            case 200:
                var response = JSON.parse(this.responseText);
                document.getElementById('main-container').innerHTML = "";
                response.products.forEach(function (data) {
                    document.getElementById('main-container').innerHTML += htmlTemplate(data);
                });
                break;
            case 404:
                break;
            case 401:
                break;
            default:
                break;
        }
    }
}

xhr.open('GET', '');
var requestData = {
    "data": {

    }
}
xhr.send(JSON.stringify(requestData));

function htmlTemplate(data) {
    const element = document.getElementsByClassName("populate");
    element.addEventListener("click", myFunction);
    
    function myFunction() {
      document.getElementById("demo").innerHTML = "Hello World";
    }


//     return `<div class="col-3">
//     <div class="card" style="width: 18rem;">
//         <div class="card-body">
//             <img class="card-img-top" src="${data.thumbnail}" alt="Card image cap">
//             <h5 class="card-title">${data.title}</h5>
//             <p class="card-text">${data.description}</p>
//         </div>
//     </div>
// </div>`;
 }
</script>