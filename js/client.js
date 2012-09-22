var app = Sammy('#main', function() {
    this.get('/', function() {
        this.$element().html('Hello world!');
    });
});

jQuery(function() {
    app.run();
});