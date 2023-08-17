(function() {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 453:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ App; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(701);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: ./src/utils/browser/index.ts + 3 modules
var browser = __webpack_require__(6371);
// EXTERNAL MODULE: ./src/utils/css/index.ts + 2 modules
var css = __webpack_require__(1192);
;// CONCATENATED MODULE: ./src/contexts/theme.tsx




const PREFERS_COLOR_SCHEME = 'prefers-color-scheme: dark';
const DARK_MODE = 'dark-mode';
const ThemeContext = /*#__PURE__*/(0,external_react_.createContext)(null);

const useThemeChange = isDarkModeEnabled => {
  (0,external_react_.useEffect)(() => {
    const {
      documentElement: {
        classList
      }
    } = document;

    if (isDarkModeEnabled) {
      classList.add(DARK_MODE);
      return;
    }

    classList.remove(DARK_MODE);
  }, [isDarkModeEnabled]);
};

const useSystemPreferenceChange = setIsSystemDarkMode => {
  (0,external_react_.useEffect)(() => {
    const {
      matchMedia
    } = (0,browser/* getWindowProperty */.vo)();

    if (!matchMedia) {
      return;
    }

    const listener = event => {
      const {
        matches
      } = event;
      setIsSystemDarkMode(matches);
    };

    const mediaQueryList = matchMedia(`(${PREFERS_COLOR_SCHEME})`);
    mediaQueryList.addEventListener('change', listener);
    return () => {
      mediaQueryList.removeEventListener('change', listener);
    };
  }, [setIsSystemDarkMode]);
};

const getIsUserPreferenceSet = () => {
  const userPreference = browser/* browserStorage.getItem */.t6.getItem(DARK_MODE);
  return userPreference !== null;
};

const getIsUserDarkModeSet = () => {
  const userPreference = browser/* browserStorage.getItem */.t6.getItem(DARK_MODE);
  return !!userPreference;
};

function ThemeProvider({
  children
}) {
  const isUserPreferenceSet = (0,external_react_.useMemo)(() => getIsUserPreferenceSet(), []);
  const isUserDarkModeInitial = (0,external_react_.useMemo)(() => getIsUserDarkModeSet(), []);
  const isSystemDarkModeInitial = (0,external_react_.useMemo)(() => (0,css/* checkMediaProperty */.F)(PREFERS_COLOR_SCHEME), []);
  const systemTheme = (0,external_react_.useState)(!isUserPreferenceSet);
  const userTheme = (0,external_react_.useState)(isUserDarkModeInitial);
  const [isSystemThemeUsed] = systemTheme;
  const [isUserDarkMode] = userTheme;
  const {
    0: isSystemDarkMode,
    1: setIsSystemDarkMode
  } = (0,external_react_.useState)(isSystemDarkModeInitial);
  const isDarkMode = (0,external_react_.useMemo)(() => {
    return isSystemThemeUsed ? isSystemDarkMode : isUserDarkMode;
  }, [isSystemThemeUsed, isSystemDarkMode, isUserDarkMode]);
  (0,external_react_.useEffect)(() => {
    browser/* browserStorage.setItem */.t6.setItem(DARK_MODE, isUserDarkMode);
  }, [isUserDarkMode]);
  useThemeChange(isDarkMode);
  useSystemPreferenceChange(setIsSystemDarkMode);
  return /*#__PURE__*/jsx_runtime_.jsx(ThemeContext.Provider, {
    value: {
      isDarkMode,
      userTheme,
      systemTheme
    },
    children: children
  });
}
// EXTERNAL MODULE: ./src/components/icon/index.ts + 1 modules
var icon = __webpack_require__(9237);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(6731);
// EXTERNAL MODULE: ./src/components/header/items/Items.module.scss
var Items_module = __webpack_require__(9434);
var Items_module_default = /*#__PURE__*/__webpack_require__.n(Items_module);
;// CONCATENATED MODULE: ./src/components/header/items/Items.component.tsx






const {
  items,
  active
} = (Items_module_default());
const links = [{
  name: 'Home',
  url: '/',
  alias: []
}, {
  name: 'Pages',
  url: '/pages',
  alias: ['/[page]']
}, {
  name: 'Profile',
  url: '/profile',
  alias: []
}];
function Items() {
  const {
    pathname
  } = (0,router_.useRouter)();
  return /*#__PURE__*/jsx_runtime_.jsx("ul", {
    className: items,
    children: links.map(({
      name,
      url,
      alias
    }) => /*#__PURE__*/jsx_runtime_.jsx("li", {
      className: (0,css/* injectClassNames */.L)([active, pathname === url || alias.includes(pathname)]),
      children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
        href: url,
        children: name
      })
    }, name))
  });
}
;// CONCATENATED MODULE: ./src/components/header/items/index.ts

// EXTERNAL MODULE: ./src/components/header/logo/Logo.module.scss
var Logo_module = __webpack_require__(8202);
var Logo_module_default = /*#__PURE__*/__webpack_require__.n(Logo_module);
;// CONCATENATED MODULE: ./src/components/header/logo/Logo.component.tsx




const {
  logo
} = (Logo_module_default());
function Logo() {
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: logo,
    children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
      href: "/",
      children: "PWA"
    })
  });
}
;// CONCATENATED MODULE: ./src/components/header/logo/index.ts

;// CONCATENATED MODULE: ./src/hooks/theme/useTheme.ts



const useTheme = () => {
  const theme = (0,external_react_.useContext)(ThemeContext);

  if (!theme) {
    throw new Error('Missing ThemeContext');
  }

  return theme;
};

/* harmony default export */ var theme_useTheme = (useTheme);
;// CONCATENATED MODULE: ./src/hooks/theme/index.ts

// EXTERNAL MODULE: ./src/components/switch/Switch.module.scss
var Switch_module = __webpack_require__(5793);
var Switch_module_default = /*#__PURE__*/__webpack_require__.n(Switch_module);
;// CONCATENATED MODULE: ./src/components/switch/Switch.component.tsx



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



function Switch(_ref) {
  let {
    id,
    className
  } = _ref,
      inputProps = _objectWithoutProperties(_ref, ["id", "className"]);

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: className,
    children: [/*#__PURE__*/jsx_runtime_.jsx("input", _objectSpread(_objectSpread({}, inputProps), {}, {
      id: id,
      type: "checkbox",
      className: (Switch_module_default()).input
    })), /*#__PURE__*/jsx_runtime_.jsx("label", {
      htmlFor: id,
      className: (Switch_module_default()).switch
    })]
  });
}
;// CONCATENATED MODULE: ./src/components/switch/index.ts

;// CONCATENATED MODULE: ./src/config.ts
/*
 * Theme color values.
 *
 * These values are used only in the theme-color meta tag,
 * changing these values will not change any css.
 */
const theme = {
  light: '#fff',
  dark: '#2c2c2c'
};
/*
 * IOS Status bar value.
 * Define which status bar style to use.
 *
 * You can read more about these here,
 * under the apple-mobile-web-app-status-bar-style:
 * https://developer.apple.com/library/archive/documentation/AppleApplications/Reference/SafariHTMLRef/Articles/MetaTags.html
 */

const statusBarStyle = 'black-translucent';
;// CONCATENATED MODULE: ./src/hooks/events/useOutsideClick.ts

const useOutsideClick = (ref, callback) => {
  (0,external_react_.useEffect)(() => {
    const handler = event => {
      var _ref$current;

      // Check if the mouse click was within the element's ref.
      if (!(ref !== null && ref !== void 0 && (_ref$current = ref.current) !== null && _ref$current !== void 0 && _ref$current.contains(event === null || event === void 0 ? void 0 : event.target))) {
        callback();
      }
    };

    window.addEventListener('mousedown', handler);
    return () => {
      window.removeEventListener('mousedown', handler);
    };
  }, [ref, callback]);
};
;// CONCATENATED MODULE: ./src/hooks/events/index.ts

// EXTERNAL MODULE: ./src/components/header/themeToggler/ThemeToggler.module.scss
var ThemeToggler_module = __webpack_require__(7788);
var ThemeToggler_module_default = /*#__PURE__*/__webpack_require__.n(ThemeToggler_module);
;// CONCATENATED MODULE: ./src/components/header/themeToggler/ThemeToggler.component.tsx












const {
  themeToggler,
  themeTogglerIcon,
  themeTogglerSettingsOpen,
  themeTogglerSettings,
  statusBarHighlight
} = (ThemeToggler_module_default());
const DARK_MODE_SETTING = 'dark-mode-enabled';
const SYSTEM_THEME_SETTING = 'system-theme-enabled';
function ThemeToggler() {
  const {
    userTheme,
    systemTheme
  } = theme_useTheme();
  const [isDarkModeEnabled, setIsDarkModeEnabled] = userTheme;
  const [isSystemThemeUsed, setIsSystemThemeUsed] = systemTheme;
  const {
    0: isSettingMenuOpen,
    1: setIsSettingMenuOpen
  } = (0,external_react_.useState)(false);
  const settingMenuRef = (0,external_react_.useRef)(null);
  const themeColor = isDarkModeEnabled ? theme.dark : theme.light;
  const onToggleTheme = (0,external_react_.useCallback)(() => {
    setIsSystemThemeUsed(false);
    setIsDarkModeEnabled(isDarkModeEnabled => !isDarkModeEnabled);
  }, [setIsSystemThemeUsed, setIsDarkModeEnabled]);
  const onToggleSystemTheme = (0,external_react_.useCallback)(() => {
    setIsSystemThemeUsed(isSystemThemeUsed => !isSystemThemeUsed);
  }, [setIsSystemThemeUsed]);
  const onToggleSettings = (0,external_react_.useCallback)(event => {
    event.preventDefault();
    setIsSettingMenuOpen(isSettingMenuOpen => !isSettingMenuOpen);
  }, [setIsSettingMenuOpen]);
  const themeTogglerWrapper = (0,css/* injectClassNames */.L)((ThemeToggler_module_default()).themeTogglerWrapper, [themeTogglerSettingsOpen, isSettingMenuOpen]);
  useOutsideClick(settingMenuRef, () => {
    setIsSettingMenuOpen(false);
  });
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/jsx_runtime_.jsx((head_default()), {
      children: /*#__PURE__*/jsx_runtime_.jsx("meta", {
        name: "theme-color",
        content: themeColor
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("figure", {
      className: statusBarHighlight
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: themeTogglerWrapper,
      children: [(0,external_react_.useMemo)(() => /*#__PURE__*/(0,jsx_runtime_.jsxs)("button", {
        "aria-label": "change theme",
        className: themeToggler,
        onContextMenu: onToggleSettings,
        onClick: onToggleTheme,
        children: [/*#__PURE__*/jsx_runtime_.jsx(icon/* default */.Z, {
          asset: "Moon",
          className: themeTogglerIcon
        }), /*#__PURE__*/jsx_runtime_.jsx(icon/* default */.Z, {
          asset: "Sun",
          className: themeTogglerIcon
        })]
      }), [onToggleSettings, onToggleTheme]), /*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
        className: themeTogglerSettings,
        ref: settingMenuRef,
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("li", {
          children: [/*#__PURE__*/jsx_runtime_.jsx(Switch, {
            id: DARK_MODE_SETTING,
            checked: !isSystemThemeUsed && isDarkModeEnabled,
            onChange: onToggleTheme,
            disabled: isSystemThemeUsed
          }), /*#__PURE__*/jsx_runtime_.jsx("label", {
            htmlFor: DARK_MODE_SETTING,
            children: "Use Dark Mode"
          })]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("li", {
          children: [/*#__PURE__*/jsx_runtime_.jsx(Switch, {
            id: SYSTEM_THEME_SETTING,
            checked: isSystemThemeUsed,
            onChange: onToggleSystemTheme
          }), /*#__PURE__*/jsx_runtime_.jsx("label", {
            htmlFor: SYSTEM_THEME_SETTING,
            children: "Use System Theme"
          })]
        })]
      })]
    })]
  });
}
;// CONCATENATED MODULE: ./src/components/header/themeToggler/index.ts

// EXTERNAL MODULE: ./src/components/header/Header.module.scss
var Header_module = __webpack_require__(25);
var Header_module_default = /*#__PURE__*/__webpack_require__.n(Header_module);
;// CONCATENATED MODULE: ./src/components/header/Header.component.tsx









const OFFLINE = 'offline';
const {
  header,
  headerControls,
  offline,
  offlineIcon
} = (Header_module_default());

const handleNetworkChange = () => {
  const {
    documentElement: {
      classList
    }
  } = document;

  if (!navigator.onLine) {
    classList.add(OFFLINE);
    return;
  }

  classList.remove(OFFLINE);
};

/* harmony default export */ var Header_component = (/*#__PURE__*/(0,external_react_.memo)(function Header() {
  (0,external_react_.useEffect)(() => {
    if (true) {
      handleNetworkChange();
      window.addEventListener('online', handleNetworkChange);
      window.addEventListener('offline', handleNetworkChange);
      return () => {
        window.removeEventListener('online', handleNetworkChange);
        window.removeEventListener('offline', handleNetworkChange);
      };
    }
  }, []);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: offline,
      children: [/*#__PURE__*/jsx_runtime_.jsx(icon/* default */.Z, {
        asset: "Cloud-Slash",
        className: offlineIcon
      }), "You are currently browsing in offline mode."]
    }), /*#__PURE__*/jsx_runtime_.jsx("header", {
      className: header,
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("nav", {
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: headerControls,
          children: [/*#__PURE__*/jsx_runtime_.jsx(Logo, {}), /*#__PURE__*/jsx_runtime_.jsx(ThemeToggler, {})]
        }), /*#__PURE__*/jsx_runtime_.jsx(Items, {})]
      })
    })]
  });
}));
;// CONCATENATED MODULE: ./src/components/header/index.ts

// EXTERNAL MODULE: ./src/components/footer/Footer.module.scss
var Footer_module = __webpack_require__(1466);
var Footer_module_default = /*#__PURE__*/__webpack_require__.n(Footer_module);
;// CONCATENATED MODULE: ./src/components/footer/Footer.component.tsx




const {
  footer
} = (Footer_module_default());
function Footer() {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("footer", {
    className: footer,
    children: [/*#__PURE__*/jsx_runtime_.jsx("p", {
      children: "\xA9 PWA Boilerplate"
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
      children: ["View source code on", ' ', /*#__PURE__*/jsx_runtime_.jsx("a", {
        href: "https://github.com/tomburgs/pwa-boilerplate",
        target: "_blank",
        rel: "noreferrer",
        children: "GitHub"
      })]
    })]
  });
}
;// CONCATENATED MODULE: ./src/components/footer/index.ts

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(79);
// EXTERNAL MODULE: ./src/stores/notifications/index.ts + 2 modules
var notifications = __webpack_require__(2860);
// EXTERNAL MODULE: ./src/components/notificationList/notification/Notification.module.scss
var Notification_module = __webpack_require__(4546);
var Notification_module_default = /*#__PURE__*/__webpack_require__.n(Notification_module);
;// CONCATENATED MODULE: ./src/components/notificationList/notification/Notification.component.tsx








const {
  notification,
  notificationOpen,
  notificationClose
} = (Notification_module_default());

const useHideNotification = (notificationId, setIsClosing) => {
  const dispatch = (0,external_react_redux_.useDispatch)();
  return () => {
    setIsClosing(true);
    setTimeout(() => {
      dispatch((0,notifications/* hideNotification */.yK)(notificationId));
    }, ANIMATION_DURATION);
  };
};

const useIsClosing = (notificationId, isExpirable) => {
  const {
    0: isClosing,
    1: setIsClosing
  } = (0,external_react_.useState)(false);
  const hideNotification = (0,external_react_.useCallback)(useHideNotification(notificationId, setIsClosing), [notificationId]);
  (0,external_react_.useEffect)(() => {
    const timeout = isExpirable && setTimeout(hideNotification, NOTIFICATION_TTL);
    return () => {
      if (timeout) {
        clearTimeout(timeout);
      }
    };
  }, []);
  return [isClosing, hideNotification];
};

function Notification({
  notificationId,
  notification: {
    message,
    isExpirable
  }
}) {
  const [isClosing, hideNotification] = useIsClosing(notificationId, isExpirable);
  const notificationState = isClosing ? notificationClose : notificationOpen;
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("li", {
    className: (0,css/* injectClassNames */.L)(notification, notificationState),
    children: [/*#__PURE__*/jsx_runtime_.jsx("button", {
      type: "button",
      "aria-label": "close notification",
      onClick: hideNotification
    }), /*#__PURE__*/jsx_runtime_.jsx("p", {
      children: message
    })]
  });
}
;// CONCATENATED MODULE: ./src/components/notificationList/notification/index.ts


// EXTERNAL MODULE: ./src/components/notificationList/NotificationList.module.scss
var NotificationList_module = __webpack_require__(3394);
var NotificationList_module_default = /*#__PURE__*/__webpack_require__.n(NotificationList_module);
;// CONCATENATED MODULE: ./src/components/notificationList/NotificationList.component.tsx





const {
  notificationList
} = (NotificationList_module_default());
const ANIMATION_DURATION = 200;
const NOTIFICATION_TTL = 5000;
function NotificationList() {
  const notifications = (0,external_react_redux_.useSelector)(state => state.notifications);
  const cssVariables = {
    '--animation-duration': `${ANIMATION_DURATION}ms`
  };
  return /*#__PURE__*/jsx_runtime_.jsx("ul", {
    className: notificationList,
    style: cssVariables,
    children: Object.entries(notifications).map(([notificationId, notification]) => /*#__PURE__*/jsx_runtime_.jsx(Notification, {
      notificationId: +notificationId,
      notification: notification
    }, notificationId))
  });
}
;// CONCATENATED MODULE: ./src/components/notificationList/index.ts


// EXTERNAL MODULE: ./src/stores/index.ts
var stores = __webpack_require__(734);
;// CONCATENATED MODULE: ./src/pages/_app.tsx




function _app_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _app_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { _app_ownKeys(Object(source), true).forEach(function (key) { _app_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { _app_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _app_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }











function App({
  Component,
  pageProps
}) {
  (0,external_react_.useEffect)(() => {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register("/_next/static/sw.js", {
        scope: '/'
      });
    }
  }, []);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)((head_default()), {
      children: [/*#__PURE__*/jsx_runtime_.jsx("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1.0, maximum-scale=1, minimum-scale=1, user-scalable=0, viewport-fit=cover"
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        name: "apple-mobile-web-app-capable",
        content: "yes"
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        name: "apple-mobile-web-app-status-bar-style",
        content: statusBarStyle
      }), /*#__PURE__*/jsx_runtime_.jsx("link", {
        rel: "apple-touch-startup-image",
        sizes: "512x512",
        href: "/logo512.png"
      }), /*#__PURE__*/jsx_runtime_.jsx("link", {
        rel: "apple-touch-startup-image",
        sizes: "256x256",
        href: "/logo256.png"
      }), /*#__PURE__*/jsx_runtime_.jsx("link", {
        rel: "apple-touch-icon",
        sizes: "512x512",
        href: "/logo512.png"
      }), /*#__PURE__*/jsx_runtime_.jsx("link", {
        rel: "apple-touch-icon",
        sizes: "256x256",
        href: "/logo256.png"
      }), /*#__PURE__*/jsx_runtime_.jsx("link", {
        rel: "manifest",
        href: "/manifest.json"
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx(external_react_redux_.Provider, {
      store: stores/* default */.Z,
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(ThemeProvider, {
        children: [/*#__PURE__*/jsx_runtime_.jsx(NotificationList, {}), /*#__PURE__*/jsx_runtime_.jsx(Header_component, {}), /*#__PURE__*/jsx_runtime_.jsx(Component, _app_objectSpread({}, pageProps)), /*#__PURE__*/jsx_runtime_.jsx(Footer, {})]
      })
    })]
  });
}

/***/ }),

/***/ 1466:
/***/ (function(module) {

// Exports
module.exports = {
	"footer": "Footer_footer__2BvtZ"
};


/***/ }),

/***/ 25:
/***/ (function(module) {

// Exports
module.exports = {
	"header": "Header_header__-Uzh_",
	"headerControls": "Header_headerControls__3voY0",
	"offline": "Header_offline__14MD7",
	"offlineIcon": "Header_offlineIcon__3kqIF"
};


/***/ }),

/***/ 9434:
/***/ (function(module) {

// Exports
module.exports = {
	"items": "Items_items__3XxFg",
	"active": "Items_active__25BJ4"
};


/***/ }),

/***/ 8202:
/***/ (function(module) {

// Exports
module.exports = {
	"logo": "Logo_logo__3z1BE"
};


/***/ }),

/***/ 7788:
/***/ (function(module) {

// Exports
module.exports = {
	"statusBarHighlight": "ThemeToggler_statusBarHighlight__IrriK",
	"themeToggler": "ThemeToggler_themeToggler__1r-_m",
	"themeTogglerIcon": "ThemeToggler_themeTogglerIcon__2v4tZ",
	"themeTogglerSettings": "ThemeToggler_themeTogglerSettings__1mvAF",
	"themeTogglerSettingsOpen": "ThemeToggler_themeTogglerSettingsOpen__1drM1",
	"themeTogglerWrapper": "ThemeToggler_themeTogglerWrapper__3JMNW",
	"moveIn": "ThemeToggler_moveIn__U3-hm",
	"moveOut": "ThemeToggler_moveOut__2aokW"
};


/***/ }),

/***/ 3394:
/***/ (function(module) {

// Exports
module.exports = {
	"notificationList": "NotificationList_notificationList__1DGw8"
};


/***/ }),

/***/ 4546:
/***/ (function(module) {

// Exports
module.exports = {
	"notification": "Notification_notification__1d_Hc",
	"notificationOpen": "Notification_notificationOpen__28pqS",
	"fadeInLeft": "Notification_fadeInLeft__1y4vm",
	"notificationClose": "Notification_notificationClose__2kdrL",
	"fadeOutRight": "Notification_fadeOutRight__1XjzJ"
};


/***/ }),

/***/ 5793:
/***/ (function(module) {

// Exports
module.exports = {
	"input": "Switch_input__3WAuE",
	"switch": "Switch_switch__26Z1k"
};


/***/ }),

/***/ 8417:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router-context.js");;

/***/ }),

/***/ 2238:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");;

/***/ }),

/***/ 9639:
/***/ (function(module) {

"use strict";
module.exports = require("next/dynamic");;

/***/ }),

/***/ 701:
/***/ (function(module) {

"use strict";
module.exports = require("next/head");;

/***/ }),

/***/ 6731:
/***/ (function(module) {

"use strict";
module.exports = require("next/router");;

/***/ }),

/***/ 9297:
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ 79:
/***/ (function(module) {

"use strict";
module.exports = require("react-redux");;

/***/ }),

/***/ 5282:
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-runtime");;

/***/ }),

/***/ 7561:
/***/ (function(module) {

"use strict";
module.exports = require("redux");;

/***/ }),

/***/ 5694:
/***/ (function(module) {

"use strict";
module.exports = require("redux-thunk");;

/***/ }),

/***/ 4453:
/***/ (function() {

/* (ignored) */

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, [664,422,237], function() { return __webpack_exec__(453); });
module.exports = __webpack_exports__;

})();