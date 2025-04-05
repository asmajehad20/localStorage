localStorage.setItem("name", "asma");
localStorage.setItem("msg", "i hope you have a nice day ~^^~");

document.querySelector(".mainP").innerHTML= "hi, i'm " + localStorage.getItem("name") + "<br>" + localStorage.getItem("msg");