class model {
    array = ['hello', 'hola', 'manish', 'nanu',];
    content = '';
    constructor(selector: String){
        for(let i=0; i < this.array.length; i++){
            this.content += '<p>'+ this.array[i] +'</p>';
        }

        $(selector).html(this.content);
    }
}