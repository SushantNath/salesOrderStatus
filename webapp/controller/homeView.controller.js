sap.ui.define([
	"sap/ui/core/mvc/Controller",
		"sap/m/TablePersoController"
], function (Controller,TablePersoController) {
	"use strict";

	return Controller.extend("com.sap.salesOrderStatusUi.salesOrderStatusUi.controller.homeView", {
		onInit: function () {
			
			 //this.tableFragment = sap.ui.xmlfragment("com.sap.salesOrderStatusUi.salesOrderStatusUi.fragments.editOrders");

    // this.getView().byId("page").addDependent(this.tableFragment);
    
    
    	// Create a persistence key
 var oPersId = {container: "mycontainer-1", item: "myitem-1"};

// // Get a personalization service provider from the shell (or create your own)
var oProvider = sap.ushell.Container.getService("Personalization").getPersonalizer(oPersId);

// Instantiate a controller connecting your table and the persistence service
this._oTPC = new TablePersoController({
    table: this.getView().byId("consumptionTable"),
    persoService: oProvider
  // persoService: persoService
}).activate();

    this.getEdiOrders();

		},
		
		
				//Read  Consumtion service
		
		getEdiOrders: function () {
		
				var oModel = this.getOwnerComponent().getModel();
				//	globalModel=oModel;
			var that = this;
			var oView = this.getView();
			sap.ui.core.BusyIndicator.show();
				oModel.read("/Invoices", {

				success: function (oData, Response) {

					var orderModel = new sap.ui.model.json.JSONModel();
					oView.setModel(orderModel, "shipToModel");
					oView.getModel("shipToModel").setProperty("/ShipToPartySet", oData.results);
					sap.ui.core.BusyIndicator.hide();
					// var immInvoiceModel = new sap.ui.model.json.JSONModel(oData);
					// 	that.getView().setModel(immInvoiceModel, "immInvoiceData");
					// 	immInvoiceModel.setProperty("/immInvoiceSet", oData.results);
	sap.ui.core.BusyIndicator.hide();
					console.log("Inside Success function", oData.results);
				},

				error: function (oData, Response, oError) {
					sap.ui.core.BusyIndicator.hide();
					console.log("Inside Error function");
				}

			});
			
		},
		
		onEdiPress: function () {
console.log("Inside EDI press");

var oCrossAppNavigator = sap.ushell.Container.getService("CrossApplicationNavigation");
var hashUrl = (oCrossAppNavigator && oCrossAppNavigator.hrefForExternal({
		target: {
			  semanticObject: "z_ediMonitor",
			  action: "display"
		        },
			params : { }
		}));
oCrossAppNavigator.toExternal({target: {shellHash: hashUrl}});

		},
		
			onSalesPress: function () {
console.log("Inside Sales press");

var oCrossAppNavigator = sap.ushell.Container.getService("CrossApplicationNavigation");
var hashUrl = (oCrossAppNavigator && oCrossAppNavigator.hrefForExternal({
		target: {
			  semanticObject: "ZSalesOrdOpnMgmtSem",
			  action: "display"
		        },
			params : { }
		}));
oCrossAppNavigator.toExternal({target: {shellHash: hashUrl}});

		}
		
		
		
	});
});