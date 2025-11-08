$(document).ready(function () {
    // $.ajax({
    $.getJSON("memberList.json", function(data){
        var html1 = "";
        var html2 = "";
        $.each(data.memberList, function(i, memberList){
            if(memberList.full_name=="Austin Smith") {
                html1 = "<img src=" + memberList.image + " width=50% >";
                html2 = "<h2>" + memberList.full_name + "</h2>";
                html2 += "<h3>" + memberList.major + "</h3>";
                html2 += "<p>" + memberList.bio + "</p>";

                $("#image-json1").html(html1);
                $("#context-json1").html(html2);
            }
            else if (memberList.full_name=="David Bill") {
                html1 = "<img src=" + memberList.image + " width=50% >";
                html2 = "<h2>" + memberList.full_name + "</h2>";
                html2 += "<h3>" + memberList.major + "</h3>";
                html2 += "<p>" + memberList.bio + "</p>";

                $("#image-json2").html(html1);
                $("#context-json2").html(html2);

            }
            else if (memberList.full_name=="Jessica Chu") {
                html1 = "<img src=" + memberList.image + " width=50% >";
                html2 = "<h2>" + memberList.full_name + "</h2>";
                html2 += "<h3>" + memberList.major + "</h3>";
                html2 += "<p>" + memberList.bio + "</p>";

                $("#image-json3").html(html1);
                $("#context-json3").html(html2);

            }
            else{
                console.log("Error output");
            }
        });
    });
// });

});
