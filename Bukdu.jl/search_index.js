var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Home",
    "title": "Home",
    "category": "page",
    "text": ""
},

{
    "location": "#Bukdu-1",
    "page": "Home",
    "title": "Bukdu 🌌",
    "category": "section",
    "text": "Bukdu 🌌 is a web development framework for Julia.It\'s influenced by Phoenix framework.using Bukdu\n\nstruct WelcomeController <: ApplicationController\n    conn::Conn\nend\n\nfunction index(c::WelcomeController)\n    render(JSON, \"Hello World\")\nend\n\nroutes() do\n    get(\"/\", WelcomeController, index)\nend\n\nBukdu.start(8080)(Image: hello.svg)"
},

{
    "location": "#RESTful-API-Demo-1",
    "page": "Home",
    "title": "RESTful API Demo",
    "category": "section",
    "text": "There\'s examples/rest for RESTful API examples.Visit Bukdu on Heroku and check its source code. (A sleeping heroku page, it will become active again after a short delay.)"
},

{
    "location": "#Modifying-actions-at-runtime-1",
    "page": "Home",
    "title": "Modifying actions at runtime",
    "category": "section",
    "text": "Bukdu/examples $ julia -i welcome.jl\n   _       _ _(_)_     |  Documentation: https://docs.julialang.org\n  (_)     | (_) (_)    |\n   _ _   _| |_  __ _   |  Type \"?\" for help, \"]?\" for Pkg help.\n  | | | | | | |/ _` |  |\n  | | |_| | | | (_| |  |  Version 1.0.0 (2018-08-08)\n _/ |\\__\'_|_|_|\\__\'_|  |  Official https://julialang.org/ release\n|__/\n\nINFO: Bukdu Listening on: 127.0.0.1:8080\njulia> Visit http://127.0.0.1:8080 on your web browser.julia> function index(c::WelcomeController)\n           render(JSON, \"Love\")\n       end\nindex (generic function with 1 method)That\'s it! Refresh your page of the web browser."
},

{
    "location": "#Requirements-1",
    "page": "Home",
    "title": "Requirements",
    "category": "section",
    "text": "The project has reworked based on HTTP.jl in Julia 1.0.julia> type ] key(v1.0) pkg> add Bukdu"
},

{
    "location": "server/#",
    "page": "server",
    "title": "server",
    "category": "page",
    "text": ""
},

{
    "location": "server/#Bukdu.start",
    "page": "server",
    "title": "Bukdu.start",
    "category": "function",
    "text": "Bukdu.start(port::Integer; host::String=\"localhost\")\n\nstart the Bukdu server.\n\n\n\n\n\n"
},

{
    "location": "server/#Bukdu.stop",
    "page": "server",
    "title": "Bukdu.stop",
    "category": "function",
    "text": "Bukdu.stop()\n\nstop the Bukdu server.\n\n\n\n\n\n"
},

{
    "location": "server/#Bukdu-server-1",
    "page": "server",
    "title": "Bukdu server",
    "category": "section",
    "text": "Bukdu.start\nBukdu.stop"
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
    "location": "controllers/#Bukdu.Plug.Conn",
    "page": "controllers",
    "title": "Bukdu.Plug.Conn",
    "category": "type",
    "text": "Conn\n\n\n\n\n\n"
},

{
    "location": "controllers/#Bukdu.redirect_to",
    "page": "controllers",
    "title": "Bukdu.redirect_to",
    "category": "function",
    "text": "redirect_to(conn::Conn, path::String)\n\n\n\n\n\n"
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
    "text": "ApplicationController\nConn\nredirect_toAssoc"
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
    "text": "Render <: AbstractRender\n\n\n\n\n\n"
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
    "location": "routes/#Bukdu.options",
    "page": "routes",
    "title": "Bukdu.options",
    "category": "function",
    "text": "options(url::String, C::Type{<:ApplicationController}, action)\n\n\n\n\n\n"
},

{
    "location": "routes/#Bukdu.resources",
    "page": "routes",
    "title": "Bukdu.resources",
    "category": "function",
    "text": "resources(path::String, ::Type{C}; only=[], except=[]) where {C <: ApplicationController}\n\n\n\n\n\n"
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
    "text": "routes\npipelineget\npost\ndelete\npatch\nput\nBukdu.options\nresourcesRouting.empty!"
},

{
    "location": "plugs/#",
    "page": "plugs",
    "title": "plugs",
    "category": "page",
    "text": ""
},

{
    "location": "plugs/#Bukdu.Plug.Logger",
    "page": "plugs",
    "title": "Bukdu.Plug.Logger",
    "category": "type",
    "text": "Plug.Logger\n\n\n\n\n\n"
},

{
    "location": "plugs/#Bukdu.Plug.LoggerFormatter",
    "page": "plugs",
    "title": "Bukdu.Plug.LoggerFormatter",
    "category": "module",
    "text": "Plug.LoggerFormatter\n\n\n\n\n\n"
},

{
    "location": "plugs/#Bukdu.Plug.LoggerFormatter.basic_message",
    "page": "plugs",
    "title": "Bukdu.Plug.LoggerFormatter.basic_message",
    "category": "function",
    "text": "Plug.LoggerFormatter.basic_message(io)\n\n\n\n\n\n"
},

{
    "location": "plugs/#Bukdu.Plug.LoggerFormatter.datetime_message",
    "page": "plugs",
    "title": "Bukdu.Plug.LoggerFormatter.datetime_message",
    "category": "function",
    "text": "Plug.LoggerFormatter.datetime_message(io)\n\n\n\n\n\n"
},

{
    "location": "plugs/#Bukdu.Plug.plug",
    "page": "plugs",
    "title": "Bukdu.Plug.plug",
    "category": "function",
    "text": "plug(::Type{Logger}; access_log::Union{Nothing,<:NamedTuple}=nothing, formatter=LoggerFormatter.basic_message)\n\n\n\n\n\nplug(::Type{Parsers}; parsers::Vector{Symbol})\n\n\n\n\n\nplug(::Type{Static}; at::String, from::String, only::Union{Vector{String},Nothing}=nothing, indexfile=\"index.html\")\n\n\n\n\n\n"
},

{
    "location": "plugs/#plugs-1",
    "page": "plugs",
    "title": "plugs",
    "category": "section",
    "text": "Plug.Logger\nPlug.LoggerFormatter\nPlug.LoggerFormatter.basic_message\nPlug.LoggerFormatter.datetime_messageplug"
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
    "location": "HTML5/Form/#Bukdu.HTML5.Form.text_area",
    "page": "HTML5.Form",
    "title": "Bukdu.HTML5.Form.text_area",
    "category": "function",
    "text": "text_area(f::Changeset, field::Symbol, value=nothing; kwargs...)::Node\n\n\n\n\n\n"
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
    "text": "submit(block_option; kwargs...)::Node\n\n\n\n\n\n"
},

{
    "location": "HTML5/Form/#Bukdu.HTML5.Form-1",
    "page": "HTML5.Form",
    "title": "Bukdu.HTML5.Form",
    "category": "section",
    "text": "changeform_for\nlabel_for\ntext_input\ntext_area\nradio_button\ncheckbox\nsubmit"
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
    "text": "Changeset\n\nUsed with HTML5.Form.change.\n\n\n\n\n\n"
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
    "text": "CLI.routes()\n\nShowing the routing table.\n\n\n\n\n\n"
},

{
    "location": "CLI/#CLI-1",
    "page": "CLI",
    "title": "CLI",
    "category": "section",
    "text": "CLI.routes()"
},

{
    "location": "System/#",
    "page": "System",
    "title": "System",
    "category": "page",
    "text": ""
},

{
    "location": "System/#Bukdu.System.halted_error",
    "page": "System",
    "title": "Bukdu.System.halted_error",
    "category": "function",
    "text": "halted_error(c::SystemController)\n\n\n\n\n\n"
},

{
    "location": "System/#Bukdu.System.not_applicable",
    "page": "System",
    "title": "Bukdu.System.not_applicable",
    "category": "function",
    "text": "not_applicable(c::SystemController)\n\n\n\n\n\n"
},

{
    "location": "System/#Bukdu.System.internal_error",
    "page": "System",
    "title": "Bukdu.System.internal_error",
    "category": "function",
    "text": "internal_error(c::SystemController)\n\n\n\n\n\n"
},

{
    "location": "System/#Bukdu.System.not_found",
    "page": "System",
    "title": "Bukdu.System.not_found",
    "category": "function",
    "text": "not_found(c::MissingController)\n\n\n\n\n\n"
},

{
    "location": "System/#Bukdu.System-1",
    "page": "System",
    "title": "Bukdu.System",
    "category": "section",
    "text": "Bukdu.System.halted_error\nBukdu.System.not_applicable\nBukdu.System.internal_error\nBukdu.System.not_found"
},

{
    "location": "System/#Bukdu.System.catch_request",
    "page": "System",
    "title": "Bukdu.System.catch_request",
    "category": "function",
    "text": "Bukdu.System.catch_request(route::Bukdu.Route, req)\n\n\n\n\n\n"
},

{
    "location": "System/#Bukdu.System.catch_response",
    "page": "System",
    "title": "Bukdu.System.catch_response",
    "category": "function",
    "text": "Bukdu.System.catch_response(route::Bukdu.Route, resp)\n\n\n\n\n\n"
},

{
    "location": "System/#Bukdu.System.config",
    "page": "System",
    "title": "Bukdu.System.config",
    "category": "constant",
    "text": "Bukdu.System.config\n\nLogging options for System info and error messages.\n\n:controller_pad\n:action_pad\n:path_pad\n:error_stackframes_range\n\n\n\n\n\n"
},

{
    "location": "System/#Debugging-the-requests-and-responses-on-the-fly-1",
    "page": "System",
    "title": "Debugging the requests and responses on the fly",
    "category": "section",
    "text": "Bukdu provides a way to catch the requests and responses.julia> Bukdu.System.catch_request(route::Bukdu.Route, req) = @debug \"REQ \" req.headers\njulia> Bukdu.System.catch_response(route::Bukdu.Route, resp) = @debug \"RESP\" resp.headers resp.statusBukdu.System.catch_request\nBukdu.System.catch_responseBukdu.System.config"
},

{
    "location": "Router/#",
    "page": "Router",
    "title": "Router",
    "category": "page",
    "text": ""
},

{
    "location": "Router/#Bukdu.Router.call",
    "page": "Router",
    "title": "Bukdu.Router.call",
    "category": "function",
    "text": "Router.call\n\nTo get the object of the action without going through HTTP server. Results are named tuple (got= , resp= , route= ).\n\n\n\n\n\n"
},

{
    "location": "Router/#Router-1",
    "page": "Router",
    "title": "Router",
    "category": "section",
    "text": "Router.call"
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
