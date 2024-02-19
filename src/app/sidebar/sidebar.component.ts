import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  userImageSrc:string | ArrayBuffer|null = "/assets/ProfileImage.jpg";

  onFileSelected(event:any){
    console.log(event)
    const file = event.target.files[0];
    if(file){
      const reader = new FileReader();
      reader.onload = (e)=>{
        if(e.target?.result){
          this.userImageSrc = e.target.result;
        }
      };
      reader.readAsDataURL(file);
    }

  }
}
