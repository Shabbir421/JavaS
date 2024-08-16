//using this keyword object execute current piece of code
//avg of three number


const student ={
  name:"shabbir",
  age:23,
  eng:98,
  math:78,
  phy:76,
  getavg(){
    let avg =(this.eng+this.math+this.phy)/3;
    console.log(`${this.name} avg  = ${avg}`);
    console.log(this);

  }
}