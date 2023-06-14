import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-news-editor',
  templateUrl: './news-editor.component.html',
  styleUrls: ['./news-editor.component.scss']
})
export class NewsEditorComponent implements OnInit {

  constructor(private fb: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    console.log(this.router);
  }


  form: FormGroup = this.fb.group({
    title: ['', Validators.required],
    imageUrl: ['', Validators.required],
    text: ['', Validators.required]
  });


  onSubmitForm() {
    console.log(this.form);
    if (this.form.valid) {
      console.log(this.form.value);
    } else {
      alert('Please fill in all fields.');
    }
  }
}
