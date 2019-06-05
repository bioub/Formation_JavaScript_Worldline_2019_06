class Contact {
  constructor(name) {
    this.name = name;
  }
  // ESnext class properties (Stage 3)
  helloSync = () => {
    console.log(`Hello my name is ${this.name}`);
  };

  helloAsyncClosure() {
    setTimeout(() => {
      console.log(`Hello my name is ${this.name}`);
    }, 100);
  }
  helloAsyncMethod() {
    setTimeout(this.helloSync, 100);
  }
}


const contact = new Contact('Romain');
contact.helloSync();
contact.helloAsyncClosure();
contact.helloAsyncMethod();
