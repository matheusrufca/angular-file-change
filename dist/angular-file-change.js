'use strict';

(function (angular) {
	if (!angular) {
		console.error('Angular is not defined.');
		return;
	}

	angular.module('mr', []).directive('fileChange', function () {
		return {
			restrict: 'A',
			link: function link(scope, element, attrs) {
				var onChangeHandler = scope.$eval(attrs.fileChange);
				element.bind('change', onChangeHandler);
			}
		};
	});
})(window.angular);

