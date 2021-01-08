# Vue 自定义指令

| 说明               | 表头          |
| ------------------ | ------------- |
| 复制粘贴指令       | v-copy        |
| 长按指令           | v-longpress   |
| 输入框防抖指令     | v-debounce    |
| 禁止表情及特殊字符 | v-emoji       |
| 图片懒加载         | v-lazy        |
| 权限校验指令       | v-permission  |
| 实现页面水印       | v-watermarker |
| 拖拽指令           | v-draggable   |

## 原型实例

在 examples 目录下运行 `vue serve`

请查看 [Vue 快速原型开发](https://cli.vuejs.org/zh/guide/prototyping.html)

## 安装

```shell
# 请使用 yarn 安装
yarn add https://github.com/linbingquan/vue-directives.git
```

## 按需引入组件

```javascript
import { Copy, Longpress, Debounce, Emoji, LazyLoad, Permission, Watermarker, Draggable } from 'vue-directives'

Vue.directive('copy', Copy)
Vue.directive('longpress', Longpress)
Vue.directive('debounce', Debounce)
Vue.directive('emoji', Emoji)
Vue.directive('lazy', Lazy)
Vue.directive('permission', Permission)
Vue.directive('watermarker', Watermarker)
Vue.directive('draggable', Draggable)
```

## 导入所有组件

```javascript
import VueDirectives from 'vue-directives'

Vue.use(VueDirectives)
```

## 使用说明

### 复制粘贴指令 v-copy

```vue
<template>
  <button v-copy="copyText">复制</button>
</template>

<script>
export default {
  data() {
    return {
      copyText: 'a copy directive'
    }
  }
}
</script>
```

### 长按指令 v-longpress

```vue
<template>
  <button v-longpress="longpress">长按</button>
</template>

<script>
export default {
  methods: {
    longpress () {
      alert('长按指令生效')
    }
  }
}
</script>
```

### 输入框防抖指令 v-debounce

```vue
<template>
  <button v-debounce="debounceClick">防抖</button>
</template>

<script>
export default {
  methods: {
    debounceClick () {
      console.log('只触发一次')
    }
  }
}
</script>
```

### 禁止表情及特殊字符 v-emoji

```vue
<template>
  <input type="text" v-model="note" v-emoji />
</template>

<script>
export default {
  data() {
    return {
      note: '',
    }
  },
}
</script>
```

### 图片懒加载 v-lazy

```vue
<template>
  <img v-for="img in imageList" v-lazy="img" />
</template>

<script>
export default {
  data() {
    return {
      imageList: [
        'https://img.yzcdn.cn/vant/apple-1.jpg',
        'https://img.yzcdn.cn/vant/apple-2.jpg',
      ]
    }
  }
}
</script>
```

### 权限校验指令 v-premission

```vue
<template>
  <div class="btns">
    <!-- 显示 -->
    <button v-permission="1">权限按钮 1</button>
    <button v-permission="'admin'">admin 权限按钮</button>
    <!-- 不显示 -->
    <button v-permission="10">权限按钮 10</button>
    <button v-permission="'super-admin'">super-admin 权限按钮</button>
  </div>
</template>

<script>
import VueDirectives from 'vue-directives'
import { Permission } from 'vue-directives'

// 权限设置
Permission.permissions = [1, 2, 3, 'admin']
Vue.use(VueDirectives)
</script>
```

### 实现页面水印 v-watermarker

```vue
<template>
  <div v-waterMarker="{ text: 'Vue 版权所有' }"></div>
  <!-- 可选字体颜色：color -->
  <div v-waterMarker="{ text: 'Vue 版权所有', color: '#41b883' }"></div>
</template>
```

### 拖拽指令 v-draggable

```vue
<template>
  <div v-draggable>我能拖拽</div>
</template>
```
