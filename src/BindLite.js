/**
 * BindLite.js
 * Developed by: Fahid Mohammad	(fahidmohammad.in)
 * Documentation: https://github.com/fahidmohammad/BindLite
 * Github: https://github.com/fahidmohammad/BindLite
 **/
(function(window) {
	'use strict';

	/**
	 * Extend Object helper function.
	 */

	function extend(a, b) {
		var key;
		for (key in b) {
			if (b.hasOwnProperty(key)) {
				a[key] = b[key];
			}
		}
		return a;
	}

	/**
	 * BindLite Constructor.
	 */

	function BindLite(options) {
		this.options = extend({}, this.options);
		extend(this.options, options);
		this.Model = this.options.model;
		this.init();
	}

	/**
	 * BindLite Options.
	 */

	BindLite.prototype.options = {};



	/**
	 * BindLite Model.
	 */

	BindLite.prototype.Model = {};

	/**
	 * BindLite Initialize.
	 */

	BindLite.prototype.init = function() {
		var $this = this;
		var dataBindQuery = document.querySelectorAll('[data-bind]', $this.options.selector);
		var eventBindQuery = document.querySelectorAll('[data-event]', $this.options.selector);


		//	Loop through each element and set events
		_.each(eventBindQuery, function(v, k) {
			var attrVal = v.getAttribute("data-event");
			//	Check if element/value is not null or undefined
			if (attrVal && attrVal != "") {
				//	Split the function from the named value (Default delimiter is ":")
				var splitEvent = attrVal.split(":");
				//	Get the event name which needs to be set for the element
				var eventName = splitEvent[0];
				//	Get the function name which needs to be used for the appended event
				var funcName = splitEvent[1];
				//	Bind function to scope
				var functionToBind = $this.options.event[funcName].bind(this, $this.Model);
				//	Add event listener
				$this.addEvent(v, eventName, functionToBind);
			}
		});

		//	Loop through each element and set value
		_.each(dataBindQuery, function(v, k) {
			var attrVal = v.getAttribute("data-bind");
			//	Check if element/value is not null or undefined
			if (attrVal && attrVal != "") {
				//	Get relevent model value
				var value = _.get($this.Model, attrVal);
				//	set form value
				$this.setValueByType(v, value);
				$this.addEvent(v, 'change', function() {
					var attrVal = v.getAttribute("data-bind");
					_.set($this.Model, attrVal, v.value);
				});
			}
		});
	};

	/**
	 * BindLite setValueByType.
	 */

	BindLite.prototype.setValueByType = function(elm, value) {
		//	if select -> option
		if (elm.type === "select-one") {
			elm.value = value;
		}
		//	if input -> text
		if (elm.type === "text") {
			elm.value = value;
		}
	};

	/**
	 * BindLite addEvent.
	 */

	BindLite.prototype.addEvent = function(el, type, handler) {
		if (el.attachEvent) el.attachEvent('on' + type, handler);
		else el.addEventListener(type, handler);
	};

	/**
	 * BindLite Get Model.
	 */

	BindLite.prototype.getModel = function() {
		return this.Model;
	};

	window.BindLite = BindLite;

})(window);