import { Router } from './util/router.js';
import NavbarComponent from './components/navbar/navbar.js';
import LoginComponent from './components/login/login.js';
import DashboardComponent from './components/dashboard/dashboard.js';

let routes = [
    {
        path: '/login',
        component: LoginComponent
    },
    {
        path: '/dashboard',
        component: DashboardComponent
    }
];

const router = new Router(routes);

/*
    When the window is finished loading the document, we will:
        1. Render the NavbarComponent to the screen.
        2. Navigate the main view to the LoginComponent
*/
window.onload = () => {
    console.log('window loaded')

    NavbarComponent.render();
    router.navigate('/login');
}

export default (() => router)();