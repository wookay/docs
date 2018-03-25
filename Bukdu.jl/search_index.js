var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Home",
    "title": "Home",
    "category": "page",
    "text": ""
},

{
    "location": "#Bukdu.jl-1",
    "page": "Home",
    "title": "Bukdu.jl",
    "category": "section",
    "text": "Bukdu 🌌  is a web development framework for Julia.It\'s influenced by Phoenix framework.using Bukdu\n\nstruct WelcomeController <: ApplicationController\n    conn::Conn\nend\n\nindex(::WelcomeController) = \"hello world\"\n\nRouter() do\n    get(\"/\", WelcomeController, index)\nend\n\nBukdu.start(8080)"
},

{
    "location": "render/#",
    "page": "Render",
    "title": "Render",
    "category": "page",
    "text": ""
},

{
    "location": "render/#Bukdu.render",
    "page": "Render",
    "title": "Bukdu.render",
    "category": "function",
    "text": "render(::Type{Text}, data)::Render\n\n\n\n\n\nrender(::Type{HTML}, data)::Render\n\n\n\n\n\nrender(::Type{JSON}, data)::Render\n\n\n\n\n\nrender(::Type{JavaScript}, data)::Render\n\n\n\n\n\n"
},

{
    "location": "render/#Render-1",
    "page": "Render",
    "title": "Render",
    "category": "section",
    "text": "Bukdu.render"
},

{
    "location": "HTML5/Form/#",
    "page": "HTML5.Form",
    "title": "HTML5.Form",
    "category": "page",
    "text": ""
},

{
    "location": "HTML5/Form/#Bukdu.HTML5.Form.change",
    "page": "HTML5.Form",
    "title": "Bukdu.HTML5.Form.change",
    "category": "function",
    "text": "change\n\n\n\n\n\n"
},

{
    "location": "HTML5/Form/#Bukdu.HTML5.Form-1",
    "page": "HTML5.Form",
    "title": "Bukdu.HTML5.Form",
    "category": "section",
    "text": "Bukdu.HTML5.Form.change"
},

]}
