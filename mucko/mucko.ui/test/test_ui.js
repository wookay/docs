// mucko.ui test_ui.js

var mucko = require("mucko")
var Test = mucko.Test
var Base = mucko.Base


function inbrowser_ui(UI) {
}


Test.test_ui = function () {
    if (Base.Sys.isbrowser()) {
        mucko.UI = require("mucko.ui")
        inbrowser_ui(mucko.UI)
    } else {
        mucko.UI = require("../index.js")
    }
    assert_true(Base.Meta.isa(mucko.UI, Object))
}
