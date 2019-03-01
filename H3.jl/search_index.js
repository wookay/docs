var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Home",
    "title": "Home",
    "category": "page",
    "text": ""
},

{
    "location": "API/#",
    "page": "API",
    "title": "API",
    "category": "page",
    "text": ""
},

{
    "location": "API/#H3.API-1",
    "page": "API",
    "title": "H3.API",
    "category": "section",
    "text": "note: Note\nthe documents taken fromhttps://github.com/uber/h3/tree/master/docs/api\nhttps://github.com/uber/h3/blob/master/src/h3lib/include/h3api.h.in"
},

{
    "location": "API/#H3.API.geoToH3",
    "page": "API",
    "title": "H3.API.geoToH3",
    "category": "function",
    "text": "geoToH3(location::GeoCoord, resolution::Int)::H3Index\n\nIndexes the location at the specified resolution.\n\n\n\n\n\n"
},

{
    "location": "API/#H3.API.h3ToGeo",
    "page": "API",
    "title": "H3.API.h3ToGeo",
    "category": "function",
    "text": "h3ToGeo(h::H3Index)::GeoCoord\n\nFinds the centroid of the index.\n\n\n\n\n\n"
},

{
    "location": "API/#H3.API.h3ToGeoBoundary",
    "page": "API",
    "title": "H3.API.h3ToGeoBoundary",
    "category": "function",
    "text": "h3ToGeoBoundary(h::H3Index)::Vector{GeoCoord}\n\nFinds the boundary of the index.\n\n\n\n\n\n"
},

{
    "location": "API/#Indexing-functions-1",
    "page": "API",
    "title": "Indexing functions",
    "category": "section",
    "text": "geoToH3\nh3ToGeo\nh3ToGeoBoundary"
},

{
    "location": "API/#H3.API.h3GetResolution",
    "page": "API",
    "title": "H3.API.h3GetResolution",
    "category": "function",
    "text": "h3GetResolution(h::H3Index)::Int\n\nReturns the resolution of the index.\n\n\n\n\n\n"
},

{
    "location": "API/#H3.API.h3GetBaseCell",
    "page": "API",
    "title": "H3.API.h3GetBaseCell",
    "category": "function",
    "text": "h3GetBaseCell(h::H3Index)::Int\n\nReturns the base cell number of the index.\n\n\n\n\n\n"
},

{
    "location": "API/#H3.API.stringToH3",
    "page": "API",
    "title": "H3.API.stringToH3",
    "category": "function",
    "text": "stringToH3(str::String)::H3Index\n\nConverts the string representation to H3Index (UInt64) representation.\n\n\n\n\n\n"
},

{
    "location": "API/#H3.API.h3ToString",
    "page": "API",
    "title": "H3.API.h3ToString",
    "category": "function",
    "text": "h3ToString(h::H3Index)::String\n\nConverts the H3Index representation of the index to the string representation.\n\n\n\n\n\n"
},

{
    "location": "API/#H3.API.h3IsValid",
    "page": "API",
    "title": "H3.API.h3IsValid",
    "category": "function",
    "text": "h3IsValid(h::H3Index)::Bool\n\nReturns true if this is a valid H3 index.\n\n\n\n\n\n"
},

{
    "location": "API/#H3.API.h3IsResClassIII",
    "page": "API",
    "title": "H3.API.h3IsResClassIII",
    "category": "function",
    "text": "h3IsResClassIII(h::H3Index)::Bool\n\nReturns true if this index has a resolution with Class III orientation.\n\n\n\n\n\n"
},

{
    "location": "API/#H3.API.h3IsPentagon",
    "page": "API",
    "title": "H3.API.h3IsPentagon",
    "category": "function",
    "text": "h3IsPentagon(h::H3Index)::Bool\n\nReturns true if this index represents a pentagonal cell.\n\n\n\n\n\n"
},

{
    "location": "API/#Index-inspection-functions-1",
    "page": "API",
    "title": "Index inspection functions",
    "category": "section",
    "text": "h3GetResolution\nh3GetBaseCell\nstringToH3\nh3ToString\nh3IsValid\nh3IsResClassIII\nh3IsPentagon"
},

{
    "location": "API/#H3.API.kRing",
    "page": "API",
    "title": "H3.API.kRing",
    "category": "function",
    "text": "kRing(origin::H3Index, k::Int)::Vector{H3Index}\n\nk-rings produces indices within k distance of the origin index.\n\n\n\n\n\n"
},

{
    "location": "API/#H3.API.maxKringSize",
    "page": "API",
    "title": "H3.API.maxKringSize",
    "category": "function",
    "text": "maxKringSize(k::Int)::Int\n\nMaximum number of indices that result from the kRing algorithm with the given k.\n\n\n\n\n\n"
},

{
    "location": "API/#H3.API.kRingDistances",
    "page": "API",
    "title": "H3.API.kRingDistances",
    "category": "function",
    "text": "kRingDistances(origin::H3Index, k::Int)::NamedTuple{(:out, :distances)}\n\nk-rings produces indices within k distance of the origin index.\n\n\n\n\n\n"
},

{
    "location": "API/#H3.API.hexRange",
    "page": "API",
    "title": "H3.API.hexRange",
    "category": "function",
    "text": "hexRange(origin::H3Index, k::Int)::Vector{H3Index}\n\nhexRange produces indexes within k distance of the origin index.\n\n\n\n\n\n"
},

{
    "location": "API/#H3.API.hexRangeDistances",
    "page": "API",
    "title": "H3.API.hexRangeDistances",
    "category": "function",
    "text": "hexRangeDistances(origin::H3Index, k::Int)::NamedTuple{(:out, :distances)}\n\nhexRange produces indexes within k distance of the origin index.\n\n\n\n\n\n"
},

{
    "location": "API/#H3.API.hexRanges",
    "page": "API",
    "title": "H3.API.hexRanges",
    "category": "function",
    "text": "hexRanges(h3Set::Vector{H3Index}, k::Int)::Vector{H3Index}\n\nhexRanges takes an array of input hex IDs and a max k-ring and returns an array of hexagon IDs sorted first by the original hex IDs and then by the k-ring (0 to max), with no guaranteed sorting within each k-ring group.\n\n\n\n\n\n"
},

{
    "location": "API/#H3.API.hexRing",
    "page": "API",
    "title": "H3.API.hexRing",
    "category": "function",
    "text": "hexRing(origin::H3Index, k::Int)::Vector{H3Index}\n\nProduces the hollow hexagonal ring centered at origin with sides of length k.\n\n\n\n\n\n"
},

{
    "location": "API/#H3.API.h3Line",
    "page": "API",
    "title": "H3.API.h3Line",
    "category": "function",
    "text": "h3Line(origin::H3Index, destination::H3Index)::Vector{H3Index}\n\nGiven two H3 indexes, return the line of indexes between them (inclusive).\n\n\n\n\n\n"
},

{
    "location": "API/#H3.API.h3LineSize",
    "page": "API",
    "title": "H3.API.h3LineSize",
    "category": "function",
    "text": "h3LineSize(origin::H3Index, destination::H3Index)::Int\n\nNumber of indexes in a line from the start index to the end index, to be used for allocating memory.\n\n\n\n\n\n"
},

{
    "location": "API/#H3.API.h3Distance",
    "page": "API",
    "title": "H3.API.h3Distance",
    "category": "function",
    "text": "h3Distance(origin::H3Index, h::H3Index)::Int\n\nReturns the distance in grid cells between the two indexes.\n\n\n\n\n\n"
},

{
    "location": "API/#H3.API.experimentalH3ToLocalIj",
    "page": "API",
    "title": "H3.API.experimentalH3ToLocalIj",
    "category": "function",
    "text": "experimentalH3ToLocalIj(origin::H3Index, h::H3Index)::CoordIJ\n\nProduces local IJ coordinates for an H3 index anchored by an origin.\n\n\n\n\n\n"
},

{
    "location": "API/#H3.API.experimentalLocalIjToH3",
    "page": "API",
    "title": "H3.API.experimentalLocalIjToH3",
    "category": "function",
    "text": "experimentalLocalIjToH3(origin::H3Index, ij::CoordIJ)::H3Index\n\nProduces an H3 index from local IJ coordinates anchored by an origin.\n\n\n\n\n\n"
},

{
    "location": "API/#Grid-traversal-functions-1",
    "page": "API",
    "title": "Grid traversal functions",
    "category": "section",
    "text": "kRing\nmaxKringSize\nkRingDistances\nhexRange\nhexRangeDistances\nhexRanges\nhexRing\nh3Line\nh3LineSize\nh3Distance\nexperimentalH3ToLocalIj\nexperimentalLocalIjToH3"
},

{
    "location": "API/#H3.API.h3ToParent",
    "page": "API",
    "title": "H3.API.h3ToParent",
    "category": "function",
    "text": "h3ToParent(h::H3Index, parentRes::Integer)::H3Index\n\nReturns the parent (coarser) index containing h.\n\n\n\n\n\n"
},

{
    "location": "API/#H3.API.h3ToChildren",
    "page": "API",
    "title": "H3.API.h3ToChildren",
    "category": "function",
    "text": "h3ToChildren(h::H3Index, childRes::Integer)::Vector{H3Index}\n\nPopulates children with the indexes contained by h at resolution childRes. children must be an array of at least size maxH3ToChildrenSize(h, childRes).\n\n\n\n\n\n"
},

{
    "location": "API/#H3.API.maxH3ToChildrenSize",
    "page": "API",
    "title": "H3.API.maxH3ToChildrenSize",
    "category": "function",
    "text": "maxH3ToChildrenSize(h::H3Index, childRes::Integer)::Int\n\nReturns the size of the array needed by h3ToChildren for these inputs.\n\n\n\n\n\n"
},

{
    "location": "API/#H3.API.compact",
    "page": "API",
    "title": "H3.API.compact",
    "category": "function",
    "text": "compact(h3Set::Vector{H3Index})::Vector{H3Index}\n\nCompacts the set h3Set of indexes as best as possible, into the array compactedSet. compactedSet must be at least the size of h3Set in case the set cannot be compacted.\n\n\n\n\n\n"
},

{
    "location": "API/#H3.API.uncompact",
    "page": "API",
    "title": "H3.API.uncompact",
    "category": "function",
    "text": "uncompact(compactedSet::Vector{H3Index}, res::Int)::Vector{H3Index}\n\nUncompacts the set compactedSet of indexes to the resolution res.\n\n\n\n\n\n"
},

{
    "location": "API/#H3.API.maxUncompactSize",
    "page": "API",
    "title": "H3.API.maxUncompactSize",
    "category": "function",
    "text": "maxUncompactSize(compactedSet::Vector{H3Index}, res::Int)::Int\n\nReturns the size of the array needed by uncompact.\n\n\n\n\n\n"
},

{
    "location": "API/#Hierarchical-grid-functions-1",
    "page": "API",
    "title": "Hierarchical grid functions",
    "category": "section",
    "text": "h3ToParent\nh3ToChildren\nmaxH3ToChildrenSize\ncompact\nuncompact\nmaxUncompactSize"
},

{
    "location": "API/#H3.API.polyfill",
    "page": "API",
    "title": "H3.API.polyfill",
    "category": "function",
    "text": "polyfill(geoPolygon::GeoPolygon, res::Int)::Vector{H3Index}\n\n\n\n\n\n"
},

{
    "location": "API/#H3.API.maxPolyfillSize",
    "page": "API",
    "title": "H3.API.maxPolyfillSize",
    "category": "function",
    "text": "maxPolyfillSize(geoPolygon::GeoPolygon, res::Int)::Int\n\nmaxPolyfillSize returns the number of hexagons to allocate space for when performing a polyfill on the given GeoJSON-like data structure.\n\n\n\n\n\n"
},

{
    "location": "API/#H3.API.h3SetToLinkedGeo",
    "page": "API",
    "title": "H3.API.h3SetToLinkedGeo",
    "category": "function",
    "text": "h3SetToLinkedGeo(h3Set::Vector{H3Index})::Ref{LinkedGeoPolygon}\n\nCreate a LinkedGeoPolygon describing the outline(s) of a set of hexagons. Polygon outlines will follow GeoJSON MultiPolygon order: Each polygon will have one outer loop, which is first in the list, followed by any holes.\n\n\n\n\n\n"
},

{
    "location": "API/#H3.API.destroyLinkedPolygon",
    "page": "API",
    "title": "H3.API.destroyLinkedPolygon",
    "category": "function",
    "text": "destroyLinkedPolygon(polygon::Ref{LinkedGeoPolygon})\n\nFree all allocated memory for a linked geo structure. The caller is responsible for freeing memory allocated to the input polygon struct.\n\n\n\n\n\n"
},

{
    "location": "API/#Region-functions-1",
    "page": "API",
    "title": "Region functions",
    "category": "section",
    "text": "polyfill\nmaxPolyfillSize\nh3SetToLinkedGeo\ndestroyLinkedPolygon"
},

{
    "location": "API/#H3.API.h3IndexesAreNeighbors",
    "page": "API",
    "title": "H3.API.h3IndexesAreNeighbors",
    "category": "function",
    "text": "h3IndexesAreNeighbors(origin::H3Index, destination::H3Index)::Bool\n\nReturns whether or not the provided H3Indexes are neighbors. Returns true if the indexes are neighbors, false otherwise.\n\n\n\n\n\n"
},

{
    "location": "API/#H3.API.getH3UnidirectionalEdge",
    "page": "API",
    "title": "H3.API.getH3UnidirectionalEdge",
    "category": "function",
    "text": "getH3UnidirectionalEdge(origin::H3Index, destination::H3Index)::H3Index\n\nReturns a unidirectional edge H3 index based on the provided origin and destination.\n\n\n\n\n\n"
},

{
    "location": "API/#H3.API.h3UnidirectionalEdgeIsValid",
    "page": "API",
    "title": "H3.API.h3UnidirectionalEdgeIsValid",
    "category": "function",
    "text": "h3UnidirectionalEdgeIsValid(edge::H3Index)::Bool\n\nDetermines if the provided H3Index is a valid unidirectional edge index. Returns true if it is a unidirectional edge H3Index, otherwise false.\n\n\n\n\n\n"
},

{
    "location": "API/#H3.API.getOriginH3IndexFromUnidirectionalEdge",
    "page": "API",
    "title": "H3.API.getOriginH3IndexFromUnidirectionalEdge",
    "category": "function",
    "text": "getOriginH3IndexFromUnidirectionalEdge(edge::H3Index)::H3Index\n\nReturns the origin hexagon from the unidirectional edge H3Index.\n\n\n\n\n\n"
},

{
    "location": "API/#H3.API.getDestinationH3IndexFromUnidirectionalEdge",
    "page": "API",
    "title": "H3.API.getDestinationH3IndexFromUnidirectionalEdge",
    "category": "function",
    "text": "getDestinationH3IndexFromUnidirectionalEdge(edge::H3Index)::H3Index\n\nReturns the destination hexagon from the unidirectional edge H3Index.\n\n\n\n\n\n"
},

{
    "location": "API/#H3.API.getH3IndexesFromUnidirectionalEdge",
    "page": "API",
    "title": "H3.API.getH3IndexesFromUnidirectionalEdge",
    "category": "function",
    "text": "getH3IndexesFromUnidirectionalEdge(edge::H3Index)::Tuple{H3Index, H3Index}\n\nReturns the origin, destination pair of hexagon IDs for the given edge ID, which are placed at originDestination[0] and originDestination[1] respectively.\n\n\n\n\n\n"
},

{
    "location": "API/#H3.API.getH3UnidirectionalEdgesFromHexagon",
    "page": "API",
    "title": "H3.API.getH3UnidirectionalEdgesFromHexagon",
    "category": "function",
    "text": "getH3UnidirectionalEdgesFromHexagon(origin::H3Index)::Vector{H3Index}\n\nProvides all of the unidirectional edges from the current H3Index. edges must be of length 6, and the number of undirectional edges placed in the array may be less than 6.\n\n\n\n\n\n"
},

{
    "location": "API/#H3.API.getH3UnidirectionalEdgeBoundary",
    "page": "API",
    "title": "H3.API.getH3UnidirectionalEdgeBoundary",
    "category": "function",
    "text": "getH3UnidirectionalEdgeBoundary(edge::H3Index)::Vector{GeoCoord}\n\nProvides the coordinates defining the unidirectional edge.\n\n\n\n\n\n"
},

{
    "location": "API/#Unidirectional-edge-functions-1",
    "page": "API",
    "title": "Unidirectional edge functions",
    "category": "section",
    "text": "h3IndexesAreNeighbors\ngetH3UnidirectionalEdge\nh3UnidirectionalEdgeIsValid\ngetOriginH3IndexFromUnidirectionalEdge\ngetDestinationH3IndexFromUnidirectionalEdge\ngetH3IndexesFromUnidirectionalEdge\ngetH3UnidirectionalEdgesFromHexagon\ngetH3UnidirectionalEdgeBoundary"
},

{
    "location": "API/#H3.API.degsToRads",
    "page": "API",
    "title": "H3.API.degsToRads",
    "category": "function",
    "text": "degsToRads(degrees::Union{Cdouble,Integer})::Cdouble\n\nConverts degrees to radians.\n\n\n\n\n\n"
},

{
    "location": "API/#H3.API.radsToDegs",
    "page": "API",
    "title": "H3.API.radsToDegs",
    "category": "function",
    "text": "radsToDegs(radians::Union{Cdouble,Integer})::Cdouble\n\nConverts radians to degrees.\n\n\n\n\n\n"
},

{
    "location": "API/#H3.API.hexAreaKm2",
    "page": "API",
    "title": "H3.API.hexAreaKm2",
    "category": "function",
    "text": "hexAreaKm2(res::Integer)::Cdouble\n\nAverage hexagon area in square kilometers at the given resolution.\n\n\n\n\n\n"
},

{
    "location": "API/#H3.API.hexAreaM2",
    "page": "API",
    "title": "H3.API.hexAreaM2",
    "category": "function",
    "text": "hexAreaM2(res::Integer)::Cdouble\n\nAverage hexagon area in square meters at the given resolution.\n\n\n\n\n\n"
},

{
    "location": "API/#H3.API.edgeLengthKm",
    "page": "API",
    "title": "H3.API.edgeLengthKm",
    "category": "function",
    "text": "edgeLengthKm(res::Integer)::Cdouble\n\nAverage hexagon edge length in kilometers at the given resolution.\n\n\n\n\n\n"
},

{
    "location": "API/#H3.API.edgeLengthM",
    "page": "API",
    "title": "H3.API.edgeLengthM",
    "category": "function",
    "text": "edgeLengthM(res::Integer)::Cdouble\n\nAverage hexagon edge length in meters at the given resolution.\n\n\n\n\n\n"
},

{
    "location": "API/#H3.API.numHexagons",
    "page": "API",
    "title": "H3.API.numHexagons",
    "category": "function",
    "text": "numHexagons(res::Integer)::Int64\n\nNumber of unique H3 indexes at the given resolution.\n\n\n\n\n\n"
},

{
    "location": "API/#H3.API.getRes0Indexes",
    "page": "API",
    "title": "H3.API.getRes0Indexes",
    "category": "function",
    "text": "getRes0Indexes()::Vector{H3Index}\n\nAll the resolution 0 H3 indexes.\n\n\n\n\n\n"
},

{
    "location": "API/#H3.API.res0IndexCount",
    "page": "API",
    "title": "H3.API.res0IndexCount",
    "category": "function",
    "text": "res0IndexCount()::Cint\n\nNumber of resolution 0 H3 indexes.\n\n\n\n\n\n"
},

{
    "location": "API/#Miscellaneous-H3-functions-1",
    "page": "API",
    "title": "Miscellaneous H3 functions",
    "category": "section",
    "text": "degsToRads\nradsToDegs\nhexAreaKm2\nhexAreaM2\nedgeLengthKm\nedgeLengthM\nnumHexagons\ngetRes0Indexes\nres0IndexCount"
},

{
    "location": "API/#H3.API.ijkToHex2d",
    "page": "API",
    "title": "H3.API.ijkToHex2d",
    "category": "function",
    "text": "ijkToHex2d(c::CoordIJK)::Vec2d\n\nFind the center point in 2D cartesian coordinates of a hex.\n\n\n\n\n\n"
},

{
    "location": "API/#H3.API.hex2dToCoordIJK",
    "page": "API",
    "title": "H3.API.hex2dToCoordIJK",
    "category": "function",
    "text": "hex2dToCoordIJK(v::Vec2d)::CoordIJK\n\nDetermine the containing hex in ijk+ coordinates for a 2D cartesian coordinate vector (from DGGRID).\n\n\n\n\n\n"
},

{
    "location": "API/#H3.API.h3ToFaceIjk",
    "page": "API",
    "title": "H3.API.h3ToFaceIjk",
    "category": "function",
    "text": "h3ToFaceIjk(h::H3Index)::FaceIJK\n\nConvert an H3Index to a FaceIJK address.\n\n\n\n\n\n"
},

{
    "location": "API/#H3.API.geoToVec3d",
    "page": "API",
    "title": "H3.API.geoToVec3d",
    "category": "function",
    "text": "geoToVec3d(geo::GeoCoord)::Vec3d\n\nCalculate the 3D coordinate on unit sphere from the latitude and longitude.\n\n\n\n\n\n"
},

{
    "location": "API/#H3.API.geoToFaceIjk",
    "page": "API",
    "title": "H3.API.geoToFaceIjk",
    "category": "function",
    "text": "geoToFaceIjk(geo::GeoCoord, res::Int)::FaceIJK\n\nEncodes a coordinate on the sphere to the FaceIJK address of the containing cell at the specified resolution.\n\n\n\n\n\n"
},

{
    "location": "API/#H3.API.ijkNormalize",
    "page": "API",
    "title": "H3.API.ijkNormalize",
    "category": "function",
    "text": "ijkNormalize(c::CoordIJK)::CoordIJK\n\nNormalizes ijk coordinates by setting the components to the smallest possible values. Works in place.\n\n\n\n\n\n"
},

{
    "location": "API/#Coordinate-Systems-1",
    "page": "API",
    "title": "Coordinate Systems",
    "category": "section",
    "text": "ijkToHex2d\nhex2dToCoordIJK\nh3ToFaceIjk\ngeoToVec3d\ngeoToFaceIjk\nijkNormalize"
},

{
    "location": "Lib/#",
    "page": "Lib",
    "title": "Lib",
    "category": "page",
    "text": ""
},

{
    "location": "Lib/#H3.Lib-1",
    "page": "Lib",
    "title": "H3.Lib",
    "category": "section",
    "text": "note: Note\nthe documents taken fromhttps://github.com/uber/h3/tree/master/docs/api\nhttps://github.com/uber/h3/blob/master/src/h3lib/include/h3api.h.in"
},

{
    "location": "Lib/#H3.Lib.H3Index",
    "page": "Lib",
    "title": "H3.Lib.H3Index",
    "category": "type",
    "text": "const H3Index = UInt64\n\nthe H3Index fits within a 64-bit unsigned integer\n\n\n\n\n\n"
},

{
    "location": "Lib/#H3.Lib.GeoCoord",
    "page": "Lib",
    "title": "H3.Lib.GeoCoord",
    "category": "type",
    "text": "struct GeoCoord\n    lat::Cdouble\n    lon::Cdouble\nend\n\nlatitude/longitude in radians\n\n\n\n\n\n"
},

{
    "location": "Lib/#H3.Lib.CoordIJ",
    "page": "Lib",
    "title": "H3.Lib.CoordIJ",
    "category": "type",
    "text": "struct CoordIJ\n    i::Cint\n    j::Cint\nend\n\nIJ hexagon coordinates\n\n\n\n\n\n"
},

{
    "location": "Lib/#H3.Lib.Vec2d",
    "page": "Lib",
    "title": "H3.Lib.Vec2d",
    "category": "type",
    "text": "struct Vec2d\n    x::Cdouble\n    y::Cdouble\nend\n\n2D floating-point vector\n\n\n\n\n\n"
},

{
    "location": "Lib/#H3.Lib.Vec3d",
    "page": "Lib",
    "title": "H3.Lib.Vec3d",
    "category": "type",
    "text": "struct Vec3d\n    x::Cdouble\n    y::Cdouble\n    z::Cdouble\nend\n\n3D floating point structure\n\n\n\n\n\n"
},

{
    "location": "Lib/#H3.Lib.CoordIJK",
    "page": "Lib",
    "title": "H3.Lib.CoordIJK",
    "category": "type",
    "text": "struct CoordIJK\n    i::Cint\n    j::Cint\n    k::Cint\nend\n\nIJK hexagon coordinates Each axis is spaced 120 degrees apart.\n\n\n\n\n\n"
},

{
    "location": "Lib/#H3.Lib.FaceIJK",
    "page": "Lib",
    "title": "H3.Lib.FaceIJK",
    "category": "type",
    "text": "struct FaceIJK\n    face::Cint\n    coord::CoordIJK\nend\n\nFace number and ijk coordinates on that face-centered coordinate system\n\n\n\n\n\n"
},

{
    "location": "Lib/#Types-1",
    "page": "Lib",
    "title": "Types",
    "category": "section",
    "text": "Lib.H3Index\nLib.GeoCoord\nLib.CoordIJ\nLib.Vec2d\nLib.Vec3d\nLib.CoordIJK\nLib.FaceIJK"
},

]}
