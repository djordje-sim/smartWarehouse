import { Component, OnInit } from '@angular/core';
import { Container } from '../models/container';
import { ContainerService } from '../container.service';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-container-details',
  templateUrl: './container-details.component.html',
  styleUrls: ['./container-details.component.css']
})

export class ContainerDetailsComponent implements OnInit {
  // a: Arrival = new Arrival("234", "Mon, 24. Mar 2019. 16:43:24", "Healthy", "Full");
  // b: Arrival = new Arrival("236", "Mon, 01. Apr 2019. 18:20:05", "Healthy","Full");
  // c: Arrival = new Arrival("478", "Sun, 12. May 2019. 10:03:55", "Unhealthy","Half-full");
  // d: Arrival = new Arrival("111", "Fri, 17. May 2019. 08:31:40", "Healthy","Half-full");
  a: Container = new Container("234", "Mon, 24. Mar 2019. 16:43:24", "Healthy", "Full");
  arrivals: Container[] = [];
  arrivalsAllTheWay: Container[] = [];
  id: string = "";
  varijabla: string = "Empty";
  valueInBar: string;

  constructor(private containerService: ContainerService) { }

  ngOnInit() {

    setInterval(() => {

      this.containerService.getArrivalInfo().subscribe((data: Container) => {

        let arrivedContainer: Container = data;
        let exists: boolean = false;


        for (let i = 0; i < this.arrivals.length; i++) {

          if (this.arrivals[i].id == arrivedContainer.id) {

            exists = true;
            break;
          }

        }

        if (!exists) {
          this.arrivals.push(arrivedContainer);
        }

      });

      // this.containerService.getToken().subscribe((data: any) => {

      //   const httpOptions = {
      //     headers: new HttpHeaders({
      //       'Authorization': `Bearer ${data.tokenId}`,
      //       'Content-Type': 'application/json',
      //       'X-Requested-With': 'XMLHttpRequest'
      //     })
      //   }

      //   this.containerService.getDeviceMessagesCount(httpOptions).subscribe((resp: any) => {
      //     this.containerService.getDevicePayload(resp.count, httpOptions).subscribe((response: any) => {

      //       this.arrivals.push(this.a);


      //     });
      //   });
      // });
    }, 2000);

  }

  // search() {
  //   this.valueInBar = this.id.toString();
  //   if (this.id != "") {
  //     this.arrivals = this.arrivalsAllTheWay.filter(res => {
  //       return res.id.toString().startsWith(this.valueInBar);
  //     });
  //     console.log(this.arrivals);
  //   }
  //   else if (this.id == "") {
  //     this.arrivals = this.arrivalsAllTheWay;
  //   }
  // }

}