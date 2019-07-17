import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class AddGistController extends Controller {
    // now our component has access to the gistsInfo component
    @service gistsInfo

    @action
    addFile(body, description, fileName) {
        // alert(body, description, filename)
        this.gistsInfo.addGist({ body, description, fileName })
        this.transitionToRoute('/');
    }
}
