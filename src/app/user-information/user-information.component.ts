import { Component } from '@angular/core';
import { UserInformationService } from './user-information.service'

@Component({
  selector: 'app-user-information',
  templateUrl: './user-information.component.html',
  styleUrls: ['./user-information.component.css']
})
export class UserInformationComponent {

  userInformation : any;
  constructor(
    private userInformationService: UserInformationService,
  ) {}

  ngOnInit() {
    this.userInformationService.fetchUserInformation().subscribe(
      (res: any) => {
        this.userInformation = res,
        console.log("user info:", this.userInformation)
      }
       
      
    )
  }

}
