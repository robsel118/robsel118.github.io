(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"2l/u":function(e,t,n){"use strict";n.r(t),n.d(t,"query",(function(){return H}));var a=n("q1tI"),r=n.n(a),i=n("1mWn"),o=n("9Um5"),l=n("cKXd"),m=n("nvEY"),c=n("rL/M"),u=n("pS6H"),s=n("c5LU"),d=n("0n5T"),p=n("vOnD"),f=n("532r"),g=n("ek6p");function h(){var e=v(["\n    display: grid;\n    grid-template-columns: repeat(",", 1fr);\n    justify-content: space-betweeen;\n  "]);return h=function(){return e},e}function b(){var e=v(["\n    display: grid;\n    grid-template-columns: repeat(2, 1fr);\n    justify-content: space-betweeen;\n  "]);return b=function(){return e},e}function v(e,t){return t||(t=e.slice(0)),e.raw=t,e}var E=p.d.div.withConfig({displayName:"Grid",componentId:"pwxn9v-0"})(["margin:1.5rem 0;grid-column-gap:3rem;grid-row-gap:2rem;flex-direction:column;",";"," ",""],g.a.flexCenter,f.a.md(b()),f.a.lg(h(),(function(e){return e.cols}))),y=n("eVT4"),w=p.d.div.withConfig({displayName:"About__AboutText",componentId:"sc-1bw77u7-0"})(["p{",";font-size:",";a{",";}}"],g.a.muli,y.b.lg,g.a.inlineLink),x=function(e){var t=e.about;return r.a.createElement(E,{cols:2,style:{minHeight:"calc(100vmin - 170px)"}},r.a.createElement(w,{dangerouslySetInnerHTML:{__html:t.edges[0].node.html}}))},_=n("Wbzz"),k=n("t09W"),I=n("r2cD"),C=p.d.div.withConfig({displayName:"Resume__ResumeContainer",componentId:"qvtppe-0"})(["display:flex;flex-direction:column;align-items:center;width:100%;"]),S=p.d.div.withConfig({displayName:"Resume__Tab",componentId:"qvtppe-1"})(["margin:1rem auto;justify-content:center;align-items:center;height:3rem;"]),T=Object(p.d)(_.Link).attrs({to:"/about#resume"}).withConfig({displayName:"Resume__TabItem",componentId:"qvtppe-2"})(["",";font-size:",";margin:0 1rem;box-shadow:"," ",";transition:all 0.3s ease-in-out;&:hover{padding-bottom:0.2em;}"],g.a.teko,y.b.lg,(function(e){return e.selected?"inset 0 -0.8rem":"inset 0 -0.2rem"}),(function(e){return e.theme.primary})),N=p.d.section.withConfig({displayName:"Resume__ResumeSection",componentId:"qvtppe-3"})(["min-height:calc(90vmin - 80px);animation:"," 0.4s ease-in-out forwards,"," 0.4s ease-in-out forwards;transform:translateX(100px);opacity:0;flex-direction:column;justify-content:flex-start;align-items:center;width:100%;max-width:800px;margin:0 auto;transition:transform 0.4s ease-in-out;"],I.c,I.a),q=p.d.div.withConfig({displayName:"Resume__SkillsSection",componentId:"qvtppe-4"})(["h1{",";font-size:",";}ul{"," width:100%;padding:0;margin:2rem 0;grid-row-gap:1rem;list-style-type:none;li{display:grid;grid-template-columns:auto 1fr 1fr;"," letter-spacing:0.03rem;code{",' font-weight:300;}&::before{content:"○";position:relative;left:0;margin-right:5px;color:',";}}}"],g.a.muli,y.b.lg,g.a.grid(),g.a.roboto,g.a.roboto,(function(e){return e.theme.primary})),R=p.d.div.withConfig({displayName:"Resume__JobSection",componentId:"qvtppe-5"})(['ul{padding:0;margin:0;list-style:outside none none;}li{position:relative;padding-left:1rem;margin:0.4rem 0;line-height:120%;&::before{content:"▹";position:absolute;left:0;color:',";}}"],(function(e){return e.theme.primary})),j=(p.d.div.withConfig({displayName:"Resume__Section",componentId:"qvtppe-6"})(["width:100%"]),p.d.p.withConfig({displayName:"Resume__SectionTitle",componentId:"qvtppe-7"})(["font-family:",";font-size:",";text-transform:uppercase;color:",";margin-bottom:1.6rem;"],y.c.teko,y.b.lg,(function(e){return e.theme.onBackground})),p.d.p.withConfig({displayName:"Resume__SectionText",componentId:"qvtppe-8"})([""," font-size:",";a{","}margin:0.4rem 0;"],g.a.muli,y.b.lg,g.a.inlineLink)),z=Object(p.d)(j).withConfig({displayName:"Resume__EventPeriod",componentId:"qvtppe-9"})(["font-size:",";line-height:150%;"],y.b.md),L=p.d.div.withConfig({displayName:"Resume__EventContainer",componentId:"qvtppe-10"})(["margin:0.5rem 0 2.5rem 0;"]),O=function(e){var t=e.jobs.edges.map((function(e){return e.node})),n=e.educations.edges.map((function(e){return e.node})),i=e.extras.edges.map((function(e){return e.node})),o=Object(a.useState)(0),l=o[0],m=o[1],c=["jobs","educations","skills","extras"];return r.a.createElement(C,{id:"resume"},r.a.createElement(S,null,c.map((function(e,t){return r.a.createElement(T,{key:t,selected:l==t,onClick:function(){return m(t)}},e)}))),l===c.indexOf("jobs")&&r.a.createElement(N,null,r.a.createElement(k.a,{contentBefore:'"◷"'},"Work Experience"),t.map((function(e,t){var n=e.frontmatter,a=n.title,i=n.subTitle,o=n.titleExtension,l=n.location;return r.a.createElement(L,{key:t},r.a.createElement("span",null,r.a.createElement(j,null,r.a.createElement("b",null,a)," @ ",o)),r.a.createElement(z,null,i," // ",l),r.a.createElement(R,{dangerouslySetInnerHTML:{__html:e.html}}))}))),l===c.indexOf("educations")&&r.a.createElement(N,null,r.a.createElement(k.a,{contentBefore:'"◶"'},"education"),n.map((function(e,t){var n=e.frontmatter,a=n.title,i=n.subTitle,o=n.location;return r.a.createElement(L,{key:t},r.a.createElement("span",null,r.a.createElement(j,null,r.a.createElement("b",null,a)," ")),r.a.createElement(z,null,i," // ",o),r.a.createElement("div",{dangerouslySetInnerHTML:{__html:e.html}}))}))),l===c.indexOf("skills")&&r.a.createElement(N,null,r.a.createElement(k.a,{contentBefore:'"◵"'},"Skills"),r.a.createElement(q,{dangerouslySetInnerHTML:{__html:e.skills.edges[0].node.html}})),l===c.indexOf("extras")&&r.a.createElement(N,null,r.a.createElement(k.a,{contentBefore:'"◴"'},"Extra-Curricular"),i.map((function(e,t){var n=e.frontmatter,a=n.title,i=n.subTitle,o=n.titleExtension;return r.a.createElement(L,{key:t},r.a.createElement("span",null,r.a.createElement(j,null,r.a.createElement("b",null,a)," @ ",o),r.a.createElement(z,null,i)),r.a.createElement("div",{dangerouslySetInnerHTML:{__html:e.html}}))}))))},H="1423728500";t.default=function(e){var t=e.data;return r.a.createElement(c.b,null,r.a.createElement(u.a,null),r.a.createElement(s.a,{title:"About"}),r.a.createElement(i.a,null,r.a.createElement(l.a,null),r.a.createElement(o.a,null,r.a.createElement(x,{about:t.about}),r.a.createElement(O,{educations:t.educations,jobs:t.jobs,extras:t.extras,skills:t.skills})),r.a.createElement(d.a,null),r.a.createElement(m.a,null)))}},t09W:function(e,t,n){"use strict";var a=n("vOnD"),r=n("ek6p"),i=n("eVT4"),o=n("532r");function l(){var e=c(["\n    &::after{\n      content:'';\n      display: block;\n      position: relative;\n      top: 50%;\n      height: 1px;\n      width: 100%;\n      max-width: 200px;\n      margin-left: 1rem;\n      background-color: gray;\n    }"]);return l=function(){return e},e}function m(){var e=c([" font-size: ",""]);return m=function(){return e},e}function c(e,t){return t||(t=e.slice(0)),e.raw=t,e}var u=a.d.p.withConfig({displayName:"SectionHeader",componentId:"sc-1r54xzi-0"})([""," display:flex;position:relative;align-items:center;padding-top:3rem;margin-bottom:2rem;font-size:",";"," &::before{position:relative;color:",";counter-increment:section;content:",";margin-right:0.5rem;}",""],r.a.teko,i.b.xl,o.a.sm(m(),i.b.xxl),(function(e){return e.theme.primary}),(function(e){return e.contentBefore||'"0" counter(section) ". "'}),o.a.sm(l()));t.a=u}}]);
//# sourceMappingURL=component---src-pages-about-tsx-6ac7cdaa0dba49cc22e2.js.map