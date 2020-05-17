const changeQuoteBtn = document.querySelector('#change-quote-btn');
const quote = document.querySelector('#quote');
const credit = document.querySelector('.credit');

const quoteArr = [
  ['People say noting is imposible, but I do nothing every day.', 'A. A. Milne'],
  ['Better to remain silent and be thought a fool than to speak out and remove all doubt.', 'Abraham Lincoln'],
  ['Light travels faster than sound. This is why some people appear bright until you hear them speak.', 'Alan Dundes'],
  ['Nobody realizes that some people expend tremendous energy merely to be normal.', 'Albert Camus'],
  ['The difference between stupidity and genius is that genius has its limits.', 'Albert Einstein'],
  ['All the things I really like to do are either immoral, illegal or fattening.', 'Alexander Woollcott'],
  ['War is God’s way of teaching Americans geography.', 'Ambrose Bierce'],
  ['The average dog is a nicer person than the average person.', 'Andy Rooney']
]


changeQuoteBtn.addEventListener('click', () => {
  changeQuote();
});

const changeQuote = () => {
  let range = quoteArr.length;
  let arrPosition = Math.floor(Math.random() * range);
  console.log(arrPosition);
  quote.textContent = quoteArr[arrPosition][0];
  credit.textContent = quoteArr[arrPosition][1];
}
// quote.textContent = quoteArr[0][0];
// credit.textContent = quoteArr[0][1];