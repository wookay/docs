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
    "text": "Bukdu 🌌  is a web development framework for Julia.It's influenced by Phoenix framework.importall Bukdu\n\ntype WelcomeController <: ApplicationController\nend\n\nindex(::WelcomeController) = \"hello world\"\n\nRouter() do\n    get(\"/\", WelcomeController, index)\nend\n\nBukdu.start(8080)"
},

]}
