import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";

export default defineConfig([
  //1)Ignora los build de front
  {
    ignores: [
      "dist/**",
      "node_modules/**"
    ]
  },
  //2)configuracion del backend
  { 
    files: ["server/**/*.{js,mjs}"], 
    plugins: { js }, 
    extends: ["js/recommended"], 
    languageOptions: { 
      ecmaVersion: "latest",
      sourceType: "module",
      globals: { 
        ...globals.node} 
      },
      rules:{
        "no-unused-vars": [ "error",{ 
          "argsIgnorePattern":"^_" } ]
      } 
    },
     //2.1)configuracion del Vite
  { 
    files: ["vite.config.js"], 
    plugins: { js }, 
    extends: ["js/recommended"], 
    languageOptions: { 
      ecmaVersion: "latest",
      sourceType: "module",
      globals: { 
        ...globals.node} 
      } 
    },
     //3)configuracion del frontend
  { 
    files: ["src/**/*.{js,mjs}"], 
    plugins: { js }, 
    extends: ["js/recommended"], 
    languageOptions: { 
      ecmaVersion: "latest",
      sourceType: "module",
      globals: { 
        ...globals.browser} 
      } 
    },
     //4)Opcional si hay js en public
  { 
    files: ["public/**/*.{js,mjs}"], 
    plugins: { js }, 
    extends: ["js/recommended"], 
    languageOptions: { 
      ecmaVersion: "latest",
      sourceType: "module",
      globals: { 
        ...globals.browser} 
      } 
    },
]);
