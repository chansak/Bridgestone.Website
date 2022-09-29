import { Component, ElementRef, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Item, Items } from '@module/admin/app/vehicleprod/upload/item.types';
import { FuseAlertService } from '@fuse/components/alert';


@Component({
    selector: 'app-upload',
    templateUrl: './upload.component.html',
    styleUrls: ['./upload.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class UploadComponent implements OnInit
{
    horizontalStepperForm: UntypedFormGroup;
    // fileName :string;
    files:Item[];
    refFiles:Item[];
    constructor(private _formBuilder: UntypedFormBuilder,private _fuseAlertService: FuseAlertService )
    {
    }
    ngOnInit(): void
    {
        this.files = [];
        this.refFiles = [];
        // Horizontal stepper form
        this.horizontalStepperForm = this._formBuilder.group({
            step1: this._formBuilder.group({
                year   : ['', Validators.required],
                version : ['', Validators.required],
            }),
            step2: this._formBuilder.group({
                files: ['', Validators.required],
            }),
            step3: this._formBuilder.group({
                refFiles: [''],
            })
        });
       
    }
    onFileSelected(event) {
        this.files = [];
        if (this.files) {
            Array.from<any>(event.target.files).forEach(file => {
                switch(file.type){
                    case 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet':{
                        break;
                    }
                }
                this.files.push({
                    name: file.name,
                    size:file.size,
                    type:'XLS'
                });
            });
        }
    }
    onRefFileSelected(event) {
        this.refFiles = [];
        if (this.refFiles) {
            Array.from<any>(event.target.files).forEach(file => {
                switch(file.type){
                    case 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet':{
                        break;
                    }
                }
                this.refFiles.push({
                    name: file.name,
                    size:file.size,
                    type:'XLS'
                });
            });
            console.log(this.refFiles);
        }
    }
    uploaEstimateTotalVehicleProduction():void{
        this.show('notification');
    }
    dismiss(name: string): void
    {
        this._fuseAlertService.dismiss(name);
    }
    show(name: string): void
    {
        this._fuseAlertService.show(name);
    }
}
