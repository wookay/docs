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
    "text": "using Poptart.Desktop # Application Windows put!\nusing Poptart.Controls # Mouse Button Label Slider didClick\n\nwindow1 = Windows.Window(title=\"A\", frame=(x=10,y=20,width=200,height=200))\nwindow2 = Windows.Window(title=\"B\", frame=(x=220,y=20,width=200,height=200))\nwindows = [window1, window2]\nApplication(windows=windows, title=\"App\", frame=(width=430, height=300))\n\nbutton = Button(title=\"Hello\", frame=(width=80, height=30))\nput!(window1, button)\n\nlabel = Label(text=\"Range:\")\nslider1 = Slider(range=1:10, value=Ref{Cint}(5))\nslider2 = Slider(range=1.0:10.0, value=Ref{Cfloat}(2.0))\nput!(window2, label, slider1, slider2)\n\ndidClick(button) do event\n    @info :didClick event\nend\n\ndidClick(slider1) do event\n    @info :didClick (event, slider1.value[])\nend<img src=\"https://wookay.github.io/docs/Poptart.jl/assets/poptart/app.png\" width=\"500\" alt=\"app.png\" />"
},

{
    "location": "#Poptart.Drawings-1",
    "page": "Home",
    "title": "Poptart.Drawings",
    "category": "section",
    "text": "using Poptart.Desktop # Application Windows put!\nusing Poptart.Controls # Canvas\nusing Poptart.Drawings # Line Rect Circle Triangle stroke fill\nusing Nuklear.LibNuklear: NK_WINDOW_TITLE\nusing Colors: RGBA\n\nwindow1 = Windows.Window(title=\"A\", frame=(x=0, y=0, width=500, height=400), flags=NK_WINDOW_TITLE)\nwindows = [window1]\napp = Application(windows=windows, title=\"App\", frame=(width=500, height=400))\n\ncanvas = Canvas()\nput!(window1, canvas)\n\nstrokeColor = RGBA(0,0.7,0,1)\nfillColor   = RGBA(0.1, 0.7,0.8,0.9)\n\nline1 = Line(points=[(50, 100), (90, 140)], thickness=7.5, color=strokeColor)\nline2 = Line(points=[(60, 90), (100, 130)], thickness=7.5, color=strokeColor)\nline3 = Line(points=[(70, 80), (110, 120)], thickness=7.5, color=strokeColor)\n\nrect2 = Rect(rect=(160, 70, 50, 50), rounding=0, color=fillColor)\nrect1 = Rect(rect=(160, 150, 50, 50), rounding=0, thickness=7.5, color=strokeColor)\n\ncircle2 = Circle(rect=(160+70, 70, 51, 51), color=fillColor)\ncircle1 = Circle(rect=(160+70, 150, 51, 51), thickness=7.5, color=strokeColor)\n\ntriangle2 = Triangle(points=[(320, 75), (300,116), (340,116)], color=fillColor)\ntriangle1 = Triangle(points=[(320, 75+80), (300,116+80), (340,116+80)], thickness=7.5, color=strokeColor)\n\narc2 = Arc(center=(380, 80), radius=37, angle=(min=0, max=deg2rad(120)), color=fillColor)\narc1 = Arc(center=(380, 80+80), radius=37, angle=(min=0, max=deg2rad(120)), thickness=7.5, color=strokeColor)\n\nm(x, y) = (x, y) .+ (-340, -20)\ncurve1 = Curve(startPoint=m(380,200), control1=m(405,270), control2=m(455,120), endPoint=m(480,200), thickness=7.5, color=strokeColor)\n\npolyline1 = Polyline(points=[(320-60, 75+150), (300-60,116+150), (340-60,116+150)], thickness=7.5, color=strokeColor)\n\npolygon1 = Polygon(points=[(320, 75+150), (300,116+150), (340,116+150)], thickness=7.5, color=strokeColor)\npolygon2 = Polygon(points=[(320, 75+220), (300,116+220), (340,116+220)], color=fillColor)\n\nput!(canvas,\n    stroke.((line1, line2, line3))...,\n    stroke(rect1), fill(rect2),\n    stroke(circle1), fill(circle2),\n    stroke(triangle1), fill(triangle2),\n    stroke(arc1), fill(arc2),\n    stroke(curve1),\n    stroke(polyline1),\n    stroke(polygon1), fill(polygon2))<img src=\"https://wookay.github.io/docs/Poptart.jl/assets/poptart/drawings.png\" width=\"500\" alt=\"drawings.png\" />"
},

{
    "location": "#Requirements-1",
    "page": "Home",
    "title": "Requirements",
    "category": "section",
    "text": "julia> type ] key(v1.0) pkg> add https://github.com/wookay/Poptart.jl"
},

]}
