let userName = "";
setInterval(()=>{
  if (document.querySelector("#app > div > div")) {
    document.querySelector("#app > div > div").style.backgroundColor = "black"
  }

  if (document.querySelector("#app > div > div > div.styles__feedbackContainer___7PzgR-camelCase > div")) {
    document.querySelector("#app > div > div > div.styles__feedbackContainer___7PzgR-camelCase > div").setAttribute("style", "cursor: pointer;")
  }
  
  if (document.querySelector("#header")) {
    document.querySelector("#header").style.backgroundColor = "black"
  }
  
  if (document.querySelector("#header > div.styles__headerTextLeft___3zPwI-camelCase")) {
    userName = document.querySelector("#header > div.styles__headerTextLeft___3zPwI-camelCase").innerText;
  }
  
  if (document.querySelector("#app > div > div > div.arts__regularBody___1TM6E-camelCase.styles__body___12LVw-camelCase > div.styles__terminal___-b2QX-camelCase > div.styles__introHeader___Dzfym-camelCase")) {
    document.querySelector("#app > div > div > div.arts__regularBody___1TM6E-camelCase.styles__body___12LVw-camelCase > div.styles__terminal___-b2QX-camelCase > div.styles__introHeader___Dzfym-camelCase").innerHTML = `WELCOME, ${userName.toUpperCase()}`
  }
  
  if (document.querySelector("#app > div > div > div.styles__loadingText___2fDqU-camelCase")) {
    document.querySelector("#app > div > div > div.styles__loadingText___2fDqU-camelCase").innerText = "[LOADING]\nGet Ready"
  }
  
  if (document.querySelector("#app > div > div > div.arts__regularBody___1TM6E-camelCase.styles__body___12LVw-camelCase > div.styles__terminal___-b2QX-camelCase > div:nth-child(3) > div:nth-child(1)")) {
    document.querySelector("#app > div > div > div.arts__regularBody___1TM6E-camelCase.styles__body___12LVw-camelCase > div.styles__terminal___-b2QX-camelCase > div:nth-child(3) > div:nth-child(1)").innerText = ""
  }
  
  if (document.querySelector("#header > div.styles__headerRight___D5pQ1-camelCase > div")) {
    document.querySelector("#header > div.styles__headerRight___D5pQ1-camelCase > div").innerText = document.querySelector("#header > div.styles__headerRight___D5pQ1-camelCase > div").innerText.replace("₿", "Crypto: ")
  }
  
  if (document.querySelector("#app > div > div > div.arts__regularBody___1TM6E-camelCase.styles__body___12LVw-camelCase > div.styles__terminal___-b2QX-camelCase > div:nth-child(3) > div:nth-child(2)")) {
    document.querySelector("#app > div > div > div.arts__regularBody___1TM6E-camelCase.styles__body___12LVw-camelCase > div.styles__terminal___-b2QX-camelCase > div:nth-child(3) > div:nth-child(2)").innerText = "> Welcome to the terminal."
  }
  
  if (document.querySelector("#app > div > div > div.arts__regularBody___1TM6E-camelCase.styles__body___12LVw-camelCase > div.styles__terminal___-b2QX-camelCase > div:nth-child(3) > div:nth-child(3)")) {
    document.querySelector("#app > div > div > div.arts__regularBody___1TM6E-camelCase.styles__body___12LVw-camelCase > div.styles__terminal___-b2QX-camelCase > div:nth-child(3) > div:nth-child(3)").innerText = "> Choose between one of the passwords below."
  }
  
  if (document.querySelector("#app > div > div > div:nth-child(3) > div > div.styles__answersHolder___3LYNs-camelCase")) {
    document.querySelector("#app > div > div > div:nth-child(3) > div > div.styles__answersHolder___3LYNs-camelCase").children.forEach(e=>{
      e.firstChild.style.backgroundColor = "white"
    })
  }
}, 1)
  
