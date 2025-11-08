$(document).ready(function () {
    $.getJSON("eventsList.json", function(data){
        var html1 = "";
        var html2 = "";
        $.each(data.eventsList, function(i, eventsList){
            if(eventsList.full_name=="UNCCInjustice") {
                html1 = "<img src=" + eventsList.image + " width=60%>";
                html2 = "<a href=https://inside.uncc.edu/news-features/2020-06-08/march-end-injustice-unites-students-and-community><h3>" + eventsList.heading + "</h3></a>";
                html2 += "<p>" + eventsList.bio + "</p>";

                $("#image-json1").html(html1);
                $("#context-json1").html(html2);
            }
            else if (eventsList.full_name=="Islam") {
                html1 = "<img src=" + eventsList.image + " width=60% >";
                html2 = "<a href=https://americanislamicoutreach.org/dev/islamic-awarness-week-at-uncc-with-uncc-msa-monday-19th-february-2018><h3>" + eventsList.heading + "</h3></a>";
                html2 += "<p>" + eventsList.bio + "</p>";

                $("#image-json2").html(html1);
                $("#context-json2").html(html2);

            }
            else if (eventsList.full_name=="UNCCprotest") {
                html1 = "<img src=" + eventsList.image + " width=65% >";
                html2 = "<a href=https://twitter.com/unccharlotte/status/778675753378611200><h3>" + eventsList.heading + "</h3></a>";
                html2 += "<p>" + eventsList.bio + "</p>";

                $("#image-json3").html(html1);
                $("#context-json3").html(html2);

            }
            else if (eventsList.full_name=="CharlotteProtest") {
                html1 = "<img src=" + eventsList.image + " width=65% >";
                html2 = "<a href=https://www.charlotteobserver.com/news/local/article243310486.html><h3>" + eventsList.heading + "</h3></a>";
                html2 += "<p>" + eventsList.bio + "</p>";

                $("#image-json4").html(html1);
                $("#context-json4").html(html2);

            }
            else{
                console.log("Error output");
            }
        });
    });
});
