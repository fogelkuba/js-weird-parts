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

        var setName = function(newname){
            console.log(this);
            
            this.name = newname;
        }
        setName('updated again')
    }
}

d.log()
d.log()