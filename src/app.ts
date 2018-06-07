import { RouterConfiguration, NavigationInstruction, Router, RouteConfig } from 'aurelia-router';
import { PLATFORM } from 'aurelia-pal';

export class App {
  router: Router;

  configureRouter(config: RouterConfiguration, router: Router): void {
    this.router = router;
    config.title = 'Aurelia';

    const handleUnknownRoutes = (instruction: NavigationInstruction): RouteConfig => {
      return { route: 'not-found', moduleId: 'not-found' };
    };

    config.mapUnknownRoutes(handleUnknownRoutes);

    config.map([
      { route: ['', 'home'], name: 'home', moduleId: PLATFORM.moduleName('./filepicker/filepicker'), nav: true, title: 'Home'},
      { route: 'http', name: 'http', moduleId: PLATFORM.moduleName('./httprequest/httprequest'), nav: true, title: 'Http' }
    ]);
  }


}