import logo from './logo.svg';
import './App.css';
import Timer from './components/Timer';
import { MuiThemeProvider } from '@material-ui/core';
import { createMuiTheme } from '@material-ui/core/styles';
import {
  BrowserRouter as
  useLocation
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
        <header className="App-header">
          <Timer 
            workDuration={duration}
            shortBreak={1}
            longBreak={5}
            numberOfSessions={5} />
            {/* // shortBreak={query.get("short") > 0 ? query.get("short") : 5}
            // longBreak={query.get("long") > 0 ? query.get("long") : 15}
            // numberOfSessions={query.get("sessions") > 0 ? query.get("sessions") : 6}/> */}
        </header>
      </div>
    </MuiThemeProvider>
  );
}

export default App;
