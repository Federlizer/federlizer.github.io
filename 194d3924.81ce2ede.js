(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{129:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return v}));var r=n(0),o=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),d=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=d(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=d(n),b=r,v=u["".concat(c,".").concat(b)]||u[b]||p[b]||i;return n?o.a.createElement(v,a(a({ref:t},l),{},{components:n})):o.a.createElement(v,a({ref:t},l))}));function v(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,c=new Array(i);c[0]=b;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a.mdxType="string"==typeof e?e:r,c[1]=a;for(var l=2;l<i;l++)c[l]=n[l];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},59:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return a})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return d}));var r=n(2),o=n(6),i=(n(0),n(129)),c={id:"core-services-tracking",title:"Tracking Manager"},a={unversionedId:"core/services/core-services-tracking",id:"core/services/core-services-tracking",isDocsHomePage:!1,title:"Tracking Manager",description:"Converters",source:"@site/docs/core/services/tracking_manager.md",slug:"/core/services/core-services-tracking",permalink:"/documentation/docs/core/services/core-services-tracking",version:"current",sidebar:"coreSidebar",previous:{title:"Spm Manager",permalink:"/documentation/docs/core/services/core-services-spm"}},s=[{value:"Converters",id:"converters",children:[{value:"<code>gnss_location_to_position</code>",id:"gnss_location_to_position",children:[]},{value:"<code>nmea0183_readout_to_position</code>",id:"nmea0183_readout_to_position",children:[]}]},{value:"Filters",id:"filters",children:[{value:"<code>significant_position</code>",id:"significant_position",children:[]}]},{value:"Handlers",id:"handlers",children:[{value:"<code>context</code>",id:"context",children:[]},{value:"<code>gnss_query</code>",id:"gnss_query",children:[]},{value:"<code>nmea0183_readout</code>",id:"nmea0183_readout",children:[]},{value:"<code>status</code>",id:"status",children:[]}]},{value:"Triggers",id:"triggers",children:[{value:"<code>position_event</code>",id:"position_event",children:[]}]}],l={rightToc:s};function d(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"converters"},"Converters"),Object(i.b)("h3",{id:"gnss_location_to_position"},Object(i.b)("inlineCode",{parentName:"h3"},"gnss_location_to_position")),Object(i.b)("p",null,"Converts a GNSS location result into position type."),Object(i.b)("hr",null),Object(i.b)("h3",{id:"nmea0183_readout_to_position"},Object(i.b)("inlineCode",{parentName:"h3"},"nmea0183_readout_to_position")),Object(i.b)("p",null,"Converts NMEA0183 sentences result into position type."),Object(i.b)("h2",{id:"filters"},"Filters"),Object(i.b)("h3",{id:"significant_position"},Object(i.b)("inlineCode",{parentName:"h3"},"significant_position")),Object(i.b)("p",null,"Filter that only returns significant non duplicated positions."),Object(i.b)("h2",{id:"handlers"},"Handlers"),Object(i.b)("h3",{id:"context"},Object(i.b)("inlineCode",{parentName:"h3"},"context")),Object(i.b)("p",null,"Gets current context."),Object(i.b)("hr",null),Object(i.b)("h3",{id:"gnss_query"},Object(i.b)("inlineCode",{parentName:"h3"},"gnss_query")),Object(i.b)("p",null,"Reads GNSS data and settings synchronously from EC2X module."),Object(i.b)("hr",null),Object(i.b)("h3",{id:"nmea0183_readout"},Object(i.b)("inlineCode",{parentName:"h3"},"nmea0183_readout")),Object(i.b)("p",null,"Reads all available NMEA0183 sentences through serial connection."),Object(i.b)("hr",null),Object(i.b)("h3",{id:"status"},Object(i.b)("inlineCode",{parentName:"h3"},"status")),Object(i.b)("p",null,"Gets current status."),Object(i.b)("h2",{id:"triggers"},"Triggers"),Object(i.b)("h3",{id:"position_event"},Object(i.b)("inlineCode",{parentName:"h3"},"position_event")),Object(i.b)("p",null,"Listens for position results and triggers position unknown/standstill/moving events."))}d.isMDXComponent=!0}}]);