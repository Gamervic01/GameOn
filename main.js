const signup = document.querySelector("#signup");

signup.addEventListener("submit", (e) => {
    e.preventDefault();

    const email = document.querySelector("#SignupEmail").value;
    const password = document.querySelector("#SignupPassword").value;

    console.log(email, password)

    auth
        .createUserWithEmailAndPassword(email, password)
        .then(UserCrredential =>{
            signup.reset();
            
            console.log ("sign up")
        })
})

const login = document.querySelector("login");

login.addEventListener("Submit", e => {
    e.preventDefault();

    const email = document.querySelector("#loginEmail").value;
    const password = document.querySelector("#loginPassword").value;
    console.log(email,password)

    auth
        .signInWithEmailAndPassword(email, password)
        .then(UserCrredential =>{
            signup.reset();
            
            console.log ("sign in")
        })
})

//Google Login
const googleButton = document.querySelector("#googleLogin");

googleButton.addEventListener("click", (e) => {
  e.preventDefault();
  signInForm.reset();
  $("#signinModal").modal("hide");

  const provider = new firebase.auth.GoogleAuthProvider();
  auth.signInWithPopup(provider).then((result) => {
    console.log(result);
    console.log("google sign in");
  })
  .catch(err => {
    console.log(err);
  })
});

//post
const postlist = document.querySelector(".posts");
const setupPosts = data =>{
    if (data.lenght) {
        let html = "";
        data.forEach(doc => {
            const post = doc.data()
            const li = 
                <li class="list-group-item list-group-item-action">
                    <h5>${posts.title}</h5>
                    <p>${posts.description}</p>
                </li>
            ;
            html += li;
        });
        postlist.innerHTML = html;
    } else{
        postlist.innerHTML = "<p class="text-center">Inicia sesion para ver las publicaciones </p>";
    }
}


//eventos
auth.onAuthStateChanged(user => {
    if (user) {
        fs.collection("posts")
            .get()
            .then((snapshot) => {
                console.log(snapshot.docs)
            })
    } else{
        console.log("auth: signout")
    }
})