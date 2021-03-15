!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("axios"),require("lodash/omit"),require("qs")):"function"==typeof define&&define.amd?define(["exports","axios","lodash/omit","qs"],t):t((e||self).axios={},e.axios,e.omit,e.qs)}(this,function(e,t,n,r){function o(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var u=o(t),i=o(n),a=o(r);function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var s=function(e){return c({beforeRequest:function(){}},e)},f={400:"",401:"请求要求用户的身份认证",402:"保留将来使用",403:"请求被服务端拒绝",404:"请求资源无法找到",405:"请求方法被禁止",406:"服务端无法根据客户端请求的内容特性完成请求",407:"应当使用代理进行授权",408:"请求时间过长",500:"服务端内部错误",501:"服务端不支持请求的功能",502:"无效的响应",503:"超载或系统维护无法处理请求",505:"服务器不支持请求的HTTP协议的版本"},d=s(),l=u.default.create({timeout:1e4,withCredentials:!1,responseType:"json",validateStatus:function(e){return e>=200&&e<300},transformRequest:function(e,t){var n={};return t["Content-Type"]="application/json",d.beforeRequest(e,t),"formData"===(null==e?void 0:e.bodyType)?(n=a.default.stringify(i.default(e,["bodyType"])),t["Content-Type"]="application/x-www-form-urlencoded",n):i.default(e,["bodyType"])}});l.interceptors.request.use(function(e){return e},function(e){return Promise.reject(e)}),l.interceptors.response.use(function(e){return e},function(e){return e&&e.response?console.error(f[status]):console.error("服务器无响应"),e});var p={get:function(e){return function(t){return l({method:"GET",url:e,params:t}).then(function(e){return Promise.resolve(e.data)}).catch(function(e){return Promise.reject(e)})}},post:function(e,t){return function(n){return l({method:"POST",url:e,data:Object.assign({},n,{bodyType:null==t?void 0:t.bodyType})}).then(function(e){return Promise.resolve(e.data)}).catch(function(e){return Promise.reject(e)})}},put:function(e){return function(t){return l({method:"PUT",url:e,data:t}).then(function(e){return Promise.resolve(e.data)}).catch(function(e){return Promise.reject(e)})}},delete:function(e){return function(t){return l({method:"DELETE",url:e,params:t}).then(function(e){return Promise.resolve(e.data)}).catch(function(e){return Promise.reject(e)})}},patch:function(e){return function(t){return l({method:"PATCH",url:e,data:t}).then(function(e){return Promise.resolve(e.data)}).catch(function(e){return Promise.reject(e)})}}};e.configure=function(e){d=c({},d,e)},e.default=p,e.getDefaultConfig=s,e.instance=l});
//# sourceMappingURL=index.umd.js.map
