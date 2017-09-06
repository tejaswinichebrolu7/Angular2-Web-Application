import { Component } from '@angular/core';
import { User } from '../_models/index';
import { UserService } from '../_services/index';
import { Person }  from '../persons/person';
import { Router } from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'assessments',
    templateUrl: 'assessments.component.html'
})

export class AssessmentsComponent {

	currentUser: User;
	model: any = {};
    loading = false;

	constructor(private userService: UserService, private router:Router) {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
		this.model.patientname = this.currentUser.firstName;
	}
	
	onClickSubmit() {
        this.loading = true;
		console.log("id is:"+this.model.memberid);
		let person = new Person();
		person.id = this.model.memberid;
		person.name = this.model.patientname;
		person.dob = this.model.dob;
		person.address = this.model.address;
		person.email = this.model.email;
		
		this.router.navigate(['/newenrollments',person]);
	}
	
	
}