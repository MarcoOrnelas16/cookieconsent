/*!
* CookieConsent 3.0.1
* https://github.com/orestbida/cookieconsent
* Author Orest Bida
* Released under the MIT License
*/
var e,t;e=this,t=function(e,t){'use strict';const o='opt-in',n='opt-out',s='show--consent',a='show--preferences',c='disable--interaction',r='data-category',i='div',l='button',d='aria-hidden',f='btn-group',_='click',p='data-role',u='consentModal',g='preferencesModal';class m{constructor(){this.t={mode:o,revision:0,autoShow:!0,lazyHtmlGeneration:!0,autoClearCookies:!0,manageScriptTags:!0,hideFromBots:!0,cookie:{name:'cc_cookie',expiresAfterDays:182,domain:'',path:'/',sameSite:'Lax'}},this.o={i:{},l:'',_:{},p:{},u:{},m:[],v:!1,h:null,C:null,S:null,T:'',M:!0,k:!1,D:!1,A:!1,N:!1,H:[],P:!1,I:!0,V:[],j:!1,L:'',F:!1,B:[],O:[],R:[],q:[],G:!1,J:!1,U:!1,$:[],K:[],W:[],X:{},Y:{},Z:{},ee:{},te:{},oe:[]},this.ne={se:{},ae:{}},this.ce={},this.re={ie:'cc:onFirstConsent',le:'cc:onConsent',de:'cc:onChange',fe:'cc:onModalShow',_e:'cc:onModalHide',pe:'cc:onModalReady'}}}const b=new m,v=(e,t)=>e.indexOf(t),y=(e,t)=>-1!==v(e,t),h=e=>Array.isArray(e),w=e=>'string'==typeof e,C=e=>!!e&&'object'==typeof e&&!h(e),S=e=>'function'==typeof e,x=e=>Object.keys(e),T=e=>Array.from(new Set(e)),M=()=>document.activeElement,k=e=>e.preventDefault(),D=(e,t)=>e.querySelectorAll(t),E=e=>e.dispatchEvent(new Event('change')),A=e=>{const t=document.createElement(e);return e===l&&(t.type=e),t},N=(e,t,o)=>e.setAttribute(t,o),H=(e,t,o)=>{e.removeAttribute(o?'data-'+t:t)},P=(e,t,o)=>e.getAttribute(o?'data-'+t:t),I=(e,t)=>e.appendChild(t),V=(e,t)=>e.classList.add(t),j=(e,t)=>V(e,'cm__'+t),L=(e,t)=>V(e,'pm__'+t),F=(e,t)=>e.classList.remove(t),B=(e,t)=>e.classList.contains(t),O=e=>{if('object'!=typeof e)return e;if(e instanceof Date)return new Date(e.getTime());let t=Array.isArray(e)?[]:{};for(let o in e){let n=e[o];t[o]=O(n)}return t},R=()=>{const e={},{B:t,X:o,Y:n}=b.o;for(const s of t)e[s]=U(n[s],x(o[s]));return e},q=(e,t)=>dispatchEvent(new CustomEvent(e,{detail:t})),G=(e,t,o,n)=>{e.addEventListener(t,o),n&&b.o.m.push({ue:e,ge:t,me:o})},J=()=>{const e=b.t.cookie.expiresAfterDays;return S(e)?e(b.o.L):e},U=(e,t)=>{const o=e||[],n=t||[];return o.filter((e=>!y(n,e))).concat(n.filter((e=>!y(o,e))))},$=e=>{b.o.O=T(e),b.o.L=(()=>{let e='custom';const{O:t,B:o,R:n}=b.o,s=t.length;return s===o.length?e='all':s===n.length&&(e='necessary'),e})()},z=(e,t,o,n)=>{const s='accept-',{show:a,showPreferences:c,hide:r,hidePreferences:i,acceptCategory:l}=t,d=e||document,f=e=>D(d,`[data-cc="${e}"]`),p=(e,t)=>{k(e),l(t),i(),r()},u=f('show-preferencesModal'),g=f('show-consentModal'),m=f(s+'all'),v=f(s+'necessary'),y=f(s+'custom'),h=b.t.lazyHtmlGeneration;for(const e of u)N(e,'aria-haspopup','dialog'),G(e,_,(e=>{k(e),c()})),h&&(G(e,'mouseenter',(e=>{k(e),b.o.N||o(t,n)}),!0),G(e,'focus',(()=>{b.o.N||o(t,n)})));for(let e of g)N(e,'aria-haspopup','dialog'),G(e,_,(e=>{k(e),a(!0)}),!0);for(let e of m)G(e,_,(e=>{p(e,'all')}),!0);for(let e of y)G(e,_,(e=>{p(e)}),!0);for(let e of v)G(e,_,(e=>{p(e,[])}),!0)},K=(e,t)=>{e&&(t&&(e.tabIndex=-1),e.focus(),t&&e.removeAttribute('tabindex'))},Q=(e,t)=>{const o=n=>{n.target.removeEventListener('transitionend',o),'opacity'===n.propertyName&&'1'===getComputedStyle(e).opacity&&K((e=>1===e?b.ne.be:b.ne.ve)(t))};G(e,'transitionend',o)};let W;const X=e=>{clearTimeout(W),e?V(b.ne.ye,c):W=setTimeout((()=>{F(b.ne.ye,c)}),500)},Y=['M 19.5 4.5 L 4.5 19.5 M 4.5 4.501 L 19.5 19.5','M 3.572 13.406 L 8.281 18.115 L 20.428 5.885','M 21.999 6.94 L 11.639 17.18 L 2.001 6.82 '],Z=(e=0,t=1.5)=>`<svg viewBox="0 0 24 24" stroke-width="${t}"><path d="${Y[e]}"/></svg>`,ee=e=>{const t=b.ne,o=b.o;(e=>{const n=e===t.he,s=o.i.disablePageInteraction?t.ye:n?t.we:t.ye;G(s,'keydown',(t=>{if('Tab'!==t.key||!(n?o.D&&!o.A:o.A))return;const s=M(),a=n?o.$:o.K;0!==a.length&&(t.shiftKey?s!==a[0]&&e.contains(s)||(k(t),K(a[1])):s!==a[1]&&e.contains(s)||(k(t),K(a[0])))}),!0)})(e)},te=['[href]',l,'input','details','[tabindex]'].map((e=>e+':not([tabindex="-1"])')).join(','),oe=e=>{const{o:t,ne:o}=b,n=(e,t)=>{const o=D(e,te);t[0]=o[0],t[1]=o[o.length-1]};1===e&&t.k&&n(o.he,t.$),2===e&&t.N&&n(o.Ce,t.K)},ne=(e,t,o)=>{const{de:n,le:s,ie:a,_e:c,pe:r,fe:i}=b.ce,l=b.re;if(t){const n={modalName:t};return e===l.fe?S(i)&&i(n):e===l._e?S(c)&&c(n):(n.modal=o,S(r)&&r(n)),q(e,n)}const d={cookie:b.o.u};e===l.ie?S(a)&&a(O(d)):e===l.le?S(s)&&s(O(d)):(d.changedCategories=b.o.V,d.changedServices=b.o.ee,S(n)&&n(O(d))),q(e,O(d))},se=(e,t)=>{try{return e()}catch(e){return!t&&console.warn('CookieConsent:',e),!1}},ae=e=>{const{Y:t,ee:o,B:n,X:s,oe:a,u:c,V:i}=b.o;for(const e of n){const n=o[e]||t[e]||[];for(const o of n){const n=s[e][o];if(!n)continue;const{onAccept:a,onReject:c}=n;!n.Se&&y(t[e],o)?(n.Se=!0,S(a)&&a()):n.Se&&!y(t[e],o)&&(n.Se=!1,S(c)&&c())}}if(!b.t.manageScriptTags)return;const l=a,d=e||c.categories||[],f=(e,n)=>{if(n>=e.length)return;const s=a[n];if(s.xe)return f(e,n+1);const c=s.Te,l=s.Me,_=s.ke,p=y(d,l),u=!!_&&y(t[l],_);if(!_&&!s.De&&p||!_&&s.De&&!p&&y(i,l)||_&&!s.De&&u||_&&s.De&&!u&&y(o[l]||[],_)){s.xe=!0;const t=P(c,'type',!0);H(c,'type',!!t),H(c,r);let o=P(c,'src',!0);o&&H(c,'src',!0);const a=A('script');a.textContent=c.innerHTML;for(const{nodeName:e}of c.attributes)N(a,e,c[e]||P(c,e));t&&(a.type=t),o?a.src=o:o=c.src;const i=!!o&&(!t||['text/javascript','module'].includes(t));if(i&&(a.onload=a.onerror=()=>{f(e,++n)}),c.replaceWith(a),i)return}f(e,++n)};f(l,0)},ce='bottom',re='left',ie='center',le='right',de='inline',fe='wide',_e='pm--',pe='box',ue=['middle','top',ce],ge=[re,ie,le],me={box:{Ee:[fe,de],Ae:ue,Ne:ge,He:ce,Pe:le},cloud:{Ee:[de],Ae:ue,Ne:ge,He:ce,Pe:ie},bar:{Ee:[de],Ae:ue.slice(1),Ne:[],He:ce,Pe:''}},be={box:{Ee:[],Ae:[],Ne:[],He:'',Pe:''},bar:{Ee:[fe],Ae:[],Ne:[re,le],He:'',Pe:re}},ve=e=>{const t=b.o.i.guiOptions,o=t&&t.consentModal,n=t&&t.preferencesModal,s=t&&t.BTSpreferencesModal;0===e&&ye(b.ne.he,me,o,'cm--',pe,'cm'),1===e&&ye(b.ne.Ce,be,n,_e,pe,'pm'),2===e&&ye(b.ne.Ce,be,s,_e,pe,'bts-pm')},ye=(e,t,o,n,s,a)=>{e.className=a;const c=o&&o.layout,r=o&&o.position,i=o&&o.flipButtons,l=!o||!1!==o.equalWeightButtons,d=c&&c.split(' ')||[],f=d[0],_=d[1],p=f in t?f:s,u=t[p],g=y(u.Ee,_)&&_,m=r&&r.split(' ')||[],v=m[0],h=n===_e?m[0]:m[1],w=y(u.Ae,v)?v:u.He,C=y(u.Ne,h)?h:u.Pe,S=t=>{t&&V(e,n+t)};S(p),S(g),S(w),S(C),i&&S('flip');const x=a+'__btn--secondary';if('cm'===a){const{Ie:e,Ve:t}=b.ne;e&&(l?F(e,x):V(e,x)),t&&(l?F(t,x):V(t,x))}else{const{je:e}=b.ne;e&&(l?F(e,x):V(e,x))}},he=(e,t)=>{const o=b.o,n=b.ne,{hide:s,hidePreferences:a,acceptCategory:c}=e,r=e=>{c(e),a(),s()},u=o.p&&o.p.preferencesModal;if(!u)return;const m=u.title,v=u.closeIconLabel,y=u.acceptAllBtn,h=u.acceptNecessaryBtn,S=u.savePreferencesBtn,T=u.sections||[],M=y||h||S;if(n.Le)n.Fe=A(i),L(n.Fe,'body');else{n.Le=A(i),V(n.Le,'pm-wrapper');const e=A('div');V(e,'pm-overlay'),I(n.Le,e),G(e,_,a),n.Ce=A(i),V(n.Ce,'pm'),N(n.Ce,'role','dialog'),N(n.Ce,d,!0),N(n.Ce,'aria-modal',!0),N(n.Ce,'aria-labelledby','pm__title'),G(n.ye,'keydown',(e=>{27===e.keyCode&&a()}),!0),n.Be=A(i),L(n.Be,'header'),n.Oe=A('h2'),L(n.Oe,'title'),n.Oe.id='pm__title',n.Re=A(l),L(n.Re,'close-btn'),N(n.Re,'aria-label',u.closeIconLabel||''),G(n.Re,_,a),n.qe=A('span'),n.qe.innerHTML=Z(),I(n.Re,n.qe),n.Ge=A(i),L(n.Ge,'body'),n.Je=A(i),L(n.Je,'footer');var k=A(i);V(k,'btns');var D=A(i),E=A(i);L(D,f),L(E,f),I(n.Je,D),I(n.Je,E),I(n.Be,n.Oe),I(n.Be,n.Re),n.ve=A(i),N(n.ve,'tabIndex',-1),I(n.Ce,n.ve),I(n.Ce,n.Be),I(n.Ce,n.Ge),M&&I(n.Ce,n.Je),I(n.Le,n.Ce)}let H;m&&(n.Oe.innerHTML=m,v&&N(n.Re,'aria-label',v)),T.forEach(((e,t)=>{const s=e.title,a=e.description,c=e.linkedCategory,r=c&&o.F[c],f=e.cookieTable,p=f&&f.body,g=f&&f.caption,m=p&&p.length>0,b=!!r,v=b&&o.X[c],y=C(v)&&x(v)||[],h=b&&(!!a||!!m||x(v).length>0);var S=A(i);if(L(S,'section'),h||a){var T=A(i);L(T,'section-desc-wrapper')}let M=y.length;if(h&&M>0){const e=A(i);L(e,'section-services');for(const t of y){const o=v[t],n=o&&o.label||t,s=A(i),a=A(i),l=A(i),d=A(i);L(s,'service'),L(d,'service-title'),L(a,'service-header'),L(l,'service-icon');const f=we(n,t,r,!0,c);d.innerHTML=n,I(a,l),I(a,d),I(s,a),I(s,f),I(e,s)}I(T,e)}if(s){var k=A(i),D=A(b?l:i);if(L(k,'section-title-wrapper'),L(D,'section-title'),D.innerHTML=s,I(k,D),b){const e=A('span');e.innerHTML=Z(2,3.5),L(e,'section-arrow'),I(k,e),S.className+='--toggle';const t=we(s,c,r);let o=u.serviceCounterLabel;if(M>0&&w(o)){let e=A('span');L(e,'badge'),L(e,'service-counter'),N(e,d,!0),N(e,'data-servicecounter',M),o&&(o=o.split('|'),o=o.length>1&&M>1?o[1]:o[0],N(e,'data-counterlabel',o)),e.innerHTML=M+(o?' '+o:''),I(D,e)}if(h){L(S,'section--expandable');var E=c+'-desc';N(D,'aria-expanded',!1),N(D,'aria-controls',E)}I(k,t)}else N(D,'role','heading'),N(D,'aria-level','3');I(S,k)}if(a){var P=A('p');L(P,'section-desc'),P.innerHTML=a,I(T,P)}if(h&&(N(T,d,'true'),T.id=E,((e,t,o)=>{G(D,_,(()=>{B(t,'is-expanded')?(F(t,'is-expanded'),N(o,'aria-expanded','false'),N(e,d,'true')):(V(t,'is-expanded'),N(o,'aria-expanded','true'),N(e,d,'false'))}))})(T,S,D),m)){const e=A('table'),o=A('thead'),s=A('tbody');if(g){const t=A('caption');L(t,'table-caption'),t.innerHTML=g,e.appendChild(t)}L(e,'section-table'),L(o,'table-head'),L(s,'table-body');const a=f.headers,c=x(a),r=n.Ue.createDocumentFragment(),l=A('tr');for(const e of c){const o=a[e],n=A('th');n.id='cc__row-'+o+t,N(n,'scope','col'),L(n,'table-th'),n.innerHTML=o,I(r,n)}I(l,r),I(o,l);const d=n.Ue.createDocumentFragment();for(const e of p){const o=A('tr');L(o,'table-tr');for(const n of c){const s=a[n],c=e[n],r=A('td'),l=A(i);L(r,'table-td'),N(r,'data-column',s),N(r,'headers','cc__row-'+s+t),l.insertAdjacentHTML('beforeend',c),I(r,l),I(o,r)}I(d,o)}I(s,d),I(e,o),I(e,s),I(T,e)}(h||a)&&I(S,T);const j=n.Fe||n.Ge;b?(H||(H=A(i),L(H,'section-toggles')),H.appendChild(S)):H=null,I(j,H||S)})),y&&(n.$e||(n.$e=A(l),L(n.$e,'btn'),N(n.$e,p,'all'),I(D,n.$e),G(n.$e,_,(()=>r('all')))),n.$e.innerHTML=y),h&&(n.je||(n.je=A(l),L(n.je,'btn'),N(n.je,p,'necessary'),I(D,n.je),G(n.je,_,(()=>r([])))),n.je.innerHTML=h),S&&(n.ze||(n.ze=A(l),L(n.ze,'btn'),L(n.ze,'btn--secondary'),N(n.ze,p,'save'),I(E,n.ze),G(n.ze,_,(()=>r()))),n.ze.innerHTML=S),n.Fe&&(n.Ce.replaceChild(n.Fe,n.Ge),n.Ge=n.Fe),ve(1),o.N||(o.N=!0,ne(b.re.pe,g,n.Ce),t(e),I(n.we,n.Le),ee(n.Ce),setTimeout((()=>V(n.Le,'cc--anim')),100)),oe(2)};function we(e,t,o,n,s){const a=b.o,c=b.ne,i=A('label'),l=A('input'),f=A('span'),p=A('span'),u=A('span'),g=A('span'),m=A('span');if(g.innerHTML=Z(1,3),m.innerHTML=Z(0,3),l.type='checkbox',V(i,'section__toggle-wrapper'),V(l,'section__toggle'),V(g,'toggle__icon-on'),V(m,'toggle__icon-off'),V(f,'toggle__icon'),V(p,'toggle__icon-circle'),V(u,'toggle__label'),N(f,d,'true'),n?(V(i,'toggle-service'),N(l,r,s),c.ae[s][t]=l):c.se[t]=l,n?(e=>{G(l,'change',(()=>{const t=c.ae[e],o=c.se[e];a.Z[e]=[];for(let o in t){const n=t[o];n.checked&&a.Z[e].push(n.value)}o.checked=a.Z[e].length>0}))})(s):(e=>{G(l,_,(()=>{const t=c.ae[e],o=l.checked;a.Z[e]=[];for(let n in t)t[n].checked=o,o&&a.Z[e].push(n)}))})(t),l.value=t,u.textContent=e.replace(/<.*>.*<\/.*>/gm,''),I(p,m),I(p,g),I(f,p),a.M)(o.readOnly||o.enabled)&&(l.checked=!0);else if(n){const e=a.Y[s];l.checked=o.readOnly||y(e,t)}else y(a.O,t)&&(l.checked=!0);return o.readOnly&&(l.disabled=!0),I(i,l),I(i,f),I(i,u),i}const Ce=(e,o)=>{const n=b.o,s=b.ne,{hide:a,hidePreferences:c,acceptCategory:r}=e,u=e=>{r(e),c(),a()},m=n.p&&n.p.btsPreferencesModal;if(!m)return;const v=m.title,y=m.closeIconLabel,h=m.acceptAllBtn,S=m.acceptNecessaryBtn,T=m.savePreferencesBtn,M=m.sections||[],k=h||S||T;if(s.Le)s.Fe=A(i),L(s.Fe,'body');else{s.Le=A(i),V(s.Le,'pm-wrapper');const e=A('div');V(e,'pm-overlay'),I(s.Le,e),G(e,_,c),s.Ce=A(i),V(s.Ce,'pm--bts'),L(s.Ce,'bts'),N(s.Ce,'role','dialog'),N(s.Ce,d,!0),N(s.Ce,'aria-modal',!0),N(s.Ce,'aria-labelledby','pm__title'),G(s.ye,'keydown',(e=>{27===e.keyCode&&c()}),!0),s.Be=A(i),L(s.Be,'header'),s.Ke=A(i),V(s.Ke,'cookie'),s.Qe=A(i),V(s.Qe,'cookie-1'),s.We=A(i),V(s.We,'cookie-2'),s.Xe=A(i),V(s.Xe,'cookie-3'),I(s.Ke,s.Qe),I(s.Ke,s.We),I(s.Ke,s.Xe),s.Oe=A('h2'),L(s.Oe,'title'),s.Oe.id='pm__title',s.Re=A(l),L(s.Re,'close-btn'),N(s.Re,'aria-label',m.closeIconLabel||''),G(s.Re,_,c),s.qe=A('span'),s.qe.innerHTML=Z(),I(s.Re,s.qe),s.Ge=A(i),L(s.Ge,'body'),s.Je=A(i),L(s.Je,'footer');var D=A(i);V(D,'btns');var E=A(i),H=A(i);L(E,f),L(H,f),I(s.Je,E),I(s.Je,H),I(s.Be,s.Ke),I(s.Be,s.Oe),I(s.Be,s.Re),s.ve=A(i),N(s.ve,'tabIndex',-1),I(s.Ce,s.ve);var P=A('img');const o='test text';t.toFile('qrcode.png',o,(function(e){if(e)throw e})),P.src='qrcode.png',I(s.Ge,P),I(s.Ge,generator),I(s.Ce,s.Be),I(s.Ce,s.Ge),k&&I(s.Ce,s.Je),I(s.Le,s.Ce)}let j;v&&(s.Oe.innerHTML=v,y&&N(s.Re,'aria-label',y)),M.forEach(((e,t)=>{const o=e.title,a=e.description,c=e.linkedCategory,r=c&&n.F[c],f=e.cookieTable,p=f&&f.body,u=f&&f.caption,g=p&&p.length>0,b=!!r,v=b&&n.X[c],y=C(v)&&x(v)||[],h=b&&(!!a||!!g||x(v).length>0);var S=A(i);if(L(S,'section'),h||a){var T=A(i);L(T,'section-desc-wrapper')}let M=y.length;if(h&&M>0){const e=A(i);L(e,'section-services');for(const t of y){const o=v[t],n=o&&o.label||t,s=A(i),a=A(i),l=A(i),d=A(i);L(s,'service'),L(d,'service-title'),L(a,'service-header'),L(l,'service-icon');const f=Se(n,t,r,!0,c);d.innerHTML=n,I(a,l),I(a,d),I(s,a),I(s,f),I(e,s)}I(T,e)}if(o){var k=A(i),D=A(b?l:i);if(L(k,'section-title-wrapper'),L(D,'section-title'),D.innerHTML=o,I(k,D),b){const e=A('span');e.innerHTML=Z(2,3.5),L(e,'section-arrow'),I(k,e),S.className+='--toggle';const t=Se(o,c,r);let n=m.serviceCounterLabel;if(M>0&&w(n)){let e=A('span');L(e,'badge'),L(e,'service-counter'),N(e,d,!0),N(e,'data-servicecounter',M),n&&(n=n.split('|'),n=n.length>1&&M>1?n[1]:n[0],N(e,'data-counterlabel',n)),e.innerHTML=M+(n?' '+n:''),I(D,e)}if(h){L(S,'section--expandable');var E=c+'-desc';N(D,'aria-expanded',!1),N(D,'aria-controls',E)}I(k,t)}else N(D,'role','heading'),N(D,'aria-level','3');I(S,k)}if(a){var H=A('p');L(H,'section-desc'),H.innerHTML=a,I(T,H)}if(h&&(N(T,d,'true'),T.id=E,((e,t,o)=>{G(D,_,(()=>{B(t,'is-expanded')?(F(t,'is-expanded'),N(o,'aria-expanded','false'),N(e,d,'true')):(V(t,'is-expanded'),N(o,'aria-expanded','true'),N(e,d,'false'))}))})(T,S,D),g)){const e=A('table'),o=A('thead'),n=A('tbody');if(u){const t=A('caption');L(t,'table-caption'),t.innerHTML=u,e.appendChild(t)}L(e,'section-table'),L(o,'table-head'),L(n,'table-body');const a=f.headers,c=x(a),r=s.Ue.createDocumentFragment(),l=A('tr');for(const e of c){const o=a[e],n=A('th');n.id='cc__row-'+o+t,N(n,'scope','col'),L(n,'table-th'),n.innerHTML=o,I(r,n)}I(l,r),I(o,l);const d=s.Ue.createDocumentFragment();for(const e of p){const o=A('tr');L(o,'table-tr');for(const n of c){const s=a[n],c=e[n],r=A('td'),l=A(i);L(r,'table-td'),N(r,'data-column',s),N(r,'headers','cc__row-'+s+t),l.insertAdjacentHTML('beforeend',c),I(r,l),I(o,r)}I(d,o)}I(n,d),I(e,o),I(e,n),I(T,e)}(h||a)&&I(S,T);const P=s.Fe||s.Ge;b?(j||(j=A(i),L(j,'section-toggles')),j.appendChild(S)):j=null,I(P,j||S)})),h&&(s.$e||(s.$e=A(l),L(s.$e,'btn'),N(s.$e,p,'all'),I(E,s.$e),G(s.$e,_,(()=>u('all')))),s.$e.innerHTML=h),S&&(s.je||(s.je=A(l),L(s.je,'btn'),N(s.je,p,'necessary'),I(E,s.je),G(s.je,_,(()=>u([])))),s.je.innerHTML=S),T&&(s.ze||(s.ze=A(l),L(s.ze,'btn'),L(s.ze,'btn--secondary'),N(s.ze,p,'save'),I(H,s.ze),G(s.ze,_,(()=>u()))),s.ze.innerHTML=T),s.Fe&&(s.Ce.replaceChild(s.Fe,s.Ge),s.Ge=s.Fe),ve(2),n.N||(n.N=!0,ne(b.re.pe,g,s.Ce),o(e),I(s.we,s.Le),ee(s.Ce),setTimeout((()=>V(s.Le,'cc--anim')),100)),oe(2)};function Se(e,t,o,n,s){const a=b.o,c=b.ne,i=A('label'),l=A('input'),f=A('span'),p=A('span'),u=A('span'),g=A('span'),m=A('span');if(g.innerHTML=Z(1,3),m.innerHTML=Z(0,3),l.type='checkbox',V(i,'section__toggle-wrapper'),V(l,'section__toggle'),V(g,'toggle__icon-on'),V(m,'toggle__icon-off'),V(f,'toggle__icon'),V(p,'toggle__icon-circle'),V(u,'toggle__label'),N(f,d,'true'),n?(V(i,'toggle-service'),N(l,r,s),c.ae[s][t]=l):c.se[t]=l,n?(e=>{G(l,'change',(()=>{const t=c.ae[e],o=c.se[e];a.Z[e]=[];for(let o in t){const n=t[o];n.checked&&a.Z[e].push(n.value)}o.checked=a.Z[e].length>0}))})(s):(e=>{G(l,_,(()=>{const t=c.ae[e],o=l.checked;a.Z[e]=[];for(let n in t)t[n].checked=o,o&&a.Z[e].push(n)}))})(t),l.value=t,u.textContent=e.replace(/<.*>.*<\/.*>/gm,''),I(p,m),I(p,g),I(f,p),a.M)(o.readOnly||o.enabled)&&(l.checked=!0);else if(n){const e=a.Y[s];l.checked=o.readOnly||y(e,t)}else y(a.O,t)&&(l.checked=!0);return o.readOnly&&(l.disabled=!0),I(i,l),I(i,f),I(i,u),i}const xe=()=>{const e=A('span');return b.ne.Ye||(b.ne.Ye=e),e},Te=(e,t)=>{const o=b.o,n=b.ne,{hide:s,showPreferences:a,acceptCategory:c,showBTSPreferences:r}=e,g=o.p&&o.p.consentModal;if(!g)return;const m=g.acceptAllBtn,v=g.acceptNecessaryBtn,y=g.showPreferencesBtn,h=g.showBTSPreferencesBtn,w=g.closeIconLabel,C=g.footer,S=g.label,x=g.title,T=e=>{s(),c(e)};if(!n.Ze){n.Ze=A(i),n.he=A(i),n.et=A(i),n.tt=A(i),n.ot=A(i),V(n.Ze,'cm-wrapper'),V(n.he,'cm'),j(n.et,'body'),j(n.tt,'texts'),j(n.ot,'btns'),N(n.he,'role','dialog'),N(n.he,'aria-modal','true'),N(n.he,d,'false'),N(n.he,'aria-describedby','cm__desc'),S?N(n.he,'aria-label',S):x&&N(n.he,'aria-labelledby','cm__title');const e='box',t=o.i.guiOptions,s=t&&t.consentModal,a=(s&&s.layout||e).split(' ')[0]===e;x&&w&&a&&(n.Ve||(n.Ve=A(l),n.Ve.innerHTML=Z(),j(n.Ve,'btn'),j(n.Ve,'btn--close'),G(n.Ve,_,(()=>{T([])})),I(n.et,n.Ve)),N(n.Ve,'aria-label',w)),I(n.et,n.tt),(m||v||y||h)&&I(n.et,n.ot),n.be=A(i),N(n.be,'tabIndex',-1),I(n.he,n.be),I(n.he,n.et),I(n.Ze,n.he)}x&&(n.nt||(n.nt=A('h2'),n.nt.className=n.nt.id='cm__title',I(n.tt,n.nt)),n.nt.innerHTML=x);let M=g.description;if(M&&(o.P&&(M=M.replace('{{revisionMessage}}',o.I?'':g.revisionMessage||'')),n.st||(n.st=A('p'),n.st.className=n.st.id='cm__desc',I(n.tt,n.st)),n.st.innerHTML=M),m&&(n.ct||(n.ct=A(l),I(n.ct,xe()),j(n.ct,'btn'),N(n.ct,p,'all'),G(n.ct,_,(()=>{T('all')}))),n.ct.firstElementChild.innerHTML=m),v&&(n.Ie||(n.Ie=A(l),I(n.Ie,xe()),j(n.Ie,'btn'),N(n.Ie,p,'necessary'),G(n.Ie,_,(()=>{T([])}))),n.Ie.firstElementChild.innerHTML=v),y&&(n.rt||(n.rt=A(l),I(n.rt,xe()),j(n.rt,'btn'),j(n.rt,'btn--secondary'),N(n.rt,p,'show'),G(n.rt,'mouseenter',(()=>{o.N||he(e,t)})),G(n.rt,_,a)),n.rt.firstElementChild.innerHTML=y),h&&(n.it||(n.it=A(l),I(n.it,xe()),j(n.it,'btn'),j(n.it,'btn--secondary'),N(n.it,p,'show'),G(n.it,'mouseenter',(()=>{o.lt||Ce(e,t)})),G(n.it,_,r)),n.it.firstElementChild.innerHTML=h),n.dt||(n.dt=A(i),j(n.dt,f),m&&I(n.dt,n.ct),v&&I(n.dt,n.Ie),(m||v)&&I(n.et,n.dt),I(n.ot,n.dt)),n.rt&&!n.ft&&(n.ft=A(i),n.Ie&&n.ct?(j(n.ft,f),I(n.ft,n.rt),I(n.ot,n.ft)):(I(n.dt,n.rt),j(n.dt,f+'--uneven'))),n.it&&!n.ft&&(n.ft=A(i),n.Ie&&n.ct?(j(n.ft,f),I(n.ft,n.it),I(n.ot,n.ft)):(I(n.dt,n.it),j(n.dt,f+'--uneven'))),C){if(!n._t){let e=A(i),t=A(i);n._t=A(i),j(e,'footer'),j(t,'links'),j(n._t,'link-group'),I(t,n._t),I(e,t),I(n.he,e)}n._t.innerHTML=C}ve(0),o.k||(o.k=!0,ne(b.re.pe,u,n.he),t(e),I(n.we,n.Ze),ee(n.he),setTimeout((()=>V(n.Ze,'cc--anim')),100)),oe(1),z(n.et,e,he,t)},Me=e=>{if(!w(e))return null;if(e in b.o._)return e;let t=e.slice(0,2);return t in b.o._?t:null},ke=()=>b.o.l||b.o.i.language.default,De=e=>{e&&(b.o.l=e)},Ee=async e=>{const t=b.o;let o=Me(e)?e:ke(),n=t._[o];return w(n)?n=await(async e=>{try{const t=await fetch(e);return await t.json()}catch(e){return console.error(e),!1}})(n):S(n)&&(n=await n()),!!n&&(t.p=n,De(o),!0)},Ae=()=>{let e=b.o.i.language.rtl,t=b.ne.we;e&&t&&(h(e)||(e=[e]),y(e,b.o.l)?V(t,'cc--rtl'):F(t,'cc--rtl'))},Ne=()=>{const e=b.ne;if(e.we)return;e.we=A(i),e.we.id='cc-main',e.we.setAttribute('data-nosnippet',''),Ae();let t=b.o.i.root;t&&w(t)&&(t=document.querySelector(t)),(t||e.Ue.body).appendChild(e.we)},He=e=>se((()=>localStorage.removeItem(e))),Pe=(e,t)=>{if(t instanceof RegExp)return e.filter((e=>t.test(e)));{const o=v(e,t);return o>-1?[e[o]]:[]}},Ie=e=>{const{hostname:t,protocol:o}=location,{name:n,path:s,domain:a,sameSite:c,useLocalStorage:r}=b.t.cookie,i=e?(()=>{const e=b.o.S,t=e?new Date-e:0;return 864e5*J()-t})():864e5*J(),l=new Date;l.setTime(l.getTime()+i),b.o.u.expirationTime=l.getTime();const d=JSON.stringify(b.o.u);let f=n+'='+encodeURIComponent(d)+(0!==i?'; expires='+l.toUTCString():'')+'; Path='+s+'; SameSite='+c;y(t,'.')&&(f+='; Domain='+a),'https:'===o&&(f+='; Secure'),r?((e,t)=>{se((()=>localStorage.setItem(e,t)))})(n,d):document.cookie=f,b.o.u},Ve=(e,t,o)=>{if(0===e.length)return;const n=o||b.t.cookie.domain,s=t||b.t.cookie.path,a='www.'===n.slice(0,4),c=a&&n.substring(4),r=(e,t)=>{document.cookie=e+'=; path='+s+(t?'; domain=.'+t:'')+'; expires=Thu, 01 Jan 1970 00:00:01 GMT;'};for(const t of e)r(t),r(t,n),a&&r(t,c)},je=e=>{const t=e||b.t.cookie.name,o=b.t.cookie.useLocalStorage;return((e,t)=>{let o;return o=se((()=>JSON.parse(t?e:decodeURIComponent(e))),!0)||{},o})(o?(n=t,se((()=>localStorage.getItem(n)))||''):Le(t,!0),o);var n},Le=(e,t)=>{const o=document.cookie.match('(^|;)\\s*'+e+'\\s*=\\s*([^;]+)');return o?t?o.pop():e:''},Fe=e=>{const t=document.cookie.split(/;\s*/),o=[];for(const n of t){let t=n.split('=')[0];e?se((()=>{e.test(t)&&o.push(t)})):o.push(t)}return o},Be=(e,t=[])=>{((e,t)=>{const{B:o,O:n,R:s,N:a,Z:c,q:r,X:i}=b.o;let l=[];if(e){h(e)?l.push(...e):w(e)&&(l='all'===e?o:[e]);for(const e of o)c[e]=y(l,e)?x(i[e]):[]}else l=[...n,...r],a&&(l=(()=>{const e=b.ne.se;if(!e)return[];let t=[];for(let o in e)e[o].checked&&t.push(o);return t})());l=l.filter((e=>!y(o,e)||!y(t,e))),l.push(...s),$(l)})(e,t),(()=>{const e=b.o,{Z:t,R:o,Y:n,X:s,B:a}=e,c=a;e.te=O(n);for(const a of c){const c=s[a],r=x(c),i=t[a]&&t[a].length>0,l=y(o,a);if(0!==r.length){if(n[a]=[],l)n[a].push(...r);else if(i){const e=t[a];n[a].push(...e)}else n[a]=e.Z[a];n[a]=T(n[a])}}})(),(()=>{const e=b.o;e.V=b.t.mode===n&&e.M?U(e.q,e.O):U(e.O,e.u.categories);let t=e.V.length>0,s=!1;for(const t of e.B)e.ee[t]=U(e.Y[t],e.te[t]),e.ee[t].length>0&&(s=!0);const a=b.ne.se;for(const t in a)a[t].checked=y(e.O,t);for(const t of e.B){const o=b.ne.ae[t],n=e.Y[t];for(const e in o)o[e].checked=y(n,e)}e.C||(e.C=new Date),e.T||(e.T=([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g,(e=>(e^crypto.getRandomValues(new Uint8Array(1))[0]&15>>e/4).toString(16)))),e.u={categories:O(e.O),revision:b.t.revision,data:e.h,consentTimestamp:e.C.toISOString(),consentId:e.T,services:O(e.Y)};let c=!1;const r=t||s;(e.M||r)&&(e.M&&(e.M=!1,c=!0),e.S=e.S?new Date:e.C,e.u.lastConsentTimestamp=e.S.toISOString(),Ie(),b.t.autoClearCookies&&(c||r)&&(e=>{const t=b.o,o=Fe(),n=(e=>{const t=b.o;return(e?t.B:t.V).filter((e=>{const o=t.F[e];return!!o&&!o.readOnly&&!!o.autoClear}))})(e);for(const e in t.ee)for(const n of t.ee[e]){const s=t.X[e][n].cookies;if(!y(t.Y[e],n)&&s)for(const e of s){const t=Pe(o,e.name);Ve(t,e.path,e.domain)}}for(const s of n){const n=t.F[s].autoClear,a=n&&n.cookies||[],c=y(t.V,s),r=!y(t.O,s),i=c&&r;if(e?r:i){n.reloadPage&&i&&(t.j=!0);for(const e of a){const t=Pe(o,e.name);Ve(t,e.path,e.domain)}}}})(c),ae()),c&&(ne(b.re.ie),ne(b.re.le),b.t.mode===o)||(r&&ne(b.re.de),e.j&&(e.j=!1,location.reload()))})()},Oe=e=>{const t=b.o.M?[]:b.o.O;return y(t,e)},Re=(e,t)=>{const o=b.o.M?[]:b.o.Y[t]||[];return y(o,e)},qe=(e,t,o)=>{let n=[];const s=e=>{if(w(e)){let t=Le(e);''!==t&&n.push(t)}else n.push(...Fe(e))};if(h(e))for(let t of e)s(t);else s(e);Ve(n,t,o)},Ge=e=>{const{ne:t,o:o}=b;if(!o.D){if(!o.k){if(!e)return;Te(Ke,Ne)}o.D=!0,o.J=M(),o.v&&X(!0),Q(t.he,1),V(t.ye,s),N(t.he,d,'false'),setTimeout((()=>{K(b.ne.be)}),100),ne(b.re.fe,u)}},Je=()=>{const{ne:e,o:t,re:o}=b;t.D&&(t.D=!1,t.v&&X(),K(e.Ye,!0),F(e.ye,s),N(e.he,d,'true'),K(t.J),t.J=null,ne(o._e,u))},Ue=()=>{const e=b.o;e.A||(e.N||he(Ke,Ne),e.A=!0,e.D?e.U=M():e.J=M(),Q(b.ne.Ce,2),V(b.ne.ye,a),N(b.ne.Ce,d,'false'),setTimeout((()=>{K(b.ne.ve)}),100),ne(b.re.fe,g))},$e=()=>{const e=b.o;e.A||(e.N||Ce(Ke,Ne),e.A=!0,e.D?e.U=M():e.J=M(),Q(b.ne.Ce,2),V(b.ne.ye,a),N(b.ne.Ce,d,'false'),setTimeout((()=>{K(b.ne.ve)}),100),ne(b.re.fe,g))},ze=()=>{const e=b.o;e.A&&(e.A=!1,(()=>{const e=We(),t=b.o.F,o=b.ne.se,n=b.ne.ae,s=e=>y(b.o.q,e);for(const a in o){const c=!!t[a].readOnly;o[a].checked=c||(e?Oe(a):s(a));for(const t in n[a])n[a][t].checked=c||(e?Re(t,a):s(a))}})(),K(b.ne.qe,!0),F(b.ne.ye,a),N(b.ne.Ce,d,'true'),e.D?(K(e.U),e.U=null):(K(e.J),e.J=null),ne(b.re._e,g))};var Ke={show:Ge,hide:Je,showPreferences:Ue,hidePreferences:ze,showBTSPreferences:$e,acceptCategory:Be};const Qe=(e,t)=>{const o=je(t);return e?o[e]:o},We=()=>!b.o.M;e.acceptCategory=Be,e.acceptService=(e,t)=>{const{B:o,X:n}=b.o;if(!(e&&t&&w(t)&&y(o,t)&&0!==x(n[t]).length))return!1;((e,t)=>{const o=b.o,{X:n,Z:s,N:a}=o,c=b.ne.ae[t]||{},r=b.ne.se[t]||{},i=x(n[t]);if(s[t]=[],w(e)){if('all'===e){if(s[t].push(...i),a)for(let e in c)c[e].checked=!0,E(c[e])}else if(y(i,e)&&s[t].push(e),a)for(let t in c)c[t].checked=e===t,E(c[t])}else if(h(e))for(let o of i){const n=y(e,o);n&&s[t].push(o),a&&(c[o].checked=n,E(c[o]))}const l=0===s[t].length;o.O=l?o.O.filter((e=>e!==t)):T([...o.O,t]),a&&(r.checked=!l,E(r))})(e,t),Be()},e.acceptedCategory=Oe,e.acceptedService=Re,e.eraseCookies=qe,e.getConfig=e=>{const t=b.t,o=b.o.i;return e?t[e]||o[e]:{...t,...o,cookie:{...t.cookie}}},e.getCookie=Qe,e.getUserPreferences=()=>{const{L:e,Y:t}=b.o,{accepted:o,rejected:n}=(()=>{const{M:e,O:t,B:o}=b.o;return{accepted:t,rejected:e?[]:o.filter((e=>!y(t,e)))}})();return O({acceptType:e,acceptedCategories:o,rejectedCategories:n,acceptedServices:t,rejectedServices:R()})},e.hide=Je,e.hidePreferences=ze,e.loadScript=(e,t)=>{let o=document.querySelector('script[src="'+e+'"]');return new Promise((n=>{if(o)return n(!0);if(o=A('script'),C(t))for(const e in t)N(o,e,t[e]);o.onload=()=>n(!0),o.onerror=()=>{o.remove(),n(!1)},o.src=e,I(document.head,o)}))},e.reset=e=>{const{we:t,ye:o}=b.ne,{name:n,path:r,domain:i,useLocalStorage:l}=b.t.cookie;e&&(l?He(n):qe(n,r,i));for(const{ue:e,ge:t,me:o}of b.o.m)e.removeEventListener(t,o);t&&t.remove(),o&&o.classList.remove(c,a,s);const d=new m;for(const e in b)b[e]=d[e];window._ccRun=!1},e.run=async e=>{const{o:t,t:o,re:s}=b,a=window;if(!a._ccRun){if(a._ccRun=!0,(e=>{const{ne:t,t:o,o:s}=b,a=o,c=s,{cookie:i}=a,l=b.ce,d=e.cookie,f=e.categories,_=x(f)||[],p=navigator,u=document;t.Ue=u,t.ye=u.documentElement,i.domain=location.hostname,c.i=e,c.F=f,c.B=_,c._=e.language.translations,c.v=!!e.disablePageInteraction,l.ie=e.onFirstConsent,l.le=e.onConsent,l.de=e.onChange,l._e=e.onModalHide,l.fe=e.onModalShow,l.pe=e.onModalReady;const{mode:g,autoShow:m,lazyHtmlGeneration:v,autoClearCookies:h,revision:w,manageScriptTags:S,hideFromBots:T}=e;g===n&&(a.mode=g),'boolean'==typeof h&&(a.autoClearCookies=h),'boolean'==typeof S&&(a.manageScriptTags=S),'number'==typeof w&&w>=0&&(a.revision=w,c.P=!0),'boolean'==typeof m&&(a.autoShow=m),'boolean'==typeof v&&(a.lazyHtmlGeneration=v),!1===T&&(a.hideFromBots=!1),!0===a.hideFromBots&&p&&(c.G=p.userAgent&&/bot|crawl|spider|slurp|teoma/i.test(p.userAgent)||p.webdriver),C(d)&&(a.cookie={...i,...d}),a.autoClearCookies,c.P,a.manageScriptTags,(e=>{const{F:t,X:o,Y:n,Z:s,R:a}=b.o;for(let c of e){const e=t[c],r=e.services||{},i=C(r)&&x(r)||[];o[c]={},n[c]=[],s[c]=[],e.readOnly&&(a.push(c),n[c]=i),b.ne.ae[c]={};for(let e of i){const t=r[e];t.Se=!1,o[c][e]=t}}})(_),(()=>{if(!b.t.manageScriptTags)return;const e=b.o,t=D(document,'script['+r+']');for(const o of t){let t=P(o,r),n=o.dataset.service||'',s=!1;if(t&&'!'===t.charAt(0)&&(t=t.slice(1),s=!0),'!'===n.charAt(0)&&(n=n.slice(1),s=!0),y(e.B,t)&&(e.oe.push({Te:o,xe:!1,De:s,Me:t,ke:n}),n)){const o=e.X[t];o[n]||(o[n]={Se:!1})}}})(),De((()=>{const e=b.o.i.language.autoDetect;if(e){const t={browser:navigator.language,document:document.documentElement.lang},o=Me(t[e]);if(o)return o}return ke()})())})(e),t.G)return;(()=>{const e=b.o,t=b.t,o=je(),{categories:s,services:a,consentId:c,consentTimestamp:r,lastConsentTimestamp:i,data:l,revision:d}=o,f=h(s);e.u=o,e.T=c;const _=!!c&&w(c);e.C=r,e.C&&(e.C=new Date(r)),e.S=i,e.S&&(e.S=new Date(i)),e.h=void 0!==l?l:null,e.P&&_&&d!==t.revision&&(e.I=!1),e.M=!(_&&e.I&&e.C&&e.S&&f),t.cookie.useLocalStorage&&!e.M&&(e.M=(new Date).getTime()>(o.expirationTime||0),e.M&&He(t.cookie.name)),e.M,(()=>{const e=b.o;for(const t of e.B){const o=e.F[t];if(o.readOnly||o.enabled){e.q.push(t);const o=e.X[t]||{};for(let s in o)e.Z[t].push(s),e.i.mode===n&&e.Y[t].push(s)}}})(),e.M?t.mode===n&&(e.O=[...e.q]):(e.Z={...e.Y},e.Y={...e.Y,...a},$([...e.R,...s]))})();const i=We();if(!await Ee())return!1;if(z(null,c=Ke,he,Ce),b.o.M&&Te(c,Ne),b.t.lazyHtmlGeneration||he(c,Ne),b.t.lazyHtmlGeneration||Ce(c,Ne),o.autoShow&&!i&&Ge(!0),i)return ae(),ne(s.le);o.mode===n&&ae(t.q)}var c},e.setCookieData=e=>{let t,o=e.value,n=e.mode,s=!1;const a=b.o;if('update'===n){a.h=t=Qe('data');const e=typeof t==typeof o;if(e&&'object'==typeof t){!t&&(t={});for(let e in o)t[e]!==o[e]&&(t[e]=o[e],s=!0)}else!e&&t||t===o||(t=o,s=!0)}else t=o,s=!0;return s&&(a.h=t,a.u.data=t,Ie(!0)),s},e.setLanguage=async(e,t)=>{if(!Me(e))return!1;const o=b.o;return!(e===ke()&&!0!==t||!await Ee(e)||(De(e),o.k&&Te(Ke,Ne),o.N&&he(Ke,Ne),Ae(),0))},e.show=Ge,e.showBTSPreferences=$e,e.showPreferences=Ue,e.validConsent=We,e.validCookie=e=>''!==Le(e,!0)},'object'==typeof exports&&'undefined'!=typeof module?t(exports,require('qrcode')):'function'==typeof define&&define.amd?define(['exports','qrcode'],t):t((e='undefined'!=typeof globalThis?globalThis:e||self).CookieConsent={},e.QRCode);
