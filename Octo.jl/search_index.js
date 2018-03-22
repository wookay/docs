var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Home",
    "title": "Home",
    "category": "page",
    "text": ""
},

{
    "location": "#Octo.jl-Documentation-1",
    "page": "Home",
    "title": "Octo.jl Documentation",
    "category": "section",
    "text": "Octo.jl 🐙  is an SQL Query DSL in Julia.It\'s influenced by Ecto.julia> using Octo.Adapters.SQL\n\njulia> struct User\n       end\n\njulia> Schema.model(User, table_name=\"users\")\n\"users\"\n\njulia> u = from(User)\nOcto.FromClause(User, nothing)\n\njulia> [SELECT * FROM u]\nSELECT * FROM users\n\njulia> [SELECT * FROM u WHERE u.id == 2]\nSELECT * FROM users WHERE id = 2\n\njulia> to_sql([SELECT * FROM u WHERE u.id == 2])\n\"SELECT * FROM users WHERE id = 2\""
},

{
    "location": "Repo/#",
    "page": "Repo",
    "title": "Repo",
    "category": "page",
    "text": ""
},

{
    "location": "Repo/#Repo-1",
    "page": "Repo",
    "title": "Repo",
    "category": "section",
    "text": "Repo.config\nRepo.all\nRepo.get\nRepo.insert!\nRepo.update!\nRepo.delete!\nRepo.query\nRepo.execute\nRepo.disconnect\nRepo.set_log_level"
},

{
    "location": "Schema/#",
    "page": "Schema",
    "title": "Schema",
    "category": "page",
    "text": ""
},

{
    "location": "Schema/#Schema-1",
    "page": "Schema",
    "title": "Schema",
    "category": "section",
    "text": "Schema.model"
},

{
    "location": "Queryable/#",
    "page": "Queryable",
    "title": "Queryable",
    "category": "page",
    "text": ""
},

{
    "location": "Queryable/#Queryable-1",
    "page": "Queryable",
    "title": "Queryable",
    "category": "section",
    "text": "from\nas"
},

{
    "location": "AdapterBase/#",
    "page": "AdapterBase",
    "title": "AdapterBase",
    "category": "page",
    "text": ""
},

{
    "location": "AdapterBase/#AdapterBase-1",
    "page": "AdapterBase",
    "title": "AdapterBase",
    "category": "section",
    "text": ""
},

{
    "location": "AdapterBase/#@keywords-1",
    "page": "AdapterBase",
    "title": "@keywords",
    "category": "section",
    "text": "AND AS ASC BY CREATE DATABASE DELETE DESC DISTINCT DROP EXISTS FROM FULL GROUP HAVING IF INNER INSERT INTO IS JOIN LEFT LIKE LIMIT NOT NULL OFFSET ON OR ORDER OUTER RIGHT SELECT SET TABLE UPDATE USING VALUES WHERE"
},

{
    "location": "AdapterBase/#@aggregates-1",
    "page": "AdapterBase",
    "title": "@aggregates",
    "category": "section",
    "text": "AVG COUNT SUM"
},

{
    "location": "adapters/SQL/#",
    "page": "Octo.Adapters.SQL",
    "title": "Octo.Adapters.SQL",
    "category": "page",
    "text": ""
},

{
    "location": "adapters/SQL/#Octo.Adapters.SQL-1",
    "page": "Octo.Adapters.SQL",
    "title": "Octo.Adapters.SQL",
    "category": "section",
    "text": "to_sql"
},

]}
