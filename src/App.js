import logo from './logo.svg';
import './App.css';
import Timer from './components/Timer';
import { MuiThemeProvider } from '@material-ui/core';
import { createMuiTheme } from '@material-ui/core/styles';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useLocation
} from "react-router-dom";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}


function App() {
  let query = useQuery();

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

  var work = 25
  var shortbreak = 1
  var longbreak = 15
  var sessions = 6
  var isStream = 0

  console.log(typeof (parseInt(query.get("work"))))
  console.log(typeof (query.get("work")) === 'number')

  // Validate input otherwise use default values
  // query.getAll()
  if (!isNaN(query.get("work")) && query.get("work") != null) {
    work = query.get("work")
  }
  if (!isNaN(query.get("shortbreak")) && query.get("shortbreak") != null) {
    shortbreak = query.get("shortbreak")
  }
  if (!isNaN(query.get("longbreak")) && query.get("longbreak") != null) {
    longbreak = query.get("longbreak")
  }
  if (!isNaN(query.get("sessions")) && query.get("sessions") != null) {
    sessions = query.get("sessions")
  }
  // if (!isNaN(query.get("stream")) && query.get("stream") != null) {
  //   if (parseInt(query.get("stream")) === 1 || parseInt(query.get("stream")) === 0) {
  //     isStream = query.get("stream")
  //   }
  //   console.log(isStream)
  // }

  return (
    <MuiThemeProvider theme= {theme}  >
      <div className="App">
        {/* <Router> */}
          <Switch>
            <Route exact path="/">
              <header className="App-header">
                <div>
                  <Timer
                  workDuration={work}
                  shortBreak={shortbreak}
                  longBreak={longbreak}
                  numberOfSessions={sessions} />
                </div>
              </header>
            </Route>
            <Route path="/stream">
              <div className="App-stream">
              <Timer
              workDuration={work}
              shortBreak={shortbreak}
              longBreak={longbreak}
              numberOfSessions={sessions} />
              </div>
            </Route>
          </Switch>
        {/* </Router> */}
      </div>
    </MuiThemeProvider>
  );
}

export default App;
