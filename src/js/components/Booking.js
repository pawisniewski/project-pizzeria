import {select, templates} from './../settings.js';
import AmountWidget from './AmountWidget.js';

class Booking{
  constructor(bookingTab){
    const thisBooking = this;

    thisBooking.render(bookingTab);
    thisBooking.initWidgets();
  }

  render(bookingTab){
    const thisBooking = this;

    const generatedHTML= templates.bookingWidget();
    thisBooking.dom = {};
    thisBooking.dom.wrapper = bookingTab;
    bookingTab.innerHTML = generatedHTML;

    thisBooking.dom.peopleAmount = bookingTab.querySelector(select.booking.peopleAmount);
    thisBooking.dom.hoursAmount = bookingTab.querySelector(select.booking.hoursAmount);
  }

  initWidgets(){
    const thisBooking = this;

    thisBooking.peopleAmount = new AmountWidget(thisBooking.dom.peopleAmount);
    thisBooking.hoursAmount = new AmountWidget(thisBooking.dom.hoursAmount);
  }
  
}
export default Booking;
