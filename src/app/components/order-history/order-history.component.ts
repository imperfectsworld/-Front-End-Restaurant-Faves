import { Component } from '@angular/core';
import { Order } from '../../models/order';
import { OrderService } from '../../services/order.service';
import { AddOrderFormComponent } from '../add-order-form/add-order-form.component';

@Component({
  selector: 'app-order-history',
  standalone: true,
  imports: [AddOrderFormComponent],
  templateUrl: './order-history.component.html',
  styleUrl: './order-history.component.css'
})
export class OrderHistoryComponent {

  allOrders:Order[] = [];
  constructor(private orderService: OrderService){}

  ngOnInit(){
    this.callApiGetAll();
  }

  callApiGetAll(){
    this.orderService.getAll().subscribe(response => {
      console.log(response);
      this.allOrders = response;
    });
  }

  callApiDeleteOrder(target:Order){
    this.orderService.deleteOrder(target.id).subscribe(response => this.callApiGetAll());
  }

  callApiAddOrder(newOrder:Order){
    this.orderService.addOrder(newOrder).subscribe(response => {
      console.log(response);
      this.callApiGetAll();
    });
  }


}
