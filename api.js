var $api = {
    __xmlhttp: undefined,
    __url: 'https://www.bloomberght.com/piyasa/intradaydata/dolar',
    initialize: function() {
        $.ajaxSetup({
            type: 'GET',
            url: 'https://cors-anywhere.herokuapp.com/https://www.bloomberght.com/piyasa/intradaydata/dolar',
            success: function(data) {
                $dom.updateData(JSON.parse(data))
            }
        })
        console.log("API is initialized.")
        //$api.__xmlhttp = new XMLHttpRequest()
        //$api.__xmlhttp.withCredentials = true
        //$api.__xmlhttp.onreadystatechange = function() {
        //    if (this.readyState == 4 && this.status == 200) {
        //        $dom.updateData(JSON.parse(this.responseText))
        //    } else {
        //        alert("Err: state: " + this.readyState + ", status: " + this.status)
        //    }
        //};
    },
    get: function() {
        $.ajax()
        //$api.__xmlhttp.open("GET", $api.__url, true)
        //$api.__xmlhttp.send()
    }
}