import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private toastr: ToastrService) { }

  ngOnInit(): void {
  }
  
  save() {
    console.log('Saving...')
    this.toastr.success('Concluído', 'Sistema')
  }

}
