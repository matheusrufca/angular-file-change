angular-file-change
==============

file-change is a directive to use add handler when input[type=file] changes.


## Install

### Bower
```
bower install angular-file-change --save
```

### CDN
```html
<script src="https://cdn.rawgit.com/matheusrufca/angular-file-change/master/dist/angular-file-change.js"></script>
```

## Getting started

Include **angular-file-change.js** in your application.

```html
<script src="bower_components/angular-file-change/dist/angular-file-change.js"></script>
```

Add the module `mr` as a dependency to your app module:

```js
angular.module('app', ['mr']);
```

## Usage

Use the directive like

###### HTML
```html
<input type="file" file-change="handleFileSelect" />
```

###### Controller
```js
angular.module('app', ['mr'])
  .controller('DemoCtrl', function($scope){
	$scope.handleFileSelect = function (evt) { ... };
  });
```

## License

Licensed under MIT.
