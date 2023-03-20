var xhttp = new XMLHttpRequest();

var table = document.getElementById("mytable");

xhttp.onload = function(){
    var json = JSON.parse(this.responseText);
    myfunction(json);
}

xhttp.open("GET", "https://dummyjson.com/products", true);
xhttp.send();

function myfunction(response){
    let txt = "";
    for(let x in response.products){
        txt += `<tr>
        <td>${response.products[x].id}</td>
        <td>${response.products[x].title}</td>
        <td>${response.products[x].description}</td>
        <td>${response.products[x].price}</td>
        <td>${response.products[x].discountPercentage}</td>
        <td>${response.products[x].rating}</td>
        <td>${response.products[x].stock}</td>
        <td>${response.products[x].brand}</td>
        <td><img class="imge" src="${response.products[x].images[0]}"  alt=""></td>        
        </tr>`
    }

    table.innerHTML = txt;
    // console.log(xhttp.responseText);
}
