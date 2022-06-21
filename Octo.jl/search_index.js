var documenterSearchIndex = {"docs":
[{"location":"Adapters/Hive/#Octo.Adapters.Hive","page":"Octo.Adapters.Hive","title":"Octo.Adapters.Hive","text":"","category":"section"},{"location":"Adapters/Hive/","page":"Octo.Adapters.Hive","title":"Octo.Adapters.Hive","text":"Octo.Adapters.Hive.to_sql","category":"page"},{"location":"Adapters/Hive/#Octo.Adapters.Hive.to_sql","page":"Octo.Adapters.Hive","title":"Octo.Adapters.Hive.to_sql","text":"to_sql(query::Structured)::String\n\n\n\n\n\nto_sql(subquery::SubQuery)::String\n\n\n\n\n\n","category":"function"},{"location":"Adapters/PostgreSQL/#Octo.Adapters.PostgreSQL","page":"Octo.Adapters.PostgreSQL","title":"Octo.Adapters.PostgreSQL","text":"","category":"section"},{"location":"Adapters/PostgreSQL/","page":"Octo.Adapters.PostgreSQL","title":"Octo.Adapters.PostgreSQL","text":"Octo.Adapters.PostgreSQL.to_sql","category":"page"},{"location":"Adapters/PostgreSQL/#Octo.Adapters.PostgreSQL.to_sql","page":"Octo.Adapters.PostgreSQL","title":"Octo.Adapters.PostgreSQL.to_sql","text":"to_sql(query::Structured)::String\n\n\n\n\n\nto_sql(subquery::SubQuery)::String\n\n\n\n\n\n","category":"function"},{"location":"Adapters/PostgreSQL/#additional-[@sql_keywords](@ref-sql_keywords)","page":"Octo.Adapters.PostgreSQL","title":"additional @sql_keywords","text":"","category":"section"},{"location":"Adapters/PostgreSQL/","page":"Octo.Adapters.PostgreSQL","title":"Octo.Adapters.PostgreSQL","text":"AUTOCOMMIT  BIGSERIAL  COPY  CURRENT_DATE  DESCRIBE  EXPLAIN  FALSE  LATERAL  RETURNING  SEQUENCE  SERIAL  TRUE  WINDOW","category":"page"},{"location":"Adapters/PostgreSQL/#additional-[@sql_functions](@ref-sql_functions)","page":"Octo.Adapters.PostgreSQL","title":"additional @sql_functions","text":"","category":"section"},{"location":"Adapters/PostgreSQL/","page":"Octo.Adapters.PostgreSQL","title":"Octo.Adapters.PostgreSQL","text":"COALESCE NOW","category":"page"},{"location":"Adapters/ODBC/#Octo.Adapters.ODBC","page":"Octo.Adapters.ODBC","title":"Octo.Adapters.ODBC","text":"","category":"section"},{"location":"Adapters/ODBC/","page":"Octo.Adapters.ODBC","title":"Octo.Adapters.ODBC","text":"Octo.Adapters.ODBC.to_sql","category":"page"},{"location":"Adapters/ODBC/#Octo.Adapters.ODBC.to_sql","page":"Octo.Adapters.ODBC","title":"Octo.Adapters.ODBC.to_sql","text":"to_sql(query::Structured)::String\n\n\n\n\n\nto_sql(subquery::SubQuery)::String\n\n\n\n\n\n","category":"function"},{"location":"Pretty/#Pretty","page":"Pretty","title":"Pretty","text":"","category":"section"},{"location":"Pretty/","page":"Pretty","title":"Pretty","text":"Octo.Pretty\nOcto.Pretty.set\nOcto.Pretty.table","category":"page"},{"location":"Pretty/#Octo.Pretty","page":"Pretty","title":"Octo.Pretty","text":"Pretty\n\nTablize Vector{<:NamedTuple}\n\n\n\n\n\n","category":"module"},{"location":"Pretty/#Octo.Pretty.set","page":"Pretty","title":"Octo.Pretty.set","text":"Pretty.set(pretty::Bool=true; kwargs...)\n\nSet the display options for Vector{<:NamedTuple} rows.\n\njulia> Pretty.set(nrows = 10)     # limit number of the rows\n\njulia> Pretty.set(colsize = 10)   # limit column size\n\njulia> Pretty.set(false)          # do or don't use pretty\n\n\n\n\n\n\n","category":"function"},{"location":"Pretty/#Octo.Pretty.table","page":"Pretty","title":"Octo.Pretty.table","text":"Pretty.table(nts::Vector{<:NamedTuple})::String\n\n\n\n\n\nPretty.table(nt::NamedTuple)::String\n\n\n\n\n\n","category":"function"},{"location":"Adapters/JDBC/#Octo.Adapters.JDBC","page":"Octo.Adapters.JDBC","title":"Octo.Adapters.JDBC","text":"","category":"section"},{"location":"Adapters/JDBC/","page":"Octo.Adapters.JDBC","title":"Octo.Adapters.JDBC","text":"Octo.Adapters.JDBC.to_sql","category":"page"},{"location":"Adapters/JDBC/#Octo.Adapters.JDBC.to_sql","page":"Octo.Adapters.JDBC","title":"Octo.Adapters.JDBC.to_sql","text":"to_sql(query::Structured)::String\n\n\n\n\n\nto_sql(subquery::SubQuery)::String\n\n\n\n\n\n","category":"function"},{"location":"Adapters/MySQL/#Octo.Adapters.MySQL","page":"Octo.Adapters.MySQL","title":"Octo.Adapters.MySQL","text":"","category":"section"},{"location":"Adapters/MySQL/","page":"Octo.Adapters.MySQL","title":"Octo.Adapters.MySQL","text":"Octo.Adapters.MySQL.to_sql","category":"page"},{"location":"Adapters/MySQL/#Octo.Adapters.MySQL.to_sql","page":"Octo.Adapters.MySQL","title":"Octo.Adapters.MySQL.to_sql","text":"to_sql(query::Structured)::String\n\n\n\n\n\nto_sql(subquery::SubQuery)::String\n\n\n\n\n\n","category":"function"},{"location":"Adapters/MySQL/#additional-[@sql_keywords](@ref-sql_keywords)","page":"Octo.Adapters.MySQL","title":"additional @sql_keywords","text":"","category":"section"},{"location":"Adapters/MySQL/","page":"Octo.Adapters.MySQL","title":"Octo.Adapters.MySQL","text":"AUTO_INCREMENT  DESCRIBE","category":"page"},{"location":"Repo/#Repo","page":"Repo","title":"Repo","text":"","category":"section"},{"location":"Repo/","page":"Repo","title":"Repo","text":"Repo.Connection\nRepo.connect\nRepo.get\nRepo.insert!\nRepo.update!\nRepo.delete!\nRepo.query\nRepo.execute\nRepo.disconnect\nRepo.debug_sql","category":"page"},{"location":"Repo/#Octo.Repo.Connection","page":"Repo","title":"Octo.Repo.Connection","text":"Connection\n\n\n\n\n\n","category":"type"},{"location":"Repo/#Octo.Repo.connect","page":"Repo","title":"Octo.Repo.connect","text":"Repo.connect(; adapter::Module, database::Union{Nothing,Type{D} where {D <: DBMS.AbstractDatabase}}=nothing, multiple::Bool=false, kwargs...)::Connection\n\n\n\n\n\n","category":"function"},{"location":"Repo/#Octo.Repo.get","page":"Repo","title":"Octo.Repo.get","text":"Repo.get(M::Type, pk::Union{Int, String}; db::Connection=current_connection())\n\n\n\n\n\nRepo.get(M::Type, pk_range::UnitRange{Int64}; db::Connection=current_connection())\n\n\n\n\n\nRepo.get(M::Type, nt::NamedTuple; db::Connection=current_connection())\n\n\n\n\n\n","category":"function"},{"location":"Repo/#Octo.Repo.insert!","page":"Repo","title":"Octo.Repo.insert!","text":"Repo.insert!(M::Type, nts::Vector{<:NamedTuple}; db::Connection=current_connection(), returning::Union{Nothing,Symbol,Vector}=get_primary_key(db, M))\n\n\n\n\n\nRepo.insert!(M::Type, vals::Vector{<:Tuple}; db::Connection=current_connection(), returning::Union{Nothing,Symbol,Vector}=get_primary_key(db, M))\n\n\n\n\n\nRepo.insert!(M, nt::NamedTuple; kwargs...)\n\n\n\n\n\n","category":"function"},{"location":"Repo/#Octo.Repo.update!","page":"Repo","title":"Octo.Repo.update!","text":"Repo.update!(M::Type, nt::NamedTuple; db::Connection=current_connection())\n\n\n\n\n\n","category":"function"},{"location":"Repo/#Octo.Repo.delete!","page":"Repo","title":"Octo.Repo.delete!","text":"Repo.delete!(M::Type, nt::NamedTuple; db::Connection=current_connection())\n\n\n\n\n\nRepo.delete!(M::Type, pk_range::UnitRange{Int64}; db::Connection=current_connection())\n\n\n\n\n\n","category":"function"},{"location":"Repo/#Octo.Repo.query","page":"Repo","title":"Octo.Repo.query","text":"Repo.query(stmt::Structured; db::Connection=current_connection())\n\n\n\n\n\nRepo.query(M::Type; db::Connection=current_connection())\n\n\n\n\n\nRepo.query(from::FromItem; db::Connection=current_connection())\n\n\n\n\n\nRepo.query(subquery::SubQuery; db::Connection=current_connection())\n\n\n\n\n\nRepo.query(rawquery::Octo.Raw; db::Connection=current_connection())\n\n\n\n\n\nRepo.query(str::AbstractString; db::Connection=current_connection())\n\n\n\n\n\nRepo.query(stmt::Structured, vals::Vector; db::Connection=current_connection())\n\n\n\n\n\nRepo.query(M::Type, pk::Union{Int, String}; db::Connection=current_connection())\n\n\n\n\n\nRepo.query(from::FromItem, pk::Union{Int, String}; db::Connection=current_connection())\n\n\n\n\n\nRepo.query(M::Type, pk_range::UnitRange{Int64}; db::Connection=current_connection())\n\n\n\n\n\nRepo.query(from::FromItem, pk_range::UnitRange{Int64}; db::Connection=current_connection())\n\n\n\n\n\nRepo.query(stmt::Structured, nt::NamedTuple; db::Connection=current_connection())\n\n\n\n\n\nRepo.query(M::Type, nt::NamedTuple; db::Connection=current_connection())\n\n\n\n\n\nRepo.query(from::FromItem, nt::NamedTuple; db::Connection=current_connection())\n\n\n\n\n\nRepo.query(subquery::SubQuery, nt::NamedTuple; db::Connection=current_connection())\n\n\n\n\n\nRepo.query(rawquery::Octo.Raw, nt::NamedTuple; db::Connection=current_connection())\n\n\n\n\n\n","category":"function"},{"location":"Repo/#Octo.Repo.execute","page":"Repo","title":"Octo.Repo.execute","text":"Repo.execute(stmt::Structured; db::Connection=current_connection())\n\n\n\n\n\nRepo.execute(stmt::Structured, vals::Vector; db::Connection=current_connection())\n\n\n\n\n\nRepo.execute(stmt::Structured, nts::Vector{<:NamedTuple}; db::Connection=current_connection())\n\n\n\n\n\n","category":"function"},{"location":"Repo/#Octo.Repo.disconnect","page":"Repo","title":"Octo.Repo.disconnect","text":"Repo.disconnect(; db::Union{Nothing, Connection}=nothing)\n\n\n\n\n\n","category":"function"},{"location":"Repo/#Octo.Repo.debug_sql","page":"Repo","title":"Octo.Repo.debug_sql","text":"Repo.debug_sql(debug::Bool = true)\n\n\n\n\n\n","category":"function"},{"location":"Adapters/SQLite/#Octo.Adapters.SQLite","page":"Octo.Adapters.SQLite","title":"Octo.Adapters.SQLite","text":"","category":"section"},{"location":"Adapters/SQLite/","page":"Octo.Adapters.SQLite","title":"Octo.Adapters.SQLite","text":"Octo.Adapters.SQLite.to_sql","category":"page"},{"location":"Adapters/SQLite/#Octo.Adapters.SQLite.to_sql","page":"Octo.Adapters.SQLite","title":"Octo.Adapters.SQLite.to_sql","text":"to_sql(query::Structured)::String\n\n\n\n\n\nto_sql(subquery::SubQuery)::String\n\n\n\n\n\n","category":"function"},{"location":"Adapters/SQLite/#additional-[@sql_keywords](@ref-sql_keywords)","page":"Octo.Adapters.SQLite","title":"additional @sql_keywords","text":"","category":"section"},{"location":"Adapters/SQLite/","page":"Octo.Adapters.SQLite","title":"Octo.Adapters.SQLite","text":"AUTOINCREMENT","category":"page"},{"location":"Schema/#Schema","page":"Schema","title":"Schema","text":"","category":"section"},{"location":"Schema/","page":"Schema","title":"Schema","text":"Schema.model\nSchema.changeset","category":"page"},{"location":"Schema/#Octo.Schema.model","page":"Schema","title":"Octo.Schema.model","text":"model(M::Type; table_name::String, primary_key::Union{Nothing,Symbol,String,Vector,Tuple}=\"id\")::Model\n\n\n\n\n\n","category":"function"},{"location":"Schema/#Octo.Schema.changeset","page":"Schema","title":"Octo.Schema.changeset","text":"changeset(validations, M::Type)\n\n\n\n\n\n","category":"function"},{"location":"elements/#SQL-elements","page":"SQL elements","title":"SQL elements","text":"","category":"section"},{"location":"elements/","page":"SQL elements","title":"SQL elements","text":"Octo.PlaceHolder\nOcto.Raw","category":"page"},{"location":"elements/#Octo.PlaceHolder","page":"SQL elements","title":"Octo.PlaceHolder","text":"Octo.PlaceHolder\n\n\n\n\n\n","category":"type"},{"location":"elements/#Octo.Raw","page":"SQL elements","title":"Octo.Raw","text":"Octo.Raw\n\n\n\n\n\n","category":"type"},{"location":"Queryable/#Queryable","page":"Queryable","title":"Queryable","text":"","category":"section"},{"location":"Queryable/","page":"Queryable","title":"Queryable","text":"Octo.Queryable.from\nOcto.Queryable.as\nOcto.Queryable.extract","category":"page"},{"location":"Queryable/#Octo.Queryable.from","page":"Queryable","title":"Octo.Queryable.from","text":"from(M::Type, alias=nothing)::FromItem\n\n\n\n\n\nfrom(query::Structured, alias=nothing)::SubQuery\n\n\n\n\n\n","category":"function"},{"location":"Queryable/#Octo.Queryable.as","page":"Queryable","title":"Octo.Queryable.as","text":"as(field::Union{Field, SQLFunction, Predicate}, alias::Symbol)::SQLAlias\n\n\n\n\n\n","category":"function"},{"location":"Queryable/#Octo.Queryable.extract","page":"Queryable","title":"Octo.Queryable.extract","text":"extract(field::Union{SQLKeyword, Type{DP}, Type{TP}}, from::Union{Dates.DateTime, DP, TP, Dates.CompoundPeriod})::SQLExtract where DP <: Dates.DatePeriod where TP <: Dates.TimePeriod\n\n\n\n\n\n","category":"function"},{"location":"Adapters/SQL/#Octo.Adapters.SQL","page":"Octo.Adapters.SQL","title":"Octo.Adapters.SQL","text":"","category":"section"},{"location":"Adapters/SQL/","page":"Octo.Adapters.SQL","title":"Octo.Adapters.SQL","text":"Octo.Adapters.SQL.to_sql","category":"page"},{"location":"Adapters/SQL/#Octo.Adapters.SQL.to_sql","page":"Octo.Adapters.SQL","title":"Octo.Adapters.SQL.to_sql","text":"to_sql(query::Structured)::String\n\n\n\n\n\nto_sql(subquery::SubQuery)::String\n\n\n\n\n\n","category":"function"},{"location":"#Octo.jl","page":"Home","title":"Octo.jl","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"https://github.com/wookay/Octo.jl","category":"page"},{"location":"","page":"Home","title":"Home","text":"Octo.jl is an SQL Query DSL in Julia. It also comes with a very useful tool called Repo. You could Repo.get, Repo.insert! Repo.update! Repo.delete! for many database drivers without hand-written SQL.","category":"page"},{"location":"","page":"Home","title":"Home","text":"It's influenced by Ecto.","category":"page"},{"location":"","page":"Home","title":"Home","text":"☕️   You can make a donation to support this project.","category":"page"},{"location":"#SQL-Query-DSL","page":"Home","title":"SQL Query DSL","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"julia> using Octo.Adapters.SQL\n\njulia> struct User\n       end\n\njulia> Schema.model(User, table_name=\"users\")\n| primary_key   | table_name   |\n| ------------- | ------------ |\n| id            | users        |\n\njulia> u = from(User)\nFromItem users\n\njulia> [SELECT * FROM u]\nSELECT * FROM users\n\njulia> [SELECT (u.name, u.salary) FROM u]\nSELECT name, salary FROM users\n\njulia> [SELECT * FROM u WHERE u.id == 2]\nSELECT * FROM users WHERE id = 2\n\njulia> to_sql([SELECT * FROM u WHERE u.id == 2])\n\"SELECT * FROM users WHERE id = 2\"","category":"page"},{"location":"","page":"Home","title":"Home","text":"(Image: structured.svg)","category":"page"},{"location":"#Repo","page":"Home","title":"Repo","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"Current supported database drivers:","category":"page"},{"location":"","page":"Home","title":"Home","text":"PostgreSQL(via LibPQ.jl)\nSQLite(via SQLite.jl)\nMySQL(via MySQL.jl)","category":"page"},{"location":"","page":"Home","title":"Home","text":"julia> using Octo.Adapters.PostgreSQL\n\njulia> Repo.debug_sql()\nLogLevelDebugSQL::RepoLogLevel = -1\n\njulia> Repo.connect(\n           adapter = Octo.Adapters.PostgreSQL,\n           dbname = \"postgresqltest\",\n           user = \"postgres\",\n       )\nOcto.Repo.Connection(false, \"postgresqltest\", Main.PostgreSQLLoader, PostgreSQL connection (CONNECTION_OK) with parameters:\n  user = postgres\n  passfile = /Users/wookyoung/.pgpass\n  dbname = postgresqltest\n  port = 5432\n  client_encoding = UTF8\n  options = -c DateStyle=ISO,YMD -c IntervalStyle=iso_8601 -c TimeZone=UTC\n  application_name = LibPQ.jl\n  sslmode = prefer\n  sslcompression = 0\n  gssencmode = disable\n  target_session_attrs = any)\n\njulia> struct Employee\n       end\n\njulia> Schema.model(Employee, table_name=\"Employee\", primary_key=\"ID\")\n| primary_key   | table_name   |\n| ------------- | ------------ |\n| ID            | Employee     |\n\njulia> Repo.execute([DROP TABLE IF EXISTS Employee])\n[ Info: DROP TABLE IF EXISTS Employee\n\njulia> Repo.execute(Raw(\"\"\"\n           CREATE TABLE Employee (\n               ID SERIAL,\n               Name VARCHAR(255),\n               Salary FLOAT(8),\n               PRIMARY KEY (ID)\n           )\"\"\"))\n┌ Info: CREATE TABLE Employee (\n│     ID SERIAL,\n│     Name VARCHAR(255),\n│     Salary FLOAT(8),\n│     PRIMARY KEY (ID)\n└ )\n\njulia> Repo.insert!(Employee, [\n           (Name=\"Jeremy\",  Salary=10000.50),\n           (Name=\"Cloris\",  Salary=20000.50),\n           (Name=\"John\",    Salary=30000.50),\n           (Name=\"Hyunden\", Salary=40000.50),\n           (Name=\"Justin\",  Salary=50000.50),\n           (Name=\"Tom\",     Salary=60000.50),\n       ])\n[ Info: INSERT INTO Employee (Name, Salary) VALUES ($1, $2) RETURNING ID    (Name = \"Jeremy\", Salary = 10000.5), (Name = \"Cloris\", Salary = 20000.5), (Name = \"John\", Salary = 30000.5), (Name = \"Hyunden\", Salary = 40000.5), (Name = \"Justin\", Salary = 50000.5), (Name = \"Tom\", Salary = 60000.5)\n|   id |   num_affected_rows |\n| ---- | ------------------- |\n|    6 |                   6 |\n\njulia> Repo.get(Employee, 2)\n[ Info: SELECT * FROM Employee WHERE ID = 2\n|   id | name     |    salary |\n| ---- | -------- | --------- |\n|    2 | Cloris   |   20000.5 |\n1 row.\n\njulia> Repo.get(Employee, 2:5)\n[ Info: SELECT * FROM Employee WHERE ID BETWEEN 2 AND 5\n|   id | name      |    salary |\n| ---- | --------- | --------- |\n|    2 | Cloris    |   20000.5 |\n|    3 | John      |   30000.5 |\n|    4 | Hyunden   |   40000.5 |\n|    5 | Justin    |   50000.5 |\n4 rows.\n\njulia> Repo.get(Employee, (Name=\"Jeremy\",))\n[ Info: SELECT * FROM Employee WHERE Name = 'Jeremy'\n|   id | name     |    salary |\n| ---- | -------- | --------- |\n|    1 | Jeremy   |   10000.5 |\n1 row.\n\njulia> Repo.query(Employee)\n[ Info: SELECT * FROM Employee\n|   id | name      |    salary |\n| ---- | --------- | --------- |\n|    1 | Jeremy    |   10000.5 |\n|    2 | Cloris    |   20000.5 |\n|    3 | John      |   30000.5 |\n|    4 | Hyunden   |   40000.5 |\n|    5 | Justin    |   50000.5 |\n|    6 | Tom       |   60000.5 |\n6 rows.\n\njulia> Repo.insert!(Employee, (Name=\"Jessica\", Salary=70000.50))\n[ Info: INSERT INTO Employee (Name, Salary) VALUES ($1, $2) RETURNING ID    (Name = \"Jessica\", Salary = 70000.5)\n|   id |   num_affected_rows |\n| ---- | ------------------- |\n|    7 |                   1 |\n\njulia> Repo.update!(Employee, (ID=2, Salary=85000))\n[ Info: UPDATE Employee SET Salary = $1 WHERE ID = 2    85000\n|   num_affected_rows |\n| ------------------- |\n|                   1 |\n\njulia> Repo.delete!(Employee, (ID=3,))\n[ Info: DELETE FROM Employee WHERE ID = 3\n|   num_affected_rows |\n| ------------------- |\n|                   1 |\n\njulia> Repo.delete!(Employee, 3:5)\n[ Info: DELETE FROM Employee WHERE ID BETWEEN 3 AND 5\n|   num_affected_rows |\n| ------------------- |\n|                   2 |\n\njulia> em = from(Employee)\nFromItem Employee\n\njulia> Repo.query(em)\n[ Info: SELECT * FROM Employee\n|   id | name      |    salary |\n| ---- | --------- | --------- |\n|    1 | Jeremy    |   10000.5 |\n|    6 | Tom       |   60000.5 |\n|    7 | Jessica   |   70000.5 |\n|    2 | Cloris    |   85000.0 |\n4 rows.\n\njulia> Repo.query([SELECT * FROM em WHERE em.Name == \"Cloris\"])\n[ Info: SELECT * FROM Employee WHERE Name = 'Cloris'\n|   id | name     |    salary |\n| ---- | -------- | --------- |\n|    2 | Cloris   |   85000.0 |\n1 row.\n\njulia> Repo.query(em, (Name=\"Cloris\",))\n[ Info: SELECT * FROM Employee WHERE Name = 'Cloris'\n|   id | name     |    salary |\n| ---- | -------- | --------- |\n|    2 | Cloris   |   85000.0 |\n1 row.\n\njulia> ❓ = Octo.PlaceHolder\nPlaceHolder\n\njulia> Repo.query([SELECT * FROM em WHERE em.Name == ❓], [\"Cloris\"])\n[ Info: SELECT * FROM Employee WHERE Name = $1    \"Cloris\"\n|   id | name     |    salary |\n| ---- | -------- | --------- |\n|    2 | Cloris   |   85000.0 |\n1 row.","category":"page"},{"location":"#Subqueries","page":"Home","title":"Subqueries","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"julia> sub = from([SELECT * FROM em WHERE em.Salary > 30000], :sub)\nSubQuery (SELECT * FROM Employee WHERE Salary > 30000) AS sub\n\njulia> Repo.query(sub)\n[ Info: SELECT * FROM Employee WHERE Salary > 30000\n|   id | name      |    salary |\n| ---- | --------- | --------- |\n|    6 | Tom       |   60000.5 |\n|    7 | Jessica   |   70000.5 |\n|    2 | Cloris    |   85000.0 |\n3 rows.\n\njulia> Repo.query([SELECT sub.Name FROM sub])\n[ Info: SELECT sub.Name FROM (SELECT * FROM Employee WHERE Salary > 30000) AS sub\n| name      |\n| --------- |\n| Tom       |\n| Jessica   |\n| Cloris    |\n3 rows.","category":"page"},{"location":"#Colored-SQL-statements","page":"Home","title":"Colored SQL statements","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"(Image: colored_sql_statements.png)","category":"page"},{"location":"#Requirements","page":"Home","title":"Requirements","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"You need Julia.","category":"page"},{"location":"","page":"Home","title":"Home","text":"julia> type ] key","category":"page"},{"location":"","page":"Home","title":"Home","text":"(v1.0) pkg> add Octo","category":"page"},{"location":"","page":"Home","title":"Home","text":"(v1.0) pkg> add LibPQ   # for PostgreSQL (depends on LibPQ.jl 1.4, 1.6)\n(v1.0) pkg> add SQLite  # for SQLite     (depends on SQLite.jl 1.1)\n(v1.0) pkg> add MySQL   # for MySQL      (depends on MySQL.jl 1.0, 1.1)\n(v1.0) pkg> add DuckDB  # for DuckDB     (depends on DuckDB.jl 0.4)","category":"page"},{"location":"keywords_and_functions/#SQL-keywords-and-functions","page":"SQL keywords & functions","title":"SQL keywords and functions","text":"","category":"section"},{"location":"keywords_and_functions/#sql_keywords","page":"SQL keywords & functions","title":"@sql_keywords","text":"","category":"section"},{"location":"keywords_and_functions/","page":"SQL keywords & functions","title":"SQL keywords & functions","text":"Octo.@sql_keywords","category":"page"},{"location":"keywords_and_functions/#Octo.@sql_keywords","page":"SQL keywords & functions","title":"Octo.@sql_keywords","text":"@sql_keywords(args...)\n\n\n\n\n\n","category":"macro"},{"location":"keywords_and_functions/","page":"SQL keywords & functions","title":"SQL keywords & functions","text":"ADD ALL ALTER AND AS ASC BEGIN BETWEEN BIGINT BY COMMIT COLUMN CONSTRAINT CREATE DATABASE DEFAULT DELETE DESC DISTINCT DROP EXCEPT EXECUTE EXISTS FOREIGN FROM FULL GROUP HAVING IF IN INDEX INNER INSERT INTERSECT INTO IS JOIN KEY LEFT LIKE LIMIT NULL OFF OFFSET ON OR ORDER OUTER OVER PARTITION PREPARE PRIMARY RECURSIVE REFERENCES RELEASE RIGHT ROLLBACK SAVEPOINT SELECT SET TABLE TO TRANSACTION TRIGGER UNION UPDATE USE USING VALUES WHERE WITH","category":"page"},{"location":"keywords_and_functions/#sql_functions","page":"SQL keywords & functions","title":"@sql_functions","text":"","category":"section"},{"location":"keywords_and_functions/","page":"SQL keywords & functions","title":"SQL keywords & functions","text":"Octo.@sql_functions","category":"page"},{"location":"keywords_and_functions/#Octo.@sql_functions","page":"SQL keywords & functions","title":"Octo.@sql_functions","text":"@sql_functions(args...)\n\n\n\n\n\n","category":"macro"},{"location":"keywords_and_functions/#aggregate-functions","page":"SQL keywords & functions","title":"aggregate functions","text":"","category":"section"},{"location":"keywords_and_functions/","page":"SQL keywords & functions","title":"SQL keywords & functions","text":"AVG COUNT EVERY MAX MIN NOT SOME SUM","category":"page"},{"location":"keywords_and_functions/#ranking-functions","page":"SQL keywords & functions","title":"ranking functions","text":"","category":"section"},{"location":"keywords_and_functions/","page":"SQL keywords & functions","title":"SQL keywords & functions","text":"DENSE_RANK  RANK  ROW_NUMBER","category":"page"}]
}
