export class User {
  firstName:any 
  lastName:any
  age:number | undefined
  questions:Array<Quiz>=[]
  note:string
  constructor(){}

}
class Quiz{
    
        number:number
        choice:string
      
}
