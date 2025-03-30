function loadscript(src, callback) {
    let script = document.createElement('script');
    script.src = src;
    script.onload = function(){
        console.log("loaded script with srs:",src);
        
        callback(null,src); // No error
    };
    script.onerror =function() {
        console.log("error loading:",src); 
        callback(new Error(`${src} got some error`));
    };
    document.body.appendChild(script);
}

function home(error,src) {
    if (error) {
        console.log("Error loading script:", error);
    } 
    alert("hello kavy " + src);
}

loadscript("https://chatgpt.com/", home);