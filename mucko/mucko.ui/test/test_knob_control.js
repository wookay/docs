// mucko.ui test_knob_control.js

var mucko = require("mucko")
var Test = mucko.Test
var Base = mucko.Base


function inbrowser_knob(UI) {
    knobel1 = document.getElementById('knob1')
    knobel2 = document.getElementById('knob2')
    UI.KnobControl.Knob(knobel1, 0)
    UI.KnobControl.Knob(knobel2, 100)
}


Test.test_knob = function () {
    if (Base.Sys.isbrowser()) {
        UI = require("mucko.ui")
        inbrowser_knob(UI)
    } else {
        UI = require("../index.js")
    }
    assert_true(Base.Meta.isa(UI.KnobControl, Object)) 
}
