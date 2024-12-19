"use strict";(self.webpackChunkpointer_wallet=self.webpackChunkpointer_wallet||[]).push([[509],{6468:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>a,default:()=>p,frontMatter:()=>c,metadata:()=>n,toc:()=>o});const n=JSON.parse('{"id":"api/cancel-order","title":"Cancel Order","description":"| Status  | OK            | Description |","source":"@site/docs/api/cancel-order.md","sourceDirName":"api","slug":"/api/cancel-order","permalink":"/pointer-payment-service/docs/api/cancel-order","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/api/cancel-order.md","tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"sidebar_position":3},"sidebar":"tutorialSidebar","previous":{"title":"Create Order","permalink":"/pointer-payment-service/docs/api/create-order"},"next":{"title":"Refund","permalink":"/pointer-payment-service/docs/api/refund"}}');var s=r(4848),i=r(8453);const c={sidebar_position:3},a="Cancel Order",d={},o=[];function l(e){const t={code:"code",h1:"h1",header:"header",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"cancel-order",children:"Cancel Order"})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-typescript",metastring:'title="Base URL"',children:"https://api.pointer.io.vn\n"})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-typescript",metastring:'title="Cancel Order"',children:"curl -X POST api/v1/order/cancel/:orderID\r\n-H 'Content-Type: application/json' \\\r\n-H 'Authorization: Bearer ' + secret_key \\\n"})}),"\n",(0,s.jsx)(t.h1,{id:"response",children:"Response"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-typescript",metastring:'title="Response"',children:'{\r\n    "status":200\r\n}\n'})}),"\n",(0,s.jsx)(t.h1,{id:"http-status",children:"HTTP Status"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Status"}),(0,s.jsx)(t.th,{children:"OK"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.strong,{children:"200"})}),(0,s.jsx)(t.td,{children:"OK"}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.strong,{children:"401"})}),(0,s.jsx)(t.td,{children:"Unauthorized"}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.strong,{children:"500"})}),(0,s.jsx)(t.td,{children:"Server Errors"}),(0,s.jsx)(t.td,{})]})]})]})]})}function p(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},8453:(e,t,r)=>{r.d(t,{R:()=>c,x:()=>a});var n=r(6540);const s={},i=n.createContext(s);function c(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);