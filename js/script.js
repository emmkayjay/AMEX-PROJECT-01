
function signUp(event) {
     event.preventDefault();
     const email = document.querySelector('.signup-email');
     const password = document.querySelector('.signup-password');
     const username = document.querySelector('.signup-username');
     fetch('http://thesi.generalassemb.ly:8080/signup', {
             method: 'POST',
             headers: {
                 'Content-Type': 'application/json'
             },
             body: JSON.stringify({
                 email: email.value,
                 password: password.value,
                 username: username.value
             })
     })

     .then((res) => {
         return res.json();
         console.log(res);
     })
     .then((res) => {
        localStorage.setItem('user', res.token);
        console.log(res);
          if(res.httpStatus !== 'BAD_REQUEST') {

            // window.location.href = "home.html";
            } else {
              // localStorage.clear();
              window.alert("Please try again");
            }
})
 .catch((err) => {
         console.log(err);
     })
  }


function createLogin(event) {
   event.preventDefault();
   const email = document.querySelector('.login-email');
   const password = document.querySelector('.login-password');
   fetch('http://thesi.generalassemb.ly:8080/login', {
           method: 'POST',
           headers: {
               'Content-Type': 'application/json'
           },
           body: JSON.stringify({
               email: email.value,
               password: password.value
           })
   })
   .then((res) => {
       return res.json();
   })
   .then((res) => {
       const loginForm=document.querySelector(".loginForm");
       window.location.href = "home.html";
})
   .catch((err) => {
       console.log(err);
     })
  }



function listPosts() {
    document.querySelector("#wall");
    fetch('http://thesi.generalassemb.ly:8080/post/list', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
          },
        })
    .then((res) => {
        console.log(res);
        return res.json();
    })

    .then((res) => {
        const list = document.querySelector('.posts');
        for (let i = 0; i < res.length; i++) {
            const item = document.createElement('li');
            const title = document.createElement('h3');
            const description = document.createElement('p');
            item.appendChild(title);
            item.appendChild(description);
            title.innerText = res[i].title;
            description.innerText = res[i].description;
            list.appendChild(item);
        }
    })



    .catch((err) => {
        console.log(err);
    })
}
listPosts();

function postData(event) {
     event.preventDefault();
     const email = document.querySelector('.email');
     const password = document.querySelector('.password');
     const username = document.querySelector('.username');
     fetch('http://thesi.generalassemb.ly:8080/signup', {
             method: 'POST',
             headers: {
                 'Content-Type': 'application/json'
             },
             body: JSON.stringify({
                 email: email.value,
                 password: password.value,
                 username: username.value
             })
     })

     .then((res) => {
         return res.json();
         console.log(res);
     })
     .then((res) => {
        localStorage.setItem('user', res.token);
        console.log(res);
        localStorage.setItem('user', res.token);
          if(res.httpStatus !== 'BAD_REQUEST') {

            window.location.href = "home.html";


            window.location.href = "home.html";
            } else {
              localStorage.clear();
            }
})

            // window.location.href = "content-page.html";
            //
            // else{
            //
            //   localStorage.clear();
            // }
}



  function updateDom(data) {
     // document.querySelector('.signupForm').style.display = "none";
     // document.querySelector('.postForm').style.display = "block";
     fetch("http://thesi.generalassemb.ly:8080/user/post", {
         headers: {
             "Authorization": "Bearer " + localStorage.getItem('user')
         }
     })
     .then((res) => {
         return res.json();
     })
     .then((res) => {
         const list = document.querySelector('.posts');
         for (let i = 0; i < res.length; i++) {
             const item = document.createElement('li');
             const title = document.createElement('h3');
             const description = document.createElement('p');
             item.appendChild(title);
             item.appendChild(description);
             title.innerText = res[i].title;
             description.innerText = res[i].description;
             list.appendChild(item);
         }
     })

     .catch((err) => {
         console.log(err);
     })
  }
function createPost(event) {
   event.preventDefault();
   const title = document.querySelector('.title');
   const description = document.querySelector('.description');
   const item = document.createElement('li');
   const postTitle = document.createElement('h3');
   const postDescription = document.createElement('p');

   fetch("http://thesi.generalassemb.ly:8080/post", {
       method: 'POST',
       headers: {
           "Authorization": "Bearer " + localStorage.getItem('user'),
           "Content-Type": "application/json"
       },
       body: JSON.stringify({
           title: title.value,
           description: description.value
       })

   })
   .then((res) => {
       console.log(res);
       updateDom(res);
for (let i = 0; i < res.length; i++);
       item.appendChild(postTitle);
       item.appendChild(postDescription);
       title.innerText = res[i].title;
       description.innerText = res[i].description;
       list.appendChild(item);
   })
   .catch((err) => {
       console.log(err);
  })
}


  function createProfile(event) {
     event.preventDefault();
     const addemail = document.querySelector('.addemail');
     const mobile = document.querySelector('.mobile');
     const address= document.querySelector('.address');
      fetch('http://thesi.generalassemb.ly:8080/profile', {
             method: 'POST',
             headers: {
                 'Content-Type': 'application/json'
             },
             body: JSON.stringify({
                 addemail: addemail.value,
                 mobile: mobile.value,
                 address: address.value
             })
     })
  .then((res) => {
         return res.json();
         console.log(res);
     })
  .then((res) => {
    localStorage.setItem('user', res.token);
         console.log(res)
     })
     .catch((err) => {
         console.log(err);
     })
  }


// CONTROLS FOR SIGNUP FORM BAR, DO NOT TOUCH
  function openNav() {
    document.getElementById("signUpPopOut").style.width = "190px";
  }
  function closeNav() {
    document.getElementById("signUpPopOut").style.width = "0";
  }
