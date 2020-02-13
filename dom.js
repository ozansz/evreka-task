var $dom = {
    clearTable: function() {
        $("#data-table").find('.dt-data-row').remove()
    },
    updateData: function(data) {
        $.each(data.SeriesData.slice(0, 10), function(indx, value) {
            var date = new Date(value[0])
            var date_str = date.getDate() + "-" + (date.getMonth() + 1) +
                "-" + date.getFullYear() + " " + date.getHours() + ":" +
                date.getMinutes()

            $("#data-table").append("<tr class='dt-data-row'><td>" + date_str + "</td><td>" + value[1] + "</td></tr>")
        })
    }
}