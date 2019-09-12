//
// function signUp(event) {
//    event.preventDefault();
//    const email = document.querySelector('.email');
//    const password = document.querySelector('.password');
//    const username = document.querySelector('.username');
//    fetch('http://thesi.generalassemb.ly:8080/signup', {
//            method: 'POST',
//            headers: {
//                'Content-Type': 'application/json'
//            },
//            body: JSON.stringify({
//                email: email.value,
//                password: password.value,
//                username: username.value
//            })
//    })
//    .then((res) => {
//        return res.json();
//        console.log(res);
//    })
//
//    .then((res) => {
//        localStorage.setItem('user', res.token);
//        console.log(res)
//    })
//    .catch((err) => {
//        console.log(err);
//    })
//    .then(window.location.href = "home.html");
// }
// document.getElementById('signupForm').addEventListener(onclick, alertUser("Thank you and welcome to theVyne!"))


function createProfile(event) {
   event.preventDefault();
   fetch('http://thesi.generalassemb.ly:8080/profile', {

           method: 'POST',
           headers: {
               'Content-Type': 'application/json'
           },
           body: JSON.stringify({
               additionalEmail: additionalEmail.value,
               mobileNumber: mobile.value,
               address: address.value
           })
   })

   .then((res) => {
       return res.json();
       console.log(res);
   })

   .then((res) => {
       localStorage.getItem('user', res.token);
       console.log(res)

   })
 }

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
      })
       .then(window.location.href = "home.html");


          if(res.httpStatus !== 'BAD_REQUEST') {
            window.location.href = "home.html";

            }else{
              localStorage.clear();
            }
        }

        //localStorage.setItem('name', res.username);
            //if (res.username) {
            //document.querySelector('.signupForm').style.display = "none";
            //document.querySelector('h3').innerText = 'Welcome to the Upside Down';
            //}
         //const printUserName =document.querySelector('.username');
           //userName=test.userName;
           //manipulateDom(`${userName}`)
         //createPost();
     // })

  //    .catch((err) => {
  //        console.log(err);
  //    })
  // }


function updateDom(data) {
   document.querySelector('.signupForm').style.display = "none";
   document.querySelector('.loginForm').style.display = "none";
   document.querySelector('.postForm').style.display = "block";
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

  function updateDom() {
     document.querySelector('.signupForm').style.display = "none";
     document.querySelector('.postForm').style.display = "block";
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
   })
   .catch((err) => {
       console.log(err);
  })
}

// function deletePost(event) {
//    event.preventDefault();
//    const title = document.querySelector('.title');
//    const description = document.querySelector('.description');
//    const delete = document.querySelector('')
//    fetch("http://thesi.generalassemb.ly:8080/post/1", {
//        method: 'DELETE',
//        headers: {
//            "Authorization": "Bearer " + localStorage.getItem('user'),
//            "Content-Type": "application/json"
//        },
//        body: JSON.stringify({
//            title: title.value,
//            description: description.value
//        })
//    })
//    .then((res) => {
//        console.log(res);
//        updateDom(res);
//    })
//    .catch((err) => {
//        console.log(err);
//    })
// }
// document.button.addEventListener(onclick, deletePost);


function createLogin(event) {
   event.preventDefault();
   const email = document.querySelector('.email');
   const password = document.querySelector('.password');
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
   // .then((res) => {
   //     window.alert("Welcome back, " + user.value)
   // })
   //
   .then((res) => {
       const loginForm=document.querySelector(".loginForm");
       loginForm.style.display="none";
})
   .catch((err) => {
       console.log(err);
     })
  }



  function openNav() {
    document.getElementById("signUpPopOut").style.width = "280px";
  }

  function closeNav() {
    document.getElementById("signUpPopOut").style.width = "0";
  }
