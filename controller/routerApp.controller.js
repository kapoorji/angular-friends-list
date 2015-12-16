'use strict';
this.pointer=null;
this.addvalue=false;
this.viewctn=false;
this.editpointer=null;
var app = angular.module("routerApp");

app.controller('viewContact', function() {
this.contacts=[];
this.field={};    
 this.saveContact= function(index){
	if(this.pointer!=null) {
		this.contacts[this.pointer]=this.field; 
	}
	else {
		this.contacts.push(angular.copy(this.field)); 
	}
	this.field = {};
	this.pointer = null;
  }
  
 this.delContact= function(index) {
 this.contacts.splice(index,1);
 }
 
 this.editContact = function(index) {
 // set value of field obj equal to c
 this.field.name=this.contacts[index].name;
 this.field.email=this.contacts[index].email;
 this.field.phone=this.contacts[index].phone;
 this.pointer=index;
 }
 this.add=function(){  //event to toggle + - 
 this.addvalue=!this.addvalue;
 }
 this.viewcontact= function(index) {  // will take you to the detail of contact
 this.viewctn=!this.viewctn;
 this.editpointer= index;
 }
 this.listcontact = function() { // will take you back to the list view of contacts
 this.viewctn=!this.viewctn;
 this.editpointer=null;
 }
});