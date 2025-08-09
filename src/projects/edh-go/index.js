
import logo from './media/edhgo_logo.png'
import home from './media/edhgo_tn.png'
import counters from './media/counters.png'
import settings from './media/settings.png'

import demo_vid from './media/demo_vid.mp4'

export const projectPageData = {
  title: 'edh-go',
  logo,
  home,
  subtitle: 'Android Magic: The Gathering Life Counter application',
  overview: [
    {
      heading: '',
      text: `edh-go is a life counter application for the TCG Magic: The Gathering. When playing MTG, it is 
        necessary to keep track of things like life, commander damage, and counters. Thus, there is a demand for apps like edh-go.`,
    },
    {
      heading: 'Why edh-go?',
      text: `There are many MTG life counter apps already, each with their own quirks. After trying a dozen or so, there was only
      one that I found satisfying: 'Lifetap by Michael Bourkas'. However, there were still a few things
      about that app I didn't agree with, so I thought it would be fun to roll my own, with the design of Lifetap being the main inspiration.`
    }
  ],
  
  tech: {
    frontend: {
      summary: `I've never done mobile development but I am very familiar with web dev. This is why I chose to use
                Quasar and its integration of Capacitor.`,
      icons: ['Quasar', 'Vue', 'JavaScript', 'Pinia']
    },
    backend: {
      summary: `There is no backend for edh-go. The core features necessary for a solid life counter do not require it.`
    }

  },
  slides: [
    { 
      name: 'Default',
      media: {
        image: home,
        mode: 'horizontal'
      }, 
      overview: 'The default view displays the players life totals and grants several possible actions: ',
      features: [
        'Increment and decrement life', 
        'Open settings with the center icon', 
        'Open counters with the player name',
        'Open the commander damage control grid by clicking on a mini grid'
      ]           
    },
    {
      name: 'Counters',
      media: {
        image: counters,
        mode: 'horizontal'
      },
      overview: 'On the counters page players can: ',
      features: [
        'Increment and decrement counters',
        'Change player color',
        'Change player name',
        "Assign persistent state like Iniative or City's Blessing"
      ]
    },
    {
      name: 'Settings',
      media: {
        image: settings,
        mode: 'vertical'
      },
      overview: 'The settings page offers several options: ',
      features: [
        'Reset the game',
        'Change layout style',
        'Change starting life total',
        'Flip coins and roll dice',
        'Change the UI'
      ]
    }
  ],
  challenges: [
    {
      heading: 'Color Duping',
      problem: `These problems need a bit of context. I designed edh-go where there is always a player object of 6 players.
                And when the user wants a game with less players, I simply slice that object. And when I need the players
                to slot in the correct grid format, I sort the object. This strategy led to additional considerations
                when solving problems. Now onto the problem.
                Say a group plays a game of MTG with 3 players. One of the players changes their color to purple
                What if player 5 (unseen) also has their color as purple? If the players ever swap to a 5 person game,
                there will be 2 purple grids! Nothing wrong with that if it's done purposely by the players, but in this case,
                it will look like the programs doing.`,
  
      
      solution: [
        {
          summary: `Whenever a player changes color, if there's less than 6 players, we can check the hidden players colors for dupes.
                 If there's a dupe, we assign the hidden player with the dupe to a new unused color.`,
          code: {
            caption: '',
            lang: 'js',
            codeBlock: `
              if(bg !== player.background && actualPlayers.value.length < 6){
                let playerColors = {};
                players.value.forEach((player, i) => playerColors[player.background] = i);
                let playerColorKeys = Object.keys(playerColors);

                if(playerColorKeys.includes(bg) && playerColors[bg] > actualPlayers.value.length-1){
                  let unselected = colors.filter((color) => !playerColorKeys.includes(color));
                  let randColor = unselected[Math.floor(Math.random() * unselected.length)];

                  players.value[playerColors[bg]].background = randColor;
                }  
              }`
          }
        }
      ]


    },
    {
      heading: 'Layout Styling',
      problem: `One of the biggest headaches when making edh-go was figuring out how to get all the grid pieces in the
      right spot. There's 8 different layouts, with different player counts. Some layouts need certain players to be
      vertical, some need them to be rotated, and some need both.`,

      solution: [
        {
          summary: `The way I chose to solve this was to make simple grid classes for the main container and then let 
                    the blocks naturally fall into the grid.`,
          code: {
            caption: '',
            lang: 'css',
            codeBlock: `
              .two{
                display:grid;
                grid-template-columns: 1;
                grid-template-rows: 1fr 1fr;
              }

              .three{
                display:grid;
                grid-template-columns: 1fr 1fr;
                grid-template-rows: 2fr 1fr;
              }

              .four{
                display:grid;
                grid-template-columns: 1fr 1fr;
                grid-template-rows: 1fr 1fr;
              }

              .four-alt{
                display:grid;
                grid-template-columns: 1fr 1fr;
                grid-template-rows: 1fr 2fr 1fr;
              }`
          }
        },
        {
          summary: `The problem with this is that visually it can look out of order; ideally
                    the players are placed in a clockwise orderly fashion (player1, player2, etc..). 
                    To solve this I used an index map to sort the players on layout change.`,
          code: {
            caption: '',
            lang: 'js',
            codeBlock: `    
              players.value.sort((a,b) => a.id - b.id);
              let desired;
              if(newVal === 'four'){
                desired = [1, 2, 0, 3, 4, 5];
              }
              else if(newVal === 'four-alt'){
                desired = [2, 1, 3, 0, 4, 5];
              }
              else if(newVal === 'two'){
                desired = [1, 0, 2, 3, 4, 5];
              }
              else if(newVal === 'three'){
                desired = [1, 2, 0, 3, 4, 5];
              }
              else if(newVal === 'five'){
                desired = [2, 3, 1, 4, 0, 5];
              }
              else if(newVal === 'five-alt'){
                  desired = [1, 2, 3, 0, 4, 5];
              }
              else if(newVal === 'six'){
                desired = [2, 3, 1, 4, 0, 5];
              }
              else if(newVal === 'six-alt'){
                desired = [3, 2, 4, 1, 5, 0];
              }
              players.value = desired.map((i) => players.value[i]);`
          }
        },
        {
          summary: `And finally there's dealing with vertical alignment and rotations. For this I used a helper function to
                    asign classes to certain indexes like so: `,
          code: {
            caption: '',
            lang: 'js',
            codeBlock: `
              //main grid
              export function useGetClass(i, layout){

                if(layout === 'two'){
                  return [{'rotate-180': i === 0}, 'hor-text']
                }

                if(layout === 'three'){
                  return [
                    {'rotate-180': i === 1 },
                    (i === 0 || i === 1) ? 'vertical-text' : 'hor-text',
                    {'span-2': i === 2}
                  ]
                }
                
                if(layout === 'four'){
                  return [
                    {'rotate-180': i === 1 || i === 3},
                    'vertical-text',
                  ]
                }

                if(layout === 'four-alt'){
                  return [
                    {'rotate-180': i === 0 || i === 2},
                    (i === 1 || i === 2) ? 'vertical-text' : 'hor-text',
                    {'span-2': i === 0 || i === 3},
                  ]
                }
              } //etc`
          }

        },
        {
          summary: `And thats the gist of it. Would I do it this way again? Probably not. I would try to find a way
          to have a single source of truth for everything. This current strategy would get burdensome if I ever want to
          add more layouts.`
        }
      ]
    }
  ],
  video_demo: demo_vid
}