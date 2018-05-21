const app = require('./app.handlebars');
window.extensionStore.register("test.ext", function(context) {
    context.container.innerHTML = app({index: context.index}) 
    var div = document.getElementById("extensionB_container");
    var ext = window.extensionStore.getExtensions("extB");

    for(var i = 0; i < ext.length; i++) {
        var newDiv = document.createElement("div");
        div.appendChild(newDiv);
        ext[i]({container: newDiv});
    }
})

