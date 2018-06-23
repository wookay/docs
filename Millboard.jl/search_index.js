var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Home",
    "title": "Home",
    "category": "page",
    "text": ""
},

{
    "location": "#Millboard-1",
    "page": "Home",
    "title": "Millboard",
    "category": "section",
    "text": "Get julia data in a tablized format to arrange into rows and columns of cells."
},

{
    "location": "#Example-1",
    "page": "Home",
    "title": "Example",
    "category": "section",
    "text": "julia> using Millboard\n\njulia> board = [11 12 13; 21 22 23]\n2×3 Array{Int64,2}:\n 11  12  13\n 21  22  23table(x) displays the data into the Markdown format.julia> table(board)\n|   |  1 |  2 |  3 |\n|---|----|----|----|\n| 1 | 11 | 12 | 13 |\n| 2 | 21 | 22 | 23 |\n\njulia> table(board, colnames=[\"x\" \"y\" \"z\"], rownames=[\"A\" \"B\"])\n|   |  x |  y |  z |\n|---|----|----|----|\n| A | 11 | 12 | 13 |\n| B | 21 | 22 | 23 |Millboard.set_table_mode : to change the display mode\n:markdown (default)\n:gridjulia> Millboard.set_table_mode(:grid)\nMillboard.TableMode(:grid, \'+\', \'=\')\n\njulia> board = ([1 2], [5 6; 7 8], [9 10; 11 12])\n([1 2], [5 6; 7 8], [9 10; 11 12])\n\njulia> table(board, colnames=[\"result\"], rownames=[\"x\" \"y\" \"z\"])\n+---+--------+\n|   | result |\n+===+========+\n| x |    1 2 |\n+---+--------+\n|   |    5 6 |\n| y |    7 8 |\n+---+--------+\n|   |   9 10 |\n| z |  11 12 |\n+---+--------+"
},

{
    "location": "#Example-strings-1",
    "page": "Home",
    "title": "Example - strings",
    "category": "section",
    "text": "julia> board = [\"Lorem ipsum\\ndolor sit amet\" 42]\n1×2 Array{Any,2}:\n \"Lorem ipsum\\ndolor sit amet\"  42\n\njulia> Millboard.set_table_mode(:markdown)\nMillboard.TableMode(:markdown, \'|\', \'-\')\n\njulia> table(board, colnames=[\"first column\"], rownames=[\"first row\"])\n|           |   first column |  2 |\n|-----------|----------------|----|\n|           |    Lorem ipsum | 42 |\n| first row | dolor sit amet |    |"
},

{
    "location": "#Example-Dict-1",
    "page": "Home",
    "title": "Example - Dict",
    "category": "section",
    "text": "julia> Millboard.set_table_mode(:grid)\nMillboard.TableMode(:grid, \'+\', \'=\')\n\njulia> board = Dict(\"1x3\"=>[1 2 3], \"2x3\"=>[1 2 3; 4 5 6], \"3x1\"=> [1; 2; 3])\nDict{String,Array{Int64,N} where N} with 3 entries:\n  \"3x1\" => [1, 2, 3]\n  \"2x3\" => [1 2 3; 4 5 6]\n  \"1x3\" => [1 2 3]\n\njulia> table(board)\n+-----+-------+\n| KEY | VALUE |\n+=====+=======+\n| 1x3 | 1 2 3 |\n+-----+-------+\n|     | 1 2 3 |\n| 2x3 | 4 5 6 |\n+-----+-------+\n|     |     1 |\n|     |     2 |\n| 3x1 |     3 |\n+-----+-------+"
},

{
    "location": "#Install-1",
    "page": "Home",
    "title": "Install",
    "category": "section",
    "text": "λ ~$ julia\n               _\n   _       _ _(_)_     |  A fresh approach to technical computing\n  (_)     | (_) (_)    |  Documentation: https://docs.julialang.org\n   _ _   _| |_  __ _   |  Type \"?help\" for help.\n  | | | | | | |/ _` |  |\n  | | |_| | | | (_| |  |  Version 0.6.0 (2017-06-19 13:05 UTC)\n _/ |\\__\'_|_|_|\\__\'_|  |  Official http://julialang.org/ release\n|__/                   |  x86_64-apple-darwin13.4.0\n\njulia> Pkg.add(\"Millboard\")\n\njulia> Pkg.checkout(\"Millboard\", \"master\")"
},

]}
