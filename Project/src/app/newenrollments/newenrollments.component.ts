import { Component, OnInit } from '@angular/core';
import { User } from '../_models/index';
import { UserService } from '../_services/index';
import { Router, ActivatedRoute, Params, Data } from '@angular/router';
import { Person }  from '../persons/person';

@Component({
    moduleId: module.id,
    selector: 'newenrollments',
    templateUrl: 'newenrollments.component.html'
})

export class NewEnrollmentsComponent implements OnInit { 

	persons:Person[] = [];
	
	person:Person;
	
	currentUser: User;

	constructor(private userService: UserService,private route: ActivatedRoute,) {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        
	}

	ngOnInit() {
	
    this.person = this.route.snapshot.params['person'];
	console.log("coming into ngoninit"+this.route.snapshot.params['id']);
	
	let id = this.route.snapshot.params['id'];
	let name = this.route.snapshot.params['name'];
	let dob = this.route.snapshot.params['dob'];
	let address = this.route.snapshot.params['address'];
	let email = this.route.snapshot.params['email'];
	console.log("this.persons: "+id+"name:"+name);
	
	this.persons.push({id:id,name:name,dob:dob,address:address,email:email});	
	
	
  }

}