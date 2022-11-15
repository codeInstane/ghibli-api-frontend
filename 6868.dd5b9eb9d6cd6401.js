"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[6868],{4147:(U,O,_)=>{_.d(O,{a:()=>I,b:()=>v,p:()=>C});const C=(g,...w)=>console.warn(`[Ionic Warning]: ${g}`,...w),v=(g,...w)=>console.error(`[Ionic Error]: ${g}`,...w),I=(g,...w)=>console.error(`<${g.tagName.toLowerCase()}> must be used inside ${w.join(" or ")}.`)},6814:(U,O,_)=>{_.d(O,{A:()=>Ce,B:()=>h,C:()=>Ee,D:()=>m,E:()=>Me,F:()=>ae,G:()=>Ie,H:()=>$e,I:()=>A,J:()=>ue,K:()=>ce,L:()=>De,M:()=>ee,N:()=>P,O:()=>ze,P:()=>je,Q:()=>te,R:()=>j,S:()=>se,a:()=>le,b:()=>g,c:()=>v,d:()=>N,e:()=>z,f:()=>pe,g:()=>de,h:()=>Se,i:()=>I,j:()=>X,k:()=>K,l:()=>Q,m:()=>q,n:()=>V,o:()=>x,p:()=>b,q:()=>Ue,r:()=>Le,s:()=>ke,t:()=>$,u:()=>s,v:()=>oe,w:()=>w,x:()=>Ae,y:()=>Oe,z:()=>B});var C=_(4147);const v=(e,n)=>e.month===n.month&&e.day===n.day&&e.year===n.year,I=(e,n)=>e.year<n.year||e.year===n.year&&e.month<n.month||e.year===n.year&&e.month===n.month&&null!==e.day&&e.day<n.day,g=(e,n)=>e.year>n.year||e.year===n.year&&e.month>n.month||e.year===n.year&&e.month===n.month&&null!==e.day&&e.day>n.day,w=(e,n,t)=>{const o=Array.isArray(e)?e:[e];for(const u of o)if(void 0!==n&&I(u,n)||void 0!==t&&g(u,t)){(0,C.p)(`The value provided to ion-datetime is out of bounds.\n\nMin: ${JSON.stringify(n)}\nMax: ${JSON.stringify(t)}\nValue: ${JSON.stringify(e)}`);break}},A=(e,n)=>{if(void 0!==n)return"h23"===n;const t=new Intl.DateTimeFormat(e,{hour:"numeric"}),o=t.resolvedOptions();if(void 0!==o.hourCycle)return"h23"===o.hourCycle;const u=new Date("5/18/2021 00:00"),r=t.formatToParts(u).find(d=>"hour"===d.type);if(!r)throw new Error("Hour value not found from DateTimeFormat");return"00"===r.value},s=(e,n)=>4===e||6===e||9===e||11===e?30:2===e?(e=>e%4==0&&e%100!=0||e%400==0)(n)?29:28:31,h=(e,n={month:"numeric",year:"numeric"})=>"month"===new Intl.DateTimeFormat(e,n).formatToParts(new Date)[0].type,m=e=>"dayPeriod"===new Intl.DateTimeFormat(e,{hour:"numeric"}).formatToParts(new Date)[0].type,T=e=>("0"+(void 0!==e?Math.abs(e):"0")).slice(-2);function $(e){if(Array.isArray(e))return e.map(t=>$(t));let n="";return void 0!==e.year?(n=(e=>("000"+(void 0!==e?Math.abs(e):"0")).slice(-4))(e.year),void 0!==e.month&&(n+="-"+T(e.month),void 0!==e.day&&(n+="-"+T(e.day),void 0!==e.hour&&(n+=`T${T(e.hour)}:${T(e.minute)}:00`,n+=void 0===e.tzOffset?"Z":(e.tzOffset>0?"+":"-")+T(Math.floor(Math.abs(e.tzOffset/60)))+":"+T(e.tzOffset%60))))):void 0!==e.hour&&(n=T(e.hour)+":"+T(e.minute)),n}const H=(e,n)=>void 0===n?e:"am"===n?12===e?0:e:12===e?12:e+12,K=e=>{const{dayOfWeek:n}=e;if(null==n)throw new Error("No day of week provided");return k(e,n)},X=e=>{const{dayOfWeek:n}=e;if(null==n)throw new Error("No day of week provided");return S(e,6-n)},q=e=>S(e,1),Q=e=>k(e,1),V=e=>k(e,7),x=e=>S(e,7),k=(e,n)=>{const{month:t,day:o,year:u}=e;if(null===o)throw new Error("No day provided");const i={month:t,day:o,year:u};if(i.day=o-n,i.day<1&&(i.month-=1),i.month<1&&(i.month=12,i.year-=1),i.day<1){const r=s(i.month,i.year);i.day=r+i.day}return i},S=(e,n)=>{const{month:t,day:o,year:u}=e;if(null===o)throw new Error("No day provided");const i={month:t,day:o,year:u},r=s(t,u);return i.day=o+n,i.day>r&&(i.day-=r,i.month+=1),i.month>12&&(i.month=1,i.year+=1),i},N=e=>{const n=1===e.month?12:e.month-1,t=1===e.month?e.year-1:e.year,o=s(n,t);return{month:n,year:t,day:o<e.day?o:e.day}},z=e=>{const n=12===e.month?1:e.month+1,t=12===e.month?e.year+1:e.year,o=s(n,t);return{month:n,year:t,day:o<e.day?o:e.day}},Z=(e,n)=>{const t=e.month,o=e.year+n,u=s(t,o);return{month:t,year:o,day:u<e.day?u:e.day}},P=e=>Z(e,-1),ee=e=>Z(e,1),ne=(e,n,t)=>n?e:H(e,t),te=(e,n)=>{const{ampm:t,hour:o}=e;let u=o;return"am"===t&&"pm"===n?u=H(u,"pm"):"pm"===t&&"am"===n&&(u=Math.abs(u-12)),u},oe=(e,n,t)=>{const{month:o,day:u,year:i}=e,r=Object.assign({},e),d=s(o,i);return null!==u&&d<u&&(r.day=d),void 0!==n&&v(r,n)&&void 0!==r.hour&&void 0!==n.hour&&(r.hour<n.hour?(r.hour=n.hour,r.minute=n.minute):r.hour===n.hour&&void 0!==r.minute&&void 0!==n.minute&&r.minute<n.minute&&(r.minute=n.minute)),void 0!==t&&v(e,t)&&void 0!==r.hour&&void 0!==t.hour&&(r.hour>t.hour?(r.hour=t.hour,r.minute=t.minute):r.hour===t.hour&&void 0!==r.minute&&void 0!==t.minute&&r.minute>t.minute&&(r.minute=t.minute)),r},ue=(e,n,t)=>void 0===n.hour||void 0===n.minute?"Invalid Time":new Intl.DateTimeFormat(e,{hour:"numeric",minute:"numeric",timeZone:"UTC",hourCycle:t?"h23":"h12"}).format(new Date($(Object.assign(Object.assign({},n),{tzOffset:void 0})))),G=e=>{const n=e.toString();return n.length>1?n:`0${n}`},ie=(e,n)=>n?G(e):0===e?"12":e.toString(),de=(e,n,t)=>{if(null===t.day)return null;const o=new Date(`${t.month}/${t.day}/${t.year} GMT+0000`),u=new Intl.DateTimeFormat(e,{weekday:"long",month:"long",day:"numeric",timeZone:"UTC"}).format(o);return n?`Today, ${u}`:u},ce=(e,n)=>{const t=new Date(`${n.month}/${n.day}/${n.year} GMT+0000`);return new Intl.DateTimeFormat(e,{weekday:"short",month:"short",day:"numeric",timeZone:"UTC"}).format(t)},ae=(e,n)=>{const t=new Date(`${n.month}/${n.day}/${n.year} GMT+0000`);return new Intl.DateTimeFormat(e,{month:"long",year:"numeric",timeZone:"UTC"}).format(t)},se=(e,n)=>j(e,n,{month:"short",day:"numeric",year:"numeric"}),le=(e,n)=>fe(e,n,{day:"numeric"}).find(t=>"day"===t.type).value,ye=(e,n)=>j(e,n,{year:"numeric"}),R=e=>new Date(`${e.month}/${e.day}/${e.year}${void 0!==e.hour&&void 0!==e.minute?` ${e.hour}:${e.minute}`:""} GMT+0000`),j=(e,n,t)=>{const o=R(n);return W(e,t).format(o)},fe=(e,n,t)=>{const o=R(n);return W(e,t).formatToParts(o)},W=(e,n)=>new Intl.DateTimeFormat(e,Object.assign(Object.assign({},n),{timeZone:"UTC"})),he=e=>{if("RelativeTimeFormat"in Intl){const n=new Intl.RelativeTimeFormat(e,{numeric:"auto"}).format(0,"day");return n.charAt(0).toUpperCase()+n.slice(1)}return"Today"},L=e=>{const n=e.getTimezoneOffset();return e.setMinutes(e.getMinutes()-n),e},me=L(new Date("2022T01:00")),ge=L(new Date("2022T13:00")),Y=(e,n)=>{const t="am"===n?me:ge,o=new Intl.DateTimeFormat(e,{hour:"numeric",timeZone:"UTC"}).formatToParts(t).find(u=>"dayPeriod"===u.type);return o?o.value:(e=>void 0===e?"":e.toUpperCase())(n)},De=e=>Array.isArray(e)?e.join(","):e,pe=()=>L(new Date).toISOString(),Te=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59],ve=[0,1,2,3,4,5,6,7,8,9,10,11],we=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23],Me=(e,n,t=0)=>{const u=new Intl.DateTimeFormat(e,{weekday:"ios"===n?"short":"narrow"}),i=new Date("11/01/2020"),r=[];for(let d=t;d<t+7;d++){const c=new Date(i);c.setDate(c.getDate()+d),r.push(u.format(c))}return r},Ie=(e,n,t)=>{const o=s(e,n),u=new Date(`${e}/1/${n}`).getDay(),i=u>=t?u-(t+1):6-(t-u);let r=[];for(let d=1;d<=o;d++)r.push({day:d,dayOfWeek:(i+d)%7});for(let d=0;d<=i;d++)r=[{day:null,dayOfWeek:null},...r];return r},$e=e=>[N(e),{month:e.month,year:e.year,day:e.day},z(e)],Oe=(e,n,t,o,u,i={month:"long"})=>{const{year:r}=n,d=[];if(void 0!==u){let c=u;void 0!==(null==o?void 0:o.month)&&(c=c.filter(y=>y<=o.month)),void 0!==(null==t?void 0:t.month)&&(c=c.filter(y=>y>=t.month)),c.forEach(y=>{const l=new Date(`${y}/1/${r} GMT+0000`),a=new Intl.DateTimeFormat(e,Object.assign(Object.assign({},i),{timeZone:"UTC"})).format(l);d.push({text:a,value:y})})}else{const c=o&&o.year===r?o.month:12;for(let l=t&&t.year===r?t.month:1;l<=c;l++){const a=new Date(`${l}/1/${r} GMT+0000`),f=new Intl.DateTimeFormat(e,Object.assign(Object.assign({},i),{timeZone:"UTC"})).format(a);d.push({text:f,value:l})}}return d},B=(e,n,t,o,u,i={day:"numeric"})=>{const{month:r,year:d}=n,c=[],y=s(r,d),l=null!=(null==o?void 0:o.day)&&o.year===d&&o.month===r?o.day:y,a=null!=(null==t?void 0:t.day)&&t.year===d&&t.month===r?t.day:1;if(void 0!==u){let f=u;f=f.filter(D=>D>=a&&D<=l),f.forEach(D=>{const p=new Date(`${r}/${D}/${d} GMT+0000`),M=new Intl.DateTimeFormat(e,Object.assign(Object.assign({},i),{timeZone:"UTC"})).format(p);c.push({text:M,value:D})})}else for(let f=a;f<=l;f++){const D=new Date(`${r}/${f}/${d} GMT+0000`),p=new Intl.DateTimeFormat(e,Object.assign(Object.assign({},i),{timeZone:"UTC"})).format(D);c.push({text:p,value:f})}return c},Ce=(e,n,t,o,u)=>{var i,r;let d=[];if(void 0!==u)d=u,void 0!==(null==o?void 0:o.year)&&(d=d.filter(c=>c<=o.year)),void 0!==(null==t?void 0:t.year)&&(d=d.filter(c=>c>=t.year));else{const{year:c}=n,y=null!==(i=null==o?void 0:o.year)&&void 0!==i?i:c,l=null!==(r=null==t?void 0:t.year)&&void 0!==r?r:c-100;for(let a=y;a>=l;a--)d.push(a)}return d.map(c=>({text:ye(e,{year:c,month:n.month,day:n.day}),value:c}))},J=(e,n)=>e.month===n.month&&e.year===n.year?[e]:[e,...J(z(e),n)],Ae=(e,n,t,o,u,i)=>{let r=[],d=[],c=J(t,o);return i&&(c=c.filter(({month:y})=>i.includes(y))),c.forEach(y=>{const l={month:y.month,day:null,year:y.year},a=B(e,l,t,o,u,{month:"short",day:"numeric",weekday:"short"}),f=[],D=[];a.forEach(p=>{const M=v(Object.assign(Object.assign({},l),{day:p.value}),n);D.push({text:M?he(e):p.text,value:`${l.year}-${l.month}-${p.value}`}),f.push({month:l.month,year:l.year,day:p.value})}),d=[...d,...f],r=[...r,...D]}),{parts:d,items:r}},Ee=(e,n,t,o,u,i,r)=>{const d=A(e,t),{hours:c,minutes:y,am:l,pm:a}=((e,n="h12",t,o,u,i)=>{const r="h23"===n;let d=r?we:ve,c=Te,y=!0,l=!0;if(u&&(d=d.filter(a=>u.includes(a))),i&&(c=c.filter(a=>i.includes(a))),t)if(v(e,t)){if(void 0!==t.hour&&(d=d.filter(a=>(r?a:"pm"===e.ampm?(a+12)%24:a)>=t.hour),y=t.hour<13),void 0!==t.minute){let a=!1;void 0!==t.hour&&void 0!==e.hour&&e.hour>t.hour&&(a=!0),c=c.filter(f=>!!a||f>=t.minute)}}else I(e,t)&&(d=[],c=[],y=l=!1);return o&&(v(e,o)?(void 0!==o.hour&&(d=d.filter(a=>(r?a:"pm"===e.ampm?(a+12)%24:a)<=o.hour),l=o.hour>=13),void 0!==o.minute&&e.hour===o.hour&&(c=c.filter(a=>a<=o.minute))):g(e,o)&&(d=[],c=[],y=l=!1)),{hours:d,minutes:c,am:y,pm:l}})(n,d?"h23":"h12",o,u,i,r),f=c.map(M=>({text:ie(M,d),value:ne(M,d,n.ampm)})),D=y.map(M=>({text:G(M),value:M})),p=[];return l&&!d&&p.push({text:Y(e,"am"),value:"am"}),a&&!d&&p.push({text:Y(e,"pm"),value:"pm"}),{minutesData:D,hoursData:f,dayPeriodData:p}},be=/^(\d{4}|[+\-]\d{6})(?:-(\d{2})(?:-(\d{2}))?)?(?:T(\d{2}):(\d{2})(?::(\d{2})(?:\.(\d{3}))?)?(?:(Z)|([+\-])(\d{2})(?::(\d{2}))?)?)?$/,Fe=/^((\d{2}):(\d{2})(?::(\d{2})(?:\.(\d{3}))?)?(?:(Z)|([+\-])(\d{2})(?::(\d{2}))?)?)?$/,ke=e=>{if(void 0===e)return;let t,n=e;return"string"==typeof e&&(n=e.replace(/\[|\]|\s/g,"").split(",")),t=Array.isArray(n)?n.map(o=>parseInt(o,10)).filter(isFinite):[n],t},Se=e=>({month:parseInt(e.getAttribute("data-month"),10),day:parseInt(e.getAttribute("data-day"),10),year:parseInt(e.getAttribute("data-year"),10),dayOfWeek:parseInt(e.getAttribute("data-day-of-week"),10)});function b(e){if(Array.isArray(e))return e.map(o=>b(o));let n=null;if(null!=e&&""!==e&&(n=Fe.exec(e),n?(n.unshift(void 0,void 0),n[2]=n[3]=void 0):n=be.exec(e)),null===n)return;for(let o=1;o<8;o++)n[o]=void 0!==n[o]?parseInt(n[o],10):void 0;let t=0;return n[9]&&n[10]&&(t=60*parseInt(n[10],10),n[11]&&(t+=parseInt(n[11],10)),"-"===n[9]&&(t*=-1)),{year:n[1],month:n[2],day:n[3],hour:n[4],minute:n[5],tzOffset:t,ampm:n[4]<12?"am":"pm"}}const ze=(e,n,t)=>n&&I(e,n)?n:t&&g(e,t)?t:e,je=e=>e>=12?"pm":"am",Le=(e,n)=>{const{month:t,day:o,year:u,hour:i,minute:r}=b(e),d=null!=u?u:n.year,c=null!=t?t:12;return{month:c,day:null!=o?o:s(c,d),year:d,hour:null!=i?i:23,minute:null!=r?r:59}},Ue=(e,n)=>{const{month:t,day:o,year:u,hour:i,minute:r}=b(e);return{month:null!=t?t:1,day:null!=o?o:1,year:null!=u?u:n.year,hour:null!=i?i:0,minute:null!=r?r:0}}},2854:(U,O,_)=>{_.d(O,{c:()=>I,g:()=>w,h:()=>v,o:()=>A});var C=_(5861);const v=(s,h)=>null!==h.closest(s),I=(s,h)=>"string"==typeof s&&s.length>0?Object.assign({"ion-color":!0,[`ion-color-${s}`]:!0},h):h,w=s=>{const h={};return(s=>void 0!==s?(Array.isArray(s)?s:s.split(" ")).filter(m=>null!=m).map(m=>m.trim()).filter(m=>""!==m):[])(s).forEach(m=>h[m]=!0),h},F=/^[a-z][a-z0-9+\-.]*:/,A=function(){var s=(0,C.Z)(function*(h,m,T,E){if(null!=h&&"#"!==h[0]&&!F.test(h)){const $=document.querySelector("ion-router");if($)return null!=m&&m.preventDefault(),$.push(h,T,E)}return!1});return function(m,T,E,$){return s.apply(this,arguments)}}()}}]);