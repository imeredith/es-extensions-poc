const app = require('./app.handlebars');
require('./app.css');
window.extensionStore.register("test.ext", function(context) {
    context.container.innerHTML = app({index: context.index}) 
    var div = document.getElementById("extensionB_container");
    var ext = window.extensionStore.getExtensions("extB");

    for(var i = 0; i < ext.length; i++) {
        var newDiv = document.createElement("div");
        newDiv.className = "extdiv"
        div.appendChild(newDiv);
        ext[i]({container: newDiv});
    }
})

