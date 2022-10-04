setInterval(() => {
    let date = new Date();
    let clock = document.getElementById('clock');
    clock.innerHTML =
      date.getHours() + ":" +
      date.getMinutes() + ":" +
      date.getSeconds()
  }, 1000);
  
  // Get user input and display
  const displayName = () => {
    const name = document.getElementById('inputText');
    const greeting = document.getElementById('greeting');
    let nameValue=name.value;
    nameValue == "" || null ? window.alert("Name must be filled out") : greeting.innerHTML = "Hello " + nameValue + "!";
  
    document.getElementById("clearBtn").click();
  }
  
  document.getElementById("inputText")
      .addEventListener("keyup", function(event) {
      event.preventDefault();
      if (event.keyCode === 13) {
          document.getElementById("displayBtn").click();
      }
  });
  
  const clearInputs = () => {
    const name = document.getElementById('inputText');
    const greeting = document.getElementById('greeting');
    name.value = ""
    // greeting.innerHTML = "";
  }
  
  const myFunctionToHello = () => {
    document.getElementById("demo").innerHTML = "Hello as .innerHTML";
  }
  
  const myFunctionToWelcome = () => {
    document.getElementById("demo").innerHTML = "Welcome to .innerHTML";
  }
  
  //Window alert
  const getTotal = () => {
    let result = 5 + 5
    window.alert("Result window alert = " + result);
  }
  
  const getExponentiation = () => {
    let x = 5
    let result = x ** 2; // same as Math.pow(x,2);
    window.alert("Result window alert = " + result);
  }
  
  const displayArrayColor = () => {
    const colors = ["white", "black", "blue"];
  
    // First method
    // let text = "";
    // for (let i = 0; i < colors.length; i++) {
    //   text += colors[i] + "<br>";
    // }
    // return document.getElementById("result").innerHTML = text;
  
    // Second method
    let text = "";
    for (let color of colors) {
      text += "<li>" + color + "</li>";
      // console.log(color);
    }
    return document.getElementById("color").innerHTML = text;
  }
  