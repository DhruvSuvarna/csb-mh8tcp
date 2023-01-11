(this.webpackJsonpreact=this.webpackJsonpreact||[]).push([[0],{32:function(e,t,a){},33:function(e,t,a){},35:function(e,t,a){"use strict";a.r(t);var o=a(0),c=a.n(o),s=a(23),l=a.n(s),n=(a(32),a(4)),r=(a(33),a(12)),d=a(1);function i(e){var t,a;switch(e.mode){case"dark":t=e.modeColors.dark1;break;case"blue":t=e.modeColors.blue1;break;case"green":t=e.modeColors.green1;break;case"red":t=e.modeColors.red1;break;default:t=e.modeColors.light1}switch(e.mode){case"dark":a=e.modeColors.dark2;break;case"blue":a=e.modeColors.blue2;break;case"green":a=e.modeColors.green2;break;case"red":a=e.modeColors.red2;break;default:a="white"}return Object(d.jsx)("nav",{className:"navbar navbar-expand-lg navbar-".concat("light"===e.mode?"light":"dark"),style:{backgroundColor:t},children:Object(d.jsxs)("div",{className:"container-fluid",children:[Object(d.jsx)(r.b,{className:"navbar-brand",to:"/csb-mh8tcp/",children:e.title}),Object(d.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(d.jsx)("span",{className:"navbar-toggler-icon"})}),Object(d.jsx)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:Object(d.jsxs)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:[Object(d.jsx)("li",{className:"nav-item",children:Object(d.jsx)(r.b,{className:"nav-link","aria-current":"page",to:"/csb-mh8tcp/",style:{fontWeight:"bolder"},children:"Home"})}),Object(d.jsx)("li",{className:"nav-item",children:Object(d.jsx)(r.b,{className:"nav-link",to:"/csb-mh8tcp/about",style:{fontWeight:"bolder"},children:e.aboutText})})]})}),Object(d.jsxs)("div",{className:"form-check form-switch mx-3",children:[Object(d.jsx)("input",{className:"form-check-input",onClick:e.toggleMode,type:"checkbox",role:"switch",id:"flexSwitchCheckDefault"}),Object(d.jsxs)("label",{className:"form-check-label text-".concat("light"===e.mode?"dark":"light"),htmlFor:"flexSwitchCheckDefault",children:["Enable ","light"===e.mode?"Dark":"Light"," Mode"]})]}),Object(d.jsxs)("div",{className:"dropdown my-2",children:[Object(d.jsx)("div",{className:"btn btn-secondary dropdown-toggle",role:"button","data-bs-toggle":"dropdown","aria-expanded":"false",style:{background:"linear-gradient(to right, rgb(255, 172, 0), rgb(29, 255, 224), rgb(108, 0, 222))",color:"black"},children:Object(d.jsx)("strong",{children:"More Color Themes"})}),Object(d.jsxs)("ul",{className:"dropdown-menu",style:{backgroundColor:a},children:[Object(d.jsx)("li",{children:Object(d.jsxs)("div",{className:"form-check form-switch mx-3",children:[Object(d.jsx)("input",{style:{backgroundColor:"blue"},className:"form-check-input",onClick:e.blueMode,type:"checkbox",role:"switch",id:"flexSwitchCheckDefault"}),Object(d.jsx)("label",{className:"form-check-label text-".concat("light"===e.mode?"dark":"light"),htmlFor:"flexSwitchCheckDefault",children:"Blue Mode"})]})}),Object(d.jsx)("li",{children:Object(d.jsxs)("div",{className:"form-check form-switch mx-3",children:[Object(d.jsx)("input",{style:{backgroundColor:"green"},className:"form-check-input",onClick:e.greenMode,type:"checkbox",role:"switch",id:"flexSwitchCheckDefault"}),Object(d.jsx)("label",{className:"form-check-label text-".concat("light"===e.mode?"dark":"light"),htmlFor:"flexSwitchCheckDefault",children:"Green Mode"})]})}),Object(d.jsx)("li",{children:Object(d.jsxs)("div",{className:"form-check form-switch mx-3",children:[Object(d.jsx)("input",{style:{backgroundColor:"red"},className:"form-check-input",onClick:e.redMode,type:"checkbox",role:"switch",id:"flexSwitchCheckDefault"}),Object(d.jsx)("label",{className:"form-check-label text-".concat("light"===e.mode?"dark":"light"),htmlFor:"flexSwitchCheckDefault",children:"Red Mode"})]})})]})]})]})})}function b(e){var t,a=Object(o.useState)(""),c=Object(n.a)(a,2),s=c[0],l=c[1];switch(e.mode){case"dark":t=e.modeColors.dark2;break;case"blue":t=e.modeColors.blue2;break;case"green":t=e.modeColors.green2;break;case"red":t=e.modeColors.red2;break;default:t="white"}var r=s.split(" ").filter((function(e){return 0!==e.length})).length;return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsxs)("div",{className:"container my-3",children:[Object(d.jsx)("h1",{children:e.heading}),Object(d.jsx)("div",{className:"mb-3",children:Object(d.jsx)("textarea",{className:"form-control",value:s,id:"myBox",onChange:function(e){l(e.target.value)},style:{backgroundColor:t,color:"light"===e.mode?"black":"white"},rows:"8"})}),Object(d.jsx)("button",{className:"btn btn-primary mx-1 my-1",onClick:function(){var t=s.toUpperCase();l(t),e.showAlert("Convert to Uppercase has been Enabled","success")},children:"Convert to Upper Case"}),Object(d.jsx)("button",{className:"btn btn-success mx-1 my-1",onClick:function(){var t=s.toLowerCase();l(t),e.showAlert("Convert to Lowercase has been Enabled","success")},children:"Convert to Lower Case"}),Object(d.jsx)("button",{className:"btn btn-dark mx-1 my-1",onClick:function(){var t=s.toLowerCase().split(" ").map((function(e){return e.charAt(0).toUpperCase()+e.slice(1)})).join(" ");l(t),e.showAlert("Capitalize has been Enabled","success")},children:"Capitalize"}),Object(d.jsx)("button",{className:"btn btn-warning mx-1 my-1",onClick:function(){var t=new SpeechSynthesisUtterance;t.text=s,window.speechSynthesis.speak(t),e.showAlert("Speak has been Enabled","success")},children:"Speak"})]}),Object(d.jsxs)("div",{className:"container my-3",children:[Object(d.jsx)("h1",{children:"Your Text Summary"}),Object(d.jsxs)("p",{children:[r," words and ",s.length," characters"]}),Object(d.jsxs)("p",{children:[.008*r," Minutes Read"]}),Object(d.jsx)("h2",{children:"Preview"}),Object(d.jsx)("p",{children:0===r?"Enter something in the above Textbox to preview it here":s})]})]})}function h(e){var t;switch(e.mode){case"dark":t=e.modeColors.dark2;break;case"blue":t=e.modeColors.blue2;break;case"green":t=e.modeColors.green2;break;case"red":t=e.modeColors.red2;break;default:t="white"}return Object(d.jsxs)("div",{className:"container my-3",style:{border:"1px solid black",borderRadius:"5px"},children:[Object(d.jsx)("h1",{className:"my-2",children:"About Us"}),Object(d.jsxs)("div",{className:"accordion",id:"accordionExample",children:[Object(d.jsxs)("div",{className:"accordion-item",style:{backgroundColor:t},children:[Object(d.jsx)("h2",{className:"accordion-header",id:"headingOne",children:Object(d.jsx)("button",{className:"accordion-button",type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseOne","aria-expanded":"true","aria-controls":"collapseOne",children:"Accordion Item #1"})}),Object(d.jsx)("div",{id:"collapseOne",className:"accordion-collapse collapse show","aria-labelledby":"headingOne","data-bs-parent":"#accordionExample",children:Object(d.jsxs)("div",{className:"accordion-body",children:[Object(d.jsx)("strong",{children:"This is the first item's accordion body."})," It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the ",Object(d.jsx)("code",{children:".accordion-body"}),", though the transition does limit overflow."]})})]}),Object(d.jsxs)("div",{className:"accordion-item",style:{backgroundColor:t},children:[Object(d.jsx)("h2",{className:"accordion-header",id:"headingTwo",children:Object(d.jsx)("button",{className:"accordion-button collapsed",type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseTwo","aria-expanded":"false","aria-controls":"collapseTwo",children:"Accordion Item #2"})}),Object(d.jsx)("div",{id:"collapseTwo",className:"accordion-collapse collapse","aria-labelledby":"headingTwo","data-bs-parent":"#accordionExample",children:Object(d.jsxs)("div",{className:"accordion-body",children:[Object(d.jsx)("strong",{children:"This is the second item's accordion body."})," It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the ",Object(d.jsx)("code",{children:".accordion-body"}),", though the transition does limit overflow."]})})]}),Object(d.jsxs)("div",{className:"accordion-item",style:{backgroundColor:t,marginBottom:"10px"},children:[Object(d.jsx)("h2",{className:"accordion-header",id:"headingThree",children:Object(d.jsx)("button",{className:"accordion-button collapsed",type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseThree","aria-expanded":"false","aria-controls":"collapseThree",children:"Accordion Item #3"})}),Object(d.jsx)("div",{id:"collapseThree",className:"accordion-collapse collapse","aria-labelledby":"headingThree","data-bs-parent":"#accordionExample",children:Object(d.jsxs)("div",{className:"accordion-body",children:[Object(d.jsx)("strong",{children:"This is the third item's accordion body."})," It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the ",Object(d.jsx)("code",{children:".accordion-body"}),", though the transition does limit overflow."]})})]})]})]})}function u(e){var t;return e.alert1&&Object(d.jsx)("div",{children:Object(d.jsxs)("div",{className:"alert alert-".concat(e.alert1.type," alert-dismissible fade show"),style:{backgroundColor:"light"===e.mode?null:"rgb(255, 255, 255, 0.3)",color:"light"===e.mode?null:"black"},role:"alert",children:[Object(d.jsxs)("strong",{children:[(t=e.alert1.type,t.toLowerCase().split(" ").map((function(e){return e.charAt(0).toUpperCase()+e.slice(1)})).join(" "))," : "]}),e.alert1.msg,Object(d.jsx)("button",{type:"button",className:"btn-close","data-bs-dismiss":"alert","aria-label":"Close"})]})})}i.defaultProps={title:"Set your title here",aboutText:"Set aboutText here"};var m=a(3);var j=function(){var e=Object(o.useState)("light"),t=Object(n.a)(e,2),a=t[0],c=t[1],s=Object(o.useState)(null),l=Object(n.a)(s,2),j=l[0],g=l[1],x=function(e,t){g({msg:e,type:t}),setTimeout((function(){g(null)}),1500)},p={dark1:"#212529",dark2:"#343a40",light1:"#f8f9fa",blue1:"#22245b",blue2:"#383c98",green1:"#315b22",green2:"#2b7a0f",red1:"#5d2121",red2:"#8f3434"};return Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)(r.a,{children:[Object(d.jsx)(i,{title:"Text Utils",aboutText:"About Us",mode:a,toggleMode:function(){"light"===a?(c("dark"),document.body.style.background="#343a40",document.body.style.color="white",x("Dark Mode has been Enabled","success"),document.title="Text Utils - Dark Mode Enabled"):(c("light"),document.body.style.background="white",document.body.style.color="black",x("Light Mode has been Enabled","success"),document.title="Text Utils - Light Mode Enabled")},blueMode:function(){"blue"!==a&&(c("blue"),document.body.style.background=p.blue2,document.body.style.color="white",x("Blue Mode has been Enabled","success"),document.title="Text Utils - Blue Mode Enabled"),"blue"===a&&(c("light"),document.body.style.background="white",document.body.style.color="black",x("Light Mode has been Enabled","success"),document.title="Text Utils - Light Mode Enabled")},greenMode:function(){"green"!==a&&(c("green"),document.body.style.background=p.green2,document.body.style.color="white",x("Green Mode has been Enabled","success"),document.title="Text Utils - Green Mode Enabled"),"green"===a&&(c("light"),document.body.style.background="white",document.body.style.color="black",x("Light Mode has been Enabled","success"),document.title="Text Utils - Light Mode Enabled")},redMode:function(){"red"!==a&&(c("red"),document.body.style.background=p.red2,document.body.style.color="white",x("Red Mode has been Enabled","success"),document.title="Text Utils - Red Mode Enabled"),"red"===a&&(c("light"),document.body.style.background="white",document.body.style.color="black",x("Light Mode has been Enabled","success"),document.title="Text Utils - Light Mode Enabled")},modeColors:p}),Object(d.jsx)(u,{alert1:j,mode:a}),Object(d.jsxs)(m.c,{children:[Object(d.jsx)(m.a,{exact:!0,path:"/csb-mh8tcp/",element:Object(d.jsx)(b,{showAlert:x,heading:"Enter Your Text Below",mode:a,modeColors:p})}),Object(d.jsx)(m.a,{exact:!0,path:"/csb-mh8tcp/about",element:Object(d.jsx)(h,{mode:a,modeColors:p})})]})]})})};l.a.createRoot(document.getElementById("root")).render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(j,{})}))}},[[35,1,2]]]);
//# sourceMappingURL=main.24e914f1.chunk.js.map