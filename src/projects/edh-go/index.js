
import logo from './media/edhgo_logo.png'
import home from './media/edhgo_tn.png'
import counters from './media/counters.png'
import settings from './media/settings.png'
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
  challenges: [
    {
      problem: 'sdfsdf',
      solution: 'sdfsdf'
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
  ] 
}