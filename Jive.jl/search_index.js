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
    "text": "@mockup (test/jive/mockup)using Jive # Mock @mockup\nusing Test\n\nmodule Goods\nstruct Foo\nend\nfunction f(::Foo)\n    10\nend\nfunction g(::Foo)\n    10\nend\nend # module Goods\n\n\n@mockup module Goods\nfunction f(::Foo)\n    20\nend\nend # @mockup module Goods\n@test Goods.f(Goods.Foo()) == 10\n@test Mock.Goods.f(Mock.Goods.Foo()) == 20\n@test Mock.Goods.g(Mock.Goods.Foo()) == 10\n\n\nGoods3 = @mockup module Goods\nfunction g(::Foo)\n    30\nend\nend # @mockup module Goods\n@test Goods.f(Goods.Foo()) == 10\n@test Mock.Goods.f(Mock.Goods.Foo()) == 10\n@test Mock.Goods.g(Mock.Goods.Foo()) == 30\n@test Goods3 isa Module\n@test Goods3.g === Mock.Goods.g@onlyonce (test/jive/onlyonce)using Jive # @onlyonce\n\n@onlyonce begin\n    println(42)\nend@skip (test/jive/skip)using Jive # @skip\n\nENV[\"JIVE_SKIP\"] = \"1\"   # \"0\"\n\n@skip module want_to_skip_this_module\nsleep(3)\nend\n\nJive.Skipped.modules@If (test/jive/If)using Jive # @If\n@If VERSION >= v\"1.1.0-DEV.764\" module load_some_module\nendruntests (test/runtests.jl)using Jive # runtests\nruntests(@__DIR__)(Image: runtests.svg)"
},

]}
