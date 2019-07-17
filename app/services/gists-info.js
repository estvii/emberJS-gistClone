import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class GistsInfoService extends Service {

    get numberOfGists() {
        return this.gists.length
    }
    @tracked gists = [
        {
            fileName: "example.hbs",
            description: "just an example",
            body: "<p> An <strong>example</strong> for {{username}}</P>"
        },
        {
            fileName: "example2.hbs",
            description: "just an example2",
            body: "<p> An <strong>example2</strong> for {{username}}</P>"
        },
        {
            fileName: "example3.hbs",
            description: "just an example3",
            body: "<p> An <strong>example3</strong> for {{username}}</P>"
        },
        {
            fileName: "example4.hbs",
            description: "just an example4",
            body: "<p> An <strong>example4</strong> for {{username}}</P>"
        },
    ]

    // adds object to the above lists from any where in the app since its situated as a service
    addGist(gist) {
        this.gists.addObject(gist);
    }
}
