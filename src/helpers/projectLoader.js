const projectImports = import.meta.glob('../projects/*/index.js');
import { codeToHtml } from "shiki";
import outdent from 'outdent'

export async function loadProject(slug){
  console.log(`../projects/${slug}/index.js`);
  const importer = projectImports[`../projects/${slug}/index.js`];
  if(!importer) throw new Error('unknown project');
  const mod = await importer();
  const data = mod.projectPageData;
  if(data.challenges?.length){
    
    await Promise.all(data.challenges.map(async (challenge) => {
      if(!Array.isArray(challenge.solution)) return;
      await Promise.all(challenge.solution.map(async (sol) => { 
        if(sol.code){
          sol.code.codeHtml = await codeToHtml(outdent.string(sol.code.codeBlock), {
            lang: sol.code.lang ?? 'javascript',
            theme: 'dracula'
          });
        }         
      })) 
      
    }));
  }
  return mod.projectPageData;
}