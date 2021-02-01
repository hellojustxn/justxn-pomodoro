
# Pomodoro Timer for Twitch, YouTube, OBS

As seen on my livestreams! I made this since I couldn't find an aesthetically pleasing live stream timer that can automatically begin each session :( 

Demo: https://pomo.justxn.com/

# Features
- Auto start timer! No setup required :)
- Customizeable work and break durations
- Default Values
  - Work: 25 minutes
  - Short break: 1 minutes
  - long break: 15 minutes (These occur every 4 intervals)
  - sessions: 6

# Customizing Time Values

Supports query parameters, here are a few examples.

### "Desktime" (Pomodoro Technique Variation)
Work duration: 52 minutes
Short Break: 17 minutes
Long Break: 17 minutes
Sessions: 6
```
https://pomo.justxn.com/?work=52&shortbreak=17&longbreak=17&sessions=6
```

### "Extend Pomodoro"
Work duration: 45 minutes
Short Break: 5 minutes
Long Break: 20 minutes
Sessions: 6
```
https://pomo.justxn.com/?work=45&shortbreak=5&longbreak=20&sessions=6
```
