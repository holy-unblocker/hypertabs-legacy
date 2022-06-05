/*! For license information please see bare-client.js.LICENSE.txt */
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.BareClient=t():e.BareClient=t()}(self,(()=>(()=>{var e={487:e=>{var t={utf8:{stringToBytes:function(e){return t.bin.stringToBytes(unescape(encodeURIComponent(e)))},bytesToString:function(e){return decodeURIComponent(escape(t.bin.bytesToString(e)))}},bin:{stringToBytes:function(e){for(var t=[],s=0;s<e.length;s++)t.push(255&e.charCodeAt(s));return t},bytesToString:function(e){for(var t=[],s=0;s<e.length;s++)t.push(String.fromCharCode(e[s]));return t.join("")}}};e.exports=t},12:e=>{var t,s;t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",s={rotl:function(e,t){return e<<t|e>>>32-t},rotr:function(e,t){return e<<32-t|e>>>t},endian:function(e){if(e.constructor==Number)return 16711935&s.rotl(e,8)|4278255360&s.rotl(e,24);for(var t=0;t<e.length;t++)e[t]=s.endian(e[t]);return e},randomBytes:function(e){for(var t=[];e>0;e--)t.push(Math.floor(256*Math.random()));return t},bytesToWords:function(e){for(var t=[],s=0,r=0;s<e.length;s++,r+=8)t[r>>>5]|=e[s]<<24-r%32;return t},wordsToBytes:function(e){for(var t=[],s=0;s<32*e.length;s+=8)t.push(e[s>>>5]>>>24-s%32&255);return t},bytesToHex:function(e){for(var t=[],s=0;s<e.length;s++)t.push((e[s]>>>4).toString(16)),t.push((15&e[s]).toString(16));return t.join("")},hexToBytes:function(e){for(var t=[],s=0;s<e.length;s+=2)t.push(parseInt(e.substr(s,2),16));return t},bytesToBase64:function(e){for(var s=[],r=0;r<e.length;r+=3)for(var o=e[r]<<16|e[r+1]<<8|e[r+2],n=0;n<4;n++)8*r+6*n<=8*e.length?s.push(t.charAt(o>>>6*(3-n)&63)):s.push("=");return s.join("")},base64ToBytes:function(e){e=e.replace(/[^A-Z0-9+\/]/gi,"");for(var s=[],r=0,o=0;r<e.length;o=++r%4)0!=o&&s.push((t.indexOf(e.charAt(r-1))&Math.pow(2,-2*o+8)-1)<<2*o|t.indexOf(e.charAt(r))>>>6-2*o);return s}},e.exports=s},738:e=>{function t(e){return!!e.constructor&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)}e.exports=function(e){return null!=e&&(t(e)||function(e){return"function"==typeof e.readFloatLE&&"function"==typeof e.slice&&t(e.slice(0,0))}(e)||!!e._isBuffer)}},568:(e,t,s)=>{var r,o,n,a,i;r=s(12),o=s(487).utf8,n=s(738),a=s(487).bin,(i=function(e,t){e.constructor==String?e=t&&"binary"===t.encoding?a.stringToBytes(e):o.stringToBytes(e):n(e)?e=Array.prototype.slice.call(e,0):Array.isArray(e)||e.constructor===Uint8Array||(e=e.toString());for(var s=r.bytesToWords(e),c=8*e.length,h=1732584193,d=-271733879,u=-1732584194,f=271733878,l=0;l<s.length;l++)s[l]=16711935&(s[l]<<8|s[l]>>>24)|4278255360&(s[l]<<24|s[l]>>>8);s[c>>>5]|=128<<c%32,s[14+(c+64>>>9<<4)]=c;var w=i._ff,p=i._gg,b=i._hh,g=i._ii;for(l=0;l<s.length;l+=16){var y=h,x=d,v=u,m=f;h=w(h,d,u,f,s[l+0],7,-680876936),f=w(f,h,d,u,s[l+1],12,-389564586),u=w(u,f,h,d,s[l+2],17,606105819),d=w(d,u,f,h,s[l+3],22,-1044525330),h=w(h,d,u,f,s[l+4],7,-176418897),f=w(f,h,d,u,s[l+5],12,1200080426),u=w(u,f,h,d,s[l+6],17,-1473231341),d=w(d,u,f,h,s[l+7],22,-45705983),h=w(h,d,u,f,s[l+8],7,1770035416),f=w(f,h,d,u,s[l+9],12,-1958414417),u=w(u,f,h,d,s[l+10],17,-42063),d=w(d,u,f,h,s[l+11],22,-1990404162),h=w(h,d,u,f,s[l+12],7,1804603682),f=w(f,h,d,u,s[l+13],12,-40341101),u=w(u,f,h,d,s[l+14],17,-1502002290),h=p(h,d=w(d,u,f,h,s[l+15],22,1236535329),u,f,s[l+1],5,-165796510),f=p(f,h,d,u,s[l+6],9,-1069501632),u=p(u,f,h,d,s[l+11],14,643717713),d=p(d,u,f,h,s[l+0],20,-373897302),h=p(h,d,u,f,s[l+5],5,-701558691),f=p(f,h,d,u,s[l+10],9,38016083),u=p(u,f,h,d,s[l+15],14,-660478335),d=p(d,u,f,h,s[l+4],20,-405537848),h=p(h,d,u,f,s[l+9],5,568446438),f=p(f,h,d,u,s[l+14],9,-1019803690),u=p(u,f,h,d,s[l+3],14,-187363961),d=p(d,u,f,h,s[l+8],20,1163531501),h=p(h,d,u,f,s[l+13],5,-1444681467),f=p(f,h,d,u,s[l+2],9,-51403784),u=p(u,f,h,d,s[l+7],14,1735328473),h=b(h,d=p(d,u,f,h,s[l+12],20,-1926607734),u,f,s[l+5],4,-378558),f=b(f,h,d,u,s[l+8],11,-2022574463),u=b(u,f,h,d,s[l+11],16,1839030562),d=b(d,u,f,h,s[l+14],23,-35309556),h=b(h,d,u,f,s[l+1],4,-1530992060),f=b(f,h,d,u,s[l+4],11,1272893353),u=b(u,f,h,d,s[l+7],16,-155497632),d=b(d,u,f,h,s[l+10],23,-1094730640),h=b(h,d,u,f,s[l+13],4,681279174),f=b(f,h,d,u,s[l+0],11,-358537222),u=b(u,f,h,d,s[l+3],16,-722521979),d=b(d,u,f,h,s[l+6],23,76029189),h=b(h,d,u,f,s[l+9],4,-640364487),f=b(f,h,d,u,s[l+12],11,-421815835),u=b(u,f,h,d,s[l+15],16,530742520),h=g(h,d=b(d,u,f,h,s[l+2],23,-995338651),u,f,s[l+0],6,-198630844),f=g(f,h,d,u,s[l+7],10,1126891415),u=g(u,f,h,d,s[l+14],15,-1416354905),d=g(d,u,f,h,s[l+5],21,-57434055),h=g(h,d,u,f,s[l+12],6,1700485571),f=g(f,h,d,u,s[l+3],10,-1894986606),u=g(u,f,h,d,s[l+10],15,-1051523),d=g(d,u,f,h,s[l+1],21,-2054922799),h=g(h,d,u,f,s[l+8],6,1873313359),f=g(f,h,d,u,s[l+15],10,-30611744),u=g(u,f,h,d,s[l+6],15,-1560198380),d=g(d,u,f,h,s[l+13],21,1309151649),h=g(h,d,u,f,s[l+4],6,-145523070),f=g(f,h,d,u,s[l+11],10,-1120210379),u=g(u,f,h,d,s[l+2],15,718787259),d=g(d,u,f,h,s[l+9],21,-343485551),h=h+y>>>0,d=d+x>>>0,u=u+v>>>0,f=f+m>>>0}return r.endian([h,d,u,f])})._ff=function(e,t,s,r,o,n,a){var i=e+(t&s|~t&r)+(o>>>0)+a;return(i<<n|i>>>32-n)+t},i._gg=function(e,t,s,r,o,n,a){var i=e+(t&r|s&~r)+(o>>>0)+a;return(i<<n|i>>>32-n)+t},i._hh=function(e,t,s,r,o,n,a){var i=e+(t^s^r)+(o>>>0)+a;return(i<<n|i>>>32-n)+t},i._ii=function(e,t,s,r,o,n,a){var i=e+(s^(t|~r))+(o>>>0)+a;return(i<<n|i>>>32-n)+t},i._blocksize=16,i._digestsize=16,e.exports=function(e,t){if(null==e)throw new Error("Illegal argument "+e);var s=r.wordsToBytes(i(e,t));return t&&t.asBytes?s:t&&t.asString?a.bytesToString(s):r.bytesToHex(s)}}},t={};function s(r){var o=t[r];if(void 0!==o)return o.exports;var n=t[r]={exports:{}};return e[r](n,n.exports,s),n.exports}s.d=(e,t)=>{for(var r in t)s.o(t,r)&&!s.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},s.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);var r={};return(()=>{"use strict";s.d(r,{default:()=>v});const e=[101,204,205,304],t=[304],o=[301,302,303,307,308];class n extends Error{constructor(e,t){super(t.message),this.status=e,this.body=t}}class a{constructor(e){this.bare=e,this.version=this.constructor.version,this.base=new URL(`./v${this.version}/`,this.bare.server)}async request(){throw new Error("Not implemented")}async connect(){throw new Error("Not implemented")}}function i(e){e=e.toString();let t="";for(let s=0;s<e.length;s++){const r=e[s];"!#$%&'*+-.0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ^_`abcdefghijklmnopqrstuvwxyz|~".includes(r)&&!"%".includes(r)?t+=r:t+="%"+r.charCodeAt().toString(16).padStart(2,0)}return t}let c,h;"object"==typeof self&&void 0!==self&&(c=self),"object"==typeof globalThis&&void 0!==globalThis?c=globalThis:"object"==typeof window&&void 0!==window&&(c=window);const d=h=c,{fetch:u,WebSocket:f}=d;class l extends a{static version=1;constructor(...e){super(...e),this.ws=new URL(this.base),this.http=new URL(this.base),this.new_meta=new URL("./ws-new-meta",this.base),this.get_meta=new URL("./ws-meta",this.base),"https:"===this.ws.protocol?this.ws.protocol="wss:":this.ws.protocol="ws:"}async connect(e,t,s,r,o){const a=await u(this.new_meta,{method:"GET"});if(!a.ok)throw n(a.status,await a.json());const c=await a.text(),h=new f(this.ws,["bare",i(JSON.stringify({remote:{protocol:t,host:s,port:r,path:o},headers:e,forward_headers:["accept-encoding","accept-language","sec-websocket-extensions","sec-websocket-key","sec-websocket-version"],id:c}))]);return h.meta=new Promise(((e,t)=>{h.addEventListener("open",(async()=>{const s=await u(this.get_meta,{headers:{"x-bare-id":c},method:"GET"});s.ok||t(new n(s.status,await s.json())),e(await s.json())})),h.addEventListener("error",t)})),h}async request(t,s,r,o,n,a,i,c,h){if(o.startsWith("blob:")){const e=await u(`blob:${location.origin}${i}`);return e.jsonHeaders=Object.fromEntries(e.headers.entries()),e}const d={};if(s instanceof Headers)for(let[e,t]of s)d[e]=t;else for(let e in s)d[e]=s[e];const f={credentials:"omit",method:t,signal:h};void 0!==r&&(f.body=r);const l=new Request(this.http,f);this.#e(l,o,n,i,a,d,["accept-encoding","accept-language"]);const w=await u(l),p=await this.#t(w);let b,{status:g,statusText:y,headers:x,rawHeaders:v}=p;return b=e.includes(g)?new Response(void 0,{status:g,statusText:y,headers:x}):new Response(w.body,{status:g,statusText:y,headers:x}),b.rawHeaders=v,b.rawResponse=rawResponse,b.cached=!1,b}async#t(e){if(!e.ok)throw new n(e.status,await e.json());const t=parseInt(e.headers.get("x-bare-status")),s=e.headers.get("x-bare-status-text"),r=JSON.parse(e.headers.get("x-bare-headers"));return{status:t,statusText:s,rawHeaders:r,headers:new Headers(r)}}#e(e,t,s,r,o,n,a){e.headers.set("x-bare-protocol",t),e.headers.set("x-bare-host",s),e.headers.set("x-bare-path",r),e.headers.set("x-bare-port",o),e.headers.set("x-bare-headers",JSON.stringify(n)),e.headers.set("x-bare-forward-headers",JSON.stringify(a))}}const w=3072;var p=s(568);const{fetch:b,WebSocket:g,Request:y}=d;class x extends a{static version=2;constructor(...e){super(...e),this.ws=new URL(this.base),this.http=new URL(this.base),this.new_meta=new URL("./ws-new-meta",this.base),this.get_meta=new URL("./ws-meta",this.base),"https:"===this.ws.protocol?this.ws.protocol="wss:":this.ws.protocol="ws:"}async connect(e,t,s,r,o){const a=new y(this.new_meta);this.#e(a.headers,t,s,o,r,e);const i=await b(a);if(!i.ok)throw new n(i.status,await i.json());const c=await i.text(),h=new g(this.ws,[c]);return h.meta=new Promise(((e,t)=>{h.addEventListener("open",(async()=>{const t=await b(this.get_meta,{headers:{"x-bare-id":c},method:"GET"});e(await this.#t(t))})),h.addEventListener("error",t)})),h}async request(s,r,o,n,a,i,c,h,d){if(n.startsWith("blob:")){const e=await b(`blob:${location.origin}${c}`);return e.jsonHeaders=Object.fromEntries(e.headers.entries()),e}const u={};if(r instanceof Headers)for(let[e,t]of r)u[e]=t;else for(let e in r)u[e]=r[e];const f={credentials:"omit",method:s,signal:d};"only-if-cached"!==h&&(f.cache=h),void 0!==o&&(f.body=o);const l=new y(this.http+"?cache="+p(`${n}${a}${i}${c}`),f);this.#e(l.headers,n,a,c,i,u);const w=await b(l),g=await this.#t(w);let x,{status:v,statusText:m,headers:_,rawHeaders:T}=g;return t.includes(v)&&(v=w.status,m=w.statusText),x=e.includes(v)?new Response(void 0,{status:v,statusText:m,headers:_}):new Response(w.body,{status:v,statusText:m,headers:_}),x.rawHeaders=T,x.rawResponse=w,x.cached=t.includes(g.status),x}async#t(e){if(!e.ok)throw new n(e.status,await e.json());const t=function(e){const t="x-bare-headers";if((e=new Headers(e)).has(`${t}-0`)){const s=[];for(let[r,o]of e)if(r.startsWith(t)){if(!o.startsWith(";"))return{error:{code:"INVALID_BARE_HEADER",id:`request.headers.${r}`,message:"Value didn't begin with semi-colon."}};o=o.slice(1),s[parseInt(r.slice(t.length+1))]=o,e.delete(r)}e.set(t,s.join(""))}return e}(e.headers);if(t.error)throw new n(t.error);const s=parseInt(t.get("x-bare-status")),r=t.get("x-bare-status-text"),o=JSON.parse(t.get("x-bare-headers"));return{status:s,statusText:r,headers:new Headers(o),rawHeaders:o}}#e(e,t,s,r,o,n,a=[],i=[],c=[]){e.set("x-bare-protocol",t),e.set("x-bare-host",s),e.set("x-bare-path",r),e.set("x-bare-port",o),e.set("x-bare-headers",JSON.stringify(n));for(let t of a)e.append("x-bare-forward-headers",t);for(let t of i)e.append("x-bare-pass-headers",t);for(let t of c)e.append("x-bare-pass-status",t);return function(e){if((e=new Headers(e)).has("x-bare-headers")){const t=e.get("x-bare-headers");if(t.length>w){e.delete("x-bare-headers");let s=0;for(let r=0;r<t.length;r+=w){const o=t.slice(r,r+w),n=s++;e.set(`x-bare-headers-${n}`,`;${o}`)}}}}(e),e}}class v{ready=!1;constructor(e,t){this.server=new URL(e),"object"==typeof t&&this.#s(t)}#s(e){let t=!1;for(let s of[x,l])if(e.versions.includes(`v${s.version}`)){this.client=new s(this),t=!0;break}if(!t)throw new Error("Unable to find compatible client version.");this.data=e,this.ready=!0}async#r(){if(!0===this.ready)return;const e=await fetch(this.server);if(!e.ok)throw new Error(`Unable to fetch Bare meta: ${e.status} ${await e.text()}`);this.#s(await e.json())}async request(e,t,s,r,o,n,a,i,c){return await this.#r(),this.client.request(e,t,s,r,o,n,a,i,c)}async connect(e,t,s,r,o){return await this.#r(),this.client.connect(e,t,s,r,o)}async fetch(e,t={}){let s,r,n,a,i;e=new URL(e),s="string"==typeof t.method?t.method:"GET",void 0!==t.body&&null!==t.body&&(r=t.body),n="object"==typeof t.headers&&null!==t.headers?t.headers instanceof Headers?Object.fromEntries(t.headers):t.headers:{},a="string"==typeof t.cache?t.cache:"default",t.signal instanceof AbortSignal&&(i=t.signal);for(let c=0;;c++){let h;h=""===e.port?"https:"===e.protocol?"443":"80":e.port,n.host=e.host;const d=await this.request(s,n,r,e.protocol,e.hostname,h,e.pathname+e.search,a,i);if(d.finalURL=e.toString(),!o.includes(d.status))return d;switch(t.redirect){case"follow":if(20>c&&d.headers.has("location")){e=new URL(d.headers.get("location"),e);continue}throw new TypeError("Failed to fetch");case"error":throw new TypeError("Failed to fetch");default:return d}}}}})(),r.default})()));