import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Person, wealthOptsValues } from '../person/person.model';
import { PersonService } from '../person/person.service';

@Component({
  selector: 'app-typed-nonnullable',
  templateUrl: './typed-nonnullable.component.html',
  styleUrls: ['./typed-nonnullable.component.scss'],
})
export class TypedNonnullableComponent implements OnInit {
  person: Person = new Person();
  wealthOpts = wealthOptsValues;

  personForm: FormGroup<{
    name: FormControl<string>;
    age: FormControl<number | null>;
    email: FormControl<string | null>;
    gender: FormControl<'male' | 'female' | 'not set' | null>;
    wealth: FormControl<string | null>;
  }>;

  constructor(private ps: PersonService) {
    this.personForm = new FormGroup({
      name: new FormControl(this.person.name, { nonNullable: true }),
      age: new FormControl(this.person.age),
      email: new FormControl(this.person.email),
      gender: new FormControl(this.person.gender),
      wealth: new FormControl(this.person.wealth),
    });
  }

  ngOnInit() {
    this.ps.getPerson().subscribe((p) => {
      // Could be setValue if model is implemented with all props in form
      // Oherwise use patchValue
      this.personForm.patchValue(p);
    });
  }

  savePerson(personForm: any): void {
    this.ps.save(personForm);
  }
}
