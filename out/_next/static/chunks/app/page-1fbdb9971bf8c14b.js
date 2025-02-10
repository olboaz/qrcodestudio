(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[974],{1846:(e,t,n)=>{Promise.resolve().then(n.bind(n,9944))},9944:(e,t,n)=>{"use strict";n.d(t,{default:()=>i});var l=n(5155),s=n(4253),r=n.n(s),a=n(2115);function i(){let[e,t]=(0,a.useState)(""),[n,s]=(0,a.useState)(300),i=(0,a.useRef)(null),o=(0,a.useRef)(null),[c,d]=(0,a.useState)(null),[u,m]=(0,a.useState)(null),[x,g]=(0,a.useState)(!1),[h,p]=(0,a.useState)(!1);(0,a.useEffect)(()=>{o.current||(o.current=new(r())({width:220,height:220,data:e,image:null!=u?u:(null==c?void 0:c.src)?"".concat("").concat(c.src):void 0,dotsOptions:{color:"#000",type:"rounded"},imageOptions:{crossOrigin:"anonymous",margin:0,imageSize:.3}})),i.current&&o.current.append(i.current)},[]),(0,a.useEffect)(()=>{o.current&&o.current.update({data:e,image:null!=u?u:(null==c?void 0:c.src)?"".concat("").concat(c.src):void 0})},[e,c,u]);let v=e=>{d(e),m(null)};return(0,l.jsxs)("div",{className:"flex flex-col items-center justify-center min-h-screen bg-violet-100 p-4 relative",children:[(0,l.jsxs)("h1",{className:"text-7xl font-extrabold text-violet-700 relative mb-[60px]",children:[(0,l.jsx)("span",{className:"relative z-10 bg-gradient-to-r from-cyan-500 to-pink-500 bg-clip-text text-transparent",children:"QR Code Studio"}),(0,l.jsxs)("div",{className:"flip",children:[(0,l.jsx)("div",{children:(0,l.jsx)("div",{children:"Easy"})}),(0,l.jsx)("div",{children:(0,l.jsx)("div",{children:"Free"})}),(0,l.jsx)("div",{children:(0,l.jsx)("div",{children:"Unlimited"})})]})]}),(0,l.jsxs)("div",{className:"flex gap-6 w-full max-w-4xl",children:[(0,l.jsxs)("div",{className:"bg-white p-6 rounded-xl shadow-lg w-1/2",children:[(0,l.jsx)("input",{type:"text",value:e,onChange:e=>t(e.target.value),placeholder:"Enter URL",className:"w-full p-3 border border-gray-300 rounded-lg mb-4 focus:ring-2 focus:ring-violet-500"}),(0,l.jsxs)("label",{className:"block mb-2 text-gray-700 font-medium",children:["Qr Code Size : ",n,"px"]}),(0,l.jsx)("input",{type:"range",min:"200",max:"1000",step:"25",value:n,onChange:e=>s(parseInt(e.target.value)),className:"w-full mb-4 accent-violet-600"}),(0,l.jsx)("button",{onClick:()=>g(!x),className:"w-full bg-indigo-500 text-white py-2 rounded-lg mb-4 hover:bg-indigo-600 transition font-bold py-2 px-4 rounded inline-flex items-center justify-center",children:x?"Hide Logo Options ":"Show Logo Options"}),x&&(0,l.jsxs)("div",{className:"flex items-center mb-4",children:[(0,l.jsx)("div",{className:"flex flex-wrap gap-2 w-3/4 border-r-4 border-gray-200",children:[{name:"No Logo",src:null},{name:"Ludoth\xe8que",src:"/logos/ludotheque.png"},{name:"Facebook",src:"/logos/icons8-facebook-48.png"},{name:"Instagram",src:"/logos/icons8-instagram-48.png"},{name:"LinkedIn",src:"/logos/icons8-linkedin-48.png"},{name:"TikTok",src:"/logos/icons8-tiktok-48.png"},{name:"Twitter",src:"/logos/icons8-twitter-48.png"},{name:"YouTube",src:"/logos/icons8-youtube-48.png"}].map(e=>(0,l.jsx)("div",{onClick:()=>v(e),className:"w-16 h-16 flex items-center justify-center cursor-pointer rounded-lg border-4 bg-[#f1f0f0] transition ".concat((null==c?void 0:c.name)===e.name?"border-violet-500":"border-transparent"),children:e.src?(0,l.jsx)("img",{src:e.src,alt:e.name,className:"object-contain max-w-full max-h-full"}):(0,l.jsx)("span",{className:"text-sm text-gray-500",children:"No Logo"})},e.name))}),(0,l.jsx)("div",{className:"w-1/4 flex justify-center items-center h-full pl-4",children:(0,l.jsxs)("label",{className:"cursor-pointer bg-violet-500 text-white px-4 py-2 rounded-lg text-center",children:["Upload",(0,l.jsx)("input",{type:"file",accept:"image/*",onChange:e=>{var t;let n=null===(t=e.target.files)||void 0===t?void 0:t[0];if(n){let e=new FileReader;e.onload=e=>{var t;m(null===(t=e.target)||void 0===t?void 0:t.result),d(null)},e.readAsDataURL(n)}},className:"hidden"})]})})]})]}),(0,l.jsxs)("div",{className:"bg-white p-6 rounded-xl shadow-lg w-1/2 flex flex-col items-center justify-center",children:[(0,l.jsx)("div",{ref:i,className:"relative w-[220px] h-[220px] bg-gray-200 rounded-lg mb-4"}),(0,l.jsxs)("button",{onClick:()=>{if(!e.trim()){p(!0),setTimeout(()=>p(!1),3e3);return}new(r())({width:n,height:n,data:e,image:null!=u?u:(null==c?void 0:c.src)?"".concat("").concat(c.src):void 0,dotsOptions:{color:"#000",type:"rounded"},imageOptions:{crossOrigin:"anonymous",margin:0,imageSize:.3}}).download({extension:"png",name:"qr_code"})},className:"w-full bg-violet-600 text-white font-bold py-2 px-4 rounded inline-flex items-center hover:bg-violet-700 transition justify-center",children:[(0,l.jsx)("svg",{className:"fill-current w-4 h-4 mr-2",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",children:(0,l.jsx)("path",{d:"M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"})}),(0,l.jsx)("span",{children:"Download QR Code"})]})]})]}),(0,l.jsxs)("div",{className:"fixed bottom-10 left-1/2 transform -translate-x-1/2 px-4 py-3 rounded-lg shadow-lg bg-red-500 text-white text-sm font-bold flex items-center transition-all duration-500 ".concat(h?"opacity-100 translate-y-0":"opacity-0 -translate-y-2 pointer-events-none"),role:"alert",children:[(0,l.jsx)("svg",{className:"fill-current w-4 h-4 mr-2",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",children:(0,l.jsx)("path",{d:"M12.432 0c1.34 0 2.01.912 2.01 1.957 0 1.305-1.164 2.512-2.679 2.512-1.269 0-2.009-.75-1.974-1.99C9.789 1.436 10.67 0 12.432 0zM8.309 20c-1.058 0-1.833-.652-1.093-3.524l1.214-5.092c.211-.814.246-1.141 0-1.141-.317 0-1.689.562-2.502 1.117l-.528-.88c2.572-2.186 5.531-3.467 6.801-3.467 1.057 0 1.233 1.273.705 3.23l-1.391 5.352c-.246.945-.141 1.271.106 1.271.317 0 1.357-.392 2.379-1.207l.6.814C12.098 19.02 9.365 20 8.309 20z"})}),(0,l.jsx)("p",{children:"Veuillez entrer une URL avant de t\xe9l\xe9charger le QR Code."})]}),(0,l.jsx)("p",{className:"absolute bottom-4 right-4 text-gray-600 text-sm",children:"Made with ❤️ by PJ"})]})}}},e=>{var t=t=>e(e.s=t);e.O(0,[253,441,517,358],()=>t(1846)),_N_E=e.O()}]);