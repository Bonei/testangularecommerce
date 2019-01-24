import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";
import { FormGroup, FormBuilder } from '@angular/forms';
import { Inject, OnInit, Component } from '@angular/core';
import { Post } from '../../model/post';

@Component({
    selector: 'my-dialog-dialog',
    templateUrl: './my-dialog.component.html'
})

export class MyDialogComponent implements OnInit {

    form: FormGroup;
    nome:string;
    titulo:string;
    descricao:string;
    imagem:string;

    constructor(
        private fb: FormBuilder,
        private dialogRef: MatDialogRef<MyDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public data: Post) {

        this.nome = data.nome;
        this.titulo = data.titulo;
        this.descricao = data.descricao;
        this.imagem = data.imagem;
    }

    ngOnInit() {
        this.form = this.fb.group({
            nome: [this.nome, ''],
            titulo: [this.titulo, ''],
            descricao: [this.descricao, ''],
            imagem: [this.imagem, '']
        });
    }

    save() {
        this.dialogRef.close(this.form.value);
    }

    close() {
        this.dialogRef.close();
    }
}