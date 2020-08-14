$(document).ready(function() {
    fetchReportContent();
})

function fetchReportContent() {
    /*const queryString = window.location.search;
    var urlparams = new URLSearchParams(queryString);
    var reportID = urlparams.get('id');
    */

    var reportID = getUrlVars()["id"];

    if (!reportID) return;


    $.getJSON("data/" + reportID + ".json", function(data, status){
        $('#title').html(data.title);
        $('#pubtime').html(data.pubtime);
        var authorText= "";

        var authors = data.authors;
        for (var i=0; i<authors.length; i++) {
            if (i >0) authorText += ", ";
            authorText += authors[i];
        }

        $('#authors').html(authorText);

        $('#summary').html(data.summary);

        $("#articlelink").attr("href", data.link);

        $('#articlelink').html("Read More...");
    })
}

function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
        vars[key] = value;
    });
    return vars;
}