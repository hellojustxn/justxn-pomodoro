import logo from './logo.svg';
import './App.css';
import Timer from './components/Timer';
import { MuiThemeProvider } from '@material-ui/core';
import { createMuiTheme } from '@material-ui/core/styles';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";




function App() {
  // A custom hook that builds on useLocation to parse
  // the query string for you.
  // function useQuery() {
  //   return new URLSearchParams(useLocation().search);
  // }

  // let query = useQuery();

  const theme = createMuiTheme({
    palette: {
      secondary: {
        // This is green.A700 as hex.
        main: '#388e3c',
      },
      success: {
        // This is green.A700 as hex.
        main: '#4caf50',
      },
    },
  });

  var duration = 25


  // if (query.get("work")) {
  //   duration = query.get("work")
  // }

  return (
    <MuiThemeProvider theme= {theme}  >
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/">
              <header className="App-header">
                <div>
                  <Timer
                    workDuration={duration}
                    shortBreak={1}
                    longBreak={5}
                    numberOfSessions={5} />
                </div>
              </header>
            </Route>
            <Route path="/stream">
              <div className="App-stream">
              <Timer
                workDuration={duration}
                shortBreak={1}
                longBreak={5}
                numberOfSessions={5} />
              </div>
            </Route>
          </Switch>
        </Router>
      </div>
    </MuiThemeProvider>
  );
}

export default App;
