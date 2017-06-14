export class App {
  message = 'Welcome to Aurelia!';
    configureRouter(config, router){
        config.title = 'Aurelia';

        config.map([
            { route: '',  name: 'home',moduleId: './home',  nav: false, title:'home' },
            { route: 'about',  name: 'about',moduleId: './about',    nav: true, title:'about' },
            { route: 'home',  name: 'home',moduleId: './home',  nav: true, title:'home' }
        ]);

        this.router = router;
    }
    redirect(){
        this.router.navigate("about");
    }

}
