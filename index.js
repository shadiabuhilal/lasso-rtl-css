/**
 * Copyright 2017, Yahoo Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */
'use strict';

// Using `rtlcss` to Transform CSS from left-to-right to right-to-left
// https://www.npmjs.com/package/rtlcss
var Rtlcss = require('rtlcss');

module.exports = function (lasso) {

    lasso.addTransform({
        contentType: 'css',
        name: 'lasso-rtl-css',
        stream: false,
        transform: function (css) {

            return Rtlcss.process(css);
        }
    });

};
