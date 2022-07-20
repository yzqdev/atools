import { createApp } from "vue";
import App from "./App.vue";
import 'highlight.js/styles/atom-one-dark.css'
import hljs from "highlight.js/lib/core";
import javascript from "highlight.js/lib/languages/javascript";
import go from "highlight.js/lib/languages/go";
import python from "highlight.js/lib/languages/python";
import php from "highlight.js/lib/languages/php";
import java from "highlight.js/lib/languages/java";
import csharp from "highlight.js/lib/languages/csharp";

hljs.registerLanguage("javascript", javascript);
hljs.registerLanguage("go", go);
hljs.registerLanguage("python", python);
hljs.registerLanguage("java", java);
hljs.registerLanguage("php", php);
hljs.registerLanguage("csharp", csharp);
import hljsVuePlugin from "@highlightjs/vue-plugin";
 
const app = createApp(App);
app.use(hljsVuePlugin)
app.mount("#app");
