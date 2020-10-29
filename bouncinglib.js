function bounce(box1,box2){
    if(abs(box2.x-box1.x)<box2.width/2+box1.width/2 && abs(box1.y-box2.y)<box1.height/2+box2.height/2){
        
        return true
      }else{
       
      return false
      }
}
