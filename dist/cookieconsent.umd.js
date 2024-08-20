/*!
* CookieConsent 3.0.1
* https://github.com/orestbida/cookieconsent
* Author Orest Bida
* Released under the MIT License
*/
var e,t;e=this,t=function(e){'use strict';const t='opt-in',o='opt-out',n='show--consent',s='show--preferences',a='disable--interaction',c='data-category',r='div',i='button',l='aria-hidden',d='btn-group',f='click',_='data-role',p='consentModal',u='preferencesModal';class g{constructor(){this.t={mode:t,revision:0,autoShow:!0,lazyHtmlGeneration:!0,autoClearCookies:!0,manageScriptTags:!0,hideFromBots:!0,cookie:{name:'cc_cookie',expiresAfterDays:182,domain:'',path:'/',sameSite:'Lax'}},this.o={i:{},l:'',_:{},p:{},u:{},m:[],v:!1,h:null,C:null,S:null,T:'',M:!0,k:!1,D:!1,A:!1,N:!1,H:[],j:!1,I:!0,P:[],V:!1,L:'',B:!1,F:[],O:[],R:[],q:[],G:!1,J:!1,U:!1,$:[],K:[],W:[],X:{},Y:{},Z:{},ee:{},te:{},oe:[]},this.ne={se:{},ae:{}},this.ce={},this.re={ie:'cc:onFirstConsent',le:'cc:onConsent',de:'cc:onChange',fe:'cc:onModalShow',_e:'cc:onModalHide',pe:'cc:onModalReady'}}}const m=new g,b=(e,t)=>e.indexOf(t),v=(e,t)=>-1!==b(e,t),y=e=>Array.isArray(e),h=e=>'string'==typeof e,w=e=>!!e&&'object'==typeof e&&!y(e),C=e=>'function'==typeof e,S=e=>Object.keys(e),x=e=>Array.from(new Set(e)),T=()=>document.activeElement,M=e=>e.preventDefault(),k=(e,t)=>e.querySelectorAll(t),D=e=>e.dispatchEvent(new Event('change')),E=e=>{const t=document.createElement(e);return e===i&&(t.type=e),t},A=(e,t,o)=>e.setAttribute(t,o),N=(e,t,o)=>{e.removeAttribute(o?'data-'+t:t)},H=(e,t,o)=>e.getAttribute(o?'data-'+t:t),j=(e,t)=>e.appendChild(t),I=(e,t)=>e.classList.add(t),P=(e,t)=>I(e,'cm__'+t),V=(e,t)=>I(e,'pm__'+t),L=(e,t)=>e.classList.remove(t),B=(e,t)=>e.classList.contains(t),F=e=>{if('object'!=typeof e)return e;if(e instanceof Date)return new Date(e.getTime());let t=Array.isArray(e)?[]:{};for(let o in e){let n=e[o];t[o]=F(n)}return t},O=()=>{const e={},{F:t,X:o,Y:n}=m.o;for(const s of t)e[s]=J(n[s],S(o[s]));return e},R=(e,t)=>dispatchEvent(new CustomEvent(e,{detail:t})),q=(e,t,o,n)=>{e.addEventListener(t,o),n&&m.o.m.push({ue:e,ge:t,me:o})},G=()=>{const e=m.t.cookie.expiresAfterDays;return C(e)?e(m.o.L):e},J=(e,t)=>{const o=e||[],n=t||[];return o.filter((e=>!v(n,e))).concat(n.filter((e=>!v(o,e))))},U=e=>{m.o.O=x(e),m.o.L=(()=>{let e='custom';const{O:t,F:o,R:n}=m.o,s=t.length;return s===o.length?e='all':s===n.length&&(e='necessary'),e})()},$=(e,t,o,n)=>{const s='accept-',{show:a,showPreferences:c,hide:r,hidePreferences:i,acceptCategory:l}=t,d=e||document,_=e=>k(d,`[data-cc="${e}"]`),p=(e,t)=>{M(e),l(t),i(),r()},u=_('show-preferencesModal'),g=_('show-consentModal'),b=_(s+'all'),v=_(s+'necessary'),y=_(s+'custom'),h=m.t.lazyHtmlGeneration;for(const e of u)A(e,'aria-haspopup','dialog'),q(e,f,(e=>{M(e),c()})),h&&(q(e,'mouseenter',(e=>{M(e),m.o.N||o(t,n)}),!0),q(e,'focus',(()=>{m.o.N||o(t,n)})));for(let e of g)A(e,'aria-haspopup','dialog'),q(e,f,(e=>{M(e),a(!0)}),!0);for(let e of b)q(e,f,(e=>{p(e,'all')}),!0);for(let e of y)q(e,f,(e=>{p(e)}),!0);for(let e of v)q(e,f,(e=>{p(e,[])}),!0)},z=(e,t)=>{e&&(t&&(e.tabIndex=-1),e.focus(),t&&e.removeAttribute('tabindex'))},Q=(e,t)=>{const o=n=>{n.target.removeEventListener('transitionend',o),'opacity'===n.propertyName&&'1'===getComputedStyle(e).opacity&&z((e=>1===e?m.ne.be:m.ne.ve)(t))};q(e,'transitionend',o)};let K;const W=e=>{clearTimeout(K),e?I(m.ne.ye,a):K=setTimeout((()=>{L(m.ne.ye,a)}),500)},X=['M 19.5 4.5 L 4.5 19.5 M 4.5 4.501 L 19.5 19.5','M 3.572 13.406 L 8.281 18.115 L 20.428 5.885','M 21.999 6.94 L 11.639 17.18 L 2.001 6.82 '],Y=(e=0,t=1.5)=>`<svg viewBox="0 0 24 24" stroke-width="${t}"><path d="${X[e]}"/></svg>`,Z=e=>{const t=m.ne,o=m.o;(e=>{const n=e===t.he,s=o.i.disablePageInteraction?t.ye:n?t.we:t.ye;q(s,'keydown',(t=>{if('Tab'!==t.key||!(n?o.D&&!o.A:o.A))return;const s=T(),a=n?o.$:o.K;0!==a.length&&(t.shiftKey?s!==a[0]&&e.contains(s)||(M(t),z(a[1])):s!==a[1]&&e.contains(s)||(M(t),z(a[0])))}),!0)})(e)},ee=['[href]',i,'input','details','[tabindex]'].map((e=>e+':not([tabindex="-1"])')).join(','),te=e=>{const{o:t,ne:o}=m,n=(e,t)=>{const o=k(e,ee);t[0]=o[0],t[1]=o[o.length-1]};1===e&&t.k&&n(o.he,t.$),2===e&&t.N&&n(o.Ce,t.K)},oe=(e,t,o)=>{const{de:n,le:s,ie:a,_e:c,pe:r,fe:i}=m.ce,l=m.re;if(t){const n={modalName:t};return e===l.fe?C(i)&&i(n):e===l._e?C(c)&&c(n):(n.modal=o,C(r)&&r(n)),R(e,n)}const d={cookie:m.o.u};e===l.ie?C(a)&&a(F(d)):e===l.le?C(s)&&s(F(d)):(d.changedCategories=m.o.P,d.changedServices=m.o.ee,C(n)&&n(F(d))),R(e,F(d))},ne=(e,t)=>{try{return e()}catch(e){return!t&&console.warn('CookieConsent:',e),!1}},se=e=>{const{Y:t,ee:o,F:n,X:s,oe:a,u:r,P:i}=m.o;for(const e of n){const n=o[e]||t[e]||[];for(const o of n){const n=s[e][o];if(!n)continue;const{onAccept:a,onReject:c}=n;!n.Se&&v(t[e],o)?(n.Se=!0,C(a)&&a()):n.Se&&!v(t[e],o)&&(n.Se=!1,C(c)&&c())}}if(!m.t.manageScriptTags)return;const l=a,d=e||r.categories||[],f=(e,n)=>{if(n>=e.length)return;const s=a[n];if(s.xe)return f(e,n+1);const r=s.Te,l=s.Me,_=s.ke,p=v(d,l),u=!!_&&v(t[l],_);if(!_&&!s.De&&p||!_&&s.De&&!p&&v(i,l)||_&&!s.De&&u||_&&s.De&&!u&&v(o[l]||[],_)){s.xe=!0;const t=H(r,'type',!0);N(r,'type',!!t),N(r,c);let o=H(r,'src',!0);o&&N(r,'src',!0);const a=E('script');a.textContent=r.innerHTML;for(const{nodeName:e}of r.attributes)A(a,e,r[e]||H(r,e));t&&(a.type=t),o?a.src=o:o=r.src;const i=!!o&&(!t||['text/javascript','module'].includes(t));if(i&&(a.onload=a.onerror=()=>{f(e,++n)}),r.replaceWith(a),i)return}f(e,++n)};f(l,0)},ae='bottom',ce='left',re='center',ie='right',le='inline',de='wide',fe='pm--',_e='box',pe=['middle','top',ae],ue=[ce,re,ie],ge={box:{Ee:[de,le],Ae:pe,Ne:ue,He:ae,je:ie},cloud:{Ee:[le],Ae:pe,Ne:ue,He:ae,je:re},bar:{Ee:[le],Ae:pe.slice(1),Ne:[],He:ae,je:''}},me={box:{Ee:[],Ae:[],Ne:[],He:'',je:''},bar:{Ee:[de],Ae:[],Ne:[ce,ie],He:'',je:ce}},be=e=>{const t=m.o.i.guiOptions,o=t&&t.consentModal,n=t&&t.preferencesModal,s=t&&t.BTSpreferencesModal;0===e&&ve(m.ne.he,ge,o,'cm--',_e,'cm'),1===e&&ve(m.ne.Ce,me,n,fe,_e,'pm'),2===e&&ve(m.ne.Ce,me,s,fe,_e,'bts-pm')},ve=(e,t,o,n,s,a)=>{e.className=a;const c=o&&o.layout,r=o&&o.position,i=o&&o.flipButtons,l=!o||!1!==o.equalWeightButtons,d=c&&c.split(' ')||[],f=d[0],_=d[1],p=f in t?f:s,u=t[p],g=v(u.Ee,_)&&_,b=r&&r.split(' ')||[],y=b[0],h=n===fe?b[0]:b[1],w=v(u.Ae,y)?y:u.He,C=v(u.Ne,h)?h:u.je,S=t=>{t&&I(e,n+t)};S(p),S(g),S(w),S(C),i&&S('flip');const x=a+'__btn--secondary';if('cm'===a){const{Ie:e,Pe:t}=m.ne;e&&(l?L(e,x):I(e,x)),t&&(l?L(t,x):I(t,x))}else{const{Ve:e}=m.ne;e&&(l?L(e,x):I(e,x))}},ye=(e,t)=>{const o=m.o,n=m.ne,{hide:s,hidePreferences:a,acceptCategory:c}=e,p=e=>{c(e),a(),s()},g=o.p&&o.p.preferencesModal;if(!g)return;const b=g.title,v=g.closeIconLabel,y=g.acceptAllBtn,C=g.acceptNecessaryBtn,x=g.savePreferencesBtn,T=g.sections||[],M=y||C||x;if(n.Le)n.Be=E(r),V(n.Be,'body');else{n.Le=E(r),I(n.Le,'pm-wrapper');const e=E('div');I(e,'pm-overlay'),j(n.Le,e),q(e,f,a),n.Ce=E(r),I(n.Ce,'pm'),A(n.Ce,'role','dialog'),A(n.Ce,l,!0),A(n.Ce,'aria-modal',!0),A(n.Ce,'aria-labelledby','pm__title'),q(n.ye,'keydown',(e=>{27===e.keyCode&&a()}),!0),n.Fe=E(r),V(n.Fe,'header'),n.Oe=E('h2'),V(n.Oe,'title'),n.Oe.id='pm__title',n.Re=E(i),V(n.Re,'close-btn'),A(n.Re,'aria-label',g.closeIconLabel||''),q(n.Re,f,a),n.qe=E('span'),n.qe.innerHTML=Y(),j(n.Re,n.qe),n.Ge=E(r),V(n.Ge,'body'),n.Je=E(r),V(n.Je,'footer');var k=E(r);I(k,'btns');var D=E(r),N=E(r);V(D,d),V(N,d),j(n.Je,D),j(n.Je,N),j(n.Fe,n.Oe),j(n.Fe,n.Re),n.ve=E(r),A(n.ve,'tabIndex',-1),j(n.Ce,n.ve),j(n.Ce,n.Fe),j(n.Ce,n.Ge),M&&j(n.Ce,n.Je),j(n.Le,n.Ce)}let H;b&&(n.Oe.innerHTML=b,v&&A(n.Re,'aria-label',v)),T.forEach(((e,t)=>{const s=e.title,a=e.description,c=e.linkedCategory,d=c&&o.B[c],_=e.cookieTable,p=_&&_.body,u=_&&_.caption,m=p&&p.length>0,b=!!d,v=b&&o.X[c],y=w(v)&&S(v)||[],C=b&&(!!a||!!m||S(v).length>0);var x=E(r);if(V(x,'section'),C||a){var T=E(r);V(T,'section-desc-wrapper')}let M=y.length;if(C&&M>0){const e=E(r);V(e,'section-services');for(const t of y){const o=v[t],n=o&&o.label||t,s=E(r),a=E(r),i=E(r),l=E(r);V(s,'service'),V(l,'service-title'),V(a,'service-header'),V(i,'service-icon');const f=he(n,t,d,!0,c);l.innerHTML=n,j(a,i),j(a,l),j(s,a),j(s,f),j(e,s)}j(T,e)}if(s){var k=E(r),D=E(b?i:r);if(V(k,'section-title-wrapper'),V(D,'section-title'),D.innerHTML=s,j(k,D),b){const e=E('span');e.innerHTML=Y(2,3.5),V(e,'section-arrow'),j(k,e),x.className+='--toggle';const t=he(s,c,d);let o=g.serviceCounterLabel;if(M>0&&h(o)){let e=E('span');V(e,'badge'),V(e,'service-counter'),A(e,l,!0),A(e,'data-servicecounter',M),o&&(o=o.split('|'),o=o.length>1&&M>1?o[1]:o[0],A(e,'data-counterlabel',o)),e.innerHTML=M+(o?' '+o:''),j(D,e)}if(C){V(x,'section--expandable');var N=c+'-desc';A(D,'aria-expanded',!1),A(D,'aria-controls',N)}j(k,t)}else A(D,'role','heading'),A(D,'aria-level','3');j(x,k)}if(a){var P=E('p');V(P,'section-desc'),P.innerHTML=a,j(T,P)}if(C&&(A(T,l,'true'),T.id=N,((e,t,o)=>{q(D,f,(()=>{B(t,'is-expanded')?(L(t,'is-expanded'),A(o,'aria-expanded','false'),A(e,l,'true')):(I(t,'is-expanded'),A(o,'aria-expanded','true'),A(e,l,'false'))}))})(T,x,D),m)){const e=E('table'),o=E('thead'),s=E('tbody');if(u){const t=E('caption');V(t,'table-caption'),t.innerHTML=u,e.appendChild(t)}V(e,'section-table'),V(o,'table-head'),V(s,'table-body');const a=_.headers,c=S(a),i=n.Ue.createDocumentFragment(),l=E('tr');for(const e of c){const o=a[e],n=E('th');n.id='cc__row-'+o+t,A(n,'scope','col'),V(n,'table-th'),n.innerHTML=o,j(i,n)}j(l,i),j(o,l);const d=n.Ue.createDocumentFragment();for(const e of p){const o=E('tr');V(o,'table-tr');for(const n of c){const s=a[n],c=e[n],i=E('td'),l=E(r);V(i,'table-td'),A(i,'data-column',s),A(i,'headers','cc__row-'+s+t),l.insertAdjacentHTML('beforeend',c),j(i,l),j(o,i)}j(d,o)}j(s,d),j(e,o),j(e,s),j(T,e)}(C||a)&&j(x,T);const F=n.Be||n.Ge;b?(H||(H=E(r),V(H,'section-toggles')),H.appendChild(x)):H=null,j(F,H||x)})),y&&(n.$e||(n.$e=E(i),V(n.$e,'btn'),A(n.$e,_,'all'),j(D,n.$e),q(n.$e,f,(()=>p('all')))),n.$e.innerHTML=y),C&&(n.Ve||(n.Ve=E(i),V(n.Ve,'btn'),A(n.Ve,_,'necessary'),j(D,n.Ve),q(n.Ve,f,(()=>p([])))),n.Ve.innerHTML=C),x&&(n.ze||(n.ze=E(i),V(n.ze,'btn'),V(n.ze,'btn--secondary'),A(n.ze,_,'save'),j(N,n.ze),q(n.ze,f,(()=>p()))),n.ze.innerHTML=x),n.Be&&(n.Ce.replaceChild(n.Be,n.Ge),n.Ge=n.Be),be(1),o.N||(o.N=!0,oe(m.re.pe,u,n.Ce),t(e),j(n.we,n.Le),Z(n.Ce),setTimeout((()=>I(n.Le,'cc--anim')),100)),te(2)};function he(e,t,o,n,s){const a=m.o,r=m.ne,i=E('label'),d=E('input'),_=E('span'),p=E('span'),u=E('span'),g=E('span'),b=E('span');if(g.innerHTML=Y(1,3),b.innerHTML=Y(0,3),d.type='checkbox',I(i,'section__toggle-wrapper'),I(d,'section__toggle'),I(g,'toggle__icon-on'),I(b,'toggle__icon-off'),I(_,'toggle__icon'),I(p,'toggle__icon-circle'),I(u,'toggle__label'),A(_,l,'true'),n?(I(i,'toggle-service'),A(d,c,s),r.ae[s][t]=d):r.se[t]=d,n?(e=>{q(d,'change',(()=>{const t=r.ae[e],o=r.se[e];a.Z[e]=[];for(let o in t){const n=t[o];n.checked&&a.Z[e].push(n.value)}o.checked=a.Z[e].length>0}))})(s):(e=>{q(d,f,(()=>{const t=r.ae[e],o=d.checked;a.Z[e]=[];for(let n in t)t[n].checked=o,o&&a.Z[e].push(n)}))})(t),d.value=t,u.textContent=e.replace(/<.*>.*<\/.*>/gm,''),j(p,b),j(p,g),j(_,p),a.M)(o.readOnly||o.enabled)&&(d.checked=!0);else if(n){const e=a.Y[s];d.checked=o.readOnly||v(e,t)}else v(a.O,t)&&(d.checked=!0);return o.readOnly&&(d.disabled=!0),j(i,d),j(i,_),j(i,u),i}const we=(e,t)=>{const o=m.o,n=m.ne,{hide:s,hidePreferences:a,acceptCategory:c}=e,p=e=>{c(e),a(),s()},g=o.p&&o.p.btsPreferencesModal;if(!g)return;const b=g.title,v=g.closeIconLabel,y=g.acceptAllBtn,C=g.acceptNecessaryBtn,x=g.savePreferencesBtn,T=g.sections||[],M=y||C||x;if(n.Le)n.Be=E(r),V(n.Be,'body');else{n.Le=E(r),I(n.Le,'pm-wrapper');const e=E('div');I(e,'pm-overlay'),j(n.Le,e),q(e,f,a),n.Ce=E(r),I(n.Ce,'pm--bts'),V(n.Ce,'bts'),A(n.Ce,'role','dialog'),A(n.Ce,l,!0),A(n.Ce,'aria-modal',!0),A(n.Ce,'aria-labelledby','pm__title'),q(n.ye,'keydown',(e=>{27===e.keyCode&&a()}),!0),n.Fe=E(r),V(n.Fe,'header'),n.Qe=E(r),I(n.Qe,'cookie'),n.Ke=E(r),I(n.Ke,'cookie-1'),n.We=E(r),I(n.We,'cookie-2'),n.Xe=E(r),I(n.Xe,'cookie-3'),j(n.Qe,n.Ke),j(n.Qe,n.We),j(n.Qe,n.Xe),n.Oe=E('h2'),V(n.Oe,'title'),n.Oe.id='pm__title',n.Re=E(i),V(n.Re,'close-btn'),A(n.Re,'aria-label',g.closeIconLabel||''),q(n.Re,f,a),n.qe=E('span'),n.qe.innerHTML=Y(),j(n.Re,n.qe),n.Ge=E(r),V(n.Ge,'body'),n.Je=E(r),V(n.Je,'footer');var k=E(r);I(k,'btns');var D=E(r),N=E(r);V(D,d),V(N,d),j(n.Je,D),j(n.Je,N),j(n.Fe,n.Qe),j(n.Fe,n.Oe),j(n.Fe,n.Re),n.ve=E(r),A(n.ve,'tabIndex',-1),j(n.Ce,n.ve);var H=E(r);H.id='qrcode',I(H,'code-contaienr');var P=E('script');A(P,'type','text/javascript'),P.text='new QRCode(document.getElementById("qrcode"), "http://google.com");',j(H,P),j(n.Ge,H),j(n.Ce,n.Fe),j(n.Ce,n.Ge),M&&j(n.Ce,n.Je),j(n.Le,n.Ce)}let F;b&&(n.Oe.innerHTML=b,v&&A(n.Re,'aria-label',v)),T.forEach(((e,t)=>{const s=e.title,a=e.description,c=e.linkedCategory,d=c&&o.B[c],_=e.cookieTable,p=_&&_.body,u=_&&_.caption,m=p&&p.length>0,b=!!d,v=b&&o.X[c],y=w(v)&&S(v)||[],C=b&&(!!a||!!m||S(v).length>0);var x=E(r);if(V(x,'section'),C||a){var T=E(r);V(T,'section-desc-wrapper')}let M=y.length;if(C&&M>0){const e=E(r);V(e,'section-services');for(const t of y){const o=v[t],n=o&&o.label||t,s=E(r),a=E(r),i=E(r),l=E(r);V(s,'service'),V(l,'service-title'),V(a,'service-header'),V(i,'service-icon');const f=Ce(n,t,d,!0,c);l.innerHTML=n,j(a,i),j(a,l),j(s,a),j(s,f),j(e,s)}j(T,e)}if(s){var k=E(r),D=E(b?i:r);if(V(k,'section-title-wrapper'),V(D,'section-title'),D.innerHTML=s,j(k,D),b){const e=E('span');e.innerHTML=Y(2,3.5),V(e,'section-arrow'),j(k,e),x.className+='--toggle';const t=Ce(s,c,d);let o=g.serviceCounterLabel;if(M>0&&h(o)){let e=E('span');V(e,'badge'),V(e,'service-counter'),A(e,l,!0),A(e,'data-servicecounter',M),o&&(o=o.split('|'),o=o.length>1&&M>1?o[1]:o[0],A(e,'data-counterlabel',o)),e.innerHTML=M+(o?' '+o:''),j(D,e)}if(C){V(x,'section--expandable');var N=c+'-desc';A(D,'aria-expanded',!1),A(D,'aria-controls',N)}j(k,t)}else A(D,'role','heading'),A(D,'aria-level','3');j(x,k)}if(a){var H=E('p');V(H,'section-desc'),H.innerHTML=a,j(T,H)}if(C&&(A(T,l,'true'),T.id=N,((e,t,o)=>{q(D,f,(()=>{B(t,'is-expanded')?(L(t,'is-expanded'),A(o,'aria-expanded','false'),A(e,l,'true')):(I(t,'is-expanded'),A(o,'aria-expanded','true'),A(e,l,'false'))}))})(T,x,D),m)){const e=E('table'),o=E('thead'),s=E('tbody');if(u){const t=E('caption');V(t,'table-caption'),t.innerHTML=u,e.appendChild(t)}V(e,'section-table'),V(o,'table-head'),V(s,'table-body');const a=_.headers,c=S(a),i=n.Ue.createDocumentFragment(),l=E('tr');for(const e of c){const o=a[e],n=E('th');n.id='cc__row-'+o+t,A(n,'scope','col'),V(n,'table-th'),n.innerHTML=o,j(i,n)}j(l,i),j(o,l);const d=n.Ue.createDocumentFragment();for(const e of p){const o=E('tr');V(o,'table-tr');for(const n of c){const s=a[n],c=e[n],i=E('td'),l=E(r);V(i,'table-td'),A(i,'data-column',s),A(i,'headers','cc__row-'+s+t),l.insertAdjacentHTML('beforeend',c),j(i,l),j(o,i)}j(d,o)}j(s,d),j(e,o),j(e,s),j(T,e)}(C||a)&&j(x,T);const P=n.Be||n.Ge;b?(F||(F=E(r),V(F,'section-toggles')),F.appendChild(x)):F=null,j(P,F||x)})),y&&(n.$e||(n.$e=E(i),V(n.$e,'btn'),A(n.$e,_,'all'),j(D,n.$e),q(n.$e,f,(()=>p('all')))),n.$e.innerHTML=y),C&&(n.Ve||(n.Ve=E(i),V(n.Ve,'btn'),A(n.Ve,_,'necessary'),j(D,n.Ve),q(n.Ve,f,(()=>p([])))),n.Ve.innerHTML=C),x&&(n.ze||(n.ze=E(i),V(n.ze,'btn'),V(n.ze,'btn--secondary'),A(n.ze,_,'save'),j(N,n.ze),q(n.ze,f,(()=>p()))),n.ze.innerHTML=x),n.Be&&(n.Ce.replaceChild(n.Be,n.Ge),n.Ge=n.Be),be(2),o.N||(o.N=!0,oe(m.re.pe,u,n.Ce),t(e),j(n.we,n.Le),Z(n.Ce),setTimeout((()=>I(n.Le,'cc--anim')),100)),te(2)};function Ce(e,t,o,n,s){const a=m.o,r=m.ne,i=E('label'),d=E('input'),_=E('span'),p=E('span'),u=E('span'),g=E('span'),b=E('span');if(g.innerHTML=Y(1,3),b.innerHTML=Y(0,3),d.type='checkbox',I(i,'section__toggle-wrapper'),I(d,'section__toggle'),I(g,'toggle__icon-on'),I(b,'toggle__icon-off'),I(_,'toggle__icon'),I(p,'toggle__icon-circle'),I(u,'toggle__label'),A(_,l,'true'),n?(I(i,'toggle-service'),A(d,c,s),r.ae[s][t]=d):r.se[t]=d,n?(e=>{q(d,'change',(()=>{const t=r.ae[e],o=r.se[e];a.Z[e]=[];for(let o in t){const n=t[o];n.checked&&a.Z[e].push(n.value)}o.checked=a.Z[e].length>0}))})(s):(e=>{q(d,f,(()=>{const t=r.ae[e],o=d.checked;a.Z[e]=[];for(let n in t)t[n].checked=o,o&&a.Z[e].push(n)}))})(t),d.value=t,u.textContent=e.replace(/<.*>.*<\/.*>/gm,''),j(p,b),j(p,g),j(_,p),a.M)(o.readOnly||o.enabled)&&(d.checked=!0);else if(n){const e=a.Y[s];d.checked=o.readOnly||v(e,t)}else v(a.O,t)&&(d.checked=!0);return o.readOnly&&(d.disabled=!0),j(i,d),j(i,_),j(i,u),i}const Se=()=>{const e=E('span');return m.ne.Ye||(m.ne.Ye=e),e},xe=(e,t)=>{const o=m.o,n=m.ne,{hide:s,showPreferences:a,acceptCategory:c,showBTSPreferences:u}=e,g=o.p&&o.p.consentModal;if(!g)return;const b=g.acceptAllBtn,v=g.acceptNecessaryBtn,y=g.showPreferencesBtn,h=g.showBTSPreferencesBtn,w=g.closeIconLabel,C=g.footer,S=g.label,x=g.title,T=e=>{s(),c(e)};if(!n.Ze){n.Ze=E(r),n.he=E(r),n.et=E(r),n.tt=E(r),n.ot=E(r),I(n.Ze,'cm-wrapper'),I(n.he,'cm'),P(n.et,'body'),P(n.tt,'texts'),P(n.ot,'btns'),A(n.he,'role','dialog'),A(n.he,'aria-modal','true'),A(n.he,l,'false'),A(n.he,'aria-describedby','cm__desc'),S?A(n.he,'aria-label',S):x&&A(n.he,'aria-labelledby','cm__title');const e='box',t=o.i.guiOptions,s=t&&t.consentModal,a=(s&&s.layout||e).split(' ')[0]===e;x&&w&&a&&(n.Pe||(n.Pe=E(i),n.Pe.innerHTML=Y(),P(n.Pe,'btn'),P(n.Pe,'btn--close'),q(n.Pe,f,(()=>{T([])})),j(n.et,n.Pe)),A(n.Pe,'aria-label',w)),j(n.et,n.tt),(b||v||y||h)&&j(n.et,n.ot),n.be=E(r),A(n.be,'tabIndex',-1),j(n.he,n.be),j(n.he,n.et),j(n.Ze,n.he)}x&&(n.nt||(n.nt=E('h2'),n.nt.className=n.nt.id='cm__title',j(n.tt,n.nt)),n.nt.innerHTML=x);let M=g.description;if(M&&(o.j&&(M=M.replace('{{revisionMessage}}',o.I?'':g.revisionMessage||'')),n.st||(n.st=E('p'),n.st.className=n.st.id='cm__desc',j(n.tt,n.st)),n.st.innerHTML=M),b&&(n.ct||(n.ct=E(i),j(n.ct,Se()),P(n.ct,'btn'),A(n.ct,_,'all'),q(n.ct,f,(()=>{T('all')}))),n.ct.firstElementChild.innerHTML=b),v&&(n.Ie||(n.Ie=E(i),j(n.Ie,Se()),P(n.Ie,'btn'),A(n.Ie,_,'necessary'),q(n.Ie,f,(()=>{T([])}))),n.Ie.firstElementChild.innerHTML=v),y&&(n.rt||(n.rt=E(i),j(n.rt,Se()),P(n.rt,'btn'),P(n.rt,'btn--secondary'),A(n.rt,_,'show'),q(n.rt,'mouseenter',(()=>{o.N||ye(e,t)})),q(n.rt,f,a)),n.rt.firstElementChild.innerHTML=y),h&&(n.it||(n.it=E(i),j(n.it,Se()),P(n.it,'btn'),P(n.it,'btn--secondary'),A(n.it,_,'show'),q(n.it,'mouseenter',(()=>{o.lt||we(e,t)})),q(n.it,f,u)),n.it.firstElementChild.innerHTML=h),n.dt||(n.dt=E(r),P(n.dt,d),b&&j(n.dt,n.ct),v&&j(n.dt,n.Ie),(b||v)&&j(n.et,n.dt),j(n.ot,n.dt)),n.rt&&!n.ft&&(n.ft=E(r),n.Ie&&n.ct?(P(n.ft,d),j(n.ft,n.rt),j(n.ot,n.ft)):(j(n.dt,n.rt),P(n.dt,d+'--uneven'))),n.it&&!n.ft&&(n.ft=E(r),n.Ie&&n.ct?(P(n.ft,d),j(n.ft,n.it),j(n.ot,n.ft)):(j(n.dt,n.it),P(n.dt,d+'--uneven'))),C){if(!n._t){let e=E(r),t=E(r);n._t=E(r),P(e,'footer'),P(t,'links'),P(n._t,'link-group'),j(t,n._t),j(e,t),j(n.he,e)}n._t.innerHTML=C}be(0),o.k||(o.k=!0,oe(m.re.pe,p,n.he),t(e),j(n.we,n.Ze),Z(n.he),setTimeout((()=>I(n.Ze,'cc--anim')),100)),te(1),$(n.et,e,ye,t)},Te=e=>{if(!h(e))return null;if(e in m.o._)return e;let t=e.slice(0,2);return t in m.o._?t:null},Me=()=>m.o.l||m.o.i.language.default,ke=e=>{e&&(m.o.l=e)},De=async e=>{const t=m.o;let o=Te(e)?e:Me(),n=t._[o];return h(n)?n=await(async e=>{try{const t=await fetch(e);return await t.json()}catch(e){return console.error(e),!1}})(n):C(n)&&(n=await n()),!!n&&(t.p=n,ke(o),!0)},Ee=()=>{let e=m.o.i.language.rtl,t=m.ne.we;e&&t&&(y(e)||(e=[e]),v(e,m.o.l)?I(t,'cc--rtl'):L(t,'cc--rtl'))},Ae=()=>{const e=m.ne;if(e.we)return;e.we=E(r),e.we.id='cc-main',e.we.setAttribute('data-nosnippet',''),Ee();let t=m.o.i.root;t&&h(t)&&(t=document.querySelector(t)),(t||e.Ue.body).appendChild(e.we)},Ne=e=>ne((()=>localStorage.removeItem(e))),He=(e,t)=>{if(t instanceof RegExp)return e.filter((e=>t.test(e)));{const o=b(e,t);return o>-1?[e[o]]:[]}},je=e=>{const{hostname:t,protocol:o}=location,{name:n,path:s,domain:a,sameSite:c,useLocalStorage:r}=m.t.cookie,i=e?(()=>{const e=m.o.S,t=e?new Date-e:0;return 864e5*G()-t})():864e5*G(),l=new Date;l.setTime(l.getTime()+i),m.o.u.expirationTime=l.getTime();const d=JSON.stringify(m.o.u);let f=n+'='+encodeURIComponent(d)+(0!==i?'; expires='+l.toUTCString():'')+'; Path='+s+'; SameSite='+c;v(t,'.')&&(f+='; Domain='+a),'https:'===o&&(f+='; Secure'),r?((e,t)=>{ne((()=>localStorage.setItem(e,t)))})(n,d):document.cookie=f,m.o.u},Ie=(e,t,o)=>{if(0===e.length)return;const n=o||m.t.cookie.domain,s=t||m.t.cookie.path,a='www.'===n.slice(0,4),c=a&&n.substring(4),r=(e,t)=>{document.cookie=e+'=; path='+s+(t?'; domain=.'+t:'')+'; expires=Thu, 01 Jan 1970 00:00:01 GMT;'};for(const t of e)r(t),r(t,n),a&&r(t,c)},Pe=e=>{const t=e||m.t.cookie.name,o=m.t.cookie.useLocalStorage;return((e,t)=>{let o;return o=ne((()=>JSON.parse(t?e:decodeURIComponent(e))),!0)||{},o})(o?(n=t,ne((()=>localStorage.getItem(n)))||''):Ve(t,!0),o);var n},Ve=(e,t)=>{const o=document.cookie.match('(^|;)\\s*'+e+'\\s*=\\s*([^;]+)');return o?t?o.pop():e:''},Le=e=>{const t=document.cookie.split(/;\s*/),o=[];for(const n of t){let t=n.split('=')[0];e?ne((()=>{e.test(t)&&o.push(t)})):o.push(t)}return o},Be=(e,n=[])=>{((e,t)=>{const{F:o,O:n,R:s,N:a,Z:c,q:r,X:i}=m.o;let l=[];if(e){y(e)?l.push(...e):h(e)&&(l='all'===e?o:[e]);for(const e of o)c[e]=v(l,e)?S(i[e]):[]}else l=[...n,...r],a&&(l=(()=>{const e=m.ne.se;if(!e)return[];let t=[];for(let o in e)e[o].checked&&t.push(o);return t})());l=l.filter((e=>!v(o,e)||!v(t,e))),l.push(...s),U(l)})(e,n),(e=>{const t=m.o,{Z:o,R:n,Y:s,X:a,F:c}=t,r=c;t.te=F(s);for(const e of r){const c=a[e],r=S(c),i=o[e]&&o[e].length>0,l=v(n,e);if(0!==r.length){if(s[e]=[],l)s[e].push(...r);else if(i){const t=o[e];s[e].push(...t)}else s[e]=t.Z[e];s[e]=x(s[e])}}})(),(()=>{const e=m.o;e.P=m.t.mode===o&&e.M?J(e.q,e.O):J(e.O,e.u.categories);let n=e.P.length>0,s=!1;for(const t of e.F)e.ee[t]=J(e.Y[t],e.te[t]),e.ee[t].length>0&&(s=!0);const a=m.ne.se;for(const t in a)a[t].checked=v(e.O,t);for(const t of e.F){const o=m.ne.ae[t],n=e.Y[t];for(const e in o)o[e].checked=v(n,e)}e.C||(e.C=new Date),e.T||(e.T=([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g,(e=>(e^crypto.getRandomValues(new Uint8Array(1))[0]&15>>e/4).toString(16)))),e.u={categories:F(e.O),revision:m.t.revision,data:e.h,consentTimestamp:e.C.toISOString(),consentId:e.T,services:F(e.Y)};let c=!1;const r=n||s;(e.M||r)&&(e.M&&(e.M=!1,c=!0),e.S=e.S?new Date:e.C,e.u.lastConsentTimestamp=e.S.toISOString(),je(),m.t.autoClearCookies&&(c||r)&&(e=>{const t=m.o,o=Le(),n=(e=>{const t=m.o;return(e?t.F:t.P).filter((e=>{const o=t.B[e];return!!o&&!o.readOnly&&!!o.autoClear}))})(e);for(const e in t.ee)for(const n of t.ee[e]){const s=t.X[e][n].cookies;if(!v(t.Y[e],n)&&s)for(const e of s){const t=He(o,e.name);Ie(t,e.path,e.domain)}}for(const s of n){const n=t.B[s].autoClear,a=n&&n.cookies||[],c=v(t.P,s),r=!v(t.O,s),i=c&&r;if(e?r:i){n.reloadPage&&i&&(t.V=!0);for(const e of a){const t=He(o,e.name);Ie(t,e.path,e.domain)}}}})(c),se()),c&&(oe(m.re.ie),oe(m.re.le),m.t.mode===t)||(r&&oe(m.re.de),e.V&&(e.V=!1,location.reload()))})()},Fe=e=>{const t=m.o.M?[]:m.o.O;return v(t,e)},Oe=(e,t)=>{const o=m.o.M?[]:m.o.Y[t]||[];return v(o,e)},Re=(e,t,o)=>{let n=[];const s=e=>{if(h(e)){let t=Ve(e);''!==t&&n.push(t)}else n.push(...Le(e))};if(y(e))for(let t of e)s(t);else s(e);Ie(n,t,o)},qe=e=>{const{ne:t,o:o}=m;if(!o.D){if(!o.k){if(!e)return;xe(ze,Ae)}o.D=!0,o.J=T(),o.v&&W(!0),Q(t.he,1),I(t.ye,n),A(t.he,l,'false'),setTimeout((()=>{z(m.ne.be)}),100),oe(m.re.fe,p)}},Ge=()=>{const{ne:e,o:t,re:o}=m;t.D&&(t.D=!1,t.v&&W(),z(e.Ye,!0),L(e.ye,n),A(e.he,l,'true'),z(t.J),t.J=null,oe(o._e,p))},Je=()=>{const e=m.o;e.A||(e.N||ye(ze,Ae),e.A=!0,e.D?e.U=T():e.J=T(),Q(m.ne.Ce,2),I(m.ne.ye,s),A(m.ne.Ce,l,'false'),setTimeout((()=>{z(m.ne.ve)}),100),oe(m.re.fe,u))},Ue=()=>{const e=m.o;e.A||(e.N||we(ze,Ae),e.A=!0,e.D?e.U=T():e.J=T(),Q(m.ne.Ce,2),I(m.ne.ye,s),A(m.ne.Ce,l,'false'),setTimeout((()=>{z(m.ne.ve)}),100),oe(m.re.fe,u))},$e=()=>{const e=m.o;e.A&&(e.A=!1,(()=>{const e=Ke(),t=m.o.B,o=m.ne.se,n=m.ne.ae,s=e=>v(m.o.q,e);for(const a in o){const c=!!t[a].readOnly;o[a].checked=c||(e?Fe(a):s(a));for(const t in n[a])n[a][t].checked=c||(e?Oe(t,a):s(a))}})(),z(m.ne.qe,!0),L(m.ne.ye,s),A(m.ne.Ce,l,'true'),e.D?(z(e.U),e.U=null):(z(e.J),e.J=null),oe(m.re._e,u))};var ze={show:qe,hide:Ge,showPreferences:Je,hidePreferences:$e,showBTSPreferences:Ue,acceptCategory:Be};const Qe=(e,t)=>{const o=Pe(t);return e?o[e]:o},Ke=()=>!m.o.M;e.acceptCategory=Be,e.acceptService=(e,t)=>{const{F:o,X:n}=m.o;if(!(e&&t&&h(t)&&v(o,t)&&0!==S(n[t]).length))return!1;((e,t)=>{const o=m.o,{X:n,Z:s,N:a}=o,c=m.ne.ae[t]||{},r=m.ne.se[t]||{},i=S(n[t]);if(s[t]=[],h(e)){if('all'===e){if(s[t].push(...i),a)for(let e in c)c[e].checked=!0,D(c[e])}else if(v(i,e)&&s[t].push(e),a)for(let t in c)c[t].checked=e===t,D(c[t])}else if(y(e))for(let o of i){const n=v(e,o);n&&s[t].push(o),a&&(c[o].checked=n,D(c[o]))}const l=0===s[t].length;o.O=l?o.O.filter((e=>e!==t)):x([...o.O,t]),a&&(r.checked=!l,D(r))})(e,t),Be()},e.acceptedCategory=Fe,e.acceptedService=Oe,e.eraseCookies=Re,e.getConfig=e=>{const t=m.t,o=m.o.i;return e?t[e]||o[e]:{...t,...o,cookie:{...t.cookie}}},e.getCookie=Qe,e.getUserPreferences=()=>{const{L:e,Y:t}=m.o,{accepted:o,rejected:n}=(()=>{const{M:e,O:t,F:o}=m.o;return{accepted:t,rejected:e?[]:o.filter((e=>!v(t,e)))}})();return F({acceptType:e,acceptedCategories:o,rejectedCategories:n,acceptedServices:t,rejectedServices:O()})},e.hide=Ge,e.hidePreferences=$e,e.loadScript=(e,t)=>{let o=document.querySelector('script[src="'+e+'"]');return new Promise((n=>{if(o)return n(!0);if(o=E('script'),w(t))for(const e in t)A(o,e,t[e]);o.onload=()=>n(!0),o.onerror=()=>{o.remove(),n(!1)},o.src=e,j(document.head,o)}))},e.reset=e=>{const{we:t,ye:o}=m.ne,{name:c,path:r,domain:i,useLocalStorage:l}=m.t.cookie;e&&(l?Ne(c):Re(c,r,i));for(const{ue:e,ge:t,me:o}of m.o.m)e.removeEventListener(t,o);t&&t.remove(),o&&o.classList.remove(a,s,n);const d=new g;for(const e in m)m[e]=d[e];window._ccRun=!1},e.run=async e=>{const{o:t,t:n,re:s}=m,a=window;if(!a._ccRun){if(a._ccRun=!0,(e=>{const{ne:t,t:n,o:s}=m,a=n,r=s,{cookie:i}=a,l=m.ce,d=e.cookie,f=e.categories,_=S(f)||[],p=navigator,u=document;t.Ue=u,t.ye=u.documentElement,i.domain=location.hostname,r.i=e,r.B=f,r.F=_,r._=e.language.translations,r.v=!!e.disablePageInteraction,l.ie=e.onFirstConsent,l.le=e.onConsent,l.de=e.onChange,l._e=e.onModalHide,l.fe=e.onModalShow,l.pe=e.onModalReady;const{mode:g,autoShow:b,lazyHtmlGeneration:y,autoClearCookies:h,revision:C,manageScriptTags:x,hideFromBots:T}=e;g===o&&(a.mode=g),'boolean'==typeof h&&(a.autoClearCookies=h),'boolean'==typeof x&&(a.manageScriptTags=x),'number'==typeof C&&C>=0&&(a.revision=C,r.j=!0),'boolean'==typeof b&&(a.autoShow=b),'boolean'==typeof y&&(a.lazyHtmlGeneration=y),!1===T&&(a.hideFromBots=!1),!0===a.hideFromBots&&p&&(r.G=p.userAgent&&/bot|crawl|spider|slurp|teoma/i.test(p.userAgent)||p.webdriver),w(d)&&(a.cookie={...i,...d}),a.autoClearCookies,r.j,a.manageScriptTags,(e=>{const{B:t,X:o,Y:n,Z:s,R:a}=m.o;for(let c of e){const e=t[c],r=e.services||{},i=w(r)&&S(r)||[];o[c]={},n[c]=[],s[c]=[],e.readOnly&&(a.push(c),n[c]=i),m.ne.ae[c]={};for(let e of i){const t=r[e];t.Se=!1,o[c][e]=t}}})(_),(()=>{if(!m.t.manageScriptTags)return;const e=m.o,t=k(document,'script['+c+']');for(const o of t){let t=H(o,c),n=o.dataset.service||'',s=!1;if(t&&'!'===t.charAt(0)&&(t=t.slice(1),s=!0),'!'===n.charAt(0)&&(n=n.slice(1),s=!0),v(e.F,t)&&(e.oe.push({Te:o,xe:!1,De:s,Me:t,ke:n}),n)){const o=e.X[t];o[n]||(o[n]={Se:!1})}}})(),ke((()=>{const e=m.o.i.language.autoDetect;if(e){const t={browser:navigator.language,document:document.documentElement.lang},o=Te(t[e]);if(o)return o}return Me()})())})(e),t.G)return;(()=>{const e=m.o,t=m.t,n=Pe(),{categories:s,services:a,consentId:c,consentTimestamp:r,lastConsentTimestamp:i,data:l,revision:d}=n,f=y(s);e.u=n,e.T=c;const _=!!c&&h(c);e.C=r,e.C&&(e.C=new Date(r)),e.S=i,e.S&&(e.S=new Date(i)),e.h=void 0!==l?l:null,e.j&&_&&d!==t.revision&&(e.I=!1),e.M=!(_&&e.I&&e.C&&e.S&&f),t.cookie.useLocalStorage&&!e.M&&(e.M=(new Date).getTime()>(n.expirationTime||0),e.M&&Ne(t.cookie.name)),e.M,(()=>{const e=m.o;for(const t of e.F){const n=e.B[t];if(n.readOnly||n.enabled){e.q.push(t);const n=e.X[t]||{};for(let s in n)e.Z[t].push(s),e.i.mode===o&&e.Y[t].push(s)}}})(),e.M?t.mode===o&&(e.O=[...e.q]):(e.Z={...e.Y},e.Y={...e.Y,...a},U([...e.R,...s]))})();const i=Ke();if(!await De())return!1;if($(null,r=ze,ye,we),m.o.M&&xe(r,Ae),m.t.lazyHtmlGeneration||ye(r,Ae),m.t.lazyHtmlGeneration||we(r,Ae),n.autoShow&&!i&&qe(!0),i)return se(),oe(s.le);n.mode===o&&se(t.q)}var r},e.setCookieData=e=>{let t,o=e.value,n=e.mode,s=!1;const a=m.o;if('update'===n){a.h=t=Qe('data');const e=typeof t==typeof o;if(e&&'object'==typeof t){!t&&(t={});for(let e in o)t[e]!==o[e]&&(t[e]=o[e],s=!0)}else!e&&t||t===o||(t=o,s=!0)}else t=o,s=!0;return s&&(a.h=t,a.u.data=t,je(!0)),s},e.setLanguage=async(e,t)=>{if(!Te(e))return!1;const o=m.o;return!(e===Me()&&!0!==t||!await De(e)||(ke(e),o.k&&xe(ze,Ae),o.N&&ye(ze,Ae),Ee(),0))},e.show=qe,e.showBTSPreferences=Ue,e.showPreferences=Je,e.validConsent=Ke,e.validCookie=e=>''!==Ve(e,!0)},'object'==typeof exports&&'undefined'!=typeof module?t(exports,require('qrcodejs')):'function'==typeof define&&define.amd?define(['exports','qrcodejs'],t):t((e='undefined'!=typeof globalThis?globalThis:e||self).CookieConsent={});
