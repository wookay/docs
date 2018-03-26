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
    "location": "controllers/#",
    "page": "controllers",
    "title": "controllers",
    "category": "page",
    "text": ""
},

{
    "location": "controllers/#Bukdu.ApplicationController",
    "page": "controllers",
    "title": "Bukdu.ApplicationController",
    "category": "type",
    "text": "ApplicationController\n\n\n\n\n\n"
},

{
    "location": "controllers/#Bukdu.Conn",
    "page": "controllers",
    "title": "Bukdu.Conn",
    "category": "type",
    "text": "Conn\n\n\n\n\n\n"
},

{
    "location": "controllers/#controllers-1",
    "page": "controllers",
    "title": "controllers",
    "category": "section",
    "text": "ApplicationController\nConn"
},

{
    "location": "renders/#",
    "page": "renders",
    "title": "renders",
    "category": "page",
    "text": ""
},

{
    "location": "renders/#Bukdu.Render",
    "page": "renders",
    "title": "Bukdu.Render",
    "category": "type",
    "text": "Render\n\n\n\n\n\n"
},

{
    "location": "renders/#Bukdu.render",
    "page": "renders",
    "title": "Bukdu.render",
    "category": "function",
    "text": "render(::Type{Text}, data)::Render\n\n\n\n\n\nrender(::Type{HTML}, data)::Render\n\n\n\n\n\nrender(::Type{JSON}, data)::Render\n\n\n\n\n\nrender(::Type{JavaScript}, data)::Render\n\n\n\n\n\n"
},

{
    "location": "renders/#renders-1",
    "page": "renders",
    "title": "renders",
    "category": "section",
    "text": "Render\nrender"
},

{
    "location": "Router/#",
    "page": "Router",
    "title": "Router",
    "category": "page",
    "text": ""
},

{
    "location": "Router/#Bukdu.Router",
    "page": "Router",
    "title": "Bukdu.Router",
    "category": "type",
    "text": "Router(routes::Function)\n\n\n\n\n\n"
},

{
    "location": "Router/#Router-1",
    "page": "Router",
    "title": "Router",
    "category": "section",
    "text": "Router"
},

{
    "location": "Actions/#",
    "page": "Actions",
    "title": "Actions",
    "category": "page",
    "text": ""
},

{
    "location": "Actions/#Actions-1",
    "page": "Actions",
    "title": "Actions",
    "category": "section",
    "text": "import Bukdu.Actions: index, edit, new, show, create, update, delete"
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
    "text": "change(M::Type, params::Assoc)::Changeset\n\n\n\n\n\nchange(M::Type, nt::NamedTuple, params::Assoc; primary_key::Union{String,Nothing}=nothing)::Changeset\n\n\n\n\n\n"
},

{
    "location": "HTML5/Form/#Bukdu.HTML5.Form.form_for",
    "page": "HTML5.Form",
    "title": "Bukdu.HTML5.Form.form_for",
    "category": "function",
    "text": "form_for(f, changeset::Changeset, controller_action::Tuple; method=post, kwargs...)\n\n\n\n\n\nform_for(f, changeset::Changeset, form_action::String; method=post, multipart::Bool=false)\n\n\n\n\n\n"
},

{
    "location": "HTML5/Form/#Bukdu.HTML5.Form.text_input",
    "page": "HTML5.Form",
    "title": "Bukdu.HTML5.Form.text_input",
    "category": "function",
    "text": "text_input(f::Changeset, field::Symbol, value=nothing, placeholder=nothing)\n\n\n\n\n\n"
},

{
    "location": "HTML5/Form/#Bukdu.HTML5.Form.submit",
    "page": "HTML5.Form",
    "title": "Bukdu.HTML5.Form.submit",
    "category": "function",
    "text": "submit(block_option)\n\n\n\n\n\n"
},

{
    "location": "HTML5/Form/#Bukdu.HTML5.Form-1",
    "page": "HTML5.Form",
    "title": "Bukdu.HTML5.Form",
    "category": "section",
    "text": "change\nform_for\ntext_input\nsubmit"
},

]}
