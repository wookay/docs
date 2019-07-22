var documenterSearchIndex = {"docs":
[{"location":"Controls/#Poptart.Controls-1","page":"Controls","title":"Poptart.Controls","text":"","category":"section"},{"location":"Controls/#","page":"Controls","title":"Controls","text":"Controls","category":"page"},{"location":"Controls/#events-1","page":"Controls","title":"events","text":"","category":"section"},{"location":"Controls/#","page":"Controls","title":"Controls","text":"didClick(block, control::C) where {C <: UIControl}","category":"page"},{"location":"Controls/#Poptart.Controls.didClick-Union{Tuple{C}, Tuple{Any,C}} where C<:UIControl","page":"Controls","title":"Poptart.Controls.didClick","text":"didClick(block, control::C) where {C <: UIControl}\n\n\n\n\n\n","category":"method"},{"location":"Controls/#widgets-1","page":"Controls","title":"widgets","text":"","category":"section"},{"location":"Controls/#","page":"Controls","title":"Controls","text":"Button\nSlider\nLabel","category":"page"},{"location":"Controls/#Poptart.Controls.Button","page":"Controls","title":"Poptart.Controls.Button","text":"Button(; title::String, [frame::NamedTuple{(:width,:height)}])\n\n\n\n\n\n","category":"type"},{"location":"Controls/#Poptart.Controls.Slider","page":"Controls","title":"Poptart.Controls.Slider","text":"Slider(; label::String, range, value::Ref, [frame])\n\n\n\n\n\n","category":"type"},{"location":"Controls/#Poptart.Controls.Label","page":"Controls","title":"Poptart.Controls.Label","text":"Label(; text::String, [frame])\n\n\n\n\n\n","category":"type"},{"location":"Controls/#canvas-1","page":"Controls","title":"canvas","text":"","category":"section"},{"location":"Controls/#","page":"Controls","title":"Controls","text":"Canvas\nControls.put!(canvas::Canvas, elements::Drawings.Drawing...)\nControls.remove!(canvas::Canvas, elements::Drawings.Drawing...)\nempty!(canvas::Canvas)","category":"page"},{"location":"Controls/#Poptart.Controls.Canvas","page":"Controls","title":"Poptart.Controls.Canvas","text":"Canvas(; items::Vector{Drawing} = Drawing[])\n\n\n\n\n\n","category":"type"},{"location":"Controls/#Base.put!-Tuple{Canvas,Vararg{Poptart.Drawings.Drawing,N} where N}","page":"Controls","title":"Base.put!","text":"Controls.put!(canvas::Canvas, elements::Union{Drawing, TextBox}...)\n\n\n\n\n\n","category":"method"},{"location":"Controls/#Poptart.Interfaces.remove!-Tuple{Canvas,Vararg{Poptart.Drawings.Drawing,N} where N}","page":"Controls","title":"Poptart.Interfaces.remove!","text":"Controls.remove!(canvas::Canvas, elements::Union{Drawing, TextBox}...)\n\n\n\n\n\n","category":"method"},{"location":"Controls/#Base.empty!-Tuple{Canvas}","page":"Controls","title":"Base.empty!","text":"empty!(canvas::Canvas)\n\n\n\n\n\n","category":"method"},{"location":"Controls/#Mouse-1","page":"Controls","title":"Mouse","text":"","category":"section"},{"location":"Controls/#","page":"Controls","title":"Controls","text":"Mouse.leftClick","category":"page"},{"location":"Controls/#Poptart.Controls.Mouse.leftClick","page":"Controls","title":"Poptart.Controls.Mouse.leftClick","text":"leftClick(control::C; kwargs...) where {C <: UIControl}\n\n\n\n\n\n","category":"function"},{"location":"#Poptart.jl-1","page":"Home","title":"Poptart.jl 🏂","text":"","category":"section"},{"location":"#","page":"Home","title":"Home","text":"GUI programming in Julia based on CImGui.jl","category":"page"},{"location":"#","page":"Home","title":"Home","text":"☕️   You can make a donation to support this project.","category":"page"},{"location":"#Poptart.Controls-1","page":"Home","title":"Poptart.Controls","text":"","category":"section"},{"location":"#","page":"Home","title":"Home","text":"using Poptart.Desktop # Application Windows put!\nusing Poptart.Controls # Button Label Slider didClick\n\nwindow1 = Windows.Window(title=\"A\", frame=(x=10,y=20,width=200,height=200))\nwindow2 = Windows.Window(title=\"B\", frame=(x=220,y=20,width=200,height=200))\nApplication(windows=[window1, window2], title=\"App\", frame=(width=430, height=300))\n\nbutton = Button(title=\"Hello\", frame=(width=80, height=30))\nput!(window1, button)\n\nlabel = Label(text=\"Range:\")\nslider1 = Slider(label=\"slider1\", range=1:10, value=5)\nslider2 = Slider(label=\"slider2\", range=1.0:10.0, value=2.0)\nput!(window2, label, slider1, slider2)\n\ndidClick(button) do event\n    @info :didClick event\nend\n\ndidClick(slider1) do event\n    @info :didClick (event, slider1.value)\nend\n\ndidClick(slider2) do event\n    @info :didClick (event, slider2.value)\nend","category":"page"},{"location":"#","page":"Home","title":"Home","text":"(Image: app.png)","category":"page"},{"location":"#Poptart.Drawings-1","page":"Home","title":"Poptart.Drawings","text":"","category":"section"},{"location":"#","page":"Home","title":"Home","text":"using Poptart.Desktop # Application Windows put!\nusing Poptart.Controls # Canvas\nusing Poptart.Drawings # Line Rect Circle Triangle Arc Pie Curve Polyline Polygon stroke fill\nusing Colors: RGBA\n\ncanvas = Canvas()\nwindow1 = Windows.Window(items=[canvas], title=\"Drawings\", frame=(x=0, y=0, width=550, height=400))\nApplication(windows=[window1], title=\"App\", frame=(width=550, height=400))\n\nstrokeColor = RGBA(0,0.7,0,1)\nfillColor   = RGBA(0.1, 0.7,0.8,0.9)\n\nline1 = Line(points=[(50, 100), (90, 140)], thickness=7.5, color=strokeColor)\nline2 = Line(points=[(60, 90), (100, 130)], thickness=7.5, color=strokeColor)\nline3 = Line(points=[(70, 80), (110, 120)], thickness=7.5, color=strokeColor)\n\nrect1 = Rect(rect=(160, 150, 50, 50), rounding=0, thickness=7.5, color=strokeColor)\nrect2 = Rect(rect=(160, 70, 50, 50), rounding=0, color=fillColor)\n\ncenter = (255, 95)\nradius = 25\ncircle1 = Circle(center=center .+ (0, 80), radius=radius, thickness=7.5, color=strokeColor)\ncircle2 = Circle(center=center, radius=radius, color=fillColor)\n\ntriangle1 = Triangle(points=[(320, 75+80), (300,116+80), (340,116+80)], thickness=7.5, color=strokeColor)\ntriangle2 = Triangle(points=[(320, 75), (300,116), (340,116)], color=fillColor)\n\narc1 = Arc(center=(380, 80+80), radius=37, angle=(min=0, max=deg2rad(120)), thickness=7.5, color=strokeColor)\n\npie1 = Pie(center=(450, 160), radius=37, angle=(min=0, max=deg2rad(120)), thickness=7.5, color=strokeColor)\npie2 = Pie(center=(450, 80), radius=37, angle=(min=0, max=deg2rad(120)), color=fillColor)\n\nm(x, y) = (x, y) .+ (-340, -20)\ncurve1 = Curve(startPoint=m(380,200), control1=m(405,270), control2=m(455,120), endPoint=m(480,200), thickness=7.5, color=strokeColor)\n\npolyline1 = Polyline(points=[(320-60, 75+150), (300-60,116+150), (340-60,116+150)], thickness=7.5, color=strokeColor)\n\npolygon1 = Polygon(points=[(320, 75+150), (300,116+150), (340,116+150)], thickness=7.5, color=strokeColor)\npolygon2 = Polygon(points=[(320, 75+220), (300,116+220), (340,116+220)], color=fillColor)\n\nput!(canvas,\n    stroke.((line1, line2, line3))...,\n    stroke(rect1), fill(rect2),\n    stroke(circle1), fill(circle2),\n    stroke(triangle1), fill(triangle2),\n    stroke(arc1),\n    stroke(pie1), fill(pie2),\n    stroke(curve1),\n    stroke(polyline1),\n    stroke(polygon1), fill(polygon2))","category":"page"},{"location":"#","page":"Home","title":"Home","text":"(Image: drawings.png)","category":"page"},{"location":"Drawings/#Poptart.Drawings-1","page":"Drawings","title":"Poptart.Drawings","text":"","category":"section"},{"location":"Drawings/#","page":"Drawings","title":"Drawings","text":"Drawings","category":"page"},{"location":"Drawings/#shapes-1","page":"Drawings","title":"shapes","text":"","category":"section"},{"location":"Drawings/#","page":"Drawings","title":"Drawings","text":"Line\nRect\nRectMultiColor\nCircle\nTriangle\nArc\nPie\nCurve\nPolyline\nPolygon\nTextBox","category":"page"},{"location":"Drawings/#Poptart.Drawings.Line","page":"Drawings","title":"Poptart.Drawings.Line","text":"Line(; points::Vector{<:Tuple}, thickness, color::RGBA)\n\n\n\n\n\n","category":"type"},{"location":"Drawings/#Poptart.Drawings.Rect","page":"Drawings","title":"Poptart.Drawings.Rect","text":"Rect(; rect, rounding, [thickness], color::RGBA)\n\n\n\n\n\n","category":"type"},{"location":"Drawings/#Poptart.Drawings.RectMultiColor","page":"Drawings","title":"Poptart.Drawings.RectMultiColor","text":"RectMultiColor(; rect, color_upper_left::RGBA, color_upper_right::RGBA, color_bottom_left::RGBA, color_bottom_right::RGBA)\n\n\n\n\n\n","category":"type"},{"location":"Drawings/#Poptart.Drawings.Circle","page":"Drawings","title":"Poptart.Drawings.Circle","text":"Circle(; center, radius, color::RGBA, [num_segments], [thickness])\n\n\n\n\n\n","category":"type"},{"location":"Drawings/#Poptart.Drawings.Triangle","page":"Drawings","title":"Poptart.Drawings.Triangle","text":"Triangle(; points::Vector{<:Tuple}, [thickness], color::RGBA)\n\n\n\n\n\n","category":"type"},{"location":"Drawings/#Poptart.Drawings.Arc","page":"Drawings","title":"Poptart.Drawings.Arc","text":"Arc(; center, radius, angle, [num_segments], [thickness], color::RGBA)\n\n\n\n\n\n","category":"type"},{"location":"Drawings/#Poptart.Drawings.Pie","page":"Drawings","title":"Poptart.Drawings.Pie","text":"Pie(; center, radius, angle, [num_segments], [thickness], color::RGBA)\n\n\n\n\n\n","category":"type"},{"location":"Drawings/#Poptart.Drawings.Curve","page":"Drawings","title":"Poptart.Drawings.Curve","text":"Curve(; startPoint, control1, control2, endPoint, thickness, color::RGBA)\n\n\n\n\n\n","category":"type"},{"location":"Drawings/#Poptart.Drawings.Polyline","page":"Drawings","title":"Poptart.Drawings.Polyline","text":"Polyline(; points::Vector{<:Tuple}, thickness, color::RGBA)\n\n\n\n\n\n","category":"type"},{"location":"Drawings/#Poptart.Drawings.Polygon","page":"Drawings","title":"Poptart.Drawings.Polygon","text":"Polygon(; points::Vector{<:Tuple}, [thickness], color::RGBA)\n\n\n\n\n\n","category":"type"},{"location":"Drawings/#Poptart.Drawings.TextBox","page":"Drawings","title":"Poptart.Drawings.TextBox","text":"TextBox(; text::String, rect, color::RGBA)\n\n\n\n\n\n","category":"type"},{"location":"Drawings/#paints-1","page":"Drawings","title":"paints","text":"","category":"section"},{"location":"Drawings/#","page":"Drawings","title":"Drawings","text":"Drawings.stroke(element::E) where {E <: DrawingElement}\nDrawings.fill(element::E) where {E <: DrawingElement}","category":"page"},{"location":"Drawings/#Poptart.Drawings.stroke-Union{Tuple{E}, Tuple{E}} where E<:DrawingElement","page":"Drawings","title":"Poptart.Drawings.stroke","text":"Drawings.stroke(element::E) where {E <: DrawingElement}\n\n\n\n\n\n","category":"method"},{"location":"Drawings/#Base.fill-Union{Tuple{E}, Tuple{E}} where E<:DrawingElement","page":"Drawings","title":"Base.fill","text":"Drawings.fill(element::E) where {E <: DrawingElement}\n\n\n\n\n\n","category":"method"},{"location":"Drawings/#","page":"Drawings","title":"Drawings","text":"stroke ∘ fill","category":"page"},{"location":"Animations/#Poptart.Animations-1","page":"Animations","title":"Poptart.Animations","text":"","category":"section"},{"location":"Animations/#","page":"Animations","title":"Animations","text":"Animator\nanimate\nlerp\nrepeat","category":"page"},{"location":"Animations/#Poptart.Animations.Animator","page":"Animations","title":"Poptart.Animations.Animator","text":"struct Animator\n    id::UInt64\n    task::Function\n    repeatable::Real\nend\n\n\n\n\n\n","category":"type"},{"location":"Animations/#Poptart.Animations.animate","page":"Animations","title":"Poptart.Animations.animate","text":"animate(f; timing::CubicBezier=Linear, duration::Union{<:Real,<:Period}=Second(1))::Animator\n\n\n\n\n\nanimate(animator::Animator)::Animator\n\n\n\n\n\n","category":"function"},{"location":"Animations/#Poptart.Animations.lerp","page":"Animations","title":"Poptart.Animations.lerp","text":"lerp(a, b, dt)\n\n\n\n\n\n","category":"function"},{"location":"Animations/#Base.repeat","page":"Animations","title":"Base.repeat","text":"repeat(animator::Animator, r::Real)::Animator\n\n\n\n\n\n","category":"function"},{"location":"Animations/#","page":"Animations","title":"Animations","text":"CubicBezier\nEase\nLinear\nEaseIn\nEaseOut\nEaseInOut","category":"page"},{"location":"Animations/#Poptart.Animations.CubicBezier","page":"Animations","title":"Poptart.Animations.CubicBezier","text":"struct CubicBezier <: TimingFunction\n    p1::Float64\n    p2::Float64\n    p3::Float64\n    p4::Float64\nend\n\n\n\n\n\n","category":"type"},{"location":"Animations/#Poptart.Animations.Ease","page":"Animations","title":"Poptart.Animations.Ease","text":"const Ease = CubicBezier(0.25, 0.1, 0.25, 1.0)\n\n\n\n\n\n","category":"function"},{"location":"Animations/#Poptart.Animations.Linear","page":"Animations","title":"Poptart.Animations.Linear","text":"const Linear = CubicBezier(0.0, 0.0, 1.0, 1.0)\n\n\n\n\n\n","category":"function"},{"location":"Animations/#Poptart.Animations.EaseIn","page":"Animations","title":"Poptart.Animations.EaseIn","text":"const EaseIn = CubicBezier(0.42, 0, 1.0, 1.0)\n\n\n\n\n\n","category":"function"},{"location":"Animations/#Poptart.Animations.EaseOut","page":"Animations","title":"Poptart.Animations.EaseOut","text":"const EaseOut = CubicBezier(0, 0, 0.58, 1.0)\n\n\n\n\n\n","category":"function"},{"location":"Animations/#Poptart.Animations.EaseInOut","page":"Animations","title":"Poptart.Animations.EaseInOut","text":"const EaseInOut = CubicBezier(0.42, 0, 0.58, 1.0)\n\n\n\n\n\n","category":"function"},{"location":"Desktop/#Poptart.Desktop-1","page":"Desktop","title":"Poptart.Desktop","text":"","category":"section"},{"location":"Desktop/#","page":"Desktop","title":"Desktop","text":"Desktop","category":"page"},{"location":"Desktop/#Desktop.Application-1","page":"Desktop","title":"Desktop.Application","text":"","category":"section"},{"location":"Desktop/#","page":"Desktop","title":"Desktop","text":"Application\npause(app::A) where {A <: UIApplication}\nresume(app::A) where {A <: UIApplication}\nDesktop.put!(app::A, windows::UIWindow...) where {A <: UIApplication}\nDesktop.remove!(app::A, windows::UIWindow...) where {A <: UIApplication}\nempty!(app::A) where {A <: UIApplication}","category":"page"},{"location":"Desktop/#Poptart.Desktop.Application","page":"Desktop","title":"Poptart.Desktop.Application","text":"Application(; title::String=\"App\",\n              frame::NamedTuple{(:width,:height)}=(width=400, height=300),\n              windows=[Windows.Window(title=\"Title\", frame=(x=0,y=0,frame...))],\n              bgcolor=RGBA(0.10, 0.18, 0.24, 1),\n              closenotify=Condition())\n\n\n\n\n\n","category":"type"},{"location":"Desktop/#Poptart.Desktop.pause-Union{Tuple{A}, Tuple{A}} where A<:UIApplication","page":"Desktop","title":"Poptart.Desktop.pause","text":"pause(app::A) where {A <: UIApplication}\n\n\n\n\n\n","category":"method"},{"location":"Desktop/#Poptart.Desktop.resume-Union{Tuple{A}, Tuple{A}} where A<:UIApplication","page":"Desktop","title":"Poptart.Desktop.resume","text":"resume(app::A) where {A <: UIApplication}\n\n\n\n\n\n","category":"method"},{"location":"Desktop/#Base.put!-Union{Tuple{A}, Tuple{A,Vararg{UIWindow,N} where N}} where A<:UIApplication","page":"Desktop","title":"Base.put!","text":"Desktop.put!(app::A, windows::UIWindow...) where {A <: UIApplication}\n\n\n\n\n\n","category":"method"},{"location":"Desktop/#Poptart.Interfaces.remove!-Union{Tuple{A}, Tuple{A,Vararg{UIWindow,N} where N}} where A<:UIApplication","page":"Desktop","title":"Poptart.Interfaces.remove!","text":"Desktop.remove!(app::A, windows::UIWindow...) where {A <: UIApplication}\n\n\n\n\n\n","category":"method"},{"location":"Desktop/#Base.empty!-Union{Tuple{A}, Tuple{A}} where A<:UIApplication","page":"Desktop","title":"Base.empty!","text":"empty!(app::A) where {A <: UIApplication}\n\n\n\n\n\n","category":"method"},{"location":"Desktop/#Desktop.Windows-1","page":"Desktop","title":"Desktop.Windows","text":"","category":"section"},{"location":"Desktop/#","page":"Desktop","title":"Desktop","text":"Windows.Window\nWindows.put!(window::W, controls::UIControl...) where {W <: UIWindow}\nWindows.remove!(window::W, controls::UIControl...) where {W <: UIWindow}\nempty!(window::W) where {W <: UIWindow}","category":"page"},{"location":"Desktop/#Poptart.Desktop.Windows.Window","page":"Desktop","title":"Poptart.Desktop.Windows.Window","text":"Window(; items::Vector{UIControl} = UIControl[], title::String=\"Title\", frame::NamedTuple{(:x,:y,:width,:height)}, name::Union{Nothing,String}=nothing, flags=CImGui.ImGuiWindowFlags(0))\n\n\n\n\n\n","category":"type"},{"location":"Desktop/#Base.put!-Union{Tuple{W}, Tuple{W,Vararg{UIControl,N} where N}} where W<:UIWindow","page":"Desktop","title":"Base.put!","text":"Windows.put!(window::W, controls::UIControl...) where {W <: UIWindow}\n\n\n\n\n\n","category":"method"},{"location":"Desktop/#Poptart.Interfaces.remove!-Union{Tuple{W}, Tuple{W,Vararg{UIControl,N} where N}} where W<:UIWindow","page":"Desktop","title":"Poptart.Interfaces.remove!","text":"Windows.remove!(window::W, controls::UIControl...) where {W <: UIWindow}\n\n\n\n\n\n","category":"method"},{"location":"Desktop/#Base.empty!-Union{Tuple{W}, Tuple{W}} where W<:UIWindow","page":"Desktop","title":"Base.empty!","text":"empty!(window::W) where {W <: UIWindow}\n\n\n\n\n\n","category":"method"}]
}
