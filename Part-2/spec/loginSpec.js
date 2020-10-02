describe("login", () => {
    describe("when the user logs in successfully", () => {
        it("should resolve a token", () => {

            //create a response object with the response 
            //we want the promise that Api.login() returns to give us.
            const response = {token: 123};

            //create the Promise that Api.login() is going to return
            const loginValue = new Promise((resolve, reject) => {
                resolve(response);
            });

            //using a spy to modify Api.login() to instead 
            //return our Promise we created (loginValue), instead of calling the real API.
            spyOn(Api, "login").and.returnValue(loginValue);

            //tell Jasmine to wait for our Promise to resolve
            return expectAsync(login("test","test")).toBeResolvedTo(response.token);
        });
    });

    describe("when the user uses an incorrct email", () => {
        it("should reject with an error message", () => {
            const response = {error: "user not found"};

            const loginValue = new Promise((resolve, reject) => {
                resolve(response);
            });

            spyOn(Api, "login").and.returnValue(loginValue);

            return expectAsync(login("test","test")).toBeRejectedWithError("Oops! Incorrect username or password. Check your details and try again.")
        });
    });

    describe("when the user uses a password is not a password", () => {
        it("should reject with an error messgae", () => {
            const response = {error: "Missing password"};

            const loginValue = new Promise((resolve, reject) => {
                resolve(response);

            });

            spyOn(Api, "login").and.returnValue(loginValue);

            return expectAsync(login("test", "test")).toBeRejectedWithError("Oops! Missing password, make sure to fill in your password and try again.");
        });
    });

});

// describe("clickButton", () => {
//     describe("when the user click login button", () => {
//         it("should Logged in with token", () => {
//             const originalToken = login.token;
//             login.token = 123456789;

//             // const email = loginEmail.value;
//             // loginEmail.value = "monali@gmail.com"
    
//             // const password = loginPassword.value;
//             // loginPassword.value = "123";

//             const result = clickButton();

//             expect(result).toBe("Logged in with token 123456789");
//             login.token = originalToken;

//               })
              
//               spyOn(Api, "login").and.returnValue(loginValue);
//             return clickButton.then(() => {
//                 expect(loginMessage.innerText).toBe('Logged in with token ' + login.token)


//         });
    
//             // spyOn(Api, "login").and.returnValue(loginValue);

//             // return clickButton.then( () => {
//             //     expect(loginMessage.innerText).toBe("Logged in with token 123456789");
//             // });
//     });
    
// });
    
