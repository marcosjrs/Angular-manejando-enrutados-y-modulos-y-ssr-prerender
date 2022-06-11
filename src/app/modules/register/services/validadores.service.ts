import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';

interface ErrorValidate {
  [s:string]: boolean
}


@Injectable({
  providedIn: 'root'
})
export class ValidadoresService {

  constructor() { }

  existeUsuario( control: FormControl ): Promise<ErrorValidate|null> | Observable<ErrorValidate> {

    if( !control.value ) {
      return Promise.resolve(null);
    }

    return new Promise( (resolve, reject) => {

      setTimeout(() => {
        
        if ( control.value === 'marcos' ) {
          resolve({ existe: true });
        } else {
          resolve( null );
        }

      }, 3500);


    });

  }


  existeApellidoSincrono( control: FormControl ): ErrorValidate|null {

    if ( control.value?.toLowerCase() === 'rivera' ){
      return {
        existeApellidoSincrono: true
      }
    }

    return null;
  }

  passwordsIguales( pass1Name: string, pass2Name: string ) {

    return ( formGroup: FormGroup ) => {

      const pass1Control = formGroup.get(pass1Name); 
      const pass2Control = formGroup.get(pass2Name); //ó formGroup.controls[pass2Name];

      if ( pass1Control?.value === pass2Control?.value ) {
        pass2Control?.setErrors(null);
      } else {
        pass2Control?.setErrors({ noEsIgual: true });
      }

    }

  }


}