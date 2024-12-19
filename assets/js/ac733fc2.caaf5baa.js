"use strict";(self.webpackChunkpointer_wallet=self.webpackChunkpointer_wallet||[]).push([[93],{5791:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>o,default:()=>h,frontMatter:()=>d,metadata:()=>r,toc:()=>c});const r=JSON.parse('{"id":"api/refund","title":"Refund","description":"Webhook Requirements","source":"@site/docs/api/refund.md","sourceDirName":"api","slug":"/api/refund","permalink":"/pointer-payment-service/docs/api/refund","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/api/refund.md","tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"sidebar_position":4},"sidebar":"tutorialSidebar","previous":{"title":"Cancel Order","permalink":"/pointer-payment-service/docs/api/cancel-order"},"next":{"title":"Withdrawal","permalink":"/pointer-payment-service/docs/api/withdrawal"}}');var s=t(4848),i=t(8453);const d={sidebar_position:4},o="Refund",a={},c=[{value:"Webhook Requirements",id:"webhook-requirements",level:3},{value:"Webhook Payload",id:"webhook-payload",level:3}];function l(e){const n={code:"code",h1:"h1",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"refund",children:"Refund"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",metastring:'title="Base URL"',children:"https://api.pointer.io.vn/\n"})}),"\n",(0,s.jsx)(n.h1,{id:"refund-1",children:"Refund"}),"\n",(0,s.jsx)(n.h3,{id:"webhook-requirements",children:"Webhook Requirements"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["The webhook endpoint must accept ",(0,s.jsx)(n.code,{children:"POST"})," requests."]}),"\n",(0,s.jsx)(n.li,{children:"Ensure the endpoint is secured (e.g., via authentication or IP whitelisting)."}),"\n",(0,s.jsxs)(n.li,{children:["The webhook should process and store the received payload (",(0,s.jsx)(n.code,{children:"orderID"})," and ",(0,s.jsx)(n.code,{children:"status"}),")."]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"webhook-payload",children:"Webhook Payload"}),"\n",(0,s.jsxs)(n.p,{children:["Pointer Wallet will send the following payload for ",(0,s.jsx)(n.code,{children:"Payment"})," events:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\r\n  "orderID": string,\r\n  "status": 200\r\n}\n'})}),"\n",(0,s.jsx)(n.h1,{id:"api",children:"API"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",metastring:'title="Refund"',children:"curl -X POST /api/payment/refund\r\n-H 'Content-Type: application/json' \\\r\n-H 'Authorization: Bearer ' + secret_key \\\r\n-d {\r\n    orderID:string\r\n}\n"})}),"\n",(0,s.jsx)(n.h1,{id:"response",children:"Response"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",metastring:'title="Response"',children:'{\r\n    "url":"https://pointer.io.vn/payment-gateway?token={token}"\r\n}\n'})}),"\n",(0,s.jsx)(n.h1,{id:"http-status",children:"HTTP Status"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Status"}),(0,s.jsx)(n.th,{children:"OK"}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.strong,{children:"200"})}),(0,s.jsx)(n.td,{children:"OK"}),(0,s.jsx)(n.td,{children:"Order have been created"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.strong,{children:"401"})}),(0,s.jsx)(n.td,{children:"Unauthorized"}),(0,s.jsx)(n.td,{children:"Secret key is invalid"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.strong,{children:"500"})}),(0,s.jsx)(n.td,{children:"Server Errors"}),(0,s.jsx)(n.td,{children:"Something went wrong!"})]})]})]})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>d,x:()=>o});var r=t(6540);const s={},i=r.createContext(s);function d(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);