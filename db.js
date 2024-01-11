
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
  import { getDatabase,ref ,set ,get,child } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
  
  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyBso6b8KeZhCR7h57tEbnaf89t8HRix5IQ",
    authDomain: "soilagent.firebaseapp.com",
    databaseURL: "https://soilagent-default-rtdb.firebaseio.com",
    projectId: "soilagent",
    storageBucket: "soilagent.appspot.com",
    messagingSenderId: "1023571000748",
    appId: "1:1023571000748:web:3dd4ca2613839d34404e09"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  const db = getDatabase(app);
  document.getElementsById("login").addEcentListener("click",function(e)){
    e.preventDefaultg();
    set(ref(db, 'user/' + document.getElementById("username").value),
    {
        username: document.getElementById("username").value,
        password: document.getElementById("password").value

    });
    alert("Login Successfull !")
  }