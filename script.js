setInterval(function(){
    console.log("Ad Skipper Extension is active");
    var skipButton = document.getElementsByClassName("ytp-ad-skip-button-modern ytp-button");
    if(skipButton != undefined && skipButton.length > 0) {
        console.log("Ad Skip Button detected and will be clicked");
        skipButton[0].click();
    }
}, 3000)
