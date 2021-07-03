import { Pipe, PipeTransform } from '@angular/core';
import { ApiResponseItem } from '@models/ApiResponseItem';

@Pipe({
  name: 'expenseItemPrice',
})
export class ExpenseItemPricePipe implements PipeTransform {
  transform(value: ApiResponseItem): string {
    return (value.quantity * value.price).toFixed(2);
  }
}
