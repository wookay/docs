var documenterSearchIndex = {"docs":
[{"location":"#Tutte-፨-1","page":"Home","title":"Tutte ፨","text":"","category":"section"},{"location":"#","page":"Home","title":"Home","text":"using Tutte.Graphs # @nodes WTGraph Weighted →\n@nodes A B C D E F G\ng = WTGraph(union(A → C → F → G, A → D → F, B → D → G, B → E → G))\nw = Weighted([A 5→ C 2→ F 1→ G], [A 3→ D 4→ F], [B 9→ D 8→ G], [B 6→ E 4→ G])\nw.graph == g\nw.graph.edges.list == [A → C, C → F, F → G, A → D, D → F, B → D, D → G, B → E, E → G]\nw.graph.nodes == Set([A, B, C, D, E, F, G])\nw.weights == [5, 2, 1, 3, 4, 9, 8, 6, 4]","category":"page"},{"location":"Graphs/#Graphs-1","page":"Graphs","title":"Graphs","text":"","category":"section"},{"location":"Graphs/#WTGraph-1","page":"Graphs","title":"WTGraph","text":"","category":"section"},{"location":"Graphs/#","page":"Graphs","title":"Graphs","text":"Graphs.WTGraph\nGraphs.add_edges(g::WTGraph{T}, edge::WTEdge{T}) where T\nGraphs.add_edges(g::WTGraph{T}, edges::WTEdges{T}) where T\nGraphs.add_edges!(callback, g::WTGraph{T}, edge::WTEdge{T}) where T\nGraphs.add_edges!(callback, g::WTGraph{T}, edges::WTEdges{T}) where T\nGraphs.remove_edges(g::WTGraph{T}, edge::WTEdge{T}) where T\nGraphs.remove_edges(g::WTGraph{T}, edges::WTEdges{T}) where T\nGraphs.remove_edges!(callback, g::WTGraph{T}, edge::WTEdge{T}) where T\nGraphs.remove_edges!(callback, g::WTGraph{T}, edges::WTEdges{T}) where T","category":"page"},{"location":"Graphs/#Tutte.Graphs.WTGraph","page":"Graphs","title":"Tutte.Graphs.WTGraph","text":"WTGraph{T}\n\n\n\n\n\n","category":"type"},{"location":"Graphs/#Tutte.Graphs.add_edges-Union{Tuple{T}, Tuple{WTGraph{T},WTEdge{T}}} where T","page":"Graphs","title":"Tutte.Graphs.add_edges","text":"add_edges(g::WTGraph{T}, edge::WTEdge{T})::WTGraph{T} where T\n\n\n\n\n\n","category":"method"},{"location":"Graphs/#Tutte.Graphs.add_edges-Union{Tuple{T}, Tuple{WTGraph{T},WTEdges{T}}} where T","page":"Graphs","title":"Tutte.Graphs.add_edges","text":"add_edges(g::WTGraph{T}, edges::WTEdges{T})::WTGraph{T} where T\n\n\n\n\n\n","category":"method"},{"location":"Graphs/#Tutte.Graphs.add_edges!-Union{Tuple{T}, Tuple{Any,WTGraph{T},WTEdge{T}}} where T","page":"Graphs","title":"Tutte.Graphs.add_edges!","text":"add_edges!(callback, g::WTGraph{T}, edge::WTEdge{T}) where T\n\n\n\n\n\n","category":"method"},{"location":"Graphs/#Tutte.Graphs.add_edges!-Union{Tuple{T}, Tuple{Any,WTGraph{T},WTEdges{T}}} where T","page":"Graphs","title":"Tutte.Graphs.add_edges!","text":"add_edges!(callback, g::WTGraph{T}, edges::WTEdges{T}) where T\n\n\n\n\n\n","category":"method"},{"location":"Graphs/#Tutte.Graphs.remove_edges-Union{Tuple{T}, Tuple{WTGraph{T},WTEdge{T}}} where T","page":"Graphs","title":"Tutte.Graphs.remove_edges","text":"remove_edges(g::WTGraph{T}, edge::WTEdge{T})::WTGraph{T} where T\n\n\n\n\n\n","category":"method"},{"location":"Graphs/#Tutte.Graphs.remove_edges-Union{Tuple{T}, Tuple{WTGraph{T},WTEdges{T}}} where T","page":"Graphs","title":"Tutte.Graphs.remove_edges","text":"remove_edges(g::WTGraph{T}, edges::WTEdges{T})::WTGraph{T} where T\n\n\n\n\n\n","category":"method"},{"location":"Graphs/#Tutte.Graphs.remove_edges!-Union{Tuple{T}, Tuple{Any,WTGraph{T},WTEdge{T}}} where T","page":"Graphs","title":"Tutte.Graphs.remove_edges!","text":"remove_edges!(callback, g::WTGraph{T}, edge::WTEdge{T}) where T\n\n\n\n\n\n","category":"method"},{"location":"Graphs/#Tutte.Graphs.remove_edges!-Union{Tuple{T}, Tuple{Any,WTGraph{T},WTEdges{T}}} where T","page":"Graphs","title":"Tutte.Graphs.remove_edges!","text":"remove_edges!(callback, g::WTGraph{T}, edges::WTEdges{T}) where T\n\n\n\n\n\n","category":"method"},{"location":"Graphs/#WTEdges-1","page":"Graphs","title":"WTEdges","text":"","category":"section"},{"location":"Graphs/#","page":"Graphs","title":"Graphs","text":"Graphs.WTEdges\nGraphs.union(args::Union{WTEdge{T}, WTEdges{T}}...) where T","category":"page"},{"location":"Graphs/#Tutte.Graphs.WTEdges","page":"Graphs","title":"Tutte.Graphs.WTEdges","text":"WTEdges{T}\n\n\n\n\n\n","category":"type"},{"location":"Graphs/#Base.union-Union{Tuple{Vararg{Union{WTEdge{T}, WTEdges{T}},N} where N}, Tuple{T}} where T","page":"Graphs","title":"Base.union","text":"union(args::Union{WTEdge{T}, WTEdges{T}}...)::WTEdges{T} where T\n\n\n\n\n\n","category":"method"},{"location":"Graphs/#WTEdge-1","page":"Graphs","title":"WTEdge","text":"","category":"section"},{"location":"Graphs/#","page":"Graphs","title":"Graphs","text":"Graphs.WTEdge\nGraphs.:⇿\nGraphs.:→\nGraphs.:←\nGraphs.:⇄\nGraphs.:⇆","category":"page"},{"location":"Graphs/#Tutte.Graphs.WTEdge","page":"Graphs","title":"Tutte.Graphs.WTEdge","text":"WTEdge{T}\n\n\n\n\n\n","category":"type"},{"location":"Graphs/#Tutte.Graphs.:⇿","page":"Graphs","title":"Tutte.Graphs.:⇿","text":"⇿\n\n\n\n\n\n","category":"function"},{"location":"Graphs/#Tutte.Graphs.:→","page":"Graphs","title":"Tutte.Graphs.:→","text":"→\n\n\n\n\n\n","category":"function"},{"location":"Graphs/#Tutte.Graphs.:←","page":"Graphs","title":"Tutte.Graphs.:←","text":"←\n\n\n\n\n\n","category":"function"},{"location":"Graphs/#Tutte.Graphs.:⇄","page":"Graphs","title":"Tutte.Graphs.:⇄","text":"⇄\n\n\n\n\n\n","category":"function"},{"location":"Graphs/#Tutte.Graphs.:⇆","page":"Graphs","title":"Tutte.Graphs.:⇆","text":"⇆\n\n\n\n\n\n","category":"function"},{"location":"Graphs/#WTNode-1","page":"Graphs","title":"WTNode","text":"","category":"section"},{"location":"Graphs/#","page":"Graphs","title":"Graphs","text":"Graphs.WTNode\nGraphs.@nodes","category":"page"},{"location":"Graphs/#Tutte.Graphs.WTNode","page":"Graphs","title":"Tutte.Graphs.WTNode","text":"WTNode\n\n\n\n\n\n","category":"type"},{"location":"Graphs/#Tutte.Graphs.@nodes","page":"Graphs","title":"Tutte.Graphs.@nodes","text":"@nodes\n\n\n\n\n\n","category":"macro"},{"location":"Graphs/#Weighted-1","page":"Graphs","title":"Weighted","text":"","category":"section"},{"location":"Graphs/#","page":"Graphs","title":"Graphs","text":"Graphs.Weighted\nGraphs.add_edges!(callback, w::Weighted{T, WT}, arg::Array{Any, 2}) where {T, WT}\nGraphs.remove_edges!(callback, w::Weighted{T, WT}, edge::WTEdge{T}) where {T, WT}\nGraphs.remove_edges!(callback, w::Weighted{T, WT}, edges::WTEdges{T}) where {T, WT}","category":"page"},{"location":"Graphs/#Tutte.Graphs.Weighted","page":"Graphs","title":"Tutte.Graphs.Weighted","text":"Weighted{T, WT}\n\n\n\n\n\n","category":"type"},{"location":"Graphs/#Tutte.Graphs.add_edges!-Union{Tuple{WT}, Tuple{T}, Tuple{Any,Weighted{T,WT},Array{Any,2}}} where WT where T","page":"Graphs","title":"Tutte.Graphs.add_edges!","text":"add_edges!(callback, w::Weighted{T, WT}, arg::Array{Any, 2}) where {T, WT}\n\n\n\n\n\n","category":"method"},{"location":"Graphs/#Tutte.Graphs.remove_edges!-Union{Tuple{WT}, Tuple{T}, Tuple{Any,Weighted{T,WT},WTEdge{T}}} where WT where T","page":"Graphs","title":"Tutte.Graphs.remove_edges!","text":"remove_edges!(callback, w::Weighted{T, WT}, edge::WTEdge{T}) where {T, WT}\n\n\n\n\n\n","category":"method"},{"location":"Graphs/#Tutte.Graphs.remove_edges!-Union{Tuple{WT}, Tuple{T}, Tuple{Any,Weighted{T,WT},WTEdges{T}}} where WT where T","page":"Graphs","title":"Tutte.Graphs.remove_edges!","text":"remove_edges!(callback, w::Weighted{T, WT}, edges::WTEdges{T}) where {T, WT}\n\n\n\n\n\n","category":"method"}]
}