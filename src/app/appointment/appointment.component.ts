import { Component ,OnInit } from '@angular/core';
import { Appointment } from '../models/appointment';


@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent implements OnInit {
 
  newAppointmentSummary:string="";
  newAppointmentDate:Date=new Date();
 appointments:Appointment[] = []
 ngOnInit(): void {
  let savedAppointment = localStorage.getItem("appointments")
  this.appointments=savedAppointment ? JSON.parse(savedAppointment):[]
}

 addAppointment(){
  if(this.newAppointmentSummary.trim().length&&this.newAppointmentDate){
    let newAppointment:Appointment={
      id:Date.now(),
      summary:this.newAppointmentSummary,
      date:this.newAppointmentDate
    }
    this.appointments.push(newAppointment)
    this.newAppointmentSummary="";
    this.newAppointmentDate= new Date();
    localStorage.setItem("appointments",JSON.stringify(this.appointments))
  }
 }
 deleteAppointment(index:number){
  this.appointments.splice(index,1)
  localStorage.setItem("appointments",JSON.stringify(this.appointments))
 }

}
