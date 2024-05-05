import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Pasatiempo } from 'src/app/models/pasatiempo.model';
import { Usuario } from 'src/app/models/usuario.model';
import { PasatiempoService } from 'src/app/services/pasatiempo.service';
import { UtilService } from 'src/app/services/util.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-transaccion-asignacion-pasatiempo',
  templateUrl: './transaccion-asignacion-pasatiempo.component.html',
  styleUrls: ['./transaccion-asignacion-pasatiempo.component.css']
})
export class TransaccionAsignacionPasatiempoComponent {


  lstUsuario: Usuario[] = [];
  lstPasatiempo: Pasatiempo[] = [];
  lstPasatiempoDeUsuario: Pasatiempo[] = [];

  usuario : string = "-1";
  pasatiempo : string = "-1";


  dataSource:any;
  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  displayedColumns = ["idPasatiempo","nombre",'actions'];

  constructor(private utilService: UtilService, private pasatiempoService: PasatiempoService){
       
  }


  cargaPasatiempo(){
    
  }

  registraPasatiempo(){
      console.log(">> registraPasatiempo >>> ");
      console.log(">> this.usuario >>> " + this.usuario );
      console.log(">> this.pasatiempo >>> " + this.pasatiempo );

  }

  eliminaPasatiempo(obj:Pasatiempo){
    console.log(">> eliminaPasatiempo >>> ");
    console.log(">> this.usuario >>> " + this.usuario );
    console.log(">> this.pasatiempo >>> " + this.pasatiempo );
    
  }
}
