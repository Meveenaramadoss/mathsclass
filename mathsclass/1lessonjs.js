const first=document.getElementById("yes")
//welcome note la ethachu eluthitu letso go button ku ithula timer set panikalam
if(first)
{
    setTimeout(function (){
        document.getElementById("sari").style.display="inline";
    },1000)

   //first button tap pana aprm
   //athoda contents and second button ithukula vanthurum
} 
function lvl1()
{
    document.getElementById("btn1").style.display="inline"; //intha lines la <div> tag od id ya mention pana athoda contents vanthurum plus 
    const first=document.getElementById("yes")
    if(first)
    {
    setTimeout(function (){
        document.getElementById("btn-1").style.display="inline";
    },2000)
    }
    //second button oda contents and third button ithukula vanthurum
}

function lvl2(){
    document.getElementById("btn2").style.display="inline"; //for div tag
    const first=document.getElementById("yes")
    if(first)
    {
    setTimeout(function (){
        document.getElementById("btn-2").style.display="inline";
    },2000)
    }

}// ethana venum athanaikum copy paste panikonga div tag oda id matum replace pani

function lvl3(){
    const first=document.getElementById("yes")
    if(first)
    {
    setTimeout(function (){
        document.getElementById("test").style.display="inline";
    },2000)
    }

}//ithu last la test ku pora button kudukura option