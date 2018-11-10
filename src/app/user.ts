import {Address} from './address';


export class User   {
  constructor() {
    this.address = new Address();
  }

  id: number;
  name: string;

  email: string;
  address: Address;
  phone: string;
  website: string;


}
