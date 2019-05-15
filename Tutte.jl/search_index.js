var documenterSearchIndex = {"docs":
[{"location":"#Tutte-፨-1","page":"Home","title":"Tutte ፨","text":"","category":"section"},{"location":"#","page":"Home","title":"Home","text":"using Tutte.Graphs\n@nodes A B C D E F G\ng = Graph(union(A → C → F → G, A → D → F, B → D → G, B → E → G))\nw = Weighted([A 5→ C 2→ F 1→ G], [A 3→ D 4→ F], [B 9→ D 8→ G], [B 6→ E 4→ G])\nw.graph == g\nw.weights == [5, 2, 1, 3, 4, 9, 8, 6, 4]","category":"page"},{"location":"Graphs/#Graphs-1","page":"Graphs","title":"Graphs","text":"","category":"section"},{"location":"Graphs/#Graph-1","page":"Graphs","title":"Graph","text":"","category":"section"},{"location":"Graphs/#","page":"Graphs","title":"Graphs","text":"Graphs.Graph\nGraphs.addedges(g::Graph{T}, edge::Edge{T}) where T\nGraphs.addedges(g::Graph{T}, edges::Edges{T}) where T\nGraphs.addedges!(callback, g::Graph{T}, edge::Edge{T}) where T\nGraphs.addedges!(callback, g::Graph{T}, edges::Edges{T}) where T\nGraphs.cutedges(g::Graph{T}, edge::Edge{T}) where T\nGraphs.cutedges(g::Graph{T}, edges::Edges{T}) where T\nGraphs.cutedges!(callback, g::Graph{T}, edge::Edge{T}) where T\nGraphs.cutedges!(callback, g::Graph{T}, edges::Edges{T}) where T","category":"page"},{"location":"Graphs/#Tutte.Graphs.Graph","page":"Graphs","title":"Tutte.Graphs.Graph","text":"Graph{T}\n\n\n\n\n\n","category":"type"},{"location":"Graphs/#Tutte.Graphs.addedges-Union{Tuple{T}, Tuple{Graph{T},Edge{T}}} where T","page":"Graphs","title":"Tutte.Graphs.addedges","text":"addedges(g::Graph{T}, edge::Edge{T})::Graph{T} where T\n\n\n\n\n\n","category":"method"},{"location":"Graphs/#Tutte.Graphs.addedges-Union{Tuple{T}, Tuple{Graph{T},Edges{T}}} where T","page":"Graphs","title":"Tutte.Graphs.addedges","text":"addedges(g::Graph{T}, edges::Edges{T})::Graph{T} where T\n\n\n\n\n\n","category":"method"},{"location":"Graphs/#Tutte.Graphs.addedges!-Union{Tuple{T}, Tuple{Any,Graph{T},Edge{T}}} where T","page":"Graphs","title":"Tutte.Graphs.addedges!","text":"addedges!(callback, g::Graph{T}, edge::Edge{T}) where T\n\n\n\n\n\n","category":"method"},{"location":"Graphs/#Tutte.Graphs.addedges!-Union{Tuple{T}, Tuple{Any,Graph{T},Edges{T}}} where T","page":"Graphs","title":"Tutte.Graphs.addedges!","text":"addedges!(callback, g::Graph{T}, edges::Edges{T}) where T\n\n\n\n\n\n","category":"method"},{"location":"Graphs/#Tutte.Graphs.cutedges-Union{Tuple{T}, Tuple{Graph{T},Edge{T}}} where T","page":"Graphs","title":"Tutte.Graphs.cutedges","text":"cutedges(g::Graph{T}, edge::Edge{T})::Graph{T} where T\n\n\n\n\n\n","category":"method"},{"location":"Graphs/#Tutte.Graphs.cutedges-Union{Tuple{T}, Tuple{Graph{T},Edges{T}}} where T","page":"Graphs","title":"Tutte.Graphs.cutedges","text":"cutedges(g::Graph{T}, edges::Edges{T})::Graph{T} where T\n\n\n\n\n\n","category":"method"},{"location":"Graphs/#Tutte.Graphs.cutedges!-Union{Tuple{T}, Tuple{Any,Graph{T},Edge{T}}} where T","page":"Graphs","title":"Tutte.Graphs.cutedges!","text":"cutedges!(callback, g::Graph{T}, edge::Edge{T}) where T\n\n\n\n\n\n","category":"method"},{"location":"Graphs/#Tutte.Graphs.cutedges!-Union{Tuple{T}, Tuple{Any,Graph{T},Edges{T}}} where T","page":"Graphs","title":"Tutte.Graphs.cutedges!","text":"cutedges!(callback, g::Graph{T}, edges::Edges{T}) where T\n\n\n\n\n\n","category":"method"},{"location":"Graphs/#Edges-1","page":"Graphs","title":"Edges","text":"","category":"section"},{"location":"Graphs/#","page":"Graphs","title":"Graphs","text":"Graphs.Edges\nGraphs.union(args::Union{Edge{T}, Edges{T}}...) where T","category":"page"},{"location":"Graphs/#Tutte.Graphs.Edges","page":"Graphs","title":"Tutte.Graphs.Edges","text":"Edges{T}\n\n\n\n\n\n","category":"type"},{"location":"Graphs/#Base.union-Union{Tuple{Vararg{Union{Edge{T}, Edges{T}},N} where N}, Tuple{T}} where T","page":"Graphs","title":"Base.union","text":"union(args::Union{Edge{T}, Edges{T}}...)::Edges{T} where T\n\n\n\n\n\n","category":"method"},{"location":"Graphs/#Edge-1","page":"Graphs","title":"Edge","text":"","category":"section"},{"location":"Graphs/#","page":"Graphs","title":"Graphs","text":"Graphs.Edge\nGraphs.:⇿\nGraphs.:→\nGraphs.:←\nGraphs.:⇄\nGraphs.:⇆","category":"page"},{"location":"Graphs/#Tutte.Graphs.Edge","page":"Graphs","title":"Tutte.Graphs.Edge","text":"Edge{T}\n\n\n\n\n\n","category":"type"},{"location":"Graphs/#Tutte.Graphs.:⇿","page":"Graphs","title":"Tutte.Graphs.:⇿","text":"⇿\n\n\n\n\n\n","category":"function"},{"location":"Graphs/#Tutte.Graphs.:→","page":"Graphs","title":"Tutte.Graphs.:→","text":"→\n\n\n\n\n\n","category":"function"},{"location":"Graphs/#Tutte.Graphs.:←","page":"Graphs","title":"Tutte.Graphs.:←","text":"←\n\n\n\n\n\n","category":"function"},{"location":"Graphs/#Tutte.Graphs.:⇄","page":"Graphs","title":"Tutte.Graphs.:⇄","text":"⇄\n\n\n\n\n\n","category":"function"},{"location":"Graphs/#Tutte.Graphs.:⇆","page":"Graphs","title":"Tutte.Graphs.:⇆","text":"⇆\n\n\n\n\n\n","category":"function"},{"location":"Graphs/#Node-1","page":"Graphs","title":"Node","text":"","category":"section"},{"location":"Graphs/#","page":"Graphs","title":"Graphs","text":"Graphs.Node\nGraphs.@nodes","category":"page"},{"location":"Graphs/#Tutte.Graphs.Node","page":"Graphs","title":"Tutte.Graphs.Node","text":"Node\n\n\n\n\n\n","category":"type"},{"location":"Graphs/#Tutte.Graphs.@nodes","page":"Graphs","title":"Tutte.Graphs.@nodes","text":"@nodes\n\n\n\n\n\n","category":"macro"},{"location":"Graphs/#Weighted-1","page":"Graphs","title":"Weighted","text":"","category":"section"},{"location":"Graphs/#","page":"Graphs","title":"Graphs","text":"Graphs.Weighted\nGraphs.addedges!(callback, w::Weighted{T, WT}, arg::Array{Any, 2}) where {T, WT}\nGraphs.cutedges!(callback, w::Weighted{T, WT}, edge::Edge{T}) where {T, WT}\nGraphs.cutedges!(callback, w::Weighted{T, WT}, edges::Edges{T}) where {T, WT}","category":"page"},{"location":"Graphs/#Tutte.Graphs.Weighted","page":"Graphs","title":"Tutte.Graphs.Weighted","text":"Weighted{T, WT}\n\n\n\n\n\n","category":"type"},{"location":"Graphs/#Tutte.Graphs.addedges!-Union{Tuple{WT}, Tuple{T}, Tuple{Any,Weighted{T,WT},Array{Any,2}}} where WT where T","page":"Graphs","title":"Tutte.Graphs.addedges!","text":"addedges!(callback, w::Weighted{T, WT}, arg::Array{Any, 2}) where {T, WT}\n\n\n\n\n\n","category":"method"},{"location":"Graphs/#Tutte.Graphs.cutedges!-Union{Tuple{WT}, Tuple{T}, Tuple{Any,Weighted{T,WT},Edge{T}}} where WT where T","page":"Graphs","title":"Tutte.Graphs.cutedges!","text":"cutedges!(callback, w::Weighted{T, WT}, edge::Edge{T}) where {T, WT}\n\n\n\n\n\n","category":"method"},{"location":"Graphs/#Tutte.Graphs.cutedges!-Union{Tuple{WT}, Tuple{T}, Tuple{Any,Weighted{T,WT},Edges{T}}} where WT where T","page":"Graphs","title":"Tutte.Graphs.cutedges!","text":"cutedges!(callback, w::Weighted{T, WT}, edges::Edges{T}) where {T, WT}\n\n\n\n\n\n","category":"method"}]
}
