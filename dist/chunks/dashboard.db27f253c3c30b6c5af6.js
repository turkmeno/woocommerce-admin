(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dashboard"],{

/***/ "./client/dashboard/index.js":
/*!***********************************!*\
  !*** ./client/dashboard/index.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/compose */ "./node_modules/@wordpress/compose/build-module/index.js");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _woocommerce_wc_admin_settings__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @woocommerce/wc-admin-settings */ "./client/settings/index.js");
/* harmony import */ var _woocommerce_data__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @woocommerce/data */ "@woocommerce/data");
/* harmony import */ var _woocommerce_data__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_woocommerce_data__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _woocommerce_components__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @woocommerce/components */ "@woocommerce/components");
/* harmony import */ var _woocommerce_components__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_woocommerce_components__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./style.scss */ "./client/dashboard/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var dashboard_utils__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! dashboard/utils */ "./client/dashboard/utils.js");







function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

/**
 * External dependencies
 */




/**
 * WooCommerce dependencies
 */




/**
 * Internal dependencies
 */



var CustomizableDashboard = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["lazy"])(function () {
  return __webpack_require__.e(/*! import() | customizable-dashboard */ "customizable-dashboard").then(__webpack_require__.bind(null, /*! ./customizable */ "./client/dashboard/customizable.js"));
});
var ProfileWizard = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["lazy"])(function () {
  return Promise.all(/*! import() | profile-wizard */[__webpack_require__.e("vendors~activity-panels-inbox~activity-panels-orders~activity-panels-stock~dashboard-charts~devdocs~~54068357"), __webpack_require__.e("profile-wizard~task-list"), __webpack_require__.e("profile-wizard")]).then(__webpack_require__.bind(null, /*! ../profile-wizard */ "./client/profile-wizard/index.js"));
});

var Dashboard = /*#__PURE__*/function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default()(Dashboard, _Component);

  var _super = _createSuper(Dashboard);

  function Dashboard() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Dashboard);

    return _super.apply(this, arguments);
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Dashboard, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          path = _this$props.path,
          profileItems = _this$props.profileItems,
          query = _this$props.query;

      if (Object(dashboard_utils__WEBPACK_IMPORTED_MODULE_13__["isOnboardingEnabled"])() && !profileItems.completed && !window.wcAdminFeatures.homescreen) {
        return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["Suspense"], {
          fallback: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(_woocommerce_components__WEBPACK_IMPORTED_MODULE_11__["Spinner"], null)
        }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(ProfileWizard, {
          query: query
        }));
      }

      if (window.wcAdminFeatures['analytics-dashboard/customizable']) {
        return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["Suspense"], {
          fallback: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(_woocommerce_components__WEBPACK_IMPORTED_MODULE_11__["Spinner"], null)
        }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(CustomizableDashboard, {
          query: query,
          path: path
        }));
      }

      return null;
    }
  }]);

  return Dashboard;
}(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(_wordpress_compose__WEBPACK_IMPORTED_MODULE_6__["compose"])(Object(_woocommerce_wc_admin_settings__WEBPACK_IMPORTED_MODULE_9__["getSetting"])('onboarding', {}).profile ? Object(_woocommerce_data__WEBPACK_IMPORTED_MODULE_10__["withOnboardingHydration"])(Object(_woocommerce_wc_admin_settings__WEBPACK_IMPORTED_MODULE_9__["getSetting"])('onboarding', {}).profile) : lodash__WEBPACK_IMPORTED_MODULE_8__["identity"], Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_7__["withSelect"])(function (select) {
  if (!Object(dashboard_utils__WEBPACK_IMPORTED_MODULE_13__["isOnboardingEnabled"])()) {
    return;
  }

  var _select = select(_woocommerce_data__WEBPACK_IMPORTED_MODULE_10__["ONBOARDING_STORE_NAME"]),
      getProfileItems = _select.getProfileItems;

  var profileItems = getProfileItems();
  return {
    profileItems: profileItems
  };
}))(Dashboard));

/***/ }),

/***/ "./client/dashboard/style.scss":
/*!*************************************!*\
  !*** ./client/dashboard/style.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/@automattic/mini-css-extract-plugin-with-rtl/dist/loader.js):\nModuleBuildError: Module build failed: Error: ENOENT: no such file or directory, open '/Users/timmyc/vagrant-local/www/woo-one/public_html/wp-content/plugins/woocommerce-admin/node_modules/css-loader/dist/runtime/api.js'\n    at runLoaders (/Users/timmyc/vagrant-local/www/woo-one/public_html/wp-content/plugins/woocommerce-admin/node_modules/webpack/lib/NormalModule.js:316:20)\n    at /Users/timmyc/vagrant-local/www/woo-one/public_html/wp-content/plugins/woocommerce-admin/node_modules/loader-runner/lib/LoaderRunner.js:367:11\n    at /Users/timmyc/vagrant-local/www/woo-one/public_html/wp-content/plugins/woocommerce-admin/node_modules/loader-runner/lib/LoaderRunner.js:203:19\n    at process.nextTick (/Users/timmyc/vagrant-local/www/woo-one/public_html/wp-content/plugins/woocommerce-admin/node_modules/enhanced-resolve/lib/CachedInputFileSystem.js:85:15)\n    at process._tickCallback (internal/process/next_tick.js:61:11)");

/***/ }),

/***/ "./client/dashboard/utils.js":
/*!***********************************!*\
  !*** ./client/dashboard/utils.js ***!
  \***********************************/
/*! exports provided: getCountryCode, getCurrencyRegion, getProductIdsForCart, getPriceValue, isOnboardingEnabled */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCountryCode", function() { return getCountryCode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCurrencyRegion", function() { return getCurrencyRegion; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProductIdsForCart", function() { return getProductIdsForCart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPriceValue", function() { return getPriceValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isOnboardingEnabled", function() { return isOnboardingEnabled; });
/* harmony import */ var _wordpress_html_entities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/html-entities */ "@wordpress/html-entities");
/* harmony import */ var _wordpress_html_entities__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_html_entities__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _woocommerce_wc_admin_settings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @woocommerce/wc-admin-settings */ "./client/settings/index.js");
/**
 * External dependencies
 */


/**
 * Internal dependencies
 */


/**
 * Gets the country code from a country:state value string.
 *
 * @param {string} countryState Country state string, e.g. US:GA.
 * @return {string} Country string.
 */

function getCountryCode(countryState) {
  if (!countryState) {
    return null;
  }

  return countryState.split(':')[0];
}
function getCurrencyRegion(countryState) {
  var region = getCountryCode(countryState);
  var euCountries = Object(lodash__WEBPACK_IMPORTED_MODULE_1__["without"])(Object(_woocommerce_wc_admin_settings__WEBPACK_IMPORTED_MODULE_2__["getSetting"])('onboarding', {
    euCountries: []
  }).euCountries, 'GB');

  if (euCountries.includes(region)) {
    region = 'EU';
  }

  return region;
}
/**
 * Gets the product IDs for items based on the product types and theme selected in the onboarding profiler.
 *
 * @param {Object} profileItems Onboarding profile.
 * @param {boolean} includeInstalledItems Include installed items in returned product IDs.
 * @param {Array} installedPlugins Installed plugins.
 * @return {Array} Product Ids.
 */

function getProductIdsForCart(profileItems) {
  var includeInstalledItems = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var installedPlugins = arguments.length > 2 ? arguments[2] : undefined;
  var onboarding = Object(_woocommerce_wc_admin_settings__WEBPACK_IMPORTED_MODULE_2__["getSetting"])('onboarding', {});
  var productIds = []; // The population of onboarding.productTypes only happens if the task list should be shown
  // so bail early if it isn't present.

  if (!onboarding.productTypes) {
    return productIds;
  }

  var productTypes = profileItems.product_types || [];
  productTypes.forEach(function (productType) {
    if (onboarding.productTypes[productType] && onboarding.productTypes[productType].product && (includeInstalledItems || !installedPlugins.includes(onboarding.productTypes[productType].slug))) {
      productIds.push(onboarding.productTypes[productType].product);
    }
  });
  var theme = onboarding.themes.find(function (themeData) {
    return themeData.slug === profileItems.theme;
  });

  if (theme && theme.id && getPriceValue(theme.price) > 0 && (includeInstalledItems || !theme.is_installed)) {
    productIds.push(theme.id);
  }

  return productIds;
}
/**
 * Get the value of a price from a string, removing any non-numeric characters.
 *
 * @param {string} string Price string.
 * @return {number} Number value.
 */

function getPriceValue(string) {
  return Number(Object(_wordpress_html_entities__WEBPACK_IMPORTED_MODULE_0__["decodeEntities"])(string).replace(/[^0-9.-]+/g, ''));
}
/**
 * Returns if the onboarding feature of WooCommerce Admin should be enabled.
 *
 * While we preform an a/b test of onboarding, the feature will be enabled within the plugin build,
 * but only if the user recieved the test/opted in.
 *
 * @return {boolean} True if the onboarding is enabled.
 */

function isOnboardingEnabled() {
  if (!window.wcAdminFeatures.onboarding) {
    return false;
  }

  return Object(_woocommerce_wc_admin_settings__WEBPACK_IMPORTED_MODULE_2__["getSetting"])('onboardingEnabled', false);
}

/***/ })

}]);
//# sourceMappingURL=dashboard.db27f253c3c30b6c5af6.min.js.map