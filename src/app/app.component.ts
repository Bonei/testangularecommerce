import { Component } from '@angular/core';
import { MatDialog } from '@angular/material';
import { MyDialogComponent } from './view/my-dialog/my-dialog.component';
import { Post } from './model/post';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  
  lista: Post [];

  constructor(public dialog: MatDialog) {
    this.lista = [];
  }

  openDialog() {
    
    const dialogRef = this.dialog.open(MyDialogComponent, {
      width: '250px',
      data: { nome: '',
              titulo: '',
              descricao: '',
              imagem: ''
            }
    });

    dialogRef.afterClosed().subscribe(
        data => {console.log("Dialog output:", data)
        
        if (data.nome == '' || data.titulo == '' || data.descricao == '') {
          alert("Preencha todos os campos!");

          throw new Error("Preencha todos os campos!");
        }

        console.log(data.descricao);

        this.lista.push(data);
      });  
  }

  substr(size, value) {
    if (value && value.length > size) {
        return value.substr(0, size) + "...";
    }
    return value;
  };
}