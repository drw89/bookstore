import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {APIService} from '../../services/api.service';
import {Router} from '@angular/router';
import {Book} from '../../swagger-models/model/book';

@Component({
  selector: 'app-catalog-admin',
  templateUrl: './catalog-admin.component.html',
  styleUrls: ['./catalog-admin.component.scss']
})
export class CatalogAdminComponent implements OnInit {
  adminForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private apiService: APIService, private router: Router) {
    this.adminForm = this.createFormGroup(formBuilder);
  }

  ngOnInit() {
  }

  createFormGroup(formBuilder: FormBuilder) {
    return formBuilder.group({
      title: new FormControl(),
      subtitle: new FormControl(),
      isbn: new FormControl(),
      authors: new FormControl(),
      description: new FormControl(),
      imageUrl: new FormControl(),
      numberOfPages: new FormControl(),
      price: new FormControl(),
      publicationYear: new FormControl(),
      publisher: new FormControl(),
    });
  }

  obSubmit() {
    const book: Book = Object.assign({}, this.adminForm.value);
    console.log("clicked");
    this.apiService.addBook(book).subscribe(response => {
      console.log(response.id);
      this.router.navigateByUrl('/products/undefined');
    });
  }
}
