# lasso-rtl-css 

![Build Status](https://github.com/shadiabuhilal/lasso-rtl-css/actions/workflows/push-workflows.yml/badge.svg)

Plugin for Lasso.js to support RTL css by transforming CSS from left-to-right to right-to-left using [rtlcss](https://www.npmjs.com/package/rtlcss) npm package.

# Usage
```bash
npm install lasso-rtl-css --save
```

Register the plugin when configuring the lasso.

Example:
```js
require('lasso').configure({
    "plugins": [
        ...
        "lasso-rtl-css"
    ]
    ...
});
```

# License

Copyright 2017, Yahoo Inc.

Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
