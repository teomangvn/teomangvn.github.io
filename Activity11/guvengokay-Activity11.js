$(document).ready(function() {
    console.log("Document ready, script loaded");
    
    $("#nav_list a").click(function(evt) {
        evt.preventDefault();
        
        var speakerName = $(this).attr("title");
        
        console.log("Clicked on speaker: " + speakerName);
        
        var jsonFilePath = "json_files/" + speakerName + ".json";
        console.log("Attempting to load: " + jsonFilePath);
        
        $.ajax({
            type: "GET",
            url: jsonFilePath,
            dataType: "json",
            timeout: 10000,
            success: function(data) {
                console.log("AJAX success, data received:", data);
                
                $("main").empty();
                
    
                var speaker = data.speakers[0];
                
        
                var html = "<h1>" + speaker.title + "</h1>" +
                           "<img src='" + speaker.image + "'>" +
                           "<h2>" + speaker.month + "<br>" + speaker.name + "</h2>" +
                           "<p>" + speaker.text + "</p>";
                
        
                $("main").html(html);
            },
            error: function(xhr, status, error) {
                // Detaylı hata bilgisi
                console.error("AJAX Error Details:");
                console.log("Status: " + status);
                console.log("Error: " + error);
                console.log("Response Text: " + xhr.responseText);
                console.log("Status Code: " + xhr.status);
                
        
                $("main").html("<h2>Error loading speaker information</h2>" +
                               "<p>Status: " + status + "</p>" +
                               "<p>Error: " + error + "</p>" +
                               "<p>Status Code: " + xhr.status + "</p>");
            }
        });
    });
    
    console.log("Testing file existence...");
    $.ajax({
        url: "json_files/toobin.json",
        type: "HEAD",
        success: function() {
            console.log("toobin.json file exists");
        },
        error: function(xhr, status, error) {
            console.error("toobin.json file NOT found");
            console.log("Status: " + status);
            console.log("Error: " + error);
        }
    });
});