function giaipt2(a,b,c,dt,x1,x2 ) {
    var a = document.getElementById('a').value;
    var b = document.getElementById('b').value;
    var c = document.getElementById('c').value;
    var dt = b*b - 4*a*c;
    //tìm nghiệm:
    if(a == 0) {
      return alert('là pt bậc 1 có nghiệm:') + alert(-c /b)
    }else if(dt < 0 ) {
   
    return alert('phương trình vô nghiệm')
  } else if(dt == 0 ) {
    var x = -b / (2*a)
    return alert('phương trình có nghiệm kép x1=  ') + alert(x);
  } else{
    var x1 = (-b + Math.sqrt(dt)) / (2*a);
    var x2 = (-b - Math.sqrt(dt)) / (2*a);
    return alert('phương tình có 2 nghiệm: ') + alert(x1) + alert(x2);
  }
}