
$(document).ready(function(){
	
 /***menu active**/

 
 
 /**Tab mobil Menu navbar active code**/
 const bar = document.getElementById('bar');
 const close = document.getElementById('close');
 const nav = document.getElementById('navbar');
 
 if (bar){
	 bar.addEventListener('click', () => {
		 nav.classList.add('active');
		 
	 })
 } 
 
 if (close){
	 close.addEventListener('click', () => {
		 nav.classList.remove('active');
		 
	 })
 }
/**Tab mobil Menu navbar active code End**/

/**click by Big ima**/
var MaiNimg = document.getElementById("MaiNimg");
var smalling = document.getElementsByClassName("small-img");

smalling[0].onclick = function(){
	MaiNimg.src = smalling[0].src;
}
smalling[1].onclick = function(){
	MaiNimg.src = smalling[1].src;
}
smalling[2].onclick = function(){
	MaiNimg.src = smalling[2].src;
}
smalling[3].onclick = function(){
	MaiNimg.src = smalling[3].src;
}

/**click by Big ima End**/


 /**sticky**/
 
 $(".sticky").sticky({
    topspacing: 0
});


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')
    
const scrollActive = () =>{
  	const scrollDown = window.scrollY

	sections.forEach(current =>{
		const sectionHeight = current.offsetHeight,
			  sectionTop = current.offsetTop - 58,
			  sectionId = current.getAttribute('id'),
			  sectionsClass = document.querySelector('.nav_menu a[href*=' + sectionId + ']')

		if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
			sectionsClass.classList.add('active-link')
		}else{
			sectionsClass.classList.remove('active-link')
		}                                                    
	})
}
window.addEventListener('scroll', scrollActive)
















});