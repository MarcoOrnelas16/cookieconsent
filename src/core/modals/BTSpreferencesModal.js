import { globalObj } from '../global';
import {
    createNode,
    addClass,
    addClassPm,
    setAttribute,
    removeClass,
    addEvent,
    appendChild,
    getKeys,
    hasClass,
    elContains,
    getModalFocusableData,
    isString,
    isObject,
    fireEvent,
    getSvgIcon,
    handleFocusTrap,
    debug
} from '../../utils/general';

import { guiManager } from '../../utils/gui-manager';
import {
    PREFERENCES_MODAL_NAME,
    SCRIPT_TAG_SELECTOR,
    DIV_TAG,
    ARIA_HIDDEN,
    BUTTON_TAG,
    BTN_GROUP_CLASS,
    CLICK_EVENT,
    DATA_ROLE
} from '../../utils/constants';
import QRCode from 'qrcode';

async function getCookies() {
    const url = 'https://66a112817053166bcabde5d4.mockapi.io/cookie/v1/permissions';
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Could not get cookies data');
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error with the request: ', error);
    }
}

/**
 * @callback CreateMainContainer
 */

/**
 * Generates preferences modal and appends it to "cc-main" el.
 * @param {import("../global").Api} api
 * @param {CreateMainContainer} createMainContainer
 */
export const createBTSPreferencesModal = (api, createMainContainer) => {
    getCookies().then(cookiesData => {
        const state = globalObj._state;
        const dom = globalObj._dom;
        const {hide, hidePreferences, acceptCategory} = api;
    
        /**
         * @param {string|string[]} [categories]
         */
        const acceptHelper = (categories) => {
            acceptCategory(categories);
            hidePreferences();
            hide();
        };
    
        /**
         * @type {import("../global").PreferencesModalOptions}
         */
        const modalData = state._currentTranslation && state._currentTranslation.btsPreferencesModal;
    
        if (!modalData)
            return;
    
        const
            titleData = modalData.title,
            closeIconLabelData = modalData.closeIconLabel,
            acceptAllBtnData = modalData.acceptAllBtn,
            acceptNecessaryBtnData = modalData.acceptNecessaryBtn,
            savePreferencesBtnData = modalData.savePreferencesBtn,
            sectionsData = modalData.sections || [],
            createFooter = acceptAllBtnData
                || acceptNecessaryBtnData
                || savePreferencesBtnData;
    
        if (!dom._pmContainer) {
            dom._pmContainer = createNode(DIV_TAG);
            addClass(dom._pmContainer, 'pm-wrapper');
    
            const pmOverlay = createNode('div');
            addClass(pmOverlay, 'pm-overlay');
            appendChild(dom._pmContainer, pmOverlay);
    
            /**
             * Hide modal when overlay is clicked
             */
            addEvent(pmOverlay, CLICK_EVENT, hidePreferences);
    
            // Preferences modal
            dom._pm = createNode(DIV_TAG);
    
            addClass(dom._pm, 'pm--bts');
            addClassPm(dom._pm, 'bts');
            setAttribute(dom._pm, 'role', 'dialog');
            setAttribute(dom._pm, ARIA_HIDDEN, true);
            setAttribute(dom._pm, 'aria-modal', true);
            setAttribute(dom._pm, 'aria-labelledby', 'pm__title');
    
            // Hide preferences on 'esc' key press
            addEvent(dom._htmlDom, 'keydown', (event) => {
                if (event.keyCode === 27)
                    hidePreferences();
            }, true);
    
            dom._pmHeader = createNode(DIV_TAG);
            addClassPm(dom._pmHeader, 'header');
    
            dom._cookie_main = createNode(DIV_TAG);
            addClass(dom._cookie_main, 'cookie');
            dom._cookie_chip_1 = createNode(DIV_TAG);
            addClass(dom._cookie_chip_1, 'cookie-1');
            dom._cookie_chip_2 = createNode(DIV_TAG);
            addClass(dom._cookie_chip_2, 'cookie-2');
            dom._cookie_chip_3 = createNode(DIV_TAG);
            addClass(dom._cookie_chip_3, 'cookie-3');
            appendChild(dom._cookie_main, dom._cookie_chip_1);
            appendChild(dom._cookie_main, dom._cookie_chip_2);
            appendChild(dom._cookie_main, dom._cookie_chip_3);
    
            dom._pmTitle = createNode('h2');
            addClassPm(dom._pmTitle, 'title');
            dom._pmTitle.id = 'pm__title';
    
            dom._pmCloseBtn = createNode(BUTTON_TAG);
            addClassPm(dom._pmCloseBtn, 'close-btn');
            setAttribute(dom._pmCloseBtn, 'aria-label', modalData.closeIconLabel || '');
            addEvent(dom._pmCloseBtn, CLICK_EVENT, hidePreferences);
    
            dom._pmFocusSpan = createNode('span');
            dom._pmFocusSpan.innerHTML = getSvgIcon();
            appendChild(dom._pmCloseBtn, dom._pmFocusSpan);
    
            dom._pmBody = createNode(DIV_TAG);
            addClassPm(dom._pmBody, 'body');
    
            dom._pmFooter = createNode(DIV_TAG);
            addClassPm(dom._pmFooter, 'footer');
    
            var _pmBtnContainer = createNode(DIV_TAG);
            addClass(_pmBtnContainer, 'btns');
    
            var _pmBtnGroup1 = createNode(DIV_TAG);
            var _pmBtnGroup2 = createNode(DIV_TAG);
            addClassPm(_pmBtnGroup1, BTN_GROUP_CLASS);
            addClassPm(_pmBtnGroup2, BTN_GROUP_CLASS);
    
            appendChild(dom._pmFooter, _pmBtnGroup1);
            appendChild(dom._pmFooter, _pmBtnGroup2);
    
            appendChild(dom._pmHeader, dom._cookie_main);
            appendChild(dom._pmHeader, dom._pmTitle);
            appendChild(dom._pmHeader, dom._pmCloseBtn);
    
            dom._pmDivTabindex = createNode(DIV_TAG);
            setAttribute(dom._pmDivTabindex, 'tabIndex', -1);
            appendChild(dom._pm, dom._pmDivTabindex);
    
            // Create qr?
            let canvasContainer = createNode(DIV_TAG);
            addClass(canvasContainer, 'canvas-container');
    
            let canvas = createNode('canvas');
            canvas.id = 'canvas';
    
            let text = 'cookies information: ';
            cookiesData.forEach(section => {
                text += JSON.stringify(section);
            });
            QRCode.toCanvas(canvas, text, function(err) {
                if (err) throw err;
                console.log('Código QR generado y guardado en cavas');
            });
            appendChild(canvasContainer, canvas);
            appendChild(dom._pmBody, canvasContainer);
            
            appendChild(dom._pm, dom._pmHeader);
            appendChild(dom._pm, dom._pmBody);
    
            createFooter && appendChild(dom._pm, dom._pmFooter);
    
            appendChild(dom._pmContainer, dom._pm);
        } else {
            dom._pmNewBody = createNode(DIV_TAG);
            addClassPm(dom._pmNewBody, 'body');
            // Create qr?
            let canvasContainer = createNode(DIV_TAG);
            addClass(canvasContainer, 'canvas-container');
    
            let canvas = createNode('canvas');
            canvas.id = 'canvas';
    
            let text = 'cookies information: ';
            cookiesData.forEach(section => {
                text += JSON.stringify(section);
            });
            QRCode.toCanvas(canvas, text, function(err) {
                if (err) throw err;
                console.log('Código QR generado y guardado en cavas');
            });
            appendChild(canvasContainer, canvas);
            appendChild(dom._pmNewBody, canvasContainer);
        }
    
        if (titleData) {
            dom._pmTitle.innerHTML = titleData;
            closeIconLabelData && setAttribute(dom._pmCloseBtn, 'aria-label', closeIconLabelData);
        }
    
    
        if (acceptAllBtnData) {
            if (!dom._pmAcceptAllBtn) {
                dom._pmAcceptAllBtn = createNode(BUTTON_TAG);
                addClassPm(dom._pmAcceptAllBtn, 'btn');
                setAttribute(dom._pmAcceptAllBtn, DATA_ROLE, 'all');
                appendChild(_pmBtnGroup1, dom._pmAcceptAllBtn);
                addEvent(dom._pmAcceptAllBtn, CLICK_EVENT, () =>
                    acceptHelper('all')
                );
            }
    
            dom._pmAcceptAllBtn.innerHTML = acceptAllBtnData;
        }
    
        if (acceptNecessaryBtnData) {
            if (!dom._pmAcceptNecessaryBtn) {
                dom._pmAcceptNecessaryBtn = createNode(BUTTON_TAG);
                addClassPm(dom._pmAcceptNecessaryBtn, 'btn');
                setAttribute(dom._pmAcceptNecessaryBtn, DATA_ROLE, 'necessary');
                appendChild(_pmBtnGroup1, dom._pmAcceptNecessaryBtn);
                addEvent(dom._pmAcceptNecessaryBtn, CLICK_EVENT, () =>
                    acceptHelper([])
                );
            }
    
            dom._pmAcceptNecessaryBtn.innerHTML = acceptNecessaryBtnData;
        }
    
        if (savePreferencesBtnData) {
            if (!dom._pmSavePreferencesBtn) {
                dom._pmSavePreferencesBtn = createNode(BUTTON_TAG);
                addClassPm(dom._pmSavePreferencesBtn, 'btn');
                addClassPm(dom._pmSavePreferencesBtn, 'btn--secondary');
                setAttribute(dom._pmSavePreferencesBtn, DATA_ROLE, 'save');
                appendChild(_pmBtnGroup2, dom._pmSavePreferencesBtn);
    
                addEvent(dom._pmSavePreferencesBtn, CLICK_EVENT, () =>
                    acceptHelper()
                );
            }
    
            dom._pmSavePreferencesBtn.innerHTML = savePreferencesBtnData;
        }
    
        if (dom._pmNewBody) {
            dom._pm.replaceChild(dom._pmNewBody, dom._pmBody);
            dom._pmBody = dom._pmNewBody;
        }
    
        guiManager(2);
    
        if (!state._preferencesModalExists) {
            state._preferencesModalExists = true;
    
            debug('CookieConsent [HTML] created', PREFERENCES_MODAL_NAME);
    
            fireEvent(globalObj._customEvents._onModalReady, PREFERENCES_MODAL_NAME, dom._pm);
            createMainContainer(api);
            appendChild(dom._ccMain, dom._pmContainer);
            handleFocusTrap(dom._pm);
    
            /**
             * Enable transition
             */
            setTimeout(() => addClass(dom._pmContainer, 'cc--anim'), 100);
        }
    
        getModalFocusableData(2);
    });
};

/**
 * Generate toggle
 * @param {string} label block title
 * @param {string} value category/service
 * @param {import('../global').Category} sCurrentCategoryObject
 * @param {boolean} [isService]
 * @param {string} categoryName
 */
function createToggleLabel(label, value, sCurrentCategoryObject, isService, categoryName) {
    const state = globalObj._state;
    const dom = globalObj._dom;

    /** @type {HTMLLabelElement} */ const toggleLabel = createNode('label');
    /** @type {HTMLInputElement} */ const toggle = createNode('input');
    /** @type {HTMLSpanElement} */  const toggleIcon = createNode('span');
    /** @type {HTMLSpanElement} */  const toggleIconCircle = createNode('span');
    /** @type {HTMLSpanElement} */  const toggleLabelSpan = createNode('span');

    // each will contain 2 pseudo-elements to generate 'tick' and 'x' icons
    /** @type {HTMLSpanElement} */  const toggleOnIcon = createNode('span');
    /** @type {HTMLSpanElement} */  const toggleOffIcon = createNode('span');

    toggleOnIcon.innerHTML = getSvgIcon(1, 3);
    toggleOffIcon.innerHTML = getSvgIcon(0, 3);

    toggle.type = 'checkbox';

    addClass(toggleLabel, 'section__toggle-wrapper');
    addClass(toggle, 'section__toggle');
    addClass(toggleOnIcon, 'toggle__icon-on');
    addClass(toggleOffIcon, 'toggle__icon-off');
    addClass(toggleIcon, 'toggle__icon');
    addClass(toggleIconCircle, 'toggle__icon-circle');
    addClass(toggleLabelSpan, 'toggle__label');

    setAttribute(toggleIcon, ARIA_HIDDEN, 'true');

    if (isService) {
        addClass(toggleLabel, 'toggle-service');
        setAttribute(toggle, SCRIPT_TAG_SELECTOR, categoryName);

        // Save reference to toggles to avoid using document.querySelector later on
        dom._serviceCheckboxInputs[categoryName][value] = toggle;
    } else {
        dom._categoryCheckboxInputs[value] = toggle;
    }

    if (!isService) {
        ((value)=> {
            addEvent(toggle, CLICK_EVENT, () => {
                const categoryServicesToggles = dom._serviceCheckboxInputs[value];
                const checked = toggle.checked;
                state._enabledServices[value] = [];

                /**
                 * Enable/disable all services
                 */
                for (let serviceName in categoryServicesToggles) {
                    categoryServicesToggles[serviceName].checked = checked;
                    checked && state._enabledServices[value].push(serviceName);
                }
            });
        })(value);
    } else {
        ((categoryName) => {
            addEvent(toggle, 'change', () => {
                const categoryServicesToggles = dom._serviceCheckboxInputs[categoryName];
                const categoryToggle = dom._categoryCheckboxInputs[categoryName];

                state._enabledServices[categoryName] = [];

                for (let serviceName in categoryServicesToggles) {
                    const serviceInput = categoryServicesToggles[serviceName];

                    if (serviceInput.checked) {
                        state._enabledServices[categoryName].push(serviceInput.value);
                    }
                }

                categoryToggle.checked = state._enabledServices[categoryName].length > 0;
            });
        })(categoryName);

    }

    toggle.value = value;
    toggleLabelSpan.textContent = label.replace(/<.*>.*<\/.*>/gm, '');

    appendChild(toggleIconCircle, toggleOffIcon);
    appendChild(toggleIconCircle, toggleOnIcon);
    appendChild(toggleIcon, toggleIconCircle);

    /**
     * If consent is valid => retrieve category states from cookie
     * Otherwise use states defined in the userConfig. object
     */
    if (!state._invalidConsent) {
        if (isService) {
            const enabledServices = state._acceptedServices[categoryName];
            toggle.checked = sCurrentCategoryObject.readOnly || elContains(enabledServices, value);
        } else if (elContains(state._acceptedCategories, value)) {
            toggle.checked = true;
        }
    } else if (sCurrentCategoryObject.readOnly || sCurrentCategoryObject.enabled) {
        toggle.checked = true;
    }

    /**
     * Set toggle as readonly if true (disable checkbox)
     */
    if (sCurrentCategoryObject.readOnly) {
        toggle.disabled = true;
    }

    appendChild(toggleLabel, toggle);
    appendChild(toggleLabel, toggleIcon);
    appendChild(toggleLabel, toggleLabelSpan);

    return toggleLabel;
}