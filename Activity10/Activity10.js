$(document).ready(function() {
    $("#birthday").datepicker({
        changeMonth: true,
        changeYear: true,
        yearRange: "1900:2025",
        dateFormat: "mm/dd/yy"
    });
    
    var cities = [
        "Charlotte",
        "New York",
        "Washington DC",
        "Los Angeles",
        "Chicago",
        "Houston",
        "Phoenix",
        "Philadelphia",
        "San Antonio",
        "San Diego",
        "Dallas",
        "San Jose",
        "Austin",
        "Jacksonville",
        "San Francisco",
        "Indianapolis",
        "Columbus",
        "Seattle",
        "Denver",
        "Boston"
    ];
    
    $("#city").autocomplete({
        source: cities
    });
    
    var programmingLanguages = [
        "JavaScript",
        "Python",
        "Java",
        "C++",
        "C#",
        "PHP",
        "Ruby",
        "Swift",
        "Kotlin",
        "Go",
        "TypeScript",
        "R",
        "MATLAB",
        "Perl",
        "Scala",
        "Rust",
        "HTML",
        "CSS",
        "SQL"
    ];
    
    $("#programming").autocomplete({
        source: programmingLanguages
    });
    
    $("#userForm").on("submit", function(event) {
        console.log("Form submitted");
    });
});