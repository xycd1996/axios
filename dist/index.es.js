import r from"axios";import t from"lodash/omit";import n from"qs";function e(){return(e=Object.assign||function(r){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&(r[e]=n[e])}return r}).apply(this,arguments)}var o=function(r){return e({beforeRequest:function(){},onError:function(){}},r)},u={400:"",401:"请求要求用户的身份认证",402:"保留将来使用",403:"请求被服务端拒绝",404:"请求资源无法找到",405:"请求方法被禁止",406:"服务端无法根据客户端请求的内容特性完成请求",407:"应当使用代理进行授权",408:"请求时间过长",500:"服务端内部错误",501:"服务端不支持请求的功能",502:"无效的响应",503:"超载或系统维护无法处理请求",505:"服务器不支持请求的HTTP协议的版本"},i=o(),c=r.create({timeout:1e4,withCredentials:!1,responseType:"json",validateStatus:function(r){return r>=200&&r<300},transformRequest:function(r,e){var o={};return e["Content-Type"]="application/json",i.beforeRequest(r,e),"formData"===(null==r?void 0:r.bodyType)?(o=n.stringify(t(r,["bodyType"])),e["Content-Type"]="application/x-www-form-urlencoded",o):t(r,["bodyType"])}});c.interceptors.request.use(function(r){return r},function(r){return Promise.reject(r)}),c.interceptors.response.use(function(r){return function(r,t){var n;return"200"!==(null==r||null==(n=r.data)?void 0:n.code)?(t.onError&&t.onError(null==r?void 0:r.data),Promise.reject(r)):r}(r,i)},function(r){return function(r,t){return r&&r.response?t.onError&&t.onError(u[status]):t.onError&&t.onError("服务器无响应"),r}(r,i)});var a={get:function(r){return function(t){return c({method:"GET",url:r,params:t}).then(function(r){return Promise.resolve(r.data)}).catch(function(r){return Promise.reject(r)})}},post:function(r,t){return function(n){return c({method:"POST",url:r,data:Object.assign({},n,{bodyType:null==t?void 0:t.bodyType})}).then(function(r){return Promise.resolve(r.data)}).catch(function(r){return Promise.reject(r)})}},put:function(r){return function(t){return c({method:"PUT",url:r,data:t}).then(function(r){return Promise.resolve(r.data)}).catch(function(r){return Promise.reject(r)})}},delete:function(r){return function(t){return c({method:"DELETE",url:r,params:t}).then(function(r){return Promise.resolve(r.data)}).catch(function(r){return Promise.reject(r)})}},patch:function(r){return function(t){return c({method:"PATCH",url:r,data:t}).then(function(r){return Promise.resolve(r.data)}).catch(function(r){return Promise.reject(r)})}}},s=function(r){i=e({},i,r)};export default a;export{s as configure,o as getDefaultConfig,c as instance};
//# sourceMappingURL=index.es.js.map
