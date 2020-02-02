var documenterSearchIndex = {"docs":
[{"location":"Router/#Router-1","page":"Router","title":"Router","text":"","category":"section"},{"location":"Router/#","page":"Router","title":"Router","text":"Router.call","category":"page"},{"location":"Router/#Bukdu.Router.call","page":"Router","title":"Bukdu.Router.call","text":"Router.call\n\nTo get the object of the action without going through HTTP server. Results are named tuple (got= , resp= , route= ).\n\n\n\n\n\n","category":"function"},{"location":"server/#Bukdu-server-1","page":"server","title":"Bukdu server","text":"","category":"section"},{"location":"server/#","page":"server","title":"server","text":"Bukdu.start\nBukdu.stop","category":"page"},{"location":"server/#Bukdu.start","page":"server","title":"Bukdu.start","text":"Bukdu.start(port::Integer; host::Union{String,Sockets.IPAddr}=\"localhost\", kwargs...)\n\nstart the Bukdu server.\n\n\n\n\n\n","category":"function"},{"location":"server/#Bukdu.stop","page":"server","title":"Bukdu.stop","text":"Bukdu.stop()\n\nstop the Bukdu server.\n\n\n\n\n\n","category":"function"},{"location":"renders/#renders-1","page":"renders","title":"renders","text":"","category":"section"},{"location":"renders/#","page":"renders","title":"renders","text":"Render","category":"page"},{"location":"renders/#Bukdu.Render","page":"renders","title":"Bukdu.Render","text":"Render <: AbstractRender\n\n\n\n\n\n","category":"type"},{"location":"renders/#","page":"renders","title":"renders","text":"render","category":"page"},{"location":"renders/#Bukdu.render","page":"renders","title":"Bukdu.render","text":"render(::Type{Text}, data)::Render\n\n\n\n\n\nrender(::Type{HTML}, data)::Render\n\n\n\n\n\nrender(::Type{Julia}, data)::Render\n\n\n\n\n\nrender(::Type{JavaScript}, data)::Render\n\n\n\n\n\n","category":"function"},{"location":"Utils/#Utils-1","page":"Utils","title":"Utils","text":"","category":"section"},{"location":"Utils/#","page":"Utils","title":"Utils","text":"Utils.read_stdout","category":"page"},{"location":"Utils/#Bukdu.Utils.read_stdout","page":"Utils","title":"Bukdu.Utils.read_stdout","text":"Utils.read_stdout(f)\n\n\n\n\n\n","category":"function"},{"location":"changeset/#Changeset-1","page":"Changeset","title":"Changeset","text":"","category":"section"},{"location":"changeset/#","page":"Changeset","title":"Changeset","text":"Changeset","category":"page"},{"location":"changeset/#Bukdu.Changeset","page":"Changeset","title":"Bukdu.Changeset","text":"Changeset\n\nUsed with HTML5.Form.change.\n\n\n\n\n\n","category":"type"},{"location":"System/#Bukdu.System-1","page":"System","title":"Bukdu.System","text":"","category":"section"},{"location":"System/#","page":"System","title":"System","text":"Bukdu.System.halted_error\nBukdu.System.not_applicable\nBukdu.System.internal_error\nBukdu.System.not_found","category":"page"},{"location":"System/#Bukdu.System.halted_error","page":"System","title":"Bukdu.System.halted_error","text":"halted_error(c::SystemController)\n\n\n\n\n\n","category":"function"},{"location":"System/#Bukdu.System.not_applicable","page":"System","title":"Bukdu.System.not_applicable","text":"not_applicable(c::SystemController)\n\n\n\n\n\n","category":"function"},{"location":"System/#Bukdu.System.internal_error","page":"System","title":"Bukdu.System.internal_error","text":"internal_error(c::SystemController)\n\n\n\n\n\n","category":"function"},{"location":"System/#Bukdu.System.not_found","page":"System","title":"Bukdu.System.not_found","text":"not_found(c::MissingController)\n\n\n\n\n\n","category":"function"},{"location":"System/#Debugging-the-requests-and-responses-on-the-fly-1","page":"System","title":"Debugging the requests and responses on the fly","text":"","category":"section"},{"location":"System/#","page":"System","title":"System","text":"Bukdu provides a way to catch the requests and responses.","category":"page"},{"location":"System/#","page":"System","title":"System","text":"julia> Bukdu.System.catch_request(route::Bukdu.Route, req) = @debug \"REQ \" req.headers\njulia> Bukdu.System.catch_response(route::Bukdu.Route, resp) = @debug \"RESP\" resp.headers resp.status","category":"page"},{"location":"System/#","page":"System","title":"System","text":"Bukdu.System.catch_request\nBukdu.System.catch_response","category":"page"},{"location":"System/#Bukdu.System.catch_request","page":"System","title":"Bukdu.System.catch_request","text":"Bukdu.System.catch_request(route::Bukdu.Route, conn)\n\n\n\n\n\n","category":"function"},{"location":"System/#Bukdu.System.catch_response","page":"System","title":"Bukdu.System.catch_response","text":"Bukdu.System.catch_response(route::Bukdu.Route, conn)\n\n\n\n\n\n","category":"function"},{"location":"routes/#routes-1","page":"routes","title":"routes","text":"","category":"section"},{"location":"routes/#","page":"routes","title":"routes","text":"routes\npipeline","category":"page"},{"location":"routes/#Bukdu.routes","page":"routes","title":"Bukdu.routes","text":"routes(block::Function)\n\n\n\n\n\nroutes(block::Function, pipe::Symbol)\n\n\n\n\n\n","category":"function"},{"location":"routes/#Base.pipeline","page":"routes","title":"Base.pipeline","text":"pipeline(block::Function, pipes::Symbol...)\n\n\n\n\n\n","category":"function"},{"location":"routes/#","page":"routes","title":"routes","text":"get\npost\ndelete\npatch\nput\nBukdu.options\nresources","category":"page"},{"location":"routes/#Base.get","page":"routes","title":"Base.get","text":"get(url::String, C::Type{<:ApplicationController}, action, param_types::Pair{Symbol,DataType}...)\n\n\n\n\n\n","category":"function"},{"location":"routes/#Bukdu.post","page":"routes","title":"Bukdu.post","text":"post(url::String, C::Type{<:ApplicationController}, action, param_types::Pair{Symbol,DataType}...)\n\n\n\n\n\n","category":"function"},{"location":"routes/#Bukdu.delete","page":"routes","title":"Bukdu.delete","text":"delete(url::String, C::Type{<:ApplicationController}, action, param_types::Pair{Symbol,DataType}...)\n\n\n\n\n\n","category":"function"},{"location":"routes/#Bukdu.patch","page":"routes","title":"Bukdu.patch","text":"patch(url::String, C::Type{<:ApplicationController}, action, param_types::Pair{Symbol,DataType}...)\n\n\n\n\n\n","category":"function"},{"location":"routes/#Bukdu.put","page":"routes","title":"Bukdu.put","text":"put(url::String, C::Type{<:ApplicationController}, action, param_types::Pair{Symbol,DataType}...)\n\n\n\n\n\n","category":"function"},{"location":"routes/#Bukdu.options","page":"routes","title":"Bukdu.options","text":"options(url::String, C::Type{<:ApplicationController}, action, param_types::Pair{Symbol,DataType}...)\n\n\n\n\n\n","category":"function"},{"location":"routes/#Bukdu.resources","page":"routes","title":"Bukdu.resources","text":"resources(path::String, ::Type{C}, param_types::Pair{Symbol,DataType}...; only=[], except=[]) where {C <: ApplicationController}\n\n\n\n\n\n","category":"function"},{"location":"routes/#","page":"routes","title":"routes","text":"Routing.reset!","category":"page"},{"location":"routes/#Bukdu.Routing.reset!","page":"routes","title":"Bukdu.Routing.reset!","text":"Routing.reset!()\n\n\n\n\n\n","category":"function"},{"location":"CLI/#CLI-1","page":"CLI","title":"CLI","text":"","category":"section"},{"location":"CLI/#","page":"CLI","title":"CLI","text":"CLI.routes()","category":"page"},{"location":"CLI/#Bukdu.CLI.routes-Tuple{}","page":"CLI","title":"Bukdu.CLI.routes","text":"CLI.routes()\n\nShowing the routing table.\n\n\n\n\n\n","category":"method"},{"location":"Actions/#Actions-1","page":"Actions","title":"Actions","text":"","category":"section"},{"location":"Actions/#","page":"Actions","title":"Actions","text":"import Bukdu.Actions: index, edit, new, show, create, update, delete","category":"page"},{"location":"HTML5/Form/#Bukdu.HTML5.Form-1","page":"HTML5.Form","title":"Bukdu.HTML5.Form","text":"","category":"section"},{"location":"HTML5/Form/#","page":"HTML5.Form","title":"HTML5.Form","text":"change","category":"page"},{"location":"HTML5/Form/#Bukdu.HTML5.Form.change","page":"HTML5.Form","title":"Bukdu.HTML5.Form.change","text":"change(M::Type, params::Assoc)::Changeset\n\n\n\n\n\nchange(changeset::Changeset, params::Assoc; primary_key::Union{String,Nothing}=nothing)::Changeset\n\n\n\n\n\n","category":"function"},{"location":"HTML5/Form/#","page":"HTML5.Form","title":"HTML5.Form","text":"form_for\nlabel_for\ntext_input\ntext_area\nradio_button\ncheckbox\nfile_input\nsubmit","category":"page"},{"location":"HTML5/Form/#Bukdu.HTML5.Form.form_for","page":"HTML5.Form","title":"Bukdu.HTML5.Form.form_for","text":"form_for(block::Function, changeset::Changeset, controller_action::Tuple; method=post, kwargs...)::Node\n\n\n\n\n\nform_for(block::Function, changeset::Changeset, form_action::String; method=post, multipart::Bool=false)::Node\n\n\n\n\n\n","category":"function"},{"location":"HTML5/Form/#Bukdu.HTML5.Form.label_for","page":"HTML5.Form","title":"Bukdu.HTML5.Form.label_for","text":"label_for(node::Node, text::Union{String,Nothing}=nothing; kwargs...)::Vector{Node}\n\n\n\n\n\nlabel_for(nodes::Vector{Node}, text::Union{String,Nothing}=nothing; kwargs...)::Vector{Node}\n\n\n\n\n\n","category":"function"},{"location":"HTML5/Form/#Bukdu.HTML5.Form.text_input","page":"HTML5.Form","title":"Bukdu.HTML5.Form.text_input","text":"text_input(f::Changeset, field::Symbol, value=nothing; kwargs...)::Node\n\n\n\n\n\n","category":"function"},{"location":"HTML5/Form/#Bukdu.HTML5.Form.text_area","page":"HTML5.Form","title":"Bukdu.HTML5.Form.text_area","text":"text_area(f::Changeset, field::Symbol, value=nothing; kwargs...)::Node\n\n\n\n\n\n","category":"function"},{"location":"HTML5/Form/#Bukdu.HTML5.Form.radio_button","page":"HTML5.Form","title":"Bukdu.HTML5.Form.radio_button","text":"radio_button(f::Changeset, field::Symbol, value::String; kwargs...)::Node\n\n\n\n\n\n","category":"function"},{"location":"HTML5/Form/#Bukdu.HTML5.Form.checkbox","page":"HTML5.Form","title":"Bukdu.HTML5.Form.checkbox","text":"checkbox(f::Changeset, field::Symbol, value::Union{Bool,Nothing}=nothing; kwargs...)::Vector{Node}\n\n\n\n\n\n","category":"function"},{"location":"HTML5/Form/#Bukdu.HTML5.Form.file_input","page":"HTML5.Form","title":"Bukdu.HTML5.Form.file_input","text":"file_input(f::Changeset, field::Symbol; kwargs...)::Node\n\n\n\n\n\n","category":"function"},{"location":"HTML5/Form/#Bukdu.HTML5.Form.submit","page":"HTML5.Form","title":"Bukdu.HTML5.Form.submit","text":"submit(block_option; kwargs...)::Node\n\n\n\n\n\n","category":"function"},{"location":"plugs/#plugs-1","page":"plugs","title":"plugs","text":"","category":"section"},{"location":"plugs/#","page":"plugs","title":"plugs","text":"Modules = [Bukdu.Plug.Loggers]","category":"page"},{"location":"plugs/#Bukdu.Plug.Loggers.config","page":"plugs","title":"Bukdu.Plug.Loggers.config","text":"Plug.Loggers.config\n\nLogging options for System info and error messages.\n\n:controller_pad\n:action_pad\n:path_pad\n:error_stackframes_range\n\n\n\n\n\n","category":"constant"},{"location":"plugs/#","page":"plugs","title":"plugs","text":"plug","category":"page"},{"location":"plugs/#Bukdu.Plug.plug","page":"plugs","title":"Bukdu.Plug.plug","text":"plug(::Type{T}, args...; kwargs...) where {T <: AbstractLogger}\n\n\n\n\n\nplug(::Type{Parsers}, parsers::Vector{Symbol} = ContentParsers.default_content_parsers; decoders...)\n\n\n\n\n\nplug(::Type{Static}; at::String, from::String, only::Union{Vector{String},Nothing}=nothing, indexfile=\"index.html\")\n\n\n\n\n\n","category":"function"},{"location":"controllers/#controllers-1","page":"controllers","title":"controllers","text":"","category":"section"},{"location":"controllers/#","page":"controllers","title":"controllers","text":"ApplicationController\nConn\nredirect_to","category":"page"},{"location":"controllers/#Bukdu.ApplicationController","page":"controllers","title":"Bukdu.ApplicationController","text":"ApplicationController\n\n\n\n\n\n","category":"type"},{"location":"controllers/#Bukdu.Plug.Conn","page":"controllers","title":"Bukdu.Plug.Conn","text":"Conn\n\n\n\n\n\n","category":"type"},{"location":"controllers/#Bukdu.redirect_to","page":"controllers","title":"Bukdu.redirect_to","text":"redirect_to(conn::Conn, path::String)\n\n\n\n\n\n","category":"function"},{"location":"controllers/#","page":"controllers","title":"controllers","text":"Assoc","category":"page"},{"location":"controllers/#Bukdu.Assoc","page":"controllers","title":"Bukdu.Assoc","text":"Assoc\n\n\n\n\n\n","category":"type"},{"location":"#Bukdu.jl-1","page":"Home","title":"Bukdu.jl 🌌","text":"","category":"section"},{"location":"#","page":"Home","title":"Home","text":"https://github.com/wookay/Bukdu.jl","category":"page"},{"location":"#","page":"Home","title":"Home","text":"Bukdu.jl is a web development framework for Julia.","category":"page"},{"location":"#","page":"Home","title":"Home","text":"It's influenced by Phoenix framework.","category":"page"},{"location":"#","page":"Home","title":"Home","text":"using Bukdu\n\nstruct WelcomeController <: ApplicationController\n    conn::Conn\nend\n\nfunction index(c::WelcomeController)\n    render(JSON, \"Hello World\")\nend\n\nroutes() do\n    get(\"/\", WelcomeController, index)\nend\n\nBukdu.start(8080)","category":"page"},{"location":"#","page":"Home","title":"Home","text":"(Image: hello.svg)","category":"page"},{"location":"#RESTful-API-Demo-1","page":"Home","title":"RESTful API Demo","text":"","category":"section"},{"location":"#","page":"Home","title":"Home","text":"There's examples/rest for RESTful API examples.","category":"page"},{"location":"#","page":"Home","title":"Home","text":"Visit Bukdu on Heroku and check its source code. (A sleeping heroku page, it will become active again after a short delay.)","category":"page"},{"location":"#Modifying-actions-at-runtime-1","page":"Home","title":"Modifying actions at runtime","text":"","category":"section"},{"location":"#","page":"Home","title":"Home","text":"Bukdu/examples $ julia -i welcome.jl\n   _       _ _(_)_     |  Documentation: https://docs.julialang.org\n  (_)     | (_) (_)    |\n   _ _   _| |_  __ _   |  Type \"?\" for help, \"]?\" for Pkg help.\n  | | | | | | |/ _` |  |\n  | | |_| | | | (_| |  |  Version 1.0.0 (2018-08-08)\n _/ |\\__'_|_|_|\\__'_|  |  Official https://julialang.org/ release\n|__/\n\nINFO: Bukdu Listening on: 127.0.0.1:8080\njulia> ","category":"page"},{"location":"#","page":"Home","title":"Home","text":"Visit http://127.0.0.1:8080 on your web browser.","category":"page"},{"location":"#","page":"Home","title":"Home","text":"julia> function index(c::WelcomeController)\n           render(JSON, \"Love\")\n       end\nindex (generic function with 1 method)","category":"page"},{"location":"#","page":"Home","title":"Home","text":"That's it! Refresh your page of the web browser.","category":"page"},{"location":"#Requirements-1","page":"Home","title":"Requirements","text":"","category":"section"},{"location":"#","page":"Home","title":"Home","text":"The project has reworked based on HTTP.jl in Julia 1.0.","category":"page"},{"location":"#","page":"Home","title":"Home","text":"julia> type ] key","category":"page"},{"location":"#","page":"Home","title":"Home","text":"(v1.0) pkg> add Bukdu","category":"page"}]
}
