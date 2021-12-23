import { LightningElement, api, wire } from 'lwc';
import { CurrentPageReference } from 'lightning/navigation';
import { fireEvent } from 'c/pubsub';

export default class CarTile extends LightningElement {
@api car;

@wire(CurrentPageReference) pageRef;

@api carselectedid;

   carselecthandler(event){

        event.preventDefault();

        const carid=this.car.Id;

        const carSelect = new CustomEvent('carselectid',{detail:carid});
        this.dispatchEvent(carSelect);
        fireEvent(this.pageRef,'cardetail',this.car);

    }

    get isCarSelected(){

        if(this.car.Id === this.carselectedid)
        {
            return "tile selected";
        }
        return "tile";
    }
}
