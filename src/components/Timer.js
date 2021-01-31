import React, { useState, useEffect } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

const end = new Date()

const Timer = ({ workDuration, shortBreak, longBreak, numberOfSessions}) => {
  var duration = workDuration // 25 Minutes(s) Default
  const SHORTBREAK = shortBreak
  const LONGBREAK = longBreak
  const WORK = workDuration
  useEffect(() => {
    end.setTime(Date.now() + duration * 60000)
  },[]);
  const [totalSeconds, setTotalSeconds] = useState(duration * 60)
  const [progress, setProgress] = useState(0)
  const [sessions, setSessions] = useState(1) // Number of sessions finished
  const [beginInterval, setBeginInterval] = useState(false) // Ensures that timer doesn't go on to the next timer
  const [totalSessions, setTotalSessions] = useState(numberOfSessions)
  const [mode, setMode] = useState(0) // 0 durationing, 1 short break, 2 long
  const [minutes, setMinutes] = useState(duration)
  const [seconds, setSeconds] = useState(totalSeconds % 60)
  const [color, setColor] = useState('primary')
  const [isComplete, setIsComplete] = useState(false)

  useEffect(() => {
    setBeginInterval(true);
    const timer = setTimeout(updateElapsedTime, 1000);
    if (isComplete) {
      clearTimeout(timer);
    }
  });

  const calculateElapsedTime = (startTime, endTime) => {
    return Math.abs(endTime - startTime)
  }

  const updateElapsedTime = () => {
    const remainingTime = calculateElapsedTime(Date.now(), end)
    setProgress(totalSeconds - Math.floor(remainingTime / 1000))
    setSeconds(Math.floor((remainingTime / 1000) % 60))
    setMinutes(Math.floor((remainingTime / 60000)))

    if (beginInterval) {
      // Times up!
      
      if (sessions === totalSessions) {
        setIsComplete(true);
      }
      else if (progress === totalSeconds) {
        setProgress(0)
        switch (mode) {
          // End duration
          case 0:
            duration = SHORTBREAK
            setColor('secondary')
            setMode(1)
            if (sessions % 4 === 0 && sessions !== 0) {
              setColor('secondary')
              duration = LONGBREAK
              setMode(2)
            }
            break;
          // End Short break
          case 1:
            duration = WORK
            setSessions(sessions + 1)
            setColor('primary')
            setMode(0)
            break;
          // Long break
          case 2:
            duration = WORK
            setSessions(sessions + 1)
            setColor('primary')
            setMode(0)
            break;
          default:
        }
        setBeginInterval(false)
        setTotalSeconds(WORK * 60)
        end.setTime(Date.now() + WORK * 60000)
      }
    }
  }

  return (
    <Box size = "500px" position="relative" display="inline-flex">
      <CircularProgress size="550px" variant="determinate" color={isComplete ? 'secondary' : color} value={ isComplete ? 100 : ((totalSeconds - progress) / totalSeconds) * 100} />
      <Box
        top={0}
        left={0}
        bottom={0}
        right={0}
        position="absolute"
        display={isComplete ? 'none' : 'flex'}
        alignItems="center"
        justifyContent="center"
      >
        <div>
          <Typography color="initial" variant="h1">
            {minutes}:{seconds === 0 || seconds < 10 ? "0" + seconds : seconds}
          </Typography>
          <Typography color="initial" variant="h2">
            {sessions}/{totalSessions}
          </Typography>
        </div>
      </Box>
      <Box
        top={0}
        left={0}
        bottom={0}
        right={0}
        position="absolute"
        display={isComplete ? 'flex' : 'none'}
        alignItems="center"
        justifyContent="center"
      >
        <div>
          <Typography color="initial" variant="h2">
            Completed
          </Typography>
          <Typography color="initial" variant="h1">
            {sessions}/{totalSessions}
          </Typography>
        </div>
      </Box>
    </Box>
  );
};

export default Timer;