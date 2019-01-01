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
    "text": "Jive.jl is a Julia package to help the writing tests.@mockup the modules\n@onlyonce run\n@skip the code\n@If module\nruntests"
},

{
    "location": "#@mockup-1",
    "page": "Home",
    "title": "@mockup",
    "category": "section",
    "text": "test/jive/mockupusing Jive # Mock @mockup\nusing Test\n\nmodule Goods\nstruct Foo\nend\nfunction f(::Foo)\n    10\nend\nfunction g(::Foo)\n    10\nend\nend # module Goods\n\n\n@mockup module Goods\nfunction f(::Foo)\n    20\nend\nend # @mockup module Goods\n@test Goods.f(Goods.Foo()) == 10\n@test Mock.Goods.f(Mock.Goods.Foo()) == 20\n@test Mock.Goods.g(Mock.Goods.Foo()) == 10\n\n\nGoods3 = @mockup module Goods\nfunction g(::Foo)\n    30\nend\nend # @mockup module Goods\n@test Goods.f(Goods.Foo()) == 10\n@test Mock.Goods.f(Mock.Goods.Foo()) == 10\n@test Mock.Goods.g(Mock.Goods.Foo()) == 30\n@test Goods3 isa Module\n@test Goods3.g === Mock.Goods.g"
},

{
    "location": "#@onlyonce-1",
    "page": "Home",
    "title": "@onlyonce",
    "category": "section",
    "text": "test/jive/onlyonceusing Jive # @onlyonce\n\n@onlyonce begin\n    println(42)\nend"
},

{
    "location": "#@skip-1",
    "page": "Home",
    "title": "@skip",
    "category": "section",
    "text": "test/jive/skipusing Jive # @skip\n\n@skip module want_to_skip_this_module\nsleep(2)\nend\n\n@skip function want_to_skip_this_function()\nsleep(2)\nend\n\n@skip println(1+2)\n\nJive.Skipped.modules\nJive.Skipped.functions\nJive.Skipped.callsDo not skip the code: ENV[\"JIVE_SKIP\"] = \"0\""
},

{
    "location": "#@If-1",
    "page": "Home",
    "title": "@If",
    "category": "section",
    "text": "test/jive/Ifusing Jive # @If\n@If VERSION >= v\"1.1.0-DEV.764\" module load_some_module\nend"
},

{
    "location": "#runtests-1",
    "page": "Home",
    "title": "runtests",
    "category": "section",
    "text": "test/runtests.jlusing Jive # runtests\nruntests(@__DIR__)(Image: runtests.svg)"
},

]}
