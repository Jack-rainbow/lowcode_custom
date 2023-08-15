import 'element-plus/dist/index.css'
import '@syc-saas/ui/dist/lib/style.css'
import '@syc-lowcode/client-framework/dist/style.css'

import { createApp } from 'vue'
import App from './App.vue';
import { setup } from '@syc-lowcode/client-framework'
import ElementPlus from 'element-plus'
import SycSaaSUi from '@syc-saas/ui'
import BBBBB from '@paas-lowcode/b'
import AddTableList from '@paas-lowcode/a'

const app = createApp(App);


setup({app})


app.use(ElementPlus)
app.use(SycSaaSUi, {
  size: 'small'
})
app.use(BBBBB);
app.use(AddTableList);

app.mount('#app')
