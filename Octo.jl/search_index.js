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
    "text": "Octo.jl 🐙  is an SQL Query DSL in Julia.It\'s influenced by Ecto."
},

{
    "location": "#SQL-Query-DSL-1",
    "page": "Home",
    "title": "SQL Query DSL",
    "category": "section",
    "text": "julia> using Octo.Adapters.SQL\n\njulia> struct User\n       end\n\njulia> Schema.model(User, table_name=\"users\")\nUser => Dict(:primary_key=>\"id\",:table_name=>\"users\")\n\njulia> u = from(User)\nOcto.FromClause(User, nothing)\n\njulia> [SELECT * FROM u]\nSELECT * FROM users\n\njulia> [SELECT * FROM u WHERE u.id == 2]\nSELECT * FROM users WHERE id = 2\n\njulia> to_sql([SELECT * FROM u WHERE u.id == 2])\n\"SELECT * FROM users WHERE id = 2\""
},

{
    "location": "#Repo-1",
    "page": "Home",
    "title": "Repo",
    "category": "section",
    "text": "Current supported databases: PostgreSQL(via LibPQ.jl), MySQL(via MySQL.jl), SQLite(via SQLite.jl)using Octo.Adapters.PostgreSQL\n\nstruct Employee\nend\nSchema.model(Employee, table_name = \"Employee\", primary_key = \"ID\")\n\nRepo.set_log_level(Repo.LogLevelDebugSQL)\n\nRepo.connect(\n    adapter = Octo.Adapters.PostgreSQL,\n    sink = Vector{<:NamedTuple}, # DataFrames.DataFrame\n    dbname = \"postgresqltest\",\n    user = \"postgres\",\n)\n\nRepo.all(Employee)\nRepo.get(Employee, 2)\nRepo.get(Employee, (Name=\"Tim\",))\nRepo.insert!(Employee, (Name=\"Tim\", Salary=15000.50))\nRepo.update!(Employee, (ID=2, Name=\"Chloe\", OfficeNo=56))\nRepo.delete!(Employee, (ID=2,))\n\nem = from(Employee)\nRepo.query([SELECT * FROM em WHERE em.Name == \"Tim\"])"
},

{
    "location": "Repo/#",
    "page": "Repo",
    "title": "Repo",
    "category": "page",
    "text": ""
},

{
    "location": "Repo/#Octo.Repo.connect",
    "page": "Repo",
    "title": "Octo.Repo.connect",
    "category": "function",
    "text": "Repo.connect(; adapter::Module, kwargs...)\n\n\n\n\n\n"
},

{
    "location": "Repo/#Octo.Repo.all",
    "page": "Repo",
    "title": "Octo.Repo.all",
    "category": "function",
    "text": "Repo.all(M::Type)\n\n\n\n\n\n"
},

{
    "location": "Repo/#Octo.Repo.get",
    "page": "Repo",
    "title": "Octo.Repo.get",
    "category": "function",
    "text": "Repo.get(M::Type, pk::Union{Int, String})\n\n\n\n\n\nRepo.get(M::Type, nt::NamedTuple)\n\n\n\n\n\n"
},

{
    "location": "Repo/#Octo.Repo.insert!",
    "page": "Repo",
    "title": "Octo.Repo.insert!",
    "category": "function",
    "text": "Repo.insert!(M::Type, nts::Vector{<:NamedTuple})\n\n\n\n\n\nRepo.insert!(M, nt::NamedTuple)\n\n\n\n\n\n"
},

{
    "location": "Repo/#Octo.Repo.update!",
    "page": "Repo",
    "title": "Octo.Repo.update!",
    "category": "function",
    "text": "Repo.update!(M::Type, nt::NamedTuple)\n\n\n\n\n\n"
},

{
    "location": "Repo/#Octo.Repo.delete!",
    "page": "Repo",
    "title": "Octo.Repo.delete!",
    "category": "function",
    "text": "Repo.delete!(M::Type, nt::NamedTuple)\n\n\n\n\n\n"
},

{
    "location": "Repo/#Octo.Repo.query",
    "page": "Repo",
    "title": "Octo.Repo.query",
    "category": "function",
    "text": "Repo.query(stmt::Structured)\n\n\n\n\n\n"
},

{
    "location": "Repo/#Octo.Repo.execute",
    "page": "Repo",
    "title": "Octo.Repo.execute",
    "category": "function",
    "text": "Repo.execute(stmt::Structured)\n\n\n\n\n\nRepo.execute(stmt::Structured, vals::Vector)\n\n\n\n\n\nRepo.execute(stmt::Structured, nts::Vector{<:NamedTuple})\n\n\n\n\n\n"
},

{
    "location": "Repo/#Octo.Repo.disconnect",
    "page": "Repo",
    "title": "Octo.Repo.disconnect",
    "category": "function",
    "text": "Repo.disconnect()\n\n\n\n\n\n"
},

{
    "location": "Repo/#Octo.Repo.set_log_level",
    "page": "Repo",
    "title": "Octo.Repo.set_log_level",
    "category": "function",
    "text": "Repo.set_log_level(level::RepoLogLevel)\n\n\n\n\n\n"
},

{
    "location": "Repo/#Repo-1",
    "page": "Repo",
    "title": "Repo",
    "category": "section",
    "text": "Repo.connect\nRepo.all\nRepo.get\nRepo.insert!\nRepo.update!\nRepo.delete!\nRepo.query\nRepo.execute\nRepo.disconnect\nRepo.set_log_level"
},

{
    "location": "Schema/#",
    "page": "Schema",
    "title": "Schema",
    "category": "page",
    "text": ""
},

{
    "location": "Schema/#Octo.Schema.model",
    "page": "Schema",
    "title": "Octo.Schema.model",
    "category": "function",
    "text": "model(M::Type; table_name::String, primary_key::String=\"id\")\n\n\n\n\n\n"
},

{
    "location": "Schema/#Octo.Schema.changeset",
    "page": "Schema",
    "title": "Octo.Schema.changeset",
    "category": "function",
    "text": "changeset(validations, M::Type)\n\n\n\n\n\n"
},

{
    "location": "Schema/#Schema-1",
    "page": "Schema",
    "title": "Schema",
    "category": "section",
    "text": "Schema.model\nSchema.changeset"
},

{
    "location": "Queryable/#",
    "page": "Queryable",
    "title": "Queryable",
    "category": "page",
    "text": ""
},

{
    "location": "Queryable/#Octo.Queryable.from",
    "page": "Queryable",
    "title": "Octo.Queryable.from",
    "category": "function",
    "text": "from(M::Type, as=nothing)::FromClause\n\n\n\n\n\nfrom(query::Structured, as=nothing)::SubQuery\n\n\n\n\n\n"
},

{
    "location": "Queryable/#Octo.Queryable.as",
    "page": "Queryable",
    "title": "Octo.Queryable.as",
    "category": "function",
    "text": "as(field::Union{Field, AggregateFunction}, alias::Symbol)::SQLAlias\n\n\n\n\n\n"
},

{
    "location": "Queryable/#Queryable-1",
    "page": "Queryable",
    "title": "Queryable",
    "category": "section",
    "text": "Octo.Queryable.from\nOcto.Queryable.as"
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
    "location": "adapters/SQL/#Octo.Adapters.SQL.to_sql",
    "page": "Octo.Adapters.SQL",
    "title": "Octo.Adapters.SQL.to_sql",
    "category": "function",
    "text": "to_sql(query::Structured)::String\n\n\n\n\n\nto_sql(subquery::SubQuery)::String\n\n\n\n\n\n"
},

{
    "location": "adapters/SQL/#Octo.Adapters.SQL-1",
    "page": "Octo.Adapters.SQL",
    "title": "Octo.Adapters.SQL",
    "category": "section",
    "text": "Octo.Adapters.SQL.to_sql"
},

{
    "location": "adapters/PostgreSQL/#",
    "page": "Octo.Adapters.PostgreSQL",
    "title": "Octo.Adapters.PostgreSQL",
    "category": "page",
    "text": ""
},

{
    "location": "adapters/PostgreSQL/#Octo.Adapters.PostgreSQL.to_sql",
    "page": "Octo.Adapters.PostgreSQL",
    "title": "Octo.Adapters.PostgreSQL.to_sql",
    "category": "function",
    "text": "to_sql(query::Structured)::String\n\n\n\n\n\nto_sql(subquery::SubQuery)::String\n\n\n\n\n\n"
},

{
    "location": "adapters/PostgreSQL/#Octo.Adapters.PostgreSQL-1",
    "page": "Octo.Adapters.PostgreSQL",
    "title": "Octo.Adapters.PostgreSQL",
    "category": "section",
    "text": "Octo.Adapters.PostgreSQL.to_sql"
},

{
    "location": "adapters/MySQL/#",
    "page": "Octo.Adapters.MySQL",
    "title": "Octo.Adapters.MySQL",
    "category": "page",
    "text": ""
},

{
    "location": "adapters/MySQL/#Octo.Adapters.MySQL.to_sql",
    "page": "Octo.Adapters.MySQL",
    "title": "Octo.Adapters.MySQL.to_sql",
    "category": "function",
    "text": "to_sql(query::Structured)::String\n\n\n\n\n\nto_sql(subquery::SubQuery)::String\n\n\n\n\n\n"
},

{
    "location": "adapters/MySQL/#Octo.Adapters.MySQL-1",
    "page": "Octo.Adapters.MySQL",
    "title": "Octo.Adapters.MySQL",
    "category": "section",
    "text": "Octo.Adapters.MySQL.to_sql"
},

{
    "location": "adapters/SQLite/#",
    "page": "Octo.Adapters.SQLite",
    "title": "Octo.Adapters.SQLite",
    "category": "page",
    "text": ""
},

{
    "location": "adapters/SQLite/#Octo.Adapters.SQLite.to_sql",
    "page": "Octo.Adapters.SQLite",
    "title": "Octo.Adapters.SQLite.to_sql",
    "category": "function",
    "text": "to_sql(query::Structured)::String\n\n\n\n\n\nto_sql(subquery::SubQuery)::String\n\n\n\n\n\n"
},

{
    "location": "adapters/SQLite/#Octo.Adapters.SQLite-1",
    "page": "Octo.Adapters.SQLite",
    "title": "Octo.Adapters.SQLite",
    "category": "section",
    "text": "Octo.Adapters.SQLite.to_sql"
},

]}
