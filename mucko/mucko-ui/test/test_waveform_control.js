// mucko-ui test_waveform_control.js

var mucko = require("mucko")
var Test = mucko.Test
var Base = mucko.Base


function inbrowser_waveform(UI) {
    function getJSONFakeData(n) {
        return {
            "length": n,
            "bits": 8,
            "sample_rate": 48000,
            "samples_per_pixel": 512,
            "data": [
                0, 0, -10, 10, 0, 0, -5, 7, -5, 7, 0, 0, 0, 0, 0, 0, 0, 0, -2, 2
            ]
        }
    }
    n = 10
    data = getJSONFakeData(n)
    UI.WaveformControl.Waveform("svg#waveform1", data)
    data.data = [0, 0, 8, 8, -5, 7, 0, 0, 0, 0, 0, 0, 0, 0, -2, 2, 0, 0, 0, 0, 0, 0, 0, 0]
    UI.WaveformControl.Waveform("svg#waveform2", data)
}


Test.test_waveform = function () {
    if (Base.Sys.isbrowser()) {
        // inbrowser_waveform(UI)
    } else {
        UI = require("../index.js")
        assert_true(Base.Meta.isa(UI.WaveformControl, Object)) 
    }
}


if (Base.Sys.isbrowser()) {
    UI = require("mucko-ui")
    //code = Base.Meta.body(inbrowser_waveform)
    //eval(code)
    inbrowser_waveform(UI)
}
