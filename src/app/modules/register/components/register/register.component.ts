import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray, FormControl } from '@angular/forms';
import { PaisService } from '../../services/pais.service';
import { ValidadoresService } from '../../services/validadores.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.sass']
})
export class RegisterComponent implements OnInit {


  formulario!: FormGroup;
  paises: any[] = [];

  constructor( private fb: FormBuilder,
               private validadores: ValidadoresService,
               private paisService: PaisService ) { 

    this.crearFormulario();
    this.cargarDataAlFormulario();
    this.crearListeners();

  }

  ngOnInit(): void {
    this.paisService.getPaises()
      .subscribe( (paises: any) => {
        this.paises = paises;
        this.paises.unshift({
          nombre: '[ Seleccione País]',
          codigo: ''
        });
        this.formulario.get('direccion.pais')?.enable();
      });

  }

  get pasatiempos() {
    return this.formulario.get('pasatiempos') as FormArray;
  }

  isControlNoValido(nombreControl:string){
    const control = this.formulario.get(nombreControl);
    return control?.invalid && control?.touched;
  }

  get nombreNoValido() {
    return this.isControlNoValido('nombre');
  }

  get apellidoNoValido() {
    return this.isControlNoValido('apellido');
  }

  get correoNoValido() {
    return this.isControlNoValido('correo');
  }

  get usuarioNoValidoPorRequerido() {
    return this.isControlNoValido('usuario') && this.formulario.get('usuario')?.hasError('required');
  }

  get usuarioNoValidoPorNombre() {
    return this.isControlNoValido('usuario') && !this.formulario.get('usuario')?.hasError('required');
  }

  get calleNoValido() {
    return this.isControlNoValido('direccion.calle');
  }

  get ciudadNoValido() {
    return this.isControlNoValido('direccion.ciudad');
  }

  get cpNoValido() {
    return this.isControlNoValido('direccion.cp');
  }

  get paisNoValido() {
    return this.isControlNoValido('direccion.pais');
  }

  get pass1NoValido() {
    return this.isControlNoValido('pass1');
  }

  get pass2NoValido() {
    const pass1 = this.formulario.get('pass1')?.value;
    const pass2 = this.formulario.get('pass2')?.value;
    return ( pass1 === pass2 ) ? false : true;
  }

  get paisesLoaded(){
    return this.paises.length !== 0;
  }



  crearFormulario() {
    
    this.formulario = this.fb.group({
      nombre  : ['', [ Validators.required, Validators.minLength(5) ]  ],
      apellido: ['', [Validators.required, this.validadores.existeApellidoSincrono ] ],
      correo  : ['', [ Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')] ],
      usuario : ['', [ Validators.required], this.validadores.existeUsuario ],
      pass1   : ['', Validators.required ],
      pass2   : ['', Validators.required ],
      direccion: this.fb.group({
        calle: ['', Validators.required ],
        ciudad  : ['', Validators.required ],
        cp  : ['', Validators.required ],
        pais  : new FormControl({value: '', disabled: true}, Validators.required)
      }),
      pasatiempos: this.fb.array([])
    },{
      validators: this.validadores.passwordsIguales('pass1','pass2')
    });

  }

  crearListeners() {
    // this.formulario.valueChanges.subscribe( valor => {
    //   console.log(valor);
    // });

    // this.formulario.statusChanges.subscribe( status => console.log({ status }));
    this.formulario.get('nombre')?.valueChanges.subscribe( console.log );
  }

  cargarDataAlFormulario() {

    this.formulario.reset({
      nombre: '',
      apellido: '',
      correo: '',
      pass1: '',
      pass2: '',
      direccion: {
        calle: '',
        ciudad: '',
        cp:'',
        pais:''
      },
    });

  }


  agregarPasatiempo() {
    this.pasatiempos.push(  this.fb.control('')  );
  }
  
  borrarPasatiempo(i: number) {
    this.pasatiempos.removeAt(i);
  }


  guardar() {
    console.log( this.formulario );

    if ( this.formulario.invalid ) {

      return Object.values( this.formulario.controls ).forEach( control => {
        
        if ( control instanceof FormGroup ) {
          Object.values( control.controls ).forEach( control => control.markAsTouched() );
        } else {
          control.markAsTouched();
        }

      });
     
    }

    console.log('Guardado datos de formulario', this.formulario.value)

    // Posteo de información
    this.pasatiempos.clear();
    this.formulario.reset({
      nombre: 'Sin nombre'

    });
    
  }
}
