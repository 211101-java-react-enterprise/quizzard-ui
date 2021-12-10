import { ViewComponent } from "../view.js";
import router from '../../app.js';

LoginComponent.prototype = new ViewComponent('login');
function LoginComponent() {

    let usernameFieldElement;
    let passwordFieldElement;
    let loginButtonElement;
    let errorMessageElement;

    let username = '';
    let password = '';

    function updateUsername(e) {
        username = e.currentTarget.value;
    }

    function updatePassword(e) {
        password = e.currentTarget.value;
    }

    function updateErrorMessage(errorMsg) {
        console.log('updateErrorMessage invoked');
    }

    async function login() {
        
        if (!username || !password) {
            updateErrorMessage('You need to provide a username and a password!');
            return;
        }

        let credentials = {
            username: username,
            password: password
        }

        try {

            let resp = await fetch('http://localhost:5000/quizzard/auth', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(credentials)
            });

            if (resp.status === 204) {
                router.navigate('/dashboard');
            }

        } catch (e) {
            console.error(e);
            updateErrorMessage('No account matching provided credentials!');
        }

    }

    this.render = function() {

        LoginComponent.prototype.injectStyleSheet();
        LoginComponent.prototype.injectTemplate(() => {

            usernameFieldElement = document.getElementById('login-form-field-username');
            passwordFieldElement = document.getElementById('login-form-field-password');
            loginButtonElement = document.getElementById('login-form-button');
            errorMessageElement = document.getElementById('error-msg');

            usernameFieldElement.addEventListener('keyup', updateUsername);
            passwordFieldElement.addEventListener('keyup', updatePassword);
            loginButtonElement.addEventListener('click', login);

            // window.history.pushState('login', 'LoginComponent', '/login');

        });
        
    }

}

export default new LoginComponent();