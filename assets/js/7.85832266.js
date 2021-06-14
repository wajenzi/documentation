(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{371:function(t,a,e){t.exports=e.p+"assets/img/OpenAPIAuth.fec77a2f.png"},410:function(t,a,e){"use strict";e.r(a);var s=e(27),n=Object(s.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"node-api-authentication"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#node-api-authentication"}},[t._v("#")]),t._v(" Node API: Authentication")]),t._v(" "),s("h2",{attrs:{id:"rpc-api"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#rpc-api"}},[t._v("#")]),t._v(" RPC API")]),t._v(" "),s("p",[t._v("Authentication on the RPC API is done using basic authentication.")]),t._v(" "),s("p",[t._v("You can configure the username and password in the .conf (ini) file or arguments when launching the node.")]),t._v(" "),s("h2",{attrs:{id:"rest-api"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#rest-api"}},[t._v("#")]),t._v(" REST API")]),t._v(" "),s("p",[t._v("Authentication in the REST API is off by default. You should never expose your node to public traffic until after you enable authentication.")]),t._v(" "),s("p",[t._v("By default, there are no authentication and no authorization on the REST API.")]),t._v(" "),s("p",[t._v('Enable authentication by setting the "enableAuth" configuration value to true.')]),t._v(" "),s("p",[t._v("*.conf file:")]),t._v(" "),s("div",{staticClass:"language-ini extra-class"},[s("pre",{pre:!0,attrs:{class:"language-ini"}},[s("code",[s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("enableAuth")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v("true")]),t._v("\n")])])]),s("h3",{attrs:{id:"api-keys"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#api-keys"}},[t._v("#")]),t._v(" API keys")]),t._v(" "),s("p",[t._v("Access to your node is controlled using API keys. You can create / generate as many API keys as you need.")]),t._v(" "),s("p",[t._v("Keys are stored in the appsettings.json file at the root of your node software.")]),t._v(" "),s("p",[t._v("API keys are automatically refreshed while a node is running, so you can add, remove or edit these keys without restarting your node software.")]),t._v(" "),s("p",[t._v("Example of API key:")]),t._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[t._v("  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"Blockcore"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"API"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"Keys"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"Id"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"Enabled"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"Owner"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Admin"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"Key"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"1ca8f906-a23e-48b2-8b83-e95290986d0e"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"Roles"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"User"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Admin"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v('A key can be disabled by setting the "Enabled" value to false. This will immediately stop access using that API key.')]),t._v(" "),s("h3",{attrs:{id:"roles"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#roles"}},[t._v("#")]),t._v(" Roles")]),t._v(" "),s("p",[t._v('There are currently two roles available, "User" and "Admin". Some API operations are only available to "Admin" role keys.')]),t._v(" "),s("h3",{attrs:{id:"usage"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#usage"}},[t._v("#")]),t._v(" Usage")]),t._v(" "),s("p",[t._v('To use the REST API with your API keys, you must supply them as an HTTP HEADER with the key "Node-Api-Key".')]),t._v(" "),s("h3",{attrs:{id:"testing-from-openapi-documentation"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#testing-from-openapi-documentation"}},[t._v("#")]),t._v(" Testing from OpenAPI documentation")]),t._v(" "),s("p",[t._v('Click the "Authorize" button, and enter the API key.')]),t._v(" "),s("figure",[s("img",{attrs:{src:e(371),alt:""}})]),t._v(" "),s("p",[t._v('Click "Authorize" to save the key, and now all calls from the documentation UI will include the API key in the header.')]),t._v(" "),s("h2",{attrs:{id:"security-risk"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#security-risk"}},[t._v("#")]),t._v(" Security risk")]),t._v(" "),s("p",[t._v('Exposing your node software to the public and giving third parties, partners or users acecss using API keys is not without risk. The APIs can be used to shut down your node software (with "Admin" role), disconnect all connected peers through banning, and other operations that will make your node crash and non-functional.')])])}),[],!1,null,null,null);a.default=n.exports}}]);