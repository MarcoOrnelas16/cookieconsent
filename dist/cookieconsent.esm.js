/*!
* CookieConsent 3.0.1
* https://github.com/orestbida/cookieconsent
* Author Orest Bida
* Released under the MIT License
*/
const e='opt-in',t='opt-out',o='show--consent',n='show--preferences',s='disable--interaction',a='data-category',c='div',r='button',i='aria-hidden',l='btn-group',d='click',f='data-role',_='consentModal',p='preferencesModal';class u{constructor(){this.t={mode:e,revision:0,autoShow:!0,lazyHtmlGeneration:!0,autoClearCookies:!0,manageScriptTags:!0,hideFromBots:!0,cookie:{name:'cc_cookie',expiresAfterDays:182,domain:'',path:'/',sameSite:'Lax'}},this.o={i:{},l:'',_:{},p:{},u:{},m:[],v:!1,h:null,C:null,S:null,M:'',T:!0,k:!1,D:!1,A:!1,N:!1,H:[],P:!1,I:!0,V:[],L:!1,j:'',F:!1,B:[],O:[],R:[],G:[],J:!1,U:!1,$:!1,q:[],K:[],W:[],X:{},Y:{},Z:{},ee:{},te:{},oe:[]},this.ne={se:{},ae:{}},this.ce={},this.re={ie:'cc:onFirstConsent',le:'cc:onConsent',de:'cc:onChange',fe:'cc:onModalShow',_e:'cc:onModalHide',pe:'cc:onModalReady'}}}const g=new u,m=(e,t)=>e.indexOf(t),b=(e,t)=>-1!==m(e,t),v=e=>Array.isArray(e),y=e=>'string'==typeof e,h=e=>!!e&&'object'==typeof e&&!v(e),w=e=>'function'==typeof e,C=e=>Object.keys(e),S=e=>Array.from(new Set(e)),x=()=>document.activeElement,M=e=>e.preventDefault(),T=(e,t)=>e.querySelectorAll(t),k=e=>e.dispatchEvent(new Event('change')),D=e=>{const t=document.createElement(e);return e===r&&(t.type=e),t},E=(e,t,o)=>e.setAttribute(t,o),A=(e,t,o)=>{e.removeAttribute(o?'data-'+t:t)},N=(e,t,o)=>e.getAttribute(o?'data-'+t:t),H=(e,t)=>e.appendChild(t),P=(e,t)=>e.classList.add(t),I=(e,t)=>P(e,'cm__'+t),V=(e,t)=>P(e,'pm__'+t),L=(e,t)=>e.classList.remove(t),j=(e,t)=>e.classList.contains(t),F=e=>{if('object'!=typeof e)return e;if(e instanceof Date)return new Date(e.getTime());let t=Array.isArray(e)?[]:{};for(let o in e){let n=e[o];t[o]=F(n)}return t},B=()=>{const e={},{B:t,X:o,Y:n}=g.o;for(const s of t)e[s]=J(n[s],C(o[s]));return e},O=(e,t)=>dispatchEvent(new CustomEvent(e,{detail:t})),R=(e,t,o,n)=>{e.addEventListener(t,o),n&&g.o.m.push({ue:e,ge:t,me:o})},G=()=>{const e=g.t.cookie.expiresAfterDays;return w(e)?e(g.o.j):e},J=(e,t)=>{const o=e||[],n=t||[];return o.filter((e=>!b(n,e))).concat(n.filter((e=>!b(o,e))))},U=e=>{g.o.O=S(e),g.o.j=(()=>{let e='custom';const{O:t,B:o,R:n}=g.o,s=t.length;return s===o.length?e='all':s===n.length&&(e='necessary'),e})()},$=(e,t,o,n)=>{const s='accept-',{show:a,showPreferences:c,hide:r,hidePreferences:i,acceptCategory:l}=t,f=e||document,_=e=>T(f,`[data-cc="${e}"]`),p=(e,t)=>{M(e),l(t),i(),r()},u=_('show-preferencesModal'),m=_('show-consentModal'),b=_(s+'all'),v=_(s+'necessary'),y=_(s+'custom'),h=g.t.lazyHtmlGeneration;for(const e of u)E(e,'aria-haspopup','dialog'),R(e,d,(e=>{M(e),c()})),h&&(R(e,'mouseenter',(e=>{M(e),g.o.N||o(t,n)}),!0),R(e,'focus',(()=>{g.o.N||o(t,n)})));for(let e of m)E(e,'aria-haspopup','dialog'),R(e,d,(e=>{M(e),a(!0)}),!0);for(let e of b)R(e,d,(e=>{p(e,'all')}),!0);for(let e of y)R(e,d,(e=>{p(e)}),!0);for(let e of v)R(e,d,(e=>{p(e,[])}),!0)},z=(e,t)=>{e&&(t&&(e.tabIndex=-1),e.focus(),t&&e.removeAttribute('tabindex'))},q=(e,t)=>{const o=n=>{n.target.removeEventListener('transitionend',o),'opacity'===n.propertyName&&'1'===getComputedStyle(e).opacity&&z((e=>1===e?g.ne.be:g.ne.ve)(t))};R(e,'transitionend',o)};let K;const Q=e=>{clearTimeout(K),e?P(g.ne.ye,s):K=setTimeout((()=>{L(g.ne.ye,s)}),500)},W=['M 19.5 4.5 L 4.5 19.5 M 4.5 4.501 L 19.5 19.5','M 3.572 13.406 L 8.281 18.115 L 20.428 5.885','M 21.999 6.94 L 11.639 17.18 L 2.001 6.82 '],X=(e=0,t=1.5)=>`<svg viewBox="0 0 24 24" stroke-width="${t}"><path d="${W[e]}"/></svg>`,Y=e=>{const t=g.ne,o=g.o;(e=>{const n=e===t.he,s=o.i.disablePageInteraction?t.ye:n?t.we:t.ye;R(s,'keydown',(t=>{if('Tab'!==t.key||!(n?o.D&&!o.A:o.A))return;const s=x(),a=n?o.q:o.K;0!==a.length&&(t.shiftKey?s!==a[0]&&e.contains(s)||(M(t),z(a[1])):s!==a[1]&&e.contains(s)||(M(t),z(a[0])))}),!0)})(e)},Z=['[href]',r,'input','details','[tabindex]'].map((e=>e+':not([tabindex="-1"])')).join(','),ee=e=>{const{o:t,ne:o}=g,n=(e,t)=>{const o=T(e,Z);t[0]=o[0],t[1]=o[o.length-1]};1===e&&t.k&&n(o.he,t.q),2===e&&t.N&&n(o.Ce,t.K)},te=(e,t,o)=>{const{de:n,le:s,ie:a,_e:c,pe:r,fe:i}=g.ce,l=g.re;if(t){const n={modalName:t};return e===l.fe?w(i)&&i(n):e===l._e?w(c)&&c(n):(n.modal=o,w(r)&&r(n)),O(e,n)}const d={cookie:g.o.u};e===l.ie?w(a)&&a(F(d)):e===l.le?w(s)&&s(F(d)):(d.changedCategories=g.o.V,d.changedServices=g.o.ee,w(n)&&n(F(d))),O(e,F(d))},oe=(e,t)=>{try{return e()}catch(e){return!t&&console.warn('CookieConsent:',e),!1}},ne=e=>{const{Y:t,ee:o,B:n,X:s,oe:c,u:r,V:i}=g.o;for(const e of n){const n=o[e]||t[e]||[];for(const o of n){const n=s[e][o];if(!n)continue;const{onAccept:a,onReject:c}=n;!n.Se&&b(t[e],o)?(n.Se=!0,w(a)&&a()):n.Se&&!b(t[e],o)&&(n.Se=!1,w(c)&&c())}}if(!g.t.manageScriptTags)return;const l=c,d=e||r.categories||[],f=(e,n)=>{if(n>=e.length)return;const s=c[n];if(s.xe)return f(e,n+1);const r=s.Me,l=s.Te,_=s.ke,p=b(d,l),u=!!_&&b(t[l],_);if(!_&&!s.De&&p||!_&&s.De&&!p&&b(i,l)||_&&!s.De&&u||_&&s.De&&!u&&b(o[l]||[],_)){s.xe=!0;const t=N(r,'type',!0);A(r,'type',!!t),A(r,a);let o=N(r,'src',!0);o&&A(r,'src',!0);const c=D('script');c.textContent=r.innerHTML;for(const{nodeName:e}of r.attributes)E(c,e,r[e]||N(r,e));t&&(c.type=t),o?c.src=o:o=r.src;const i=!!o&&(!t||['text/javascript','module'].includes(t));if(i&&(c.onload=c.onerror=()=>{f(e,++n)}),r.replaceWith(c),i)return}f(e,++n)};f(l,0)},se='bottom',ae='left',ce='center',re='right',ie='inline',le='wide',de='pm--',fe='box',_e=['middle','top',se],pe=[ae,ce,re],ue={box:{Ee:[le,ie],Ae:_e,Ne:pe,He:se,Pe:re},cloud:{Ee:[ie],Ae:_e,Ne:pe,He:se,Pe:ce},bar:{Ee:[ie],Ae:_e.slice(1),Ne:[],He:se,Pe:''}},ge={box:{Ee:[],Ae:[],Ne:[],He:'',Pe:''},bar:{Ee:[le],Ae:[],Ne:[ae,re],He:'',Pe:ae}},me=e=>{const t=g.o.i.guiOptions,o=t&&t.consentModal,n=t&&t.preferencesModal,s=t&&t.BTSpreferencesModal;0===e&&be(g.ne.he,ue,o,'cm--',fe,'cm'),1===e&&be(g.ne.Ce,ge,n,de,fe,'pm'),2===e&&be(g.ne.Ce,ge,s,de,fe,'bts-pm')},be=(e,t,o,n,s,a)=>{e.className=a;const c=o&&o.layout,r=o&&o.position,i=o&&o.flipButtons,l=!o||!1!==o.equalWeightButtons,d=c&&c.split(' ')||[],f=d[0],_=d[1],p=f in t?f:s,u=t[p],m=b(u.Ee,_)&&_,v=r&&r.split(' ')||[],y=v[0],h=n===de?v[0]:v[1],w=b(u.Ae,y)?y:u.He,C=b(u.Ne,h)?h:u.Pe,S=t=>{t&&P(e,n+t)};S(p),S(m),S(w),S(C),i&&S('flip');const x=a+'__btn--secondary';if('cm'===a){const{Ie:e,Ve:t}=g.ne;e&&(l?L(e,x):P(e,x)),t&&(l?L(t,x):P(t,x))}else{const{Le:e}=g.ne;e&&(l?L(e,x):P(e,x))}},ve=(e,t)=>{const o=g.o,n=g.ne,{hide:s,hidePreferences:a,acceptCategory:_}=e,u=e=>{_(e),a(),s()},m=o.p&&o.p.preferencesModal;if(!m)return;const b=m.title,v=m.closeIconLabel,w=m.acceptAllBtn,S=m.acceptNecessaryBtn,x=m.savePreferencesBtn,M=m.sections||[],T=w||S||x;if(n.je)n.Fe=D(c),V(n.Fe,'body');else{n.je=D(c),P(n.je,'pm-wrapper');const e=D('div');P(e,'pm-overlay'),H(n.je,e),R(e,d,a),n.Ce=D(c),P(n.Ce,'pm'),E(n.Ce,'role','dialog'),E(n.Ce,i,!0),E(n.Ce,'aria-modal',!0),E(n.Ce,'aria-labelledby','pm__title'),R(n.ye,'keydown',(e=>{27===e.keyCode&&a()}),!0),n.Be=D(c),V(n.Be,'header'),n.Oe=D('h2'),V(n.Oe,'title'),n.Oe.id='pm__title',n.Re=D(r),V(n.Re,'close-btn'),E(n.Re,'aria-label',m.closeIconLabel||''),R(n.Re,d,a),n.Ge=D('span'),n.Ge.innerHTML=X(),H(n.Re,n.Ge),n.Je=D(c),V(n.Je,'body'),n.Ue=D(c),V(n.Ue,'footer');var k=D(c);P(k,'btns');var A=D(c),N=D(c);V(A,l),V(N,l),H(n.Ue,A),H(n.Ue,N),H(n.Be,n.Oe),H(n.Be,n.Re),n.ve=D(c),E(n.ve,'tabIndex',-1),H(n.Ce,n.ve),H(n.Ce,n.Be),H(n.Ce,n.Je),T&&H(n.Ce,n.Ue),H(n.je,n.Ce)}let I;b&&(n.Oe.innerHTML=b,v&&E(n.Re,'aria-label',v)),M.forEach(((e,t)=>{const s=e.title,a=e.description,l=e.linkedCategory,f=l&&o.F[l],_=e.cookieTable,p=_&&_.body,u=_&&_.caption,g=p&&p.length>0,b=!!f,v=b&&o.X[l],w=h(v)&&C(v)||[],S=b&&(!!a||!!g||C(v).length>0);var x=D(c);if(V(x,'section'),S||a){var M=D(c);V(M,'section-desc-wrapper')}let T=w.length;if(S&&T>0){const e=D(c);V(e,'section-services');for(const t of w){const o=v[t],n=o&&o.label||t,s=D(c),a=D(c),r=D(c),i=D(c);V(s,'service'),V(i,'service-title'),V(a,'service-header'),V(r,'service-icon');const d=ye(n,t,f,!0,l);i.innerHTML=n,H(a,r),H(a,i),H(s,a),H(s,d),H(e,s)}H(M,e)}if(s){var k=D(c),A=D(b?r:c);if(V(k,'section-title-wrapper'),V(A,'section-title'),A.innerHTML=s,H(k,A),b){const e=D('span');e.innerHTML=X(2,3.5),V(e,'section-arrow'),H(k,e),x.className+='--toggle';const t=ye(s,l,f);let o=m.serviceCounterLabel;if(T>0&&y(o)){let e=D('span');V(e,'badge'),V(e,'service-counter'),E(e,i,!0),E(e,'data-servicecounter',T),o&&(o=o.split('|'),o=o.length>1&&T>1?o[1]:o[0],E(e,'data-counterlabel',o)),e.innerHTML=T+(o?' '+o:''),H(A,e)}if(S){V(x,'section--expandable');var N=l+'-desc';E(A,'aria-expanded',!1),E(A,'aria-controls',N)}H(k,t)}else E(A,'role','heading'),E(A,'aria-level','3');H(x,k)}if(a){var F=D('p');V(F,'section-desc'),F.innerHTML=a,H(M,F)}if(S&&(E(M,i,'true'),M.id=N,((e,t,o)=>{R(A,d,(()=>{j(t,'is-expanded')?(L(t,'is-expanded'),E(o,'aria-expanded','false'),E(e,i,'true')):(P(t,'is-expanded'),E(o,'aria-expanded','true'),E(e,i,'false'))}))})(M,x,A),g)){const e=D('table'),o=D('thead'),s=D('tbody');if(u){const t=D('caption');V(t,'table-caption'),t.innerHTML=u,e.appendChild(t)}V(e,'section-table'),V(o,'table-head'),V(s,'table-body');const a=_.headers,r=C(a),i=n.$e.createDocumentFragment(),l=D('tr');for(const e of r){const o=a[e],n=D('th');n.id='cc__row-'+o+t,E(n,'scope','col'),V(n,'table-th'),n.innerHTML=o,H(i,n)}H(l,i),H(o,l);const d=n.$e.createDocumentFragment();for(const e of p){const o=D('tr');V(o,'table-tr');for(const n of r){const s=a[n],r=e[n],i=D('td'),l=D(c);V(i,'table-td'),E(i,'data-column',s),E(i,'headers','cc__row-'+s+t),l.insertAdjacentHTML('beforeend',r),H(i,l),H(o,i)}H(d,o)}H(s,d),H(e,o),H(e,s),H(M,e)}(S||a)&&H(x,M);const B=n.Fe||n.Je;b?(I||(I=D(c),V(I,'section-toggles')),I.appendChild(x)):I=null,H(B,I||x)})),w&&(n.ze||(n.ze=D(r),V(n.ze,'btn'),E(n.ze,f,'all'),H(A,n.ze),R(n.ze,d,(()=>u('all')))),n.ze.innerHTML=w),S&&(n.Le||(n.Le=D(r),V(n.Le,'btn'),E(n.Le,f,'necessary'),H(A,n.Le),R(n.Le,d,(()=>u([])))),n.Le.innerHTML=S),x&&(n.qe||(n.qe=D(r),V(n.qe,'btn'),V(n.qe,'btn--secondary'),E(n.qe,f,'save'),H(N,n.qe),R(n.qe,d,(()=>u()))),n.qe.innerHTML=x),n.Fe&&(n.Ce.replaceChild(n.Fe,n.Je),n.Je=n.Fe),me(1),o.N||(o.N=!0,te(g.re.pe,p,n.Ce),t(e),H(n.we,n.je),Y(n.Ce),setTimeout((()=>P(n.je,'cc--anim')),100)),ee(2)};function ye(e,t,o,n,s){const c=g.o,r=g.ne,l=D('label'),f=D('input'),_=D('span'),p=D('span'),u=D('span'),m=D('span'),v=D('span');if(m.innerHTML=X(1,3),v.innerHTML=X(0,3),f.type='checkbox',P(l,'section__toggle-wrapper'),P(f,'section__toggle'),P(m,'toggle__icon-on'),P(v,'toggle__icon-off'),P(_,'toggle__icon'),P(p,'toggle__icon-circle'),P(u,'toggle__label'),E(_,i,'true'),n?(P(l,'toggle-service'),E(f,a,s),r.ae[s][t]=f):r.se[t]=f,n?(e=>{R(f,'change',(()=>{const t=r.ae[e],o=r.se[e];c.Z[e]=[];for(let o in t){const n=t[o];n.checked&&c.Z[e].push(n.value)}o.checked=c.Z[e].length>0}))})(s):(e=>{R(f,d,(()=>{const t=r.ae[e],o=f.checked;c.Z[e]=[];for(let n in t)t[n].checked=o,o&&c.Z[e].push(n)}))})(t),f.value=t,u.textContent=e.replace(/<.*>.*<\/.*>/gm,''),H(p,v),H(p,m),H(_,p),c.T)(o.readOnly||o.enabled)&&(f.checked=!0);else if(n){const e=c.Y[s];f.checked=o.readOnly||b(e,t)}else b(c.O,t)&&(f.checked=!0);return o.readOnly&&(f.disabled=!0),H(l,f),H(l,_),H(l,u),l}const he=(e,t)=>{const o=g.o,n=g.ne,{hide:s,hidePreferences:a,acceptCategory:_}=e,u=e=>{_(e),a(),s()},m=o.p&&o.p.btsPreferencesModal;if(!m)return;const b=m.title,v=m.closeIconLabel,w=m.acceptAllBtn,S=m.acceptNecessaryBtn,x=m.savePreferencesBtn,M=m.sections||[],T=w||S||x;if(n.je)n.Fe=D(c),V(n.Fe,'body');else{n.je=D(c),P(n.je,'pm-wrapper');const e=D('div');P(e,'pm-overlay'),H(n.je,e),R(e,d,a),n.Ce=D(c),P(n.Ce,'pm--bts'),V(n.Ce,'bts'),E(n.Ce,'role','dialog'),E(n.Ce,i,!0),E(n.Ce,'aria-modal',!0),E(n.Ce,'aria-labelledby','pm__title'),R(n.ye,'keydown',(e=>{27===e.keyCode&&a()}),!0),n.Be=D(c),V(n.Be,'header'),n.Ke=D(c),P(n.Ke,'cookie'),n.Qe=D(c),P(n.Qe,'cookie-1'),n.We=D(c),P(n.We,'cookie-2'),n.Xe=D(c),P(n.Xe,'cookie-3'),H(n.Ke,n.Qe),H(n.Ke,n.We),H(n.Ke,n.Xe),n.Oe=D('h2'),V(n.Oe,'title'),n.Oe.id='pm__title',n.Re=D(r),V(n.Re,'close-btn'),E(n.Re,'aria-label',m.closeIconLabel||''),R(n.Re,d,a),n.Ge=D('span'),n.Ge.innerHTML=X(),H(n.Re,n.Ge),n.Je=D(c),V(n.Je,'body'),n.Ue=D(c),V(n.Ue,'footer');var k=D(c);P(k,'btns');var A=D(c),N=D(c);V(A,l),V(N,l),H(n.Ue,A),H(n.Ue,N),H(n.Be,n.Ke),H(n.Be,n.Oe),H(n.Be,n.Re),n.ve=D(c),E(n.ve,'tabIndex',-1),H(n.Ce,n.ve),H(n.Ce,n.Be),H(n.Ce,n.Je),T&&H(n.Ce,n.Ue),H(n.je,n.Ce)}let I;b&&(n.Oe.innerHTML=b,v&&E(n.Re,'aria-label',v)),M.forEach(((e,t)=>{const s=e.title,a=e.description,l=e.linkedCategory,f=l&&o.F[l],_=e.cookieTable,p=_&&_.body,u=_&&_.caption,g=p&&p.length>0,b=!!f,v=b&&o.X[l],w=h(v)&&C(v)||[],S=b&&(!!a||!!g||C(v).length>0);var x=D(c);if(V(x,'section'),S||a){var M=D(c);V(M,'section-desc-wrapper')}let T=w.length;if(S&&T>0){const e=D(c);V(e,'section-services');for(const t of w){const o=v[t],n=o&&o.label||t,s=D(c),a=D(c),r=D(c),i=D(c);V(s,'service'),V(i,'service-title'),V(a,'service-header'),V(r,'service-icon');const d=we(n,t,f,!0,l);i.innerHTML=n,H(a,r),H(a,i),H(s,a),H(s,d),H(e,s)}H(M,e)}if(s){var k=D(c),A=D(b?r:c);if(V(k,'section-title-wrapper'),V(A,'section-title'),A.innerHTML=s,H(k,A),b){const e=D('span');e.innerHTML=X(2,3.5),V(e,'section-arrow'),H(k,e),x.className+='--toggle';const t=we(s,l,f);let o=m.serviceCounterLabel;if(T>0&&y(o)){let e=D('span');V(e,'badge'),V(e,'service-counter'),E(e,i,!0),E(e,'data-servicecounter',T),o&&(o=o.split('|'),o=o.length>1&&T>1?o[1]:o[0],E(e,'data-counterlabel',o)),e.innerHTML=T+(o?' '+o:''),H(A,e)}if(S){V(x,'section--expandable');var N=l+'-desc';E(A,'aria-expanded',!1),E(A,'aria-controls',N)}H(k,t)}else E(A,'role','heading'),E(A,'aria-level','3');H(x,k)}if(a){var F=D('p');V(F,'section-desc'),F.innerHTML=a,H(M,F)}if(S&&(E(M,i,'true'),M.id=N,((e,t,o)=>{R(A,d,(()=>{j(t,'is-expanded')?(L(t,'is-expanded'),E(o,'aria-expanded','false'),E(e,i,'true')):(P(t,'is-expanded'),E(o,'aria-expanded','true'),E(e,i,'false'))}))})(M,x,A),g)){const e=D('table'),o=D('thead'),s=D('tbody');if(u){const t=D('caption');V(t,'table-caption'),t.innerHTML=u,e.appendChild(t)}V(e,'section-table'),V(o,'table-head'),V(s,'table-body');const a=_.headers,r=C(a),i=n.$e.createDocumentFragment(),l=D('tr');for(const e of r){const o=a[e],n=D('th');n.id='cc__row-'+o+t,E(n,'scope','col'),V(n,'table-th'),n.innerHTML=o,H(i,n)}H(l,i),H(o,l);const d=n.$e.createDocumentFragment();for(const e of p){const o=D('tr');V(o,'table-tr');for(const n of r){const s=a[n],r=e[n],i=D('td'),l=D(c);V(i,'table-td'),E(i,'data-column',s),E(i,'headers','cc__row-'+s+t),l.insertAdjacentHTML('beforeend',r),H(i,l),H(o,i)}H(d,o)}H(s,d),H(e,o),H(e,s),H(M,e)}(S||a)&&H(x,M);const B=n.Fe||n.Je;b?(I||(I=D(c),V(I,'section-toggles')),I.appendChild(x)):I=null,H(B,I||x)})),w&&(n.ze||(n.ze=D(r),V(n.ze,'btn'),E(n.ze,f,'all'),H(A,n.ze),R(n.ze,d,(()=>u('all')))),n.ze.innerHTML=w),S&&(n.Le||(n.Le=D(r),V(n.Le,'btn'),E(n.Le,f,'necessary'),H(A,n.Le),R(n.Le,d,(()=>u([])))),n.Le.innerHTML=S),x&&(n.qe||(n.qe=D(r),V(n.qe,'btn'),V(n.qe,'btn--secondary'),E(n.qe,f,'save'),H(N,n.qe),R(n.qe,d,(()=>u()))),n.qe.innerHTML=x),n.Fe&&(n.Ce.replaceChild(n.Fe,n.Je),n.Je=n.Fe),me(2),o.N||(o.N=!0,te(g.re.pe,p,n.Ce),t(e),H(n.we,n.je),Y(n.Ce),setTimeout((()=>P(n.je,'cc--anim')),100)),ee(2)};function we(e,t,o,n,s){const c=g.o,r=g.ne,l=D('label'),f=D('input'),_=D('span'),p=D('span'),u=D('span'),m=D('span'),v=D('span');if(m.innerHTML=X(1,3),v.innerHTML=X(0,3),f.type='checkbox',P(l,'section__toggle-wrapper'),P(f,'section__toggle'),P(m,'toggle__icon-on'),P(v,'toggle__icon-off'),P(_,'toggle__icon'),P(p,'toggle__icon-circle'),P(u,'toggle__label'),E(_,i,'true'),n?(P(l,'toggle-service'),E(f,a,s),r.ae[s][t]=f):r.se[t]=f,n?(e=>{R(f,'change',(()=>{const t=r.ae[e],o=r.se[e];c.Z[e]=[];for(let o in t){const n=t[o];n.checked&&c.Z[e].push(n.value)}o.checked=c.Z[e].length>0}))})(s):(e=>{R(f,d,(()=>{const t=r.ae[e],o=f.checked;c.Z[e]=[];for(let n in t)t[n].checked=o,o&&c.Z[e].push(n)}))})(t),f.value=t,u.textContent=e.replace(/<.*>.*<\/.*>/gm,''),H(p,v),H(p,m),H(_,p),c.T)(o.readOnly||o.enabled)&&(f.checked=!0);else if(n){const e=c.Y[s];f.checked=o.readOnly||b(e,t)}else b(c.O,t)&&(f.checked=!0);return o.readOnly&&(f.disabled=!0),H(l,f),H(l,_),H(l,u),l}const Ce=()=>{const e=D('span');return g.ne.Ye||(g.ne.Ye=e),e},Se=(e,t)=>{const o=g.o,n=g.ne,{hide:s,showPreferences:a,acceptCategory:p,showBTSPreferences:u}=e,m=o.p&&o.p.consentModal;if(!m)return;const b=m.acceptAllBtn,v=m.acceptNecessaryBtn,y=m.showPreferencesBtn,h=m.showBTSPreferencesBtn,w=m.closeIconLabel,C=m.footer,S=m.label,x=m.title,M=e=>{s(),p(e)};if(!n.Ze){n.Ze=D(c),n.he=D(c),n.et=D(c),n.tt=D(c),n.ot=D(c),P(n.Ze,'cm-wrapper'),P(n.he,'cm'),I(n.et,'body'),I(n.tt,'texts'),I(n.ot,'btns'),E(n.he,'role','dialog'),E(n.he,'aria-modal','true'),E(n.he,i,'false'),E(n.he,'aria-describedby','cm__desc'),S?E(n.he,'aria-label',S):x&&E(n.he,'aria-labelledby','cm__title');const e='box',t=o.i.guiOptions,s=t&&t.consentModal,a=(s&&s.layout||e).split(' ')[0]===e;x&&w&&a&&(n.Ve||(n.Ve=D(r),n.Ve.innerHTML=X(),I(n.Ve,'btn'),I(n.Ve,'btn--close'),R(n.Ve,d,(()=>{M([])})),H(n.et,n.Ve)),E(n.Ve,'aria-label',w)),H(n.et,n.tt),(b||v||y||h)&&H(n.et,n.ot),n.be=D(c),E(n.be,'tabIndex',-1),H(n.he,n.be),H(n.he,n.et),H(n.Ze,n.he)}x&&(n.nt||(n.nt=D('h2'),n.nt.className=n.nt.id='cm__title',H(n.tt,n.nt)),n.nt.innerHTML=x);let T=m.description;if(T&&(o.P&&(T=T.replace('{{revisionMessage}}',o.I?'':m.revisionMessage||'')),n.st||(n.st=D('p'),n.st.className=n.st.id='cm__desc',H(n.tt,n.st)),n.st.innerHTML=T),b&&(n.ct||(n.ct=D(r),H(n.ct,Ce()),I(n.ct,'btn'),E(n.ct,f,'all'),R(n.ct,d,(()=>{M('all')}))),n.ct.firstElementChild.innerHTML=b),v&&(n.Ie||(n.Ie=D(r),H(n.Ie,Ce()),I(n.Ie,'btn'),E(n.Ie,f,'necessary'),R(n.Ie,d,(()=>{M([])}))),n.Ie.firstElementChild.innerHTML=v),y&&(n.rt||(n.rt=D(r),H(n.rt,Ce()),I(n.rt,'btn'),I(n.rt,'btn--secondary'),E(n.rt,f,'show'),R(n.rt,'mouseenter',(()=>{o.N||ve(e,t)})),R(n.rt,d,a)),n.rt.firstElementChild.innerHTML=y),h&&(n.it||(n.it=D(r),H(n.it,Ce()),I(n.it,'btn'),I(n.it,'btn--secondary'),E(n.it,f,'show'),R(n.it,'mouseenter',(()=>{o.lt||he(e,t)})),R(n.it,d,u)),n.it.firstElementChild.innerHTML=h),n.dt||(n.dt=D(c),I(n.dt,l),b&&H(n.dt,n.ct),v&&H(n.dt,n.Ie),(b||v)&&H(n.et,n.dt),H(n.ot,n.dt)),n.rt&&!n.ft&&(n.ft=D(c),n.Ie&&n.ct?(I(n.ft,l),H(n.ft,n.rt),H(n.ot,n.ft)):(H(n.dt,n.rt),I(n.dt,l+'--uneven'))),n.it&&!n.ft&&(n.ft=D(c),n.Ie&&n.ct?(I(n.ft,l),H(n.ft,n.it),H(n.ot,n.ft)):(H(n.dt,n.it),I(n.dt,l+'--uneven'))),C){if(!n._t){let e=D(c),t=D(c);n._t=D(c),I(e,'footer'),I(t,'links'),I(n._t,'link-group'),H(t,n._t),H(e,t),H(n.he,e)}n._t.innerHTML=C}me(0),o.k||(o.k=!0,te(g.re.pe,_,n.he),t(e),H(n.we,n.Ze),Y(n.he),setTimeout((()=>P(n.Ze,'cc--anim')),100)),ee(1),$(n.et,e,ve,t)},xe=e=>{if(!y(e))return null;if(e in g.o._)return e;let t=e.slice(0,2);return t in g.o._?t:null},Me=()=>g.o.l||g.o.i.language.default,Te=e=>{e&&(g.o.l=e)},ke=async e=>{const t=g.o;let o=xe(e)?e:Me(),n=t._[o];return y(n)?n=await(async e=>{try{const t=await fetch(e);return await t.json()}catch(e){return console.error(e),!1}})(n):w(n)&&(n=await n()),!!n&&(t.p=n,Te(o),!0)},De=()=>{let e=g.o.i.language.rtl,t=g.ne.we;e&&t&&(v(e)||(e=[e]),b(e,g.o.l)?P(t,'cc--rtl'):L(t,'cc--rtl'))},Ee=()=>{const e=g.ne;if(e.we)return;e.we=D(c),e.we.id='cc-main',e.we.setAttribute('data-nosnippet',''),De();let t=g.o.i.root;t&&y(t)&&(t=document.querySelector(t)),(t||e.$e.body).appendChild(e.we)},Ae=e=>oe((()=>localStorage.removeItem(e))),Ne=(e,t)=>{if(t instanceof RegExp)return e.filter((e=>t.test(e)));{const o=m(e,t);return o>-1?[e[o]]:[]}},He=e=>{const{hostname:t,protocol:o}=location,{name:n,path:s,domain:a,sameSite:c,useLocalStorage:r}=g.t.cookie,i=e?(()=>{const e=g.o.S,t=e?new Date-e:0;return 864e5*G()-t})():864e5*G(),l=new Date;l.setTime(l.getTime()+i),g.o.u.expirationTime=l.getTime();const d=JSON.stringify(g.o.u);let f=n+'='+encodeURIComponent(d)+(0!==i?'; expires='+l.toUTCString():'')+'; Path='+s+'; SameSite='+c;b(t,'.')&&(f+='; Domain='+a),'https:'===o&&(f+='; Secure'),r?((e,t)=>{oe((()=>localStorage.setItem(e,t)))})(n,d):document.cookie=f,g.o.u},Pe=(e,t,o)=>{if(0===e.length)return;const n=o||g.t.cookie.domain,s=t||g.t.cookie.path,a='www.'===n.slice(0,4),c=a&&n.substring(4),r=(e,t)=>{document.cookie=e+'=; path='+s+(t?'; domain=.'+t:'')+'; expires=Thu, 01 Jan 1970 00:00:01 GMT;'};for(const t of e)r(t),r(t,n),a&&r(t,c)},Ie=e=>{const t=e||g.t.cookie.name,o=g.t.cookie.useLocalStorage;return((e,t)=>{let o;return o=oe((()=>JSON.parse(t?e:decodeURIComponent(e))),!0)||{},o})(o?(n=t,oe((()=>localStorage.getItem(n)))||''):Ve(t,!0),o);var n},Ve=(e,t)=>{const o=document.cookie.match('(^|;)\\s*'+e+'\\s*=\\s*([^;]+)');return o?t?o.pop():e:''},Le=e=>{const t=document.cookie.split(/;\s*/),o=[];for(const n of t){let t=n.split('=')[0];e?oe((()=>{e.test(t)&&o.push(t)})):o.push(t)}return o},je=(o,n=[])=>{((e,t)=>{const{B:o,O:n,R:s,N:a,Z:c,G:r,X:i}=g.o;let l=[];if(e){v(e)?l.push(...e):y(e)&&(l='all'===e?o:[e]);for(const e of o)c[e]=b(l,e)?C(i[e]):[]}else l=[...n,...r],a&&(l=(()=>{const e=g.ne.se;if(!e)return[];let t=[];for(let o in e)e[o].checked&&t.push(o);return t})());l=l.filter((e=>!b(o,e)||!b(t,e))),l.push(...s),U(l)})(o,n),(e=>{const t=g.o,{Z:o,R:n,Y:s,X:a,B:c}=t,r=c;t.te=F(s);for(const e of r){const c=a[e],r=C(c),i=o[e]&&o[e].length>0,l=b(n,e);if(0!==r.length){if(s[e]=[],l)s[e].push(...r);else if(i){const t=o[e];s[e].push(...t)}else s[e]=t.Z[e];s[e]=S(s[e])}}})(),(()=>{const o=g.o;o.V=g.t.mode===t&&o.T?J(o.G,o.O):J(o.O,o.u.categories);let n=o.V.length>0,s=!1;for(const e of o.B)o.ee[e]=J(o.Y[e],o.te[e]),o.ee[e].length>0&&(s=!0);const a=g.ne.se;for(const e in a)a[e].checked=b(o.O,e);for(const e of o.B){const t=g.ne.ae[e],n=o.Y[e];for(const e in t)t[e].checked=b(n,e)}o.C||(o.C=new Date),o.M||(o.M=([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g,(e=>(e^crypto.getRandomValues(new Uint8Array(1))[0]&15>>e/4).toString(16)))),o.u={categories:F(o.O),revision:g.t.revision,data:o.h,consentTimestamp:o.C.toISOString(),consentId:o.M,services:F(o.Y)};let c=!1;const r=n||s;(o.T||r)&&(o.T&&(o.T=!1,c=!0),o.S=o.S?new Date:o.C,o.u.lastConsentTimestamp=o.S.toISOString(),He(),g.t.autoClearCookies&&(c||r)&&(e=>{const t=g.o,o=Le(),n=(e=>{const t=g.o;return(e?t.B:t.V).filter((e=>{const o=t.F[e];return!!o&&!o.readOnly&&!!o.autoClear}))})(e);for(const e in t.ee)for(const n of t.ee[e]){const s=t.X[e][n].cookies;if(!b(t.Y[e],n)&&s)for(const e of s){const t=Ne(o,e.name);Pe(t,e.path,e.domain)}}for(const s of n){const n=t.F[s].autoClear,a=n&&n.cookies||[],c=b(t.V,s),r=!b(t.O,s),i=c&&r;if(e?r:i){n.reloadPage&&i&&(t.L=!0);for(const e of a){const t=Ne(o,e.name);Pe(t,e.path,e.domain)}}}})(c),ne()),c&&(te(g.re.ie),te(g.re.le),g.t.mode===e)||(r&&te(g.re.de),o.L&&(o.L=!1,location.reload()))})()},Fe=e=>{const t=g.o.T?[]:g.o.O;return b(t,e)},Be=(e,t)=>{const{B:o,X:n}=g.o;if(!(e&&t&&y(t)&&b(o,t)&&0!==C(n[t]).length))return!1;((e,t)=>{const o=g.o,{X:n,Z:s,N:a}=o,c=g.ne.ae[t]||{},r=g.ne.se[t]||{},i=C(n[t]);if(s[t]=[],y(e)){if('all'===e){if(s[t].push(...i),a)for(let e in c)c[e].checked=!0,k(c[e])}else if(b(i,e)&&s[t].push(e),a)for(let t in c)c[t].checked=e===t,k(c[t])}else if(v(e))for(let o of i){const n=b(e,o);n&&s[t].push(o),a&&(c[o].checked=n,k(c[o]))}const l=0===s[t].length;o.O=l?o.O.filter((e=>e!==t)):S([...o.O,t]),a&&(r.checked=!l,k(r))})(e,t),je()},Oe=(e,t)=>{const o=g.o.T?[]:g.o.Y[t]||[];return b(o,e)},Re=e=>''!==Ve(e,!0),Ge=(e,t,o)=>{let n=[];const s=e=>{if(y(e)){let t=Ve(e);''!==t&&n.push(t)}else n.push(...Le(e))};if(v(e))for(let t of e)s(t);else s(e);Pe(n,t,o)},Je=e=>{const{ne:t,o:n}=g;if(!n.D){if(!n.k){if(!e)return;Se(Ke,Ee)}n.D=!0,n.U=x(),n.v&&Q(!0),q(t.he,1),P(t.ye,o),E(t.he,i,'false'),setTimeout((()=>{z(g.ne.be)}),100),te(g.re.fe,_)}},Ue=()=>{const{ne:e,o:t,re:n}=g;t.D&&(t.D=!1,t.v&&Q(),z(e.Ye,!0),L(e.ye,o),E(e.he,i,'true'),z(t.U),t.U=null,te(n._e,_))},$e=()=>{const e=g.o;e.A||(e.N||ve(Ke,Ee),e.A=!0,e.D?e.$=x():e.U=x(),q(g.ne.Ce,2),P(g.ne.ye,n),E(g.ne.Ce,i,'false'),setTimeout((()=>{z(g.ne.ve)}),100),te(g.re.fe,p))},ze=()=>{const e=g.o;e.A||(e.N||he(Ke,Ee),e.A=!0,e.D?e.$=x():e.U=x(),q(g.ne.Ce,2),P(g.ne.ye,n),E(g.ne.Ce,i,'false'),setTimeout((()=>{z(g.ne.ve)}),100),te(g.re.fe,p))},qe=()=>{const e=g.o;e.A&&(e.A=!1,(()=>{const e=tt(),t=g.o.F,o=g.ne.se,n=g.ne.ae,s=e=>b(g.o.G,e);for(const a in o){const c=!!t[a].readOnly;o[a].checked=c||(e?Fe(a):s(a));for(const t in n[a])n[a][t].checked=c||(e?Oe(t,a):s(a))}})(),z(g.ne.Ge,!0),L(g.ne.ye,n),E(g.ne.Ce,i,'true'),e.D?(z(e.$),e.$=null):(z(e.U),e.U=null),te(g.re._e,p))};var Ke={show:Je,hide:Ue,showPreferences:$e,hidePreferences:qe,showBTSPreferences:ze,acceptCategory:je};const Qe=async(e,t)=>{if(!xe(e))return!1;const o=g.o;return!(e===Me()&&!0!==t||!await ke(e)||(Te(e),o.k&&Se(Ke,Ee),o.N&&ve(Ke,Ee),De(),0))},We=()=>{const{j:e,Y:t}=g.o,{accepted:o,rejected:n}=(()=>{const{T:e,O:t,B:o}=g.o;return{accepted:t,rejected:e?[]:o.filter((e=>!b(t,e)))}})();return F({acceptType:e,acceptedCategories:o,rejectedCategories:n,acceptedServices:t,rejectedServices:B()})},Xe=(e,t)=>{let o=document.querySelector('script[src="'+e+'"]');return new Promise((n=>{if(o)return n(!0);if(o=D('script'),h(t))for(const e in t)E(o,e,t[e]);o.onload=()=>n(!0),o.onerror=()=>{o.remove(),n(!1)},o.src=e,H(document.head,o)}))},Ye=e=>{let t,o=e.value,n=e.mode,s=!1;const a=g.o;if('update'===n){a.h=t=Ze('data');const e=typeof t==typeof o;if(e&&'object'==typeof t){!t&&(t={});for(let e in o)t[e]!==o[e]&&(t[e]=o[e],s=!0)}else!e&&t||t===o||(t=o,s=!0)}else t=o,s=!0;return s&&(a.h=t,a.u.data=t,He(!0)),s},Ze=(e,t)=>{const o=Ie(t);return e?o[e]:o},et=e=>{const t=g.t,o=g.o.i;return e?t[e]||o[e]:{...t,...o,cookie:{...t.cookie}}},tt=()=>!g.o.T,ot=async e=>{const{o:o,t:n,re:s}=g,c=window;if(!c._ccRun){if(c._ccRun=!0,(e=>{const{ne:o,t:n,o:s}=g,c=n,r=s,{cookie:i}=c,l=g.ce,d=e.cookie,f=e.categories,_=C(f)||[],p=navigator,u=document;o.$e=u,o.ye=u.documentElement,i.domain=location.hostname,r.i=e,r.F=f,r.B=_,r._=e.language.translations,r.v=!!e.disablePageInteraction,l.ie=e.onFirstConsent,l.le=e.onConsent,l.de=e.onChange,l._e=e.onModalHide,l.fe=e.onModalShow,l.pe=e.onModalReady;const{mode:m,autoShow:v,lazyHtmlGeneration:y,autoClearCookies:w,revision:S,manageScriptTags:x,hideFromBots:M}=e;m===t&&(c.mode=m),'boolean'==typeof w&&(c.autoClearCookies=w),'boolean'==typeof x&&(c.manageScriptTags=x),'number'==typeof S&&S>=0&&(c.revision=S,r.P=!0),'boolean'==typeof v&&(c.autoShow=v),'boolean'==typeof y&&(c.lazyHtmlGeneration=y),!1===M&&(c.hideFromBots=!1),!0===c.hideFromBots&&p&&(r.J=p.userAgent&&/bot|crawl|spider|slurp|teoma/i.test(p.userAgent)||p.webdriver),h(d)&&(c.cookie={...i,...d}),c.autoClearCookies,r.P,c.manageScriptTags,(e=>{const{F:t,X:o,Y:n,Z:s,R:a}=g.o;for(let c of e){const e=t[c],r=e.services||{},i=h(r)&&C(r)||[];o[c]={},n[c]=[],s[c]=[],e.readOnly&&(a.push(c),n[c]=i),g.ne.ae[c]={};for(let e of i){const t=r[e];t.Se=!1,o[c][e]=t}}})(_),(()=>{if(!g.t.manageScriptTags)return;const e=g.o,t=T(document,'script['+a+']');for(const o of t){let t=N(o,a),n=o.dataset.service||'',s=!1;if(t&&'!'===t.charAt(0)&&(t=t.slice(1),s=!0),'!'===n.charAt(0)&&(n=n.slice(1),s=!0),b(e.B,t)&&(e.oe.push({Me:o,xe:!1,De:s,Te:t,ke:n}),n)){const o=e.X[t];o[n]||(o[n]={Se:!1})}}})(),Te((()=>{const e=g.o.i.language.autoDetect;if(e){const t={browser:navigator.language,document:document.documentElement.lang},o=xe(t[e]);if(o)return o}return Me()})())})(e),o.J)return;(()=>{const e=g.o,o=g.t,n=Ie(),{categories:s,services:a,consentId:c,consentTimestamp:r,lastConsentTimestamp:i,data:l,revision:d}=n,f=v(s);e.u=n,e.M=c;const _=!!c&&y(c);e.C=r,e.C&&(e.C=new Date(r)),e.S=i,e.S&&(e.S=new Date(i)),e.h=void 0!==l?l:null,e.P&&_&&d!==o.revision&&(e.I=!1),e.T=!(_&&e.I&&e.C&&e.S&&f),o.cookie.useLocalStorage&&!e.T&&(e.T=(new Date).getTime()>(n.expirationTime||0),e.T&&Ae(o.cookie.name)),e.T,(()=>{const e=g.o;for(const o of e.B){const n=e.F[o];if(n.readOnly||n.enabled){e.G.push(o);const n=e.X[o]||{};for(let s in n)e.Z[o].push(s),e.i.mode===t&&e.Y[o].push(s)}}})(),e.T?o.mode===t&&(e.O=[...e.G]):(e.Z={...e.Y},e.Y={...e.Y,...a},U([...e.R,...s]))})();const i=tt();if(!await ke())return!1;if($(null,r=Ke,ve,he),g.o.T&&Se(r,Ee),g.t.lazyHtmlGeneration||ve(r,Ee),g.t.lazyHtmlGeneration||he(r,Ee),n.autoShow&&!i&&Je(!0),i)return ne(),te(s.le);n.mode===t&&ne(o.G)}var r},nt=e=>{const{we:t,ye:a}=g.ne,{name:c,path:r,domain:i,useLocalStorage:l}=g.t.cookie;e&&(l?Ae(c):Ge(c,r,i));for(const{ue:e,ge:t,me:o}of g.o.m)e.removeEventListener(t,o);t&&t.remove(),a&&a.classList.remove(s,n,o);const d=new u;for(const e in g)g[e]=d[e];window._ccRun=!1};export{je as acceptCategory,Be as acceptService,Fe as acceptedCategory,Oe as acceptedService,Ge as eraseCookies,et as getConfig,Ze as getCookie,We as getUserPreferences,Ue as hide,qe as hidePreferences,Xe as loadScript,nt as reset,ot as run,Ye as setCookieData,Qe as setLanguage,Je as show,ze as showBTSPreferences,$e as showPreferences,tt as validConsent,Re as validCookie};
