function Contact(name) {
  this.name = name;
}

Contact.prototype.helloSync = function() {
  console.log('Hello my name is ' + this.name);
};

Contact.prototype.helloAsyncClosure = function() {
  setTimeout(function() {
    console.log('Hello my name is ' + this.name);
  }.bind(this), 100);
};

Contact.prototype.helloAsyncMethod = function() {
  setTimeout(this.helloSync.bind(this), 100);
};

var contact = new Contact('Romain');
contact.helloSync();
contact.helloAsyncClosure();
contact.helloAsyncMethod();
