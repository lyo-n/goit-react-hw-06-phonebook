(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{17:function(e,t,a){e.exports={logo:"logo_logo__18jdZ",appear:"logo_appear__KP--O",appearActive:"logo_appearActive__1DaMS"}},23:function(e,t,a){e.exports={searchBlock:"filter_searchBlock__24Gw4",searchInpt:"filter_searchInpt__3w9-i"}},30:function(e,t,a){e.exports=a(43)},40:function(e,t,a){},43:function(e,t,a){"use strict";a.r(t);var n,c=a(0),r=a.n(c),o=a(6),l=a.n(o),i=a(7),u=a.n(i),s=a(4),m=a(5),b=a(47),p={addContact:Object(m.b)("contacts/add",(function(e,t){return{payload:{contact:{id:Object(b.a)(),name:e,number:t}}}})),deleteContact:Object(m.b)("contacts/remove"),changeOnFilter:Object(m.b)("contscts/changeOnFilter")},_=Object(s.b)(null,(function(e,t){return{removeContact:function(){return e(p.deleteContact(t.contact.id))}}}))((function(e){var t=e.contact,a=t.name,n=t.number,c=e.removeContact;return r.a.createElement("li",{className:u.a.item},a,": ",n,r.a.createElement("button",{className:u.a.btn,type:"button",name:"delete",onClick:c},"Delete"))})),d=a(46),f=a(45),v={enter:u.a.enter,enterActive:u.a.enterActive,exit:u.a.exit,exitActive:u.a.exitActive},h=Object(s.b)((function(e){var t=e.contacts;return{contacts:t.arrayItems.filter((function(e){return e.name.toLowerCase().includes(t.filter.toLowerCase())}))}}))((function(e){var t=e.contacts;return r.a.createElement(d.a,{component:"ul"},t&&t.map((function(e){return r.a.createElement(f.a,{key:e.id,timeout:250,classNames:v},r.a.createElement(_,{contact:e}))})))})),O=a(11),E=a(21),j=a(22),g=a(27),y=a(25),A=a(8),x=a.n(A),C=function(e){Object(g.a)(a,e);var t=Object(y.a)(a);function a(){var e;Object(E.a)(this,a);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={name:"",number:"",isAddDisable:!0},e.change=function(t){var a=t.target,n=a.name,c=a.value;e.setState(Object(O.a)({},n,c),e.setIsAddEnable)},e.setIsAddEnable=function(){var t=e.state,a=t.name,n=t.number;e.setState({isAddDisable:""===a||""===n})},e.inputSubmit=function(t){t.preventDefault();var a=e.state,n=a.name,c=a.number;e.props.onSubmit(n,c),e.setState({name:"",number:""})},e}return Object(j.a)(a,[{key:"render",value:function(){var e=this.state,t=e.name,a=e.number,n=e.isAddDisable;return r.a.createElement("form",{onSubmit:this.inputSubmit,className:x.a.form},r.a.createElement("div",{className:x.a.formBlock},r.a.createElement("label",{className:x.a.label},"Name",r.a.createElement("input",{className:x.a.inpt,type:"text",name:"name",value:t,onChange:this.change})),r.a.createElement("label",{className:x.a.label},"Number",r.a.createElement("input",{className:x.a.inpt,type:"text",name:"number",value:a,onChange:this.change}))),r.a.createElement("button",{className:x.a.btn,type:"submit",onClick:this.change,disabled:n},"Add contact"))}}]),a}(c.Component),F=Object(s.b)(null,{onSubmit:p.addContact})(C),N=a(23),k=a.n(N),S={changeFilter:p.changeOnFilter},w=Object(s.b)((function(e){return{value:e.contacts.filter}}),S)((function(e){var t=e.value,a=e.changeFilter;return r.a.createElement("div",{className:k.a.searchBlock},"Find contacts by name",r.a.createElement("input",{type:"text",value:t,onChange:function(e){return a(e.target.value)}}))})),D=a(17),B=a.n(D),I={appear:B.a.appear,appearActive:B.a.appearActive},G=function(){return r.a.createElement(f.a,{in:!0,appear:!0,timeout:500,classNames:I,unmountOnExit:!0},r.a.createElement("h1",null,"Phonebook"))},P=(a(40),Object(s.b)((function(e){return{contacts:e.contacts.items}}))((function(){return r.a.createElement("div",null,r.a.createElement(G,null),r.a.createElement(F,null),r.a.createElement("h2",null,"Contacts"),r.a.createElement(w,null),r.a.createElement(h,null))}))),W=a(1),q=a(18),J=a(12),L=a(24),Q=a.n(L),z=a(26),K=Object(m.c)([],(n={},Object(O.a)(n,p.addContact,(function(e,t){return e&&e.find((function(e){return t.payload.contact.name===e.name}))?(alert("\u0422\u0430\u043a\u043e\u0439 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c \u0443\u0436\u0435 \u0435\u0441\u0442\u044c \u0432 \u0412\u0430\u0448\u0435\u0439 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u043d\u043e\u0439 \u043a\u043d\u0438\u0433\u0435!!!"),e):[].concat(Object(z.a)(e),[t.payload.contact])})),Object(O.a)(n,p.deleteContact,(function(e,t){return e.filter((function(e){return e.id!==t.payload}))})),n)),M=Object(m.c)("",Object(O.a)({},p.changeOnFilter,(function(e,t){return t.payload}))),V=Object(W.c)({arrayItems:K,filter:M}),Z={key:"root",storage:Q.a},H=Object(W.c)({contacts:V}),R=Object(q.a)(Z,H),T=Object(m.a)({reducer:R,middleware:[J.a]});Object(q.b)(T);var U=T;l.a.render(r.a.createElement(s.a,{store:U},r.a.createElement(P,null)),document.querySelector("#root"))},7:function(e,t,a){e.exports={list:"contacts_list__15dv2",item:"contacts_item__3xAcd",btn:"contacts_btn__W6zFb",enter:"contacts_enter__3CN4S",enterActive:"contacts_enterActive__2sESn",exit:"contacts_exit__1QpDW",exitActive:"contacts_exitActive__9ebGx"}},8:function(e,t,a){e.exports={form:"contactForm_form__1Wp8u",formBlock:"contactForm_formBlock__1FEpQ",label:"contactForm_label__Cvyqx",inpt:"contactForm_inpt__1GAVt",btn:"contactForm_btn__23jPF"}}},[[30,1,2]]]);
//# sourceMappingURL=main.6e9e05bb.chunk.js.map