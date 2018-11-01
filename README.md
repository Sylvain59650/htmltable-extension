# htmltable-extension

<div style="display:inline">

[![build](https://travis-ci.org/Sylvain59650/htmltable-extension.png?branch=master)](https://travis-ci.org/Sylvain59650/htmltable-extension)
![version](https://img.shields.io/npm/v/htmltable-extension.svg)
![package](https://img.shields.io/github/package-json/v/Sylvain59650/htmltable-extension.svg)
![dependencies](https://img.shields.io/david/Sylvain59650/htmltable-extension.svg)
![minified](https://img.shields.io/bundlephobia/min/htmltable-extension.svg)

![license](https://img.shields.io/npm/l/htmltable-extension.svg)
[![hits](http://hits.dwyl.com/Sylvain59650/htmltable-extension.svg)](http://hits.dwyl.com/Sylvain59650/htmltable-extension)
</div>

<div>
<p>
This package htmltable-extension is a fork of <a href="https://www.ag-grid.com/">ag-Grid community</a> (MIT) 
created for a more compact and faster distribution on the net.
</p>
<p>
ag-Grid is a fully-featured and highly customizable JavaScript data grid. It delivers outstanding performance, has <b>no 3rd party dependencies</b> and integrates smoothly with all major JavaScript frameworks.
</p>

</div>


<img src="https://sylvain59650.github.io/htmltable-extension/github-grid-demo.jpg" />
 
 [Documentation](https://www.ag-grid.com/documentation-main/documentation.php)



Features
--------------

Besides the standard set of features you'd expect from any grid:

* Column Interactions (resize, reorder, and pin columns)
* Pagination
* Sorting
* Row Selection

Here are some of the features that make ag-Grid stand out:

* Grouping / Aggregation*
* Custom Filtering
* In-place Cell Editing
* Records Lazy Loading *
* Server-Side Records Operations *
* Live Stream Updates
* Hierarchical Data Support & Tree View *
* Customizable Appearance
* Customizable Cell Contents
* Excel-like Pivoting *
* State Persistence
* Keyboard navigation
* Data Export to CSV
* Data Export to Excel *
* Row Reordering
* Copy / Paste 
* Column Spanning
* Pinned Rows
* Full Width Rows

\* The features marked with an asterisk are available in the [enterprise version](https://www.ag-grid.com/license-pricing.php?utm_source=ag-grid-readme&utm_medium=repository&utm_campaign=github) only.

Check out [developers documentation](https://www.ag-grid.com/documentation-main/documentation.php?utm_source=ag-grid-readme&utm_medium=repository&utm_campaign=github) for a complete list of features or visit [our official docs](https://www.ag-grid.com/features-overview?utm_source=ag-grid-readme&utm_medium=repository&utm_campaign=github) for tutorials and feature demos. 


Usage Overview
--------------

#### Install 

	npm install htmltable-extension --save

    yarn add htmltable-extension --save

#### Add a placeholder to HTML
```html
    <div id="myGrid" style="height: 150px;width: 600px" class="ag-theme-balham"></div>
```

#### Import the grid and styles
```html
    <script src="modules/htmltable-extension/dist/js/htmltable-extension.min.js"></script>
    <link rel="stylesheet" type="text/css" href="modules/htmltable-extension/dist/css/ag-grid.css" />
    
```

#### Set configuration
```html
    const gridOptions = {
    	columnDefs: [
    		{headerName: 'Make', field: 'make'},
    		{headerName: 'Model', field: 'model'},
    		{headerName: 'Price', field: 'price'}
    	],
    	rowData: [
    		{make: 'Toyota', model: 'Celica', price: 35000},
    		{make: 'Ford', model: 'Mondeo', price: 32000},
    		{make: 'Porsche', model: 'Boxter', price: 72000}
    	]
    };
```

#### Initialize the grid
```html
    let eGridDiv = document.querySelector('#myGrid');
    var grid = new Grid(eGridDiv, this.gridOptions);
```


Issue Reporting
----------
If you have found a bug, please report them at [ag-Grid community](https://github.com/ag-grid/ag-grid/issues) `issues` section. 
If you're using Enterprise version please use the private ticketing system to do that. For more information on support check out [dedicated page](https://www.ag-grid.com/support.php?utm_source=ag-grid-readme&utm_medium=repository&utm_campaign=github).


Asking Questions
-------------

Look for similar problems on [StackOverflow](https://stackoverflow.com/questions/tagged/ag-grid) using the `ag-grid` tag. If nothing seems related, post a new message there. Do not use GitHub issues to ask questions.


<a href="https://sylvain59650.github.io/htmltable-extension/demo/index.html">Quick DEMO</a>

## License
MIT
- Packaged by [Sylvain Longepée](https://www.npmjs.com/~sylvain59)
- Based on [ag-Grid community 19.1.1](https://www.npmjs.com/package/ag-grid-community)