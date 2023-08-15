<template>
  <div class="site">
    <div>
      <h1>自定义组件例子测试</h1>
      <p>主要用于开发过程中测试组件，即在开发过程基于模型驱动原子组件开发。</p>
    </div>
    <!-- 自定义的组件 -->
    <div class="test">
      <h1>自定义组件</h1>
      1.<BBBBB></BBBBB>

      2.<LcAddTableList :text="111" @onClick="onClick"></LcAddTableList>
    </div>

    <!-- 原子组件 -->
    <div class="test">
      <h1>原子组件--Table</h1>
      <TestCode></TestCode>
    </div>
  </div>
</template>
<script setup lang="ts">
import TestCode from './TestCode/TestCode'
const onClick = () => {
  console.log(222)
}
</script>

<style scoped lang="scss">
.site {
  padding: 20px;
}
.test {
  border: 1px solid red;
  margin-bottom: 20px;
}
</style>
