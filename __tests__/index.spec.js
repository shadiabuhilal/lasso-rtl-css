/**
 * Copyright 2017, Yahoo Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */
'use strict';

/*global jest, jasmine, describe, it, expect */

jest.mock('fs', function () {

    return jest.genMockFromModule('fs');
});

describe('Lasso RTL css plugin', function () {

    it('should register a transform', function (done) {

        var plugin = require('../index');

        var lasso = {
            addTransform: jest.fn(function (options) {

                expect(options.transform('.header { direction: ltr; }')).toEqual('.header { direction: rtl; }');
                done();
            })
        };

        var config = {};

        plugin(lasso, config);

        expect(lasso.addTransform).toBeCalledWith({
            contentType: 'css',
            name: 'lasso-rtl-css',
            stream: false,
            transform: jasmine.any(Function)
        });
    });

});
