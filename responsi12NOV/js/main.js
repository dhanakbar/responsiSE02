$.getJSON("js/data.json", function (data) {
    $(".card-title").text(data.name);
    $(".card-text").text(data.address.jalan);
})