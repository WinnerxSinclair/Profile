const t="/Profile/assets/pomo_logo-GxnXppuW.webp",e="/Profile/assets/pomo_tn-BQJkEI65.webp",o="/Profile/assets/add-pomo-DDh-vOXa.webp",i="/Profile/assets/settings-BttBjejQ.webp",s="/Profile/assets/demo_vid-BCHi83rB.mp4",n={title:"Pomo Timer",logo:t,home:e,subtitle:"Minimalist Pomodoro timer website",repo:"https://github.com/WinnerxSinclair/Pomodoro",demo:"https://winnerxsinclair.github.io/Pomodoro/",overview:[{heading:"",text:`The Pomodoro Technique is usually used for time management and productivity.
      It involves setting a timer, 30 minutes for example, then taking a short break when it ends. Rinse and repeat.`},{heading:"Motivation",text:`I'm aware it's probably more optimal to have a physical timer and write on physical paper.
      But I found this too cumbersome so I ended up failing to stick with it. So I thought of making
      my own little website where I could easily make templates and reuse them.`}],tech:[{heading:"Frontend",summary:"Vue+Vite is my go to frontend",icons:["Vue","Vite","JavaScript"]},{heading:"Backend",summary:"No backend, persistent state is handled with localStorage",icons:[]}],slides:[{name:"Home Page",media:{image:e,mode:""},overview:"The home page is the only page, it displays the active timer and exposes several functions: ",features:["Timer controls","Switching pomos","Open add pomo modal","Reset all repetitions","Open settings modal","Edit or delete pomos"]},{name:"Add Pomo Modal",media:{image:o},overview:`A simple form to add pomos, it will be autofilled based on user settings. Users can have
      different names, times, break times, and repetitions for each different pomo.`},{name:"Settings Modal",media:{image:i},overview:"Users can manipulate the functionality of several things: ",features:["Color theme","Autoplay","Form autofill values","Set CRUD (sets are like folders for pomos)"]}],challenges:[{heading:"Timer Accuracy",problem:`When setting a timer that counts down every second, it seems intuitive to just use setInterval and decrease
      the seconds every 1000 ms. The problem is that setInterval isn't guaranteed to always be on time every 1000ms, it can get
      blocked by the event loop or get out of sync if the browser tab goes idle.`,solution:[{summary:`An easy way to fix this is my snapshotting the current time when the timer starts and then 
          updating the remaining time with the snapshot. Now when the interval does run, it will always update
          the timer to the correct time, even if the interval got out of sync somehow.`,code:{caption:"",lang:"js",codeBlock:`
            function runTimer(duration, onDone){
              clearInterval(runtime.id);
              const start = Date.now();
              runtime.leftMs = duration;
              runtime.status = 'running';

              runtime.id = setInterval(() => {
                runtime.leftMs = duration - (Date.now() - start);
                if(runtime.leftMs <= 0){
                  clearInterval(runtime.id);
                  fireNotification();
                  onDone?.();
                }
              }, 1000)
            }`}}]}],video_demo:s};export{n as projectPageData};
