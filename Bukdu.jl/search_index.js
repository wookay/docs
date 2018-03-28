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
    "text": "Bukdu 🌌  is a web development framework for Julia.It\'s influenced by Phoenix framework.using Bukdu\n\nstruct WelcomeController <: ApplicationController\n    conn::Conn\nend\n\nindex(::WelcomeController) = \"hello world\"\n\nroutes() do\n    get(\"/\", WelcomeController, index)\nend\n\nBukdu.start(8080)"
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
    "location": "controllers/#Bukdu.Assoc",
    "page": "controllers",
    "title": "Bukdu.Assoc",
    "category": "type",
    "text": "Assoc\n\n\n\n\n\n"
},

{
    "location": "controllers/#controllers-1",
    "page": "controllers",
    "title": "controllers",
    "category": "section",
    "text": "ApplicationController\nConnAssoc"
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
    "text": "Renderrender"
},

{
    "location": "routes/#",
    "page": "routes",
    "title": "routes",
    "category": "page",
    "text": ""
},

{
    "location": "routes/#Bukdu.routes",
    "page": "routes",
    "title": "Bukdu.routes",
    "category": "function",
    "text": "routes(block::Function)\n\n\n\n\n\nroutes(block::Function, pipe::Symbol)\n\n\n\n\n\n"
},

{
    "location": "routes/#Base.pipeline",
    "page": "routes",
    "title": "Base.pipeline",
    "category": "function",
    "text": "pipeline(block::Function, routers...)\n\n\n\n\n\n"
},

{
    "location": "routes/#Base.get",
    "page": "routes",
    "title": "Base.get",
    "category": "function",
    "text": "get(url::String, C::Type{<:ApplicationController}, action)\n\n\n\n\n\n"
},

{
    "location": "routes/#Bukdu.post",
    "page": "routes",
    "title": "Bukdu.post",
    "category": "function",
    "text": "post(url::String, C::Type{<:ApplicationController}, action)\n\n\n\n\n\n"
},

{
    "location": "routes/#Bukdu.delete",
    "page": "routes",
    "title": "Bukdu.delete",
    "category": "function",
    "text": "delete(url::String, C::Type{<:ApplicationController}, action)\n\n\n\n\n\n"
},

{
    "location": "routes/#Bukdu.patch",
    "page": "routes",
    "title": "Bukdu.patch",
    "category": "function",
    "text": "patch(url::String, C::Type{<:ApplicationController}, action)\n\n\n\n\n\n"
},

{
    "location": "routes/#Bukdu.put",
    "page": "routes",
    "title": "Bukdu.put",
    "category": "function",
    "text": "put(url::String, C::Type{<:ApplicationController}, action)\n\n\n\n\n\n"
},

{
    "location": "routes/#Bukdu.resources",
    "page": "routes",
    "title": "Bukdu.resources",
    "category": "function",
    "text": "resources(path::String, ::Type{C}; only=[], except=[]) where {C <: ApplicationController}\n\n\n\n\n\n"
},

{
    "location": "routes/#Bukdu.Router.request",
    "page": "routes",
    "title": "Bukdu.Router.request",
    "category": "function",
    "text": "Router.request(verb, path::String)\n\n\n\n\n\n"
},

{
    "location": "routes/#Bukdu.Routing.empty!",
    "page": "routes",
    "title": "Bukdu.Routing.empty!",
    "category": "function",
    "text": "Routing.empty!()\n\n\n\n\n\n"
},

{
    "location": "routes/#routes-1",
    "page": "routes",
    "title": "routes",
    "category": "section",
    "text": "routes\npipelineget\npost\ndelete\npatch\nput\nresourcesRouter.requestRouting.empty!"
},

{
    "location": "plugs/#",
    "page": "plugs",
    "title": "plugs",
    "category": "page",
    "text": ""
},

{
    "location": "plugs/#Bukdu.Plug.Static",
    "page": "plugs",
    "title": "Bukdu.Plug.Static",
    "category": "type",
    "text": "Plug.Static\n\n\n\n\n\n"
},

{
    "location": "plugs/#Bukdu.Plug.plug",
    "page": "plugs",
    "title": "Bukdu.Plug.plug",
    "category": "function",
    "text": "plug(::Type{Static}; at::String, from::String)\n\n\n\n\n\n"
},

{
    "location": "plugs/#plugs-1",
    "page": "plugs",
    "title": "plugs",
    "category": "section",
    "text": "Plug.Staticplug"
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
    "text": "change(M::Type, params::Assoc)::Changeset\n\n\n\n\n\nchange(changeset::Changeset, params::Assoc; primary_key::Union{String,Nothing}=nothing)::Changeset\n\n\n\n\n\n"
},

{
    "location": "HTML5/Form/#Bukdu.HTML5.Form.form_for",
    "page": "HTML5.Form",
    "title": "Bukdu.HTML5.Form.form_for",
    "category": "function",
    "text": "form_for(block::Function, changeset::Changeset, controller_action::Tuple; method=post, kwargs...)::Node\n\n\n\n\n\nform_for(block::Function, changeset::Changeset, form_action::String; method=post, multipart::Bool=false)::Node\n\n\n\n\n\n"
},

{
    "location": "HTML5/Form/#Bukdu.HTML5.Form.label_for",
    "page": "HTML5.Form",
    "title": "Bukdu.HTML5.Form.label_for",
    "category": "function",
    "text": "label_for(node::Node, text::Union{String,Nothing}=nothing; kwargs...)::Vector{Node}\n\n\n\n\n\nlabel_for(nodes::Vector{Node}, text::Union{String,Nothing}=nothing; kwargs...)::Vector{Node}\n\n\n\n\n\n"
},

{
    "location": "HTML5/Form/#Bukdu.HTML5.Form.text_input",
    "page": "HTML5.Form",
    "title": "Bukdu.HTML5.Form.text_input",
    "category": "function",
    "text": "text_input(f::Changeset, field::Symbol, value=nothing; kwargs...)::Node\n\n\n\n\n\n"
},

{
    "location": "HTML5/Form/#Bukdu.HTML5.Form.textarea",
    "page": "HTML5.Form",
    "title": "Bukdu.HTML5.Form.textarea",
    "category": "function",
    "text": "textarea(f::Changeset, field::Symbol, value=nothing; kwargs...)::Node\n\n\n\n\n\n"
},

{
    "location": "HTML5/Form/#Bukdu.HTML5.Form.radio_button",
    "page": "HTML5.Form",
    "title": "Bukdu.HTML5.Form.radio_button",
    "category": "function",
    "text": "radio_button(f::Changeset, field::Symbol, value::String; kwargs...)::Node\n\n\n\n\n\n"
},

{
    "location": "HTML5/Form/#Bukdu.HTML5.Form.checkbox",
    "page": "HTML5.Form",
    "title": "Bukdu.HTML5.Form.checkbox",
    "category": "function",
    "text": "checkbox(f::Changeset, field::Symbol, value::Union{Bool,Nothing}=nothing; kwargs...)::Vector{Node}\n\n\n\n\n\n"
},

{
    "location": "HTML5/Form/#Bukdu.HTML5.Form.submit",
    "page": "HTML5.Form",
    "title": "Bukdu.HTML5.Form.submit",
    "category": "function",
    "text": "submit(block_option)::Node\n\n\n\n\n\n"
},

{
    "location": "HTML5/Form/#Bukdu.HTML5.Form-1",
    "page": "HTML5.Form",
    "title": "Bukdu.HTML5.Form",
    "category": "section",
    "text": "changeform_for\nlabel_for\ntext_input\ntextarea\nradio_button\ncheckbox\nsubmit"
},

{
    "location": "changeset/#",
    "page": "Changeset",
    "title": "Changeset",
    "category": "page",
    "text": ""
},

{
    "location": "changeset/#Bukdu.Changeset",
    "page": "Changeset",
    "title": "Bukdu.Changeset",
    "category": "type",
    "text": "Changeset\n\n\n\n\n\n"
},

{
    "location": "changeset/#Changeset-1",
    "page": "Changeset",
    "title": "Changeset",
    "category": "section",
    "text": "Changeset"
},

{
    "location": "CLI/#",
    "page": "CLI",
    "title": "CLI",
    "category": "page",
    "text": ""
},

{
    "location": "CLI/#Bukdu.CLI.routes-Tuple{}",
    "page": "CLI",
    "title": "Bukdu.CLI.routes",
    "category": "method",
    "text": "CLI.routes()\n\n\n\n\n\n"
},

{
    "location": "CLI/#CLI-1",
    "page": "CLI",
    "title": "CLI",
    "category": "section",
    "text": "CLI.routes()"
},

{
    "location": "Utils/#",
    "page": "Utils",
    "title": "Utils",
    "category": "page",
    "text": ""
},

{
    "location": "Utils/#Bukdu.Utils.read_stdout",
    "page": "Utils",
    "title": "Bukdu.Utils.read_stdout",
    "category": "function",
    "text": "Utils.read_stdout(f)\n\n\n\n\n\n"
},

{
    "location": "Utils/#Utils-1",
    "page": "Utils",
    "title": "Utils",
    "category": "section",
    "text": "Utils.read_stdout"
},

]}
