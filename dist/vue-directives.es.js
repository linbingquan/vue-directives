const e={bind(e,{value:t}){e.$value=t,e.handler=()=>{if(!e.$value)return void console.log("无复制内容");const t=document.createElement("textarea");t.readOnly="readonly",t.style.position="absolute",t.style.left="-9999px",t.value=e.$value,document.body.appendChild(t),t.select();document.execCommand("Copy")&&console.log("复制成功"),document.body.removeChild(t)},e.addEventListener("click",e.handler)},componentUpdated(e,{value:t}){e.$value=t},unbind(e){e.removeEventListener("click",e.handler)}},t={bind:function(e,t){if("function"!=typeof t.value)throw"callback must be a function";let n=null,o=e=>{"click"===e.type&&0!==e.button||null===n&&(n=setTimeout((()=>{i()}),2e3))},a=()=>{null!==n&&(clearTimeout(n),n=null)};const i=e=>{t.value(e)};e.addEventListener("mousedown",o),e.addEventListener("touchstart",o),e.addEventListener("click",a),e.addEventListener("mouseout",a),e.addEventListener("touchend",a),e.addEventListener("touchcancel",a)},componentUpdated(e,{value:t}){e.$value=t},unbind(e){e.removeEventListener("click",e.handler)}},n={inserted:function(e,t){let n;e.addEventListener("click",(()=>{n&&clearTimeout(n),n=setTimeout((()=>{t.value()}),1e3)}))}};const o={bind:function(e){var t=/[^\u4E00-\u9FA5|\d|a-zA-Z|\r\n\s,.?!，。？！…—&$=()\-+/*{}[\]]|\s/g;let n=(a="input",(o=e).tagName.toLowerCase()===a?o:o.querySelector(a));var o,a;e.$inp=n,n.handle=function(){let e=n.value;n.value=e.replace(t,""),((e,t)=>{const n=document.createEvent("HTMLEvents");n.initEvent(t,!0,!0),e.dispatchEvent(n)})(n,"input")},n.addEventListener("keyup",n.handle)},unbind:function(e){e.$inp.removeEventListener("keyup",e.$inp.handle)}},a={bind(e,t){if("string"!=typeof t.value)throw"v-lazy .value must be a string";e.setAttribute("data-src",t.value)},inserted(e){IntersectionObserver?a.observe(e):a.listenerScroll(e)},observe(e){new IntersectionObserver((t=>{const n=e.dataset.src;t[0].isIntersecting&&n&&(e.src=n,e.removeAttribute("data-src"))})).observe(e)},listenerScroll(e){const t=a.throttle(a.load,300);a.load(e),window.addEventListener("scroll",(()=>{t(e)}))},load(e){const t=document.documentElement.clientHeight,n=e.getBoundingClientRect().top,o=e.getBoundingClientRect().bottom,a=e.dataset.src;n-t<0&&o>0&&a&&(e.src=a,e.removeAttribute("data-src"))},throttle(e,t){let n,o;return function(...a){const i=Date.now(),l=this;if(o||(o=i),clearTimeout(n),i-o>t)return o=i,e.apply(l,a),void clearTimeout(n);n=setTimeout((function(){o=Date.now(),n=null,e.apply(l,a)}),t)}}};const i={permissions:[],inserted:function(e,t){const n=t.value;if(n){(o=n,i.permissions.indexOf(o)>-1)||e.parentNode&&e.parentNode.removeChild(e)}var o}};const l={bind(e,t){!function(e,t,n,o){var a=document.createElement("canvas");t.appendChild(a),a.width=200,a.height=150,a.style.display="none";var i=a.getContext("2d");i.rotate(-20*Math.PI/180),i.font=n||"16px Microsoft Yahei",i.fillStyle=o||"rgba(180, 180, 180, 0.3)",i.textAlign="left",i.textBaseline="Middle",i.fillText(e,a.width/10,a.height/2),t.style.backgroundImage="url("+a.toDataURL("image/png")+")"}(t.value.text,e,t.value.font,t.value.color)}},s={inserted:function(e){e.style.position="absolute",e.style.cursor="move",e.onmousedown=function(t){let n=t.pageX-e.offsetLeft,o=t.pageY-e.offsetTop;document.onmousemove=function(t){let a=t.pageX-n,i=t.pageY-o,l=document.body.clientWidth-parseInt(window.getComputedStyle(e).width),s=document.body.clientHeight-parseInt(window.getComputedStyle(e).height);a<0?a=0:a>l&&(a=l),i<0?i=0:i>s&&(i=s),e.style.left=a+"px",e.style.top=i+"px"},document.onmouseup=function(){document.onmousemove=document.onmouseup=null}}}},r={copy:e,longpress:t,debounce:n,emoji:o,lazy:a,permission:i,watermarker:l,draggable:s};var d={install(e){Object.keys(r).forEach((t=>{e.directive(t,r[t])}))}};export default d;export{e as Copy,n as Debounce,s as Draggable,o as Emoji,a as Lazy,t as Longpress,i as Permission,l as Watermarker};