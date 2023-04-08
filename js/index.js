const select=document.querySelectorAll('.slide');
var index=0;
select[0].style.display="inline-block";
function change(x){
    if(x==1){
        if(index+1 >= select.length){
            return;
        }
        else{
            select[index].style.display = "none";
            index+=1;
            select[index].style.display="block";
            update();
        }
    }
    else{
        if(index <=0){
            return;
        }
        else{
            select[index].style.display = "none";
            index-=1;
            select[index].style.display="block";
            update();
        }
    }
}