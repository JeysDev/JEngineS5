var loadResource = function (url, callback) {
    var request = new XMLHttpRequest();
    request.open("GET", url, true);
    request.onload = function () {
        if (request.status < 200 || request.status > 299) {
            callback("Error http status");
        } else {
            callback(null, request.responseText);
        }
    };
    request.send();
};


var loadFile = function(url){
    loadTextResource(url, function (error, text) {
        if (error) {
            alert("Fatal error getting vertex shader");
        } else {
            console.log(text);
        }
    });
}
//resizing
loadTextResource("Resources/vertexShader.glsl", function (error, text) {
    if (error) {
        alert("fatal error getting vertex shader");
    } else {
        console.log(text);
    }
});
