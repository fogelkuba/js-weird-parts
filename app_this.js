function a () {
    console.log(this);
}

var b = function() {
    console.log(this);
}

var c = () => {
    console.log(this);
}

a();
b();
c();



var d = {
    name: 'The D obj',
    log: function(){

        var self = this;

        this.name = ' updated D obj';
        console.log(this);
        console.log(self);
        
        var setName = function(newname){
            // console.log(this);   
            // console.log(this);
            this.name = newname;
        }
        // console.log(this);   
        setName('updated again')
    }
}

d.log();


function functionE(a, b, c) {
    console.log(arguments);

}

functionE('test1', 'test2 ', 'test3')