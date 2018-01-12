(() => {
  myApp.mainGreeting();

  myApp.module.saySomething('oh hello');

  function myFunc() {
    var theHeading = document.querySelector('h1').textContent = myApp.mainMessage;
  }

  myFunc();

})();
