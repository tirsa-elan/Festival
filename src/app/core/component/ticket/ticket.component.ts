import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ReserveService } from '../../service/reserve.service';
import { Reserve } from '../../service/reserve';
declare var $: any;

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.scss'],
  providers: [ReserveService]
})
export class TicketComponent {
  form: FormGroup = new FormGroup({})
  formData: Reserve[] = []
  data !: Reserve
  modalInitStatus: boolean = false;
  modalStatus: "I" | "U" = 'I';
  disabledId !: string

  constructor(private reserveService: ReserveService) { }

  ngOnInit(): void {
    // this.FormValue()
    this.fillCloumn()
  }

  formValue() {
    this.form = new FormGroup({
      id: new FormControl({ value: null, disabled: true }),
      price: new FormControl(''),
      location: new FormControl(''),
      month: new FormControl('')
    })
  }

  fillCloumn() {
    this.reserveService.get().subscribe((res: any) => {
      this.formData = res
      console.log(res)
    })
  }

  add() {
    this.modalStatus = "I";
    this.formValue();
    this.modalInitStatus = true;
  }

  delete(del: string | undefined, id: number) {
    this.reserveService.delete(del).subscribe(res => {

    })
    this.formData.splice(id, 1)
  }

  update(data: Reserve) {
    this.modalStatus = "U";
    this.formValue();
    this.initForm(data)
    this.modalInitStatus = true;
  }

  initForm(data: Reserve) {
    if (data) {
      for (const [key, value] of Object.entries(data)) {
        if (this.form.get(key)) this.form.get(key)?.patchValue(value)
      }
    }
  }

  addorUpdate() {
    if (this.modalStatus == "I") {
      this.reserveService.post(this.form.value).subscribe((res: any) => {
        this.formData.push(res)
      })
    }
    if (this.modalStatus == "U") {
      this.reserveService.update(this.form.getRawValue()).subscribe(res => {
    
      })
    }
  }
}
