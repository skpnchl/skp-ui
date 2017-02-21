var model = (function () {
    function model(selector) {
        this.array = ['hello', 'hola', 'manish', 'nanu',];
        this.content = '';
        for (var i = 0; i < this.array.length; i++) {
            this.content += '<p>' + this.array[i] + '</p>';
        }
        $(selector).html(this.content);
    }
    return model;
}());
