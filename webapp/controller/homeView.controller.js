sap.ui.define([
	"sap/ui/core/mvc/Controller",
		"sap/m/TablePersoController"
], function (Controller,TablePersoController) {
	"use strict";

	return Controller.extend("com.sap.salesOrderStatusUi.salesOrderStatusUi.controller.homeView", {
		onInit: function () {
			
			
			
			 //this.tableFragment = sap.ui.xmlfragment("com.sap.salesOrderStatusUi.salesOrderStatusUi.fragments.editOrders");

    // this.getView().byId("page").addDependent(this.tableFragment);
    
//     var fragmentId = this.getView().createId("ediOrdersFrag");
// var tab = sap.ui.core.Fragment.byId(fragmentId, "consumptionTable");
    
    
//     	// Create a persistence key
//  var oPersId = {container: "mycontainer-1", item: "myitem-1"};

// // // Get a personalization service provider from the shell (or create your own)
// var oProvider = sap.ushell.Container.getService("Personalization").getPersonalizer(oPersId);

// // Instantiate a controller connecting your table and the persistence service
// this._oTPC = new TablePersoController({
//     table: tab,
//     persoService: oProvider
//   // persoService: persoService
// }).activate();

    this.ManualOrders();
    this.ediOrders();

		},
		
			//Personalisation button click event
		// _onPersoButtonPressed: function (oEvent) {
		// 	this._oTPC.openDialog();
		// //	this.oTablePersoController.openDialog();
		// },
		
				//Read  Consumtion service
		
		ManualOrders: function () {
		
				var oModel = this.getOwnerComponent().getModel("manualOrdersModel");
				//	globalModel=oModel;
			var that = this;
			var oView = this.getView();
			
		var startupParameters=	this.getOwnerComponent().getComponentData().startupParameters;
		
		this.distrChannel = startupParameters.DistributionChannel;
		this.customer = startupParameters.Customer;
		this.salesOrganisation = startupParameters.SalesOrganization;
		console.log("Start up parametrs are",startupParameters);
		//	sap.ui.core.BusyIndicator.show();
				oModel.read("/SalesOrddataSet", {
					

				success: function (oData, Response) {

				oView.byId("manualNewOrdId").setText( oData.results[0].CountC);	
				oView.byId("manualErrOrdId").setText( oData.results[0].CountI);	
					sap.ui.core.BusyIndicator.hide();
					// var immInvoiceModel = new sap.ui.model.json.JSONModel(oData);
					// 	that.getView().setModel(immInvoiceModel, "immInvoiceData");
					// 	immInvoiceModel.setProperty("/immInvoiceSet", oData.results);
//	sap.ui.core.BusyIndicator.hide();
					console.log("Inside Success function", oData.results);
				},

				error: function (oData, Response, oError) {
				//	sap.ui.core.BusyIndicator.hide();
					console.log("Inside Error function");
				}

			});
			
		},
		
		//EDI orders data fetch
			ediOrders: function () {
		
				var oModel = this.getOwnerComponent().getModel("manualOrdersModel");
				//	globalModel=oModel;
			var that = this;
			var oView = this.getView();
			
		// var startupParameters=	this.getOwnerComponent().getComponentData().startupParameters;
		
		// this.distrChannel = startupParameters.DistributionChannel;
		// this.customer = startupParameters.Customer;
		// this.salesOrganisation = startupParameters.SalesOrganization;
		// console.log("Start up parametrs are",startupParameters);
		//	sap.ui.core.BusyIndicator.show();
				oModel.read("/EdiOrddataSet", {
					

				success: function (oData, Response) {

				oView.byId("ediNewOrdId").setText( oData.results[0].CountC);	
				oView.byId("ediErrorOrdId").setText( oData.results[0].CountI);	
				//	sap.ui.core.BusyIndicator.hide();
					// var immInvoiceModel = new sap.ui.model.json.JSONModel(oData);
					// 	that.getView().setModel(immInvoiceModel, "immInvoiceData");
					// 	immInvoiceModel.setProperty("/immInvoiceSet", oData.results);
//	sap.ui.core.BusyIndicator.hide();
					console.log("Inside EDI orders Success function", oData.results);
				},

				error: function (oData, Response, oError) {
				//	sap.ui.core.BusyIndicator.hide();
					console.log("Inside EDI orders  Error function");
				}

			});
			
		},
		
		
		onEdiPress: function () {
console.log("Inside EDI press");

this.orderType="ED";

var oCrossAppNavigator = sap.ushell.Container.getService("CrossApplicationNavigation");
var hashUrl = (oCrossAppNavigator && oCrossAppNavigator.hrefForExternal({
		target: {
			  semanticObject: "z_ediMonitor",
			  action: "display"
		        },
			params : {
			}
		}));
oCrossAppNavigator.toExternal({target: {shellHash: hashUrl}});

		},
		
			onSalesPress: function () {
console.log("Inside Sales press");
this.orderType="SP";
var oCrossAppNavigator = sap.ushell.Container.getService("CrossApplicationNavigation");
var hashUrl = (oCrossAppNavigator && oCrossAppNavigator.hrefForExternal({
		target: {
			  semanticObject: "ZSalesOrdOpnMgmtSem",
			  action: "display"
		        },
			params : {"DistributionChannel": this.distrChannel,
			"Customer":this.customer,
			"SalesOrganization":	this.salesOrganisation,
			"Ordertype": this.orderType}
		}));
oCrossAppNavigator.toExternal({target: {shellHash: hashUrl}});

		},
		
				onOrdersManualPress: function (oEvent) {
			this.orderType="MO";
			
		},
		
				onCreditBlockPress: function (oEvent) {
			this.orderType="CO";
			
		},
			onBlockOrdersPress: function (oEvent) {
			
			this.orderType="BO";
		},
			onIncompleteOrderPress: function (oEvent) {
			this.orderType="IO";
			
		},
			onDeliveryBlockPress: function (oEvent) {
			this.orderType="DO";
			
		},
			onEdiOrderPress: function (oEvent) {
			
			this.orderType="EO";
		}
		
		
		
		
	});
});