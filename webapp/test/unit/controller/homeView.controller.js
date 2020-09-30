/*global QUnit*/

sap.ui.define([
	"com/sap/salesOrderStatusUi/salesOrderStatusUi/controller/homeView.controller"
], function (Controller) {
	"use strict";

	QUnit.module("homeView Controller");

	QUnit.test("I should test the homeView controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});