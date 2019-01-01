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
    "text": "Jive.jl is a Julia package to help the writing tests.runtests\n@skip\n@onlyonce\n@If\n@mockup"
},

{
    "location": "#runtests-1",
    "page": "Home",
    "title": "runtests",
    "category": "section",
    "text": "run the test files from the specific directory.test/runtests.jlusing Jive # runtests\nruntests(@__DIR__)(Image: runtests.svg)"
},

{
    "location": "#@skip-1",
    "page": "Home",
    "title": "@skip",
    "category": "section",
    "text": "skip a module, function, or call.test/jive/skipusing Jive # @skip\n\n@skip module want_to_skip_this_module\nsleep(2)\nend\n\n@skip function want_to_skip_this_function()\nsleep(2)\nend\n\n@skip println(1+2)\n\nJive.Skipped.modules\nJive.Skipped.functions\nJive.Skipped.callsChange to don\'t skip the code: set ENV[\"JIVE_SKIP\"] = \"0\""
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
    "text": "runtests(dir::String)\n\nrun the test files from the specific directory.\n\n\n\n\n\n"
},

{
    "location": "runtests/#runtests-1",
    "page": "runtests",
    "title": "runtests",
    "category": "section",
    "text": "run the test files from the specific directory.Jive.runtestsusing Jive # runtests\nruntests(@__DIR__)(Image: runtests.svg)"
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
    "text": "@skip\n\nskip a module, function, or call.\n\n\n\n\n\n"
},

{
    "location": "skip/#Jive.Skipped",
    "page": "@skip",
    "title": "Jive.Skipped",
    "category": "module",
    "text": "Skipped\n\nSkipped symbols are in Skipped.modules, Skipped.functions, Skipped.calls\n\n\n\n\n\n"
},

{
    "location": "skip/#@skip-1",
    "page": "@skip",
    "title": "@skip",
    "category": "section",
    "text": "skip a module, function, or call.Jive.@skip\nJive.Skippedtest/jive/skipusing Jive # @skip\n\n@skip module want_to_skip_this_module\nsleep(2)\nend\n\n@skip function want_to_skip_this_function()\nsleep(2)\nend\n\n@skip println(1+2)\n\nJive.Skipped.modules\nJive.Skipped.functions\nJive.Skipped.callsChange to don\'t skip the code: ENV[\"JIVE_SKIP\"] = \"0\""
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
