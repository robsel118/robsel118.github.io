(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"2l/u":function(e,t,n){"use strict";n.r(t),n.d(t,"query",(function(){return q}));var a=n("q1tI"),r=n.n(a),i=n("1mWn"),o=n("9Um5"),l=n("cKXd"),c=n("nvEY"),m=n("rL/M"),u=n("pS6H"),s=n("c5LU"),d=n("0n5T"),p=n("vOnD"),f=n("D306"),g=n("ek6p"),h=p.d.div.withConfig({displayName:"About__AboutText",componentId:"sc-1bw77u7-0"})(["p{"," a{","}}"],g.a.muli,g.a.inlineLink),v=function(e){var t=e.about;return r.a.createElement(f.a,{cols:2,style:{minHeight:"calc(100vmin - 170px)"}},r.a.createElement(h,{dangerouslySetInnerHTML:{__html:t.edges[0].node.html}}))},E=(n("pJf4"),n("Wbzz")),y=n("t09W"),b=n("eVT4"),w=p.d.div.withConfig({displayName:"Resume__ResumeContainer",componentId:"qvtppe-0"})(["display:grid;grid-template-columns:1fr;grid-template-rows:auto;width:100%;"]),x=p.d.div.withConfig({displayName:"Resume__Tab",componentId:"qvtppe-1"})(["margin:1rem auto;justify-content:center;align-items:center;height:3rem;"]),_=Object(p.d)(E.Link).attrs({to:"/about#resume"}).withConfig({displayName:"Resume__TabItem",componentId:"qvtppe-2"})(["",";",";font-size:",";margin:0 1rem;box-shadow:"," ",";&:hover{padding-bottom:0.2em;}"],g.a.teko,g.a.transitionAll,b.a.lg,(function(e){return e.selected?"inset 0 -0.8rem":"inset 0 -0.2rem"}),(function(e){return e.theme.primary})),k=p.d.section.withConfig({displayName:"Resume__ResumeSection",componentId:"qvtppe-3"})(["opacity:",";visibility:",";transform:",";min-height:",";max-height:",";flex-direction:column;display:flex;justify-content:flex-start;align-items:center;width:100%;transition:transform 0.3s ease-in-out;"],(function(e){return e.selected?"1":"0"}),(function(e){return e.selected?"visible":"hidden"}),(function(e){return e.selected?"none":"translateX(20%)"}),(function(e){return e.selected?"calc(100vmin - 80px)":"0"}),(function(e){return e.selected?"100%":"0"})),I=p.d.div.withConfig({displayName:"Resume__SkillsSection",componentId:"qvtppe-4"})(["h1{","}ul{"," width:100%;padding:0;margin:2rem 0;grid-row-gap:1rem;list-style-type:none;li{display:grid;grid-template-columns:auto 60% 40%;"," code{",'}&::before{content:"○";position:relative;left:0;margin-right:5px;color:',";}}}"],g.a.muli,g.a.grid(),g.a.roboto,g.a.roboto,(function(e){return e.theme.primary})),C=p.d.div.withConfig({displayName:"Resume__Section",componentId:"qvtppe-5"})(["max-width:700px;width:100%"]),S=(p.d.p.withConfig({displayName:"Resume__SectionTitle",componentId:"qvtppe-6"})(["font-family:",";font-size:",";text-transform:uppercase;color:",";margin-bottom:1.6rem;"],b.b.teko,b.a.lg,(function(e){return e.theme.onBackground})),p.d.p.withConfig({displayName:"Resume__SectionText",componentId:"qvtppe-7"})([""," a{","}margin:0.4rem 0;"],g.a.muli,g.a.inlineLink)),N=Object(p.d)(S).withConfig({displayName:"Resume__EventPeriod",componentId:"qvtppe-8"})(["font-size:",";"],b.a.sm),T=p.d.div.withConfig({displayName:"Resume__EventContainer",componentId:"qvtppe-9"})(["margin:0.5rem 0 2.5rem 0;"]),j=function(e){var t=e.jobs.edges.map((function(e){return e.node})),n=e.educations.edges.map((function(e){return e.node})),i=e.extras.edges.map((function(e){return e.node})),o=Object(a.useState)(0),l=o[0],c=o[1],m=["jobs","educations","skills","other"];return r.a.createElement(w,{id:"resume"},r.a.createElement(x,null,m.map((function(e,t){return r.a.createElement(_,{key:t,selected:l==t,onClick:function(){return c(t)}},e)}))),r.a.createElement(k,{selected:l===m.indexOf("jobs")},r.a.createElement(C,null,r.a.createElement(y.a,{contentBefore:'"▹"'},"Work Experience"),t.map((function(e,t){var n=e.frontmatter,a=n.position,i=n.company,o=n.range;return r.a.createElement(T,{key:t},r.a.createElement("span",null,r.a.createElement(S,null,r.a.createElement("b",null,a)," @ ",i)),r.a.createElement(N,null,o),r.a.createElement("div",{dangerouslySetInnerHTML:{__html:e.html}}))})))),r.a.createElement(k,{selected:l===m.indexOf("other")},r.a.createElement(C,null,r.a.createElement(y.a,{contentBefore:'"▹"'},"Extra-Curricular"),i.map((function(e,t){var n=e.frontmatter,a=n.name,i=n.role,o=n.mention;return r.a.createElement(T,{key:t},r.a.createElement("span",null,r.a.createElement(S,null,r.a.createElement("b",null,i)," @ ",a),r.a.createElement(N,null,o)),r.a.createElement("div",{dangerouslySetInnerHTML:{__html:e.html}}))})))),r.a.createElement(k,{selected:l===m.indexOf("educations")},r.a.createElement(C,null,r.a.createElement(y.a,{contentBefore:'"▹"'},"education"),n.map((function(e,t){var n=e.frontmatter,a=n.school,i=n.range;return r.a.createElement(T,{key:t},r.a.createElement("span",null,r.a.createElement(S,null,r.a.createElement("b",null,a)," ")),r.a.createElement(N,null,i),r.a.createElement("div",{dangerouslySetInnerHTML:{__html:e.html}}))})))),r.a.createElement(k,{selected:l===m.indexOf("skills")},r.a.createElement(C,null,r.a.createElement(y.a,{contentBefore:'"▹"'},"Skills"),r.a.createElement(I,{dangerouslySetInnerHTML:{__html:e.skills.edges[0].node.html}}))))},q="1023596653";t.default=function(e){var t=e.data;return r.a.createElement(m.b,null,r.a.createElement(u.a,null),r.a.createElement(s.a,{title:"About"}),r.a.createElement(i.a,null,r.a.createElement(l.a,null),r.a.createElement(o.a,null,r.a.createElement(v,{about:t.about}),r.a.createElement(j,{educations:t.educations,jobs:t.jobs,extras:t.extras,skills:t.skills})),r.a.createElement(d.a,null),r.a.createElement(c.a,null)))}},D306:function(e,t,n){"use strict";var a=n("vOnD"),r=n("532r"),i=n("ek6p");function o(){var e=c(["\n    display: grid;\n    grid-template-columns: repeat(",", 1fr);\n    justify-content: space-betweeen;\n  "]);return o=function(){return e},e}function l(){var e=c(["\n    display: grid;\n    grid-template-columns: repeat(2, 1fr);\n    justify-content: space-betweeen;\n  "]);return l=function(){return e},e}function c(e,t){return t||(t=e.slice(0)),e.raw=t,e}var m=a.d.div.withConfig({displayName:"Grid",componentId:"pwxn9v-0"})(["margin:1.5rem 0;grid-column-gap:3rem;grid-row-gap:2rem;flex-direction:column;",";"," ",""],i.a.flexCenter,r.a.md(l()),r.a.lg(o(),(function(e){return e.cols})));t.a=m},t09W:function(e,t,n){"use strict";var a=n("vOnD"),r=n("ek6p"),i=n("eVT4"),o=n("532r");function l(){var e=m(["\n    &::after{\n      content:'';\n      display: block;\n      position: relative;\n      top: 50%;\n      height: 1px;\n      width: 100%;\n      max-width: 200px;\n      margin-left: 1rem;\n      background-color: gray;\n    }"]);return l=function(){return e},e}function c(){var e=m([" font-size: ",""]);return c=function(){return e},e}function m(e,t){return t||(t=e.slice(0)),e.raw=t,e}var u=a.d.p.withConfig({displayName:"SectionHeader",componentId:"sc-1r54xzi-0"})([""," display:flex;position:relative;align-items:center;padding-top:3rem;margin-bottom:5rem;font-size:",";"," &::before{position:relative;color:",";counter-increment:section;content:","}",""],r.a.teko,i.a.xl,o.a.sm(c(),i.a.xxl),(function(e){return e.theme.primary}),(function(e){return e.contentBefore||'"0" counter(section) ". "'}),o.a.sm(l()));t.a=u}}]);
//# sourceMappingURL=component---src-pages-about-tsx-77487623106bcabd6eae.js.map