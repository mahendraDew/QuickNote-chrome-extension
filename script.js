
var store;
document.getElementById('save').addEventListener('click', function () {

    store = document.getElementById('note').value;
    console.log(store)

    // const note = document.getElementById('note').value;
    // chrome.storage.sync.set({ 'quickNote': note }, function () {
    //     alert('Note saved!');
    // });

});

document.getElementById('load').addEventListener('click', function () {
    console.log("hi")
    // chrome.storage.sync.get(['quickNote'], function (result) {
    //     document.getElementById('note').value = result.quickNote || '';
    //     document.getElementById('load-area').innerHTML = result.quickNote || '';
    // });
    document.getElementById('load-area').innerHTML = store;
    document.getElementById('load-area').classList.add("loadArea")

});