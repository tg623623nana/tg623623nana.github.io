(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[521],{512:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/about",function(){return n(5785)}])},3868:function(e){"use strict";e.exports={reactStrictMode:!0}},2854:function(e,t,n){"use strict";var i=n(5893);n(7294);var s=n(6291);let r={initial:{opacity:1},animate:{opacity:1,transition:{delay:.5,staggerChildren:.08}}},l={initial:{opacity:0,y:50},animate:{opacity:1,y:0,transition:{duration:1}}},o=e=>{let{text:t,className:n=""}=e;return(0,i.jsx)("div",{className:"w-full mx-auto py-4 flex items-center justify-center text-center   overflow-hidden    ",children:(0,i.jsx)(s.E.h1,{className:"inline-block w-full text-dark font-bold capitalize text-8xl ".concat(n),variants:r,initial:"initial",animate:"animate",children:t.split(" ").map((e,t)=>(0,i.jsxs)(s.E.span,{className:"inline-block",variants:l,children:[e,"\xa0"]},e+"-"+t))})})};t.Z=o},5785:function(e,t,n){"use strict";let i,s;n.r(t),n.d(t,{default:function(){return V}});var r=n(5893),l=n(7294),o=n(9008),a=n.n(o),c=n(497),d=n(2854),f=n(5675),u=n.n(f),m={src:"/_next/static/media/home-img4.28dd7f0c.jpg",height:1109,width:1477,blurDataURL:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAYACAMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAAAwEBAAAAAAAAAAAAAAAAAAAAAv/aAAwDAQACEAMQAAAAmC//xAAdEAEAAQMFAAAAAAAAAAAAAAACAQMEEgAFBiFC/9oACAEBAAE/ALHlW43KrBPCpilDPnuNf//EABYRAQEBAAAAAAAAAAAAAAAAAAIhAP/aAAgBAgEBPwBRTf/EABgRAAIDAAAAAAAAAAAAAAAAAAABAhEi/9oACAEDAQE/AI6Vs//Z",blurWidth:8,blurHeight:6};let A=()=>(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("h2",{className:"font-bold text-6xl mt-32 w-full text-center",children:"Skills"})});var h=n(6291),g=n(3234),p=n(6681),x=n(5487);let y=new WeakMap;function v({target:e,contentRect:t,borderBoxSize:n}){var i;null===(i=y.get(e))||void 0===i||i.forEach(i=>{i({target:e,contentSize:t,get size(){return function(e,t){if(t){let{inlineSize:e,blockSize:n}=t[0];return{width:e,height:n}}return e instanceof SVGElement&&"getBBox"in e?e.getBBox():{width:e.offsetWidth,height:e.offsetHeight}}(e,n)}})})}function w(e){e.forEach(v)}let E=new Set;var b=n(3967),j=n(3038);let N=()=>({current:0,offset:[],progress:0,scrollLength:0,targetOffset:0,targetLength:0,containerLength:0,velocity:0}),k=()=>({time:0,x:N(),y:N()}),B={x:{length:"Width",position:"Left"},y:{length:"Height",position:"Top"}};function C(e,t,n,i){let s=n[t],{length:r,position:l}=B[t],o=s.current,a=n.time;s.current=e["scroll"+l],s.scrollLength=e["scroll"+r]-e["client"+r],s.offset.length=0,s.offset[0]=0,s.offset[1]=s.scrollLength,s.progress=(0,b.Y)(0,s.scrollLength,s.current);let c=i-a;s.velocity=c>50?0:(0,j.R)(s.current-o,c)}let L={Enter:[[0,1],[1,1]],Exit:[[0,0],[1,0]],Any:[[1,0],[0,1]],All:[[0,0],[1,1]]},P={start:0,center:.5,end:1};function W(e,t,n=0){let i=0;if(void 0!==P[e]&&(e=P[e]),"string"==typeof e){let t=parseFloat(e);e.endsWith("px")?i=t:e.endsWith("%")?e=t/100:e.endsWith("vw")?i=t/100*document.documentElement.clientWidth:e.endsWith("vh")?i=t/100*document.documentElement.clientHeight:e=t}return"number"==typeof e&&(i=t*e),n+i}let M=[0,0];var S=n(4606),T=n(533);let z={x:0,y:0};var H=n(2074);let I=new WeakMap,Q=new WeakMap,R=new WeakMap,Y=e=>e===document.documentElement?window:e;var _=n(8868);function D(e,t){(0,x.K)(Boolean(!t||t.current),`You have defined a ${e} options but the provided ref is not yet hydrated, probably because it's defined higher up the tree. Try calling useScroll() in the same component as the ref, or setting its \`layoutEffect: false\` option.`)}let F=()=>({scrollX:(0,g.B)(0),scrollY:(0,g.B)(0),scrollXProgress:(0,g.B)(0),scrollYProgress:(0,g.B)(0)});function O({container:e,target:t,layoutEffect:n=!0,...r}={}){let o=(0,p.h)(F),a=n?_.L:l.useEffect;return a(()=>(D("target",t),D("container",e),function(e,{container:t=document.documentElement,...n}={}){let r=R.get(t);r||(r=new Set,R.set(t,r));let l=k(),o=function(e,t,n,i={}){return{measure:()=>(function(e,t=e,n){if(n.x.targetOffset=0,n.y.targetOffset=0,t!==e){let i=t;for(;i&&i!==e;)n.x.targetOffset+=i.offsetLeft,n.y.targetOffset+=i.offsetTop,i=i.offsetParent}n.x.targetLength=t===e?t.scrollWidth:t.clientWidth,n.y.targetLength=t===e?t.scrollHeight:t.clientHeight,n.x.containerLength=e.clientWidth,n.y.containerLength=e.clientHeight})(e,i.target,n),update:t=>{var s;C(e,"x",s=n,t),C(e,"y",s,t),s.time=t,(i.offset||i.target)&&function(e,t,n){let{offset:i=L.All}=n,{target:s=e,axis:r="y"}=n,l="y"===r?"height":"width",o=s!==e?function(e,t){let n={x:0,y:0},i=e;for(;i&&i!==t;)if(i instanceof HTMLElement)n.x+=i.offsetLeft,n.y+=i.offsetTop,i=i.offsetParent;else if(i instanceof SVGGraphicsElement&&"getBBox"in i){let{top:e,left:t}=i.getBBox();for(n.x+=t,n.y+=e;i&&"svg"!==i.tagName;)i=i.parentNode}return n}(s,e):z,a=s===e?{width:e.scrollWidth,height:e.scrollHeight}:{width:s.clientWidth,height:s.clientHeight},c={width:e.clientWidth,height:e.clientHeight};t[r].offset.length=0;let d=!t[r].interpolate,f=i.length;for(let e=0;e<f;e++){let n=function(e,t,n,i){let s=Array.isArray(e)?e:M,r=0;return"number"==typeof e?s=[e,e]:"string"==typeof e&&(s=(e=e.trim()).includes(" ")?e.split(" "):[e,P[e]?e:"0"]),W(s[0],n,i)-W(s[1],t)}(i[e],c[l],a[l],o[r]);d||n===t[r].interpolatorOffsets[e]||(d=!0),t[r].offset[e]=n}d&&(t[r].interpolate=(0,S.s)(t[r].offset,(0,T.Y)(i)),t[r].interpolatorOffsets=[...t[r].offset]),t[r].progress=t[r].interpolate(t[r].current)}(e,n,i)},notify:()=>t(n)}}(t,e,l,n);if(r.add(o),!I.has(t)){let e=()=>{for(let e of r)e.measure()},n=()=>{for(let e of r)e.update(H.w0.timestamp)},l=()=>{for(let e of r)e.notify()},o=()=>{H.Wi.read(e,!1,!0),H.Wi.update(n,!1,!0),H.Wi.update(l,!1,!0)};I.set(t,o);let a=Y(t);window.addEventListener("resize",o,{passive:!0}),t!==document.documentElement&&Q.set(t,"function"==typeof t?(E.add(t),s||(s=()=>{let e={width:window.innerWidth,height:window.innerHeight},t={target:window,size:e,contentSize:e};E.forEach(e=>e(t))},window.addEventListener("resize",s)),()=>{E.delete(t),!E.size&&s&&(s=void 0)}):function(e,t){i||"undefined"==typeof ResizeObserver||(i=new ResizeObserver(w));let n=function(e,t,n){var i;if("string"==typeof e){let s=document;t&&((0,x.k)(Boolean(t.current),"Scope provided, but no element detected."),s=t.current),n?(null!==(i=n[e])&&void 0!==i||(n[e]=s.querySelectorAll(e)),e=n[e]):e=s.querySelectorAll(e)}else e instanceof Element&&(e=[e]);return Array.from(e||[])}(e);return n.forEach(e=>{let n=y.get(e);n||(n=new Set,y.set(e,n)),n.add(t),null==i||i.observe(e)}),()=>{n.forEach(e=>{let n=y.get(e);null==n||n.delete(t),(null==n?void 0:n.size)||null==i||i.unobserve(e)})}}(t,o)),a.addEventListener("scroll",o,{passive:!0})}let a=I.get(t);return H.Wi.read(a,!1,!0),()=>{var e;(0,H.Pn)(a);let n=R.get(t);if(!n||(n.delete(o),n.size))return;let i=I.get(t);I.delete(t),i&&(Y(t).removeEventListener("scroll",i),null===(e=Q.get(t))||void 0===e||e(),window.removeEventListener("resize",i))}}(({x:e,y:t})=>{o.scrollX.set(e.current),o.scrollXProgress.set(e.progress),o.scrollY.set(t.current),o.scrollYProgress.set(t.progress)},{...r,container:(null==e?void 0:e.current)||void 0,target:(null==t?void 0:t.current)||void 0})),[]),o}let U=e=>{let{reference:t}=e,{scrollYProgress:n}=O({target:t,offset:["center end","center center"]});return(0,r.jsx)("figure",{className:"absolute left-0 stroke-dark",children:(0,r.jsxs)("svg",{className:"-rotate-90",width:"75",height:"75",viewBox:"0 0 100 100",children:[(0,r.jsx)("circle",{cx:"75",cy:"50",r:"20",className:"stroke-primary stroke-1 fill-none"}),(0,r.jsx)(h.E.circle,{cx:"75",cy:"50",r:"20",className:"stroke-[5px] fill-light",style:{pathLength:n}}),(0,r.jsx)("circle",{cx:"75",cy:"50",r:"10",className:"animate-pulse stroke-1 fill-primary"})]})})},X=e=>{let{position:t,company:n,companyLink:i,time:s,address:o,work:a}=e,c=(0,l.useRef)(null);return(0,r.jsxs)("li",{ref:c,className:"my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col   items-center justify-between",children:[(0,r.jsx)(U,{reference:c}),(0,r.jsxs)(h.E.div,{initial:{y:50},whileInView:{y:0},transition:{duration:.5,type:"spring"},children:[(0,r.jsxs)("h3",{className:"capitalize font-bold text-2x1",children:[t,"\xa0",(0,r.jsxs)("a",{href:i,target:"_blank",className:"text-primary capitalize",children:["@",n]})]}),(0,r.jsxs)("span",{className:"capitalize font-medium text-dark/75",children:[s," | ",o]}),(0,r.jsx)("p",{className:"font-medium w-full",children:a})]})]})},G=()=>{let e=(0,l.useRef)(null),{scrollYProgress:t}=O({target:e,offset:["start end","center start"]});return(0,r.jsxs)("div",{className:"my-64",children:[(0,r.jsx)("h2",{className:"font-bold text-6xl mb-32 w-full text-center",children:"Experience"}),(0,r.jsxs)("div",{ref:e,className:"w-[75%] mx-auto relative",children:[(0,r.jsx)(h.E.div,{style:{scaleY:t},className:"absolute left-9 top-0 w-[4px] h-full bg-dark origin-top"}),(0,r.jsxs)("ul",{className:"w-full flex flex-col items-start justify-between ml-4",children:[(0,r.jsx)(X,{position:"System engineer (Control & Robotics)",company:"Point Robotics MedTech",companyLink:"https://www.pointroboticsinc.com/en",time:"2021-2022",address:"NTPC, Taiwan",work:"Point Robotics is a startup that aim to build surgical robots to save doctor’s operating time of spinal decompression in minimally invasive procedures. As a system engineer, I was responsible for developing autonomous control systems for surgical robotics, integrating navigation system, force sensors, planning, and control. My contribution is to lead the development of the autonomous system, which transforms the robot system from a collaborative to fully automatic."}),(0,r.jsx)(X,{position:"Teaching Assistant in Control system and Engineering Mathematic",company:"National Tsing Hua University",companyLink:"https://nthu-en.site.nthu.edu.tw/",time:"2020-2021",address:"NTPC, Taiwan",work:"   - Prepared academic material on Classical Control and Numerical Analysis.   - Held TA sessions after class."})]})]})]})};n(3868);let K=()=>(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(a(),{children:[(0,r.jsx)("title",{children:"CodeBucks | About Page"}),(0,r.jsx)("meta",{name:"description",content:"any description"})]}),(0,r.jsx)("main",{className:"flex w-full flex-col items-center justify-center",children:(0,r.jsxs)(c.Z,{className:"py-2 backy",children:[(0,r.jsx)(d.Z,{text:"About Me",className:"mb-16 !text-6xl"}),(0,r.jsxs)("div",{className:"grid w-full grid-cols-5 gap-16",children:[(0,r.jsxs)("div",{className:"col-span-3 flex flex-col items-start justify-start",children:[(0,r.jsx)("h2",{className:"mb-4 text-lg font-bold uppercase text-dark/75",children:"Biography"}),(0,r.jsx)("p",{className:"my-2 font-medium",children:"I am a Master’s of Engineering graduate from UC Berkeley in Mechanical Engineering, specializing in robotics and autonomous systems control."}),(0,r.jsx)("p",{className:"my-2 font-medium",children:"During my graduate studies, I conducted research focused on optimal control, motion planning, and state estimation for autonomous vehicles."}),(0,r.jsx)("p",{className:"my-2 font-medium",children:"Previously, I worked as a system engineer at Point Robotics, developing an automated drilling application for surgical robots using trajectory planning and impedance control."}),(0,r.jsx)("p",{className:"my-2 font-medium",children:"My experience in developing surgical robots and implementing collision avoidance strategies drive me to become passionate about creating innovative and cutting-edge autonomous control strategies."}),(0,r.jsx)("h2",{className:"my-4 text-lg font-bold uppercase text-dark/75",children:"Education"}),(0,r.jsxs)("ul",{style:{listStyleType:"square"},class:"px-6",children:[(0,r.jsx)("li",{className:"my-2 font-bold",children:"MEng in Mechanical Engineering, specialized in Control of Robotic and Autonomous Systems, 2023"}),(0,r.jsx)("p",{children:"University of California, Berkeley"}),(0,r.jsx)("li",{className:"my-2 font-bold",children:"B.S. in Mechanical Engineering, 2021"}),(0,r.jsx)("p",{children:"National Tsing Hua University, Hsinchu, Taiwan "})]})]}),(0,r.jsx)("div",{className:"col-span-2 relative h-max border-2 border-solid border-dark bg-dark p-6 rounded-[2rem]   ",children:(0,r.jsx)("div",{className:"px-2 py-2 rounded-[2rem] bg-light",children:(0,r.jsx)(u(),{src:m,alt:"CodeBucks",className:"w-full h-auto rounded-[2rem]"})})})]}),(0,r.jsx)(A,{}),(0,r.jsx)(G,{})]})})]});var V=K}},function(e){e.O(0,[774,888,179],function(){return e(e.s=512)}),_N_E=e.O()}]);