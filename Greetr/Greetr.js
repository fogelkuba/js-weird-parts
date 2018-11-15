(function(global, $) {

    var Greetr = function(firstname, lastname, language){
        return new Greetr.init(firstname, lastname, language);
    };  

    var supportedLanguages = ['en', 'es'];

    var greetings = {
        en: 'Hello',
        es: 'Holla'
    };

    var formalGreeting = {
        en: 'Greetings',
        es: 'Saludos'
    };

    var logMessages = {
        en: 'Logged in',
        es: 'Inició sesión'
    }

    Greetr.prototype = {}

    Greetr.init = function(firstname, lastname, language) {
        this.self = this;
        self.firstname = firstname || '';
        self.lastname = lastname || '';
        self.language = language || 'en';
    }

    Greetr.init.prototype = Greetr.prototype;

    global.Greetr = global.G$ = Greetr;

})(window, jQuery);