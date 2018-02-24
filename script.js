var banners = ["images/250X110668568400.jpg", "images/banner_atar.jpg", "images/paz_250x110103131473.jpg"];
var ind = 0;
setInterval(function switchBanner() { document.getElementById("to-switch").src = banners[ind]; ind += 1; ind = ind % 3; }, 3000);
