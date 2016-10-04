
function upDate(previewPic){
    document.getElementById('image').innerHTML = previewPic.alt;
    document.getElementById('image').style.backgroundImage = "url("+previewPic.src+")";
 /* This function is called when the mouse hoves over img tags, which
    1) changes the url for the background image of the div with the id = "image"
    to the source file of the preview image,

    2) changes the text of the div with the id = "image"
    to the alt text of the preview image
    */
}



function unDo(){
    document.getElementById('image').innerHTML = "Hover over an image below to display here!";
    document.getElementById('image').style.backgroundImage = "";
/* This function is called when the mouse pointer exits img tags, which
1) updates the url for the background image of the div with the id = "image"
back to the orginal-image,

2) changes the text of the div with the id = "image"
back to the original text.
*/
}