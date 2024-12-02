import { defineConfig } from 'vite'
import MillionLint from "@million/lint";
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [MillionLint.vite({auto:true}), react()],
});