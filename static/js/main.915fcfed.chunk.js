(this["webpackJsonpgoit-react-hw-07-phonebook-final"]=this["webpackJsonpgoit-react-hw-07-phonebook-final"]||[]).push([[0],{101:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(9),o=n.n(c),i=(n(57),n(8)),u=n(5),l=function(e){return e.contactsList.contacts},s=function(e){var t=e.contactsList.contacts;return t?t.length:0},m=function(e){return e.contactsList.filter},f=Object(u.a)([l,m],(function(e,t){return e.length<=1?e:e.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())}))})),p=function(e){return e.alert},b=n(10),d=n(12),h=n(15),E=n(14),_=n(102),O=n(42),C=n.n(O),v=n(43),g=n.n(v),j=n(25),A=n.n(j),T=n(44),y=function(e){var t=e.title,n=e.children;return r.a.createElement("section",{className:T.titleSection},r.a.createElement("h2",null,t),n)},x=n(45),S=n.n(x).a.create({baseURL:"http://localhost:3030/contacts",timeout:1e4}),N=n(1),D=Object(N.b)("LOADCONTACTS/START"),L=Object(N.b)("LOADCONTACTS/SUCCESS",(function(e){return{payload:{contacts:e}}})),w=Object(N.b)("LOADCONTACTS/ERROR",(function(e){return{payload:{message:e.message},meta:{error:!0}}})),R=Object(N.b)("ADDCONTACT/START",(function(e){return{payload:{contact:e},meta:{addContact:!0}}})),k=Object(N.b)("ADDCONTACT/START"),F=Object(N.b)("ADDCONTACT/SUCCESS",(function(e){return{payload:{contact:e}}})),q=Object(N.b)("ADDCONTACT/ERROR",(function(e){return{payload:{message:e.message},meta:{error:!0}}})),U=Object(N.b)("DELETECONTACT/START"),H=Object(N.b)("DELETECONTACT/SUCCESS",(function(e){return{payload:{id:e}}})),z=Object(N.b)("DELETECONTACT/ERROR",(function(e){return{payload:{message:e.message},meta:{error:!0}}})),G=Object(N.b)("CHANGEFILTER",(function(e){return{payload:{filter:e}}})),I=n(103),J=n(11);var M,W,K,Q=function(e){var t=e.name,n=e.number,a=e.onDeleteContact,c=e.index;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,r.a.createElement("span",null,c,". ",t)),r.a.createElement("div",{className:J.wrap},r.a.createElement("p",null,n),r.a.createElement("button",{type:"button",onClick:a,className:J.button},r.a.createElement("i",{className:"".concat(J.icon," material-icons")},"close"))))},Z=function(e){var t=e.message;return r.a.createElement("p",null,t,"!")},$=n(46),P=n.n($),X=function(e){Object(h.a)(n,e);var t=Object(E.a)(n);function n(){return Object(b.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"componentDidMount",value:function(){(0,this.props.onLoadContacts)()}},{key:"render",value:function(){var e=this.props,t=e.contacts,n=e.onDeleteContact;return r.a.createElement(r.a.Fragment,null,t.length>0?r.a.createElement(I.a,{component:"ul",className:J.list},t.map((function(e,t){var a=e.id,c=e.name,o=e.number;return r.a.createElement(_.a,{key:a,timeout:300,classNames:P.a,unmountOnExit:!0},r.a.createElement("li",{key:a,className:J.item},r.a.createElement(Q,{index:t+1,name:c,number:o,onDeleteContact:function(){return n(a)}})))}))):r.a.createElement(Z,{message:"Contacts for query not found"}))}}]),n}(a.Component),B={onDeleteContact:function(e){return function(t){t(U()),S.delete("/".concat(e)).then((function(){return t(H(e))})).catch((function(e){return t(z(e))}))}},onLoadContacts:function(){return function(e){e(D()),S.get().then((function(t){return e(L(t.data))})).catch((function(t){return e(w(t))}))}}},V=Object(i.b)((function(e){return{contacts:f(e)}}),B)(X),Y=n(47),ee=function(e){var t=e.value,n=e.onChangeFilter;return r.a.createElement("div",{className:Y.filter},r.a.createElement("p",null,"Find contacts by name"),r.a.createElement("input",{type:"text",value:t,onChange:n,placeholder:"Enter name..."}))},te=Object(i.b)((function(e){return{value:m(e)}}),(function(e){return{onChangeFilter:function(t){return e(G(t.target.value))}}}))(ee),ne=n(48),ae=n(6),re=n(26),ce=function(e){Object(h.a)(n,e);var t=Object(E.a)(n);function n(){var e;Object(b.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={name:"",number:""},e.handleChange=function(t){e.setState(Object(ae.a)({},t.target.name,t.target.value))},e.handleSubmit=function(t){t.preventDefault(),e.props.onAddContact(Object(ne.a)({},e.state)),e.setState({name:"",number:""})},e}return Object(d.a)(n,[{key:"render",value:function(){var e=this.state,t=e.name,n=e.number;return r.a.createElement("form",{onSubmit:this.handleSubmit,className:re.form},r.a.createElement("div",null,r.a.createElement("label",{htmlFor:"name_input"},"Name"),r.a.createElement("input",{type:"text",placeholder:"Enter contact`s name",value:t,onChange:this.handleChange,name:"name",id:"name_input"})),r.a.createElement("div",null,r.a.createElement("label",{htmlFor:"number_input"},"Number"),r.a.createElement("input",{type:"number",placeholder:"Example  0771112233",value:n,onChange:this.handleChange,name:"number",id:"number_input"})),r.a.createElement("button",{className:re.button,type:"submit"},"Add contact"))}}]),n}(a.Component),oe=Object(i.b)(null,(function(e){return{onAddContact:function(t){return e(R(t))}}}))(ce),ie=n(49),ue=function(e){var t=e.message;return r.a.createElement("p",{className:ie.p},t,"!")},le=function(e){Object(h.a)(n,e);var t=Object(E.a)(n);function n(){var e;Object(b.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={addTittle:!1},e}return Object(d.a)(n,[{key:"componentDidMount",value:function(){this.setState({addTittle:!0})}},{key:"render",value:function(){var e=this.state.addTittle,t=this.props,n=t.alert,a=t.count,c=!!n;return r.a.createElement("div",{className:C.a.container},r.a.createElement(_.a,{in:e,timeout:500,classNames:g.a,unmountOnExit:!0},r.a.createElement("h1",null,"Phonebook")),r.a.createElement(y,{title:""},r.a.createElement(oe,null)),r.a.createElement(_.a,{in:a>=2,timeout:500,classNames:A.a,unmountOnExit:!0},r.a.createElement(y,{title:""},r.a.createElement(te,null))),r.a.createElement(y,{title:""},r.a.createElement(V,null)),r.a.createElement(_.a,{in:c,timeout:300,classNames:A.a,unmountOnExit:!0},r.a.createElement(ue,{message:n})))}}]),n}(a.Component),se=Object(i.b)((function(e){return{alert:p(e),count:s(e)}}),null)(le),me=n(18),fe=n(7),pe=Object(N.c)([],(M={},Object(ae.a)(M,L,(function(e,t){return t.payload.contacts})),Object(ae.a)(M,F,(function(e,t){return[].concat(Object(me.a)(e),[t.payload.contact])})),Object(ae.a)(M,H,(function(e,t){return e.filter((function(e){return e.id!==t.payload.id}))})),M)),be=Object(N.c)("",(W={},Object(ae.a)(W,G,(function(e,t){return t.payload.filter})),Object(ae.a)(W,H,(function(){return""})),W)),de=Object(fe.c)({contacts:pe,filter:be}),he=Object(N.b)("SHOWALERT",(function(e){return{payload:{message:e}}})),Ee=Object(N.b)("HIDEALERT"),_e=Object(N.c)("",(K={},Object(ae.a)(K,he,(function(e,t){return t.payload.message})),Object(ae.a)(K,Ee,(function(){return""})),K)),Oe=n(19),Ce={name:"The name must contain only the letters a-z, A-C and a space, with length from 3 to 20 characters",number:"The number must contain only integers from 0-9, 10 characters long",notUnique:"Contact already exist!"},ve="error",ge="success",je=new function e(t){var n=this;Object(b.a)(this,e),this.validate=function(e,t){var a=n.schema.validate(t),r=a.error,c=a.value;return r?n.errorTransform(r):n.checkUnique(e,t)?{message:Ce.notUnique,meta:ve}:{contact:c,meta:ge}},this.errorTransform=function(e){if("string.empty"===e.details[0].type)return{message:e.message,meta:ve};var t=e.details[0].path[0];return{message:Ce[t],meta:ve}},this.checkUnique=function(e,t){return e.some((function(e){return e.name.toLowerCase()===t.name.toLowerCase()}))},this.schema=t}(Oe.object({name:Oe.string().pattern(/^[a-zA-Z ]{3,20}$/).trim().required(),number:Oe.string().pattern(/^[0-9]{10}$/).required()})),Ae=function(e){return function(t){return function(n){if(n.meta&&n.meta.addContact){var a=e.getState(),r=l(a),c=n.payload.contact,o=je.validate(r,c);o.meta===ge&&e.dispatch(function(e){return function(t){t(k()),S.post("",e).then((function(e){return t(F(e.data))})).catch((function(e){return t(q(e))}))}}(o.contact));var i=o.message?o.message:"";return e.dispatch(he(i)),void setTimeout((function(){e.dispatch(Ee())}),3e3)}t(n)}}},Te=function(e){return function(t){return function(n){if(n.meta&&n.meta.error)return e.dispatch(he(n.payload.message)),void setTimeout((function(){e.dispatch(Ee())}),3e3);t(n)}}},ye=Object(N.a)({reducer:{contactsList:de,alert:_e},middleware:[].concat(Object(me.a)(Object(N.d)()),[Te,Ae])});o.a.render(r.a.createElement(i.a,{store:ye},r.a.createElement(se,null)),document.querySelector("#root"))},11:function(e,t,n){e.exports={list:"ContactsList_list__2bgt2",item:"ContactsList_item__HEGxX",wrap:"ContactsList_wrap___axig"}},25:function(e,t,n){e.exports={enter:"pop_enter__2KFA4",enterActive:"pop_enterActive__3MWF2",exit:"pop_exit__2w50w",exitActive:"pop_exitActive__3vSJ9"}},26:function(e,t,n){e.exports={form:"CreateContactForm_form__1-0_w",button:"CreateContactForm_button__3sdCC"}},42:function(e,t,n){e.exports={container:"App_container__1QnDf"}},43:function(e,t,n){e.exports={enter:"slide-500ms_enter__3HdEK",enterActive:"slide-500ms_enterActive__RiI3G",exit:"slide-500ms_exit__3nD51",exitActive:"slide-500ms_exitActive__zbWNU"}},44:function(e,t,n){e.exports={titleSection:"Section_titleSection__Tgrzq"}},46:function(e,t,n){e.exports={enter:"slide_enter__2rA-2",enterActive:"slide_enterActive__2b58s",exit:"slide_exit__3lrZj",exitActive:"slide_exitActive__O6-4_"}},47:function(e,t,n){e.exports={filter:"Filter_filter__Qd7_n"}},49:function(e,t,n){e.exports={p:"Alert_p__h3C2L"}},52:function(e,t,n){e.exports=n(101)}},[[52,1,2]]]);
//# sourceMappingURL=main.915fcfed.chunk.js.map