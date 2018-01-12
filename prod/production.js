var myApp = {
  mainMessage : "Welcome to the app!",

  mainGreeting() {
    console.log('hey! welcome to my app');
  }
};

myApp.module1 = {
  saySomething(message){
    console.log(myApp.mainMessage, message, 'I am a module!');
  },

  doSomething() {
    console.log('called doSomething from module1');
  }
}; //put a space under this line (a line break)

myApp.module1 = {
  saySomething(message){
    console.log(myApp.mainMessage, message, 'I am a module!');
  },

  doSomething() {
    console.log('called doSomething from module1');
  }
}; //put a space under this line (a line break)

(() => {
  myApp.mainGreeting();

  myApp.module.saySomething('oh hello');

  function myFunc() {
    var theHeading = document.querySelector('h1').textContent = myApp.mainMessage;
  }

  myFunc();

})();
