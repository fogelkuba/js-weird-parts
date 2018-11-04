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
        this.name = ' updated D obj';
        console.log(this);
    }
}

d.log()