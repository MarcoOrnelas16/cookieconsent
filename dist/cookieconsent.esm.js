/*!
* CookieConsent 3.0.1
* https://github.com/orestbida/cookieconsent
* Author Orest Bida
* Released under the MIT License
*/
const e='opt-in',t='opt-out',o='show--consent',n='show--preferences',a='disable--interaction',s='data-category',c='div',r='button',i='aria-hidden',l='btn-group',d='click',f='data-role',_='consentModal',p='preferencesModal';class u{constructor(){this.t={mode:e,revision:0,autoShow:!0,lazyHtmlGeneration:!0,autoClearCookies:!0,manageScriptTags:!0,hideFromBots:!0,cookie:{name:'cc_cookie',expiresAfterDays:182,domain:'',path:'/',sameSite:'Lax'}},this.o={i:{},l:'',_:{},p:{},u:{},m:[],v:!1,h:null,C:null,S:null,M:'',T:!0,k:!1,D:!1,A:!1,N:!1,H:[],I:!1,P:!0,V:[],j:!1,L:'',B:!1,F:[],O:[],R:[],G:[],J:!1,U:!1,$:!1,q:[],K:[],W:[],X:{},Y:{},Z:{},ee:{},te:{},oe:[]},this.ne={ae:{},se:{}},this.ce={},this.re={ie:'cc:onFirstConsent',le:'cc:onConsent',de:'cc:onChange',fe:'cc:onModalShow',_e:'cc:onModalHide',pe:'cc:onModalReady'}}}const g=new u,m=(e,t)=>e.indexOf(t),b=(e,t)=>-1!==m(e,t),v=e=>Array.isArray(e),y=e=>'string'==typeof e,h=e=>!!e&&'object'==typeof e&&!v(e),w=e=>'function'==typeof e,C=e=>Object.keys(e),S=e=>Array.from(new Set(e)),x=()=>document.activeElement,M=e=>e.preventDefault(),T=(e,t)=>e.querySelectorAll(t),k=e=>e.dispatchEvent(new Event('change')),D=e=>{const t=document.createElement(e);return e===r&&(t.type=e),t},E=(e,t,o)=>e.setAttribute(t,o),A=(e,t,o)=>{e.removeAttribute(o?'data-'+t:t)},N=(e,t,o)=>e.getAttribute(o?'data-'+t:t),H=(e,t)=>e.appendChild(t),I=(e,t)=>e.classList.add(t),P=(e,t)=>I(e,'cm__'+t),V=(e,t)=>I(e,'pm__'+t),j=(e,t)=>e.classList.remove(t),L=(e,t)=>e.classList.contains(t),B=e=>{if('object'!=typeof e)return e;if(e instanceof Date)return new Date(e.getTime());let t=Array.isArray(e)?[]:{};for(let o in e){let n=e[o];t[o]=B(n)}return t},F=()=>{const e={},{F:t,X:o,Y:n}=g.o;for(const a of t)e[a]=J(n[a],C(o[a]));return e},O=(e,t)=>dispatchEvent(new CustomEvent(e,{detail:t})),R=(e,t,o,n)=>{e.addEventListener(t,o),n&&g.o.m.push({ue:e,ge:t,me:o})},G=()=>{const e=g.t.cookie.expiresAfterDays;return w(e)?e(g.o.L):e},J=(e,t)=>{const o=e||[],n=t||[];return o.filter((e=>!b(n,e))).concat(n.filter((e=>!b(o,e))))},U=e=>{g.o.O=S(e),g.o.L=(()=>{let e='custom';const{O:t,F:o,R:n}=g.o,a=t.length;return a===o.length?e='all':a===n.length&&(e='necessary'),e})()},$=(e,t,o,n)=>{const a='accept-',{show:s,showPreferences:c,hide:r,hidePreferences:i,acceptCategory:l}=t,f=e||document,_=e=>T(f,`[data-cc="${e}"]`),p=(e,t)=>{M(e),l(t),i(),r()},u=_('show-preferencesModal'),m=_('show-consentModal'),b=_(a+'all'),v=_(a+'necessary'),y=_(a+'custom'),h=g.t.lazyHtmlGeneration;for(const e of u)E(e,'aria-haspopup','dialog'),R(e,d,(e=>{M(e),c()})),h&&(R(e,'mouseenter',(e=>{M(e),g.o.N||o(t,n)}),!0),R(e,'focus',(()=>{g.o.N||o(t,n)})));for(let e of m)E(e,'aria-haspopup','dialog'),R(e,d,(e=>{M(e),s(!0)}),!0);for(let e of b)R(e,d,(e=>{p(e,'all')}),!0);for(let e of y)R(e,d,(e=>{p(e)}),!0);for(let e of v)R(e,d,(e=>{p(e,[])}),!0)},q=(e,t)=>{e&&(t&&(e.tabIndex=-1),e.focus(),t&&e.removeAttribute('tabindex'))},z=(e,t)=>{const o=n=>{n.target.removeEventListener('transitionend',o),'opacity'===n.propertyName&&'1'===getComputedStyle(e).opacity&&q((e=>1===e?g.ne.be:g.ne.ve)(t))};R(e,'transitionend',o)};let Q;const K=e=>{clearTimeout(Q),e?I(g.ne.ye,a):Q=setTimeout((()=>{j(g.ne.ye,a)}),500)},W=['M 19.5 4.5 L 4.5 19.5 M 4.5 4.501 L 19.5 19.5','M 3.572 13.406 L 8.281 18.115 L 20.428 5.885','M 21.999 6.94 L 11.639 17.18 L 2.001 6.82 '],X=(e=0,t=1.5)=>`<svg viewBox="0 0 24 24" stroke-width="${t}"><path d="${W[e]}"/></svg>`,Y=e=>{const t=g.ne,o=g.o;(e=>{const n=e===t.he,a=o.i.disablePageInteraction?t.ye:n?t.we:t.ye;R(a,'keydown',(t=>{if('Tab'!==t.key||!(n?o.D&&!o.A:o.A))return;const a=x(),s=n?o.q:o.K;0!==s.length&&(t.shiftKey?a!==s[0]&&e.contains(a)||(M(t),q(s[1])):a!==s[1]&&e.contains(a)||(M(t),q(s[0])))}),!0)})(e)},Z=['[href]',r,'input','details','[tabindex]'].map((e=>e+':not([tabindex="-1"])')).join(','),ee=e=>{const{o:t,ne:o}=g,n=(e,t)=>{const o=T(e,Z);t[0]=o[0],t[1]=o[o.length-1]};1===e&&t.k&&n(o.he,t.q),2===e&&t.N&&n(o.Ce,t.K)},te=(e,t,o)=>{const{de:n,le:a,ie:s,_e:c,pe:r,fe:i}=g.ce,l=g.re;if(t){const n={modalName:t};return e===l.fe?w(i)&&i(n):e===l._e?w(c)&&c(n):(n.modal=o,w(r)&&r(n)),O(e,n)}const d={cookie:g.o.u};e===l.ie?w(s)&&s(B(d)):e===l.le?w(a)&&a(B(d)):(d.changedCategories=g.o.V,d.changedServices=g.o.ee,w(n)&&n(B(d))),O(e,B(d))},oe=(e,t)=>{try{return e()}catch(e){return!t&&console.warn('CookieConsent:',e),!1}},ne=e=>{const{Y:t,ee:o,F:n,X:a,oe:c,u:r,V:i}=g.o;for(const e of n){const n=o[e]||t[e]||[];for(const o of n){const n=a[e][o];if(!n)continue;const{onAccept:s,onReject:c}=n;!n.Se&&b(t[e],o)?(n.Se=!0,w(s)&&s()):n.Se&&!b(t[e],o)&&(n.Se=!1,w(c)&&c())}}if(!g.t.manageScriptTags)return;const l=c,d=e||r.categories||[],f=(e,n)=>{if(n>=e.length)return;const a=c[n];if(a.xe)return f(e,n+1);const r=a.Me,l=a.Te,_=a.ke,p=b(d,l),u=!!_&&b(t[l],_);if(!_&&!a.De&&p||!_&&a.De&&!p&&b(i,l)||_&&!a.De&&u||_&&a.De&&!u&&b(o[l]||[],_)){a.xe=!0;const t=N(r,'type',!0);A(r,'type',!!t),A(r,s);let o=N(r,'src',!0);o&&A(r,'src',!0);const c=D('script');c.textContent=r.innerHTML;for(const{nodeName:e}of r.attributes)E(c,e,r[e]||N(r,e));t&&(c.type=t),o?c.src=o:o=r.src;const i=!!o&&(!t||['text/javascript','module'].includes(t));if(i&&(c.onload=c.onerror=()=>{f(e,++n)}),r.replaceWith(c),i)return}f(e,++n)};f(l,0)},ae='bottom',se='left',ce='center',re='right',ie='inline',le='wide',de='pm--',fe='box',_e=['middle','top',ae],pe=[se,ce,re],ue={box:{Ee:[le,ie],Ae:_e,Ne:pe,He:ae,Ie:re},cloud:{Ee:[ie],Ae:_e,Ne:pe,He:ae,Ie:ce},bar:{Ee:[ie],Ae:_e.slice(1),Ne:[],He:ae,Ie:''}},ge={box:{Ee:[],Ae:[],Ne:[],He:'',Ie:''},bar:{Ee:[le],Ae:[],Ne:[se,re],He:'',Ie:se}},me=e=>{const t=g.o.i.guiOptions,o=t&&t.consentModal,n=t&&t.preferencesModal,a=t&&t.BTSpreferencesModal;0===e&&be(g.ne.he,ue,o,'cm--',fe,'cm'),1===e&&be(g.ne.Ce,ge,n,de,fe,'pm'),2===e&&be(g.ne.Ce,ge,a,de,fe,'bts-pm')},be=(e,t,o,n,a,s)=>{e.className=s;const c=o&&o.layout,r=o&&o.position,i=o&&o.flipButtons,l=!o||!1!==o.equalWeightButtons,d=c&&c.split(' ')||[],f=d[0],_=d[1],p=f in t?f:a,u=t[p],m=b(u.Ee,_)&&_,v=r&&r.split(' ')||[],y=v[0],h=n===de?v[0]:v[1],w=b(u.Ae,y)?y:u.He,C=b(u.Ne,h)?h:u.Ie,S=t=>{t&&I(e,n+t)};S(p),S(m),S(w),S(C),i&&S('flip');const x=s+'__btn--secondary';if('cm'===s){const{Pe:e,Ve:t}=g.ne;e&&(l?j(e,x):I(e,x)),t&&(l?j(t,x):I(t,x))}else{const{je:e}=g.ne;e&&(l?j(e,x):I(e,x))}},ve=(e,t)=>{const o=g.o,n=g.ne,{hide:a,hidePreferences:s,acceptCategory:_}=e,u=e=>{_(e),s(),a()},m=o.p&&o.p.preferencesModal;if(!m)return;const b=m.title,v=m.closeIconLabel,w=m.acceptAllBtn,S=m.acceptNecessaryBtn,x=m.savePreferencesBtn,M=m.sections||[],T=w||S||x;if(n.Le)n.Be=D(c),V(n.Be,'body');else{n.Le=D(c),I(n.Le,'pm-wrapper');const e=D('div');I(e,'pm-overlay'),H(n.Le,e),R(e,d,s),n.Ce=D(c),I(n.Ce,'pm'),E(n.Ce,'role','dialog'),E(n.Ce,i,!0),E(n.Ce,'aria-modal',!0),E(n.Ce,'aria-labelledby','pm__title'),R(n.ye,'keydown',(e=>{27===e.keyCode&&s()}),!0),n.Fe=D(c),V(n.Fe,'header'),n.Oe=D('h2'),V(n.Oe,'title'),n.Oe.id='pm__title',n.Re=D(r),V(n.Re,'close-btn'),E(n.Re,'aria-label',m.closeIconLabel||''),R(n.Re,d,s),n.Ge=D('span'),n.Ge.innerHTML=X(),H(n.Re,n.Ge),n.Je=D(c),V(n.Je,'body'),n.Ue=D(c),V(n.Ue,'footer');var k=D(c);I(k,'btns');var A=D(c),N=D(c);V(A,l),V(N,l),H(n.Ue,A),H(n.Ue,N),H(n.Fe,n.Oe),H(n.Fe,n.Re),n.ve=D(c),E(n.ve,'tabIndex',-1),H(n.Ce,n.ve),H(n.Ce,n.Fe),H(n.Ce,n.Je),T&&H(n.Ce,n.Ue),H(n.Le,n.Ce)}let P;b&&(n.Oe.innerHTML=b,v&&E(n.Re,'aria-label',v)),M.forEach(((e,t)=>{const a=e.title,s=e.description,l=e.linkedCategory,f=l&&o.B[l],_=e.cookieTable,p=_&&_.body,u=_&&_.caption,g=p&&p.length>0,b=!!f,v=b&&o.X[l],w=h(v)&&C(v)||[],S=b&&(!!s||!!g||C(v).length>0);var x=D(c);if(V(x,'section'),S||s){var M=D(c);V(M,'section-desc-wrapper')}let T=w.length;if(S&&T>0){const e=D(c);V(e,'section-services');for(const t of w){const o=v[t],n=o&&o.label||t,a=D(c),s=D(c),r=D(c),i=D(c);V(a,'service'),V(i,'service-title'),V(s,'service-header'),V(r,'service-icon');const d=ye(n,t,f,!0,l);i.innerHTML=n,H(s,r),H(s,i),H(a,s),H(a,d),H(e,a)}H(M,e)}if(a){var k=D(c),A=D(b?r:c);if(V(k,'section-title-wrapper'),V(A,'section-title'),A.innerHTML=a,H(k,A),b){const e=D('span');e.innerHTML=X(2,3.5),V(e,'section-arrow'),H(k,e),x.className+='--toggle';const t=ye(a,l,f);let o=m.serviceCounterLabel;if(T>0&&y(o)){let e=D('span');V(e,'badge'),V(e,'service-counter'),E(e,i,!0),E(e,'data-servicecounter',T),o&&(o=o.split('|'),o=o.length>1&&T>1?o[1]:o[0],E(e,'data-counterlabel',o)),e.innerHTML=T+(o?' '+o:''),H(A,e)}if(S){V(x,'section--expandable');var N=l+'-desc';E(A,'aria-expanded',!1),E(A,'aria-controls',N)}H(k,t)}else E(A,'role','heading'),E(A,'aria-level','3');H(x,k)}if(s){var B=D('p');V(B,'section-desc'),B.innerHTML=s,H(M,B)}if(S&&(E(M,i,'true'),M.id=N,((e,t,o)=>{R(A,d,(()=>{L(t,'is-expanded')?(j(t,'is-expanded'),E(o,'aria-expanded','false'),E(e,i,'true')):(I(t,'is-expanded'),E(o,'aria-expanded','true'),E(e,i,'false'))}))})(M,x,A),g)){const e=D('table'),o=D('thead'),a=D('tbody');if(u){const t=D('caption');V(t,'table-caption'),t.innerHTML=u,e.appendChild(t)}V(e,'section-table'),V(o,'table-head'),V(a,'table-body');const s=_.headers,r=C(s),i=n.$e.createDocumentFragment(),l=D('tr');for(const e of r){const o=s[e],n=D('th');n.id='cc__row-'+o+t,E(n,'scope','col'),V(n,'table-th'),n.innerHTML=o,H(i,n)}H(l,i),H(o,l);const d=n.$e.createDocumentFragment();for(const e of p){const o=D('tr');V(o,'table-tr');for(const n of r){const a=s[n],r=e[n],i=D('td'),l=D(c);V(i,'table-td'),E(i,'data-column',a),E(i,'headers','cc__row-'+a+t),l.insertAdjacentHTML('beforeend',r),H(i,l),H(o,i)}H(d,o)}H(a,d),H(e,o),H(e,a),H(M,e)}(S||s)&&H(x,M);const F=n.Be||n.Je;b?(P||(P=D(c),V(P,'section-toggles')),P.appendChild(x)):P=null,H(F,P||x)})),w&&(n.qe||(n.qe=D(r),V(n.qe,'btn'),E(n.qe,f,'all'),H(A,n.qe),R(n.qe,d,(()=>u('all')))),n.qe.innerHTML=w),S&&(n.je||(n.je=D(r),V(n.je,'btn'),E(n.je,f,'necessary'),H(A,n.je),R(n.je,d,(()=>u([])))),n.je.innerHTML=S),x&&(n.ze||(n.ze=D(r),V(n.ze,'btn'),V(n.ze,'btn--secondary'),E(n.ze,f,'save'),H(N,n.ze),R(n.ze,d,(()=>u()))),n.ze.innerHTML=x),n.Be&&(n.Ce.replaceChild(n.Be,n.Je),n.Je=n.Be),me(1),o.N||(o.N=!0,te(g.re.pe,p,n.Ce),t(e),H(n.we,n.Le),Y(n.Ce),setTimeout((()=>I(n.Le,'cc--anim')),100)),ee(2)};function ye(e,t,o,n,a){const c=g.o,r=g.ne,l=D('label'),f=D('input'),_=D('span'),p=D('span'),u=D('span'),m=D('span'),v=D('span');if(m.innerHTML=X(1,3),v.innerHTML=X(0,3),f.type='checkbox',I(l,'section__toggle-wrapper'),I(f,'section__toggle'),I(m,'toggle__icon-on'),I(v,'toggle__icon-off'),I(_,'toggle__icon'),I(p,'toggle__icon-circle'),I(u,'toggle__label'),E(_,i,'true'),n?(I(l,'toggle-service'),E(f,s,a),r.se[a][t]=f):r.ae[t]=f,n?(e=>{R(f,'change',(()=>{const t=r.se[e],o=r.ae[e];c.Z[e]=[];for(let o in t){const n=t[o];n.checked&&c.Z[e].push(n.value)}o.checked=c.Z[e].length>0}))})(a):(e=>{R(f,d,(()=>{const t=r.se[e],o=f.checked;c.Z[e]=[];for(let n in t)t[n].checked=o,o&&c.Z[e].push(n)}))})(t),f.value=t,u.textContent=e.replace(/<.*>.*<\/.*>/gm,''),H(p,v),H(p,m),H(_,p),c.T)(o.readOnly||o.enabled)&&(f.checked=!0);else if(n){const e=c.Y[a];f.checked=o.readOnly||b(e,t)}else b(c.O,t)&&(f.checked=!0);return o.readOnly&&(f.disabled=!0),H(l,f),H(l,_),H(l,u),l}const he=(e,t)=>{const o=g.o,n=g.ne,{hide:a,hidePreferences:s,acceptCategory:_}=e,u=e=>{_(e),s(),a()},m=o.p&&o.p.btsPreferencesModal;if(!m)return;const b=m.title,v=m.closeIconLabel,w=m.acceptAllBtn,S=m.acceptNecessaryBtn,x=m.savePreferencesBtn,M=m.sections||[],T=w||S||x;if(n.Le)n.Be=D(c),V(n.Be,'body');else{n.Le=D(c),I(n.Le,'pm-wrapper');const e=D('div');I(e,'pm-overlay'),H(n.Le,e),R(e,d,s),n.Ce=D(c),I(n.Ce,'pm--bts'),V(n.Ce,'bts'),E(n.Ce,'role','dialog'),E(n.Ce,i,!0),E(n.Ce,'aria-modal',!0),E(n.Ce,'aria-labelledby','pm__title'),R(n.ye,'keydown',(e=>{27===e.keyCode&&s()}),!0),n.Fe=D(c),V(n.Fe,'header'),n.Qe=D(c),I(n.Qe,'cookie'),n.Ke=D(c),I(n.Ke,'cookie-1'),n.We=D(c),I(n.We,'cookie-2'),n.Xe=D(c),I(n.Xe,'cookie-3'),H(n.Qe,n.Ke),H(n.Qe,n.We),H(n.Qe,n.Xe),n.Oe=D('h2'),V(n.Oe,'title'),n.Oe.id='pm__title',n.Re=D(r),V(n.Re,'close-btn'),E(n.Re,'aria-label',m.closeIconLabel||''),R(n.Re,d,s),n.Ge=D('span'),n.Ge.innerHTML=X(),H(n.Re,n.Ge),n.Je=D(c),V(n.Je,'body'),n.Ue=D(c),V(n.Ue,'footer');var k=D(c);I(k,'btns');var A=D(c),N=D(c);V(A,l),V(N,l),H(n.Ue,A),H(n.Ue,N),H(n.Fe,n.Qe),H(n.Fe,n.Oe),H(n.Fe,n.Re),n.ve=D(c),E(n.ve,'tabIndex',-1),H(n.Ce,n.ve);var P=D(c);P.id='qrcode',I(P,'code-contaienr');var B=D('script');E(B,'type','text/javascript'),B.text='new QRCode(document.getElementById("qrcode"), "http://google.com");',H(P,B),H(n.Je,P),H(n.Ce,n.Fe),H(n.Ce,n.Je),T&&H(n.Ce,n.Ue),H(n.Le,n.Ce)}let F;b&&(n.Oe.innerHTML=b,v&&E(n.Re,'aria-label',v)),M.forEach(((e,t)=>{const a=e.title,s=e.description,l=e.linkedCategory,f=l&&o.B[l],_=e.cookieTable,p=_&&_.body,u=_&&_.caption,g=p&&p.length>0,b=!!f,v=b&&o.X[l],w=h(v)&&C(v)||[],S=b&&(!!s||!!g||C(v).length>0);var x=D(c);if(V(x,'section'),S||s){var M=D(c);V(M,'section-desc-wrapper')}let T=w.length;if(S&&T>0){const e=D(c);V(e,'section-services');for(const t of w){const o=v[t],n=o&&o.label||t,a=D(c),s=D(c),r=D(c),i=D(c);V(a,'service'),V(i,'service-title'),V(s,'service-header'),V(r,'service-icon');const d=we(n,t,f,!0,l);i.innerHTML=n,H(s,r),H(s,i),H(a,s),H(a,d),H(e,a)}H(M,e)}if(a){var k=D(c),A=D(b?r:c);if(V(k,'section-title-wrapper'),V(A,'section-title'),A.innerHTML=a,H(k,A),b){const e=D('span');e.innerHTML=X(2,3.5),V(e,'section-arrow'),H(k,e),x.className+='--toggle';const t=we(a,l,f);let o=m.serviceCounterLabel;if(T>0&&y(o)){let e=D('span');V(e,'badge'),V(e,'service-counter'),E(e,i,!0),E(e,'data-servicecounter',T),o&&(o=o.split('|'),o=o.length>1&&T>1?o[1]:o[0],E(e,'data-counterlabel',o)),e.innerHTML=T+(o?' '+o:''),H(A,e)}if(S){V(x,'section--expandable');var N=l+'-desc';E(A,'aria-expanded',!1),E(A,'aria-controls',N)}H(k,t)}else E(A,'role','heading'),E(A,'aria-level','3');H(x,k)}if(s){var P=D('p');V(P,'section-desc'),P.innerHTML=s,H(M,P)}if(S&&(E(M,i,'true'),M.id=N,((e,t,o)=>{R(A,d,(()=>{L(t,'is-expanded')?(j(t,'is-expanded'),E(o,'aria-expanded','false'),E(e,i,'true')):(I(t,'is-expanded'),E(o,'aria-expanded','true'),E(e,i,'false'))}))})(M,x,A),g)){const e=D('table'),o=D('thead'),a=D('tbody');if(u){const t=D('caption');V(t,'table-caption'),t.innerHTML=u,e.appendChild(t)}V(e,'section-table'),V(o,'table-head'),V(a,'table-body');const s=_.headers,r=C(s),i=n.$e.createDocumentFragment(),l=D('tr');for(const e of r){const o=s[e],n=D('th');n.id='cc__row-'+o+t,E(n,'scope','col'),V(n,'table-th'),n.innerHTML=o,H(i,n)}H(l,i),H(o,l);const d=n.$e.createDocumentFragment();for(const e of p){const o=D('tr');V(o,'table-tr');for(const n of r){const a=s[n],r=e[n],i=D('td'),l=D(c);V(i,'table-td'),E(i,'data-column',a),E(i,'headers','cc__row-'+a+t),l.insertAdjacentHTML('beforeend',r),H(i,l),H(o,i)}H(d,o)}H(a,d),H(e,o),H(e,a),H(M,e)}(S||s)&&H(x,M);const B=n.Be||n.Je;b?(F||(F=D(c),V(F,'section-toggles')),F.appendChild(x)):F=null,H(B,F||x)})),w&&(n.qe||(n.qe=D(r),V(n.qe,'btn'),E(n.qe,f,'all'),H(A,n.qe),R(n.qe,d,(()=>u('all')))),n.qe.innerHTML=w),S&&(n.je||(n.je=D(r),V(n.je,'btn'),E(n.je,f,'necessary'),H(A,n.je),R(n.je,d,(()=>u([])))),n.je.innerHTML=S),x&&(n.ze||(n.ze=D(r),V(n.ze,'btn'),V(n.ze,'btn--secondary'),E(n.ze,f,'save'),H(N,n.ze),R(n.ze,d,(()=>u()))),n.ze.innerHTML=x),n.Be&&(n.Ce.replaceChild(n.Be,n.Je),n.Je=n.Be),me(2),o.N||(o.N=!0,te(g.re.pe,p,n.Ce),t(e),H(n.we,n.Le),Y(n.Ce),setTimeout((()=>I(n.Le,'cc--anim')),100)),ee(2)};function we(e,t,o,n,a){const c=g.o,r=g.ne,l=D('label'),f=D('input'),_=D('span'),p=D('span'),u=D('span'),m=D('span'),v=D('span');if(m.innerHTML=X(1,3),v.innerHTML=X(0,3),f.type='checkbox',I(l,'section__toggle-wrapper'),I(f,'section__toggle'),I(m,'toggle__icon-on'),I(v,'toggle__icon-off'),I(_,'toggle__icon'),I(p,'toggle__icon-circle'),I(u,'toggle__label'),E(_,i,'true'),n?(I(l,'toggle-service'),E(f,s,a),r.se[a][t]=f):r.ae[t]=f,n?(e=>{R(f,'change',(()=>{const t=r.se[e],o=r.ae[e];c.Z[e]=[];for(let o in t){const n=t[o];n.checked&&c.Z[e].push(n.value)}o.checked=c.Z[e].length>0}))})(a):(e=>{R(f,d,(()=>{const t=r.se[e],o=f.checked;c.Z[e]=[];for(let n in t)t[n].checked=o,o&&c.Z[e].push(n)}))})(t),f.value=t,u.textContent=e.replace(/<.*>.*<\/.*>/gm,''),H(p,v),H(p,m),H(_,p),c.T)(o.readOnly||o.enabled)&&(f.checked=!0);else if(n){const e=c.Y[a];f.checked=o.readOnly||b(e,t)}else b(c.O,t)&&(f.checked=!0);return o.readOnly&&(f.disabled=!0),H(l,f),H(l,_),H(l,u),l}const Ce=()=>{const e=D('span');return g.ne.Ye||(g.ne.Ye=e),e},Se=(e,t)=>{const o=g.o,n=g.ne,{hide:a,showPreferences:s,acceptCategory:p,showBTSPreferences:u}=e,m=o.p&&o.p.consentModal;if(!m)return;const b=m.acceptAllBtn,v=m.acceptNecessaryBtn,y=m.showPreferencesBtn,h=m.showBTSPreferencesBtn,w=m.closeIconLabel,C=m.footer,S=m.label,x=m.title,M=e=>{a(),p(e)};if(!n.Ze){n.Ze=D(c),n.he=D(c),n.et=D(c),n.tt=D(c),n.ot=D(c),I(n.Ze,'cm-wrapper'),I(n.he,'cm'),P(n.et,'body'),P(n.tt,'texts'),P(n.ot,'btns'),E(n.he,'role','dialog'),E(n.he,'aria-modal','true'),E(n.he,i,'false'),E(n.he,'aria-describedby','cm__desc'),S?E(n.he,'aria-label',S):x&&E(n.he,'aria-labelledby','cm__title');const e='box',t=o.i.guiOptions,a=t&&t.consentModal,s=(a&&a.layout||e).split(' ')[0]===e;x&&w&&s&&(n.Ve||(n.Ve=D(r),n.Ve.innerHTML=X(),P(n.Ve,'btn'),P(n.Ve,'btn--close'),R(n.Ve,d,(()=>{M([])})),H(n.et,n.Ve)),E(n.Ve,'aria-label',w)),H(n.et,n.tt),(b||v||y||h)&&H(n.et,n.ot),n.be=D(c),E(n.be,'tabIndex',-1),H(n.he,n.be),H(n.he,n.et),H(n.Ze,n.he)}x&&(n.nt||(n.nt=D('h2'),n.nt.className=n.nt.id='cm__title',H(n.tt,n.nt)),n.nt.innerHTML=x);let T=m.description;if(T&&(o.I&&(T=T.replace('{{revisionMessage}}',o.P?'':m.revisionMessage||'')),n.st||(n.st=D('p'),n.st.className=n.st.id='cm__desc',H(n.tt,n.st)),n.st.innerHTML=T),b&&(n.ct||(n.ct=D(r),H(n.ct,Ce()),P(n.ct,'btn'),E(n.ct,f,'all'),R(n.ct,d,(()=>{M('all')}))),n.ct.firstElementChild.innerHTML=b),v&&(n.Pe||(n.Pe=D(r),H(n.Pe,Ce()),P(n.Pe,'btn'),E(n.Pe,f,'necessary'),R(n.Pe,d,(()=>{M([])}))),n.Pe.firstElementChild.innerHTML=v),y&&(n.rt||(n.rt=D(r),H(n.rt,Ce()),P(n.rt,'btn'),P(n.rt,'btn--secondary'),E(n.rt,f,'show'),R(n.rt,'mouseenter',(()=>{o.N||ve(e,t)})),R(n.rt,d,s)),n.rt.firstElementChild.innerHTML=y),h&&(n.it||(n.it=D(r),H(n.it,Ce()),P(n.it,'btn'),P(n.it,'btn--secondary'),E(n.it,f,'show'),R(n.it,'mouseenter',(()=>{o.lt||he(e,t)})),R(n.it,d,u)),n.it.firstElementChild.innerHTML=h),n.dt||(n.dt=D(c),P(n.dt,l),b&&H(n.dt,n.ct),v&&H(n.dt,n.Pe),(b||v)&&H(n.et,n.dt),H(n.ot,n.dt)),n.rt&&!n.ft&&(n.ft=D(c),n.Pe&&n.ct?(P(n.ft,l),H(n.ft,n.rt),H(n.ot,n.ft)):(H(n.dt,n.rt),P(n.dt,l+'--uneven'))),n.it&&!n.ft&&(n.ft=D(c),n.Pe&&n.ct?(P(n.ft,l),H(n.ft,n.it),H(n.ot,n.ft)):(H(n.dt,n.it),P(n.dt,l+'--uneven'))),C){if(!n._t){let e=D(c),t=D(c);n._t=D(c),P(e,'footer'),P(t,'links'),P(n._t,'link-group'),H(t,n._t),H(e,t),H(n.he,e)}n._t.innerHTML=C}me(0),o.k||(o.k=!0,te(g.re.pe,_,n.he),t(e),H(n.we,n.Ze),Y(n.he),setTimeout((()=>I(n.Ze,'cc--anim')),100)),ee(1),$(n.et,e,ve,t)},xe=e=>{if(!y(e))return null;if(e in g.o._)return e;let t=e.slice(0,2);return t in g.o._?t:null},Me=()=>g.o.l||g.o.i.language.default,Te=e=>{e&&(g.o.l=e)},ke=async e=>{const t=g.o;let o=xe(e)?e:Me(),n=t._[o];return y(n)?n=await(async e=>{try{const t=await fetch(e);return await t.json()}catch(e){return console.error(e),!1}})(n):w(n)&&(n=await n()),!!n&&(t.p=n,Te(o),!0)},De=()=>{let e=g.o.i.language.rtl,t=g.ne.we;e&&t&&(v(e)||(e=[e]),b(e,g.o.l)?I(t,'cc--rtl'):j(t,'cc--rtl'))},Ee=()=>{const e=g.ne;if(e.we)return;e.we=D(c),e.we.id='cc-main',e.we.setAttribute('data-nosnippet',''),De();let t=g.o.i.root;t&&y(t)&&(t=document.querySelector(t)),(t||e.$e.body).appendChild(e.we)},Ae=e=>oe((()=>localStorage.removeItem(e))),Ne=(e,t)=>{if(t instanceof RegExp)return e.filter((e=>t.test(e)));{const o=m(e,t);return o>-1?[e[o]]:[]}},He=e=>{const{hostname:t,protocol:o}=location,{name:n,path:a,domain:s,sameSite:c,useLocalStorage:r}=g.t.cookie,i=e?(()=>{const e=g.o.S,t=e?new Date-e:0;return 864e5*G()-t})():864e5*G(),l=new Date;l.setTime(l.getTime()+i),g.o.u.expirationTime=l.getTime();const d=JSON.stringify(g.o.u);let f=n+'='+encodeURIComponent(d)+(0!==i?'; expires='+l.toUTCString():'')+'; Path='+a+'; SameSite='+c;b(t,'.')&&(f+='; Domain='+s),'https:'===o&&(f+='; Secure'),r?((e,t)=>{oe((()=>localStorage.setItem(e,t)))})(n,d):document.cookie=f,g.o.u},Ie=(e,t,o)=>{if(0===e.length)return;const n=o||g.t.cookie.domain,a=t||g.t.cookie.path,s='www.'===n.slice(0,4),c=s&&n.substring(4),r=(e,t)=>{document.cookie=e+'=; path='+a+(t?'; domain=.'+t:'')+'; expires=Thu, 01 Jan 1970 00:00:01 GMT;'};for(const t of e)r(t),r(t,n),s&&r(t,c)},Pe=e=>{const t=e||g.t.cookie.name,o=g.t.cookie.useLocalStorage;return((e,t)=>{let o;return o=oe((()=>JSON.parse(t?e:decodeURIComponent(e))),!0)||{},o})(o?(n=t,oe((()=>localStorage.getItem(n)))||''):Ve(t,!0),o);var n},Ve=(e,t)=>{const o=document.cookie.match('(^|;)\\s*'+e+'\\s*=\\s*([^;]+)');return o?t?o.pop():e:''},je=e=>{const t=document.cookie.split(/;\s*/),o=[];for(const n of t){let t=n.split('=')[0];e?oe((()=>{e.test(t)&&o.push(t)})):o.push(t)}return o},Le=(o,n=[])=>{((e,t)=>{const{F:o,O:n,R:a,N:s,Z:c,G:r,X:i}=g.o;let l=[];if(e){v(e)?l.push(...e):y(e)&&(l='all'===e?o:[e]);for(const e of o)c[e]=b(l,e)?C(i[e]):[]}else l=[...n,...r],s&&(l=(()=>{const e=g.ne.ae;if(!e)return[];let t=[];for(let o in e)e[o].checked&&t.push(o);return t})());l=l.filter((e=>!b(o,e)||!b(t,e))),l.push(...a),U(l)})(o,n),(e=>{const t=g.o,{Z:o,R:n,Y:a,X:s,F:c}=t,r=c;t.te=B(a);for(const e of r){const c=s[e],r=C(c),i=o[e]&&o[e].length>0,l=b(n,e);if(0!==r.length){if(a[e]=[],l)a[e].push(...r);else if(i){const t=o[e];a[e].push(...t)}else a[e]=t.Z[e];a[e]=S(a[e])}}})(),(()=>{const o=g.o;o.V=g.t.mode===t&&o.T?J(o.G,o.O):J(o.O,o.u.categories);let n=o.V.length>0,a=!1;for(const e of o.F)o.ee[e]=J(o.Y[e],o.te[e]),o.ee[e].length>0&&(a=!0);const s=g.ne.ae;for(const e in s)s[e].checked=b(o.O,e);for(const e of o.F){const t=g.ne.se[e],n=o.Y[e];for(const e in t)t[e].checked=b(n,e)}o.C||(o.C=new Date),o.M||(o.M=([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g,(e=>(e^crypto.getRandomValues(new Uint8Array(1))[0]&15>>e/4).toString(16)))),o.u={categories:B(o.O),revision:g.t.revision,data:o.h,consentTimestamp:o.C.toISOString(),consentId:o.M,services:B(o.Y)};let c=!1;const r=n||a;(o.T||r)&&(o.T&&(o.T=!1,c=!0),o.S=o.S?new Date:o.C,o.u.lastConsentTimestamp=o.S.toISOString(),He(),g.t.autoClearCookies&&(c||r)&&(e=>{const t=g.o,o=je(),n=(e=>{const t=g.o;return(e?t.F:t.V).filter((e=>{const o=t.B[e];return!!o&&!o.readOnly&&!!o.autoClear}))})(e);for(const e in t.ee)for(const n of t.ee[e]){const a=t.X[e][n].cookies;if(!b(t.Y[e],n)&&a)for(const e of a){const t=Ne(o,e.name);Ie(t,e.path,e.domain)}}for(const a of n){const n=t.B[a].autoClear,s=n&&n.cookies||[],c=b(t.V,a),r=!b(t.O,a),i=c&&r;if(e?r:i){n.reloadPage&&i&&(t.j=!0);for(const e of s){const t=Ne(o,e.name);Ie(t,e.path,e.domain)}}}})(c),ne()),c&&(te(g.re.ie),te(g.re.le),g.t.mode===e)||(r&&te(g.re.de),o.j&&(o.j=!1,location.reload()))})()},Be=e=>{const t=g.o.T?[]:g.o.O;return b(t,e)},Fe=(e,t)=>{const{F:o,X:n}=g.o;if(!(e&&t&&y(t)&&b(o,t)&&0!==C(n[t]).length))return!1;((e,t)=>{const o=g.o,{X:n,Z:a,N:s}=o,c=g.ne.se[t]||{},r=g.ne.ae[t]||{},i=C(n[t]);if(a[t]=[],y(e)){if('all'===e){if(a[t].push(...i),s)for(let e in c)c[e].checked=!0,k(c[e])}else if(b(i,e)&&a[t].push(e),s)for(let t in c)c[t].checked=e===t,k(c[t])}else if(v(e))for(let o of i){const n=b(e,o);n&&a[t].push(o),s&&(c[o].checked=n,k(c[o]))}const l=0===a[t].length;o.O=l?o.O.filter((e=>e!==t)):S([...o.O,t]),s&&(r.checked=!l,k(r))})(e,t),Le()},Oe=(e,t)=>{const o=g.o.T?[]:g.o.Y[t]||[];return b(o,e)},Re=e=>''!==Ve(e,!0),Ge=(e,t,o)=>{let n=[];const a=e=>{if(y(e)){let t=Ve(e);''!==t&&n.push(t)}else n.push(...je(e))};if(v(e))for(let t of e)a(t);else a(e);Ie(n,t,o)},Je=e=>{const{ne:t,o:n}=g;if(!n.D){if(!n.k){if(!e)return;Se(Qe,Ee)}n.D=!0,n.U=x(),n.v&&K(!0),z(t.he,1),I(t.ye,o),E(t.he,i,'false'),setTimeout((()=>{q(g.ne.be)}),100),te(g.re.fe,_)}},Ue=()=>{const{ne:e,o:t,re:n}=g;t.D&&(t.D=!1,t.v&&K(),q(e.Ye,!0),j(e.ye,o),E(e.he,i,'true'),q(t.U),t.U=null,te(n._e,_))},$e=()=>{const e=g.o;e.A||(e.N||ve(Qe,Ee),e.A=!0,e.D?e.$=x():e.U=x(),z(g.ne.Ce,2),I(g.ne.ye,n),E(g.ne.Ce,i,'false'),setTimeout((()=>{q(g.ne.ve)}),100),te(g.re.fe,p))},qe=()=>{const e=g.o;e.A||(e.N||he(Qe,Ee),e.A=!0,e.D?e.$=x():e.U=x(),z(g.ne.Ce,2),I(g.ne.ye,n),E(g.ne.Ce,i,'false'),setTimeout((()=>{q(g.ne.ve)}),100),te(g.re.fe,p))},ze=()=>{const e=g.o;e.A&&(e.A=!1,(()=>{const e=tt(),t=g.o.B,o=g.ne.ae,n=g.ne.se,a=e=>b(g.o.G,e);for(const s in o){const c=!!t[s].readOnly;o[s].checked=c||(e?Be(s):a(s));for(const t in n[s])n[s][t].checked=c||(e?Oe(t,s):a(s))}})(),q(g.ne.Ge,!0),j(g.ne.ye,n),E(g.ne.Ce,i,'true'),e.D?(q(e.$),e.$=null):(q(e.U),e.U=null),te(g.re._e,p))};var Qe={show:Je,hide:Ue,showPreferences:$e,hidePreferences:ze,showBTSPreferences:qe,acceptCategory:Le};const Ke=async(e,t)=>{if(!xe(e))return!1;const o=g.o;return!(e===Me()&&!0!==t||!await ke(e)||(Te(e),o.k&&Se(Qe,Ee),o.N&&ve(Qe,Ee),De(),0))},We=()=>{const{L:e,Y:t}=g.o,{accepted:o,rejected:n}=(()=>{const{T:e,O:t,F:o}=g.o;return{accepted:t,rejected:e?[]:o.filter((e=>!b(t,e)))}})();return B({acceptType:e,acceptedCategories:o,rejectedCategories:n,acceptedServices:t,rejectedServices:F()})},Xe=(e,t)=>{let o=document.querySelector('script[src="'+e+'"]');return new Promise((n=>{if(o)return n(!0);if(o=D('script'),h(t))for(const e in t)E(o,e,t[e]);o.onload=()=>n(!0),o.onerror=()=>{o.remove(),n(!1)},o.src=e,H(document.head,o)}))},Ye=e=>{let t,o=e.value,n=e.mode,a=!1;const s=g.o;if('update'===n){s.h=t=Ze('data');const e=typeof t==typeof o;if(e&&'object'==typeof t){!t&&(t={});for(let e in o)t[e]!==o[e]&&(t[e]=o[e],a=!0)}else!e&&t||t===o||(t=o,a=!0)}else t=o,a=!0;return a&&(s.h=t,s.u.data=t,He(!0)),a},Ze=(e,t)=>{const o=Pe(t);return e?o[e]:o},et=e=>{const t=g.t,o=g.o.i;return e?t[e]||o[e]:{...t,...o,cookie:{...t.cookie}}},tt=()=>!g.o.T,ot=async e=>{const{o:o,t:n,re:a}=g,c=window;if(!c._ccRun){if(c._ccRun=!0,(e=>{const{ne:o,t:n,o:a}=g,c=n,r=a,{cookie:i}=c,l=g.ce,d=e.cookie,f=e.categories,_=C(f)||[],p=navigator,u=document;o.$e=u,o.ye=u.documentElement,i.domain=location.hostname,r.i=e,r.B=f,r.F=_,r._=e.language.translations,r.v=!!e.disablePageInteraction,l.ie=e.onFirstConsent,l.le=e.onConsent,l.de=e.onChange,l._e=e.onModalHide,l.fe=e.onModalShow,l.pe=e.onModalReady;const{mode:m,autoShow:v,lazyHtmlGeneration:y,autoClearCookies:w,revision:S,manageScriptTags:x,hideFromBots:M}=e;m===t&&(c.mode=m),'boolean'==typeof w&&(c.autoClearCookies=w),'boolean'==typeof x&&(c.manageScriptTags=x),'number'==typeof S&&S>=0&&(c.revision=S,r.I=!0),'boolean'==typeof v&&(c.autoShow=v),'boolean'==typeof y&&(c.lazyHtmlGeneration=y),!1===M&&(c.hideFromBots=!1),!0===c.hideFromBots&&p&&(r.J=p.userAgent&&/bot|crawl|spider|slurp|teoma/i.test(p.userAgent)||p.webdriver),h(d)&&(c.cookie={...i,...d}),c.autoClearCookies,r.I,c.manageScriptTags,(e=>{const{B:t,X:o,Y:n,Z:a,R:s}=g.o;for(let c of e){const e=t[c],r=e.services||{},i=h(r)&&C(r)||[];o[c]={},n[c]=[],a[c]=[],e.readOnly&&(s.push(c),n[c]=i),g.ne.se[c]={};for(let e of i){const t=r[e];t.Se=!1,o[c][e]=t}}})(_),(()=>{if(!g.t.manageScriptTags)return;const e=g.o,t=T(document,'script['+s+']');for(const o of t){let t=N(o,s),n=o.dataset.service||'',a=!1;if(t&&'!'===t.charAt(0)&&(t=t.slice(1),a=!0),'!'===n.charAt(0)&&(n=n.slice(1),a=!0),b(e.F,t)&&(e.oe.push({Me:o,xe:!1,De:a,Te:t,ke:n}),n)){const o=e.X[t];o[n]||(o[n]={Se:!1})}}})(),Te((()=>{const e=g.o.i.language.autoDetect;if(e){const t={browser:navigator.language,document:document.documentElement.lang},o=xe(t[e]);if(o)return o}return Me()})())})(e),o.J)return;(()=>{const e=g.o,o=g.t,n=Pe(),{categories:a,services:s,consentId:c,consentTimestamp:r,lastConsentTimestamp:i,data:l,revision:d}=n,f=v(a);e.u=n,e.M=c;const _=!!c&&y(c);e.C=r,e.C&&(e.C=new Date(r)),e.S=i,e.S&&(e.S=new Date(i)),e.h=void 0!==l?l:null,e.I&&_&&d!==o.revision&&(e.P=!1),e.T=!(_&&e.P&&e.C&&e.S&&f),o.cookie.useLocalStorage&&!e.T&&(e.T=(new Date).getTime()>(n.expirationTime||0),e.T&&Ae(o.cookie.name)),e.T,(()=>{const e=g.o;for(const o of e.F){const n=e.B[o];if(n.readOnly||n.enabled){e.G.push(o);const n=e.X[o]||{};for(let a in n)e.Z[o].push(a),e.i.mode===t&&e.Y[o].push(a)}}})(),e.T?o.mode===t&&(e.O=[...e.G]):(e.Z={...e.Y},e.Y={...e.Y,...s},U([...e.R,...a]))})();const i=tt();if(!await ke())return!1;if($(null,r=Qe,ve,he),g.o.T&&Se(r,Ee),g.t.lazyHtmlGeneration||ve(r,Ee),g.t.lazyHtmlGeneration||he(r,Ee),n.autoShow&&!i&&Je(!0),i)return ne(),te(a.le);n.mode===t&&ne(o.G)}var r},nt=e=>{const{we:t,ye:s}=g.ne,{name:c,path:r,domain:i,useLocalStorage:l}=g.t.cookie;e&&(l?Ae(c):Ge(c,r,i));for(const{ue:e,ge:t,me:o}of g.o.m)e.removeEventListener(t,o);t&&t.remove(),s&&s.classList.remove(a,n,o);const d=new u;for(const e in g)g[e]=d[e];window._ccRun=!1};export{Le as acceptCategory,Fe as acceptService,Be as acceptedCategory,Oe as acceptedService,Ge as eraseCookies,et as getConfig,Ze as getCookie,We as getUserPreferences,Ue as hide,ze as hidePreferences,Xe as loadScript,nt as reset,ot as run,Ye as setCookieData,Ke as setLanguage,Je as show,qe as showBTSPreferences,$e as showPreferences,tt as validConsent,Re as validCookie};
