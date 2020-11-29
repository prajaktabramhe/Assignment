function searchAlgorithm (number)
{
    for(let i=0;i<Array.length; i++)
    {
        if(number == Array[i])
          {
            console.log("found it,it's at index" + i)
          }
        else
          {
            console.log("Not Found")
          }
    };
}
var Array = [1,2,3,4,5,6,7,8,9,10];
searchAlgorithm(5)