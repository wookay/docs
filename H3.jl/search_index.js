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
    "text": "note: Note\nmost of the documents take fromhttps://github.com/uber/h3/tree/master/docs/api\nhttps://github.com/uber/h3/blob/master/src/h3lib/include/h3api.h.in"
},

{
    "location": "API/#H3.Lib.H3Index",
    "page": "API",
    "title": "H3.Lib.H3Index",
    "category": "type",
    "text": "H3Index\n\nthe H3Index fits within a 64-bit unsigned integer\n\n\n\n\n\n"
},

{
    "location": "API/#H3.Lib.GeoCoord",
    "page": "API",
    "title": "H3.Lib.GeoCoord",
    "category": "type",
    "text": "GeoCoord\n\nlatitude/longitude in radians\n\n\n\n\n\n"
},

{
    "location": "API/#H3.Lib.GeoBoundary",
    "page": "API",
    "title": "H3.Lib.GeoBoundary",
    "category": "type",
    "text": "GeoBoundary\n\ncell boundary in latitude/longitude\n\n\n\n\n\n"
},

{
    "location": "API/#H3.Lib.CoordIJ",
    "page": "API",
    "title": "H3.Lib.CoordIJ",
    "category": "type",
    "text": "CoordIJ\n\nIJ hexagon coordinates\n\n\n\n\n\n"
},

{
    "location": "API/#Types-1",
    "page": "API",
    "title": "Types",
    "category": "section",
    "text": "H3Index\nGeoCoord\nGeoBoundary\nCoordIJ"
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
    "text": "h3ToGeoBoundary(h::H3Index)::GeoBoundary\n\nFinds the boundary of the index.\n\n\n\n\n\n"
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

]}
