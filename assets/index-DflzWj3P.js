const a="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACsAAAAYCAYAAABjswTDAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGESURBVHgBrZftTQMxDIZfmIARMgIbcGzABr2bADboMQFlgsIEiAnICGxARugGNFavUnWy44/0kdwfcS556zhOcgPgvtobeB6ZtrT0v0OMqVpp+PfLHGt29DNU+xeM46PR/6/hO9sebaQxxlv4GKttIP+JT9jGSAjgEZuqbQVfqfYKOyMCeMTOkCNCvgI7zwjkvFXsiP7lv4SEvsCJRWzC9Zb/End0LWJn9C//b7XDqs0dXU3sAHn532Ff/sPSf40ruppYqSYWnKLqgYp6V3Q1sUlon5iJNbqj6z0UiO9qGTG6ohsR+4DgCQQ5uhsYiIilSHwhzo5pSzAI1sRKNbR1U9Og6HJVZIaCJnbGqUZyUJ4NiDEzbUkbz5IGU8NHpS1yry3gN+m29ZFFLEVWSoekTdCAG3NAY/NaNxhtiiL4KB2e4CfDWQKtYmlTaOmQ4Md1CfKUrgy+RhKUt9pzRRozez4YYH+DkajWO0vy/QTn73qDaemQ4CfDGN3ICZYhp0MU01XzCEPifIR8kQkkAAAAAElFTkSuQmCC",e="/Profile/assets/knouns_tn-B6EMFh8i.png",t="/Profile/assets/entry-B4nXGfgn.png",s="/Profile/assets/dashboard-BGZRWJPv.png",o="/Profile/assets/study-B0-FGiK3.png",n="/Profile/assets/demo_vid-Chvty7PQ.mp4",r={title:"K-nouns",logo:a,home:e,subtitle:"Anki-like website for studying Korean",repo:"https://github.com/WinnerxSinclair/k-nouns",demo:"https://knouns-prod.web.app/",overview:[{heading:"Motivation",text:`As a beginner learner of Korean, I found myself often going to ChatGPT for accurate translations. Standard translators such as Google Translate
      might be accurate in a technical sense, but not in reality; because they lack nuance and context.
      
      Whenever I would ask ChatGPT for a translation, I would think, "what if I want to
      study this later?" Going back through all the chats would be a pain. So I came up with the idea of having both AI translations and a flashcard study mechanism in one place.`},{heading:"Just a flashcard app?",text:`For now, yes. And at first I thought, "Why make this? Can't I just copy and paste into Anki?". But then I realized I may want K-nouns to be something more one day.
      More features for studying Korean, or languages in general. Plus, it's a fun learning experience building something new.`}],tech:[{heading:"Frontend",summary:`Vite+Vue is my go to for frontend development. I chose Firebase for it's authentication
      and hosting features.`,icons:["Vue","JavaScript","Vite","Firebase"]},{heading:"Backend",summary:`I use Express because of my familiarity with JavaScript. Firebase is also used
      on the backend before hitting endpoints to verify the user.`,icons:["Express","Firebase"]},{heading:"Database",summary:`I hadn't worked much with DB's until now. I gravitate towards NoSQL because the document
      model is similar to JavaScript objects. Defining schemas with Mongoose helps me keep things more 
      organized.`,icons:["MongoDB","Mongoose"]}],slides:[{name:"Study",media:{image:o},overview:"The study page is the entry point for studying flashcards. It: ",features:["Displays total due cards at the top","Displays a list of decks and tags with their due card counts","Provides controls to combo query for due cards by decks and tags"]},{name:"Flashcard",media:{image:e,mode:""},overview:"The flashcard page is where users study the flashcards they created. Users can: ",features:["Reveal the back and/or explanation when ready","Grade the card using SRS algorithm","Grading the card will reveal the next card"]},{name:"Entry",media:{image:t},overview:"The entry page allows users to make new cards. Users can: ",features:["Generate translation and explanation with AI","Mirror the card","Add existing tags or new tags","Save the card to study"]},{name:"Dashboard",media:{image:s},overview:`The dashboard is the most complex page of K-nouns. It features a list of decks and tags
      as query controls to fetch cards. Along with multiple controls to edit decks, tags, and cards. Users can: `,features:["Combo query for cards","Delete decks, tags, and cards","Rename decks and tags","Update certain fields on selected cards","Go to a specified cards edit page"]}],challenges:[{heading:"Validation",problem:`None of my previous projects required robust backend validation. However, K-nouns involves a ton of 
      user CRUD actions like creating cards, decks, tags; editing them, deleting them, etc.`,solution:[{summary:`I chose to use Zod to validate incoming data because it seems to be a well supported
          and popular validation library that is consitently updated and worked on. I implemented Zod schemas
          in a shared folder like so: `,code:{caption:"",lang:"js",codeBlock:`
              const baseCardSchema = z.strictObject({
                context:     z.string().trim().max(CONTEXT_MAX_LEN).optional(),
                front:       z.string().trim().max(FRONT_MAX_LEN),
                back:        z.string().trim().max(BACK_MAX_LEN),
                explanation: z.string().trim().max(EXPLANATION_MAX_LEN).optional(),
                mirror:      z.boolean().default(false),
                tags:        z.array(z.string().trim().min(TAG_MIN_LEN).max(TAG_MAX_LEN)).max(TAG_ARR_MAX_LEN).default([])
              });`}},{summary:"Then to validate bodies I define middleware: ",code:{caption:"",lang:"js",codeBlock:`
              export const validateBody = (schema) => (req, res, next) => {
                const result = schema.safeParse(req.body);
                if (!result.success) {
                  return res.status(400).json({
                    message: 'validation failed',
                    errors: result.error.flatten().fieldErrors,
                  });
                }
                req.body = result.data; 
                next();
              }
            `}},{summary:`Now the request will be accepted or denied. It's also worth noting that the request body
          could potentially get transformed by functions like trim. Any errors will get handled by
          a global error handler defined at the entry point.`}]}],video_demo:n};export{r as projectPageData};
