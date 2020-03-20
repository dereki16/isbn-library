$(document).ready(function(){
    
    $("button").on("click", function(){
        
        var isbnNum = $("#isbnNum").val();
        
        $.ajax({
            
            method:"GET",
            url:"https://openlibrary.org/api/books?bibkeys=ISBN:" + isbnNum + "&format=json&jscmd=data",
            datatype: "json",
            success: function(data)
            {
                //console.log(data["ISBN:" + isbnNum]);
                //console.log(data["ISBN:" + isbnNum]["cover"]["large"]);
                //console.log(data["ISBN:" + isbnNum]["title"]);
                //console.log(data["ISBN:" + isbnNum]["authors"][0]["name"]);
                //console.log(data["ISBN:" + isbnNum]["publish_date"]);
                //console.log(data["ISBN:" + isbnNum]["publishers"][0]["name"]);
                //console.log(data["ISBN:" + isbnNum]["number_of_pages"]);
                
                $("#bookIMG").html("");
                $("#title").html("");
                $("#author").html("");
                $("#publish_year").html("");
                $("#publisher").html("");
                $("#isbn").html("");
                $("#pages").html("");
                
                $("#bookIMG").append("<img class='cover' src='" + data["ISBN:" + isbnNum]["cover"]["medium"] + "' />");
                $("#title").append("Title: " + data["ISBN:" + isbnNum]["title"]);
                $("#author").append("Author: " + data["ISBN:" + isbnNum]["authors"][0]["name"]);
                $("#publish_year").append("Publish: " + data["ISBN:" + isbnNum]["publish_date"]);
                $("#publisher").append("Publisher: " + data["ISBN:" + isbnNum]["publishers"][0]["name"]);
                $("#isbn").append("ISBN: " + isbnNum);
                $("#pages").append("Pages: " + data["ISBN:" + isbnNum]["number_of_pages"]);
                
                
            }, //success
            error: function(error)
            {
                console.log(error);
            }
            
        });//AJAX
        
        
    });//Button function
    
    
});//Document ready