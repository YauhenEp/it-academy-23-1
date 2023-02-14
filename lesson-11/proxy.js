class Login {
    login() {
        console.log(`You have access`)
    }

    logout() {
        console.log(`You are logout`)
    }
 }

 class SecureLogin {
     constructor(login) {
         this.login = login
     }

     getAccess(password) {
         if(password === 'password') {
             this.login.login()
         } else {
             console.log(`You do not have access`)
         }
     }

     close() {
         this.login.logout()
     }
 }

 let login = new SecureLogin(new Login());

login.getAccess('password');
login.close();
login.getAccess('password122');
