var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Home",
    "title": "Home",
    "category": "page",
    "text": ""
},

{
    "location": "#Poptart.jl-1",
    "page": "Home",
    "title": "Poptart.jl 🏂",
    "category": "section",
    "text": "GUI programming in Julia based on Nuklear.jl"
},

{
    "location": "#Poptart.Controls-1",
    "page": "Home",
    "title": "Poptart.Controls",
    "category": "section",
    "text": "using Poptart.Desktop # Application Windows put!\nusing Poptart.Controls # Button Label Slider didClick\n\nwindow1 = Windows.Window(title=\"A\", frame=(x=10,y=20,width=200,height=200))\nwindow2 = Windows.Window(title=\"B\", frame=(x=220,y=20,width=200,height=200))\nApplication(windows=[window1, window2], title=\"App\", frame=(width=430, height=300))\n\nbutton = Button(title=\"Hello\", frame=(width=80, height=30))\nput!(window1, button)\n\nlabel = Label(text=\"Range:\")\nslider1 = Slider(range=1:10, value=Ref{Cint}(5))\nslider2 = Slider(range=1.0:10.0, value=Ref{Cfloat}(2.0))\nput!(window2, label, slider1, slider2)\n\ndidClick(button) do event\n    @info :didClick event\nend\n\ndidClick(slider1) do event\n    @info :didClick (event, slider1.value[])\nend(Image: app.png)"
},

{
    "location": "#Poptart.Drawings-1",
    "page": "Home",
    "title": "Poptart.Drawings",
    "category": "section",
    "text": "using Poptart.Desktop # Application Windows put!\nusing Poptart.Controls # Canvas\nusing Poptart.Drawings # Line Rect Circle Triangle Arc Curve Polyline Polygon stroke fill\nusing Nuklear.LibNuklear: NK_WINDOW_TITLE\nusing Colors: RGBA\n\ncanvas = Canvas()\nwindow1 = Windows.Window([canvas], title=\"A\", frame=(x=0, y=0, width=500, height=400), flags=NK_WINDOW_TITLE)\nApplication(windows=[window1], title=\"App\", frame=(width=500, height=400))\n\nstrokeColor = RGBA(0,0.7,0,1)\nfillColor   = RGBA(0.1, 0.7,0.8,0.9)\n\nline1 = Line(points=[(50, 100), (90, 140)], thickness=7.5, color=strokeColor)\nline2 = Line(points=[(60, 90), (100, 130)], thickness=7.5, color=strokeColor)\nline3 = Line(points=[(70, 80), (110, 120)], thickness=7.5, color=strokeColor)\n\nrect2 = Rect(rect=(160, 70, 50, 50), rounding=0, color=fillColor)\nrect1 = Rect(rect=(160, 150, 50, 50), rounding=0, thickness=7.5, color=strokeColor)\n\ncircle2 = Circle(rect=(160+70, 70, 51, 51), color=fillColor)\ncircle1 = Circle(rect=(160+70, 150, 51, 51), thickness=7.5, color=strokeColor)\n\ntriangle2 = Triangle(points=[(320, 75), (300,116), (340,116)], color=fillColor)\ntriangle1 = Triangle(points=[(320, 75+80), (300,116+80), (340,116+80)], thickness=7.5, color=strokeColor)\n\narc2 = Arc(center=(380, 80), radius=37, angle=(min=0, max=deg2rad(120)), color=fillColor)\narc1 = Arc(center=(380, 80+80), radius=37, angle=(min=0, max=deg2rad(120)), thickness=7.5, color=strokeColor)\n\nm(x, y) = (x, y) .+ (-340, -20)\ncurve1 = Curve(startPoint=m(380,200), control1=m(405,270), control2=m(455,120), endPoint=m(480,200), thickness=7.5, color=strokeColor)\n\npolyline1 = Polyline(points=[(320-60, 75+150), (300-60,116+150), (340-60,116+150)], thickness=7.5, color=strokeColor)\n\npolygon1 = Polygon(points=[(320, 75+150), (300,116+150), (340,116+150)], thickness=7.5, color=strokeColor)\npolygon2 = Polygon(points=[(320, 75+220), (300,116+220), (340,116+220)], color=fillColor)\n\nput!(canvas,\n    stroke.((line1, line2, line3))...,\n    stroke(rect1), fill(rect2),\n    stroke(circle1), fill(circle2),\n    stroke(triangle1), fill(triangle2),\n    stroke(arc1), fill(arc2),\n    stroke(curve1),\n    stroke(polyline1),\n    stroke(polygon1), fill(polygon2))(Image: drawings.png)"
},

{
    "location": "#Requirements-1",
    "page": "Home",
    "title": "Requirements",
    "category": "section",
    "text": "julia> type ] key(v1.0) pkg> add https://github.com/wookay/Poptart.jl"
},

{
    "location": "Desktop/#",
    "page": "Desktop",
    "title": "Desktop",
    "category": "page",
    "text": ""
},

{
    "location": "Desktop/#Poptart.Desktop.Application",
    "page": "Desktop",
    "title": "Poptart.Desktop.Application",
    "category": "type",
    "text": "Application(; title::String=\"App\", frame::NamedTuple{(:width,:height)}=(width=400, height=300), windows=[Windows.Window(title=\"\", frame=(x=0,y=0,frame...))], async=true)\n\n\n\n\n\n"
},

{
    "location": "Desktop/#Poptart.Desktop-1",
    "page": "Desktop",
    "title": "Poptart.Desktop",
    "category": "section",
    "text": "Application"
},

{
    "location": "Desktop/#Poptart.Desktop.Windows.Window",
    "page": "Desktop",
    "title": "Poptart.Desktop.Windows.Window",
    "category": "type",
    "text": "Window(items::Vector{<:UIControl} = UIControl[]; title::String, frame::NamedTuple{(:x,:y,:width,:height)}, name::Union{Nothing,String}=nothing, flags=NK_WINDOW_BORDER | NK_WINDOW_MOVABLE | NK_WINDOW_SCALABLE | NK_WINDOW_MINIMIZABLE | NK_WINDOW_TITLE)\n\n\n\n\n\n"
},

{
    "location": "Desktop/#Base.put!-Union{Tuple{W}, Tuple{W,Vararg{UIControl,N} where N}} where W<:UIWindow",
    "page": "Desktop",
    "title": "Base.put!",
    "category": "method",
    "text": "Windows.put!(window::W, controls::UIControl...) where {W <: UIWindow}\n\n\n\n\n\n"
},

{
    "location": "Desktop/#Poptart.Interfaces.remove!-Union{Tuple{W}, Tuple{W,Vararg{UIControl,N} where N}} where W<:UIWindow",
    "page": "Desktop",
    "title": "Poptart.Interfaces.remove!",
    "category": "method",
    "text": "Windows.remove!(window::W, controls::UIControl...) where {W <: UIWindow}\n\n\n\n\n\n"
},

{
    "location": "Desktop/#Poptart.Desktop.Windows-1",
    "page": "Desktop",
    "title": "Poptart.Desktop.Windows",
    "category": "section",
    "text": "Windows.Window\nWindows.put!(window::W, controls::UIControl...) where {W <: UIWindow}\nWindows.remove!(window::W, controls::UIControl...) where {W <: UIWindow}"
},

{
    "location": "Desktop/#Poptart.Desktop.Themes.WhiteTheme",
    "page": "Desktop",
    "title": "Poptart.Desktop.Themes.WhiteTheme",
    "category": "type",
    "text": "abstract type WhiteTheme <: CustomTheme end\n\n\n\n\n\n"
},

{
    "location": "Desktop/#Poptart.Desktop.Themes.DarkTheme",
    "page": "Desktop",
    "title": "Poptart.Desktop.Themes.DarkTheme",
    "category": "type",
    "text": "abstract type DarkTheme <: CustomTheme end\n\n\n\n\n\n"
},

{
    "location": "Desktop/#Poptart.Desktop.Themes.color_table",
    "page": "Desktop",
    "title": "Poptart.Desktop.Themes.color_table",
    "category": "function",
    "text": "color_table\n\n\n\n\n\n"
},

{
    "location": "Desktop/#Poptart.Desktop.Themes.set_style!",
    "page": "Desktop",
    "title": "Poptart.Desktop.Themes.set_style!",
    "category": "function",
    "text": "set_style!(app::A, ::Type{T}) where {T <: CustomTheme, A <: UIApplication}\n\n\n\n\n\n"
},

{
    "location": "Desktop/#Poptart.Desktop.Themes-1",
    "page": "Desktop",
    "title": "Poptart.Desktop.Themes",
    "category": "section",
    "text": "Desktop.Themes.WhiteTheme\nDesktop.Themes.DarkTheme\nDesktop.Themes.color_table\nDesktop.Themes.set_style!"
},

{
    "location": "Controls/#",
    "page": "Controls",
    "title": "Controls",
    "category": "page",
    "text": ""
},

{
    "location": "Controls/#Poptart.Controls.Button",
    "page": "Controls",
    "title": "Poptart.Controls.Button",
    "category": "type",
    "text": "Button(; title::String, [frame])\n\n\n\n\n\n"
},

{
    "location": "Controls/#Poptart.Controls.Slider",
    "page": "Controls",
    "title": "Poptart.Controls.Slider",
    "category": "type",
    "text": "Slider(; range, value::Ref, [frame])\n\n\n\n\n\n"
},

{
    "location": "Controls/#Poptart.Controls.Property",
    "page": "Controls",
    "title": "Poptart.Controls.Property",
    "category": "type",
    "text": "Property(; name::String, range, value::Ref, [frame])\n\n\n\n\n\n"
},

{
    "location": "Controls/#Poptart.Controls.Label",
    "page": "Controls",
    "title": "Poptart.Controls.Label",
    "category": "type",
    "text": "Label(; text::String, alignment=NK_TEXT_LEFT, color::Union{Nothing,RGBA}=nothing, [frame])\n\n\n\n\n\n"
},

{
    "location": "Controls/#Poptart.Controls.SelectableLabel",
    "page": "Controls",
    "title": "Poptart.Controls.SelectableLabel",
    "category": "type",
    "text": "SelectableLabel(; text::String, selected::Ref, [frame])\n\n\n\n\n\n"
},

{
    "location": "Controls/#Poptart.Controls.CheckBox",
    "page": "Controls",
    "title": "Poptart.Controls.CheckBox",
    "category": "type",
    "text": "CheckBox(; text::String, active::Ref, [frame])\n\n\n\n\n\n"
},

{
    "location": "Controls/#Poptart.Controls.Radio",
    "page": "Controls",
    "title": "Poptart.Controls.Radio",
    "category": "type",
    "text": "Radio(; options, value, [frame])\n\n\n\n\n\n"
},

{
    "location": "Controls/#Poptart.Controls.ComboBox",
    "page": "Controls",
    "title": "Poptart.Controls.ComboBox",
    "category": "type",
    "text": "ComboBox(; options, value, [frame])\n\n\n\n\n\n"
},

{
    "location": "Controls/#Poptart.Controls.ProgressBar",
    "page": "Controls",
    "title": "Poptart.Controls.ProgressBar",
    "category": "type",
    "text": "ProgressBar(; value::Ref, max::nk_size, modifyable::Bool, [frame])\n\n\n\n\n\n"
},

{
    "location": "Controls/#Poptart.Controls.ImageView",
    "page": "Controls",
    "title": "Poptart.Controls.ImageView",
    "category": "type",
    "text": "ImageView(; path::String, [frame])\n\n\n\n\n\n"
},

{
    "location": "Controls/#Poptart.Controls.ToolTip",
    "page": "Controls",
    "title": "Poptart.Controls.ToolTip",
    "category": "type",
    "text": "ToolTip(; text::String, [frame])\n\n\n\n\n\n"
},

{
    "location": "Controls/#Poptart.Controls.Chart",
    "page": "Controls",
    "title": "Poptart.Controls.Chart",
    "category": "type",
    "text": "Chart(chart_items::Vector; chart_type, min, max, [color::Union{Nothing,RGBA}=nothing, highlight::Union{Nothing,RGBA}=nothing], kwargs...)\n\n\n\n\n\n"
},

{
    "location": "Controls/#Poptart.Controls.StaticRow",
    "page": "Controls",
    "title": "Poptart.Controls.StaticRow",
    "category": "type",
    "text": "StaticRow(widgets::Vector{<:UIControl}; height, width, [cols])\n\n\n\n\n\n"
},

{
    "location": "Controls/#Poptart.Controls.DynamicRow",
    "page": "Controls",
    "title": "Poptart.Controls.DynamicRow",
    "category": "type",
    "text": "DynamicRow(widgets::Vector{<:UIControl}; height, [cols])\n\n\n\n\n\n"
},

{
    "location": "Controls/#Poptart.Controls.Spacing",
    "page": "Controls",
    "title": "Poptart.Controls.Spacing",
    "category": "type",
    "text": "Spacing(widgets::Vector{<:UIControl}; [cols])\n\n\n\n\n\n"
},

{
    "location": "Controls/#Poptart.Controls.didClick-Union{Tuple{C}, Tuple{Any,C}} where C<:UIControl",
    "page": "Controls",
    "title": "Poptart.Controls.didClick",
    "category": "method",
    "text": "didClick(block, control::C) where {C <: UIControl}\n\n\n\n\n\n"
},

{
    "location": "Controls/#Poptart.Controls.onHover-Union{Tuple{C}, Tuple{Any,C}} where C<:UIControl",
    "page": "Controls",
    "title": "Poptart.Controls.onHover",
    "category": "method",
    "text": "onHover(block, control::C) where {C <: UIControl}\n\n\n\n\n\n"
},

{
    "location": "Controls/#Poptart.Controls.Canvas",
    "page": "Controls",
    "title": "Poptart.Controls.Canvas",
    "category": "type",
    "text": "Canvas(elements::Vector{<:Drawing} = Drawing[]; [frame])\n\n\n\n\n\n"
},

{
    "location": "Controls/#Base.put!-Tuple{Canvas,Vararg{Poptart.Drawings.Drawing,N} where N}",
    "page": "Controls",
    "title": "Base.put!",
    "category": "method",
    "text": "Controls.put!(canvas::Canvas, elements::Drawings.Drawing...)\n\n\n\n\n\n"
},

{
    "location": "Controls/#Poptart.Interfaces.remove!-Tuple{Canvas,Vararg{Poptart.Drawings.Drawing,N} where N}",
    "page": "Controls",
    "title": "Poptart.Interfaces.remove!",
    "category": "method",
    "text": "Controls.remove!(canvas::Canvas, elements::Drawings.Drawing...)\n\n\n\n\n\n"
},

{
    "location": "Controls/#Poptart.Controls-1",
    "page": "Controls",
    "title": "Poptart.Controls",
    "category": "section",
    "text": "Button\nSlider\nProperty\nLabel\nSelectableLabel\nCheckBox\nRadio\nComboBox\nProgressBar\nImageView\nToolTip\nChartStaticRow\nDynamicRow\nSpacingdidClick(block, control::C) where {C <: UIControl}\nonHover(block, control::C) where {C <: UIControl}Canvas\nControls.put!(canvas::Canvas, elements::Drawings.Drawing...)\nControls.remove!(canvas::Canvas, elements::Drawings.Drawing...)"
},

{
    "location": "Drawings/#",
    "page": "Drawings",
    "title": "Drawings",
    "category": "page",
    "text": ""
},

{
    "location": "Drawings/#Poptart.Drawings.Line",
    "page": "Drawings",
    "title": "Poptart.Drawings.Line",
    "category": "type",
    "text": "Line(; points::Vector{<:Tuple}, thickness, color)\n\n\n\n\n\n"
},

{
    "location": "Drawings/#Poptart.Drawings.Rect",
    "page": "Drawings",
    "title": "Poptart.Drawings.Rect",
    "category": "type",
    "text": "Rect(; rect, rounding, [thickness], color)\n\n\n\n\n\n"
},

{
    "location": "Drawings/#Poptart.Drawings.RectMultiColor",
    "page": "Drawings",
    "title": "Poptart.Drawings.RectMultiColor",
    "category": "type",
    "text": "RectMultiColor(; rect, left, top, right, bottom)\n\n\n\n\n\n"
},

{
    "location": "Drawings/#Poptart.Drawings.Circle",
    "page": "Drawings",
    "title": "Poptart.Drawings.Circle",
    "category": "type",
    "text": "Circle(; rect, [thickness], color)\n\n\n\n\n\n"
},

{
    "location": "Drawings/#Poptart.Drawings.Triangle",
    "page": "Drawings",
    "title": "Poptart.Drawings.Triangle",
    "category": "type",
    "text": "Triangle(; points::Vector{<:Tuple}, [thickness], color)\n\n\n\n\n\n"
},

{
    "location": "Drawings/#Poptart.Drawings.Arc",
    "page": "Drawings",
    "title": "Poptart.Drawings.Arc",
    "category": "type",
    "text": "Arc(; center, radius, angle, [thickness], color)\n\n\n\n\n\n"
},

{
    "location": "Drawings/#Poptart.Drawings.Curve",
    "page": "Drawings",
    "title": "Poptart.Drawings.Curve",
    "category": "type",
    "text": "Curve(; startPoint, control1, control2, endPoint, thickness, color)\n\n\n\n\n\n"
},

{
    "location": "Drawings/#Poptart.Drawings.Polyline",
    "page": "Drawings",
    "title": "Poptart.Drawings.Polyline",
    "category": "type",
    "text": "Polyline(; points::Vector{<:Tuple}, thickness, color)\n\n\n\n\n\n"
},

{
    "location": "Drawings/#Poptart.Drawings.Polygon",
    "page": "Drawings",
    "title": "Poptart.Drawings.Polygon",
    "category": "type",
    "text": "Polygon(; points::Vector{<:Tuple}, [thickness], color)\n\n\n\n\n\n"
},

{
    "location": "Drawings/#Poptart.Drawings.stroke-Union{Tuple{E}, Tuple{E}} where E<:DrawingElement",
    "page": "Drawings",
    "title": "Poptart.Drawings.stroke",
    "category": "method",
    "text": "Drawings.stroke(element::E) where {E <: DrawingElement}\n\n\n\n\n\n"
},

{
    "location": "Drawings/#Base.fill-Union{Tuple{E}, Tuple{E}} where E<:DrawingElement",
    "page": "Drawings",
    "title": "Base.fill",
    "category": "method",
    "text": "Drawings.fill(element::E) where {E <: DrawingElement}\n\n\n\n\n\n"
},

{
    "location": "Drawings/#Poptart.Drawings-1",
    "page": "Drawings",
    "title": "Poptart.Drawings",
    "category": "section",
    "text": "Line\nRect\nRectMultiColor\nCircle\nTriangle\nArc\nCurve\nPolyline\nPolygonDrawings.stroke(element::E) where {E <: DrawingElement}\nDrawings.fill(element::E) where {E <: DrawingElement}"
},

]}
