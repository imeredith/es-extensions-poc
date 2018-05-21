const app = require('./app.handlebars');
window.extensionStore.register("test.ext", function(context) {
     context.container.innerHTML = app({index: context.index})
})