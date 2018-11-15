(function(global, $) {

    var Greetr = function(firstname, lastname, language){
        return new Greetr.init(firstname, lastname, language);
    };  

    var supportedLanguages = ['en', 'es'];

    var greetings = {
        en: 'Hello',
        es: 'Holla'
    };

    var formalGreetings = {
        en: 'Greetings',
        es: 'Saludos'
    };

    var logMessages = {
        en: 'Logged in',
        es: 'Inició sesión'
    }

    Greetr.prototype = {

        fullname: function(){
            return this.firstname + ' ' + this.lastname;
        },

        validate: function () {
            if (supportedLanguages.indexOf(this.language) === -1 ){
                throw "Invalid language"
            }
        },

        greeting: function () {
            return this.greetings[this.language] + ' ' + this.firstname + '!'
        },

        formalGreeting: function () {
            return this.formalGreetings[this.language] + ' ' + this.fullname() + '!'
        }
    };

    Greetr.init = function(firstname, lastname, language) {
        this.self = this;
        self.firstname = firstname || '';
        self.lastname = lastname || '';
        self.language = language || 'en';
    }

    Greetr.init.prototype = Greetr.prototype;

    global.Greetr = global.G$ = Greetr;

})(window, jQuery);