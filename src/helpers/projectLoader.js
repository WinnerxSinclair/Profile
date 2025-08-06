const projectImports = import.meta.glob('../projects/*/index.js');


export async function loadProject(slug){
  console.log(`../projects/${slug}/index.js`);
  const importer = projectImports[`../projects/${slug}/index.js`];
  if(!importer) throw new Error('unknown project');
  const mod = await importer();
  return mod.projectPageData;
}