/*!
* CookieConsent 3.0.1
* https://github.com/orestbida/cookieconsent
* Author Orest Bida
* Released under the MIT License
*/
import e from'qrcode';const t='opt-in',o='opt-out',n='show--consent',a='show--preferences',s='disable--interaction',c='data-category',r='div',i='button',l='aria-hidden',d='btn-group',f='click',_='data-role',u='consentModal',p='preferencesModal';class m{constructor(){this.t={mode:t,revision:0,autoShow:!0,lazyHtmlGeneration:!0,autoClearCookies:!0,manageScriptTags:!0,hideFromBots:!0,cookie:{name:'cc_cookie',expiresAfterDays:182,domain:'',path:'/',sameSite:'Lax'}},this.o={i:{},l:'',_:{},u:{},p:{},m:[],v:!1,h:null,C:null,S:null,M:'',T:!0,k:!1,D:!1,A:!1,N:!1,H:[],P:!1,I:!0,V:[],L:!1,j:'',F:!1,O:[],B:[],R:[],J:[],G:!1,U:!1,$:!1,q:[],K:[],W:[],X:{},Y:{},Z:{},ee:{},te:{},oe:[]},this.ne={ae:{},se:{}},this.ce={},this.re={ie:'cc:onFirstConsent',le:'cc:onConsent',de:'cc:onChange',fe:'cc:onModalShow',_e:'cc:onModalHide',ue:'cc:onModalReady'}}}const g=new m,b=(e,t)=>e.indexOf(t),v=(e,t)=>-1!==b(e,t),y=e=>Array.isArray(e),h=e=>'string'==typeof e,C=e=>!!e&&'object'==typeof e&&!y(e),w=e=>'function'==typeof e,S=e=>Object.keys(e),x=e=>Array.from(new Set(e)),M=()=>document.activeElement,T=e=>e.preventDefault(),k=(e,t)=>e.querySelectorAll(t),D=e=>e.dispatchEvent(new Event('change')),E=e=>{const t=document.createElement(e);return e===i&&(t.type=e),t},A=(e,t,o)=>e.setAttribute(t,o),N=(e,t,o)=>{e.removeAttribute(o?'data-'+t:t)},H=(e,t,o)=>e.getAttribute(o?'data-'+t:t),P=(e,t)=>e.appendChild(t),I=(e,t)=>e.classList.add(t),V=(e,t)=>I(e,'cm__'+t),L=(e,t)=>I(e,'pm__'+t),j=(e,t)=>e.classList.remove(t),F=e=>{if('object'!=typeof e)return e;if(e instanceof Date)return new Date(e.getTime());let t=Array.isArray(e)?[]:{};for(let o in e){let n=e[o];t[o]=F(n)}return t},O=()=>{const e={},{O:t,X:o,Y:n}=g.o;for(const a of t)e[a]=G(n[a],S(o[a]));return e},B=(e,t)=>dispatchEvent(new CustomEvent(e,{detail:t})),R=(e,t,o,n)=>{e.addEventListener(t,o),n&&g.o.m.push({pe:e,me:t,ge:o})},J=()=>{const e=g.t.cookie.expiresAfterDays;return w(e)?e(g.o.j):e},G=(e,t)=>{const o=e||[],n=t||[];return o.filter((e=>!v(n,e))).concat(n.filter((e=>!v(o,e))))},U=e=>{g.o.B=x(e),g.o.j=(()=>{let e='custom';const{B:t,O:o,R:n}=g.o,a=t.length;return a===o.length?e='all':a===n.length&&(e='necessary'),e})()},$=(e,t,o,n)=>{const a='accept-',{show:s,showPreferences:c,hide:r,hidePreferences:i,acceptCategory:l}=t,d=e||document,_=e=>k(d,`[data-cc="${e}"]`),u=(e,t)=>{T(e),l(t),i(),r()},p=_('show-preferencesModal'),m=_('show-consentModal'),b=_(a+'all'),v=_(a+'necessary'),y=_(a+'custom'),h=g.t.lazyHtmlGeneration;for(const e of p)A(e,'aria-haspopup','dialog'),R(e,f,(e=>{T(e),c()})),h&&(R(e,'mouseenter',(e=>{T(e),g.o.N||o(t,n)}),!0),R(e,'focus',(()=>{g.o.N||o(t,n)})));for(let e of m)A(e,'aria-haspopup','dialog'),R(e,f,(e=>{T(e),s(!0)}),!0);for(let e of b)R(e,f,(e=>{u(e,'all')}),!0);for(let e of y)R(e,f,(e=>{u(e)}),!0);for(let e of v)R(e,f,(e=>{u(e,[])}),!0)},z=(e,t)=>{e&&(t&&(e.tabIndex=-1),e.focus(),t&&e.removeAttribute('tabindex'))},q=(e,t)=>{const o=n=>{n.target.removeEventListener('transitionend',o),'opacity'===n.propertyName&&'1'===getComputedStyle(e).opacity&&z((e=>1===e?g.ne.be:g.ne.ve)(t))};R(e,'transitionend',o)};let K;const Q=e=>{clearTimeout(K),e?I(g.ne.ye,s):K=setTimeout((()=>{j(g.ne.ye,s)}),500)},W=['M 19.5 4.5 L 4.5 19.5 M 4.5 4.501 L 19.5 19.5','M 3.572 13.406 L 8.281 18.115 L 20.428 5.885','M 21.999 6.94 L 11.639 17.18 L 2.001 6.82 '],X=(e=0,t=1.5)=>`<svg viewBox="0 0 24 24" stroke-width="${t}"><path d="${W[e]}"/></svg>`,Y=e=>{const t=g.ne,o=g.o;(e=>{const n=e===t.he,a=o.i.disablePageInteraction?t.ye:n?t.Ce:t.ye;R(a,'keydown',(t=>{if('Tab'!==t.key||!(n?o.D&&!o.A:o.A))return;const a=M(),s=n?o.q:o.K;0!==s.length&&(t.shiftKey?a!==s[0]&&e.contains(a)||(T(t),z(s[1])):a!==s[1]&&e.contains(a)||(T(t),z(s[0])))}),!0)})(e)},Z=['[href]',i,'input','details','[tabindex]'].map((e=>e+':not([tabindex="-1"])')).join(','),ee=e=>{const{o:t,ne:o}=g,n=(e,t)=>{const o=k(e,Z);t[0]=o[0],t[1]=o[o.length-1]};1===e&&t.k&&n(o.he,t.q),2===e&&t.N&&n(o.we,t.K)},te=(e,t,o)=>{const{de:n,le:a,ie:s,_e:c,ue:r,fe:i}=g.ce,l=g.re;if(t){const n={modalName:t};return e===l.fe?w(i)&&i(n):e===l._e?w(c)&&c(n):(n.modal=o,w(r)&&r(n)),B(e,n)}const d={cookie:g.o.p};e===l.ie?w(s)&&s(F(d)):e===l.le?w(a)&&a(F(d)):(d.changedCategories=g.o.V,d.changedServices=g.o.ee,w(n)&&n(F(d))),B(e,F(d))},oe=(e,t)=>{try{return e()}catch(e){return!t&&console.warn('CookieConsent:',e),!1}},ne=e=>{const{Y:t,ee:o,O:n,X:a,oe:s,p:r,V:i}=g.o;for(const e of n){const n=o[e]||t[e]||[];for(const o of n){const n=a[e][o];if(!n)continue;const{onAccept:s,onReject:c}=n;!n.Se&&v(t[e],o)?(n.Se=!0,w(s)&&s()):n.Se&&!v(t[e],o)&&(n.Se=!1,w(c)&&c())}}if(!g.t.manageScriptTags)return;const l=s,d=e||r.categories||[],f=(e,n)=>{if(n>=e.length)return;const a=s[n];if(a.xe)return f(e,n+1);const r=a.Me,l=a.Te,_=a.ke,u=v(d,l),p=!!_&&v(t[l],_);if(!_&&!a.De&&u||!_&&a.De&&!u&&v(i,l)||_&&!a.De&&p||_&&a.De&&!p&&v(o[l]||[],_)){a.xe=!0;const t=H(r,'type',!0);N(r,'type',!!t),N(r,c);let o=H(r,'src',!0);o&&N(r,'src',!0);const s=E('script');s.textContent=r.innerHTML;for(const{nodeName:e}of r.attributes)A(s,e,r[e]||H(r,e));t&&(s.type=t),o?s.src=o:o=r.src;const i=!!o&&(!t||['text/javascript','module'].includes(t));if(i&&(s.onload=s.onerror=()=>{f(e,++n)}),r.replaceWith(s),i)return}f(e,++n)};f(l,0)},ae='bottom',se='left',ce='center',re='right',ie='inline',le='wide',de='pm--',fe='box',_e=['middle','top',ae],ue=[se,ce,re],pe={box:{Ee:[le,ie],Ae:_e,Ne:ue,He:ae,Pe:re},cloud:{Ee:[ie],Ae:_e,Ne:ue,He:ae,Pe:ce},bar:{Ee:[ie],Ae:_e.slice(1),Ne:[],He:ae,Pe:''}},me={box:{Ee:[],Ae:[],Ne:[],He:'',Pe:''},bar:{Ee:[le],Ae:[],Ne:[se,re],He:'',Pe:se}},ge=e=>{const t=g.o.i.guiOptions,o=t&&t.consentModal,n=t&&t.preferencesModal,a=t&&t.BTSpreferencesModal;0===e&&be(g.ne.he,pe,o,'cm--',fe,'cm'),1===e&&be(g.ne.we,me,n,de,fe,'pm'),2===e&&be(g.ne.we,me,a,de,fe,'bts-pm')},be=(e,t,o,n,a,s)=>{e.className=s;const c=o&&o.layout,r=o&&o.position,i=o&&o.flipButtons,l=!o||!1!==o.equalWeightButtons,d=c&&c.split(' ')||[],f=d[0],_=d[1],u=f in t?f:a,p=t[u],m=v(p.Ee,_)&&_,b=r&&r.split(' ')||[],y=b[0],h=n===de?b[0]:b[1],C=v(p.Ae,y)?y:p.He,w=v(p.Ne,h)?h:p.Pe,S=t=>{t&&I(e,n+t)};S(u),S(m),S(C),S(w),i&&S('flip');const x=s+'__btn--secondary';if('cm'===s){const{Ie:e,Ve:t}=g.ne;e&&(l?j(e,x):I(e,x)),t&&(l?j(t,x):I(t,x))}else{const{Le:e}=g.ne;e&&(l?j(e,x):I(e,x))}},ve=(e,t)=>{const o=g.o,n=g.ne,{hide:a,hidePreferences:s,acceptCategory:c}=e,u=e=>{c(e),s(),a()},m=o.u&&o.u.preferencesModal;if(!m)return;const b=m.title,v=m.closeIconLabel,y=m.acceptAllBtn,w=m.acceptNecessaryBtn,x=m.savePreferencesBtn,M=m.sections||[],T=y||w||x;if(n.je)n.Fe=E(r),L(n.Fe,'body');else{n.je=E(r),I(n.je,'pm-wrapper');const e=E('div');I(e,'pm-overlay'),P(n.je,e),R(e,f,s),n.we=E(r),I(n.we,'pm'),A(n.we,'role','dialog'),A(n.we,l,!0),A(n.we,'aria-modal',!0),A(n.we,'aria-labelledby','pm__title'),R(n.ye,'keydown',(e=>{27===e.keyCode&&s()}),!0),n.Oe=E(r),L(n.Oe,'header'),n.Be=E('h2'),L(n.Be,'title'),n.Be.id='pm__title',n.Re=E(i),L(n.Re,'close-btn'),A(n.Re,'aria-label',m.closeIconLabel||''),R(n.Re,f,s),n.Je=E('span'),n.Je.innerHTML=X(),P(n.Re,n.Je),n.Ge=E(r),L(n.Ge,'body'),n.Ue=E(r),L(n.Ue,'footer');var k=E(r);I(k,'btns');var D=E(r),N=E(r);L(D,d),L(N,d),P(n.Ue,D),P(n.Ue,N),P(n.Oe,n.Be),P(n.Oe,n.Re),n.ve=E(r),A(n.ve,'tabIndex',-1),P(n.we,n.ve),P(n.we,n.Oe),P(n.we,n.Ge),T&&P(n.we,n.Ue),P(n.je,n.we)}let H;b&&(n.Be.innerHTML=b,v&&A(n.Re,'aria-label',v)),M.forEach(((e,t)=>{const a=e.title,s=e.description,c=e.linkedCategory,d=c&&o.F[c],_=e.cookieTable,u=_&&_.body,p=_&&_.caption,g=u&&u.length>0,b=!!d,v=b&&o.X[c],y=C(v)&&S(v)||[],w=b&&(!!s||!!g||S(v).length>0);var x=E(r);if(L(x,'section'),w||s){var M=E(r);L(M,'section-desc-wrapper')}let T=y.length;if(w&&T>0){const e=E(r);L(e,'section-services');for(const t of y){const o=v[t],n=o&&o.label||t,a=E(r),s=E(r),i=E(r),l=E(r);L(a,'service'),L(l,'service-title'),L(s,'service-header'),L(i,'service-icon');const f=ye(n,t,d,!0,c);l.innerHTML=n,P(s,i),P(s,l),P(a,s),P(a,f),P(e,a)}P(M,e)}if(a){var k=E(r),D=E(b?i:r);if(L(k,'section-title-wrapper'),L(D,'section-title'),D.innerHTML=a,P(k,D),b){const e=E('span');e.innerHTML=X(2,3.5),L(e,'section-arrow'),P(k,e),x.className+='--toggle';const t=ye(a,c,d);let o=m.serviceCounterLabel;if(T>0&&h(o)){let e=E('span');L(e,'badge'),L(e,'service-counter'),A(e,l,!0),A(e,'data-servicecounter',T),o&&(o=o.split('|'),o=o.length>1&&T>1?o[1]:o[0],A(e,'data-counterlabel',o)),e.innerHTML=T+(o?' '+o:''),P(D,e)}if(w){L(x,'section--expandable');var N=c+'-desc';A(D,'aria-expanded',!1),A(D,'aria-controls',N)}P(k,t)}else A(D,'role','heading'),A(D,'aria-level','3');P(x,k)}if(s){var V=E('p');L(V,'section-desc'),V.innerHTML=s,P(M,V)}if(w&&(A(M,l,'true'),M.id=N,((e,t,o)=>{R(D,f,(()=>{t.classList.contains('is-expanded')?(j(t,'is-expanded'),A(o,'aria-expanded','false'),A(e,l,'true')):(I(t,'is-expanded'),A(o,'aria-expanded','true'),A(e,l,'false'))}))})(M,x,D),g)){const e=E('table'),o=E('thead'),a=E('tbody');if(p){const t=E('caption');L(t,'table-caption'),t.innerHTML=p,e.appendChild(t)}L(e,'section-table'),L(o,'table-head'),L(a,'table-body');const s=_.headers,c=S(s),i=n.$e.createDocumentFragment(),l=E('tr');for(const e of c){const o=s[e],n=E('th');n.id='cc__row-'+o+t,A(n,'scope','col'),L(n,'table-th'),n.innerHTML=o,P(i,n)}P(l,i),P(o,l);const d=n.$e.createDocumentFragment();for(const e of u){const o=E('tr');L(o,'table-tr');for(const n of c){const a=s[n],c=e[n],i=E('td'),l=E(r);L(i,'table-td'),A(i,'data-column',a),A(i,'headers','cc__row-'+a+t),l.insertAdjacentHTML('beforeend',c),P(i,l),P(o,i)}P(d,o)}P(a,d),P(e,o),P(e,a),P(M,e)}(w||s)&&P(x,M);const F=n.Fe||n.Ge;b?(H||(H=E(r),L(H,'section-toggles')),H.appendChild(x)):H=null,P(F,H||x)})),y&&(n.ze||(n.ze=E(i),L(n.ze,'btn'),A(n.ze,_,'all'),P(D,n.ze),R(n.ze,f,(()=>u('all')))),n.ze.innerHTML=y),w&&(n.Le||(n.Le=E(i),L(n.Le,'btn'),A(n.Le,_,'necessary'),P(D,n.Le),R(n.Le,f,(()=>u([])))),n.Le.innerHTML=w),x&&(n.qe||(n.qe=E(i),L(n.qe,'btn'),L(n.qe,'btn--secondary'),A(n.qe,_,'save'),P(N,n.qe),R(n.qe,f,(()=>u()))),n.qe.innerHTML=x),n.Fe&&(n.we.replaceChild(n.Fe,n.Ge),n.Ge=n.Fe),ge(1),o.N||(o.N=!0,te(g.re.ue,p,n.we),t(e),P(n.Ce,n.je),Y(n.we),setTimeout((()=>I(n.je,'cc--anim')),100)),ee(2)};function ye(e,t,o,n,a){const s=g.o,r=g.ne,i=E('label'),d=E('input'),_=E('span'),u=E('span'),p=E('span'),m=E('span'),b=E('span');if(m.innerHTML=X(1,3),b.innerHTML=X(0,3),d.type='checkbox',I(i,'section__toggle-wrapper'),I(d,'section__toggle'),I(m,'toggle__icon-on'),I(b,'toggle__icon-off'),I(_,'toggle__icon'),I(u,'toggle__icon-circle'),I(p,'toggle__label'),A(_,l,'true'),n?(I(i,'toggle-service'),A(d,c,a),r.se[a][t]=d):r.ae[t]=d,n?(e=>{R(d,'change',(()=>{const t=r.se[e],o=r.ae[e];s.Z[e]=[];for(let o in t){const n=t[o];n.checked&&s.Z[e].push(n.value)}o.checked=s.Z[e].length>0}))})(a):(e=>{R(d,f,(()=>{const t=r.se[e],o=d.checked;s.Z[e]=[];for(let n in t)t[n].checked=o,o&&s.Z[e].push(n)}))})(t),d.value=t,p.textContent=e.replace(/<.*>.*<\/.*>/gm,''),P(u,b),P(u,m),P(_,u),s.T)(o.readOnly||o.enabled)&&(d.checked=!0);else if(n){const e=s.Y[a];d.checked=o.readOnly||v(e,t)}else v(s.B,t)&&(d.checked=!0);return o.readOnly&&(d.disabled=!0),P(i,d),P(i,_),P(i,p),i}const he=(t,o)=>{const n=g.o,a=g.ne,{hide:s,hidePreferences:c,acceptCategory:u}=t,m=e=>{u(e),c(),s()},b=n.u&&n.u.btsPreferencesModal;if(!b)return;const v=b.title,y=b.closeIconLabel,h=b.acceptAllBtn,C=b.acceptNecessaryBtn,w=b.savePreferencesBtn,S=b.sections||[],x=h||C||w;if(a.je)a.Fe=E(r),L(a.Fe,'body');else{a.je=E(r),I(a.je,'pm-wrapper');const t=E('div');I(t,'pm-overlay'),P(a.je,t),R(t,f,c),a.we=E(r),I(a.we,'pm--bts'),L(a.we,'bts'),A(a.we,'role','dialog'),A(a.we,l,!0),A(a.we,'aria-modal',!0),A(a.we,'aria-labelledby','pm__title'),R(a.ye,'keydown',(e=>{27===e.keyCode&&c()}),!0),a.Oe=E(r),L(a.Oe,'header'),a.Ke=E(r),I(a.Ke,'cookie'),a.Qe=E(r),I(a.Qe,'cookie-1'),a.We=E(r),I(a.We,'cookie-2'),a.Xe=E(r),I(a.Xe,'cookie-3'),P(a.Ke,a.Qe),P(a.Ke,a.We),P(a.Ke,a.Xe),a.Be=E('h2'),L(a.Be,'title'),a.Be.id='pm__title',a.Re=E(i),L(a.Re,'close-btn'),A(a.Re,'aria-label',b.closeIconLabel||''),R(a.Re,f,c),a.Je=E('span'),a.Je.innerHTML=X(),P(a.Re,a.Je),a.Ge=E(r),L(a.Ge,'body'),a.Ue=E(r),L(a.Ue,'footer');var M=E(r);I(M,'btns');var T=E(r),k=E(r);L(T,d),L(k,d),P(a.Ue,T),P(a.Ue,k),P(a.Oe,a.Ke),P(a.Oe,a.Be),P(a.Oe,a.Re),a.ve=E(r),A(a.ve,'tabIndex',-1),P(a.we,a.ve);var D=E('canvas');D.id='canvas';var N='cookies information: ';S.forEach((e=>{N+=JSON.stringify(e)})),e.toCanvas(D,N,(function(e){if(e)throw e})),P(a.Ge,D),P(a.we,a.Oe),P(a.we,a.Ge),x&&P(a.we,a.Ue),P(a.je,a.we)}v&&(a.Be.innerHTML=v,y&&A(a.Re,'aria-label',y)),h&&(a.ze||(a.ze=E(i),L(a.ze,'btn'),A(a.ze,_,'all'),P(T,a.ze),R(a.ze,f,(()=>m('all')))),a.ze.innerHTML=h),C&&(a.Le||(a.Le=E(i),L(a.Le,'btn'),A(a.Le,_,'necessary'),P(T,a.Le),R(a.Le,f,(()=>m([])))),a.Le.innerHTML=C),w&&(a.qe||(a.qe=E(i),L(a.qe,'btn'),L(a.qe,'btn--secondary'),A(a.qe,_,'save'),P(k,a.qe),R(a.qe,f,(()=>m()))),a.qe.innerHTML=w),a.Fe&&(a.we.replaceChild(a.Fe,a.Ge),a.Ge=a.Fe),ge(2),n.N||(n.N=!0,te(g.re.ue,p,a.we),o(t),P(a.Ce,a.je),Y(a.we),setTimeout((()=>I(a.je,'cc--anim')),100)),ee(2)},Ce=()=>{const e=E('span');return g.ne.Ye||(g.ne.Ye=e),e},we=(e,t)=>{const o=g.o,n=g.ne,{hide:a,showPreferences:s,acceptCategory:c,showBTSPreferences:p}=e,m=o.u&&o.u.consentModal;if(!m)return;const b=m.acceptAllBtn,v=m.acceptNecessaryBtn,y=m.showPreferencesBtn,h=m.showBTSPreferencesBtn,C=m.closeIconLabel,w=m.footer,S=m.label,x=m.title,M=e=>{a(),c(e)};if(!n.Ze){n.Ze=E(r),n.he=E(r),n.et=E(r),n.tt=E(r),n.ot=E(r),I(n.Ze,'cm-wrapper'),I(n.he,'cm'),V(n.et,'body'),V(n.tt,'texts'),V(n.ot,'btns'),A(n.he,'role','dialog'),A(n.he,'aria-modal','true'),A(n.he,l,'false'),A(n.he,'aria-describedby','cm__desc'),S?A(n.he,'aria-label',S):x&&A(n.he,'aria-labelledby','cm__title');const e='box',t=o.i.guiOptions,a=t&&t.consentModal,s=(a&&a.layout||e).split(' ')[0]===e;x&&C&&s&&(n.Ve||(n.Ve=E(i),n.Ve.innerHTML=X(),V(n.Ve,'btn'),V(n.Ve,'btn--close'),R(n.Ve,f,(()=>{M([])})),P(n.et,n.Ve)),A(n.Ve,'aria-label',C)),P(n.et,n.tt),(b||v||y||h)&&P(n.et,n.ot),n.be=E(r),A(n.be,'tabIndex',-1),P(n.he,n.be),P(n.he,n.et),P(n.Ze,n.he)}x&&(n.nt||(n.nt=E('h2'),n.nt.className=n.nt.id='cm__title',P(n.tt,n.nt)),n.nt.innerHTML=x);let T=m.description;if(T&&(o.P&&(T=T.replace('{{revisionMessage}}',o.I?'':m.revisionMessage||'')),n.st||(n.st=E('p'),n.st.className=n.st.id='cm__desc',P(n.tt,n.st)),n.st.innerHTML=T),b&&(n.ct||(n.ct=E(i),P(n.ct,Ce()),V(n.ct,'btn'),A(n.ct,_,'all'),R(n.ct,f,(()=>{M('all')}))),n.ct.firstElementChild.innerHTML=b),v&&(n.Ie||(n.Ie=E(i),P(n.Ie,Ce()),V(n.Ie,'btn'),A(n.Ie,_,'necessary'),R(n.Ie,f,(()=>{M([])}))),n.Ie.firstElementChild.innerHTML=v),y&&(n.rt||(n.rt=E(i),P(n.rt,Ce()),V(n.rt,'btn'),V(n.rt,'btn--secondary'),A(n.rt,_,'show'),R(n.rt,'mouseenter',(()=>{o.N||ve(e,t)})),R(n.rt,f,s)),n.rt.firstElementChild.innerHTML=y),h&&(n.it||(n.it=E(i),P(n.it,Ce()),V(n.it,'btn'),V(n.it,'btn--secondary'),A(n.it,_,'show'),R(n.it,'mouseenter',(()=>{o.lt||he(e,t)})),R(n.it,f,p)),n.it.firstElementChild.innerHTML=h),n.dt||(n.dt=E(r),V(n.dt,d),b&&P(n.dt,n.ct),v&&P(n.dt,n.Ie),(b||v)&&P(n.et,n.dt),P(n.ot,n.dt)),n.rt&&!n.ft&&(n.ft=E(r),n.Ie&&n.ct?(V(n.ft,d),P(n.ft,n.rt),P(n.ot,n.ft)):(P(n.dt,n.rt),V(n.dt,d+'--uneven'))),n.it&&!n.ft&&(n.ft=E(r),n.Ie&&n.ct?(V(n.ft,d),P(n.ft,n.it),P(n.ot,n.ft)):(P(n.dt,n.it),V(n.dt,d+'--uneven'))),w){if(!n._t){let e=E(r),t=E(r);n._t=E(r),V(e,'footer'),V(t,'links'),V(n._t,'link-group'),P(t,n._t),P(e,t),P(n.he,e)}n._t.innerHTML=w}ge(0),o.k||(o.k=!0,te(g.re.ue,u,n.he),t(e),P(n.Ce,n.Ze),Y(n.he),setTimeout((()=>I(n.Ze,'cc--anim')),100)),ee(1),$(n.et,e,ve,t)},Se=e=>{if(!h(e))return null;if(e in g.o._)return e;let t=e.slice(0,2);return t in g.o._?t:null},xe=()=>g.o.l||g.o.i.language.default,Me=e=>{e&&(g.o.l=e)},Te=async e=>{const t=g.o;let o=Se(e)?e:xe(),n=t._[o];return h(n)?n=await(async e=>{try{const t=await fetch(e);return await t.json()}catch(e){return console.error(e),!1}})(n):w(n)&&(n=await n()),!!n&&(t.u=n,Me(o),!0)},ke=()=>{let e=g.o.i.language.rtl,t=g.ne.Ce;e&&t&&(y(e)||(e=[e]),v(e,g.o.l)?I(t,'cc--rtl'):j(t,'cc--rtl'))},De=()=>{const e=g.ne;if(e.Ce)return;e.Ce=E(r),e.Ce.id='cc-main',e.Ce.setAttribute('data-nosnippet',''),ke();let t=g.o.i.root;t&&h(t)&&(t=document.querySelector(t)),(t||e.$e.body).appendChild(e.Ce)},Ee=e=>oe((()=>localStorage.removeItem(e))),Ae=(e,t)=>{if(t instanceof RegExp)return e.filter((e=>t.test(e)));{const o=b(e,t);return o>-1?[e[o]]:[]}},Ne=e=>{const{hostname:t,protocol:o}=location,{name:n,path:a,domain:s,sameSite:c,useLocalStorage:r}=g.t.cookie,i=e?(()=>{const e=g.o.S,t=e?new Date-e:0;return 864e5*J()-t})():864e5*J(),l=new Date;l.setTime(l.getTime()+i),g.o.p.expirationTime=l.getTime();const d=JSON.stringify(g.o.p);let f=n+'='+encodeURIComponent(d)+(0!==i?'; expires='+l.toUTCString():'')+'; Path='+a+'; SameSite='+c;v(t,'.')&&(f+='; Domain='+s),'https:'===o&&(f+='; Secure'),r?((e,t)=>{oe((()=>localStorage.setItem(e,t)))})(n,d):document.cookie=f,g.o.p},He=(e,t,o)=>{if(0===e.length)return;const n=o||g.t.cookie.domain,a=t||g.t.cookie.path,s='www.'===n.slice(0,4),c=s&&n.substring(4),r=(e,t)=>{document.cookie=e+'=; path='+a+(t?'; domain=.'+t:'')+'; expires=Thu, 01 Jan 1970 00:00:01 GMT;'};for(const t of e)r(t),r(t,n),s&&r(t,c)},Pe=e=>{const t=e||g.t.cookie.name,o=g.t.cookie.useLocalStorage;return((e,t)=>{let o;return o=oe((()=>JSON.parse(t?e:decodeURIComponent(e))),!0)||{},o})(o?(n=t,oe((()=>localStorage.getItem(n)))||''):Ie(t,!0),o);var n},Ie=(e,t)=>{const o=document.cookie.match('(^|;)\\s*'+e+'\\s*=\\s*([^;]+)');return o?t?o.pop():e:''},Ve=e=>{const t=document.cookie.split(/;\s*/),o=[];for(const n of t){let t=n.split('=')[0];e?oe((()=>{e.test(t)&&o.push(t)})):o.push(t)}return o},Le=(e,n=[])=>{((e,t)=>{const{O:o,B:n,R:a,N:s,Z:c,J:r,X:i}=g.o;let l=[];if(e){y(e)?l.push(...e):h(e)&&(l='all'===e?o:[e]);for(const e of o)c[e]=v(l,e)?S(i[e]):[]}else l=[...n,...r],s&&(l=(()=>{const e=g.ne.ae;if(!e)return[];let t=[];for(let o in e)e[o].checked&&t.push(o);return t})());l=l.filter((e=>!v(o,e)||!v(t,e))),l.push(...a),U(l)})(e,n),(()=>{const e=g.o,{Z:t,R:o,Y:n,X:a,O:s}=e,c=s;e.te=F(n);for(const s of c){const c=a[s],r=S(c),i=t[s]&&t[s].length>0,l=v(o,s);if(0!==r.length){if(n[s]=[],l)n[s].push(...r);else if(i){const e=t[s];n[s].push(...e)}else n[s]=e.Z[s];n[s]=x(n[s])}}})(),(()=>{const e=g.o;e.V=g.t.mode===o&&e.T?G(e.J,e.B):G(e.B,e.p.categories);let n=e.V.length>0,a=!1;for(const t of e.O)e.ee[t]=G(e.Y[t],e.te[t]),e.ee[t].length>0&&(a=!0);const s=g.ne.ae;for(const t in s)s[t].checked=v(e.B,t);for(const t of e.O){const o=g.ne.se[t],n=e.Y[t];for(const e in o)o[e].checked=v(n,e)}e.C||(e.C=new Date),e.M||(e.M=([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g,(e=>(e^crypto.getRandomValues(new Uint8Array(1))[0]&15>>e/4).toString(16)))),e.p={categories:F(e.B),revision:g.t.revision,data:e.h,consentTimestamp:e.C.toISOString(),consentId:e.M,services:F(e.Y)};let c=!1;const r=n||a;(e.T||r)&&(e.T&&(e.T=!1,c=!0),e.S=e.S?new Date:e.C,e.p.lastConsentTimestamp=e.S.toISOString(),Ne(),g.t.autoClearCookies&&(c||r)&&(e=>{const t=g.o,o=Ve(),n=(e=>{const t=g.o;return(e?t.O:t.V).filter((e=>{const o=t.F[e];return!!o&&!o.readOnly&&!!o.autoClear}))})(e);for(const e in t.ee)for(const n of t.ee[e]){const a=t.X[e][n].cookies;if(!v(t.Y[e],n)&&a)for(const e of a){const t=Ae(o,e.name);He(t,e.path,e.domain)}}for(const a of n){const n=t.F[a].autoClear,s=n&&n.cookies||[],c=v(t.V,a),r=!v(t.B,a),i=c&&r;if(e?r:i){n.reloadPage&&i&&(t.L=!0);for(const e of s){const t=Ae(o,e.name);He(t,e.path,e.domain)}}}})(c),ne()),c&&(te(g.re.ie),te(g.re.le),g.t.mode===t)||(r&&te(g.re.de),e.L&&(e.L=!1,location.reload()))})()},je=e=>{const t=g.o.T?[]:g.o.B;return v(t,e)},Fe=(e,t)=>{const{O:o,X:n}=g.o;if(!(e&&t&&h(t)&&v(o,t)&&0!==S(n[t]).length))return!1;((e,t)=>{const o=g.o,{X:n,Z:a,N:s}=o,c=g.ne.se[t]||{},r=g.ne.ae[t]||{},i=S(n[t]);if(a[t]=[],h(e)){if('all'===e){if(a[t].push(...i),s)for(let e in c)c[e].checked=!0,D(c[e])}else if(v(i,e)&&a[t].push(e),s)for(let t in c)c[t].checked=e===t,D(c[t])}else if(y(e))for(let o of i){const n=v(e,o);n&&a[t].push(o),s&&(c[o].checked=n,D(c[o]))}const l=0===a[t].length;o.B=l?o.B.filter((e=>e!==t)):x([...o.B,t]),s&&(r.checked=!l,D(r))})(e,t),Le()},Oe=(e,t)=>{const o=g.o.T?[]:g.o.Y[t]||[];return v(o,e)},Be=e=>''!==Ie(e,!0),Re=(e,t,o)=>{let n=[];const a=e=>{if(h(e)){let t=Ie(e);''!==t&&n.push(t)}else n.push(...Ve(e))};if(y(e))for(let t of e)a(t);else a(e);He(n,t,o)},Je=e=>{const{ne:t,o:o}=g;if(!o.D){if(!o.k){if(!e)return;we(qe,De)}o.D=!0,o.U=M(),o.v&&Q(!0),q(t.he,1),I(t.ye,n),A(t.he,l,'false'),setTimeout((()=>{z(g.ne.be)}),100),te(g.re.fe,u)}},Ge=()=>{const{ne:e,o:t,re:o}=g;t.D&&(t.D=!1,t.v&&Q(),z(e.Ye,!0),j(e.ye,n),A(e.he,l,'true'),z(t.U),t.U=null,te(o._e,u))},Ue=()=>{const e=g.o;e.A||(e.N||ve(qe,De),e.A=!0,e.D?e.$=M():e.U=M(),q(g.ne.we,2),I(g.ne.ye,a),A(g.ne.we,l,'false'),setTimeout((()=>{z(g.ne.ve)}),100),te(g.re.fe,p))},$e=()=>{const e=g.o;e.A||(e.N||he(qe,De),e.A=!0,e.D?e.$=M():e.U=M(),q(g.ne.we,2),I(g.ne.ye,a),A(g.ne.we,l,'false'),setTimeout((()=>{z(g.ne.ve)}),100),te(g.re.fe,p))},ze=()=>{const e=g.o;e.A&&(e.A=!1,(()=>{const e=et(),t=g.o.F,o=g.ne.ae,n=g.ne.se,a=e=>v(g.o.J,e);for(const s in o){const c=!!t[s].readOnly;o[s].checked=c||(e?je(s):a(s));for(const t in n[s])n[s][t].checked=c||(e?Oe(t,s):a(s))}})(),z(g.ne.Je,!0),j(g.ne.ye,a),A(g.ne.we,l,'true'),e.D?(z(e.$),e.$=null):(z(e.U),e.U=null),te(g.re._e,p))};var qe={show:Je,hide:Ge,showPreferences:Ue,hidePreferences:ze,showBTSPreferences:$e,acceptCategory:Le};const Ke=async(e,t)=>{if(!Se(e))return!1;const o=g.o;return!(e===xe()&&!0!==t||!await Te(e)||(Me(e),o.k&&we(qe,De),o.N&&ve(qe,De),ke(),0))},Qe=()=>{const{j:e,Y:t}=g.o,{accepted:o,rejected:n}=(()=>{const{T:e,B:t,O:o}=g.o;return{accepted:t,rejected:e?[]:o.filter((e=>!v(t,e)))}})();return F({acceptType:e,acceptedCategories:o,rejectedCategories:n,acceptedServices:t,rejectedServices:O()})},We=(e,t)=>{let o=document.querySelector('script[src="'+e+'"]');return new Promise((n=>{if(o)return n(!0);if(o=E('script'),C(t))for(const e in t)A(o,e,t[e]);o.onload=()=>n(!0),o.onerror=()=>{o.remove(),n(!1)},o.src=e,P(document.head,o)}))},Xe=e=>{let t,o=e.value,n=e.mode,a=!1;const s=g.o;if('update'===n){s.h=t=Ye('data');const e=typeof t==typeof o;if(e&&'object'==typeof t){!t&&(t={});for(let e in o)t[e]!==o[e]&&(t[e]=o[e],a=!0)}else!e&&t||t===o||(t=o,a=!0)}else t=o,a=!0;return a&&(s.h=t,s.p.data=t,Ne(!0)),a},Ye=(e,t)=>{const o=Pe(t);return e?o[e]:o},Ze=e=>{const t=g.t,o=g.o.i;return e?t[e]||o[e]:{...t,...o,cookie:{...t.cookie}}},et=()=>!g.o.T,tt=async e=>{const{o:t,t:n,re:a}=g,s=window;if(!s._ccRun){if(s._ccRun=!0,(e=>{const{ne:t,t:n,o:a}=g,s=n,r=a,{cookie:i}=s,l=g.ce,d=e.cookie,f=e.categories,_=S(f)||[],u=navigator,p=document;t.$e=p,t.ye=p.documentElement,i.domain=location.hostname,r.i=e,r.F=f,r.O=_,r._=e.language.translations,r.v=!!e.disablePageInteraction,l.ie=e.onFirstConsent,l.le=e.onConsent,l.de=e.onChange,l._e=e.onModalHide,l.fe=e.onModalShow,l.ue=e.onModalReady;const{mode:m,autoShow:b,lazyHtmlGeneration:y,autoClearCookies:h,revision:w,manageScriptTags:x,hideFromBots:M}=e;m===o&&(s.mode=m),'boolean'==typeof h&&(s.autoClearCookies=h),'boolean'==typeof x&&(s.manageScriptTags=x),'number'==typeof w&&w>=0&&(s.revision=w,r.P=!0),'boolean'==typeof b&&(s.autoShow=b),'boolean'==typeof y&&(s.lazyHtmlGeneration=y),!1===M&&(s.hideFromBots=!1),!0===s.hideFromBots&&u&&(r.G=u.userAgent&&/bot|crawl|spider|slurp|teoma/i.test(u.userAgent)||u.webdriver),C(d)&&(s.cookie={...i,...d}),s.autoClearCookies,r.P,s.manageScriptTags,(e=>{const{F:t,X:o,Y:n,Z:a,R:s}=g.o;for(let c of e){const e=t[c],r=e.services||{},i=C(r)&&S(r)||[];o[c]={},n[c]=[],a[c]=[],e.readOnly&&(s.push(c),n[c]=i),g.ne.se[c]={};for(let e of i){const t=r[e];t.Se=!1,o[c][e]=t}}})(_),(()=>{if(!g.t.manageScriptTags)return;const e=g.o,t=k(document,'script['+c+']');for(const o of t){let t=H(o,c),n=o.dataset.service||'',a=!1;if(t&&'!'===t.charAt(0)&&(t=t.slice(1),a=!0),'!'===n.charAt(0)&&(n=n.slice(1),a=!0),v(e.O,t)&&(e.oe.push({Me:o,xe:!1,De:a,Te:t,ke:n}),n)){const o=e.X[t];o[n]||(o[n]={Se:!1})}}})(),Me((()=>{const e=g.o.i.language.autoDetect;if(e){const t={browser:navigator.language,document:document.documentElement.lang},o=Se(t[e]);if(o)return o}return xe()})())})(e),t.G)return;(()=>{const e=g.o,t=g.t,n=Pe(),{categories:a,services:s,consentId:c,consentTimestamp:r,lastConsentTimestamp:i,data:l,revision:d}=n,f=y(a);e.p=n,e.M=c;const _=!!c&&h(c);e.C=r,e.C&&(e.C=new Date(r)),e.S=i,e.S&&(e.S=new Date(i)),e.h=void 0!==l?l:null,e.P&&_&&d!==t.revision&&(e.I=!1),e.T=!(_&&e.I&&e.C&&e.S&&f),t.cookie.useLocalStorage&&!e.T&&(e.T=(new Date).getTime()>(n.expirationTime||0),e.T&&Ee(t.cookie.name)),e.T,(()=>{const e=g.o;for(const t of e.O){const n=e.F[t];if(n.readOnly||n.enabled){e.J.push(t);const n=e.X[t]||{};for(let a in n)e.Z[t].push(a),e.i.mode===o&&e.Y[t].push(a)}}})(),e.T?t.mode===o&&(e.B=[...e.J]):(e.Z={...e.Y},e.Y={...e.Y,...s},U([...e.R,...a]))})();const i=et();if(!await Te())return!1;if($(null,r=qe,ve,he),g.o.T&&we(r,De),g.t.lazyHtmlGeneration||ve(r,De),g.t.lazyHtmlGeneration||he(r,De),n.autoShow&&!i&&Je(!0),i)return ne(),te(a.le);n.mode===o&&ne(t.J)}var r},ot=e=>{const{Ce:t,ye:o}=g.ne,{name:c,path:r,domain:i,useLocalStorage:l}=g.t.cookie;e&&(l?Ee(c):Re(c,r,i));for(const{pe:e,me:t,ge:o}of g.o.m)e.removeEventListener(t,o);t&&t.remove(),o&&o.classList.remove(s,a,n);const d=new m;for(const e in g)g[e]=d[e];window._ccRun=!1};export{Le as acceptCategory,Fe as acceptService,je as acceptedCategory,Oe as acceptedService,Re as eraseCookies,Ze as getConfig,Ye as getCookie,Qe as getUserPreferences,Ge as hide,ze as hidePreferences,We as loadScript,ot as reset,tt as run,Xe as setCookieData,Ke as setLanguage,Je as show,$e as showBTSPreferences,Ue as showPreferences,et as validConsent,Be as validCookie};
