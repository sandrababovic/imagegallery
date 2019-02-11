
/*Image gallery*/
function hobbiesGallery(){

	const highlight = document.querySelector(".hobbies-highlight");
	const previews = document.querySelectorAll(".hobbies-preview img");

	previews.forEach(preview=>{

		preview.addEventListener('click',function(){

        const smallSrc = this.src;
        const bigSrc = smallSrc.replace("small","big");
        highlight.src = bigSrc;
        previews.forEach(preview=> preview.classList.remove("hobby-active"));
        preview.classList.add("hobby-active");


		});
	});
}

hobbiesGallery();

function bgChanger() {
   if(this.scrollY > this.innerHeight / 2)
{
	document.body.classList.add("bg-active");
}

else {

	document.body.classList.remove("bg-active");
}

}
window.addEventListener("scroll", bgChanger);


// napravi funkciju koja kada se klikne na malu sliku promeni tekst sa strane
 function changeTextMusic() {
      
            document.getElementById("music-description").style.display="block";
            document.getElementById("gym-description").style.display="none";
            document.getElementById("skiing-description").style.display="none";
            document.getElementById("friends-description").style.display="none";
            document.getElementById("about-hobbies").style.backgroundImage="linear-gradient(to right top, #d16ba5, #c378b7, #b385c3, #a590ca, #999acc, #91a5d6, #89b0dd, #83bae2, #71caef, #5cdaf6, #4eeaf6, #53f9ef)";  
    }

function changeTextGym() {
      
            document.getElementById("gym-description").style.display="block";
            document.getElementById("music-description").style.display="none";
            document.getElementById("skiing-description").style.display="none";
            document.getElementById("friends-description").style.display="none";
            document.getElementById("about-hobbies").style.backgroundImage="linear-gradient(to right bottom, #d16ba5, #c378b7, #b385c3, #a590ca, #999acc, #91a5d6, #89b0dd, #83bae2, #71caef, #5cdaf6, #4eeaf6, #53f9ef)";
               
    }

 function changeTextSkiing() {
      
            document.getElementById("gym-description").style.display="none";
            document.getElementById("music-description").style.display="none";
            document.getElementById("skiing-description").style.display="block";
            document.getElementById("friends-description").style.display="none";
            document.getElementById("about-hobbies").style.backgroundImage="linear-gradient(to left bottom, #d16ba5, #c378b7, #b385c3, #a590ca, #999acc, #91a5d6, #89b0dd, #83bae2, #71caef, #5cdaf6, #4eeaf6, #53f9ef)";
               
    }   
 function changeTextFriends() {
      
            document.getElementById("gym-description").style.display="none";
            document.getElementById("music-description").style.display="none";
            document.getElementById("skiing-description").style.display="none";
            document.getElementById("friends-description").style.display="block";
            document.getElementById("about-hobbies").style.backgroundImage="linear-gradient(to left top, #d16ba5, #c378b7, #b385c3, #a590ca, #999acc, #91a5d6, #89b0dd, #83bae2, #71caef, #5cdaf6, #4eeaf6, #53f9ef)";
               
    }   

    