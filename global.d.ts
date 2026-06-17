// Ambient declarations for side-effect imports of style assets.
// Keeps CSS imports (e.g. `import "@/styles/globals.css"`) type-checking
// under stricter TypeScript module resolution.
declare module "*.css";
