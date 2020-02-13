var $api = {
    initialize: function() {
        $.ajaxSetup({
            type: 'GET',
            dataType: 'json',
            url: 'https://www.bloomberght.com/piyasa/intradaydata/dolar',
            success: function(data) {
                $dom.updateData(data)
            }
        })
    },
    get: function() {
        $.ajax()
    }
}