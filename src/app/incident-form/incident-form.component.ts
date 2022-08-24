import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormBuilder, Form } from '@angular/forms';

@Component({
  selector: 'app-incident-form',
  templateUrl: './incident-form.component.html',
  styleUrls: ['./incident-form.component.css']
})
export class IncidentFormComponent implements OnInit {

  incidentForm = this.fb.group({
    username: new FormControl('', [Validators.minLength(7), Validators.maxLength(7), Validators.required]),
    requestedFor: new FormControl('', [Validators.minLength(5), Validators.maxLength(50), Validators.required]),
    category: new FormControl('', [Validators.minLength(2), Validators.maxLength(50), Validators.required]),
    subcategory: new FormControl('', [Validators.minLength(2), Validators.maxLength(50), Validators.required]),
    configurationItem: new FormControl('', [Validators.minLength(2), Validators.maxLength(50), Validators.required]),
    priority: new FormControl('', [Validators.min(1), Validators.max(4), Validators.required]),
    impact: new FormControl('', [Validators.min(1), Validators.max(4), Validators.required]),
    shortDescription: new FormControl('', [Validators.minLength(10), Validators.maxLength(50), Validators.required]),
    longDescription: new FormControl('', [Validators.minLength(1), Validators.maxLength(1000), Validators.required]),
  })

  get username() {
    return this.incidentForm.get('username');
  }
  get requestedFor() {
    return this.incidentForm.get('requestedFor');
  }
  get category() {
    return this.incidentForm.get('category');
  }
  get subcategory() {
    return this.incidentForm.get('subcategory');
  }
  get configurationItem() {
    return this.incidentForm.get('configurationItem');
  }
  get priority() {
    return this.incidentForm.get('priority');
  }
  get impact() {
    return this.incidentForm.get('impact');
  }
  get shortDescription() {
    return this.incidentForm.get('shortDescription');
  }
  get longDescription() {
    return this.incidentForm.get('longDescription');
  }

  area = 20;
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  increaseArea(): void {
    this.area += 20;
    const areaElement = document.getElementById('longDescriptionArea');
    areaElement!.style.setProperty("height", `${this.area}vw`);
  }

  sendData(): void {
    return;
  }
}
