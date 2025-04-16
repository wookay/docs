var documenterSearchIndex = {"docs":
[{"location":"REPL/#@__REPL__","page":"@__REPL__","title":"@__REPL__","text":"","category":"section"},{"location":"REPL/","page":"@__REPL__","title":"@__REPL__","text":"Jive.@__REPL__","category":"page"},{"location":"REPL/#Jive.@__REPL__","page":"@__REPL__","title":"Jive.@__REPL__","text":"@__REPL__\n\n\n\n\n\n","category":"macro"},{"location":"REPL/","page":"@__REPL__","title":"@__REPL__","text":"test/jive/__REPL__","category":"page"},{"location":"REPL/","page":"@__REPL__","title":"@__REPL__","text":"~/.julia/dev/Jive/test/jive/__REPL__ $ cat test.jl\nusing Jive\n\na = 1\n\n@__REPL__\n\n@info :a a\n~/.julia/dev/Jive/test/jive/__REPL__ $ julia test.jl\njulia> a += 2\n3\n\njulia> ^D  # Ctrl + D to exit the REPL\n┌ Info: a\n└   a = 3","category":"page"},{"location":"sprints/#sprints","page":"sprints","title":"sprints","text":"","category":"section"},{"location":"sprints/","page":"sprints","title":"sprints","text":"Jive.sprint_plain\nJive.sprint_colored","category":"page"},{"location":"sprints/#Jive.sprint_plain","page":"sprints","title":"Jive.sprint_plain","text":"sprint_plain(x)::String\n\nget Base.show output of the x\n\n\n\n\n\n","category":"function"},{"location":"sprints/#Jive.sprint_colored","page":"sprints","title":"Jive.sprint_colored","text":"sprint_colored(x)::String\n\nget Base.show output of the x with color\n\n\n\n\n\n","category":"function"},{"location":"delete/#Jive.delete","page":"Jive.delete","title":"Jive.delete","text":"","category":"section"},{"location":"delete/","page":"Jive.delete","title":"Jive.delete","text":"Jive.delete","category":"page"},{"location":"delete/#Jive.delete","page":"Jive.delete","title":"Jive.delete","text":"Jive.delete(@nospecialize(f), @nospecialize(types::Type{T}) = Tuple{}) where T <: Tuple\n\nMake function f uncallable. same for Base.delete_method(only(methods(f, types)))\n\n\n\n\n\n","category":"function"},{"location":"onlyonce/#@onlyonce","page":"@onlyonce","title":"@onlyonce","text":"","category":"section"},{"location":"onlyonce/","page":"@onlyonce","title":"@onlyonce","text":"used to run the block only once.","category":"page"},{"location":"onlyonce/","page":"@onlyonce","title":"@onlyonce","text":"Jive.@onlyonce","category":"page"},{"location":"onlyonce/#Jive.@onlyonce","page":"@onlyonce","title":"Jive.@onlyonce","text":"@onlyonce(block)\n\nused to run the block only once.\n\n\n\n\n\n","category":"macro"},{"location":"onlyonce/","page":"@onlyonce","title":"@onlyonce","text":"using Jive # @onlyonce\n\nfor _ in 1:10\n    @onlyonce begin\n        println(42)\n    end\n    @onlyonce(println(\"hello\"))\nend","category":"page"},{"location":"skip/#@skip","page":"@skip","title":"@skip","text":"","category":"section"},{"location":"skip/","page":"@skip","title":"@skip","text":"skip the expression.","category":"page"},{"location":"skip/","page":"@skip","title":"@skip","text":"Jive.@skip\nJive.Skipped","category":"page"},{"location":"skip/#Jive.@skip","page":"@skip","title":"Jive.@skip","text":"@skip\n\nskip the expression.\n\n\n\n\n\n","category":"macro"},{"location":"skip/#Jive.Skipped","page":"@skip","title":"Jive.Skipped","text":"Skipped\n\nSkipped expressions are in Skipped.expressions\n\n\n\n\n\n","category":"module"},{"location":"skip/","page":"@skip","title":"@skip","text":"test/jive/skip","category":"page"},{"location":"skip/","page":"@skip","title":"@skip","text":"using Jive # @skip\n\n@skip module want_to_skip_this_module\nsleep(2)\nend\n\n@skip function want_to_skip_this_function()\nsleep(2)\nend\n\n@skip println(1+2)","category":"page"},{"location":"skip/","page":"@skip","title":"@skip","text":"Change to do not skip the code: ENV[\"JIVE_SKIP\"] = \"0\"","category":"page"},{"location":"If/#@If","page":"@If","title":"@If","text":"","category":"section"},{"location":"If/","page":"@If","title":"@If","text":"evaluate the module by the condition.","category":"page"},{"location":"If/","page":"@If","title":"@If","text":"Jive.@If","category":"page"},{"location":"If/#Jive.@If","page":"@If","title":"Jive.@If","text":"@If(condition::Expr, expr::Expr)\n\nevaluate the expr by the condition.\n\n\n\n\n\n","category":"macro"},{"location":"If/","page":"@If","title":"@If","text":"using Jive # @If\n@If VERSION >= v\"1.1.0-DEV.764\" module load_some_module\nend","category":"page"},{"location":"watch/#watch","page":"watch","title":"watch","text":"","category":"section"},{"location":"watch/","page":"watch","title":"watch","text":"watch the folders.","category":"page"},{"location":"watch/","page":"watch","title":"watch","text":"Jive.watch\nJive.stop","category":"page"},{"location":"watch/#Jive.watch","page":"watch","title":"Jive.watch","text":"watch(callback::Function, dir::String; targets=ARGS, sources::Union{Vector{Any},Vector{String}}=[])\n\nwatch the folders.\n\n\n\n\n\n","category":"function"},{"location":"watch/#Jive.stop","page":"watch","title":"Jive.stop","text":"Jive.stop(::typeof(watch))\n\nstop watching folders.\n\n\n\n\n\n","category":"function"},{"location":"watch/","page":"watch","title":"watch","text":"~/.julia/dev/Jive/test/Example/test $ cat runtests.jl\nusing Jive\nruntests(@__DIR__, skip=[\"revise.jl\"])\n\n~/.julia/dev/Jive/test/Example/test $ cat revise.jl\n# julia -i -q --project=. revise.jl example\n\nusing Revise, Jive\nusing Example\nwatch(@__DIR__, sources=[pathof(Example)]) do path\n    @info :changed path\n    revise()\n    runtests(@__DIR__, skip=[\"revise.jl\"])\nend\n# Jive.stop(watch)\n\n~/.julia/dev/Jive/test/Example/test $ julia -e 'using Pkg; pkg\"dev Revise ..\"'\n\n~/.julia/dev/Jive/test/Example/test $ julia --project=. -q -i revise.jl example\nwatching folders ...\n  - ../src\n  - example","category":"page"},{"location":"watch/","page":"watch","title":"watch","text":"when saving any files in the watching folders, it automatically run tests.","category":"page"},{"location":"watch/","page":"watch","title":"watch","text":"julia> ┌ Info: changed\n└   path = \"../src/Example.jl\"\n1/1 example/test1.jl\n    Pass 1  (0.26 seconds)\n✅  All 1 test has been completed.  (0.55 seconds)\n┌ Info: changed\n└   path = \"example/test1.jl\"\n1/1 example/test1.jl\n    Pass 1  (0.00 seconds)\n✅  All 1 test has been completed.  (0.00 seconds)","category":"page"},{"location":"watch/","page":"watch","title":"watch","text":"to stop watching","category":"page"},{"location":"watch/","page":"watch","title":"watch","text":"julia> Jive.stop(watch)\nstopped watching folders.","category":"page"},{"location":"END/#@__END__","page":"@__END__","title":"@__END__","text":"","category":"section"},{"location":"END/","page":"@__END__","title":"@__END__","text":"throw(Jive.EndError())","category":"page"},{"location":"END/","page":"@__END__","title":"@__END__","text":"Jive.@__END__","category":"page"},{"location":"END/#Jive.@__END__","page":"@__END__","title":"Jive.@__END__","text":"@__END__\n\nthrow(Jive.EndError())\n\n\n\n\n\n","category":"macro"},{"location":"#Jive.jl","page":"Home","title":"Jive.jl 👣","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"https://github.com/wookay/Jive.jl","category":"page"},{"location":"","page":"Home","title":"Home","text":"Jive.jl is a Julia package to help the writing tests.","category":"page"},{"location":"","page":"Home","title":"Home","text":"☕️  You can make a donation to support this project.","category":"page"},{"location":"","page":"Home","title":"Home","text":"runtests\nwatch\n@skip\n@onlyonce\n@If\n@useinside\n@__END__\n@__REPL__\nJive.delete\nsprints","category":"page"},{"location":"#runtests","page":"Home","title":"runtests","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"run the test files in a specific directory and path.","category":"page"},{"location":"","page":"Home","title":"Home","text":"suppose you have some test files in the test/ directory for your package. now let's make your test/runtests.jl with","category":"page"},{"location":"","page":"Home","title":"Home","text":"using Jive\nruntests(@__DIR__)","category":"page"},{"location":"","page":"Home","title":"Home","text":"(Image: runtests.svg)","category":"page"},{"location":"","page":"Home","title":"Home","text":"for the runtests.jl, ARGS are used to filter the targets and to set the start offset of the tests.","category":"page"},{"location":"","page":"Home","title":"Home","text":"~/.julia/dev/Jive/test $ julia runtests.jl jive/s start=3\n1/4 jive/skip/skip-calls.jl --\n2/4 jive/skip/skip-exprs.jl --\n3/4 jive/skip/skip-functions.jl\n    Pass 4  (0.40 seconds)\n4/4 jive/skip/skip-modules.jl\n    Pass 4  (0.01 seconds)\n✅  All 8 tests have been completed.  (0.62 seconds)","category":"page"},{"location":"","page":"Home","title":"Home","text":"in the above example, test files are matched for only have jive/s and jumping up to the 3rd file.","category":"page"},{"location":"#Examples","page":"Home","title":"Examples","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"run tests","category":"page"},{"location":"","page":"Home","title":"Home","text":"~/.julia/dev/Jive/test $ julia runtests.jl","category":"page"},{"location":"","page":"Home","title":"Home","text":"run tests with target directory.","category":"page"},{"location":"","page":"Home","title":"Home","text":"~/.julia/dev/Jive/test $ julia runtests.jl jive/If","category":"page"},{"location":"","page":"Home","title":"Home","text":"distributed run tests with -p","category":"page"},{"location":"","page":"Home","title":"Home","text":"~/.julia/dev/Jive/test $ julia -p3 runtests.jl","category":"page"},{"location":"","page":"Home","title":"Home","text":"distributed run tests for Pkg.test(), using JIVE_PROCS ENV.","category":"page"},{"location":"","page":"Home","title":"Home","text":"~/.julia/dev/Jive $ JIVE_PROCS=2 julia --project=. -e 'using Pkg; Pkg.test()'\n\n~/.julia/dev/Jive $ julia --project=. -e 'ENV[\"JIVE_PROCS\"]=\"2\"; using Pkg; Pkg.test()'","category":"page"},{"location":"","page":"Home","title":"Home","text":"TestJive.jl is an example package for using Jive. look at also the Project.toml file for your own package.","category":"page"},{"location":"","page":"Home","title":"Home","text":"[extras]\nTest = \"8dfed614-e22c-5e08-85e1-65c5234f0b40\"\nJive = \"ba5e3d4b-8524-549f-bc71-e76ad9e9deed\"\n\n[targets]\ntest = [\"Test\", \"Jive\"]","category":"page"},{"location":"#Watch-package-folders","page":"Home","title":"Watch package folders","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"You may need to install Revise.jl.","category":"page"},{"location":"","page":"Home","title":"Home","text":"~/.julia/dev/Jive/test/Example/test $ cat runtests.jl\nusing Jive\nruntests(@__DIR__, skip=[\"revise.jl\"])\n\n~/.julia/dev/Jive/test/Example/test $ cat revise.jl\n# julia -i -q --project=. revise.jl example\n\nusing Revise, Jive\nusing Example\n\ntrigger = function (path)\n    printstyled(\"changed \", color=:cyan)\n    println(path)\n    revise()\n    runtests(@__DIR__, skip=[\"revise.jl\"])\nend\n\nwatch(trigger, @__DIR__, sources=[pathof(Example)])\ntrigger(\"\")\n\nBase.JLOptions().isinteractive==0 && wait()\n\n~/.julia/dev/Jive/test/Example/test $ julia -e 'using Pkg; pkg\"dev Revise ..\"'\n\n~/.julia/dev/Jive/test/Example/test $ julia -i -q --project=. revise.jl example\nwatching folders ...\n  - ../src\n  - example\nchanged\n1/1 example/test1.jl\n    Pass 1  (0.27 seconds)\n✅  All 1 test has been completed.  (0.55 seconds)","category":"page"},{"location":"","page":"Home","title":"Home","text":"when saving any files in the watching folders, it automatically run tests.","category":"page"},{"location":"#@skip","page":"Home","title":"@skip","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"skip the expression.","category":"page"},{"location":"","page":"Home","title":"Home","text":"test/jive/skip","category":"page"},{"location":"","page":"Home","title":"Home","text":"using Jive # @skip\n\n@skip module want_to_skip_this_module\nsleep(2)\nend\n\n@skip function want_to_skip_this_function()\nsleep(2)\nend\n\n@skip println(1+2)","category":"page"},{"location":"","page":"Home","title":"Home","text":"Change to do not skip the code: set ENV[\"JIVE_SKIP\"] = \"0\"","category":"page"},{"location":"#@onlyonce","page":"Home","title":"@onlyonce","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"used to run the block only once.","category":"page"},{"location":"","page":"Home","title":"Home","text":"test/jive/onlyonce","category":"page"},{"location":"","page":"Home","title":"Home","text":"using Jive # @onlyonce\n\nfor _ in 1:10\n    @onlyonce begin\n        println(42)\n    end\n    @onlyonce(println(\"hello\"))\nend","category":"page"},{"location":"#@If","page":"Home","title":"@If","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"evaluate the module by the condition.","category":"page"},{"location":"","page":"Home","title":"Home","text":"test/jive/If","category":"page"},{"location":"","page":"Home","title":"Home","text":"using Jive # @If\n@If VERSION >= v\"1.1.0-DEV.764\" module load_some_module\nend","category":"page"},{"location":"#@useinside","page":"Home","title":"@useinside","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"use inside of the module.","category":"page"},{"location":"","page":"Home","title":"Home","text":"using Jive # @useinside\n@useinside module test_pkgs_flux_optimise\n# ...\nend","category":"page"},{"location":"#@__END__","page":"Home","title":"@__END__","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"throw(Jive.EndError())","category":"page"},{"location":"","page":"Home","title":"Home","text":"test/jive/__END__","category":"page"},{"location":"","page":"Home","title":"Home","text":"using Jive\n@__END__","category":"page"},{"location":"#@__REPL__","page":"Home","title":"@__REPL__","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"test/jive/__REPL__","category":"page"},{"location":"","page":"Home","title":"Home","text":"~/.julia/dev/Jive/test/jive/__REPL__ $ cat test.jl\nusing Jive\n\na = 1\n\n@__REPL__\n\n@info :a a\n~/.julia/dev/Jive/test/jive/__REPL__ $ julia test.jl\njulia> a += 2\n3\n\njulia> ^D  # Ctrl + D to exit the REPL\n┌ Info: a\n└   a = 3","category":"page"},{"location":"#Jive.delete","page":"Home","title":"Jive.delete","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"Make function f uncallable. same for Base.delete_method(only(methods(f, types)))","category":"page"},{"location":"#sprints","page":"Home","title":"sprints","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"sprint_plain : get Base.show output of the x\nsprint_colored : get Base.show output of the x with color","category":"page"},{"location":"useinside/#@useinside","page":"@useinside","title":"@useinside","text":"","category":"section"},{"location":"useinside/","page":"@useinside","title":"@useinside","text":"use inside of the module.","category":"page"},{"location":"useinside/","page":"@useinside","title":"@useinside","text":"Jive.@useinside","category":"page"},{"location":"useinside/#Jive.@useinside","page":"@useinside","title":"Jive.@useinside","text":"@useinside(expr::Expr)\n\nuse inside of the module.\n\n\n\n\n\n","category":"macro"},{"location":"useinside/","page":"@useinside","title":"@useinside","text":"using Jive # @useinside\n@useinside module test_pkgs_flux_optimise\n# ...\nend","category":"page"},{"location":"runtests/#runtests","page":"runtests","title":"runtests","text":"","category":"section"},{"location":"runtests/","page":"runtests","title":"runtests","text":"run the test files in a specific directory and path.","category":"page"},{"location":"runtests/","page":"runtests","title":"runtests","text":"Jive.runtests","category":"page"},{"location":"runtests/#Jive.runtests","page":"runtests","title":"Jive.runtests","text":"runtests(dir::String ;\n         skip::Union{Vector{Any},Vector{String}} = String[],\n         node1::Union{Vector{Any},Vector{String}} = [],\n         targets::Vector{String} = ARGS,\n         testset::Union{Nothing, String, Vector{String}, Regex, Base.Callable} = nothing,\n         enable_distributed::Bool = true,\n         stop_on_failure::Bool = false,\n         context::Union{Nothing,Module} = nothing,\n         verbose::Bool = true)::Total\n\nrun the test files from the specific directory.\n\ndir: the root directory to traverse.\nskip: files or directories to skip.\nnode1: run on node 1 during for the distributed tests.\ntargets: filter targets and start. default is ARGS.\ntestset: filter testset. default is nothing.\nenable_distributed: option for distributed.\nstop_on_failure: stop on the failure or error.\ncontext: module that to be used in Base.include. nothing means to be safe that using anonymous module for every test file.\nverbose: print details of test execution\n\n\n\n\n\n","category":"function"},{"location":"runtests/","page":"runtests","title":"runtests","text":"suppose you have some test files in the test/ directory for your package. now let's make your test/runtests.jl with","category":"page"},{"location":"runtests/","page":"runtests","title":"runtests","text":"using Jive\nruntests(@__DIR__)","category":"page"},{"location":"runtests/","page":"runtests","title":"runtests","text":"(Image: runtests.svg)","category":"page"},{"location":"runtests/","page":"runtests","title":"runtests","text":"for the runtests.jl, ARGS are used to filter the targets and to set the start offset of the tests.","category":"page"},{"location":"runtests/","page":"runtests","title":"runtests","text":"~/.julia/dev/Jive/test $ julia runtests.jl jive/s start=3\n1/4 jive/skip/skip-calls.jl --\n2/4 jive/skip/skip-exprs.jl --\n3/4 jive/skip/skip-functions.jl\n    Pass 4  (0.40 seconds)\n4/4 jive/skip/skip-modules.jl\n    Pass 4  (0.01 seconds)\n✅  All 8 tests have been completed.  (0.62 seconds)","category":"page"},{"location":"runtests/","page":"runtests","title":"runtests","text":"in the above example, test files are matched for only have jive/s and jumping up to the 3rd file.","category":"page"},{"location":"runtests/#Examples","page":"runtests","title":"Examples","text":"","category":"section"},{"location":"runtests/","page":"runtests","title":"runtests","text":"run tests","category":"page"},{"location":"runtests/","page":"runtests","title":"runtests","text":"~/.julia/dev/Jive/test $ julia runtests.jl","category":"page"},{"location":"runtests/","page":"runtests","title":"runtests","text":"run tests with target directory.","category":"page"},{"location":"runtests/","page":"runtests","title":"runtests","text":"~/.julia/dev/Jive/test $ julia runtests.jl jive/If","category":"page"},{"location":"runtests/","page":"runtests","title":"runtests","text":"distributed run tests with -p","category":"page"},{"location":"runtests/","page":"runtests","title":"runtests","text":"~/.julia/dev/Jive/test $ julia -p3 runtests.jl","category":"page"},{"location":"runtests/","page":"runtests","title":"runtests","text":"distributed run tests for Pkg.test(), using JIVE_PROCS ENV.","category":"page"},{"location":"runtests/","page":"runtests","title":"runtests","text":"~/.julia/dev/Jive $ JIVE_PROCS=2 julia --project=. -e 'using Pkg; Pkg.test()'\n\n~/.julia/dev/Jive $ julia --project=. -e 'ENV[\"JIVE_PROCS\"]=\"2\"; using Pkg; Pkg.test()'","category":"page"},{"location":"runtests/","page":"runtests","title":"runtests","text":"TestJive.jl is an example package for using Jive. look at also the Project.toml file for your own package.","category":"page"},{"location":"runtests/","page":"runtests","title":"runtests","text":"[extras]\nTest = \"8dfed614-e22c-5e08-85e1-65c5234f0b40\"\nJive = \"ba5e3d4b-8524-549f-bc71-e76ad9e9deed\"\n\n[targets]\ntest = [\"Test\", \"Jive\"]","category":"page"},{"location":"runtests/#Watch-package-folders","page":"runtests","title":"Watch package folders","text":"","category":"section"},{"location":"runtests/","page":"runtests","title":"runtests","text":"You may need to install Revise.jl.","category":"page"},{"location":"runtests/","page":"runtests","title":"runtests","text":"~/.julia/dev/Jive/test/Example/test $ cat runtests.jl\nusing Jive\nruntests(@__DIR__, skip=[\"revise.jl\"])\n\n~/.julia/dev/Jive/test/Example/test $ cat revise.jl\n# julia -i -q --project=.. revise.jl example\n\nusing Revise, Jive\nusing Example\n\ntrigger = function (path)\n    printstyled(\"changed \", color=:cyan)\n    println(path)\n    revise()\n    runtests(@__DIR__, skip=[\"revise.jl\"])\nend\n\nwatch(trigger, @__DIR__, sources=[pathof(Example)])\ntrigger(\"\")\n\nBase.JLOptions().isinteractive==0 && wait()\n\n~/.julia/dev/Jive/test/Example/test $ julia -i -q --project=.. revise.jl example\nwatching folders ...\n  - ../src\n  - example\nchanged\n1/1 example/test1.jl\n    Pass 1  (0.27 seconds)\n✅  All 1 test has been completed.  (0.55 seconds)","category":"page"},{"location":"runtests/","page":"runtests","title":"runtests","text":"when saving any files in the watching folders, it automatically run tests.","category":"page"}]
}
