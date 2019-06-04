function Contact(name) {
  this.name = name;
}

Contact.prototype.helloSync = function() {
  console.log('Hello my name is ' + this.name);
};

Contact.prototype.helloAsyncClosure = function() {
  var that = this;
  setTimeout(function() {
    console.log('Hello my name is ' + that.name);
  }, 100);
};

Contact.prototype.helloAsyncMethod = function() {
  setTimeout(bind(this.helloSync, this), 100);
};

var contact = new Contact('Romain');
contact.helloSync();
contact.helloAsyncClosure();
contact.helloAsyncMethod();

function bind(fn, thisArg) {
  return function() {
    return fn.apply(thisArg, arguments);
  };
}
