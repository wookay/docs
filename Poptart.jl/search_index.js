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
    "text": "GUI programming in Julia based on Nuklear.jlusing Poptart.Desktop # Application Windows put!\nusing Poptart.Controls # Mouse Button Label Slider didClick\n\nwindow1 = Windows.Window(title=\"A\", frame=(x=10,y=20,width=200,height=200))\nwindow2 = Windows.Window(title=\"B\", frame=(x=220,y=20,width=200,height=200))\nwindows = [window1, window2]\napp = Application(windows=windows, title=\"App\", frame=(width=430, height=300))\n\nbutton = Button(title=\"Hello\", frame=(width=80, height=30))\nput!(window1, button)\n\nlabel = Label(text=\"Range:\")\nslider1 = Slider(range=1:10, value=Ref{Cint}(5))\nslider2 = Slider(range=1.0:10.0, value=Ref{Cfloat}(2.0))\nput!(window2, label, slider1, slider2)\n\ndidClick(button) do event\n    @info :didClick event\nend\n\ndidClick(slider1) do event\n    @info :didClick (event, slider1.value)\nend<img src=\"https://wookay.github.io/docs/Poptart.jl/assets/poptart/app.png\" width=\"500\" alt=\"app.png\" />"
},

{
    "location": "#Requirements-1",
    "page": "Home",
    "title": "Requirements",
    "category": "section",
    "text": "julia> type ] key(v1.0) pkg> add https://github.com/wookay/Poptart.jl"
},

]}
