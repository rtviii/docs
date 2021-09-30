(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{406:function(e,t,a){"use strict";a.r(t);var s=a(5),r=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"implement-security-practices"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#implement-security-practices"}},[e._v("#")]),e._v(" Implement security practices")]),e._v(" "),a("p",[e._v("Each validator candidate is encouraged to run its operations independently. Diverse individual setups increase the resilience of the network.")]),e._v(" "),a("h2",{attrs:{id:"manage-digital-keys-with-hsm"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#manage-digital-keys-with-hsm"}},[e._v("#")]),e._v(" Manage digital keys with HSM")]),e._v(" "),a("p",[e._v("Key management is mission critical for validators. If an attacker gains access to a validator's private key, it puts the validator's entire delegated stake at risk. Hardware security modules are an important strategy for mitigating this risk.")]),e._v(" "),a("p",[e._v("Consider implementing this "),a("a",{attrs:{href:"https://github.com/iqlusioninc/tmkms",target:"_blank",rel:"noopener noreferrer"}},[e._v("key-management method"),a("OutboundLink")],1),e._v(" by Iqulusion.")]),e._v(" "),a("h2",{attrs:{id:"defend-against-ddos-attacks"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#defend-against-ddos-attacks"}},[e._v("#")]),e._v(" Defend against DDoS attacks")]),e._v(" "),a("p",[e._v("Validators are responsible for ensuring that the network can defend against denial of service attacks.")]),e._v(" "),a("p",[e._v("Validators can mitigate these attacks by carefully structuring their network topology in a sentry node architecture.")]),e._v(" "),a("p",[e._v("Validator nodes should only connect to full nodes they trust. They can be run by the same validator or other validators they know. A validator node will typically run in a data center. Most data centers provide direct links to major cloud providers. A validator can use these links to connect to sentry nodes in the cloud. This shifts the burden of denial-of-service from the validator's node directly to its sentry nodes. This may require new sentry nodes to be spun up or activated to mitigate attacks on existing ones.")]),e._v(" "),a("p",[e._v("Sentry nodes can be quickly spun up or used to change IP addresses. Because links to the sentry nodes are in private IP space, an internet based attack can't disturb them directly. This will ensure a validator's block proposals and votes always make it to the rest of the network.")]),e._v(" "),a("p",[e._v("Learn more about "),a("a",{attrs:{href:"https://forum.cosmos.network/t/sentry-node-architecture-overview/454",target:"_blank",rel:"noopener noreferrer"}},[e._v("sentry-node architecture"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("ol",[a("li",[e._v("For validators nodes, edit the "),a("code",[e._v("config.toml")]),e._v(":")])]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Comma separated list of nodes to keep persistent connections to")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Do not add private peers to this list if you don't want them advertised")]),e._v("\npersistent_peers "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("list of sentry nodes"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Set true to enable the peer-exchange reactor")]),e._v("\npex "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[e._v("false")]),e._v("\n")])])]),a("ol",{attrs:{start:"2"}},[a("li",[e._v("For sentry nodes, edit the "),a("code",[e._v("config.toml")]),e._v(":")])]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Comma separated list of peer IDs to keep private (will not be gossiped to other peers)")]),e._v("\nprivate_peer_ids "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"ipaddress of validator nodes"')]),e._v("\n")])])]),a("h2",{attrs:{id:"environment-variables"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#environment-variables"}},[e._v("#")]),e._v(" Environment Variables")]),e._v(" "),a("p",[e._v("By default, uppercase environment variables with the following prefixes will replace lowercase command-line flags:")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("TE")]),e._v(" (for Terra flags)")]),e._v(" "),a("li",[a("code",[e._v("TM")]),e._v(" (for Tendermint flags)")]),e._v(" "),a("li",[a("code",[e._v("BC")]),e._v(" (for democli or basecli flags)")])]),e._v(" "),a("p",[e._v("For example, the environment variable "),a("code",[e._v("TE_CHAIN_ID")]),e._v(" will map to the command line flag "),a("code",[e._v("--chain-id")]),e._v(". While explicit command-line flags will take precedence over environment variables, environment variables will take precedence over any of your configuration files. For this reason, it is imperative that you lock down your environment so that any critical parameters are defined as flags on the CLI, or that you prevent modification of any environment variables.")])])}),[],!1,null,null,null);t.default=r.exports}}]);