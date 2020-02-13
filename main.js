$(document).ready(function() {
    $api.initialize()
    $api.get()  
})

setInterval(function() {
    $api.get()
}, 60000)

$("#update-btn").click(function() {
    $api.get()
})