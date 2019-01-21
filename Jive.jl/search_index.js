var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Home",
    "title": "Home",
    "category": "page",
    "text": ""
},

{
    "location": "#Jive-1",
    "page": "Home",
    "title": "Jive 👣",
    "category": "section",
    "text": "Jive.jl is a Julia package to help the writing tests.runtests\nwatch\n@skip\n@onlyonce\n@If\n@useinside\n@mockup"
},

{
    "location": "#runtests-1",
    "page": "Home",
    "title": "runtests",
    "category": "section",
    "text": "run the test files from the specific directory.using Jive\nruntests(@__DIR__, skip=[], node1=[])(Image: runtests.svg)for the runtests.jl, ARGS are used to filter the targets and to set the first one to test.~/.julia/dev/Jive/test $ julia --color=yes runtests.jl jive/s jive/m start=3\n1/5 jive/mockup/mockup.jl --\n2/5 jive/mockup/warn-replacing-mock.jl --\n3/5 jive/skip/skip-calls.jl\n    Pass 2  (0.26 seconds)\n4/5 jive/skip/skip-functions.jl\n    Pass 4  (0.01 seconds)\n5/5 jive/skip/skip.jl\n    Pass 4  (0.01 seconds)\n✅  All 10 tests have been completed.  (0.57 seconds)in the above example, test files are matched for only have jive/s jive/m and jump up to the 3rd file."
},

{
    "location": "#Examples-1",
    "page": "Home",
    "title": "Examples",
    "category": "section",
    "text": "run tests~/.julia/dev/Jive/test $ julia --color=yes runtests.jlrun tests with target directory.~/.julia/dev/Jive/test $ julia --color=yes runtests.jl jive/Ifdistributed run tests with -p~/.julia/dev/Jive/test $ julia --color=yes -p3 runtests.jldistributed run tests for Pkg.test(), using JIVE_PROCS ENV.~/.julia/dev/Jive $ JIVE_PROCS=2 julia --color=yes --project=. -e \'using Pkg; Pkg.test()\'\n\n~/.julia/dev/Jive $ julia --color=yes --project=. -e \'ENV[\"JIVE_PROCS\"]=\"2\"; using Pkg; Pkg.test()\'"
},

{
    "location": "#watch-1",
    "page": "Home",
    "title": "watch",
    "category": "section",
    "text": "watch the folders.~/.julia/dev/Jive/test/Example/test $ cat runtests.jl\nusing Jive\nruntests(@__DIR__, skip=[\"revise.jl\"])\n\n~/.julia/dev/Jive/test/Example/test $ cat revise.jl\nusing Revise, Jive\nusing Example\nwatch(@__DIR__, sources=[pathof(Example)]) do path\n    @info :changed path\n    revise()\n    runtests(@__DIR__, skip=[\"revise.jl\"])\nend\n# Jive.stop(watch)\n\n~/.julia/dev/Jive/test/Example/test $ julia --project=.. -q -i revise.jl example\nwatching folders ...\n  - example\n  - ../srcwhen saving any files in the watching folders, it automatically run tests."
},

{
    "location": "#@skip-1",
    "page": "Home",
    "title": "@skip",
    "category": "section",
    "text": "skip the expression.test/jive/skipusing Jive # @skip\n\n@skip module want_to_skip_this_module\nsleep(2)\nend\n\n@skip function want_to_skip_this_function()\nsleep(2)\nend\n\n@skip println(1+2)Change to do not skip the code: set ENV[\"JIVE_SKIP\"] = \"0\""
},

{
    "location": "#@onlyonce-1",
    "page": "Home",
    "title": "@onlyonce",
    "category": "section",
    "text": "used to run the block only once.test/jive/onlyonceusing Jive # @onlyonce\n\n@onlyonce begin\n    println(42)\nend"
},

{
    "location": "#@If-1",
    "page": "Home",
    "title": "@If",
    "category": "section",
    "text": "evaluate the module by the condition.test/jive/Ifusing Jive # @If\n@If VERSION >= v\"1.1.0-DEV.764\" module load_some_module\nend"
},

{
    "location": "#@useinside-1",
    "page": "Home",
    "title": "@useinside",
    "category": "section",
    "text": "use inside of the module.using Jive # @useinside\n@useinside module test_pkgs_flux_optimise\n# ...\nend"
},

{
    "location": "#@mockup-1",
    "page": "Home",
    "title": "@mockup",
    "category": "section",
    "text": "used to produce a replica from the other module.test/jive/mockupusing Jive # Mock @mockup\nusing Test\n\nmodule Goods\nstruct Foo\nend\nfunction f(::Foo)\n    10\nend\nfunction g(::Foo)\n    10\nend\nend # module Goods\n\n\n@mockup module Goods\nfunction f(::Foo)\n    20\nend\nend # @mockup module Goods\n@test Goods.f(Goods.Foo()) == 10\n@test Mock.Goods.f(Mock.Goods.Foo()) == 20\n@test Mock.Goods.g(Mock.Goods.Foo()) == 10\n\n\nGoods3 = @mockup module Goods\nfunction g(::Foo)\n    30\nend\nend # @mockup module Goods\n@test Goods.f(Goods.Foo()) == 10\n@test Mock.Goods.f(Mock.Goods.Foo()) == 10\n@test Mock.Goods.g(Mock.Goods.Foo()) == 30\n@test Goods3 isa Module\n@test Goods3.g === Mock.Goods.g"
},

{
    "location": "runtests/#",
    "page": "runtests",
    "title": "runtests",
    "category": "page",
    "text": ""
},

{
    "location": "runtests/#Jive.runtests",
    "page": "runtests",
    "title": "Jive.runtests",
    "category": "function",
    "text": "runtests(dir::String; skip::Union{Vector{Any},Vector{String}}=[], node1::Union{Vector{Any},Vector{String}}=[], targets=ARGS)\n\nrun the test files from the specific directory.\n\ndir: the root directory to traverse.\nskip: files or directories to skip.\nnode1: run on node 1 during for the distributed tests.\ntargets: filter targets and start. default is ARGS\n\n\n\n\n\n"
},

{
    "location": "runtests/#runtests-1",
    "page": "runtests",
    "title": "runtests",
    "category": "section",
    "text": "run the test files from the specific directory.Jive.runtestsusing Jive\nruntests(@__DIR__, skip=[], node1=[])(Image: runtests.svg)for the runtests.jl, ARGS are used to filter the targets and to set the first one to test.~/.julia/dev/Jive/test $ julia --color=yes runtests.jl jive/s jive/m start=3\n1/5 jive/mockup/mockup.jl --\n2/5 jive/mockup/warn-replacing-mock.jl --\n3/5 jive/skip/skip-calls.jl\n    Pass 2  (0.26 seconds)\n4/5 jive/skip/skip-functions.jl\n    Pass 4  (0.01 seconds)\n5/5 jive/skip/skip.jl\n    Pass 4  (0.01 seconds)\n✅  All 10 tests have been completed.  (0.57 seconds)in the above example, test files are matched for only have jive/s jive/m and jump up to the 3rd file."
},

{
    "location": "runtests/#Examples-1",
    "page": "runtests",
    "title": "Examples",
    "category": "section",
    "text": "run tests~/.julia/dev/Jive/test $ julia --color=yes runtests.jlrun tests with target directory.~/.julia/dev/Jive/test $ julia --color=yes runtests.jl jive/Ifdistributed run tests with -p~/.julia/dev/Jive/test $ julia --color=yes -p1 runtests.jldistributed run tests for Pkg.test(), using JIVE_PROCS ENV.~/.julia/dev/Jive $ JIVE_PROCS=2 julia --color=yes --project=. -e \'using Pkg; Pkg.test()\'\n\n~/.julia/dev/Jive $ julia --color=yes --project=. -e \'ENV[\"JIVE_PROCS\"]=\"2\"; using Pkg; Pkg.test()\'"
},

{
    "location": "watch/#",
    "page": "watch",
    "title": "watch",
    "category": "page",
    "text": ""
},

{
    "location": "watch/#Jive.watch",
    "page": "watch",
    "title": "Jive.watch",
    "category": "function",
    "text": "watch(callback::Function, dir::String; targets=ARGS, sources::Union{Vector{Any},Vector{String}}=[])\n\nwatch the folders.\n\n\n\n\n\n"
},

{
    "location": "watch/#Jive.stop",
    "page": "watch",
    "title": "Jive.stop",
    "category": "function",
    "text": "Jive.stop(::typeof(watch))\n\nstop watching folders.\n\n\n\n\n\n"
},

{
    "location": "watch/#watch-1",
    "page": "watch",
    "title": "watch",
    "category": "section",
    "text": "watch the folders.Jive.watch\nJive.stop~/.julia/dev/Jive/test/Example/test $ cat runtests.jl\nusing Jive\nruntests(@__DIR__, skip=[\"revise.jl\"])\n\n~/.julia/dev/Jive/test/Example/test $ cat revise.jl\nusing Revise, Jive\nusing Example\nwatch(@__DIR__, sources=[pathof(Example)]) do path\n    @info :changed path\n    revise()\n    runtests(@__DIR__, skip=[\"revise.jl\"])\nend\n# Jive.stop(watch)\n\n~/.julia/dev/Jive/test/Example/test $ julia --project=.. -q -i revise.jl example\nwatching folders ...\n  - example\n  - ../srcwhen saving any files in the watching folders, it automatically run tests.julia> ┌ Info: changed\n└   path = \"../src/Example.jl\"\n1/1 example/test1.jl\n    Pass 1  (0.26 seconds)\n✅  All 1 test has been completed.  (0.55 seconds)\n┌ Info: changed\n└   path = \"example/test1.jl\"\n1/1 example/test1.jl\n    Pass 1  (0.00 seconds)\n✅  All 1 test has been completed.  (0.00 seconds)to stop watchingjulia> Jive.stop(watch)\nstopped watching folders."
},

{
    "location": "skip/#",
    "page": "@skip",
    "title": "@skip",
    "category": "page",
    "text": ""
},

{
    "location": "skip/#Jive.@skip",
    "page": "@skip",
    "title": "Jive.@skip",
    "category": "macro",
    "text": "@skip\n\nskip the expression.\n\n\n\n\n\n"
},

{
    "location": "skip/#Jive.Skipped",
    "page": "@skip",
    "title": "Jive.Skipped",
    "category": "module",
    "text": "Skipped\n\nSkipped expressions are in Skipped.expressions\n\n\n\n\n\n"
},

{
    "location": "skip/#@skip-1",
    "page": "@skip",
    "title": "@skip",
    "category": "section",
    "text": "skip the expression.Jive.@skip\nJive.Skippedtest/jive/skipusing Jive # @skip\n\n@skip module want_to_skip_this_module\nsleep(2)\nend\n\n@skip function want_to_skip_this_function()\nsleep(2)\nend\n\n@skip println(1+2)Change to do not skip the code: ENV[\"JIVE_SKIP\"] = \"0\""
},

{
    "location": "onlyonce/#",
    "page": "@onlyonce",
    "title": "@onlyonce",
    "category": "page",
    "text": ""
},

{
    "location": "onlyonce/#Jive.@onlyonce",
    "page": "@onlyonce",
    "title": "Jive.@onlyonce",
    "category": "macro",
    "text": "@onlyonce(block)\n\nused to run the block only once.\n\n\n\n\n\n"
},

{
    "location": "onlyonce/#@onlyonce-1",
    "page": "@onlyonce",
    "title": "@onlyonce",
    "category": "section",
    "text": "used to run the block only once.Jive.@onlyonceusing Jive # @onlyonce\n\n@onlyonce begin\n    println(42)\nend"
},

{
    "location": "If/#",
    "page": "@If",
    "title": "@If",
    "category": "page",
    "text": ""
},

{
    "location": "If/#Jive.@If",
    "page": "@If",
    "title": "Jive.@If",
    "category": "macro",
    "text": "@If(condition::Expr, expr::Expr)\n\nevaluate the expr by the condition.\n\n\n\n\n\n"
},

{
    "location": "If/#@If-1",
    "page": "@If",
    "title": "@If",
    "category": "section",
    "text": "evaluate the module by the condition.Jive.@Ifusing Jive # @If\n@If VERSION >= v\"1.1.0-DEV.764\" module load_some_module\nend"
},

{
    "location": "useinside/#",
    "page": "@useinside",
    "title": "@useinside",
    "category": "page",
    "text": ""
},

{
    "location": "useinside/#Jive.@useinside",
    "page": "@useinside",
    "title": "Jive.@useinside",
    "category": "macro",
    "text": "@useinside(expr::Expr)\n\nuse inside of the module.\n\n\n\n\n\n"
},

{
    "location": "useinside/#@useinside-1",
    "page": "@useinside",
    "title": "@useinside",
    "category": "section",
    "text": "use inside of the module.Jive.@useinsideusing Jive # @useinside\n@useinside module test_pkgs_flux_optimise\n# ...\nend"
},

{
    "location": "mockup/#",
    "page": "@mockup",
    "title": "@mockup",
    "category": "page",
    "text": ""
},

{
    "location": "mockup/#Jive.Mock",
    "page": "@mockup",
    "title": "Jive.Mock",
    "category": "module",
    "text": "Mock\n\nThe Mock store for mocked modules.\n\n\n\n\n\n"
},

{
    "location": "mockup/#Jive.@mockup",
    "page": "@mockup",
    "title": "Jive.@mockup",
    "category": "macro",
    "text": "@mockup\n\nused to produce a replica from the other module.\n\n\n\n\n\n"
},

{
    "location": "mockup/#@mockup-1",
    "page": "@mockup",
    "title": "@mockup",
    "category": "section",
    "text": "used to produce a replica from the other module.Jive.Mock\nJive.@mockuptest/jive/mockupusing Jive # Mock @mockup\nusing Test\n\nmodule Goods\nstruct Foo\nend\nfunction f(::Foo)\n    10\nend\nfunction g(::Foo)\n    10\nend\nend # module Goods\n\n\n@mockup module Goods\nfunction f(::Foo)\n    20\nend\nend # @mockup module Goods\n@test Goods.f(Goods.Foo()) == 10\n@test Mock.Goods.f(Mock.Goods.Foo()) == 20\n@test Mock.Goods.g(Mock.Goods.Foo()) == 10\n\n\nGoods3 = @mockup module Goods\nfunction g(::Foo)\n    30\nend\nend # @mockup module Goods\n@test Goods.f(Goods.Foo()) == 10\n@test Mock.Goods.f(Mock.Goods.Foo()) == 10\n@test Mock.Goods.g(Mock.Goods.Foo()) == 30\n@test Goods3 isa Module\n@test Goods3.g === Mock.Goods.g"
},

]}
