// Corrected import — use '../controllers/' (plural), not '../controller/'
import { home, getTodayDate, getMonthsName, getPeople } from '../controller/controller.js';

const routes = (app) => {
    app.route('/')
        .get(home)

    app.route('/home')
        .get(home)

    app.route('/today')
        .get(getTodayDate)

    app.route('/months')
        .get(getMonthsName)

    app.route('/people')
        .get(getPeople)  
};

export default routes;
