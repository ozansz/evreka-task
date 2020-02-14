var $dom = {
    clearTable: function() {
        $("#data-table").find('.dt-data-row').remove()
        $dom.showLodingIcon()

        console.log("[i] Table is cleared")
    },
    showLodingIcon: function() {
        $("#data-table").hide()
        $("#loading-icon").show()

        console.log("[i] Loading icon is activated")
    },
    hideLodingIcon: function() {
        $("#data-table").show()
        $("#loading-icon").hide()

        console.log("[i] Loading icon is disabled")
    },
    updateData: function(data) {
        $dom.hideLodingIcon()

        $.each(data.SeriesData.slice(0, 10), function(indx, value) {
            var date = new Date(value[0])
            var date_str = date.getDate() + "-" + (date.getMonth() + 1) +
                "-" + date.getFullYear() + " " + date.getHours() + ":" +
                date.getMinutes()

            $("#data-table").append("<tr class='dt-data-row'><td>" + date_str + "</td><td>" + value[1] + "</td></tr>")
        })

        console.log("[i] Table is updated")
    }
}