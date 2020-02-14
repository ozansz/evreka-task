$(document).ready(function() {
    $dom.clearTable()
    $api.initialize()

    setInterval(function() {
        $dom.clearTable()
        $api.get()
    }, 60000)
    
    $("#update-btn").click(function() {
        console.log("[i] Update event called")
        $dom.clearTable()
        $api.get()
    })

    $api.get()
})