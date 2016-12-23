declare var $:any;
export class Dimmers {
 
    dimOnHover(param: string){
        $(param).dimmer({
              on: 'hover'
            });
    }

}

