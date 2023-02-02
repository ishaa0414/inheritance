
const Parent={
    detail(){
        console.log('My name is '+`${this.name}`+ ' and I am from '+`${this.location}`+' and age is '+ `${this.age}`);
    }
   } 
   const firstChild=Object.create(Parent);
   firstChild.name="Isha";
   firstChild.location="Ranchi";
   firstChild.age="23"
   firstChild.detail();