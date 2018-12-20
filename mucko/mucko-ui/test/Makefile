bundle:
	browserify -r mucko -r d3 -r waveform-data -r ../deps/svg-knob.js:svg-knob -r ../index.js:mucko-ui > deps/bundle.js
	date '+%Y-%m-%d %H:%M:%S' > deps/browserified_at

test:
	node -r mucko runtests.js

ui:
	node -r mucko test_ui.js

knob_control:
	node -r mucko -e 'require("./test_knob_control.js"); UnitTest.run(Test)'

waveform_control:
	node -r mucko -r d3 -r waveform-data -e 'require("./test_waveform_control.js"); UnitTest.run(Test)'
