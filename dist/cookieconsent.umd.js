/*!
* CookieConsent 3.0.1
* https://github.com/orestbida/cookieconsent
* Author Orest Bida
* Released under the MIT License
*/
var e,t;e=this,t=function(e,t){'use strict';const o='opt-in',n='opt-out',a='show--consent',s='show--preferences',c='disable--interaction',r='data-category',i='div',l='button',d='aria-hidden',f='btn-group',_='click',u='data-role',p='consentModal',m='preferencesModal';class g{constructor(){this.t={mode:o,revision:0,autoShow:!0,lazyHtmlGeneration:!0,autoClearCookies:!0,manageScriptTags:!0,hideFromBots:!0,cookie:{name:'cc_cookie',expiresAfterDays:182,domain:'',path:'/',sameSite:'Lax'}},this.o={i:{},l:'',_:{},u:{},p:{},m:[],v:!1,h:null,C:null,S:null,T:'',M:!0,k:!1,D:!1,A:!1,N:!1,H:[],P:!1,I:!0,V:[],j:!1,L:'',F:!1,O:[],B:[],R:[],J:[],q:!1,G:!1,U:!1,$:[],K:[],W:[],X:{},Y:{},Z:{},ee:{},te:{},oe:[]},this.ne={ae:{},se:{}},this.ce={},this.re={ie:'cc:onFirstConsent',le:'cc:onConsent',de:'cc:onChange',fe:'cc:onModalShow',_e:'cc:onModalHide',ue:'cc:onModalReady'}}}const b=new g,v=(e,t)=>e.indexOf(t),y=(e,t)=>-1!==v(e,t),h=e=>Array.isArray(e),C=e=>'string'==typeof e,w=e=>!!e&&'object'==typeof e&&!h(e),S=e=>'function'==typeof e,x=e=>Object.keys(e),T=e=>Array.from(new Set(e)),M=()=>document.activeElement,k=e=>e.preventDefault(),D=(e,t)=>e.querySelectorAll(t),E=e=>e.dispatchEvent(new Event('change')),A=e=>{const t=document.createElement(e);return e===l&&(t.type=e),t},N=(e,t,o)=>e.setAttribute(t,o),H=(e,t,o)=>{e.removeAttribute(o?'data-'+t:t)},P=(e,t,o)=>e.getAttribute(o?'data-'+t:t),I=(e,t)=>e.appendChild(t),V=(e,t)=>e.classList.add(t),j=(e,t)=>V(e,'cm__'+t),L=(e,t)=>V(e,'pm__'+t),F=(e,t)=>e.classList.remove(t),O=e=>{if('object'!=typeof e)return e;if(e instanceof Date)return new Date(e.getTime());let t=Array.isArray(e)?[]:{};for(let o in e){let n=e[o];t[o]=O(n)}return t},B=()=>{const e={},{O:t,X:o,Y:n}=b.o;for(const a of t)e[a]=G(n[a],x(o[a]));return e},R=(e,t)=>dispatchEvent(new CustomEvent(e,{detail:t})),J=(e,t,o,n)=>{e.addEventListener(t,o),n&&b.o.m.push({pe:e,me:t,ge:o})},q=()=>{const e=b.t.cookie.expiresAfterDays;return S(e)?e(b.o.L):e},G=(e,t)=>{const o=e||[],n=t||[];return o.filter((e=>!y(n,e))).concat(n.filter((e=>!y(o,e))))},U=e=>{b.o.B=T(e),b.o.L=(()=>{let e='custom';const{B:t,O:o,R:n}=b.o,a=t.length;return a===o.length?e='all':a===n.length&&(e='necessary'),e})()},$=(e,t,o,n)=>{const a='accept-',{show:s,showPreferences:c,hide:r,hidePreferences:i,acceptCategory:l}=t,d=e||document,f=e=>D(d,`[data-cc="${e}"]`),u=(e,t)=>{k(e),l(t),i(),r()},p=f('show-preferencesModal'),m=f('show-consentModal'),g=f(a+'all'),v=f(a+'necessary'),y=f(a+'custom'),h=b.t.lazyHtmlGeneration;for(const e of p)N(e,'aria-haspopup','dialog'),J(e,_,(e=>{k(e),c()})),h&&(J(e,'mouseenter',(e=>{k(e),b.o.N||o(t,n)}),!0),J(e,'focus',(()=>{b.o.N||o(t,n)})));for(let e of m)N(e,'aria-haspopup','dialog'),J(e,_,(e=>{k(e),s(!0)}),!0);for(let e of g)J(e,_,(e=>{u(e,'all')}),!0);for(let e of y)J(e,_,(e=>{u(e)}),!0);for(let e of v)J(e,_,(e=>{u(e,[])}),!0)},z=(e,t)=>{e&&(t&&(e.tabIndex=-1),e.focus(),t&&e.removeAttribute('tabindex'))},K=(e,t)=>{const o=n=>{n.target.removeEventListener('transitionend',o),'opacity'===n.propertyName&&'1'===getComputedStyle(e).opacity&&z((e=>1===e?b.ne.be:b.ne.ve)(t))};J(e,'transitionend',o)};let Q;const W=e=>{clearTimeout(Q),e?V(b.ne.ye,c):Q=setTimeout((()=>{F(b.ne.ye,c)}),500)},X=['M 19.5 4.5 L 4.5 19.5 M 4.5 4.501 L 19.5 19.5','M 3.572 13.406 L 8.281 18.115 L 20.428 5.885','M 21.999 6.94 L 11.639 17.18 L 2.001 6.82 '],Y=(e=0,t=1.5)=>`<svg viewBox="0 0 24 24" stroke-width="${t}"><path d="${X[e]}"/></svg>`,Z=e=>{const t=b.ne,o=b.o;(e=>{const n=e===t.he,a=o.i.disablePageInteraction?t.ye:n?t.Ce:t.ye;J(a,'keydown',(t=>{if('Tab'!==t.key||!(n?o.D&&!o.A:o.A))return;const a=M(),s=n?o.$:o.K;0!==s.length&&(t.shiftKey?a!==s[0]&&e.contains(a)||(k(t),z(s[1])):a!==s[1]&&e.contains(a)||(k(t),z(s[0])))}),!0)})(e)},ee=['[href]',l,'input','details','[tabindex]'].map((e=>e+':not([tabindex="-1"])')).join(','),te=e=>{const{o:t,ne:o}=b,n=(e,t)=>{const o=D(e,ee);t[0]=o[0],t[1]=o[o.length-1]};1===e&&t.k&&n(o.he,t.$),2===e&&t.N&&n(o.we,t.K)},oe=(e,t,o)=>{const{de:n,le:a,ie:s,_e:c,ue:r,fe:i}=b.ce,l=b.re;if(t){const n={modalName:t};return e===l.fe?S(i)&&i(n):e===l._e?S(c)&&c(n):(n.modal=o,S(r)&&r(n)),R(e,n)}const d={cookie:b.o.p};e===l.ie?S(s)&&s(O(d)):e===l.le?S(a)&&a(O(d)):(d.changedCategories=b.o.V,d.changedServices=b.o.ee,S(n)&&n(O(d))),R(e,O(d))},ne=(e,t)=>{try{return e()}catch(e){return!t&&console.warn('CookieConsent:',e),!1}},ae=e=>{const{Y:t,ee:o,O:n,X:a,oe:s,p:c,V:i}=b.o;for(const e of n){const n=o[e]||t[e]||[];for(const o of n){const n=a[e][o];if(!n)continue;const{onAccept:s,onReject:c}=n;!n.Se&&y(t[e],o)?(n.Se=!0,S(s)&&s()):n.Se&&!y(t[e],o)&&(n.Se=!1,S(c)&&c())}}if(!b.t.manageScriptTags)return;const l=s,d=e||c.categories||[],f=(e,n)=>{if(n>=e.length)return;const a=s[n];if(a.xe)return f(e,n+1);const c=a.Te,l=a.Me,_=a.ke,u=y(d,l),p=!!_&&y(t[l],_);if(!_&&!a.De&&u||!_&&a.De&&!u&&y(i,l)||_&&!a.De&&p||_&&a.De&&!p&&y(o[l]||[],_)){a.xe=!0;const t=P(c,'type',!0);H(c,'type',!!t),H(c,r);let o=P(c,'src',!0);o&&H(c,'src',!0);const s=A('script');s.textContent=c.innerHTML;for(const{nodeName:e}of c.attributes)N(s,e,c[e]||P(c,e));t&&(s.type=t),o?s.src=o:o=c.src;const i=!!o&&(!t||['text/javascript','module'].includes(t));if(i&&(s.onload=s.onerror=()=>{f(e,++n)}),c.replaceWith(s),i)return}f(e,++n)};f(l,0)},se='bottom',ce='left',re='center',ie='right',le='inline',de='wide',fe='pm--',_e='box',ue=['middle','top',se],pe=[ce,re,ie],me={box:{Ee:[de,le],Ae:ue,Ne:pe,He:se,Pe:ie},cloud:{Ee:[le],Ae:ue,Ne:pe,He:se,Pe:re},bar:{Ee:[le],Ae:ue.slice(1),Ne:[],He:se,Pe:''}},ge={box:{Ee:[],Ae:[],Ne:[],He:'',Pe:''},bar:{Ee:[de],Ae:[],Ne:[ce,ie],He:'',Pe:ce}},be=e=>{const t=b.o.i.guiOptions,o=t&&t.consentModal,n=t&&t.preferencesModal,a=t&&t.BTSpreferencesModal;0===e&&ve(b.ne.he,me,o,'cm--',_e,'cm'),1===e&&ve(b.ne.we,ge,n,fe,_e,'pm'),2===e&&ve(b.ne.we,ge,a,fe,_e,'bts-pm')},ve=(e,t,o,n,a,s)=>{e.className=s;const c=o&&o.layout,r=o&&o.position,i=o&&o.flipButtons,l=!o||!1!==o.equalWeightButtons,d=c&&c.split(' ')||[],f=d[0],_=d[1],u=f in t?f:a,p=t[u],m=y(p.Ee,_)&&_,g=r&&r.split(' ')||[],v=g[0],h=n===fe?g[0]:g[1],C=y(p.Ae,v)?v:p.He,w=y(p.Ne,h)?h:p.Pe,S=t=>{t&&V(e,n+t)};S(u),S(m),S(C),S(w),i&&S('flip');const x=s+'__btn--secondary';if('cm'===s){const{Ie:e,Ve:t}=b.ne;e&&(l?F(e,x):V(e,x)),t&&(l?F(t,x):V(t,x))}else{const{je:e}=b.ne;e&&(l?F(e,x):V(e,x))}},ye=(e,t)=>{const o=b.o,n=b.ne,{hide:a,hidePreferences:s,acceptCategory:c}=e,r=e=>{c(e),s(),a()},p=o.u&&o.u.preferencesModal;if(!p)return;const g=p.title,v=p.closeIconLabel,y=p.acceptAllBtn,h=p.acceptNecessaryBtn,S=p.savePreferencesBtn,T=p.sections||[],M=y||h||S;if(n.Le)n.Fe=A(i),L(n.Fe,'body');else{n.Le=A(i),V(n.Le,'pm-wrapper');const e=A('div');V(e,'pm-overlay'),I(n.Le,e),J(e,_,s),n.we=A(i),V(n.we,'pm'),N(n.we,'role','dialog'),N(n.we,d,!0),N(n.we,'aria-modal',!0),N(n.we,'aria-labelledby','pm__title'),J(n.ye,'keydown',(e=>{27===e.keyCode&&s()}),!0),n.Oe=A(i),L(n.Oe,'header'),n.Be=A('h2'),L(n.Be,'title'),n.Be.id='pm__title',n.Re=A(l),L(n.Re,'close-btn'),N(n.Re,'aria-label',p.closeIconLabel||''),J(n.Re,_,s),n.Je=A('span'),n.Je.innerHTML=Y(),I(n.Re,n.Je),n.qe=A(i),L(n.qe,'body'),n.Ge=A(i),L(n.Ge,'footer');var k=A(i);V(k,'btns');var D=A(i),E=A(i);L(D,f),L(E,f),I(n.Ge,D),I(n.Ge,E),I(n.Oe,n.Be),I(n.Oe,n.Re),n.ve=A(i),N(n.ve,'tabIndex',-1),I(n.we,n.ve),I(n.we,n.Oe),I(n.we,n.qe),M&&I(n.we,n.Ge),I(n.Le,n.we)}let H;g&&(n.Be.innerHTML=g,v&&N(n.Re,'aria-label',v)),T.forEach(((e,t)=>{const a=e.title,s=e.description,c=e.linkedCategory,r=c&&o.F[c],f=e.cookieTable,u=f&&f.body,m=f&&f.caption,g=u&&u.length>0,b=!!r,v=b&&o.X[c],y=w(v)&&x(v)||[],h=b&&(!!s||!!g||x(v).length>0);var S=A(i);if(L(S,'section'),h||s){var T=A(i);L(T,'section-desc-wrapper')}let M=y.length;if(h&&M>0){const e=A(i);L(e,'section-services');for(const t of y){const o=v[t],n=o&&o.label||t,a=A(i),s=A(i),l=A(i),d=A(i);L(a,'service'),L(d,'service-title'),L(s,'service-header'),L(l,'service-icon');const f=he(n,t,r,!0,c);d.innerHTML=n,I(s,l),I(s,d),I(a,s),I(a,f),I(e,a)}I(T,e)}if(a){var k=A(i),D=A(b?l:i);if(L(k,'section-title-wrapper'),L(D,'section-title'),D.innerHTML=a,I(k,D),b){const e=A('span');e.innerHTML=Y(2,3.5),L(e,'section-arrow'),I(k,e),S.className+='--toggle';const t=he(a,c,r);let o=p.serviceCounterLabel;if(M>0&&C(o)){let e=A('span');L(e,'badge'),L(e,'service-counter'),N(e,d,!0),N(e,'data-servicecounter',M),o&&(o=o.split('|'),o=o.length>1&&M>1?o[1]:o[0],N(e,'data-counterlabel',o)),e.innerHTML=M+(o?' '+o:''),I(D,e)}if(h){L(S,'section--expandable');var E=c+'-desc';N(D,'aria-expanded',!1),N(D,'aria-controls',E)}I(k,t)}else N(D,'role','heading'),N(D,'aria-level','3');I(S,k)}if(s){var P=A('p');L(P,'section-desc'),P.innerHTML=s,I(T,P)}if(h&&(N(T,d,'true'),T.id=E,((e,t,o)=>{J(D,_,(()=>{t.classList.contains('is-expanded')?(F(t,'is-expanded'),N(o,'aria-expanded','false'),N(e,d,'true')):(V(t,'is-expanded'),N(o,'aria-expanded','true'),N(e,d,'false'))}))})(T,S,D),g)){const e=A('table'),o=A('thead'),a=A('tbody');if(m){const t=A('caption');L(t,'table-caption'),t.innerHTML=m,e.appendChild(t)}L(e,'section-table'),L(o,'table-head'),L(a,'table-body');const s=f.headers,c=x(s),r=n.Ue.createDocumentFragment(),l=A('tr');for(const e of c){const o=s[e],n=A('th');n.id='cc__row-'+o+t,N(n,'scope','col'),L(n,'table-th'),n.innerHTML=o,I(r,n)}I(l,r),I(o,l);const d=n.Ue.createDocumentFragment();for(const e of u){const o=A('tr');L(o,'table-tr');for(const n of c){const a=s[n],c=e[n],r=A('td'),l=A(i);L(r,'table-td'),N(r,'data-column',a),N(r,'headers','cc__row-'+a+t),l.insertAdjacentHTML('beforeend',c),I(r,l),I(o,r)}I(d,o)}I(a,d),I(e,o),I(e,a),I(T,e)}(h||s)&&I(S,T);const j=n.Fe||n.qe;b?(H||(H=A(i),L(H,'section-toggles')),H.appendChild(S)):H=null,I(j,H||S)})),y&&(n.$e||(n.$e=A(l),L(n.$e,'btn'),N(n.$e,u,'all'),I(D,n.$e),J(n.$e,_,(()=>r('all')))),n.$e.innerHTML=y),h&&(n.je||(n.je=A(l),L(n.je,'btn'),N(n.je,u,'necessary'),I(D,n.je),J(n.je,_,(()=>r([])))),n.je.innerHTML=h),S&&(n.ze||(n.ze=A(l),L(n.ze,'btn'),L(n.ze,'btn--secondary'),N(n.ze,u,'save'),I(E,n.ze),J(n.ze,_,(()=>r()))),n.ze.innerHTML=S),n.Fe&&(n.we.replaceChild(n.Fe,n.qe),n.qe=n.Fe),be(1),o.N||(o.N=!0,oe(b.re.ue,m,n.we),t(e),I(n.Ce,n.Le),Z(n.we),setTimeout((()=>V(n.Le,'cc--anim')),100)),te(2)};function he(e,t,o,n,a){const s=b.o,c=b.ne,i=A('label'),l=A('input'),f=A('span'),u=A('span'),p=A('span'),m=A('span'),g=A('span');if(m.innerHTML=Y(1,3),g.innerHTML=Y(0,3),l.type='checkbox',V(i,'section__toggle-wrapper'),V(l,'section__toggle'),V(m,'toggle__icon-on'),V(g,'toggle__icon-off'),V(f,'toggle__icon'),V(u,'toggle__icon-circle'),V(p,'toggle__label'),N(f,d,'true'),n?(V(i,'toggle-service'),N(l,r,a),c.se[a][t]=l):c.ae[t]=l,n?(e=>{J(l,'change',(()=>{const t=c.se[e],o=c.ae[e];s.Z[e]=[];for(let o in t){const n=t[o];n.checked&&s.Z[e].push(n.value)}o.checked=s.Z[e].length>0}))})(a):(e=>{J(l,_,(()=>{const t=c.se[e],o=l.checked;s.Z[e]=[];for(let n in t)t[n].checked=o,o&&s.Z[e].push(n)}))})(t),l.value=t,p.textContent=e.replace(/<.*>.*<\/.*>/gm,''),I(u,g),I(u,m),I(f,u),s.M)(o.readOnly||o.enabled)&&(l.checked=!0);else if(n){const e=s.Y[a];l.checked=o.readOnly||y(e,t)}else y(s.B,t)&&(l.checked=!0);return o.readOnly&&(l.disabled=!0),I(i,l),I(i,f),I(i,p),i}const Ce=(e,o)=>{const n=b.o,a=b.ne,{hide:s,hidePreferences:c,acceptCategory:r}=e,p=e=>{r(e),c(),s()},g=n.u&&n.u.btsPreferencesModal;if(!g)return;const v=g.title,y=g.closeIconLabel,h=g.acceptAllBtn,C=g.acceptNecessaryBtn,w=g.savePreferencesBtn,S=g.sections||[],x=h||C||w;if(a.Le)a.Fe=A(i),L(a.Fe,'body');else{a.Le=A(i),V(a.Le,'pm-wrapper');const e=A('div');V(e,'pm-overlay'),I(a.Le,e),J(e,_,c),a.we=A(i),V(a.we,'pm--bts'),L(a.we,'bts'),N(a.we,'role','dialog'),N(a.we,d,!0),N(a.we,'aria-modal',!0),N(a.we,'aria-labelledby','pm__title'),J(a.ye,'keydown',(e=>{27===e.keyCode&&c()}),!0),a.Oe=A(i),L(a.Oe,'header'),a.Ke=A(i),V(a.Ke,'cookie'),a.Qe=A(i),V(a.Qe,'cookie-1'),a.We=A(i),V(a.We,'cookie-2'),a.Xe=A(i),V(a.Xe,'cookie-3'),I(a.Ke,a.Qe),I(a.Ke,a.We),I(a.Ke,a.Xe),a.Be=A('h2'),L(a.Be,'title'),a.Be.id='pm__title',a.Re=A(l),L(a.Re,'close-btn'),N(a.Re,'aria-label',g.closeIconLabel||''),J(a.Re,_,c),a.Je=A('span'),a.Je.innerHTML=Y(),I(a.Re,a.Je),a.qe=A(i),L(a.qe,'body'),a.Ge=A(i),L(a.Ge,'footer');var T=A(i);V(T,'btns');var M=A(i),k=A(i);L(M,f),L(k,f),I(a.Ge,M),I(a.Ge,k),I(a.Oe,a.Ke),I(a.Oe,a.Be),I(a.Oe,a.Re),a.ve=A(i),N(a.ve,'tabIndex',-1),I(a.we,a.ve);var D=A(i);V(D,'canvas-container');var E=A('canvas');E.id='canvas';var H='cookies information: ';S.forEach((e=>{H+=JSON.stringify(e)})),t.toCanvas(E,H,(function(e){if(e)throw e})),I(D,E),I(a.qe,D),I(a.we,a.Oe),I(a.we,a.qe),x&&I(a.we,a.Ge),I(a.Le,a.we)}v&&(a.Be.innerHTML=v,y&&N(a.Re,'aria-label',y)),h&&(a.$e||(a.$e=A(l),L(a.$e,'btn'),N(a.$e,u,'all'),I(M,a.$e),J(a.$e,_,(()=>p('all')))),a.$e.innerHTML=h),C&&(a.je||(a.je=A(l),L(a.je,'btn'),N(a.je,u,'necessary'),I(M,a.je),J(a.je,_,(()=>p([])))),a.je.innerHTML=C),w&&(a.ze||(a.ze=A(l),L(a.ze,'btn'),L(a.ze,'btn--secondary'),N(a.ze,u,'save'),I(k,a.ze),J(a.ze,_,(()=>p()))),a.ze.innerHTML=w),a.Fe&&(a.we.replaceChild(a.Fe,a.qe),a.qe=a.Fe),be(2),n.N||(n.N=!0,oe(b.re.ue,m,a.we),o(e),I(a.Ce,a.Le),Z(a.we),setTimeout((()=>V(a.Le,'cc--anim')),100)),te(2)},we=()=>{const e=A('span');return b.ne.Ye||(b.ne.Ye=e),e},Se=(e,t)=>{const o=b.o,n=b.ne,{hide:a,showPreferences:s,acceptCategory:c,showBTSPreferences:r}=e,m=o.u&&o.u.consentModal;if(!m)return;const g=m.acceptAllBtn,v=m.acceptNecessaryBtn,y=m.showPreferencesBtn,h=m.showBTSPreferencesBtn,C=m.closeIconLabel,w=m.footer,S=m.label,x=m.title,T=e=>{a(),c(e)};if(!n.Ze){n.Ze=A(i),n.he=A(i),n.et=A(i),n.tt=A(i),n.ot=A(i),V(n.Ze,'cm-wrapper'),V(n.he,'cm'),j(n.et,'body'),j(n.tt,'texts'),j(n.ot,'btns'),N(n.he,'role','dialog'),N(n.he,'aria-modal','true'),N(n.he,d,'false'),N(n.he,'aria-describedby','cm__desc'),S?N(n.he,'aria-label',S):x&&N(n.he,'aria-labelledby','cm__title');const e='box',t=o.i.guiOptions,a=t&&t.consentModal,s=(a&&a.layout||e).split(' ')[0]===e;x&&C&&s&&(n.Ve||(n.Ve=A(l),n.Ve.innerHTML=Y(),j(n.Ve,'btn'),j(n.Ve,'btn--close'),J(n.Ve,_,(()=>{T([])})),I(n.et,n.Ve)),N(n.Ve,'aria-label',C)),I(n.et,n.tt),(g||v||y||h)&&I(n.et,n.ot),n.be=A(i),N(n.be,'tabIndex',-1),I(n.he,n.be),I(n.he,n.et),I(n.Ze,n.he)}x&&(n.nt||(n.nt=A('h2'),n.nt.className=n.nt.id='cm__title',I(n.tt,n.nt)),n.nt.innerHTML=x);let M=m.description;if(M&&(o.P&&(M=M.replace('{{revisionMessage}}',o.I?'':m.revisionMessage||'')),n.st||(n.st=A('p'),n.st.className=n.st.id='cm__desc',I(n.tt,n.st)),n.st.innerHTML=M),g&&(n.ct||(n.ct=A(l),I(n.ct,we()),j(n.ct,'btn'),N(n.ct,u,'all'),J(n.ct,_,(()=>{T('all')}))),n.ct.firstElementChild.innerHTML=g),v&&(n.Ie||(n.Ie=A(l),I(n.Ie,we()),j(n.Ie,'btn'),N(n.Ie,u,'necessary'),J(n.Ie,_,(()=>{T([])}))),n.Ie.firstElementChild.innerHTML=v),y&&(n.rt||(n.rt=A(l),I(n.rt,we()),j(n.rt,'btn'),j(n.rt,'btn--secondary'),N(n.rt,u,'show'),J(n.rt,'mouseenter',(()=>{o.N||ye(e,t)})),J(n.rt,_,s)),n.rt.firstElementChild.innerHTML=y),h&&(n.it||(n.it=A(l),I(n.it,we()),j(n.it,'btn'),j(n.it,'btn--secondary'),N(n.it,u,'show'),J(n.it,'mouseenter',(()=>{o.lt||Ce(e,t)})),J(n.it,_,r)),n.it.firstElementChild.innerHTML=h),n.dt||(n.dt=A(i),j(n.dt,f),g&&I(n.dt,n.ct),v&&I(n.dt,n.Ie),(g||v)&&I(n.et,n.dt),I(n.ot,n.dt)),n.rt&&!n.ft&&(n.ft=A(i),n.Ie&&n.ct?(j(n.ft,f),I(n.ft,n.rt),I(n.ot,n.ft)):(I(n.dt,n.rt),j(n.dt,f+'--uneven'))),n.it&&!n.ft&&(n.ft=A(i),n.Ie&&n.ct?(j(n.ft,f),I(n.ft,n.it),I(n.ot,n.ft)):(I(n.dt,n.it),j(n.dt,f+'--uneven'))),w){if(!n._t){let e=A(i),t=A(i);n._t=A(i),j(e,'footer'),j(t,'links'),j(n._t,'link-group'),I(t,n._t),I(e,t),I(n.he,e)}n._t.innerHTML=w}be(0),o.k||(o.k=!0,oe(b.re.ue,p,n.he),t(e),I(n.Ce,n.Ze),Z(n.he),setTimeout((()=>V(n.Ze,'cc--anim')),100)),te(1),$(n.et,e,ye,t)},xe=e=>{if(!C(e))return null;if(e in b.o._)return e;let t=e.slice(0,2);return t in b.o._?t:null},Te=()=>b.o.l||b.o.i.language.default,Me=e=>{e&&(b.o.l=e)},ke=async e=>{const t=b.o;let o=xe(e)?e:Te(),n=t._[o];return C(n)?n=await(async e=>{try{const t=await fetch(e);return await t.json()}catch(e){return console.error(e),!1}})(n):S(n)&&(n=await n()),!!n&&(t.u=n,Me(o),!0)},De=()=>{let e=b.o.i.language.rtl,t=b.ne.Ce;e&&t&&(h(e)||(e=[e]),y(e,b.o.l)?V(t,'cc--rtl'):F(t,'cc--rtl'))},Ee=()=>{const e=b.ne;if(e.Ce)return;e.Ce=A(i),e.Ce.id='cc-main',e.Ce.setAttribute('data-nosnippet',''),De();let t=b.o.i.root;t&&C(t)&&(t=document.querySelector(t)),(t||e.Ue.body).appendChild(e.Ce)},Ae=e=>ne((()=>localStorage.removeItem(e))),Ne=(e,t)=>{if(t instanceof RegExp)return e.filter((e=>t.test(e)));{const o=v(e,t);return o>-1?[e[o]]:[]}},He=e=>{const{hostname:t,protocol:o}=location,{name:n,path:a,domain:s,sameSite:c,useLocalStorage:r}=b.t.cookie,i=e?(()=>{const e=b.o.S,t=e?new Date-e:0;return 864e5*q()-t})():864e5*q(),l=new Date;l.setTime(l.getTime()+i),b.o.p.expirationTime=l.getTime();const d=JSON.stringify(b.o.p);let f=n+'='+encodeURIComponent(d)+(0!==i?'; expires='+l.toUTCString():'')+'; Path='+a+'; SameSite='+c;y(t,'.')&&(f+='; Domain='+s),'https:'===o&&(f+='; Secure'),r?((e,t)=>{ne((()=>localStorage.setItem(e,t)))})(n,d):document.cookie=f,b.o.p},Pe=(e,t,o)=>{if(0===e.length)return;const n=o||b.t.cookie.domain,a=t||b.t.cookie.path,s='www.'===n.slice(0,4),c=s&&n.substring(4),r=(e,t)=>{document.cookie=e+'=; path='+a+(t?'; domain=.'+t:'')+'; expires=Thu, 01 Jan 1970 00:00:01 GMT;'};for(const t of e)r(t),r(t,n),s&&r(t,c)},Ie=e=>{const t=e||b.t.cookie.name,o=b.t.cookie.useLocalStorage;return((e,t)=>{let o;return o=ne((()=>JSON.parse(t?e:decodeURIComponent(e))),!0)||{},o})(o?(n=t,ne((()=>localStorage.getItem(n)))||''):Ve(t,!0),o);var n},Ve=(e,t)=>{const o=document.cookie.match('(^|;)\\s*'+e+'\\s*=\\s*([^;]+)');return o?t?o.pop():e:''},je=e=>{const t=document.cookie.split(/;\s*/),o=[];for(const n of t){let t=n.split('=')[0];e?ne((()=>{e.test(t)&&o.push(t)})):o.push(t)}return o},Le=(e,t=[])=>{((e,t)=>{const{O:o,B:n,R:a,N:s,Z:c,J:r,X:i}=b.o;let l=[];if(e){h(e)?l.push(...e):C(e)&&(l='all'===e?o:[e]);for(const e of o)c[e]=y(l,e)?x(i[e]):[]}else l=[...n,...r],s&&(l=(()=>{const e=b.ne.ae;if(!e)return[];let t=[];for(let o in e)e[o].checked&&t.push(o);return t})());l=l.filter((e=>!y(o,e)||!y(t,e))),l.push(...a),U(l)})(e,t),(()=>{const e=b.o,{Z:t,R:o,Y:n,X:a,O:s}=e,c=s;e.te=O(n);for(const s of c){const c=a[s],r=x(c),i=t[s]&&t[s].length>0,l=y(o,s);if(0!==r.length){if(n[s]=[],l)n[s].push(...r);else if(i){const e=t[s];n[s].push(...e)}else n[s]=e.Z[s];n[s]=T(n[s])}}})(),(()=>{const e=b.o;e.V=b.t.mode===n&&e.M?G(e.J,e.B):G(e.B,e.p.categories);let t=e.V.length>0,a=!1;for(const t of e.O)e.ee[t]=G(e.Y[t],e.te[t]),e.ee[t].length>0&&(a=!0);const s=b.ne.ae;for(const t in s)s[t].checked=y(e.B,t);for(const t of e.O){const o=b.ne.se[t],n=e.Y[t];for(const e in o)o[e].checked=y(n,e)}e.C||(e.C=new Date),e.T||(e.T=([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g,(e=>(e^crypto.getRandomValues(new Uint8Array(1))[0]&15>>e/4).toString(16)))),e.p={categories:O(e.B),revision:b.t.revision,data:e.h,consentTimestamp:e.C.toISOString(),consentId:e.T,services:O(e.Y)};let c=!1;const r=t||a;(e.M||r)&&(e.M&&(e.M=!1,c=!0),e.S=e.S?new Date:e.C,e.p.lastConsentTimestamp=e.S.toISOString(),He(),b.t.autoClearCookies&&(c||r)&&(e=>{const t=b.o,o=je(),n=(e=>{const t=b.o;return(e?t.O:t.V).filter((e=>{const o=t.F[e];return!!o&&!o.readOnly&&!!o.autoClear}))})(e);for(const e in t.ee)for(const n of t.ee[e]){const a=t.X[e][n].cookies;if(!y(t.Y[e],n)&&a)for(const e of a){const t=Ne(o,e.name);Pe(t,e.path,e.domain)}}for(const a of n){const n=t.F[a].autoClear,s=n&&n.cookies||[],c=y(t.V,a),r=!y(t.B,a),i=c&&r;if(e?r:i){n.reloadPage&&i&&(t.j=!0);for(const e of s){const t=Ne(o,e.name);Pe(t,e.path,e.domain)}}}})(c),ae()),c&&(oe(b.re.ie),oe(b.re.le),b.t.mode===o)||(r&&oe(b.re.de),e.j&&(e.j=!1,location.reload()))})()},Fe=e=>{const t=b.o.M?[]:b.o.B;return y(t,e)},Oe=(e,t)=>{const o=b.o.M?[]:b.o.Y[t]||[];return y(o,e)},Be=(e,t,o)=>{let n=[];const a=e=>{if(C(e)){let t=Ve(e);''!==t&&n.push(t)}else n.push(...je(e))};if(h(e))for(let t of e)a(t);else a(e);Pe(n,t,o)},Re=e=>{const{ne:t,o:o}=b;if(!o.D){if(!o.k){if(!e)return;Se($e,Ee)}o.D=!0,o.G=M(),o.v&&W(!0),K(t.he,1),V(t.ye,a),N(t.he,d,'false'),setTimeout((()=>{z(b.ne.be)}),100),oe(b.re.fe,p)}},Je=()=>{const{ne:e,o:t,re:o}=b;t.D&&(t.D=!1,t.v&&W(),z(e.Ye,!0),F(e.ye,a),N(e.he,d,'true'),z(t.G),t.G=null,oe(o._e,p))},qe=()=>{const e=b.o;e.A||(e.N||ye($e,Ee),e.A=!0,e.D?e.U=M():e.G=M(),K(b.ne.we,2),V(b.ne.ye,s),N(b.ne.we,d,'false'),setTimeout((()=>{z(b.ne.ve)}),100),oe(b.re.fe,m))},Ge=()=>{const e=b.o;e.A||(e.N||Ce($e,Ee),e.A=!0,e.D?e.U=M():e.G=M(),K(b.ne.we,2),V(b.ne.ye,s),N(b.ne.we,d,'false'),setTimeout((()=>{z(b.ne.ve)}),100),oe(b.re.fe,m))},Ue=()=>{const e=b.o;e.A&&(e.A=!1,(()=>{const e=Ke(),t=b.o.F,o=b.ne.ae,n=b.ne.se,a=e=>y(b.o.J,e);for(const s in o){const c=!!t[s].readOnly;o[s].checked=c||(e?Fe(s):a(s));for(const t in n[s])n[s][t].checked=c||(e?Oe(t,s):a(s))}})(),z(b.ne.Je,!0),F(b.ne.ye,s),N(b.ne.we,d,'true'),e.D?(z(e.U),e.U=null):(z(e.G),e.G=null),oe(b.re._e,m))};var $e={show:Re,hide:Je,showPreferences:qe,hidePreferences:Ue,showBTSPreferences:Ge,acceptCategory:Le};const ze=(e,t)=>{const o=Ie(t);return e?o[e]:o},Ke=()=>!b.o.M;e.acceptCategory=Le,e.acceptService=(e,t)=>{const{O:o,X:n}=b.o;if(!(e&&t&&C(t)&&y(o,t)&&0!==x(n[t]).length))return!1;((e,t)=>{const o=b.o,{X:n,Z:a,N:s}=o,c=b.ne.se[t]||{},r=b.ne.ae[t]||{},i=x(n[t]);if(a[t]=[],C(e)){if('all'===e){if(a[t].push(...i),s)for(let e in c)c[e].checked=!0,E(c[e])}else if(y(i,e)&&a[t].push(e),s)for(let t in c)c[t].checked=e===t,E(c[t])}else if(h(e))for(let o of i){const n=y(e,o);n&&a[t].push(o),s&&(c[o].checked=n,E(c[o]))}const l=0===a[t].length;o.B=l?o.B.filter((e=>e!==t)):T([...o.B,t]),s&&(r.checked=!l,E(r))})(e,t),Le()},e.acceptedCategory=Fe,e.acceptedService=Oe,e.eraseCookies=Be,e.getConfig=e=>{const t=b.t,o=b.o.i;return e?t[e]||o[e]:{...t,...o,cookie:{...t.cookie}}},e.getCookie=ze,e.getUserPreferences=()=>{const{L:e,Y:t}=b.o,{accepted:o,rejected:n}=(()=>{const{M:e,B:t,O:o}=b.o;return{accepted:t,rejected:e?[]:o.filter((e=>!y(t,e)))}})();return O({acceptType:e,acceptedCategories:o,rejectedCategories:n,acceptedServices:t,rejectedServices:B()})},e.hide=Je,e.hidePreferences=Ue,e.loadScript=(e,t)=>{let o=document.querySelector('script[src="'+e+'"]');return new Promise((n=>{if(o)return n(!0);if(o=A('script'),w(t))for(const e in t)N(o,e,t[e]);o.onload=()=>n(!0),o.onerror=()=>{o.remove(),n(!1)},o.src=e,I(document.head,o)}))},e.reset=e=>{const{Ce:t,ye:o}=b.ne,{name:n,path:r,domain:i,useLocalStorage:l}=b.t.cookie;e&&(l?Ae(n):Be(n,r,i));for(const{pe:e,me:t,ge:o}of b.o.m)e.removeEventListener(t,o);t&&t.remove(),o&&o.classList.remove(c,s,a);const d=new g;for(const e in b)b[e]=d[e];window._ccRun=!1},e.run=async e=>{const{o:t,t:o,re:a}=b,s=window;if(!s._ccRun){if(s._ccRun=!0,(e=>{const{ne:t,t:o,o:a}=b,s=o,c=a,{cookie:i}=s,l=b.ce,d=e.cookie,f=e.categories,_=x(f)||[],u=navigator,p=document;t.Ue=p,t.ye=p.documentElement,i.domain=location.hostname,c.i=e,c.F=f,c.O=_,c._=e.language.translations,c.v=!!e.disablePageInteraction,l.ie=e.onFirstConsent,l.le=e.onConsent,l.de=e.onChange,l._e=e.onModalHide,l.fe=e.onModalShow,l.ue=e.onModalReady;const{mode:m,autoShow:g,lazyHtmlGeneration:v,autoClearCookies:h,revision:C,manageScriptTags:S,hideFromBots:T}=e;m===n&&(s.mode=m),'boolean'==typeof h&&(s.autoClearCookies=h),'boolean'==typeof S&&(s.manageScriptTags=S),'number'==typeof C&&C>=0&&(s.revision=C,c.P=!0),'boolean'==typeof g&&(s.autoShow=g),'boolean'==typeof v&&(s.lazyHtmlGeneration=v),!1===T&&(s.hideFromBots=!1),!0===s.hideFromBots&&u&&(c.q=u.userAgent&&/bot|crawl|spider|slurp|teoma/i.test(u.userAgent)||u.webdriver),w(d)&&(s.cookie={...i,...d}),s.autoClearCookies,c.P,s.manageScriptTags,(e=>{const{F:t,X:o,Y:n,Z:a,R:s}=b.o;for(let c of e){const e=t[c],r=e.services||{},i=w(r)&&x(r)||[];o[c]={},n[c]=[],a[c]=[],e.readOnly&&(s.push(c),n[c]=i),b.ne.se[c]={};for(let e of i){const t=r[e];t.Se=!1,o[c][e]=t}}})(_),(()=>{if(!b.t.manageScriptTags)return;const e=b.o,t=D(document,'script['+r+']');for(const o of t){let t=P(o,r),n=o.dataset.service||'',a=!1;if(t&&'!'===t.charAt(0)&&(t=t.slice(1),a=!0),'!'===n.charAt(0)&&(n=n.slice(1),a=!0),y(e.O,t)&&(e.oe.push({Te:o,xe:!1,De:a,Me:t,ke:n}),n)){const o=e.X[t];o[n]||(o[n]={Se:!1})}}})(),Me((()=>{const e=b.o.i.language.autoDetect;if(e){const t={browser:navigator.language,document:document.documentElement.lang},o=xe(t[e]);if(o)return o}return Te()})())})(e),t.q)return;(()=>{const e=b.o,t=b.t,o=Ie(),{categories:a,services:s,consentId:c,consentTimestamp:r,lastConsentTimestamp:i,data:l,revision:d}=o,f=h(a);e.p=o,e.T=c;const _=!!c&&C(c);e.C=r,e.C&&(e.C=new Date(r)),e.S=i,e.S&&(e.S=new Date(i)),e.h=void 0!==l?l:null,e.P&&_&&d!==t.revision&&(e.I=!1),e.M=!(_&&e.I&&e.C&&e.S&&f),t.cookie.useLocalStorage&&!e.M&&(e.M=(new Date).getTime()>(o.expirationTime||0),e.M&&Ae(t.cookie.name)),e.M,(()=>{const e=b.o;for(const t of e.O){const o=e.F[t];if(o.readOnly||o.enabled){e.J.push(t);const o=e.X[t]||{};for(let a in o)e.Z[t].push(a),e.i.mode===n&&e.Y[t].push(a)}}})(),e.M?t.mode===n&&(e.B=[...e.J]):(e.Z={...e.Y},e.Y={...e.Y,...s},U([...e.R,...a]))})();const i=Ke();if(!await ke())return!1;if($(null,c=$e,ye,Ce),b.o.M&&Se(c,Ee),b.t.lazyHtmlGeneration||ye(c,Ee),b.t.lazyHtmlGeneration||Ce(c,Ee),o.autoShow&&!i&&Re(!0),i)return ae(),oe(a.le);o.mode===n&&ae(t.J)}var c},e.setCookieData=e=>{let t,o=e.value,n=e.mode,a=!1;const s=b.o;if('update'===n){s.h=t=ze('data');const e=typeof t==typeof o;if(e&&'object'==typeof t){!t&&(t={});for(let e in o)t[e]!==o[e]&&(t[e]=o[e],a=!0)}else!e&&t||t===o||(t=o,a=!0)}else t=o,a=!0;return a&&(s.h=t,s.p.data=t,He(!0)),a},e.setLanguage=async(e,t)=>{if(!xe(e))return!1;const o=b.o;return!(e===Te()&&!0!==t||!await ke(e)||(Me(e),o.k&&Se($e,Ee),o.N&&ye($e,Ee),De(),0))},e.show=Re,e.showBTSPreferences=Ge,e.showPreferences=qe,e.validConsent=Ke,e.validCookie=e=>''!==Ve(e,!0)},'object'==typeof exports&&'undefined'!=typeof module?t(exports,require('qrcode')):'function'==typeof define&&define.amd?define(['exports','qrcode'],t):t((e='undefined'!=typeof globalThis?globalThis:e||self).CookieConsent={},e.QRCode);
