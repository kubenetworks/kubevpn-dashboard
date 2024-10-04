/*! For license information please see 8361.b95c4a82.js.LICENSE.txt */
"use strict";(self.webpackChunkkubevpn_dashboard_web=self.webpackChunkkubevpn_dashboard_web||[]).push([["8361"],{79765:function(e,t,n){let r,i;n.r(t),n.d(t,{CompletionAdapter:function(){return tT},DefinitionAdapter:function(){return tO},DiagnosticsAdapter:function(){return tM},DocumentColorAdapter:function(){return tG},DocumentFormattingEditProvider:function(){return tB},DocumentHighlightAdapter:function(){return tV},DocumentLinkAdapter:function(){return tz},DocumentRangeFormattingEditProvider:function(){return tq},DocumentSymbolAdapter:function(){return tX},FoldingRangeAdapter:function(){return tJ},HoverAdapter:function(){return tN},ReferenceAdapter:function(){return tK},RenameAdapter:function(){return tH},SelectionRangeAdapter:function(){return tY},WorkerManager:function(){return tR},fromPosition:function(){return tD},fromRange:function(){return tP},setupMode:function(){return tZ},toRange:function(){return tF},toTextEdit:function(){return tj}});var o,a,s,u,c,d,l,g,f,h,p,m,v,b,_,k,y,w,I,x,E,A,C,S,R,L,M,T,D,P,F,j,N,U,V,O,W,K,H,X,$,z,B,q,Q,G,J,Y,Z,ee,et,en,er,ei,eo,ea,es,eu,ec,ed,el,eg,ef,eh,ep,em,ev,eb,e_,ek,ey,ew,eI,ex,eE,eA,eC,eS,eR,eL,eM,eT,eD,eP,eF,ej,eN,eU,eV,eO,eW,eK,eH,eX,e$,ez,eB,eq,eQ,eG,eJ,eY,eZ,e0,e1,e2,e4,e3,e7,e6,e8,e5,e9,te,tt,tn,tr,ti,to,ta,ts,tu,tc,td,tl,tg,tf,th,tp,tm,tv,tb,t_,tk,ty,tw=n(60561),tI=Object.defineProperty,tx=Object.getOwnPropertyDescriptor,tE=Object.getOwnPropertyNames,tA=Object.prototype.hasOwnProperty,tC=(e,t,n,r)=>{if(t&&"object"==typeof t||"function"==typeof t)for(let i of tE(t))!tA.call(e,i)&&i!==n&&tI(e,i,{get:()=>t[i],enumerable:!(r=tx(t,i))||r.enumerable});return e},tS={};tC(tS,r=tw,"default");var tR=class{constructor(e){this._defaults=e,this._worker=null,this._client=null,this._idleCheckInterval=window.setInterval(()=>this._checkIfIdle(),3e4),this._lastUsedTime=0,this._configChangeListener=this._defaults.onDidChange(()=>this._stopWorker())}_stopWorker(){this._worker&&(this._worker.dispose(),this._worker=null),this._client=null}dispose(){clearInterval(this._idleCheckInterval),this._configChangeListener.dispose(),this._stopWorker()}_checkIfIdle(){if(!!this._worker)Date.now()-this._lastUsedTime>12e4&&this._stopWorker()}_getClient(){return this._lastUsedTime=Date.now(),!this._client&&(this._worker=tS.editor.createWebWorker({moduleId:"vs/language/css/cssWorker",label:this._defaults.languageId,createData:{options:this._defaults.options,languageId:this._defaults.languageId}}),this._client=this._worker.getProxy()),this._client}getLanguageServiceWorker(...e){let t;return this._getClient().then(e=>{t=e}).then(t=>{if(this._worker)return this._worker.withSyncedResources(e)}).then(e=>t)}};(ea||(ea={})).is=function(e){return"string"==typeof e},(es||(es={})).is=function(e){return"string"==typeof e},(o=eu||(eu={})).MIN_VALUE=-2147483648,o.MAX_VALUE=2147483647,o.is=function(e){return"number"==typeof e&&o.MIN_VALUE<=e&&e<=o.MAX_VALUE},(a=ec||(ec={})).MIN_VALUE=0,a.MAX_VALUE=2147483647,a.is=function(e){return"number"==typeof e&&a.MIN_VALUE<=e&&e<=a.MAX_VALUE},(s=ed||(ed={})).create=function(e,t){return e===Number.MAX_VALUE&&(e=ec.MAX_VALUE),t===Number.MAX_VALUE&&(t=ec.MAX_VALUE),{line:e,character:t}},s.is=function(e){return ty.objectLiteral(e)&&ty.uinteger(e.line)&&ty.uinteger(e.character)},(u=el||(el={})).create=function(e,t,n,r){if(ty.uinteger(e)&&ty.uinteger(t)&&ty.uinteger(n)&&ty.uinteger(r))return{start:ed.create(e,t),end:ed.create(n,r)};if(ed.is(e)&&ed.is(t))return{start:e,end:t};throw Error(`Range#create called with invalid arguments[${e}, ${t}, ${n}, ${r}]`)},u.is=function(e){return ty.objectLiteral(e)&&ed.is(e.start)&&ed.is(e.end)},(c=eg||(eg={})).create=function(e,t){return{uri:e,range:t}},c.is=function(e){return ty.objectLiteral(e)&&el.is(e.range)&&(ty.string(e.uri)||ty.undefined(e.uri))},(d=ef||(ef={})).create=function(e,t,n,r){return{targetUri:e,targetRange:t,targetSelectionRange:n,originSelectionRange:r}},d.is=function(e){return ty.objectLiteral(e)&&el.is(e.targetRange)&&ty.string(e.targetUri)&&el.is(e.targetSelectionRange)&&(el.is(e.originSelectionRange)||ty.undefined(e.originSelectionRange))},(l=eh||(eh={})).create=function(e,t,n,r){return{red:e,green:t,blue:n,alpha:r}},l.is=function(e){return ty.objectLiteral(e)&&ty.numberRange(e.red,0,1)&&ty.numberRange(e.green,0,1)&&ty.numberRange(e.blue,0,1)&&ty.numberRange(e.alpha,0,1)},(g=ep||(ep={})).create=function(e,t){return{range:e,color:t}},g.is=function(e){return ty.objectLiteral(e)&&el.is(e.range)&&eh.is(e.color)},(f=em||(em={})).create=function(e,t,n){return{label:e,textEdit:t,additionalTextEdits:n}},f.is=function(e){return ty.objectLiteral(e)&&ty.string(e.label)&&(ty.undefined(e.textEdit)||eE.is(e))&&(ty.undefined(e.additionalTextEdits)||ty.typedArray(e.additionalTextEdits,eE.is))},(h=ev||(ev={})).Comment="comment",h.Imports="imports",h.Region="region",(p=eb||(eb={})).create=function(e,t,n,r,i,o){let a={startLine:e,endLine:t};return ty.defined(n)&&(a.startCharacter=n),ty.defined(r)&&(a.endCharacter=r),ty.defined(i)&&(a.kind=i),ty.defined(o)&&(a.collapsedText=o),a},p.is=function(e){return ty.objectLiteral(e)&&ty.uinteger(e.startLine)&&ty.uinteger(e.startLine)&&(ty.undefined(e.startCharacter)||ty.uinteger(e.startCharacter))&&(ty.undefined(e.endCharacter)||ty.uinteger(e.endCharacter))&&(ty.undefined(e.kind)||ty.string(e.kind))},(m=e_||(e_={})).create=function(e,t){return{location:e,message:t}},m.is=function(e){return ty.defined(e)&&eg.is(e.location)&&ty.string(e.message)},(v=ek||(ek={})).Error=1,v.Warning=2,v.Information=3,v.Hint=4,(b=ey||(ey={})).Unnecessary=1,b.Deprecated=2,(ew||(ew={})).is=function(e){return ty.objectLiteral(e)&&ty.string(e.href)},(_=eI||(eI={})).create=function(e,t,n,r,i,o){let a={range:e,message:t};return ty.defined(n)&&(a.severity=n),ty.defined(r)&&(a.code=r),ty.defined(i)&&(a.source=i),ty.defined(o)&&(a.relatedInformation=o),a},_.is=function(e){var t;return ty.defined(e)&&el.is(e.range)&&ty.string(e.message)&&(ty.number(e.severity)||ty.undefined(e.severity))&&(ty.integer(e.code)||ty.string(e.code)||ty.undefined(e.code))&&(ty.undefined(e.codeDescription)||ty.string(null===(t=e.codeDescription)||void 0===t?void 0:t.href))&&(ty.string(e.source)||ty.undefined(e.source))&&(ty.undefined(e.relatedInformation)||ty.typedArray(e.relatedInformation,e_.is))},(k=ex||(ex={})).create=function(e,t,...n){let r={title:e,command:t};return ty.defined(n)&&n.length>0&&(r.arguments=n),r},k.is=function(e){return ty.defined(e)&&ty.string(e.title)&&ty.string(e.command)},(y=eE||(eE={})).replace=function(e,t){return{range:e,newText:t}},y.insert=function(e,t){return{range:{start:e,end:e},newText:t}},y.del=function(e){return{range:e,newText:""}},y.is=function(e){return ty.objectLiteral(e)&&ty.string(e.newText)&&el.is(e.range)},(w=eA||(eA={})).create=function(e,t,n){let r={label:e};return void 0!==t&&(r.needsConfirmation=t),void 0!==n&&(r.description=n),r},w.is=function(e){return ty.objectLiteral(e)&&ty.string(e.label)&&(ty.boolean(e.needsConfirmation)||void 0===e.needsConfirmation)&&(ty.string(e.description)||void 0===e.description)},(eC||(eC={})).is=function(e){return ty.string(e)},(I=eS||(eS={})).replace=function(e,t,n){return{range:e,newText:t,annotationId:n}},I.insert=function(e,t,n){return{range:{start:e,end:e},newText:t,annotationId:n}},I.del=function(e,t){return{range:e,newText:"",annotationId:t}},I.is=function(e){return eE.is(e)&&(eA.is(e.annotationId)||eC.is(e.annotationId))},(x=eR||(eR={})).create=function(e,t){return{textDocument:e,edits:t}},x.is=function(e){return ty.defined(e)&&ej.is(e.textDocument)&&Array.isArray(e.edits)},(E=eL||(eL={})).create=function(e,t,n){let r={kind:"create",uri:e};return void 0!==t&&(void 0!==t.overwrite||void 0!==t.ignoreIfExists)&&(r.options=t),void 0!==n&&(r.annotationId=n),r},E.is=function(e){return e&&"create"===e.kind&&ty.string(e.uri)&&(void 0===e.options||(void 0===e.options.overwrite||ty.boolean(e.options.overwrite))&&(void 0===e.options.ignoreIfExists||ty.boolean(e.options.ignoreIfExists)))&&(void 0===e.annotationId||eC.is(e.annotationId))},(A=eM||(eM={})).create=function(e,t,n,r){let i={kind:"rename",oldUri:e,newUri:t};return void 0!==n&&(void 0!==n.overwrite||void 0!==n.ignoreIfExists)&&(i.options=n),void 0!==r&&(i.annotationId=r),i},A.is=function(e){return e&&"rename"===e.kind&&ty.string(e.oldUri)&&ty.string(e.newUri)&&(void 0===e.options||(void 0===e.options.overwrite||ty.boolean(e.options.overwrite))&&(void 0===e.options.ignoreIfExists||ty.boolean(e.options.ignoreIfExists)))&&(void 0===e.annotationId||eC.is(e.annotationId))},(C=eT||(eT={})).create=function(e,t,n){let r={kind:"delete",uri:e};return void 0!==t&&(void 0!==t.recursive||void 0!==t.ignoreIfNotExists)&&(r.options=t),void 0!==n&&(r.annotationId=n),r},C.is=function(e){return e&&"delete"===e.kind&&ty.string(e.uri)&&(void 0===e.options||(void 0===e.options.recursive||ty.boolean(e.options.recursive))&&(void 0===e.options.ignoreIfNotExists||ty.boolean(e.options.ignoreIfNotExists)))&&(void 0===e.annotationId||eC.is(e.annotationId))},(eD||(eD={})).is=function(e){return e&&(void 0!==e.changes||void 0!==e.documentChanges)&&(void 0===e.documentChanges||e.documentChanges.every(e=>ty.string(e.kind)?eL.is(e)||eM.is(e)||eT.is(e):eR.is(e)))},(S=eP||(eP={})).create=function(e){return{uri:e}},S.is=function(e){return ty.defined(e)&&ty.string(e.uri)},(R=eF||(eF={})).create=function(e,t){return{uri:e,version:t}},R.is=function(e){return ty.defined(e)&&ty.string(e.uri)&&ty.integer(e.version)},(L=ej||(ej={})).create=function(e,t){return{uri:e,version:t}},L.is=function(e){return ty.defined(e)&&ty.string(e.uri)&&(null===e.version||ty.integer(e.version))},(M=eN||(eN={})).create=function(e,t,n,r){return{uri:e,languageId:t,version:n,text:r}},M.is=function(e){return ty.defined(e)&&ty.string(e.uri)&&ty.string(e.languageId)&&ty.integer(e.version)&&ty.string(e.text)},(T=eU||(eU={})).PlainText="plaintext",T.Markdown="markdown",T.is=function(e){return e===T.PlainText||e===T.Markdown},(eV||(eV={})).is=function(e){return ty.objectLiteral(e)&&eU.is(e.kind)&&ty.string(e.value)},(D=eO||(eO={})).Text=1,D.Method=2,D.Function=3,D.Constructor=4,D.Field=5,D.Variable=6,D.Class=7,D.Interface=8,D.Module=9,D.Property=10,D.Unit=11,D.Value=12,D.Enum=13,D.Keyword=14,D.Snippet=15,D.Color=16,D.File=17,D.Reference=18,D.Folder=19,D.EnumMember=20,D.Constant=21,D.Struct=22,D.Event=23,D.Operator=24,D.TypeParameter=25,(P=eW||(eW={})).PlainText=1,P.Snippet=2,(eK||(eK={})).Deprecated=1,(F=eH||(eH={})).create=function(e,t,n){return{newText:e,insert:t,replace:n}},F.is=function(e){return e&&ty.string(e.newText)&&el.is(e.insert)&&el.is(e.replace)},(j=eX||(eX={})).asIs=1,j.adjustIndentation=2,(e$||(e$={})).is=function(e){return e&&(ty.string(e.detail)||void 0===e.detail)&&(ty.string(e.description)||void 0===e.description)},(ez||(ez={})).create=function(e){return{label:e}},(eB||(eB={})).create=function(e,t){return{items:e||[],isIncomplete:!!t}},(N=eq||(eq={})).fromPlainText=function(e){return e.replace(/[\\`*_{}[\]()#+\-.!]/g,"\\$&")},N.is=function(e){return ty.string(e)||ty.objectLiteral(e)&&ty.string(e.language)&&ty.string(e.value)},(eQ||(eQ={})).is=function(e){return!!e&&ty.objectLiteral(e)&&(eV.is(e.contents)||eq.is(e.contents)||ty.typedArray(e.contents,eq.is))&&(void 0===e.range||el.is(e.range))},(eG||(eG={})).create=function(e,t){return t?{label:e,documentation:t}:{label:e}},(eJ||(eJ={})).create=function(e,t,...n){let r={label:e};return ty.defined(t)&&(r.documentation=t),ty.defined(n)?r.parameters=n:r.parameters=[],r},(U=eY||(eY={})).Text=1,U.Read=2,U.Write=3,(eZ||(eZ={})).create=function(e,t){let n={range:e};return ty.number(t)&&(n.kind=t),n},(V=e0||(e0={})).File=1,V.Module=2,V.Namespace=3,V.Package=4,V.Class=5,V.Method=6,V.Property=7,V.Field=8,V.Constructor=9,V.Enum=10,V.Interface=11,V.Function=12,V.Variable=13,V.Constant=14,V.String=15,V.Number=16,V.Boolean=17,V.Array=18,V.Object=19,V.Key=20,V.Null=21,V.EnumMember=22,V.Struct=23,V.Event=24,V.Operator=25,V.TypeParameter=26,(e1||(e1={})).Deprecated=1,(e2||(e2={})).create=function(e,t,n,r,i){let o={name:e,kind:t,location:{uri:r,range:n}};return i&&(o.containerName=i),o},(e4||(e4={})).create=function(e,t,n,r){return void 0!==r?{name:e,kind:t,location:{uri:n,range:r}}:{name:e,kind:t,location:{uri:n}}},(O=e3||(e3={})).create=function(e,t,n,r,i,o){let a={name:e,detail:t,kind:n,range:r,selectionRange:i};return void 0!==o&&(a.children=o),a},O.is=function(e){return e&&ty.string(e.name)&&ty.number(e.kind)&&el.is(e.range)&&el.is(e.selectionRange)&&(void 0===e.detail||ty.string(e.detail))&&(void 0===e.deprecated||ty.boolean(e.deprecated))&&(void 0===e.children||Array.isArray(e.children))&&(void 0===e.tags||Array.isArray(e.tags))},(W=e7||(e7={})).Empty="",W.QuickFix="quickfix",W.Refactor="refactor",W.RefactorExtract="refactor.extract",W.RefactorInline="refactor.inline",W.RefactorRewrite="refactor.rewrite",W.Source="source",W.SourceOrganizeImports="source.organizeImports",W.SourceFixAll="source.fixAll",(K=e6||(e6={})).Invoked=1,K.Automatic=2,(H=e8||(e8={})).create=function(e,t,n){let r={diagnostics:e};return null!=t&&(r.only=t),null!=n&&(r.triggerKind=n),r},H.is=function(e){return ty.defined(e)&&ty.typedArray(e.diagnostics,eI.is)&&(void 0===e.only||ty.typedArray(e.only,ty.string))&&(void 0===e.triggerKind||e.triggerKind===e6.Invoked||e.triggerKind===e6.Automatic)},(X=e5||(e5={})).create=function(e,t,n){let r={title:e},i=!0;return"string"==typeof t?(i=!1,r.kind=t):ex.is(t)?r.command=t:r.edit=t,i&&void 0!==n&&(r.kind=n),r},X.is=function(e){return e&&ty.string(e.title)&&(void 0===e.diagnostics||ty.typedArray(e.diagnostics,eI.is))&&(void 0===e.kind||ty.string(e.kind))&&(void 0!==e.edit||void 0!==e.command)&&(void 0===e.command||ex.is(e.command))&&(void 0===e.isPreferred||ty.boolean(e.isPreferred))&&(void 0===e.edit||eD.is(e.edit))},($=e9||(e9={})).create=function(e,t){let n={range:e};return ty.defined(t)&&(n.data=t),n},$.is=function(e){return ty.defined(e)&&el.is(e.range)&&(ty.undefined(e.command)||ex.is(e.command))},(z=te||(te={})).create=function(e,t){return{tabSize:e,insertSpaces:t}},z.is=function(e){return ty.defined(e)&&ty.uinteger(e.tabSize)&&ty.boolean(e.insertSpaces)},(B=tt||(tt={})).create=function(e,t,n){return{range:e,target:t,data:n}},B.is=function(e){return ty.defined(e)&&el.is(e.range)&&(ty.undefined(e.target)||ty.string(e.target))},(q=tn||(tn={})).create=function(e,t){return{range:e,parent:t}},q.is=function(e){return ty.objectLiteral(e)&&el.is(e.range)&&(void 0===e.parent||q.is(e.parent))},(Q=tr||(tr={})).namespace="namespace",Q.type="type",Q.class="class",Q.enum="enum",Q.interface="interface",Q.struct="struct",Q.typeParameter="typeParameter",Q.parameter="parameter",Q.variable="variable",Q.property="property",Q.enumMember="enumMember",Q.event="event",Q.function="function",Q.method="method",Q.macro="macro",Q.keyword="keyword",Q.modifier="modifier",Q.comment="comment",Q.string="string",Q.number="number",Q.regexp="regexp",Q.operator="operator",Q.decorator="decorator",(G=ti||(ti={})).declaration="declaration",G.definition="definition",G.readonly="readonly",G.static="static",G.deprecated="deprecated",G.abstract="abstract",G.async="async",G.modification="modification",G.documentation="documentation",G.defaultLibrary="defaultLibrary",(to||(to={})).is=function(e){return ty.objectLiteral(e)&&(void 0===e.resultId||"string"==typeof e.resultId)&&Array.isArray(e.data)&&(0===e.data.length||"number"==typeof e.data[0])},(J=ta||(ta={})).create=function(e,t){return{range:e,text:t}},J.is=function(e){return null!=e&&el.is(e.range)&&ty.string(e.text)},(Y=ts||(ts={})).create=function(e,t,n){return{range:e,variableName:t,caseSensitiveLookup:n}},Y.is=function(e){return null!=e&&el.is(e.range)&&ty.boolean(e.caseSensitiveLookup)&&(ty.string(e.variableName)||void 0===e.variableName)},(Z=tu||(tu={})).create=function(e,t){return{range:e,expression:t}},Z.is=function(e){return null!=e&&el.is(e.range)&&(ty.string(e.expression)||void 0===e.expression)},(ee=tc||(tc={})).create=function(e,t){return{frameId:e,stoppedLocation:t}},ee.is=function(e){return ty.defined(e)&&el.is(e.stoppedLocation)},(et=td||(td={})).Type=1,et.Parameter=2,et.is=function(e){return 1===e||2===e},(en=tl||(tl={})).create=function(e){return{value:e}},en.is=function(e){return ty.objectLiteral(e)&&(void 0===e.tooltip||ty.string(e.tooltip)||eV.is(e.tooltip))&&(void 0===e.location||eg.is(e.location))&&(void 0===e.command||ex.is(e.command))},(er=tg||(tg={})).create=function(e,t,n){let r={position:e,label:t};return void 0!==n&&(r.kind=n),r},er.is=function(e){return ty.objectLiteral(e)&&ed.is(e.position)&&(ty.string(e.label)||ty.typedArray(e.label,tl.is))&&(void 0===e.kind||td.is(e.kind))&&void 0===e.textEdits||ty.typedArray(e.textEdits,eE.is)&&(void 0===e.tooltip||ty.string(e.tooltip)||eV.is(e.tooltip))&&(void 0===e.paddingLeft||ty.boolean(e.paddingLeft))&&(void 0===e.paddingRight||ty.boolean(e.paddingRight))},(tf||(tf={})).createSnippet=function(e){return{kind:"snippet",value:e}},(th||(th={})).create=function(e,t,n,r){return{insertText:e,filterText:t,range:n,command:r}},(tp||(tp={})).create=function(e){return{items:e}},(ei=tm||(tm={})).Invoked=0,ei.Automatic=1,(tv||(tv={})).create=function(e,t){return{range:e,text:t}},(tb||(tb={})).create=function(e,t){return{triggerKind:e,selectedCompletionInfo:t}},(t_||(t_={})).is=function(e){return ty.objectLiteral(e)&&es.is(e.uri)&&ty.string(e.name)},(eo=tk||(tk={})).create=function(e,t,n,r){return new tL(e,t,n,r)},eo.is=function(e){return!!(ty.defined(e)&&ty.string(e.uri)&&(ty.undefined(e.languageId)||ty.string(e.languageId))&&ty.uinteger(e.lineCount)&&ty.func(e.getText)&&ty.func(e.positionAt)&&ty.func(e.offsetAt))},eo.applyEdits=function(e,t){let n=e.getText(),r=function e(t,n){if(t.length<=1)return t;let r=t.length/2|0,i=t.slice(0,r),o=t.slice(r);e(i,n),e(o,n);let a=0,s=0,u=0;for(;a<i.length&&s<o.length;)0>=n(i[a],o[s])?t[u++]=i[a++]:t[u++]=o[s++];for(;a<i.length;)t[u++]=i[a++];for(;s<o.length;)t[u++]=o[s++];return t}(t,(e,t)=>{let n=e.range.start.line-t.range.start.line;return 0===n?e.range.start.character-t.range.start.character:n}),i=n.length;for(let t=r.length-1;t>=0;t--){let o=r[t],a=e.offsetAt(o.range.start),s=e.offsetAt(o.range.end);if(s<=i)n=n.substring(0,a)+o.newText+n.substring(s,n.length);else throw Error("Overlapping edit");i=a}return n};var tL=class{constructor(e,t,n,r){this._uri=e,this._languageId=t,this._version=n,this._content=r,this._lineOffsets=void 0}get uri(){return this._uri}get languageId(){return this._languageId}get version(){return this._version}getText(e){if(e){let t=this.offsetAt(e.start),n=this.offsetAt(e.end);return this._content.substring(t,n)}return this._content}update(e,t){this._content=e.text,this._version=t,this._lineOffsets=void 0}getLineOffsets(){if(void 0===this._lineOffsets){let e=[],t=this._content,n=!0;for(let r=0;r<t.length;r++){n&&(e.push(r),n=!1);let i=t.charAt(r);n="\r"===i||"\n"===i,"\r"===i&&r+1<t.length&&"\n"===t.charAt(r+1)&&r++}n&&t.length>0&&e.push(t.length),this._lineOffsets=e}return this._lineOffsets}positionAt(e){e=Math.max(Math.min(e,this._content.length),0);let t=this.getLineOffsets(),n=0,r=t.length;if(0===r)return ed.create(0,e);for(;n<r;){let i=Math.floor((n+r)/2);t[i]>e?r=i:n=i+1}let i=n-1;return ed.create(i,e-t[i])}offsetAt(e){let t=this.getLineOffsets();if(e.line>=t.length)return this._content.length;if(e.line<0)return 0;let n=t[e.line],r=e.line+1<t.length?t[e.line+1]:this._content.length;return Math.max(Math.min(n+e.character,r),n)}get lineCount(){return this.getLineOffsets().length}};!function(e){let t=Object.prototype.toString;e.defined=function(e){return void 0!==e};e.undefined=function(e){return void 0===e};e.boolean=function(e){return!0===e||!1===e};e.string=function(e){return"[object String]"===t.call(e)};e.number=function(e){return"[object Number]"===t.call(e)};e.numberRange=function(e,n,r){return"[object Number]"===t.call(e)&&n<=e&&e<=r};e.integer=function(e){return"[object Number]"===t.call(e)&&-2147483648<=e&&e<=2147483647};e.uinteger=function(e){return"[object Number]"===t.call(e)&&0<=e&&e<=2147483647};e.func=function(e){return"[object Function]"===t.call(e)};e.objectLiteral=function(e){return null!==e&&"object"==typeof e};e.typedArray=function(e,t){return Array.isArray(e)&&e.every(t)}}(ty||(ty={}));var tM=class{constructor(e,t,n){this._languageId=e,this._worker=t,this._disposables=[],this._listener=Object.create(null);let r=e=>{let t,n=e.getLanguageId();if(n===this._languageId)this._listener[e.uri.toString()]=e.onDidChangeContent(()=>{window.clearTimeout(t),t=window.setTimeout(()=>this._doValidate(e.uri,n),500)}),this._doValidate(e.uri,n)},i=e=>{tS.editor.setModelMarkers(e,this._languageId,[]);let t=e.uri.toString(),n=this._listener[t];n&&(n.dispose(),delete this._listener[t])};this._disposables.push(tS.editor.onDidCreateModel(r)),this._disposables.push(tS.editor.onWillDisposeModel(i)),this._disposables.push(tS.editor.onDidChangeModelLanguage(e=>{i(e.model),r(e.model)})),this._disposables.push(n(e=>{tS.editor.getModels().forEach(e=>{e.getLanguageId()===this._languageId&&(i(e),r(e))})})),this._disposables.push({dispose:()=>{for(let e in tS.editor.getModels().forEach(i),this._listener)this._listener[e].dispose()}}),tS.editor.getModels().forEach(r)}dispose(){this._disposables.forEach(e=>e&&e.dispose()),this._disposables.length=0}_doValidate(e,t){this._worker(e).then(t=>t.doValidation(e.toString())).then(n=>{let r=n.map(t=>(function(e,t){let n="number"==typeof t.code?String(t.code):t.code;return{severity:function(e){switch(e){case ek.Error:return tS.MarkerSeverity.Error;case ek.Warning:return tS.MarkerSeverity.Warning;case ek.Information:return tS.MarkerSeverity.Info;case ek.Hint:return tS.MarkerSeverity.Hint;default:return tS.MarkerSeverity.Info}}(t.severity),startLineNumber:t.range.start.line+1,startColumn:t.range.start.character+1,endLineNumber:t.range.end.line+1,endColumn:t.range.end.character+1,message:t.message,code:n,source:t.source}})(e,t)),i=tS.editor.getModel(e);i&&i.getLanguageId()===t&&tS.editor.setModelMarkers(i,t,r)}).then(void 0,e=>{console.error(e)})}},tT=class{constructor(e,t){this._worker=e,this._triggerCharacters=t}get triggerCharacters(){return this._triggerCharacters}provideCompletionItems(e,t,n,r){let i=e.uri;return this._worker(i).then(e=>e.doComplete(i.toString(),tD(t))).then(n=>{if(!n)return;let r=e.getWordUntilPosition(t),i=new tS.Range(t.lineNumber,r.startColumn,t.lineNumber,r.endColumn),o=n.items.map(e=>{let t={label:e.label,insertText:e.insertText||e.label,sortText:e.sortText,filterText:e.filterText,documentation:e.documentation,detail:e.detail,command:function(e){return e&&"editor.action.triggerSuggest"===e.command?{id:e.command,title:e.title,arguments:e.arguments}:void 0}(e.command),range:i,kind:function(e){let t=tS.languages.CompletionItemKind;switch(e){case eO.Text:return t.Text;case eO.Method:return t.Method;case eO.Function:return t.Function;case eO.Constructor:return t.Constructor;case eO.Field:return t.Field;case eO.Variable:return t.Variable;case eO.Class:return t.Class;case eO.Interface:return t.Interface;case eO.Module:return t.Module;case eO.Property:break;case eO.Unit:return t.Unit;case eO.Value:return t.Value;case eO.Enum:return t.Enum;case eO.Keyword:return t.Keyword;case eO.Snippet:return t.Snippet;case eO.Color:return t.Color;case eO.File:return t.File;case eO.Reference:return t.Reference}return t.Property}(e.kind)};return e.textEdit&&(function(e){return void 0!==e.insert&&void 0!==e.replace}(e.textEdit)?t.range={insert:tF(e.textEdit.insert),replace:tF(e.textEdit.replace)}:t.range=tF(e.textEdit.range),t.insertText=e.textEdit.newText),e.additionalTextEdits&&(t.additionalTextEdits=e.additionalTextEdits.map(tj)),e.insertTextFormat===eW.Snippet&&(t.insertTextRules=tS.languages.CompletionItemInsertTextRule.InsertAsSnippet),t});return{isIncomplete:n.isIncomplete,suggestions:o}})}};function tD(e){if(!!e)return{character:e.column-1,line:e.lineNumber-1}}function tP(e){if(!!e)return{start:{line:e.startLineNumber-1,character:e.startColumn-1},end:{line:e.endLineNumber-1,character:e.endColumn-1}}}function tF(e){if(!!e)return new tS.Range(e.start.line+1,e.start.character+1,e.end.line+1,e.end.character+1)}function tj(e){if(!!e)return{range:tF(e.range),text:e.newText}}var tN=class{constructor(e){this._worker=e}provideHover(e,t,n){let r=e.uri;return this._worker(r).then(e=>e.doHover(r.toString(),tD(t))).then(e=>{if(!!e)return{range:tF(e.range),contents:function(e){return e?Array.isArray(e)?e.map(tU):[tU(e)]:void 0}(e.contents)}})}};function tU(e){var t;if("string"==typeof e)return{value:e};if((t=e)&&"object"==typeof t&&"string"==typeof t.kind)return"plaintext"===e.kind?{value:e.value.replace(/[\\`*_{}[\]()#+\-.!]/g,"\\$&")}:{value:e.value};return{value:"```"+e.language+"\n"+e.value+"\n```\n"}}var tV=class{constructor(e){this._worker=e}provideDocumentHighlights(e,t,n){let r=e.uri;return this._worker(r).then(e=>e.findDocumentHighlights(r.toString(),tD(t))).then(e=>{if(!!e)return e.map(e=>({range:tF(e.range),kind:function(e){switch(e){case eY.Read:return tS.languages.DocumentHighlightKind.Read;case eY.Write:return tS.languages.DocumentHighlightKind.Write;case eY.Text:}return tS.languages.DocumentHighlightKind.Text}(e.kind)}))})}},tO=class{constructor(e){this._worker=e}provideDefinition(e,t,n){let r=e.uri;return this._worker(r).then(e=>e.findDefinition(r.toString(),tD(t))).then(e=>{if(!!e)return[tW(e)]})}};function tW(e){return{uri:tS.Uri.parse(e.uri),range:tF(e.range)}}var tK=class{constructor(e){this._worker=e}provideReferences(e,t,n,r){let i=e.uri;return this._worker(i).then(e=>e.findReferences(i.toString(),tD(t))).then(e=>{if(!!e)return e.map(tW)})}},tH=class{constructor(e){this._worker=e}provideRenameEdits(e,t,n,r){let i=e.uri;return this._worker(i).then(e=>e.doRename(i.toString(),tD(t),n)).then(e=>(function(e){if(!e||!e.changes)return;let t=[];for(let n in e.changes){let r=tS.Uri.parse(n);for(let i of e.changes[n])t.push({resource:r,versionId:void 0,textEdit:{range:tF(i.range),text:i.newText}})}return{edits:t}})(e))}},tX=class{constructor(e){this._worker=e}provideDocumentSymbols(e,t){let n=e.uri;return this._worker(n).then(e=>e.findDocumentSymbols(n.toString())).then(e=>{if(!!e)return e.map(e=>(function(e){return"children"in e})(e)?function e(t){return{name:t.name,detail:t.detail??"",kind:t$(t.kind),range:tF(t.range),selectionRange:tF(t.selectionRange),tags:t.tags??[],children:(t.children??[]).map(t=>e(t))}}(e):{name:e.name,detail:"",containerName:e.containerName,kind:t$(e.kind),range:tF(e.location.range),selectionRange:tF(e.location.range),tags:[]})})}};function t$(e){let t=tS.languages.SymbolKind;switch(e){case e0.File:return t.File;case e0.Module:return t.Module;case e0.Namespace:return t.Namespace;case e0.Package:return t.Package;case e0.Class:return t.Class;case e0.Method:return t.Method;case e0.Property:return t.Property;case e0.Field:return t.Field;case e0.Constructor:return t.Constructor;case e0.Enum:return t.Enum;case e0.Interface:return t.Interface;case e0.Function:break;case e0.Variable:return t.Variable;case e0.Constant:return t.Constant;case e0.String:return t.String;case e0.Number:return t.Number;case e0.Boolean:return t.Boolean;case e0.Array:return t.Array}return t.Function}var tz=class{constructor(e){this._worker=e}provideLinks(e,t){let n=e.uri;return this._worker(n).then(e=>e.findDocumentLinks(n.toString())).then(e=>{if(!!e)return{links:e.map(e=>({range:tF(e.range),url:e.target}))}})}},tB=class{constructor(e){this._worker=e}provideDocumentFormattingEdits(e,t,n){let r=e.uri;return this._worker(r).then(e=>e.format(r.toString(),null,tQ(t)).then(e=>{if(!!e&&0!==e.length)return e.map(tj)}))}},tq=class{constructor(e){this._worker=e,this.canFormatMultipleRanges=!1}provideDocumentRangeFormattingEdits(e,t,n,r){let i=e.uri;return this._worker(i).then(e=>e.format(i.toString(),tP(t),tQ(n)).then(e=>{if(!!e&&0!==e.length)return e.map(tj)}))}};function tQ(e){return{tabSize:e.tabSize,insertSpaces:e.insertSpaces}}var tG=class{constructor(e){this._worker=e}provideDocumentColors(e,t){let n=e.uri;return this._worker(n).then(e=>e.findDocumentColors(n.toString())).then(e=>{if(!!e)return e.map(e=>({color:e.color,range:tF(e.range)}))})}provideColorPresentations(e,t,n){let r=e.uri;return this._worker(r).then(e=>e.getColorPresentations(r.toString(),t.color,tP(t.range))).then(e=>{if(!!e)return e.map(e=>{let t={label:e.label};return e.textEdit&&(t.textEdit=tj(e.textEdit)),e.additionalTextEdits&&(t.additionalTextEdits=e.additionalTextEdits.map(tj)),t})})}},tJ=class{constructor(e){this._worker=e}provideFoldingRanges(e,t,n){let r=e.uri;return this._worker(r).then(e=>e.getFoldingRanges(r.toString(),t)).then(e=>{if(!!e)return e.map(e=>{let t={start:e.startLine+1,end:e.endLine+1};return void 0!==e.kind&&(t.kind=function(e){switch(e){case ev.Comment:return tS.languages.FoldingRangeKind.Comment;case ev.Imports:return tS.languages.FoldingRangeKind.Imports;case ev.Region:return tS.languages.FoldingRangeKind.Region}}(e.kind)),t})})}},tY=class{constructor(e){this._worker=e}provideSelectionRanges(e,t,n){let r=e.uri;return this._worker(r).then(e=>e.getSelectionRanges(r.toString(),t.map(tD))).then(e=>{if(!!e)return e.map(e=>{let t=[];for(;e;)t.push({range:tF(e.range)}),e=e.parent;return t})})}};function tZ(e){let t=[],n=[],r=new tR(e);t.push(r);let i=(...e)=>r.getLanguageServiceWorker(...e);return!function(){let{languageId:t,modeConfiguration:r}=e;t1(n),r.completionItems&&n.push(tS.languages.registerCompletionItemProvider(t,new tT(i,["/","-",":"]))),r.hovers&&n.push(tS.languages.registerHoverProvider(t,new tN(i))),r.documentHighlights&&n.push(tS.languages.registerDocumentHighlightProvider(t,new tV(i))),r.definitions&&n.push(tS.languages.registerDefinitionProvider(t,new tO(i))),r.references&&n.push(tS.languages.registerReferenceProvider(t,new tK(i))),r.documentSymbols&&n.push(tS.languages.registerDocumentSymbolProvider(t,new tX(i))),r.rename&&n.push(tS.languages.registerRenameProvider(t,new tH(i))),r.colors&&n.push(tS.languages.registerColorProvider(t,new tG(i))),r.foldingRanges&&n.push(tS.languages.registerFoldingRangeProvider(t,new tJ(i))),r.diagnostics&&n.push(new tM(t,i,e.onDidChange)),r.selectionRanges&&n.push(tS.languages.registerSelectionRangeProvider(t,new tY(i))),r.documentFormattingEdits&&n.push(tS.languages.registerDocumentFormattingEditProvider(t,new tB(i))),r.documentRangeFormattingEdits&&n.push(tS.languages.registerDocumentRangeFormattingEditProvider(t,new tq(i)))}(),t.push(t0(n)),t0(t)}function t0(e){return{dispose:()=>t1(e)}}function t1(e){for(;e.length;)e.pop().dispose()}}}]);