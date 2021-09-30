(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{423:function(t,s,a){"use strict";a.r(s);var e=a(5),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"authz"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#authz"}},[t._v("#")]),t._v(" AuthZ")]),t._v(" "),a("p",[t._v("The authz (message authorization) module allows users to authorize another account to send messages on their behalf. Certain authorizations such as the spending of another account's tokens, can be parameterized to constrain the permissions of the grantee (like setting a spending limit).")]),t._v(" "),a("h2",{attrs:{id:"message-types"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#message-types"}},[t._v("#")]),t._v(" Message Types")]),t._v(" "),a("h3",{attrs:{id:"msggrantauthorization"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#msggrantauthorization"}},[t._v("#")]),t._v(" MsgGrantAuthorization")]),t._v(" "),a("div",{staticClass:"language-go extra-class"},[a("pre",{pre:!0,attrs:{class:"language-go"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// MsgGrantAuthorization grants the provided authorization to the grantee on the granter's")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// account during the provided period time")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("type")]),t._v(" MsgGrantAuthorization "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("struct")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\tGranter       sdk"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("AccAddress "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('`json:"granter"`')]),t._v("\n\tGrantee       sdk"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("AccAddress "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('`json:"grantee"`')]),t._v("\n\tAuthorization Authorization  "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('`json:"authorization"`')]),t._v("\n\tPeriod        time"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Duration  "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('`json:"period"`')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h3",{attrs:{id:"msgrevokeauthorization"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#msgrevokeauthorization"}},[t._v("#")]),t._v(" MsgRevokeAuthorization")]),t._v(" "),a("div",{staticClass:"language-go extra-class"},[a("pre",{pre:!0,attrs:{class:"language-go"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// MsgRevokeAuthorization revokes any authorization with the provided sdk.Msg type on the")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// granter's account with that has been granted to the grantee")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("type")]),t._v(" MsgRevokeAuthorization "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("struct")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\tGranter sdk"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("AccAddress "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('`json:"granter"`')]),t._v("\n\tGrantee sdk"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("AccAddress "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('`json:"grantee"`')]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// AuthorizationMsgType is the type of sdk.Msg that the revoked Authorization refers to.")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// i.e. this is what `Authorization.MsgType()` returns")]),t._v("\n\tAuthorizationMsgType "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('`json:"authorization_msg_type"`')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h3",{attrs:{id:"msgexecauthorized"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#msgexecauthorized"}},[t._v("#")]),t._v(" MsgExecAuthorized")]),t._v(" "),a("div",{staticClass:"language-go extra-class"},[a("pre",{pre:!0,attrs:{class:"language-go"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// MsgExecAuthorized attempts to execute the provided messages using")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// authorizations granted to the grantee. Each message should have only")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// one signer corresponding to the granter of the authorization.")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("type")]),t._v(" MsgExecAuthorized "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("struct")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\tGrantee sdk"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("AccAddress "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('`json:"grantee"`')]),t._v("\n\tMsgs    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("sdk"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Msg      "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('`json:"msgs"`')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=n.exports}}]);