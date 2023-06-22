// vite.config.ts
import { defineConfig } from "file:///D:/web/react/tienda-ce/node_modules/.pnpm/vite@4.3.9_sass@1.62.1/node_modules/vite/dist/node/index.js";
import react from "file:///D:/web/react/tienda-ce/node_modules/.pnpm/@vitejs+plugin-react-swc@3.0.0_vite@4.3.9/node_modules/@vitejs/plugin-react-swc/index.mjs";
import { qrcode } from "file:///D:/web/react/tienda-ce/node_modules/.pnpm/vite-plugin-qrcode@0.2.1_vite@4.3.9/node_modules/vite-plugin-qrcode/dist/index.js";
import removeConsole from "file:///D:/web/react/tienda-ce/node_modules/.pnpm/vite-plugin-remove-console@2.1.1/node_modules/vite-plugin-remove-console/dist/index.mjs";
import { viteStaticCopy } from "file:///D:/web/react/tienda-ce/node_modules/.pnpm/vite-plugin-static-copy@0.16.0_vite@4.3.9/node_modules/vite-plugin-static-copy/dist/index.js";
var vite_config_default = defineConfig({
  // server: {
  // port: 80,
  // host: 'amatitena.local',
  // },
  plugins: [
    react(),
    removeConsole(),
    qrcode(),
    viteStaticCopy({
      targets: [
        {
          src: "_redirects",
          dest: ""
        }
      ]
    })
  ]
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFx3ZWJcXFxccmVhY3RcXFxcdGllbmRhLWNlXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJEOlxcXFx3ZWJcXFxccmVhY3RcXFxcdGllbmRhLWNlXFxcXHZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9EOi93ZWIvcmVhY3QvdGllbmRhLWNlL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSdcbmltcG9ydCByZWFjdCBmcm9tICdAdml0ZWpzL3BsdWdpbi1yZWFjdC1zd2MnXG5pbXBvcnQgeyBxcmNvZGUgfSBmcm9tICd2aXRlLXBsdWdpbi1xcmNvZGUnO1xuaW1wb3J0IHJlbW92ZUNvbnNvbGUgZnJvbSAndml0ZS1wbHVnaW4tcmVtb3ZlLWNvbnNvbGUnO1xuaW1wb3J0IHsgdml0ZVN0YXRpY0NvcHkgfSBmcm9tICd2aXRlLXBsdWdpbi1zdGF0aWMtY29weSc7XG5cbi8vIGh0dHBzOi8vdml0ZWpzLmRldi9jb25maWcvXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICAvLyBzZXJ2ZXI6IHtcbiAgICAvLyBwb3J0OiA4MCxcbiAgICAvLyBob3N0OiAnYW1hdGl0ZW5hLmxvY2FsJyxcbiAgLy8gfSxcbiAgcGx1Z2luczogW1xuICAgIHJlYWN0KCksXG4gICAgcmVtb3ZlQ29uc29sZSgpLFxuICAgIHFyY29kZSgpLFxuICAgIHZpdGVTdGF0aWNDb3B5KHtcbiAgICAgIHRhcmdldHM6IFtcbiAgICAgICAge1xuICAgICAgICAgIHNyYzogJ19yZWRpcmVjdHMnLFxuICAgICAgICAgIGRlc3Q6ICcnLFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICB9KSxcbiAgXSxcbn0pXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQTRQLFNBQVMsb0JBQW9CO0FBQ3pSLE9BQU8sV0FBVztBQUNsQixTQUFTLGNBQWM7QUFDdkIsT0FBTyxtQkFBbUI7QUFDMUIsU0FBUyxzQkFBc0I7QUFHL0IsSUFBTyxzQkFBUSxhQUFhO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQUsxQixTQUFTO0FBQUEsSUFDUCxNQUFNO0FBQUEsSUFDTixjQUFjO0FBQUEsSUFDZCxPQUFPO0FBQUEsSUFDUCxlQUFlO0FBQUEsTUFDYixTQUFTO0FBQUEsUUFDUDtBQUFBLFVBQ0UsS0FBSztBQUFBLFVBQ0wsTUFBTTtBQUFBLFFBQ1I7QUFBQSxNQUNGO0FBQUEsSUFDRixDQUFDO0FBQUEsRUFDSDtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
