var $api = {
    initialize: function() {
        $.ajaxSetup({
            type: 'GET',
            url: 'https://cors-anywhere.herokuapp.com/https://www.bloomberght.com/piyasa/intradaydata/dolar',
            success: function(data) {
                $dom.updateData(JSON.parse(data))
            }
        })
        
        console.log("[i] API is initialized")
    },
    get: function() {
        $.ajax()
    }
}