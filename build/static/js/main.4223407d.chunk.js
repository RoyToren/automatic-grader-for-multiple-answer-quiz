(this["webpackJsonpreact-flask-app"]=this["webpackJsonpreact-flask-app"]||[]).push([[0],{58:function(e,t,n){},88:function(e,t,n){},99:function(e,t,n){"use strict";n.r(t);var a,s=n(0),r=n.n(s),i=n(9),c=n.n(i),o=(n(88),n(52)),l=n.n(o),u=n(59),p=n(25),d=n(37),j=n(152),b=n(156),h=n(157),f=n(158),m=n(100),O=n(164),g=n(155),x=n(159),v=n(163),w=n(145),y=n(48),S=n(161),k=n(14),A=n(60),L=n(70),R=n(62),C=n(2),N={display:"flex",flexDirection:"row",flexWrap:"wrap",marginTop:16},T={display:"inline-flex",borderRadius:2,border:"1px solid #eaeaea",marginBottom:8,marginRight:8,width:300,height:300,padding:4,boxSizing:"border-box"},I={display:"flex",minWidth:0,overflow:"hidden"},Q={display:"block",width:"auto",height:"100%"},D=R.a.div(a||(a=Object(A.a)(["\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 20px;\n  border-width: 2px;\n  border-radius: 2px;\n  border-color: ",";\n  border-style: dashed;\n  background-color: #fafafa;\n  color: #bdbdbd;\n  outline: none;\n  transition: border .24s ease-in-out;\n"])),(function(e){return function(e){return e.isDragAccept?"#00e676":e.isDragReject?"#ff1744":e.isDragActive?"#2196f3":"#eeeeee"}(e)}));function F(e){var t=Object(k.a)({},e),n=Object(s.useState)([]),a=Object(p.a)(n,2),i=a[0],c=a[1],o=Object(L.a)({accept:"image/*",onDrop:function(e){c(e.map((function(e){return Object.assign(e,{preview:URL.createObjectURL(e)})}))),t.parentCallback(e[0])}}),l=o.getRootProps,u=o.getInputProps,d=o.isDragActive,j=o.isDragAccept,b=o.isDragReject,h=i.map((function(e){return Object(C.jsx)("div",{style:T,children:Object(C.jsx)("div",{style:I,children:Object(C.jsx)("img",{src:e.preview,style:Q})})},e.name)}));return Object(s.useEffect)((function(){return function(){i.forEach((function(e){return URL.revokeObjectURL(e.preview)}))}}),[i]),Object(C.jsxs)(r.a.Fragment,{children:[Object(C.jsx)(y.a,{variant:"h6",gutterBottom:!0,children:"Upload images to check"}),Object(C.jsxs)("div",{className:"container",children:[Object(C.jsxs)(D,Object(k.a)(Object(k.a)({},l({className:"dropzone",isDragActive:d,isDragAccept:j,isDragReject:b})),{},{children:[Object(C.jsx)("input",Object(k.a)({},u())),Object(C.jsx)("p",{children:"Drag 'n' drop some files here, or click to select files"}),Object(C.jsx)("em",{children:"(Only *.jpeg and *.png images will be accepted)"})]})),Object(C.jsx)("aside",{style:N,children:h})]})]})}var B=n(15),P=n(16),z=n(45),E=n(18),q=n(17),U=n(146),W=n(162),_=n(144),J=(n(58),function(e){Object(E.a)(n,e);var t=Object(q.a)(n);function n(){var e;Object(B.a)(this,n);for(var a=arguments.length,s=new Array(a),i=0;i<a;i++)s[i]=arguments[i];return(e=t.call.apply(t,[this].concat(s))).inputRef=r.a.createRef(),e.errorRef=r.a.createRef(),e.handleSubmit=function(t){if(console.log(e.inputRef.current.value),t.preventDefault(),""===e.inputRef.current.value)return e.errorRef.current.classList.add("active"),null;e.errorRef.current.classList.remove("active"),e.props.addToList(e.inputRef.current.value),t.currentTarget.reset()},e}return Object(P.a)(n,[{key:"render",value:function(){return Object(C.jsxs)("form",{onSubmit:this.handleSubmit,style:{display:"flex"},children:[Object(C.jsx)(_.a,{placeholder:"Solution number",type:"number",inputProps:{"aria-label":"Description"},onChange:this.handleChange,inputRef:this.inputRef,style:{marginLeft:"10px",marginRight:"30px",width:"80%"}}),Object(C.jsx)(w.a,{type:"submit",variant:"contained",color:"primary",children:"Add"}),Object(C.jsx)("p",{ref:this.errorRef,className:"error",children:"Error, must enter a value!"})]})}}]),n}(s.Component)),H=n(148),M=n(149),V=n(147),Y={Icon:{marginLeft:"auto"},Paper:{margin:"auto",padding:10,display:"flex",alignItems:"center",marginTop:10,width:500},numbering:{fontWeight:"bold",marginRight:10},answer:{color:"black"}},G=function(e){Object(E.a)(n,e);var t=Object(q.a)(n);function n(){var e;Object(B.a)(this,n);for(var a=arguments.length,s=new Array(a),i=0;i<a;i++)s[i]=arguments[i];return(e=t.call.apply(t,[this].concat(s))).state={fade:!1},e.gridRef=r.a.createRef(),e.deleteAnswer=function(){e.setState({fade:!0}),new Promise((function(e,t){setTimeout((function(){e(!0)}),500)})).then((function(){return e.props.deleteAnswer(e.props.index)})),console.log(e.state)},e}return Object(P.a)(n,[{key:"render",value:function(){var e=this,t=this.state.fade?"fade-out":"";return Object(C.jsx)(U.a,{xs:12,className:"".concat(t),item:!0,ref:this.gridRef,children:Object(C.jsxs)(m.a,{elevation:2,style:Y.Paper,children:[Object(C.jsxs)("span",{style:Y.numbering,children:[this.props.index,")"]}),Object(C.jsxs)("span",{style:Y.answer,children:[" ",this.props.answer]}),Object(C.jsx)(V.a,{color:"primary","aria-label":"Edit",style:Y.Icon,onClick:function(){return e.props.updateAnswer(e.props.index)},children:Object(C.jsx)(H.a,{fontSize:"small"})}),Object(C.jsx)(V.a,{color:"secondary","aria-label":"Delete",onClick:this.deleteAnswer,children:Object(C.jsx)(M.a,{fontSize:"small"})})]})},this.props.index)}}]),n}(s.Component),K=n(150),X={Icon:{marginLeft:"auto",width:"10%"},Paper:{margin:"auto",padding:10,alignItems:"center",marginTop:10,width:500}},Z=function(e){Object(E.a)(n,e);var t=Object(q.a)(n);function n(){var e;Object(B.a)(this,n);for(var a=arguments.length,s=new Array(a),i=0;i<a;i++)s[i]=arguments[i];return(e=t.call.apply(t,[this].concat(s))).inputRef=r.a.createRef(),e}return Object(P.a)(n,[{key:"render",value:function(){var e=this;return Object(C.jsx)(U.a,{xs:12,item:!0,children:Object(C.jsx)(m.a,{elevation:2,style:X.Paper,children:Object(C.jsxs)("form",{onSubmit:function(){e.props.saveAnswer(e.props.index,e.inputRef.current.value)},style:{display:"flex"},children:[Object(C.jsx)(_.a,{style:{width:"90%"},type:"number",defaultValue:this.props.answer,inputRef:this.inputRef}),Object(C.jsx)(V.a,{type:"submit",color:"primary","aria-label":"Add",style:X.Icon,children:Object(C.jsx)(K.a,{fontSize:"small"})})]})})},this.props.index)}}]),n}(s.Component),$=function(e){Object(E.a)(n,e);var t=Object(q.a)(n);function n(){var e;Object(B.a)(this,n);for(var a=arguments.length,s=new Array(a),r=0;r<a;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).renderAnswer=function(t){return null==e.props.list[t]?null:"active"===e.props.list[t].status?Object(C.jsx)(G,{index:t,answer:e.props.list[t].answer,deleteAnswer:e.props.deleteAnswer,updateAnswer:e.props.updateAnswer},t):"editing"===e.props.list[t].status?Object(C.jsx)(Z,{index:t,answer:e.props.list[t].answer,saveAnswer:e.props.saveAnswer},t):void 0},e}return Object(P.a)(n,[{key:"render",value:function(){var e=this;return Object(C.jsx)(U.a,{container:!0,children:Object.keys(this.props.list).map((function(t){return e.renderAnswer(t)}))})}}]),n}(r.a.Component),ee=n(47),te=n.n(ee),ne=function(e){Object(E.a)(n,e);var t=Object(q.a)(n);function n(e){var a;return Object(B.a)(this,n),(a=t.call(this,e)).addToList=function(e){var t=te.a.size(a.state.answersSolutionsList)+1,n=Object(k.a)({},a.state.answersSolutionsList);n[t]={answer:e,status:"active"},a.setState({answersSolutionsList:n}),a.props.parentCallback({numberOfQuestions:a.state.numberOfQuestions,answersSolutionsList:n})},a.deleteAnswer=function(e){var t=Object(k.a)({},a.state.answersSolutionsList);t[e]=null,a.setState({answersSolutionsList:t}),a.props.parentCallback({numberOfQuestions:a.state.numberOfQuestions,answersSolutionsList:t})},a.updateAnswer=function(e){var t=Object(k.a)({},a.state.answersSolutionsList);t[e].status="editing",a.setState({answersSolutionsList:t}),a.props.parentCallback({numberOfQuestions:a.state.numberOfQuestions,answersSolutionsList:t})},a.saveAnswer=function(e,t){var n=Object(k.a)({},a.state.answersSolutionsList);n[e]={answer:t,status:"active"},a.setState({answersSolutionsList:n}),a.props.parentCallback({numberOfQuestions:a.state.numberOfQuestions,answersSolutionsList:n})},a.state={numberOfQuestions:0,answersSolutionsList:{}},a.handleNumberOfQuestionsChange=a.handleNumberOfQuestionsChange.bind(Object(z.a)(a)),a}return Object(P.a)(n,[{key:"handleNumberOfQuestionsChange",value:function(e){this.setState({numberOfQuestions:e.target.value}),this.props.parentCallback({numberOfQuestions:e.target.value,answersSolutionsList:this.state.answersSolutionsList})}},{key:"render",value:function(){return Object(C.jsxs)(r.a.Fragment,{children:[Object(C.jsx)(y.a,{variant:"h6",gutterBottom:!0,children:"Fill the correct solutions for the test"}),Object(C.jsxs)(U.a,{container:!0,spacing:3,children:[Object(C.jsx)(U.a,{item:!0,xs:12,md:12,children:Object(C.jsx)(W.a,{required:!0,type:"number",fullWidth:!0,id:"standard-basic",label:"Number of questions In test",value:this.state.numberOfQuestions,onChange:this.handleNumberOfQuestionsChange})}),Object(C.jsxs)(U.a,{container:!0,spacing:0,children:[Object(C.jsx)(U.a,{item:!0,xs:12,children:Object(C.jsx)(J,{addToList:this.addToList})}),Object(C.jsx)($,{deleteAnswer:this.deleteAnswer,list:this.state.answersSolutionsList,updateAnswer:this.updateAnswer,saveAnswer:this.saveAnswer})]})]})]})}}]),n}(s.Component),ae=n(151),se=n(153),re=n(154),ie=Object(j.a)((function(e){return{listItem:{padding:e.spacing(1,0)},total:{fontWeight:700},title:{marginTop:e.spacing(2)}}}));function ce(e){var t=ie(),n=Object(k.a)({},e);return n.data&&n.data!=={}?Object(C.jsxs)(r.a.Fragment,{children:[Object(C.jsx)(y.a,{variant:"h6",gutterBottom:!0,children:"Results"}),Object(C.jsxs)(ae.a,{disablePadding:!0,children:[n.data.answers.map((function(e){return Object(C.jsxs)(se.a,{className:t.listItem,children:[Object(C.jsx)(re.a,{primary:"Question  "+e.question}),Object(C.jsx)(y.a,{variant:"subtitle1",className:t.total,children:(1==e.answer).toString().toUpperCase()})]})})),Object(C.jsx)(g.a,{}),Object(C.jsxs)(se.a,{className:t.listItem,children:[Object(C.jsx)(re.a,{primary:"Total correct"}),Object(C.jsx)(y.a,{variant:"subtitle1",className:t.total,children:n.data.total_correct})]}),Object(C.jsxs)(se.a,{className:t.listItem,children:[Object(C.jsx)(re.a,{primary:"Total wrong"}),Object(C.jsx)(y.a,{variant:"subtitle1",className:t.total,children:n.data.total_wrong})]})]})]}):Object(C.jsx)(r.a.Fragment,{children:"Results"})}var oe=n(160),le=Object(j.a)((function(e){return{appBar:{position:"relative",background:"#282c34",color:"white",alignItems:"center"},footer:{padding:e.spacing(3,2),marginTop:"auto",background:"#282c34",color:"white"},layout:Object(d.a)({width:"auto",marginLeft:e.spacing(2),marginRight:e.spacing(2)},e.breakpoints.up(600+2*e.spacing(2)),{width:600,marginLeft:"auto",marginRight:"auto"}),paper:Object(d.a)({marginTop:e.spacing(3),marginBottom:e.spacing(3),padding:e.spacing(2)},e.breakpoints.up(600+2*e.spacing(3)),{marginTop:e.spacing(6),marginBottom:e.spacing(6),padding:e.spacing(3)}),stepper:{padding:e.spacing(3,0,5)},buttons:{display:"flex",justifyContent:"flex-end"},button:{marginTop:e.spacing(3),marginLeft:e.spacing(1)},progress:{marginTop:"auto",color:"green"},divider:{marginTop:e.spacing(3),marginLeft:"auto",marginRight:"auto"},listItem:{display:"block",textAlign:"center"}}})),ue=["Tests images","Correct answers","Results"];var pe=function(){var e=r.a.useState(0),t=Object(p.a)(e,2),n=t[0],a=t[1],s=r.a.useState(0),i=Object(p.a)(s,2),c=i[0],o=i[1],d=r.a.useState({}),j=Object(p.a)(d,2),k=j[0],A=j[1],L=r.a.useState({}),R=Object(p.a)(L,2),N=R[0],T=R[1],I=le(),Q=r.a.useState(0),D=Object(p.a)(Q,2),B=D[0],P=D[1],z=function(e){a(e)},E=function(e){A(e)};return Object(C.jsx)("div",{className:"App",children:Object(C.jsxs)(r.a.Fragment,{children:[Object(C.jsx)(b.a,{}),Object(C.jsx)(h.a,{position:"absolute",color:"default",className:I.appBar,children:Object(C.jsx)(f.a,{children:Object(C.jsx)(y.a,{variant:"h6",color:"inherit",noWrap:!0,children:"Automatic multiple choice checker"})})}),Object(C.jsx)("main",{className:I.layout,children:Object(C.jsxs)(m.a,{className:I.paper,children:[Object(C.jsx)(O.a,{activeStep:B,className:I.stepper,children:ue.map((function(e){return Object(C.jsx)(x.a,{children:Object(C.jsx)(v.a,{children:e})},e)}))}),Object(C.jsxs)(r.a.Fragment,{children:[B===ue.length?Object(C.jsxs)(r.a.Fragment,{children:[Object(C.jsx)(y.a,{variant:"h5",gutterBottom:!0,children:"Thank you for using our service \ud83d\udc4f\ud83c\udffb"}),Object(C.jsx)(w.a,{variant:"contained",color:"primary",onClick:function(){a(0),A({}),T({}),P(0),o(0)},className:I.button,children:"Again"})]}):Object(C.jsxs)(r.a.Fragment,{children:[function(e){switch(e){case 0:return Object(C.jsx)(F,{parentCallback:z});case 1:return Object(C.jsx)(ne,{parentCallback:E});case 2:return Object(C.jsx)(ce,{data:N});default:throw new Error("Unknown step")}}(B),Object(C.jsxs)("div",{className:I.buttons,children:[0!==B&&2!==B&&Object(C.jsx)(w.a,{onClick:function(){P(B-1)},className:I.button,disabled:c,children:"Back"}),c?Object(C.jsx)(oe.a,{className:I.progress}):Object(C.jsx)(w.a,{variant:"contained",color:"primary",onClick:function(){if(B===ue.length-2){var e=new FormData;if(null===k.numberOfQuestions||0===k.numberOfQuestions)return void alert("please enter the number of questions in the test");if(null===k.answersSolutionsList||k.answersSolutionsList==={}||te.a.size(k.answersSolutionsList)!==parseInt(k.numberOfQuestions))return void alert("please enter answers for the number of questions in the test");for(var t in e.append("questions_count",k.numberOfQuestions),k.answersSolutionsList)e.append(t,k.answersSolutionsList[t].answer);e.append("images",n,n.name);var a={headers:{Accept:"application/json"},method:"POST",body:e};o(1),fetch("/api/checkTest",a).then((function(e){return e.json()})).then((function(e){var t=setInterval(Object(u.a)(l.a.mark((function n(){var a,s;return l.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("/api/returnResults/"+e.task_id,{headers:{"Content-Type":"application/json",Accept:"application/json"}});case 2:return a=n.sent,n.next=5,a.json();case 5:"finished"==(s=n.sent).status?(T(s.result),o(0),clearInterval(t),P(B+1)):"not started"==s.status&&(clearInterval(t),alert("internal error, please try again"));case 7:case"end":return n.stop()}}),n)}))),3e3)}))}if(B===ue.length-3){if(null===n||0===n)return void alert("please enter an image of a test to check");P(B+1)}B===ue.length-1&&P(B+1)},className:I.button,disabled:c,children:B===ue.length-2?"Submit":"Next"})]})]}),c?Object(C.jsx)("span",{children:"Please wait for the results \ud83d\udd0e"}):null]}),Object(C.jsx)(g.a,{className:I.divider}),Object(C.jsx)("h3",{children:"Our assumptions:"}),Object(C.jsxs)(ae.a,{children:[Object(C.jsx)(se.a,{className:I.listItem,children:Object(C.jsx)("span",{children:"1) Horizontal lines separate each question"})}),Object(C.jsx)(se.a,{className:I.listItem,children:Object(C.jsx)("span",{children:"2) Answer formatting is numeral, not alphabetic"})}),Object(C.jsx)(se.a,{className:I.listItem,children:Object(C.jsx)("span",{children:"3) Answers are Circled with a reasonable size and do not hide the number"})})]}),Object(C.jsx)("h3",{children:"Example:"}),Object(C.jsx)("img",{width:"75%",src:"./testExample.jpg",alt:"example"})]})}),Object(C.jsx)("footer",{className:I.footer,children:Object(C.jsx)(S.a,{maxWidth:"sm",children:Object(C.jsxs)(y.a,{variant:"body2",color:"inherit",align:"center",children:["Copyright \xa9 Roy and Batel ",(new Date).getFullYear(),"."]})})})]})})},de=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,166)).then((function(t){var n=t.getCLS,a=t.getFID,s=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),a(e),s(e),r(e),i(e)}))};c.a.render(Object(C.jsx)(r.a.StrictMode,{children:Object(C.jsx)(pe,{})}),document.getElementById("root")),de()}},[[99,1,2]]]);
//# sourceMappingURL=main.4223407d.chunk.js.map