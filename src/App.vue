<script setup lang="ts">
import RegTest from "./components/RegTest.vue";
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import {ElMessage} from "element-plus";

</script>

<template>
  <el-config-provider  :locale="zhCn" >
      <reg-test msg="a" />
      
  </el-config-provider>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
