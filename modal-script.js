// Get modals
var modals = document.getElementsByClassName("modal");

// Fill arrays of view buttons, modal images, caption texts, and close button span elements
var views = document.getElementsByClassName("view");
var modalImgs = document.getElementsByClassName("modalImg");
var captionTexts = document.getElementsByClassName("caption");
var spans = document.getElementsByClassName("close");

//for every modal image...
for(let i = 0; i < modalImgs.length; i++){
    views[i].onclick = function(){
        //when 'view' button is clicked, open image modal
        modals[i].style.display = "block";
        modalImgs[i].src = document.getElementsByClassName("myImgs")[i].src;
        captionTexts[i].innerHTML = document.getElementsByClassName("myImgs")[i].alt;
    }
    // Get the <span> element that closes the modal
    // When the user clicks on <span> (x), close the modal
    spans[i].onclick = function() { 
        modals[i].style.display = "none";
    }
}





