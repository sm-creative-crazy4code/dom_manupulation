let btn = document.querySelector('#btn');
let  quote= document.querySelector('.Quotes');
let author= document.querySelector(".author")


let Quotes=[{
quote:"The way to get started is to quit talking and begin doing",
author:"Walt Disney"
},
{
quote:"Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking. ",
author:" -Steve Jobs"
},
{
quote:"If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough",
author:"-Oprah Winfrey"
    },
{
 quote:"I Don't judge each day by the harvest you reap but by the seeds that you plant.",
author:"-Robert Louis Stevenson"
},
{
    quote:"The best and most beautiful things in the world cannot be seen or even touched — they must be felt with the heart.",
   author:"-Helen Keller"
},
{
    quote:"The future belongs to those who believe in the beauty of their dreams",
   author:"-Eleanor Roosevelt"
},
{
    quote:"Do not go where the path may lead, go instead where there is no path and leave a trail",
   author:"-Ralph Waldo Emerson"
},



];

btn.addEventListener('click',function(){
   let Random = Math.floor(Math.random()*Quotes.length);
   quote.innerText = Quotes[Random].quote;
   author.innerText=Quotes[Random].author;
})








