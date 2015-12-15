'use strict';
this.pointer=null;
this.addvalue=false;
var app = angular.module("routerApp");

app.controller('viewContact', function()
{
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
  
 this.delContact= function(index)
 {
 this.contacts.splice(index,1);
 }
 
 this.editContact = function(index,c)
 {
 // set value of field obj equal to c
 this.field.name=c.name;
 this.field.email=c.email;
 this.field.phone=c.phone;
 this.pointer=index;
 }
 this.add=function(){
 this.addvalue=!this.addvalue;
 }
 
});