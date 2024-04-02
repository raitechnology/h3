"use strict";(self.webpackChunkh3_website=self.webpackChunkh3_website||[]).push([[434],{492:e=>{e.exports=JSON.parse('{"pluginId":"default","version":"3.x","label":"3.x","banner":"unmaintained","badge":true,"className":"docs-version-3.x","isLast":false,"docsSidebars":{"version-3.x/someSidebar":[{"collapsed":true,"type":"category","label":"Getting Started","items":[{"type":"link","label":"Introduction","href":"/docs/3.x/","docId":"README"},{"collapsed":true,"type":"category","label":"Highlights","items":[{"type":"link","label":"Aggregation","href":"/docs/3.x/highlights/aggregation","docId":"highlights/aggregation"},{"type":"link","label":"Joining","href":"/docs/3.x/highlights/joining","docId":"highlights/joining"},{"type":"link","label":"Flow Modelling","href":"/docs/3.x/highlights/flowmodel","docId":"highlights/flowmodel"},{"type":"link","label":"Machine Learning","href":"/docs/3.x/highlights/ml","docId":"highlights/ml"},{"type":"link","label":"Indexing","href":"/docs/3.x/highlights/indexing","docId":"highlights/indexing"}],"collapsible":true},{"collapsed":true,"type":"category","label":"Comparisons","items":[{"type":"link","label":"S2","href":"/docs/3.x/comparisons/s2","docId":"comparisons/s2"},{"type":"link","label":"Geohash","href":"/docs/3.x/comparisons/geohash","docId":"comparisons/geohash"},{"type":"link","label":"Hexbin","href":"/docs/3.x/comparisons/hexbin","docId":"comparisons/hexbin"},{"type":"link","label":"Admin Boundaries","href":"/docs/3.x/comparisons/admin","docId":"comparisons/admin"},{"type":"link","label":"Placekey","href":"/docs/3.x/comparisons/placekey","docId":"comparisons/placekey"}],"collapsible":true},{"type":"link","label":"Installation","href":"/docs/3.x/installation","docId":"installation"},{"type":"link","label":"Quick Start","href":"/docs/3.x/quickstart","docId":"quickstart"}],"collapsible":true},{"collapsed":true,"type":"category","label":"API Reference","items":[{"type":"link","label":"Indexing","href":"/docs/3.x/api/indexing","docId":"api/indexing"},{"type":"link","label":"Inspection","href":"/docs/3.x/api/inspection","docId":"api/inspection"},{"type":"link","label":"Traversal","href":"/docs/3.x/api/traversal","docId":"api/traversal"},{"type":"link","label":"Hierarchy","href":"/docs/3.x/api/hierarchy","docId":"api/hierarchy"},{"type":"link","label":"Regions","href":"/docs/3.x/api/regions","docId":"api/regions"},{"type":"link","label":"Unidirectional edges","href":"/docs/3.x/api/uniedge","docId":"api/uniedge"},{"type":"link","label":"Miscellaneous","href":"/docs/3.x/api/misc","docId":"api/misc"}],"collapsible":true},{"collapsed":true,"type":"category","label":"Community","items":[{"type":"link","label":"Bindings","href":"/docs/3.x/community/bindings","docId":"community/bindings"},{"type":"link","label":"Libraries Using H3","href":"/docs/3.x/community/libraries","docId":"community/libraries"},{"type":"link","label":"Learning Resources","href":"/docs/3.x/community/tutorials","docId":"community/tutorials"},{"type":"link","label":"Applications Using H3","href":"/docs/3.x/community/applications","docId":"community/applications"}],"collapsible":true},{"collapsed":true,"type":"category","label":"H3 Internals","items":[{"type":"link","label":"Overview","href":"/docs/3.x/core-library/overview","docId":"core-library/overview"},{"type":"link","label":"Table of Cell Areas for H3 Resolutions","href":"/docs/3.x/core-library/restable","docId":"core-library/restable"},{"type":"link","label":"H3 Index Representations","href":"/docs/3.x/core-library/h3Indexing","docId":"core-library/h3Indexing"},{"type":"link","label":"Coordinate systems","href":"/docs/3.x/core-library/coordsystems","docId":"core-library/coordsystems"},{"type":"link","label":"Creating bindings","href":"/docs/3.x/core-library/creating-bindings","docId":"core-library/creating-bindings"},{"type":"link","label":"Memory allocation","href":"/docs/3.x/core-library/custom-alloc","docId":"core-library/custom-alloc"},{"type":"link","label":"Public API","href":"/docs/3.x/core-library/usage","docId":"core-library/usage"},{"type":"link","label":"Unix-style Filters for H3","href":"/docs/3.x/core-library/filters","docId":"core-library/filters"},{"collapsed":true,"type":"category","label":"Algorithms","items":[{"type":"link","label":"Conversion from latitude/longitude to containing H3 cell index","href":"/docs/3.x/core-library/geoToH3desc","docId":"core-library/geoToH3desc"},{"type":"link","label":"Determine the latitude/longitude coordinates of the center point of an H3Index cell","href":"/docs/3.x/core-library/h3ToGeoDesc","docId":"core-library/h3ToGeoDesc"},{"type":"link","label":"Generate the cell boundary in latitude/longitude coordinates of an H3Index cell","href":"/docs/3.x/core-library/h3ToGeoBoundaryDesc","docId":"core-library/h3ToGeoBoundaryDesc"}],"collapsible":true}],"collapsible":true}]},"docs":{"api/hierarchy":{"id":"api/hierarchy","title":"Hierarchical grid functions","description":"These functions permit moving between resolutions in the H3 grid system. The functions produce parent (coarser) or children (finer) cells.","sidebar":"version-3.x/someSidebar"},"api/indexing":{"id":"api/indexing","title":"Indexing functions","description":"These function are used for finding the H3 index containing coordinates, and for finding the center and boundary of H3 indexes.","sidebar":"version-3.x/someSidebar"},"api/inspection":{"id":"api/inspection","title":"Index inspection functions","description":"These functions provide metadata about an H3 index, such as its resolution or base cell, and provide utilities for converting into and out of the 64-bit representation of an H3 index.","sidebar":"version-3.x/someSidebar"},"api/misc":{"id":"api/misc","title":"Miscellaneous H3 functions","description":"These functions include descriptions of the H3 grid system.","sidebar":"version-3.x/someSidebar"},"api/regions":{"id":"api/regions","title":"Region functions","description":"These functions convert H3 indexes to and from polygonal areas.","sidebar":"version-3.x/someSidebar"},"api/traversal":{"id":"api/traversal","title":"Grid traversal functions","description":"Grid traversal allows finding cells in the vicinity of an origin cell, and determining how to traverse the grid from one cell to another.","sidebar":"version-3.x/someSidebar"},"api/uniedge":{"id":"api/uniedge","title":"Unidirectional edge functions","description":"Unidirectional edges allow encoding the directed edge from one cell to a neighboring cell.","sidebar":"version-3.x/someSidebar"},"community/applications":{"id":"community/applications","title":"Applications Using H3","description":"The following applications use H3. Contributions to this list are welcome, please feel free to open a pull request.","sidebar":"version-3.x/someSidebar"},"community/bindings":{"id":"community/bindings","title":"Bindings","description":"As a C library, bindings can be made to call H3 functions from different programming languages. This page lists different bindings currently available. Contributions to this list are welcome, please feel free to open a pull request.","sidebar":"version-3.x/someSidebar"},"community/libraries":{"id":"community/libraries","title":"Libraries Using H3","description":"The following libraries use H3 via one of its bindings. Contributions to this list are welcome, please feel free to open a pull request.","sidebar":"version-3.x/someSidebar"},"community/tutorials":{"id":"community/tutorials","title":"Learning Resources","description":"This page lists further learning materials and code walkthroughs for the H3 library and bindings. Contributions to this list are welcome, please feel free to open a pull request.","sidebar":"version-3.x/someSidebar"},"comparisons/admin":{"id":"comparisons/admin","title":"Admin Boundaries","description":"Administrative boundaries, such as ZIP Codes and Census Blocks in the United States, can be used for aggregating and analyzing data. These boundaries have a number of drawbacks for aggregating data. These are primarily related to not having a comparable spatial unit of analysis, being unable to spatially relate data, and being unrelated to the data being analyzed.","sidebar":"version-3.x/someSidebar"},"comparisons/geohash":{"id":"comparisons/geohash","title":"Geohash","description":"Geohash is a system for encoding locations using a string of characters, creating a hierarchical, square grid system (a quadtree).","sidebar":"version-3.x/someSidebar"},"comparisons/hexbin":{"id":"comparisons/hexbin","title":"Hexbin","description":"Hexbinning is the process of taking coordinates and binning them into hexagonal cells in analytics or mapping software. The size of the hexagons is configurable, and the hexagons can align with the map projection being used.","sidebar":"version-3.x/someSidebar"},"comparisons/placekey":{"id":"comparisons/placekey","title":"Placekey","description":"Placekey is a system for encoding points of interest (POIs), and incorporates H3 in its POI identifier.","sidebar":"version-3.x/someSidebar"},"comparisons/s2":{"id":"comparisons/s2","title":"S2","description":"S2, like H3, implements an open source, hierarchical, discrete, and global grid system. The systems share a number of similarities, including the use of 64 bit integers as cell indexes, making it very efficient to use both of them in big data systems.","sidebar":"version-3.x/someSidebar"},"core-library/coordsystems":{"id":"core-library/coordsystems","title":"Coordinate systems","description":"The H3 Core Library uses the following coordinate systems internally.","sidebar":"version-3.x/someSidebar"},"core-library/creating-bindings":{"id":"core-library/creating-bindings","title":"Creating bindings for H3","description":"H3 is a C library, in part to make it simpler to create bindings for different programming languages. Each language usually has its own way to bind to C functions, but this document can serve as a starting point and list of tips.","sidebar":"version-3.x/someSidebar"},"core-library/custom-alloc":{"id":"core-library/custom-alloc","title":"Memory allocation","description":"H3\'s approach to memory management is to rely on memory allocated by the caller as much as possible. This allows memory to be managed by an external framework.","sidebar":"version-3.x/someSidebar"},"core-library/filters":{"id":"core-library/filters","title":"Unix-style Filters for H3","description":"The directory src/apps/filters contains unix-style stdin/stdout filters that perform conversions between integer H3 indexes and other useful types. It currently contains the filters listed in the table below. See the header comments in each application source code file for more information.","sidebar":"version-3.x/someSidebar"},"core-library/geoToH3desc":{"id":"core-library/geoToH3desc","title":"Conversion from latitude/longitude to containing H3 cell index","description":"This operation is performed by function geoToH3. See the comments in the function for more detail.","sidebar":"version-3.x/someSidebar"},"core-library/h3Indexing":{"id":"core-library/h3Indexing","title":"H3 Index Representations","description":"Introduction","sidebar":"version-3.x/someSidebar"},"core-library/h3ToGeoBoundaryDesc":{"id":"core-library/h3ToGeoBoundaryDesc","title":"Generate the cell boundary in latitude/longitude coordinates of an H3Index cell","description":"This operation is performed by function h3ToGeoBoundary. See the comments in the function source code for more detail.","sidebar":"version-3.x/someSidebar"},"core-library/h3ToGeoDesc":{"id":"core-library/h3ToGeoDesc","title":"Determine the latitude/longitude coordinates of the center point of an H3Index cell","description":"This operation is performed by function h3ToGeo. See the comments in the function source code for more detail.","sidebar":"version-3.x/someSidebar"},"core-library/overview":{"id":"core-library/overview","title":"Overview of the H3 Geospatial Indexing System","description":"The H3 geospatial indexing system is a discrete global grid system (see Sahr et al., 2003) consisting of a multi-precision hexagonal tiling of the sphere with hierarchical indexes.","sidebar":"version-3.x/someSidebar"},"core-library/restable":{"id":"core-library/restable","title":"Table of Cell Areas for H3 Resolutions","description":"| H3 Resolution | Average Hexagon Area (km2) | Average Hexagon Edge Length (km) | Number of unique indexes","sidebar":"version-3.x/someSidebar"},"core-library/usage":{"id":"core-library/usage","title":"Public API","description":"API Versioning","sidebar":"version-3.x/someSidebar"},"faq":{"id":"faq","title":"Frequently Asked Questions","description":"\x3c!--"},"highlights/aggregation":{"id":"highlights/aggregation","title":"Aggregation","description":"Analysis of location data, such as locations of cars in a city, can be done by bucketing locations. (Sahr et al., 2003) Using a regular grid provides smooth gradients and the ability to measure differences between cells.","sidebar":"version-3.x/someSidebar"},"highlights/flowmodel":{"id":"highlights/flowmodel","title":"Flow Modelling","description":"H3\'s hexagonal grid is well suited to analyzing movement. In addition to the benefits of the hexagonal grid shape, H3 includes other features for modelling flow.","sidebar":"version-3.x/someSidebar"},"highlights/indexing":{"id":"highlights/indexing","title":"Indexing","description":"H3 is a hierarchical geospatial index. H3 indexes refer to cells by the spatial hierarchy. Every hexagonal cell, up to the maximum resolution supported by H3, has seven child cells below it in this hierarchy. This subdivision is referred to as aperture 7.","sidebar":"version-3.x/someSidebar"},"highlights/joining":{"id":"highlights/joining","title":"Joining","description":"H3, acting as a standard unit of analysis, can be used to join disparate data sets.","sidebar":"version-3.x/someSidebar"},"highlights/ml":{"id":"highlights/ml","title":"Machine Learning","description":"H3 is well suited to applying machine learning to geospatial data. Techniques from computer vision, such as convolution, can be applied to the pixel grid defined by H3.","sidebar":"version-3.x/someSidebar"},"installation":{"id":"installation","title":"Installation","description":"\x3c!-- when updating this file with a new version number, do a search and replace","sidebar":"version-3.x/someSidebar"},"quickstart":{"id":"quickstart","title":"Quick Start","description":"This page shows you how to get started with the functions in H3 that convert points to cell identifiers, and from cell identifiers back to geometry. These are the core indexing functions used in many applications of H3.","sidebar":"version-3.x/someSidebar"},"README":{"id":"README","title":"Introduction","description":"H3 is a geospatial indexing system that partitions the world into hexagonal cells. H3 is open source under the Apache 2 license.","sidebar":"version-3.x/someSidebar"}}}')}}]);