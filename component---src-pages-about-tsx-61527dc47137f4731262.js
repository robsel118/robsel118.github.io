(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"2l/u":function(e,t,n){"use strict";n.r(t),n.d(t,"query",(function(){return z}));var a=n("q1tI"),r=n.n(a),i=n("1mWn"),o=n("9Um5"),l=n("cKXd"),c=n("nvEY"),m=n("rL/M"),u=n("pS6H"),s=n("c5LU"),d=n("0n5T"),p=n("vOnD"),f=n("532r"),g=n("ek6p");function h(){var e=v(["\n    display: grid;\n    grid-template-columns: repeat(",", 1fr);\n    justify-content: space-betweeen;\n  "]);return h=function(){return e},e}function E(){var e=v(["\n    display: grid;\n    grid-template-columns: repeat(2, 1fr);\n    justify-content: space-betweeen;\n  "]);return E=function(){return e},e}function v(e,t){return t||(t=e.slice(0)),e.raw=t,e}var y=p.d.div.withConfig({displayName:"Grid",componentId:"pwxn9v-0"})(["margin:1.5rem 0;grid-column-gap:3rem;grid-row-gap:2rem;flex-direction:column;",";"," ",""],g.a.flexCenter,f.a.md(E()),f.a.lg(h(),(function(e){return e.cols}))),b=p.d.div.withConfig({displayName:"About__AboutText",componentId:"sc-1bw77u7-0"})(["p{"," a{","}}"],g.a.muli,g.a.inlineLink),w=function(e){var t=e.about;return r.a.createElement(y,{cols:2,style:{minHeight:"calc(100vmin - 170px)"}},r.a.createElement(b,{dangerouslySetInnerHTML:{__html:t.edges[0].node.html}}))},x=(n("pJf4"),n("Wbzz")),_=n("t09W"),k=n("eVT4"),I=p.d.div.withConfig({displayName:"Resume__ResumeContainer",componentId:"qvtppe-0"})(["display:flex;flex-direction:column;align-items:center;width:100%;"]),C=p.d.div.withConfig({displayName:"Resume__Tab",componentId:"qvtppe-1"})(["margin:1rem auto;justify-content:center;align-items:center;height:3rem;"]),S=Object(p.d)(x.Link).attrs({to:"/about#resume"}).withConfig({displayName:"Resume__TabItem",componentId:"qvtppe-2"})(["",";",";font-size:",";margin:0 1rem;box-shadow:"," ",";&:hover{padding-bottom:0.2em;}"],g.a.teko,g.a.transitionAll,k.a.lg,(function(e){return e.selected?"inset 0 -0.8rem":"inset 0 -0.2rem"}),(function(e){return e.theme.primary})),N=p.d.section.withConfig({displayName:"Resume__ResumeSection",componentId:"qvtppe-3"})(["opacity:",";visibility:",";transform:",";min-height:",";max-height:",";flex-direction:column;display:flex;justify-content:flex-start;align-items:center;width:100%;transition:transform 0.4s ease-in-out;"],(function(e){return e.selected?"1":"0"}),(function(e){return e.selected?"visible":"hidden"}),(function(e){return e.selected?"none":"translateX(-20%)"}),(function(e){return e.selected?"calc(100vmin - 80px)":"0"}),(function(e){return e.selected?"100%":"0"})),T=p.d.div.withConfig({displayName:"Resume__SkillsSection",componentId:"qvtppe-4"})(["h1{","}ul{"," width:100%;padding:0;margin:2rem 0;grid-row-gap:1rem;list-style-type:none;li{display:grid;grid-template-columns:auto 60% 40%;"," code{",'}&::before{content:"○";position:relative;left:0;margin-right:5px;color:',";}}}"],g.a.muli,g.a.grid(),g.a.roboto,g.a.roboto,(function(e){return e.theme.primary})),j=p.d.div.withConfig({displayName:"Resume__Section",componentId:"qvtppe-5"})(["max-width:700px;width:100%"]),q=(p.d.p.withConfig({displayName:"Resume__SectionTitle",componentId:"qvtppe-6"})(["font-family:",";font-size:",";text-transform:uppercase;color:",";margin-bottom:1.6rem;"],k.b.teko,k.a.lg,(function(e){return e.theme.onBackground})),p.d.p.withConfig({displayName:"Resume__SectionText",componentId:"qvtppe-7"})([""," a{","}margin:0.4rem 0;"],g.a.muli,g.a.inlineLink)),R=Object(p.d)(q).withConfig({displayName:"Resume__EventPeriod",componentId:"qvtppe-8"})(["font-size:",";"],k.a.sm),L=p.d.div.withConfig({displayName:"Resume__EventContainer",componentId:"qvtppe-9"})(["margin:0.5rem 0 2.5rem 0;"]),O=function(e){var t=e.jobs.edges.map((function(e){return e.node})),n=e.educations.edges.map((function(e){return e.node})),i=e.extras.edges.map((function(e){return e.node})),o=Object(a.useState)(0),l=o[0],c=o[1],m=["jobs","educations","skills","other"];return r.a.createElement(I,{id:"resume"},r.a.createElement(C,null,m.map((function(e,t){return r.a.createElement(S,{key:t,selected:l==t,onClick:function(){return c(t)}},e)}))),r.a.createElement(N,{selected:l===m.indexOf("jobs")},r.a.createElement(j,null,r.a.createElement(_.a,{contentBefore:'"▹"'},"Work Experience"),t.map((function(e,t){var n=e.frontmatter,a=n.position,i=n.company,o=n.range;return r.a.createElement(L,{key:t},r.a.createElement("span",null,r.a.createElement(q,null,r.a.createElement("b",null,a)," @ ",i)),r.a.createElement(R,null,o),r.a.createElement("div",{dangerouslySetInnerHTML:{__html:e.html}}))})))),r.a.createElement(N,{selected:l===m.indexOf("other")},r.a.createElement(j,null,r.a.createElement(_.a,{contentBefore:'"▹"'},"Extra-Curricular"),i.map((function(e,t){var n=e.frontmatter,a=n.name,i=n.role,o=n.mention;return r.a.createElement(L,{key:t},r.a.createElement("span",null,r.a.createElement(q,null,r.a.createElement("b",null,i)," @ ",a),r.a.createElement(R,null,o)),r.a.createElement("div",{dangerouslySetInnerHTML:{__html:e.html}}))})))),r.a.createElement(N,{selected:l===m.indexOf("educations")},r.a.createElement(j,null,r.a.createElement(_.a,{contentBefore:'"▹"'},"education"),n.map((function(e,t){var n=e.frontmatter,a=n.school,i=n.range;return r.a.createElement(L,{key:t},r.a.createElement("span",null,r.a.createElement(q,null,r.a.createElement("b",null,a)," ")),r.a.createElement(R,null,i),r.a.createElement("div",{dangerouslySetInnerHTML:{__html:e.html}}))})))),r.a.createElement(N,{selected:l===m.indexOf("skills")},r.a.createElement(j,null,r.a.createElement(_.a,{contentBefore:'"▹"'},"Skills"),r.a.createElement(T,{dangerouslySetInnerHTML:{__html:e.skills.edges[0].node.html}}))))},z="1023596653";t.default=function(e){var t=e.data;return r.a.createElement(m.b,null,r.a.createElement(u.a,null),r.a.createElement(s.a,{title:"About"}),r.a.createElement(i.a,null,r.a.createElement(l.a,null),r.a.createElement(o.a,null,r.a.createElement(w,{about:t.about}),r.a.createElement(O,{educations:t.educations,jobs:t.jobs,extras:t.extras,skills:t.skills})),r.a.createElement(d.a,null),r.a.createElement(c.a,null)))}},t09W:function(e,t,n){"use strict";var a=n("vOnD"),r=n("ek6p"),i=n("eVT4"),o=n("532r");function l(){var e=m(["\n    &::after{\n      content:'';\n      display: block;\n      position: relative;\n      top: 50%;\n      height: 1px;\n      width: 100%;\n      max-width: 200px;\n      margin-left: 1rem;\n      background-color: gray;\n    }"]);return l=function(){return e},e}function c(){var e=m([" font-size: ",""]);return c=function(){return e},e}function m(e,t){return t||(t=e.slice(0)),e.raw=t,e}var u=a.d.p.withConfig({displayName:"SectionHeader",componentId:"sc-1r54xzi-0"})([""," display:flex;position:relative;align-items:center;padding-top:3rem;margin-bottom:5rem;font-size:",";"," &::before{position:relative;color:",";counter-increment:section;content:","}",""],r.a.teko,i.a.xl,o.a.sm(c(),i.a.xxl),(function(e){return e.theme.primary}),(function(e){return e.contentBefore||'"0" counter(section) ". "'}),o.a.sm(l()));t.a=u}}]);
//# sourceMappingURL=component---src-pages-about-tsx-61527dc47137f4731262.js.map