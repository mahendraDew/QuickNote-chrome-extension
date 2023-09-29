
var store;
document.getElementById('save').addEventListener('click', function () {

    store = document.getElementById('note').value;
    console.log(store)


});

document.getElementById('load').addEventListener('click', function () {
    console.log("hi")
   
    document.getElementById('load-area').innerHTML = store;
    document.getElementById('load-area').classList.add("loadArea")

});