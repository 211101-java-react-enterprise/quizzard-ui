import { ViewComponent } from '../view.js';

DashboardComponent.prototype = new ViewComponent('dashboard');

function DashboardComponent() {

    this.render = function() {
        console.log(DashboardComponent.prototype)
        DashboardComponent.prototype.injectStyleSheet();
        DashboardComponent.prototype.injectTemplate(() => {
            console.log('dashboard loaded');
        });
    }

}

export default new DashboardComponent();