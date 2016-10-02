/* eslint-disable */
// Copyright (c) 2012 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

const ChromeExOAuth = require("./chrome_ex_oauth");

window.onload = function() {
    setTimeout(() => {
        debugger;
        ChromeExOAuth.initCallbackPage();
    }, 2000);
}
