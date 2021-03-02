(this["webpackJsonpreact-flask-app"]=this["webpackJsonpreact-flask-app"]||[]).push([[0],{58:function(e,t,n){},87:function(e,t,n){},98:function(e,t,n){"use strict";n.r(t);var a,s=n(0),r=n.n(s),i=n(9),c=n.n(i),o=(n(87),n(51)),l=n.n(o),u=n(59),p=n(25),d=n(37),j=n(152),b=n(156),h=n(157),f=n(158),m=n(99),O=n(164),g=n(159),x=n(163),v=n(145),w=n(48),y=n(161),S=n(14),k=n(60),L=n(70),A=n(62),R=n(3),C={display:"flex",flexDirection:"row",flexWrap:"wrap",marginTop:16},N={display:"inline-flex",borderRadius:2,border:"1px solid #eaeaea",marginBottom:8,marginRight:8,width:100,height:100,padding:4,boxSizing:"border-box"},T={display:"flex",minWidth:0,overflow:"hidden"},Q={display:"block",width:"auto",height:"100%"},I=A.a.div(a||(a=Object(k.a)(["\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 20px;\n  border-width: 2px;\n  border-radius: 2px;\n  border-color: ",";\n  border-style: dashed;\n  background-color: #fafafa;\n  color: #bdbdbd;\n  outline: none;\n  transition: border .24s ease-in-out;\n"])),(function(e){return function(e){return e.isDragAccept?"#00e676":e.isDragReject?"#ff1744":e.isDragActive?"#2196f3":"#eeeeee"}(e)}));function D(e){var t=Object(S.a)({},e),n=Object(s.useState)([]),a=Object(p.a)(n,2),i=a[0],c=a[1],o=Object(L.a)({accept:"image/*",onDrop:function(e){c(e.map((function(e){return Object.assign(e,{preview:URL.createObjectURL(e)})}))),t.parentCallback(e[0])}}),l=o.getRootProps,u=o.getInputProps,d=o.isDragActive,j=o.isDragAccept,b=o.isDragReject,h=i.map((function(e){return Object(R.jsx)("div",{style:N,children:Object(R.jsx)("div",{style:T,children:Object(R.jsx)("img",{src:e.preview,style:Q})})},e.name)}));return Object(s.useEffect)((function(){return function(){i.forEach((function(e){return URL.revokeObjectURL(e.preview)}))}}),[i]),Object(R.jsxs)(r.a.Fragment,{children:[Object(R.jsx)(w.a,{variant:"h6",gutterBottom:!0,children:"Upload images to check"}),Object(R.jsxs)("div",{className:"container",children:[Object(R.jsxs)(I,Object(S.a)(Object(S.a)({},l({className:"dropzone",isDragActive:d,isDragAccept:j,isDragReject:b})),{},{children:[Object(R.jsx)("input",Object(S.a)({},u())),Object(R.jsx)("p",{children:"Drag 'n' drop some files here, or click to select files"}),Object(R.jsx)("em",{children:"(Only *.jpeg and *.png images will be accepted)"})]})),Object(R.jsx)("aside",{style:C,children:h})]})]})}var F=n(15),B=n(16),P=n(45),z=n(18),U=n(17),W=n(146),q=n(162),E=n(144),_=(n(58),function(e){Object(z.a)(n,e);var t=Object(U.a)(n);function n(){var e;Object(F.a)(this,n);for(var a=arguments.length,s=new Array(a),i=0;i<a;i++)s[i]=arguments[i];return(e=t.call.apply(t,[this].concat(s))).inputRef=r.a.createRef(),e.errorRef=r.a.createRef(),e.handleSubmit=function(t){if(console.log(e.inputRef.current.value),t.preventDefault(),""===e.inputRef.current.value)return e.errorRef.current.classList.add("active"),null;e.errorRef.current.classList.remove("active"),e.props.addToList(e.inputRef.current.value),t.currentTarget.reset()},e}return Object(B.a)(n,[{key:"render",value:function(){return Object(R.jsxs)("form",{onSubmit:this.handleSubmit,style:{display:"flex"},children:[Object(R.jsx)(E.a,{placeholder:"Solution number",type:"number",inputProps:{"aria-label":"Description"},onChange:this.handleChange,inputRef:this.inputRef,style:{marginLeft:"10px",marginRight:"30px",width:"80%"}}),Object(R.jsx)(v.a,{type:"submit",variant:"contained",color:"primary",children:"Add"}),Object(R.jsx)("p",{ref:this.errorRef,className:"error",children:"Error, must enter a value!"})]})}}]),n}(s.Component)),J=n(148),M=n(149),V=n(147),Y={Icon:{marginLeft:"auto"},Paper:{margin:"auto",padding:10,display:"flex",alignItems:"center",marginTop:10,width:500},numbering:{fontWeight:"bold",marginRight:10},answer:{color:"black"}},G=function(e){Object(z.a)(n,e);var t=Object(U.a)(n);function n(){var e;Object(F.a)(this,n);for(var a=arguments.length,s=new Array(a),i=0;i<a;i++)s[i]=arguments[i];return(e=t.call.apply(t,[this].concat(s))).state={fade:!1},e.gridRef=r.a.createRef(),e.deleteAnswer=function(){e.setState({fade:!0}),new Promise((function(e,t){setTimeout((function(){e(!0)}),500)})).then((function(){return e.props.deleteAnswer(e.props.index)})),console.log(e.state)},e}return Object(B.a)(n,[{key:"render",value:function(){var e=this,t=this.state.fade?"fade-out":"";return Object(R.jsx)(W.a,{xs:12,className:"".concat(t),item:!0,ref:this.gridRef,children:Object(R.jsxs)(m.a,{elevation:2,style:Y.Paper,children:[Object(R.jsxs)("span",{style:Y.numbering,children:[this.props.index,")"]}),Object(R.jsxs)("span",{style:Y.answer,children:[" ",this.props.answer]}),Object(R.jsx)(V.a,{color:"primary","aria-label":"Edit",style:Y.Icon,onClick:function(){return e.props.updateAnswer(e.props.index)},children:Object(R.jsx)(J.a,{fontSize:"small"})}),Object(R.jsx)(V.a,{color:"secondary","aria-label":"Delete",onClick:this.deleteAnswer,children:Object(R.jsx)(M.a,{fontSize:"small"})})]})},this.props.index)}}]),n}(s.Component),H=n(150),K={Icon:{marginLeft:"auto",width:"10%"},Paper:{margin:"auto",padding:10,alignItems:"center",marginTop:10,width:500}},X=function(e){Object(z.a)(n,e);var t=Object(U.a)(n);function n(){var e;Object(F.a)(this,n);for(var a=arguments.length,s=new Array(a),i=0;i<a;i++)s[i]=arguments[i];return(e=t.call.apply(t,[this].concat(s))).inputRef=r.a.createRef(),e}return Object(B.a)(n,[{key:"render",value:function(){var e=this;return Object(R.jsx)(W.a,{xs:12,item:!0,children:Object(R.jsx)(m.a,{elevation:2,style:K.Paper,children:Object(R.jsxs)("form",{onSubmit:function(){e.props.saveAnswer(e.props.index,e.inputRef.current.value)},style:{display:"flex"},children:[Object(R.jsx)(E.a,{style:{width:"90%"},type:"number",defaultValue:this.props.answer,inputRef:this.inputRef}),Object(R.jsx)(V.a,{type:"submit",color:"primary","aria-label":"Add",style:K.Icon,children:Object(R.jsx)(H.a,{fontSize:"small"})})]})})},this.props.index)}}]),n}(s.Component),Z=function(e){Object(z.a)(n,e);var t=Object(U.a)(n);function n(){var e;Object(F.a)(this,n);for(var a=arguments.length,s=new Array(a),r=0;r<a;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).renderAnswer=function(t){return null==e.props.list[t]?null:"active"===e.props.list[t].status?Object(R.jsx)(G,{index:t,answer:e.props.list[t].answer,deleteAnswer:e.props.deleteAnswer,updateAnswer:e.props.updateAnswer},t):"editing"===e.props.list[t].status?Object(R.jsx)(X,{index:t,answer:e.props.list[t].answer,saveAnswer:e.props.saveAnswer},t):void 0},e}return Object(B.a)(n,[{key:"render",value:function(){var e=this;return Object(R.jsx)(W.a,{container:!0,children:Object.keys(this.props.list).map((function(t){return e.renderAnswer(t)}))})}}]),n}(r.a.Component),$=n(47),ee=n.n($),te=function(e){Object(z.a)(n,e);var t=Object(U.a)(n);function n(e){var a;return Object(F.a)(this,n),(a=t.call(this,e)).addToList=function(e){var t=ee.a.size(a.state.answersSolutionsList)+1,n=Object(S.a)({},a.state.answersSolutionsList);n[t]={answer:e,status:"active"},a.setState({answersSolutionsList:n}),a.props.parentCallback({numberOfQuestions:a.state.numberOfQuestions,answersSolutionsList:n})},a.deleteAnswer=function(e){var t=Object(S.a)({},a.state.answersSolutionsList);t[e]=null,a.setState({answersSolutionsList:t}),a.props.parentCallback({numberOfQuestions:a.state.numberOfQuestions,answersSolutionsList:t})},a.updateAnswer=function(e){var t=Object(S.a)({},a.state.answersSolutionsList);t[e].status="editing",a.setState({answersSolutionsList:t}),a.props.parentCallback({numberOfQuestions:a.state.numberOfQuestions,answersSolutionsList:t})},a.saveAnswer=function(e,t){var n=Object(S.a)({},a.state.answersSolutionsList);n[e]={answer:t,status:"active"},a.setState({answersSolutionsList:n}),a.props.parentCallback({numberOfQuestions:a.state.numberOfQuestions,answersSolutionsList:n})},a.state={numberOfQuestions:0,answersSolutionsList:{}},a.handleNumberOfQuestionsChange=a.handleNumberOfQuestionsChange.bind(Object(P.a)(a)),a}return Object(B.a)(n,[{key:"handleNumberOfQuestionsChange",value:function(e){this.setState({numberOfQuestions:e.target.value}),this.props.parentCallback({numberOfQuestions:e.target.value,answersSolutionsList:this.state.answersSolutionsList})}},{key:"render",value:function(){return Object(R.jsxs)(r.a.Fragment,{children:[Object(R.jsx)(w.a,{variant:"h6",gutterBottom:!0,children:"Fill the correct solutions for the test"}),Object(R.jsxs)(W.a,{container:!0,spacing:3,children:[Object(R.jsx)(W.a,{item:!0,xs:12,md:12,children:Object(R.jsx)(q.a,{required:!0,type:"number",fullWidth:!0,id:"standard-basic",label:"Number of questions In test",value:this.state.numberOfQuestions,onChange:this.handleNumberOfQuestionsChange})}),Object(R.jsxs)(W.a,{container:!0,spacing:0,children:[Object(R.jsx)(W.a,{item:!0,xs:12,children:Object(R.jsx)(_,{addToList:this.addToList})}),Object(R.jsx)(Z,{deleteAnswer:this.deleteAnswer,list:this.state.answersSolutionsList,updateAnswer:this.updateAnswer,saveAnswer:this.saveAnswer})]})]})]})}}]),n}(s.Component),ne=n(151),ae=n(153),se=n(154),re=n(155),ie=Object(j.a)((function(e){return{listItem:{padding:e.spacing(1,0)},total:{fontWeight:700},title:{marginTop:e.spacing(2)}}}));function ce(e){var t=ie(),n=Object(S.a)({},e);return n.data&&n.data!=={}?Object(R.jsxs)(r.a.Fragment,{children:[Object(R.jsx)(w.a,{variant:"h6",gutterBottom:!0,children:"Results"}),Object(R.jsxs)(ne.a,{disablePadding:!0,children:[n.data.answers.map((function(e){return Object(R.jsxs)(ae.a,{className:t.listItem,children:[Object(R.jsx)(se.a,{primary:"Question  "+e.question}),Object(R.jsx)(w.a,{variant:"subtitle1",className:t.total,children:(1==e.answer).toString().toUpperCase()})]})})),Object(R.jsx)(re.a,{}),Object(R.jsxs)(ae.a,{className:t.listItem,children:[Object(R.jsx)(se.a,{primary:"Total correct"}),Object(R.jsx)(w.a,{variant:"subtitle1",className:t.total,children:n.data.total_correct})]}),Object(R.jsxs)(ae.a,{className:t.listItem,children:[Object(R.jsx)(se.a,{primary:"Total wrong"}),Object(R.jsx)(w.a,{variant:"subtitle1",className:t.total,children:n.data.total_wrong})]})]})]}):Object(R.jsx)(r.a.Fragment,{children:"Results"})}var oe=n(160),le=Object(j.a)((function(e){return{appBar:{position:"relative",background:"#282c34",color:"white",alignItems:"center"},footer:{padding:e.spacing(3,2),marginTop:"auto",background:"#282c34",color:"white"},layout:Object(d.a)({width:"auto",marginLeft:e.spacing(2),marginRight:e.spacing(2)},e.breakpoints.up(600+2*e.spacing(2)),{width:600,marginLeft:"auto",marginRight:"auto"}),paper:Object(d.a)({marginTop:e.spacing(3),marginBottom:e.spacing(3),padding:e.spacing(2)},e.breakpoints.up(600+2*e.spacing(3)),{marginTop:e.spacing(6),marginBottom:e.spacing(6),padding:e.spacing(3)}),stepper:{padding:e.spacing(3,0,5)},buttons:{display:"flex",justifyContent:"flex-end"},button:{marginTop:e.spacing(3),marginLeft:e.spacing(1)},progress:{marginTop:"auto",color:"green"}}})),ue=["Tests images","Correct answers","Results"];var pe=function(){var e=r.a.useState(0),t=Object(p.a)(e,2),n=t[0],a=t[1],s=r.a.useState(0),i=Object(p.a)(s,2),c=i[0],o=i[1],d=r.a.useState({}),j=Object(p.a)(d,2),S=j[0],k=j[1],L=r.a.useState({}),A=Object(p.a)(L,2),C=A[0],N=A[1],T=le(),Q=r.a.useState(0),I=Object(p.a)(Q,2),F=I[0],B=I[1],P=function(e){a(e)},z=function(e){k(e)};return Object(R.jsx)("div",{className:"App",children:Object(R.jsxs)(r.a.Fragment,{children:[Object(R.jsx)(b.a,{}),Object(R.jsx)(h.a,{position:"absolute",color:"default",className:T.appBar,children:Object(R.jsx)(f.a,{children:Object(R.jsx)(w.a,{variant:"h6",color:"inherit",noWrap:!0,children:"Automatic multiple choice checker"})})}),Object(R.jsx)("main",{className:T.layout,children:Object(R.jsxs)(m.a,{className:T.paper,children:[Object(R.jsx)(O.a,{activeStep:F,className:T.stepper,children:ue.map((function(e){return Object(R.jsx)(g.a,{children:Object(R.jsx)(x.a,{children:e})},e)}))}),Object(R.jsxs)(r.a.Fragment,{children:[F===ue.length?Object(R.jsxs)(r.a.Fragment,{children:[Object(R.jsx)(w.a,{variant:"h5",gutterBottom:!0,children:"Thank you for using our service \ud83d\udc4f\ud83c\udffb"}),Object(R.jsx)(v.a,{variant:"contained",color:"primary",onClick:function(){a(0),k({}),N({}),B(0),o(0)},className:T.button,children:"Again"})]}):Object(R.jsxs)(r.a.Fragment,{children:[function(e){switch(e){case 0:return Object(R.jsx)(D,{parentCallback:P});case 1:return Object(R.jsx)(te,{parentCallback:z});case 2:return Object(R.jsx)(ce,{data:C});default:throw new Error("Unknown step")}}(F),Object(R.jsxs)("div",{className:T.buttons,children:[0!==F&&2!==F&&Object(R.jsx)(v.a,{onClick:function(){B(F-1)},className:T.button,disabled:c,children:"Back"}),c?Object(R.jsx)(oe.a,{className:T.progress}):Object(R.jsx)(v.a,{variant:"contained",color:"primary",onClick:function(){if(F===ue.length-2){var e=new FormData;if(null===S.numberOfQuestions||0===S.numberOfQuestions)return void alert("please enter the number of questions in the test");if(null===S.answersSolutionsList||S.answersSolutionsList==={}||ee.a.size(S.answersSolutionsList)!==parseInt(S.numberOfQuestions))return void alert("please enter answers for the number of questions in the test");for(var t in e.append("questions_count",S.numberOfQuestions),S.answersSolutionsList)e.append(t,S.answersSolutionsList[t].answer);e.append("images",n,n.name);var a={headers:{Accept:"application/json"},method:"POST",body:e};o(1),fetch("/api/checkTest",a).then((function(e){return e.json()})).then((function(e){var t=setInterval(Object(u.a)(l.a.mark((function n(){var a,s;return l.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("/api/returnResults/"+e.task_id,{headers:{"Content-Type":"application/json",Accept:"application/json"}});case 2:return a=n.sent,n.next=5,a.json();case 5:"finished"==(s=n.sent).status?(N(s.result),o(0),clearInterval(t),B(F+1)):"not started"==s.status&&(clearInterval(t),alert("internal error, please try again"));case 7:case"end":return n.stop()}}),n)}))),45e3)}))}if(F===ue.length-3){if(null===n||0===n)return void alert("please enter an image of a test to check");B(F+1)}F===ue.length-1&&B(F+1)},className:T.button,disabled:c,children:F===ue.length-2?"Submit":"Next"})]})]}),c?Object(R.jsx)("span",{children:"Please wait for the results \ud83d\udd0e"}):null]})]})}),Object(R.jsx)("footer",{className:T.footer,children:Object(R.jsx)(y.a,{maxWidth:"sm",children:Object(R.jsxs)(w.a,{variant:"body2",color:"inherit",align:"center",children:["Copyright \xa9 Roy and Batel ",(new Date).getFullYear(),"."]})})})]})})},de=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,166)).then((function(t){var n=t.getCLS,a=t.getFID,s=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),a(e),s(e),r(e),i(e)}))};c.a.render(Object(R.jsx)(r.a.StrictMode,{children:Object(R.jsx)(pe,{})}),document.getElementById("root")),de()}},[[98,1,2]]]);
//# sourceMappingURL=main.249adc7f.chunk.js.map