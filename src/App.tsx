import { IonApp, IonRouterOutlet, IonSplitPane, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Redirect, Route } from 'react-router-dom';
import Menu from './components/Menu';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/**
 * Ionic Dark Mode
 * -----------------------------------------------------
 * For more info, please see:
 * https://ionicframework.com/docs/theming/dark-mode
 */

/* import '@ionic/react/css/palettes/dark.always.css'; */
/* import '@ionic/react/css/palettes/dark.class.css'; */
import '@ionic/react/css/palettes/dark.system.css';

/* Theme variables */
import './theme/variables.css';
import PostDetails from "./pages/PostDetails";
import CategoryPosts from "./pages/CategoryPosts";
import AllPosts from "./pages/AllPosts";
import Terms from "./pages/About";
import Contact from "./pages/Contact";
import About from "./pages/About";
import AllArticles from "./pages/AllArticles";

setupIonicReact();

const App: React.FC = () => {
  return (
    <IonApp>
      <IonReactRouter>
        <IonSplitPane contentId="main">
          <Menu />
          <IonRouterOutlet id="main">
            <Route exact path="/" component={AllArticles} />
            <Route path="/contact" component={Contact} exact />
            <Route path="/about" component={About} exact />
            <Route path="/posts" component={AllPosts} exact />
            <Route path="/category/:categoryId" component={CategoryPosts} />
            <Route path="/post/:postId" component={PostDetails} />
          </IonRouterOutlet>
        </IonSplitPane>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
