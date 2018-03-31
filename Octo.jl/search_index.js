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
    "text": "Current supported databases: PostgreSQL(via LibPQ.jl), MySQL(via MySQL.jl), SQLite(via SQLite.jl)julia> using Octo.Adapters.PostgreSQL\n\njulia> Repo.debug_sql()\nLogLevelDebugSQL::Octo.Repo.RepoLogLevel = -1\n\njulia> Repo.connect(\n           adapter = Octo.Adapters.PostgreSQL,\n           dbname = \"postgresqltest\",\n           user = \"postgres\",\n       )\nPostgreSQL connection (CONNECTION_OK) with parameters:\n  user = postgres\n  passfile = /Users/wookyoung/.pgpass\n  dbname = postgresqltest\n  port = 5432\n  client_encoding = UTF8\n  application_name = LibPQ.jl\n  sslmode = prefer\n  sslcompression = 1\n  krbsrvname = postgres\n  target_session_attrs = any\n\njulia> Repo.execute([DROP TABLE IF EXISTS :Employee])\n[ Info: DROP TABLE IF EXISTS Employee\n\njulia> Repo.execute(Raw(\"\"\"\n           CREATE TABLE Employee (\n               ID SERIAL,\n               Name VARCHAR(255),\n               Salary FLOAT(8),\n               PRIMARY KEY (ID)\n           )\"\"\"))\n┌ Info: CREATE TABLE Employee (\n│     ID SERIAL,\n│     Name VARCHAR(255),\n│     Salary FLOAT(8),\n│     PRIMARY KEY (ID)\n└ )\n\njulia> struct Employee\n       end\n\njulia> Schema.model(Employee, table_name=\"Employee\", primary_key=\"ID\")\nEmployee => Dict(:primary_key=>\"ID\",:table_name=>\"Employee\")\n\njulia> Repo.insert!(Employee, [\n           (Name=\"Jeremy\",  Salary=10000.50),\n           (Name=\"Cloris\",  Salary=20000.50),\n           (Name=\"John\",    Salary=30000.50),\n           (Name=\"Hyunden\", Salary=40000.50),\n           (Name=\"Justin\",  Salary=50000.50),\n           (Name=\"Tom\",     Salary=60000.50),\n       ])\n[ Info: INSERT INTO Employee (Name, Salary) VALUES ($1, $2)   (Name = \"Jeremy\", Salary = 10000.5), (Name = \"Cloris\", Salary = 20000.5), (Name = \"John\", Salary = 30000.5), (Name = \"Hyunden\", Salary = 40000.5), (Name = \"Justin\", Salary = 50000.5), (Name = \"Tom\", Salary = 60000.5)\n\njulia> Repo.all(Employee)\n[ Info: SELECT * FROM Employee\n|   id | name      |    salary |\n| ---- | --------- | --------- |\n|    1 | Jeremy    |   10000.5 |\n|    2 | Cloris    |   20000.5 |\n|    3 | John      |   30000.5 |\n|    4 | Hyunden   |   40000.5 |\n|    5 | Justin    |   50000.5 |\n|    6 | Tom       |   60000.5 |\n6 rows.\n\njulia> Repo.get(Employee, 2)\n[ Info: SELECT * FROM Employee WHERE ID = 2\n|   id | name     |    salary |\n| ---- | -------- | --------- |\n|    2 | Cloris   |   20000.5 |\n1 row.\n\njulia> Repo.get(Employee, 2:5)\n[ Info: SELECT * FROM Employee WHERE ID BETWEEN 2 AND 5\n|   id | name      |    salary |\n| ---- | --------- | --------- |\n|    2 | Cloris    |   20000.5 |\n|    3 | John      |   30000.5 |\n|    4 | Hyunden   |   40000.5 |\n|    5 | Justin    |   50000.5 |\n4 rows.\n\njulia> Repo.get(Employee, (Name=\"Jeremy\",))\n[ Info: SELECT * FROM Employee WHERE Name = \'Jeremy\'\n|   id | name     |    salary |\n| ---- | -------- | --------- |\n|    1 | Jeremy   |   10000.5 |\n1 row.\n\njulia> Repo.insert!(Employee, (Name=\"Jessica\", Salary=70000.50))\n[ Info: INSERT INTO Employee (Name, Salary) VALUES ($1, $2)   (Name = \"Jessica\", Salary = 70000.5)\n\njulia> Repo.update!(Employee, (ID=2, Salary=85000))\n[ Info: UPDATE Employee SET Salary = $1 WHERE ID = 2   85000\n\njulia> Repo.delete!(Employee, (ID=3,))\n[ Info: DELETE FROM Employee WHERE ID = 3\n\njulia> Repo.delete!(Employee, 3:5)\n[ Info: DELETE FROM Employee WHERE ID BETWEEN 3 AND 5\n\njulia> em = from(Employee)\nOcto.FromClause(Employee, nothing)\n\njulia> Repo.query([SELECT * FROM em WHERE em.Name == \"Cloris\"])\n[ Info: SELECT * FROM Employee WHERE Name = \'Cloris\'\n|   id | name     |    salary |\n| ---- | -------- | --------- |\n|    2 | Cloris   |   85000.0 |\n1 row.\n\njulia> ❓ = Octo.PlaceHolder\nPlaceHolder\n\njulia> Repo.query([SELECT * FROM em WHERE em.Name == ❓], [\"Cloris\"])\n[ Info: SELECT * FROM Employee WHERE Name = ?   \"Cloris\"\n|   id | name     |    salary |\n| ---- | -------- | --------- |\n|    2 | Cloris   |   85000.0 |\n1 row."
},

{
    "location": "#Colored-SQL-statements-1",
    "page": "Home",
    "title": "Colored SQL statements",
    "category": "section",
    "text": "See the CI logs  https://travis-ci.org/wookay/Octo.jl/builds/359976228#L602."
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
    "text": "Repo.get(M::Type, pk::Union{Int, String})\n\n\n\n\n\nRepo.get(M::Type, pk_range::UnitRange{Int64})\n\n\n\n\n\nRepo.get(M::Type, nt::NamedTuple)\n\n\n\n\n\n"
},

{
    "location": "Repo/#Octo.Repo.insert!",
    "page": "Repo",
    "title": "Octo.Repo.insert!",
    "category": "function",
    "text": "Repo.insert!(M::Type, nts::Vector{<:NamedTuple})::ExecuteResult\n\n\n\n\n\nRepo.insert!(M, nt::NamedTuple)::ExecuteResult\n\n\n\n\n\n"
},

{
    "location": "Repo/#Octo.Repo.update!",
    "page": "Repo",
    "title": "Octo.Repo.update!",
    "category": "function",
    "text": "Repo.update!(M::Type, nt::NamedTuple)::ExecuteResult\n\n\n\n\n\n"
},

{
    "location": "Repo/#Octo.Repo.delete!",
    "page": "Repo",
    "title": "Octo.Repo.delete!",
    "category": "function",
    "text": "Repo.delete!(M::Type, nt::NamedTuple)::ExecuteResult\n\n\n\n\n\nRepo.delete!(M::Type, pk_range::UnitRange{Int64})::ExecuteResult\n\n\n\n\n\n"
},

{
    "location": "Repo/#Octo.Repo.query",
    "page": "Repo",
    "title": "Octo.Repo.query",
    "category": "function",
    "text": "Repo.query(stmt::Structured)\n\n\n\n\n\nRepo.query(stmt::Structured, vasl::Vector)\n\n\n\n\n\n"
},

{
    "location": "Repo/#Octo.Repo.execute",
    "page": "Repo",
    "title": "Octo.Repo.execute",
    "category": "function",
    "text": "Repo.execute(stmt::Structured)::ExecuteResult\n\n\n\n\n\nRepo.execute(stmt::Structured, vals::Vector)::ExecuteResult\n\n\n\n\n\nRepo.execute(stmt::Structured, nts::Vector{<:NamedTuple})::ExecuteResult\n\n\n\n\n\n"
},

{
    "location": "Repo/#Octo.Repo.disconnect",
    "page": "Repo",
    "title": "Octo.Repo.disconnect",
    "category": "function",
    "text": "Repo.disconnect()\n\n\n\n\n\n"
},

{
    "location": "Repo/#Octo.Repo.debug_sql",
    "page": "Repo",
    "title": "Octo.Repo.debug_sql",
    "category": "function",
    "text": "Repo.debug_sql(debug::Bool = true)\n\n\n\n\n\n"
},

{
    "location": "Repo/#Repo-1",
    "page": "Repo",
    "title": "Repo",
    "category": "section",
    "text": "Repo.connect\nRepo.all\nRepo.get\nRepo.insert!\nRepo.update!\nRepo.delete!\nRepo.query\nRepo.execute\nRepo.disconnect\nRepo.debug_sql"
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
    "text": "as(field::Union{Field, SQLFunction}, alias::Symbol)::SQLAlias\n\n\n\n\n\n"
},

{
    "location": "Queryable/#Octo.Queryable.window",
    "page": "Queryable",
    "title": "Octo.Queryable.window",
    "category": "function",
    "text": "window(query::Structured, as=nothing):OverClause\n\n\n\n\n\n"
},

{
    "location": "Queryable/#Queryable-1",
    "page": "Queryable",
    "title": "Queryable",
    "category": "section",
    "text": "Octo.Queryable.from\nOcto.Queryable.as\nOcto.Queryable.window"
},

{
    "location": "keywords_and_functions/#",
    "page": "SQL keywords & functions",
    "title": "SQL keywords & functions",
    "category": "page",
    "text": ""
},

{
    "location": "keywords_and_functions/#SQL-keywords-and-functions-1",
    "page": "SQL keywords & functions",
    "title": "SQL keywords and functions",
    "category": "section",
    "text": ""
},

{
    "location": "keywords_and_functions/#sql_keywords-1",
    "page": "SQL keywords & functions",
    "title": "@sql_keywords",
    "category": "section",
    "text": "AND AS ASC BETWEEN BY CREATE DATABASE DELETE DESC DISTINCT DROP EXISTS FROM FULL GROUP HAVING IF IN INNER INSERT INTO IS JOIN LEFT LIKE LIMIT NOT NULL OFFSET ON OR ORDER OUTER OVER PARTITION RIGHT SELECT SET TABLE UPDATE USING VALUES WHERE"
},

{
    "location": "keywords_and_functions/#sql_functions-1",
    "page": "SQL keywords & functions",
    "title": "@sql_functions",
    "category": "section",
    "text": ""
},

{
    "location": "keywords_and_functions/#aggregate-functions-1",
    "page": "SQL keywords & functions",
    "title": "aggregate functions",
    "category": "section",
    "text": "AVG COUNT MAX MIN SUM"
},

{
    "location": "keywords_and_functions/#ranking-functions-1",
    "page": "SQL keywords & functions",
    "title": "ranking functions",
    "category": "section",
    "text": "DENSE_RANK  RANK  ROW_NUMBER"
},

{
    "location": "elements/#",
    "page": "SQL elements",
    "title": "SQL elements",
    "category": "page",
    "text": ""
},

{
    "location": "elements/#Octo.PlaceHolder",
    "page": "SQL elements",
    "title": "Octo.PlaceHolder",
    "category": "type",
    "text": "Octo.PlaceHolder\n\n\n\n\n\n"
},

{
    "location": "elements/#SQL-elements-1",
    "page": "SQL elements",
    "title": "SQL elements",
    "category": "section",
    "text": "Octo.PlaceHolder"
},

{
    "location": "Adapters/SQL/#",
    "page": "Octo.Adapters.SQL",
    "title": "Octo.Adapters.SQL",
    "category": "page",
    "text": ""
},

{
    "location": "Adapters/SQL/#Octo.Adapters.SQL.to_sql",
    "page": "Octo.Adapters.SQL",
    "title": "Octo.Adapters.SQL.to_sql",
    "category": "function",
    "text": "to_sql(query::Structured)::String\n\n\n\n\n\nto_sql(subquery::SubQuery)::String\n\n\n\n\n\nto_sql(clause::OverClause)::String\n\n\n\n\n\n"
},

{
    "location": "Adapters/SQL/#Octo.Adapters.SQL-1",
    "page": "Octo.Adapters.SQL",
    "title": "Octo.Adapters.SQL",
    "category": "section",
    "text": "Octo.Adapters.SQL.to_sql"
},

{
    "location": "Adapters/PostgreSQL/#",
    "page": "Octo.Adapters.PostgreSQL",
    "title": "Octo.Adapters.PostgreSQL",
    "category": "page",
    "text": ""
},

{
    "location": "Adapters/PostgreSQL/#Octo.Adapters.PostgreSQL.to_sql",
    "page": "Octo.Adapters.PostgreSQL",
    "title": "Octo.Adapters.PostgreSQL.to_sql",
    "category": "function",
    "text": "to_sql(query::Structured)::String\n\n\n\n\n\nto_sql(subquery::SubQuery)::String\n\n\n\n\n\nto_sql(clause::OverClause)::String\n\n\n\n\n\n"
},

{
    "location": "Adapters/PostgreSQL/#Octo.Adapters.PostgreSQL-1",
    "page": "Octo.Adapters.PostgreSQL",
    "title": "Octo.Adapters.PostgreSQL",
    "category": "section",
    "text": "Octo.Adapters.PostgreSQL.to_sql"
},

{
    "location": "Adapters/PostgreSQL/#additional-[@sql_keywords](@ref-sql_keywords)-1",
    "page": "Octo.Adapters.PostgreSQL",
    "title": "additional @sql_keywords",
    "category": "section",
    "text": "FALSE  INTERVAL  LATERAL  TRUE  WITH"
},

{
    "location": "Adapters/PostgreSQL/#additional-[@sql_functions](@ref-sql_functions)-1",
    "page": "Octo.Adapters.PostgreSQL",
    "title": "additional @sql_functions",
    "category": "section",
    "text": "NOW"
},

{
    "location": "Adapters/MySQL/#",
    "page": "Octo.Adapters.MySQL",
    "title": "Octo.Adapters.MySQL",
    "category": "page",
    "text": ""
},

{
    "location": "Adapters/MySQL/#Octo.Adapters.MySQL.to_sql",
    "page": "Octo.Adapters.MySQL",
    "title": "Octo.Adapters.MySQL.to_sql",
    "category": "function",
    "text": "to_sql(query::Structured)::String\n\n\n\n\n\nto_sql(subquery::SubQuery)::String\n\n\n\n\n\nto_sql(clause::OverClause)::String\n\n\n\n\n\n"
},

{
    "location": "Adapters/MySQL/#Octo.Adapters.MySQL-1",
    "page": "Octo.Adapters.MySQL",
    "title": "Octo.Adapters.MySQL",
    "category": "section",
    "text": "Octo.Adapters.MySQL.to_sql"
},

{
    "location": "Adapters/MySQL/#additional-[@sql_keywords](@ref-sql_keywords)-1",
    "page": "Octo.Adapters.MySQL",
    "title": "additional @sql_keywords",
    "category": "section",
    "text": "USE"
},

{
    "location": "Adapters/SQLite/#",
    "page": "Octo.Adapters.SQLite",
    "title": "Octo.Adapters.SQLite",
    "category": "page",
    "text": ""
},

{
    "location": "Adapters/SQLite/#Octo.Adapters.SQLite.to_sql",
    "page": "Octo.Adapters.SQLite",
    "title": "Octo.Adapters.SQLite.to_sql",
    "category": "function",
    "text": "to_sql(query::Structured)::String\n\n\n\n\n\nto_sql(subquery::SubQuery)::String\n\n\n\n\n\n"
},

{
    "location": "Adapters/SQLite/#Octo.Adapters.SQLite-1",
    "page": "Octo.Adapters.SQLite",
    "title": "Octo.Adapters.SQLite",
    "category": "section",
    "text": "Octo.Adapters.SQLite.to_sql"
},

{
    "location": "Pretty/#",
    "page": "Pretty",
    "title": "Pretty",
    "category": "page",
    "text": ""
},

{
    "location": "Pretty/#Octo.Pretty.set",
    "page": "Pretty",
    "title": "Octo.Pretty.set",
    "category": "function",
    "text": "Pretty.set(pretty::Bool=true; kwargs...)\n\nSet the display options for Vector{<:NamedTuple} rows.\n\njulia> Pretty.set(nrows = 10)     # limit number of the rows\n\njulia> Pretty.set(colsize = 10)   # limit column size\n\njulia> Pretty.set(false)          # do or don\'t use pretty\n\n\n\n\n\n\n"
},

{
    "location": "Pretty/#Octo.Pretty.table",
    "page": "Pretty",
    "title": "Octo.Pretty.table",
    "category": "function",
    "text": "Pretty.table(nts::Vector{<:NamedTuple})::String\n\n\n\n\n\n"
},

{
    "location": "Pretty/#Pretty-1",
    "page": "Pretty",
    "title": "Pretty",
    "category": "section",
    "text": "Octo.Pretty.set\nOcto.Pretty.table"
},

]}
