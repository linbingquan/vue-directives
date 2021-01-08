<template>
  <div id="app">
    <p>v-watermarker</p>
    <div v-watermarker="{text:'Vue 版权所有', color: 'rgba(65, 184, 131, 0.3)'}" class="watermarker"></div>
    <p>v-copy</p>
    <button v-copy="copyText">复制</button>
    <br />
    <p>v-longpress</p>
    <button v-longpress="longpress">长按</button>
    <br />
    <p>v-debounce</p>
    <button v-debounce="debounceClick">防抖</button>
    <br />
    <p>v-emoji</p>
    <input type="text" v-model="note" v-emoji />
    <br />
    <p>v-draggable</p>
    <div class="draggable" v-draggable>我能拖拽</div>
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <p>v-permission</p>
    <div class="btns">
      <!-- 显示 -->
      <button v-permission="1">权限按钮 1</button>
      <button v-permission="'admin'">admin 权限按钮</button>
      <!-- 不显示 -->
      <button v-permission="10">权限按钮 10</button>
      <button v-permission="'super-admin'">super-admin 权限按钮</button>
    </div>
    <p>v-lazy</p>
    <img v-for="(img, index) in imageList" :key="index" v-lazy="img" />
  </div>
</template>

<script>
import Vue from 'vue'
import VueDirectives from '../lib/main.js'

Vue.use(VueDirectives)

export default {
  name: 'App',
  data() {
    return {
      copyText: 'a copy directives',
      note: '',
      imageList: [
        'https://img.yzcdn.cn/vant/apple-1.jpg',
        'https://img.yzcdn.cn/vant/apple-2.jpg',

        'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg',
        'https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg',
        'https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg',
        'https://fuss10.elemecdn.com/9/bb/e27858e973f5d7d3904835f46abbdjpeg.jpeg',
        'https://fuss10.elemecdn.com/d/e6/c4d93a3805b3ce3f323f7974e6f78jpeg.jpeg',
        'https://fuss10.elemecdn.com/3/28/bbf893f792f03a54408b3b7a7ebf0jpeg.jpeg',
        'https://fuss10.elemecdn.com/2/11/6535bcfb26e4c79b48ddde44f4b6fjpeg.jpeg'
      ]
    }
  },
  methods: {
    longpress () {
      alert('长按指令生效')
    },
    debounceClick() {
      console.log('只触发一次')
    }
  }
}
</script>

<style>
html, body {
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  min-height: 100vh;
}
.watermarker {
  height: 300px;
  border: 1px solid #888888;
}
.container {
  position: relative;
  height: 500px;
}
.draggable {
  position: absolute;
  width: 100px;
  height: 100px;
  background: #41b883;
}
img {
  display: block;
  width: 50%;
  padding-bottom: 150px;
}
</style>
