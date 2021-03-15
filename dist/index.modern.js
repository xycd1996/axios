import e from"axios";import t from"lodash/omit";import r from"qs";function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e}).apply(this,arguments)}const s=e=>o({beforeRequest:()=>{}},e),a={400:"",401:"请求要求用户的身份认证",402:"保留将来使用",403:"请求被服务端拒绝",404:"请求资源无法找到",405:"请求方法被禁止",406:"服务端无法根据客户端请求的内容特性完成请求",407:"应当使用代理进行授权",408:"请求时间过长",500:"服务端内部错误",501:"服务端不支持请求的功能",502:"无效的响应",503:"超载或系统维护无法处理请求",505:"服务器不支持请求的HTTP协议的版本"};let n=s();const i=e.create({timeout:1e4,withCredentials:!1,responseType:"json",validateStatus:function(e){return e>=200&&e<300},transformRequest:(e,o)=>{let s={};return o["Content-Type"]="application/json",n.beforeRequest(e,o),"formData"===(null==e?void 0:e.bodyType)?(s=r.stringify(t(e,["bodyType"])),o["Content-Type"]="application/x-www-form-urlencoded",s):t(e,["bodyType"])}});i.interceptors.request.use(e=>e,e=>Promise.reject(e)),i.interceptors.response.use(e=>e,e=>(e&&e.response?console.error(a[status]):console.error("服务器无响应"),e));const c={get:e=>t=>i({method:"GET",url:e,params:t}).then(e=>Promise.resolve(e.data)).catch(e=>Promise.reject(e)),post:(e,t)=>r=>i({method:"POST",url:e,data:Object.assign({},r,{bodyType:null==t?void 0:t.bodyType})}).then(e=>Promise.resolve(e.data)).catch(e=>Promise.reject(e)),put:e=>t=>i({method:"PUT",url:e,data:t}).then(e=>Promise.resolve(e.data)).catch(e=>Promise.reject(e)),delete:e=>t=>i({method:"DELETE",url:e,params:t}).then(e=>Promise.resolve(e.data)).catch(e=>Promise.reject(e)),patch:e=>t=>i({method:"PATCH",url:e,data:t}).then(e=>Promise.resolve(e.data)).catch(e=>Promise.reject(e))},p=e=>{n=o({},n,e)};export default c;export{p as configure,s as getDefaultConfig,i as instance};
//# sourceMappingURL=index.modern.js.map
