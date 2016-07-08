

var myButton = document.getElementById('try-button');

myButton.addEventListener("click", function(){
    document.body.style.backgroundColor = "#aa2727"}, false);


var showImage = document.getElementById("hidden-image");

showImage.addEventListener("click", function(){ showImage.style.visibility = "visible" }, false);


<script type = "text/javascript">
        function pic1()
        {
            document.getElementById("http://www.petmd.com/sites/default/cache/imagecache/node-gallery-display/shutterstock_19820554-slide1.jpg").src http: = "picture 1 source";
        }
        function pic2()
        {
            document.getElementById("http://www.petmd.com/sites/default/cache/imagecache/node-gallery-display/shutterstock_19820554-slide1.jpg").src ="picture 2 source";
        } </script>





    <img src = "http://www.petmd.com/sites/default/cache/imagecache/node-gallery-display/shutterstock_19820554-slide1.jpg" id = "img"/> <input type="button" value="Show Picture
    1" onclick="pic1()"/> <input type="button" value="Show Picture 2"
    onclick="pic2()"/>
