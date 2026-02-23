import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';  
@Component({
  selector: 'app-login',
  standalone: true,
  imports:[FormsModule,RouterOutlet],
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class Login {
  username: string = '';  
  password: string=";"
  constructor(private router: Router) {}

  goToHome() {
    this.router.navigate(['/home']);
  }

}