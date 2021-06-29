import { Switch, Route } from "react-router-dom";
import { Home } from "screens/Home";
import { Banner } from "screens/Banner";
import { RegisterName } from "screens/Register/name";
import { RegisterEmail } from "screens/Register/email";
import { Success } from "screens/Success";
import { Skills } from "screens/Skills";
import { List } from "screens/List";
import "./App.css";

import { Header } from "components/Header";
import { Header2 } from "components/Header2";

import { ContextProvider } from "context";

function App() {
  return (
    <ContextProvider>
      <Switch>
        <Route
          exact
          path="/"
          component={() => (
            <>
              <Header />
              <Banner />
            </>
          )}
        />
        <Route
          exact
          path="/home"
          component={() => (
            <>
              <Header2 />
              <Home />
            </>
          )}
        />
        <Route
          exact
          path="/register-name"
          component={() => (
            <>
              <Header2 />
              <RegisterName />
            </>
          )}
        />
        <Route
          exact
          path="/register-email"
          component={() => (
            <>
              <Header2 />
              <RegisterEmail />
            </>
          )}
        />
        <Route
          exact
          path="/skills"
          component={() => (
            <>
              <Header2 />
              <Skills />
            </>
          )}
        />
        <Route
          exact
          path="/success"
          component={() => (
            <>
              <Header2 />
              <Success />
            </>
          )}
        />
        <Route
          exact
          path="/list"
          component={() => (
            <>
              <Header2 />
              <List />
            </>
          )}
        />
      </Switch>
    </ContextProvider>
  );
}

export default App;
