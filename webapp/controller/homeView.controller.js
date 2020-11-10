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
    this.creditBlkOrders();
    this.deliveryBlkOrders();
    this.incompleteOrders();
    this.saleswareOrders();

		},
		

		
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
		this.divison =  startupParameters.Division;
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
			/////////////// incomplete orders set
			
			///////////////////////////
			oModel.read("/IncompOrddataSet", {
					

				success: function (oData, Response) {

			//	oView.byId("ediNewOrdId").setText( oData.results[0].CountC);	
				oView.byId("incompleteErrOrdId").setText( oData.results[0].CountI);	
				//	sap.ui.core.BusyIndicator.hide();
					// var immInvoiceModel = new sap.ui.model.json.JSONModel(oData);
					// 	that.getView().setModel(immInvoiceModel, "immInvoiceData");
					// 	immInvoiceModel.setProperty("/immInvoiceSet", oData.results);
//	sap.ui.core.BusyIndicator.hide();
					console.log("Inside credit block Success function", oData.results);
				},

				error: function (oData, Response, oError) {
				//	sap.ui.core.BusyIndicator.hide();
					console.log("Inside credit block  Error function");
				}

			});
			
		},
		
		//EDI orders data fetch
			ediOrders: function () {
		
				var oModel = this.getOwnerComponent().getModel("manualOrdersModel");
				//	globalModel=oModel;
			var that = this;
			var oView = this.getView();
			
	
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
			///////////////Incomplete orders set
			
			///////////////////////////
			oModel.read("/IncompOrddataSet", {
					

				success: function (oData, Response) {

			//	oView.byId("ediNewOrdId").setText( oData.results[0].CountC);	
				oView.byId("incompleteErrOrdId").setText( oData.results[0].CountI);	
				//	sap.ui.core.BusyIndicator.hide();
					// var immInvoiceModel = new sap.ui.model.json.JSONModel(oData);
					// 	that.getView().setModel(immInvoiceModel, "immInvoiceData");
					// 	immInvoiceModel.setProperty("/immInvoiceSet", oData.results);
//	sap.ui.core.BusyIndicator.hide();
					console.log("Inside credit block Success function", oData.results);
				},

				error: function (oData, Response, oError) {
				//	sap.ui.core.BusyIndicator.hide();
					console.log("Inside credit block  Error function");
				}

			});
			
		},
		
		
			//credit orders data fetch
			creditBlkOrders: function () {
		
				var oModel = this.getOwnerComponent().getModel("manualOrdersModel");
				//	globalModel=oModel;
			var that = this;
			var oView = this.getView();
			
	
				oModel.read("/CredblkOrddataSet", {
					

				success: function (oData, Response) {

			//	oView.byId("ediNewOrdId").setText( oData.results[0].CountC);	
				oView.byId("creditBlkErrOrdId").setText( oData.results[0].CountI);	
				//	sap.ui.core.BusyIndicator.hide();
					// var immInvoiceModel = new sap.ui.model.json.JSONModel(oData);
					// 	that.getView().setModel(immInvoiceModel, "immInvoiceData");
					// 	immInvoiceModel.setProperty("/immInvoiceSet", oData.results);
//	sap.ui.core.BusyIndicator.hide();
					console.log("Inside credit block Success function", oData.results);
				},

				error: function (oData, Response, oError) {
				//	sap.ui.core.BusyIndicator.hide();
					console.log("Inside credit block  Error function");
				}

			});
			
		},
		
		
					//Delivery block orderorders data fetch
			deliveryBlkOrders: function () {
		
				var oModel = this.getOwnerComponent().getModel("manualOrdersModel");
				//	globalModel=oModel;
			var that = this;
			var oView = this.getView();
			
	
				oModel.read("/DelblkOrddataSet", {
					

				success: function (oData, Response) {

			//	oView.byId("ediNewOrdId").setText( oData.results[0].CountC);	
				oView.byId("deliveryBlkErrOrdId").setText( oData.results[0].CountI);	
				//	sap.ui.core.BusyIndicator.hide();
					// var immInvoiceModel = new sap.ui.model.json.JSONModel(oData);
					// 	that.getView().setModel(immInvoiceModel, "immInvoiceData");
					// 	immInvoiceModel.setProperty("/immInvoiceSet", oData.results);
//	sap.ui.core.BusyIndicator.hide();
					console.log("Inside credit block Success function", oData.results);
				},

				error: function (oData, Response, oError) {
				//	sap.ui.core.BusyIndicator.hide();
					console.log("Inside credit block  Error function");
				}

			});
			
		},
		//Incomplete orders data fetch
		incompleteOrders: function () {
		
				var oModel = this.getOwnerComponent().getModel("manualOrdersModel");
				//	globalModel=oModel;
			var that = this;
			var oView = this.getView();
			
	
				oModel.read("/IncompOrddataSet", {
					

				success: function (oData, Response) {

			//	oView.byId("ediNewOrdId").setText( oData.results[0].CountC);	
				oView.byId("incompleteErrOrdId").setText( oData.results[0].CountI);	
				//	sap.ui.core.BusyIndicator.hide();
					// var immInvoiceModel = new sap.ui.model.json.JSONModel(oData);
					// 	that.getView().setModel(immInvoiceModel, "immInvoiceData");
					// 	immInvoiceModel.setProperty("/immInvoiceSet", oData.results);
//	sap.ui.core.BusyIndicator.hide();
					console.log("Inside credit block Success function", oData.results);
				},

				error: function (oData, Response, oError) {
				//	sap.ui.core.BusyIndicator.hide();
					console.log("Inside credit block  Error function");
				}

			});
			
		},
		
		
			//Sales orders data fetch
		saleswareOrders: function () {
		
				var oModel = this.getOwnerComponent().getModel("manualOrdersModel");
				//	globalModel=oModel;
			var that = this;
			var oView = this.getView();
			
	
				oModel.read("/SaleswareOrddataSet", {
					

				success: function (oData, Response) {

				oView.byId("salesWareNewOrdId").setText( oData.results[0].CountC);	
				oView.byId("salesWareErrOrdId").setText( oData.results[0].CountI);	
				//	sap.ui.core.BusyIndicator.hide();
					// var immInvoiceModel = new sap.ui.model.json.JSONModel(oData);
					// 	that.getView().setModel(immInvoiceModel, "immInvoiceData");
					// 	immInvoiceModel.setProperty("/immInvoiceSet", oData.results);
//	sap.ui.core.BusyIndicator.hide();
					console.log("Inside sales ware orders Success function", oData.results);
				},

				error: function (oData, Response, oError) {
				//	sap.ui.core.BusyIndicator.hide();
					console.log("Inside sales ware orders  Error function");
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
			params : {
			}
		}));
oCrossAppNavigator.toExternal({target: {shellHash: hashUrl}});

		},
		
			onSaleswarePress: function () {
console.log("Inside Sales press");
this.orderType="ZS30";
var oCrossAppNavigator = sap.ushell.Container.getService("CrossApplicationNavigation");
var hashUrl = (oCrossAppNavigator && oCrossAppNavigator.hrefForExternal({
		target: {
			  semanticObject: "ZSalesOrdOpnMgmtSem",
			  action: "display"
		        },
			params : {"AUART": this.orderType,

			// "VKORG": this.salesOrganisation,
			// "VTWEG": this.distrChannel,
			// "SPART": this.divison
				 
			}
		}));
// var hashUrl = (oCrossAppNavigator && oCrossAppNavigator.hrefForExternal({
// 		target: {
// 			  semanticObject: "ZSalesOrdOpnMgmtSem",
// 			  action: "display"
// 		        },
// 			params : {"Ordertype": this.orderType,
// 				 "DistributionChannel": this.distrChannel,
// 			"SalesOrganization":	this.salesOrganisation
// 			}
// 		}));
oCrossAppNavigator.toExternal({target: {shellHash: hashUrl}});

// "DistributionChannel": this.distrChannel,
// 			"Customer":this.customer,
// 			"SalesOrganization":	this.salesOrganisation,

		},
		
				onOrdersManualPress: function (oEvent) {
			this.orderType="ZS10, ZS40, ZS50, ZR10, ZL30, ZL10, ZK10, ZK20, ZK30, ZK40";
			console.log("Inside orders manual press");
			var oCrossAppNavigator = sap.ushell.Container.getService("CrossApplicationNavigation");
			
			var hashUrl = (oCrossAppNavigator && oCrossAppNavigator.hrefForExternal({
		target: {
			  semanticObject: "ZSalesOrdOpnMgmtSem",
			  action: "display"
		        },
			params : {"AUART": this.orderType,

			// "VKORG": this.salesOrganisation,
			// "VTWEG": this.distrChannel,
			// "SPART": this.divison
				 
			}
		}));
// var hashUrl = (oCrossAppNavigator && oCrossAppNavigator.hrefForExternal({
// 		target: {
// 			  semanticObject: "ZSalesOrdOpnMgmtSem",
// 			  action: "display"
// 		        },
// 			params : {"Ordertype": this.orderType}
// 		}));
oCrossAppNavigator.toExternal({target: {shellHash: hashUrl}});
			
		},
		
				onCreditBlockPress: function (oEvent) {
		//	this.orderType="CO";
			console.log("Inside credit block press");
			var oCrossAppNavigator = sap.ushell.Container.getService("CrossApplicationNavigation");
var hashUrl = (oCrossAppNavigator && oCrossAppNavigator.hrefForExternal({
		target: {
			  semanticObject: "ZCrdBlkSem",
			  action: "display"
		        },
			params : {

			// "VKORG": this.salesOrganisation,
			// "VTWEG": this.distrChannel,
			// "SPART": this.divison
				 
			}
		}));
oCrossAppNavigator.toExternal({target: {shellHash: hashUrl}});
			
		},
		
		//report for blocked oredrs price diff
			onBlockOrdersPress: function (oEvent) {
				console.log("Inside block orders press");
			console.log("Inside Price diffrence");
		//	this.orderType="BO";

var oCrossAppNavigator = sap.ushell.Container.getService("CrossApplicationNavigation");

var oCrossAppNavigator = sap.ushell.Container.getService("CrossApplicationNavigation");
var hashUrl = (oCrossAppNavigator && oCrossAppNavigator.hrefForExternal({
		target: {
			  semanticObject: "ZSalesPricDiffSem",
			  action: "display"
		        },
			params : {

			// "VKORG": this.salesOrganisation,
			// "VTWEG": this.distrChannel,
			// "SPART": this.divison
				 
			}
		}));
// var hashUrl = (oCrossAppNavigator && oCrossAppNavigator.hrefForExternal({
// 		target: {
// 			  semanticObject: "ZSalesPricDiffSem",
// 			  action: "display"
// 		        },
// 			params : {"Ordertype": this.orderType}
// 		}));
oCrossAppNavigator.toExternal({target: {shellHash: hashUrl}});	
			
			
		},
			onIncompleteOrderPress: function (oEvent) {
		//	this.orderType="IO";
			var oCrossAppNavigator = sap.ushell.Container.getService("CrossApplicationNavigation");
		var hashUrl = (oCrossAppNavigator && oCrossAppNavigator.hrefForExternal({
		target: {
			  semanticObject: "ZIncOrdSemGUI",
			  action: "display"
		        },
			params : {

			// "VKORG": this.salesOrganisation,
			// "VTWEG": this.distrChannel,
			// "SPART": this.divison
				 
			}
		}));
			
// var hashUrl = (oCrossAppNavigator && oCrossAppNavigator.hrefForExternal({
// 		target: {
// 			  semanticObject: "ZIncOrdSemGUI",
// 			  action: "display"
// 		        },
// 			params : {"Ordertype": this.orderType}
// 		}));
oCrossAppNavigator.toExternal({target: {shellHash: hashUrl}});
			
		},
			onDeliveryBlockPress: function (oEvent) {
		//	this.orderType="DO";
			var oCrossAppNavigator = sap.ushell.Container.getService("CrossApplicationNavigation");
			var hashUrl = (oCrossAppNavigator && oCrossAppNavigator.hrefForExternal({
		target: {
			  semanticObject: "ZDelBlkSem",
			  action: "display"
		        },
			params : {

			// "VKORG": this.salesOrganisation,
			// "VTWEG": this.distrChannel,
			// "SPART": this.divison
				 
			}
		}));
			
// var hashUrl = (oCrossAppNavigator && oCrossAppNavigator.hrefForExternal({
// 		target: {
// 			  semanticObject: "ZDelBlkSem",
// 			  action: "display"
// 		        },
// 			params : {"Ordertype": this.orderType}
// 		}));
oCrossAppNavigator.toExternal({target: {shellHash: hashUrl}});
			
		},
			onEdiOrderPress: function (oEvent) {
			
			this.orderType="ZS20";
			var oCrossAppNavigator = sap.ushell.Container.getService("CrossApplicationNavigation");
			
			var hashUrl = (oCrossAppNavigator && oCrossAppNavigator.hrefForExternal({
		target: {
			  semanticObject: "ZSalesOrdOpnMgmtSem",
			  action: "display"
		        },
			params : {"AUART": this.orderType

			// "VKORG": this.salesOrganisation,
			// "VTWEG": this.distrChannel,
			// "SPART": this.divison
				 
			}
		}));
			
// var hashUrl = (oCrossAppNavigator && oCrossAppNavigator.hrefForExternal({
// 		target: {
// 			  semanticObject: "ZSalesOrdOpnMgmtSem",
// 			  action: "display"
// 		        },
// 			params : {"Ordertype": this.orderType}
// 		}));
oCrossAppNavigator.toExternal({target: {shellHash: hashUrl}});
			
		}
		
		
		
		
	});
});