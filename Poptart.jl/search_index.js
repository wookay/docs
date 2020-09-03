var documenterSearchIndex = {"docs":
[{"location":"Drawings/#Poptart.Drawings","page":"Drawings","title":"Poptart.Drawings","text":"","category":"section"},{"location":"Drawings/","page":"Drawings","title":"Drawings","text":"Drawings","category":"page"},{"location":"Drawings/#shapes","page":"Drawings","title":"shapes","text":"","category":"section"},{"location":"Drawings/","page":"Drawings","title":"Drawings","text":"Line\nRect\nRectMultiColor\nCircle\nQuad\nTriangle\nArc\nPie\nCurve\nPolyline\nPolygon\nTextBox\nImageBox","category":"page"},{"location":"Drawings/#Poptart.Drawings.Line","page":"Drawings","title":"Poptart.Drawings.Line","text":"Line(; points::Vector{<:NTuple{2}}, [thickness=3], [color::RGBA])\n\n\n\n\n\n","category":"type"},{"location":"Drawings/#Poptart.Drawings.Rect","page":"Drawings","title":"Poptart.Drawings.Rect","text":"Rect(; rect::NTuple{4}, [rounding], [thickness=3], [color::RGBA])\n\n\n\n\n\n","category":"type"},{"location":"Drawings/#Poptart.Drawings.RectMultiColor","page":"Drawings","title":"Poptart.Drawings.RectMultiColor","text":"RectMultiColor(; rect::NTuple{4}, color_upper_left::RGBA, color_upper_right::RGBA, color_bottom_left::RGBA, color_bottom_right::RGBA)\n\n\n\n\n\n","category":"type"},{"location":"Drawings/#Poptart.Drawings.Circle","page":"Drawings","title":"Poptart.Drawings.Circle","text":"Circle(; center::NTuple{2}, [radius=30], [num_segments=32], [thickness=3], [color::RGBA])\n\n\n\n\n\n","category":"type"},{"location":"Drawings/#Poptart.Drawings.Quad","page":"Drawings","title":"Poptart.Drawings.Quad","text":"Quad(; points::Vector{<:NTuple{2}}, [thickness=3], [color::RGBA])\n\n\n\n\n\n","category":"type"},{"location":"Drawings/#Poptart.Drawings.Triangle","page":"Drawings","title":"Poptart.Drawings.Triangle","text":"Triangle(; points::Vector{<:NTuple{2}}, [thickness=3], [color::RGBA])\n\n\n\n\n\n","category":"type"},{"location":"Drawings/#Poptart.Drawings.Arc","page":"Drawings","title":"Poptart.Drawings.Arc","text":"Arc(; center::NTuple{2}, angle, [radius=30], [num_segments=32], [thickness=3], [color::RGBA])\n\n\n\n\n\n","category":"type"},{"location":"Drawings/#Poptart.Drawings.Pie","page":"Drawings","title":"Poptart.Drawings.Pie","text":"Pie(; center::NTuple{2}, angle, [radius=30], [num_segments=32], [thickness=3], [color::RGBA])\n\n\n\n\n\n","category":"type"},{"location":"Drawings/#Poptart.Drawings.Curve","page":"Drawings","title":"Poptart.Drawings.Curve","text":"Curve(; startPoint::NTuple{2}, control1::NTuple{2}, control2::NTuple{2}, endPoint::NTuple{2}, [thickness=3], [color::RGBA])\n\n\n\n\n\n","category":"type"},{"location":"Drawings/#Poptart.Drawings.Polyline","page":"Drawings","title":"Poptart.Drawings.Polyline","text":"Polyline(; points::Vector{<:NTuple{2}}, [thickness=3], [color::RGBA])\n\n\n\n\n\n","category":"type"},{"location":"Drawings/#Poptart.Drawings.Polygon","page":"Drawings","title":"Poptart.Drawings.Polygon","text":"Polygon(; points::Vector{<:NTuple{2}}, [thickness=3], [color::RGBA])\n\n\n\n\n\n","category":"type"},{"location":"Drawings/#Poptart.Drawings.TextBox","page":"Drawings","title":"Poptart.Drawings.TextBox","text":"TextBox(; text::String, rect::NTuple{4}, [font_size], [color::RGBA])\n\n\n\n\n\n","category":"type"},{"location":"Drawings/#Poptart.Drawings.ImageBox","page":"Drawings","title":"Poptart.Drawings.ImageBox","text":"ImageBox(; image::Union{Nothing, GenericImage}, [rect::Union{Nothing, NTuple{4}}])\n\n\n\n\n\n","category":"type"},{"location":"Drawings/#paints","page":"Drawings","title":"paints","text":"","category":"section"},{"location":"Drawings/","page":"Drawings","title":"Drawings","text":"Drawings.stroke(element::Drawings.DrawingElement)\nDrawings.fill(element::Drawings.DrawingElement)","category":"page"},{"location":"Drawings/#Poptart.Drawings.stroke-Tuple{Poptart.Drawings.DrawingElement}","page":"Drawings","title":"Poptart.Drawings.stroke","text":"Drawings.stroke(element::DrawingElement)\n\n\n\n\n\n","category":"method"},{"location":"Drawings/#Base.fill-Tuple{Poptart.Drawings.DrawingElement}","page":"Drawings","title":"Base.fill","text":"Drawings.fill(element::DrawingElement)\n\n\n\n\n\n","category":"method"},{"location":"Drawings/","page":"Drawings","title":"Drawings","text":"stroke ∘ fill","category":"page"},{"location":"Drawings/#transforms","page":"Drawings","title":"transforms","text":"","category":"section"},{"location":"Drawings/","page":"Drawings","title":"Drawings","text":"translate\nscale\ntranslate!\nscale!","category":"page"},{"location":"Drawings/#Poptart.Drawings.translate","page":"Drawings","title":"Poptart.Drawings.translate","text":"translate(tup::Tuple{Real,Real}, xy::Tuple{Real,Real})\n\n\n\n\n\ntranslate(tup::Tuple{Real,Real}, x::Real)\n\n\n\n\n\ntranslate(tup::Tuple{Real,Real,Real,Real}, xy::Tuple{Real,Real})\n\n\n\n\n\ntranslate(tup::Tuple{Real,Real,Real,Real}, x::Real)\n\n\n\n\n\n","category":"function"},{"location":"Drawings/#Poptart.Drawings.scale","page":"Drawings","title":"Poptart.Drawings.scale","text":"scale(tup::Tuple{Real,Real}, xy::Tuple{Real,Real})\n\n\n\n\n\nscale(tup::Tuple{Real,Real}, x::Real)\n\n\n\n\n\nscale(tup::Tuple{Real,Real,Real,Real}, xy::Tuple{Real,Real})\n\n\n\n\n\nscale(tup::Tuple{Real,Real,Real,Real}, x::Real)\n\n\n\n\n\n","category":"function"},{"location":"Drawings/#Poptart.Drawings.translate!","page":"Drawings","title":"Poptart.Drawings.translate!","text":"translate!(element::Union{Line, Triangle, Quad, Polyline, Polygon}, xy::Tuple{Real,Real})\n\n\n\n\n\ntranslate!(element::Union{Circle, Arc, Pie}, xy::Tuple{Real,Real})\n\n\n\n\n\ntranslate!(element::Curve, xy::Tuple{Real,Real})\n\n\n\n\n\ntranslate!(element::Union{Rect, RectMultiColor, TextBox}, xy::Tuple{Real,Real})\n\n\n\n\n\ntranslate!(element::ImageBox, xy::Tuple{Real,Real})\n\n\n\n\n\n","category":"function"},{"location":"Drawings/#Poptart.Drawings.scale!","page":"Drawings","title":"Poptart.Drawings.scale!","text":"scale!(element::Union{Line, Triangle, Quad, Polyline, Polygon}, xy::Tuple{Real,Real})\n\n\n\n\n\nscale!(element::Curve, xy::Tuple{Real,Real})\n\n\n\n\n\nscale!(element::Union{Rect, RectMultiColor, TextBox}, xy::Tuple{Real,Real})\n\n\n\n\n\nscale!(element::ImageBox, xy::Tuple{Real,Real})\n\n\n\n\n\nscale!(element::Union{Line, Rect, RectMultiColor, Triangle, Quad, Polyline, Polygon, Curve, Rect, RectMultiColor, TextBox, ImageBox}, x::Real)\n\n\n\n\n\nscale!(element::Union{Circle, Arc, Pie}, scale_center::Tuple{Real, Real}, scale_radius::Real)\n\n\n\n\n\n","category":"function"},{"location":"Desktop/#Poptart.Desktop","page":"Desktop","title":"Poptart.Desktop","text":"","category":"section"},{"location":"Desktop/","page":"Desktop","title":"Desktop","text":"Desktop","category":"page"},{"location":"Desktop/#application-and-window","page":"Desktop","title":"application and window","text":"","category":"section"},{"location":"Desktop/","page":"Desktop","title":"Desktop","text":"Application\nresume(app::UIApplication)\npause(::UIApplication)\nWindow","category":"page"},{"location":"Desktop/#Poptart.Desktop.Application","page":"Desktop","title":"Poptart.Desktop.Application","text":"Application(; windows = UIWindow[Window(title=\"Title\", frame=(x=0,y=0,frame...))],\n              closenotify = Condition(),\n              title::String=\"App\",\n              frame::NamedTuple{(:width,:height)} = (width=400, height=300),\n              bgcolor = RGBA(0.10, 0.18, 0.24, 1))\n\n\n\n\n\n","category":"type"},{"location":"Desktop/#Poptart.Desktop.resume-Tuple{UIApplication}","page":"Desktop","title":"Poptart.Desktop.resume","text":"resume(app::UIApplication)\n\n\n\n\n\n","category":"method"},{"location":"Desktop/#Poptart.Desktop.pause-Tuple{UIApplication}","page":"Desktop","title":"Poptart.Desktop.pause","text":"pause(::UIApplication)\n\n\n\n\n\n","category":"method"},{"location":"Desktop/#Poptart.Desktop.Window","page":"Desktop","title":"Poptart.Desktop.Window","text":"Window(; title::String=\"Title\",\n         frame::Union{NamedTuple{(:width,:height)}, NamedTuple{(:x,:y,:width,:height)}} = (width=400, height=300),\n         items::Union{Vector{Any},Vector{<:UIControl}} = UIControl[],\n         name::Union{Nothing,String}=nothing,\n         show_window_closing_widget::Bool=true,\n         flags=CImGui.ImGuiWindowFlags(0))\n\n\n\n\n\n","category":"type"},{"location":"Desktop/#controls","page":"Desktop","title":"controls","text":"","category":"section"},{"location":"Desktop/","page":"Desktop","title":"Desktop","text":"Label\nButton\nSlider\nCanvas\nInputText\nCheckbox","category":"page"},{"location":"Desktop/#Poptart.Desktop.Label","page":"Desktop","title":"Poptart.Desktop.Label","text":"Label(; text::String)\n\n\n\n\n\n","category":"type"},{"location":"Desktop/#Poptart.Desktop.Button","page":"Desktop","title":"Poptart.Desktop.Button","text":"Button(; title::String = \"Button\", callback::Union{Nothing,Function} = nothing)\n\n\n\n\n\n","category":"type"},{"location":"Desktop/#Poptart.Desktop.Slider","page":"Desktop","title":"Poptart.Desktop.Slider","text":"Slider(; label::String = \"\", range::Union{<:AbstractRange, Tuple, <:NamedTuple}, value)\n\n\n\n\n\n","category":"type"},{"location":"Desktop/#Poptart.Desktop.Canvas","page":"Desktop","title":"Poptart.Desktop.Canvas","text":"Canvas(; items::Vector{Drawing}} = Drawing[])\n\n\n\n\n\n","category":"type"},{"location":"Desktop/#Poptart.Desktop.InputText","page":"Desktop","title":"Poptart.Desktop.InputText","text":"InputText(; label::String = \"\", buf::String = \"\", buf_size::Int = 32)\n\n\n\n\n\n","category":"type"},{"location":"Desktop/#Poptart.Desktop.Checkbox","page":"Desktop","title":"Poptart.Desktop.Checkbox","text":"Checkbox(; label::String = \"\", value::Bool = false)\n\n\n\n\n\n","category":"type"},{"location":"Desktop/#layouts","page":"Desktop","title":"layouts","text":"","category":"section"},{"location":"Desktop/","page":"Desktop","title":"Desktop","text":"Separator\nSameLine\nNewLine\nSpacing\nGroup","category":"page"},{"location":"Desktop/#Poptart.Desktop.Separator","page":"Desktop","title":"Poptart.Desktop.Separator","text":"Separator\n\n\n\n\n\n","category":"type"},{"location":"Desktop/#Poptart.Desktop.SameLine","page":"Desktop","title":"Poptart.Desktop.SameLine","text":"SameLine\n\n\n\n\n\n","category":"type"},{"location":"Desktop/#Poptart.Desktop.NewLine","page":"Desktop","title":"Poptart.Desktop.NewLine","text":"NewLine\n\n\n\n\n\n","category":"type"},{"location":"Desktop/#Poptart.Desktop.Spacing","page":"Desktop","title":"Poptart.Desktop.Spacing","text":"Spacing\n\n\n\n\n\n","category":"type"},{"location":"Desktop/#Poptart.Desktop.Group","page":"Desktop","title":"Poptart.Desktop.Group","text":"Group(; items::Vector{Union{<:LayoutElement, <:UIControl}})\n\n\n\n\n\n","category":"type"},{"location":"Desktop/#plots","page":"Desktop","title":"plots","text":"","category":"section"},{"location":"Desktop/","page":"Desktop","title":"Desktop","text":"ScatterPlot\nSpy\nBarPlot\nLinePlot\nMultiLinePlot\nHistogram","category":"page"},{"location":"Desktop/#Poptart.Desktop.ScatterPlot","page":"Desktop","title":"Poptart.Desktop.ScatterPlot","text":"ScatterPlot(; x::AbstractVector, y::AbstractVector, [label::String], [scale::NamedTuple{(:x, :y)}], [frame])\n\n\n\n\n\n","category":"type"},{"location":"Desktop/#Poptart.Desktop.Spy","page":"Desktop","title":"Poptart.Desktop.Spy","text":"Spy(; A::AbstractMatrix, [label::String], [frame])\n\n\n\n\n\n","category":"type"},{"location":"Desktop/#Poptart.Desktop.BarPlot","page":"Desktop","title":"Poptart.Desktop.BarPlot","text":"BarPlot(; values::Vector{Number}, [captions::Vector{String}], [label::String], [scale::NamedTuple{(:min_x,:max_x)}], [frame])\n\n\n\n\n\n","category":"type"},{"location":"Desktop/#Poptart.Desktop.LinePlot","page":"Desktop","title":"Poptart.Desktop.LinePlot","text":"LinePlot(; values::AbstractVector, [label::String], [scale::NamedTuple{(:min, :max)}], [color::RGBA], [frame])\n\n\n\n\n\n","category":"type"},{"location":"Desktop/#Poptart.Desktop.MultiLinePlot","page":"Desktop","title":"Poptart.Desktop.MultiLinePlot","text":"MultiLinePlot(; items::Vector{LinePlot}, [label::String], [scale::NamedTuple{(:min, :max)}], [frame])\n\n\n\n\n\n","category":"type"},{"location":"Desktop/#Poptart.Desktop.Histogram","page":"Desktop","title":"Poptart.Desktop.Histogram","text":"Histogram(; values::AbstractVector, [label::String], [scale::NamedTuple{(:min, :max)}], [frame])\n\n\n\n\n\n","category":"type"},{"location":"Desktop/#menus","page":"Desktop","title":"menus","text":"","category":"section"},{"location":"Desktop/","page":"Desktop","title":"Desktop","text":"MenuBar\nMenu\nMenuItem","category":"page"},{"location":"Desktop/#Poptart.Desktop.MenuBar","page":"Desktop","title":"Poptart.Desktop.MenuBar","text":"MenuBar(; menus::Vector)\n\n\n\n\n\n","category":"type"},{"location":"Desktop/#Poptart.Desktop.Menu","page":"Desktop","title":"Poptart.Desktop.Menu","text":"Menu(; title::String, items::Vector)\n\n\n\n\n\n","category":"type"},{"location":"Desktop/#Poptart.Desktop.MenuItem","page":"Desktop","title":"Poptart.Desktop.MenuItem","text":"MenuItem(; title::String, [shortcut], [selected], [enabled])\n\n\n\n\n\n","category":"type"},{"location":"Desktop/#popups","page":"Desktop","title":"popups","text":"","category":"section"},{"location":"Desktop/","page":"Desktop","title":"Desktop","text":"Popup\nOpenPopup","category":"page"},{"location":"Desktop/#Poptart.Desktop.Popup","page":"Desktop","title":"Poptart.Desktop.Popup","text":"Popup(; label::String = \"\", items::Vector{<:UIControl})\n\n!!! Note: You must use a sync Button (`Button(async=false)`) to open a Popup.\n\n\n\n\n\n","category":"type"},{"location":"Desktop/#Poptart.Desktop.OpenPopup","page":"Desktop","title":"Poptart.Desktop.OpenPopup","text":"OpenPopup(popup::Popup)\n\n\n\n\n\n","category":"function"},{"location":"Desktop/#events","page":"Desktop","title":"events","text":"","category":"section"},{"location":"Desktop/","page":"Desktop","title":"Desktop","text":"Mouse.leftClick\ndidClick","category":"page"},{"location":"Desktop/#Poptart.Desktop.Mouse.leftClick","page":"Desktop","title":"Poptart.Desktop.Mouse.leftClick","text":"leftClick(item)\n\n\n\n\n\n","category":"function"},{"location":"Desktop/#Poptart.Desktop.didClick","page":"Desktop","title":"Poptart.Desktop.didClick","text":"didClick(f::Union{Nothing,Function}, widget::UIControl)\n\n\n\n\n\n","category":"function"},{"location":"Desktop/#custom","page":"Desktop","title":"custom","text":"","category":"section"},{"location":"Desktop/","page":"Desktop","title":"Desktop","text":"Desktop.exit_on_esc()\nDesktop.custom_fonts(::Application)","category":"page"},{"location":"Desktop/#Poptart.Desktop.exit_on_esc-Tuple{}","page":"Desktop","title":"Poptart.Desktop.exit_on_esc","text":"Desktop.exit_on_esc()\n\n\n\n\n\n","category":"method"},{"location":"Desktop/#Poptart.Desktop.custom_fonts-Tuple{Application}","page":"Desktop","title":"Poptart.Desktop.custom_fonts","text":"Desktop.custom_fonts(::Application)\n\n\n\n\n\n","category":"method"},{"location":"#Poptart.jl","page":"Home","title":"Poptart.jl 🏂","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"https://github.com/wookay/Poptart.jl","category":"page"},{"location":"","page":"Home","title":"Home","text":"GUI programming in Julia based on CImGui.jl","category":"page"},{"location":"","page":"Home","title":"Home","text":"☕️   You can make a donation to support this project.","category":"page"},{"location":"#Poptart.Desktop","page":"Home","title":"Poptart.Desktop","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"Button, Slider","category":"page"},{"location":"","page":"Home","title":"Home","text":"using Poptart.Desktop # Application Window Button Label Slider didClick\n\nwindow1 = Window(title=\"A\", frame=(x=10,y=20,width=200,height=200))\nwindow2 = Window(title=\"B\", frame=(x=220,y=20,width=200,height=200))\napp = Application(windows=[window1, window2], title=\"App\", frame=(width=430, height=300))\n\nbutton = Button(title=\"Hello\")\npush!(window1.items, button)\n\nlabel = Label(text=\"Range:\")\nslider1 = Slider(label=\"slider1\", range=1:10, value=5)\nslider2 = Slider(label=\"slider2\", range=1.0:10.0, value=2.0)\npush!(window2.items, label, slider1, slider2)\n\ndidClick(button) do event\n    @info :didClick event\nend\n\ndidClick(slider1) do event\n    @info :didClick (event, slider1.value)\nend\n\ndidClick(slider2) do event\n    @info :didClick (event, slider2.value)\nend\n\nDesktop.exit_on_esc() = true\nBase.JLOptions().isinteractive==0 && wait(app.closenotify)","category":"page"},{"location":"","page":"Home","title":"Home","text":"(Image: slider.png)","category":"page"},{"location":"","page":"Home","title":"Home","text":"InputText","category":"page"},{"location":"","page":"Home","title":"Home","text":"using Poptart.Desktop # Application Window InputText Button didClick\n\nwindow1 = Window()\napp = Application(windows = [window1])\n\ninput1 = InputText(label=\"Subject\", buf=\"\")\nbutton1 = Button(title = \"submit\")\npush!(window1.items, input1, button1)\n\ndidClick(button1) do event\n    @info :didClick (event, input1.buf)\nend\n\nDesktop.exit_on_esc() = true\nBase.JLOptions().isinteractive==0 && wait(app.closenotify)","category":"page"},{"location":"","page":"Home","title":"Home","text":"(Image: inputtext.png)","category":"page"},{"location":"","page":"Home","title":"Home","text":"see more examples: PoptartExamples.jl","category":"page"}]
}
