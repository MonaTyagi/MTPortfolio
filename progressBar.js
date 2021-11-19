function change()
{
    var changedNumber=document.getElementById("progressInput").value+"0%";
    document.getElementById("progressBarNumber").innerHTML = changedNumber;
    document.getElementById("progressDiv").style.width=changedNumber;
    if(changedNumber==="10%")
    {
        document.getElementById("info").innerHTML="😴 Close the screen and get rest, NOW!!";
    }
    else if(changedNumber==="20%")
    {
        document.getElementById("info").innerHTML="🥱 Close the screen, eat something good and doze off";
    }
    else if(changedNumber==="30%")
    {
        document.getElementById("info").innerHTML="🙁 Take rest after eating something healthy";
    }
    else if(changedNumber==="40%")
    {
        document.getElementById("info").innerHTML="😑 Eat well and take some sleep";
    }
    else if(changedNumber==="50%")
    {
        document.getElementById("info").innerHTML="😋 Hungry? Go, grab something and take a nap";
    }
    else if(changedNumber==="60%")
    {
        document.getElementById("info").innerHTML="😕 Hungry? eat something. Tired? take a nap";
    }
    else if(changedNumber==="70%")
    {
        document.getElementById("info").innerHTML="🙂 Remember to eat and take rest too";
    }
    else if(changedNumber==="80%")
    {
        document.getElementById("info").innerHTML="😀 You seem ready to work!!";
    }
    else if(changedNumber==="90%")
    {
        document.getElementById("info").innerHTML="😁 Let’s get to work!!";
    }
    else if(changedNumber==="100%")
    {
        document.getElementById("info").innerHTML="🤩 Fully charged, yay!!";
    }

}
