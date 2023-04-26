//darkMode
$(".darkModeBtn").click(function() {
	$("body").toggleClass("darkModeBody");
	$("h1").toggleClass("darkH1");
	$("h2, h3, h4, h5, h6").toggleClass("darkModeHeader");
	$("nav, .searchBar").toggleClass("darkMode0");
	$("footer").toggleClass("darkFooter");
	$("i, a, #menuBtn, .darkModeBtn, p").toggleClass("darkModeText");
	$(".dropdown-list").toggleClass("dropDownDarkList");
	$(".cardBtn").toggleClass("darkMode1");
	$(".overlay").toggleClass("darkOverLay");
	$(".card, .modelPic").toggleClass("darkModeCard")});
//İnput Filter
$(".searchBar").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $(".card").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)});});
//dropButton
$("#menuBtn").click(function(){$(".dropdown-list").slideToggle();});
//Model on-off
$(".cardPic").click(function(){$(this).next(".modelWrap").css("display", "block");});
 $(".closeBtn").click(function(){$(this).parent().hide();}); 
//RİSE scroll box
$(window).scroll(function (){
 if ($(this).scrollTop() > 1050){$('#toTop').fadeIn();} 
 else {$('#toTop').fadeOut();}});
$("#toTop").click(function () {$("html, body").animate({ scrollTop: 0 }, 500);});
// Read mode... 
$("tt").toggle(
function(){$(this).prev(".cardText").css("line-clamp","20");$(this).text("less <<");},
function(){$(this).prev(".cardText").css("line-clamp","3");$(this).text("more...");},);
/* jQuery ends... 
     while(dd<href.length){
        dropDown+="<a href='"+href[dd]+"'><ion-icon name='"+icon[dd]+"'></ion-icon>"+text[dd]+"</a>";
        dd++}
    document.querySelector(".dropdown-list").innerHTML=dropDown;
    
    for responvise design
    let win = window,
    doc = document,
    docElem = doc.documentElement,
    body = doc.getElementsByTagName('body')[0],
    x = win.innerWidth || docElem.clientWidth || body.clientWidth;
    document.querySelector("h1").innerText=x;
*/