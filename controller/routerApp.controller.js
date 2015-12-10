'use strict';
var app = angular.module("routerApp");
app.controller('viewContact', function()
{
this.contacts=[{name:'himanshu',
                 phone:919999,
                 email:'test@gmail.com'}];
this.field={};    
 this.saveContact= function(){
 
    this.contacts.push(angular.copy(this.field));  
       this.field = {};
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
 
 this.contacts.splice(index,1);
 this.saveContact();
 }
});