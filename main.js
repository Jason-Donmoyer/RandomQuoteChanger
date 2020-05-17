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
  ['The average dog is a nicer person than the average person.', 'Andy Rooney'],
  ['If you want your children to listen, try talking softly to someone else.', 'Ann Landers'],
  ['I don’t believe in astrology; I’m a Sagittarius and we’re skeptical.', 'Arthur C. Clarke'],
  ['The surest sign that intelligent life exists elsewhere in the universe is that it has never tried to contact us.', 'Bill Watterson'],
  ['Before you judge a man, walk a mile in his shoes. After that who cares?… He’s a mile away and you’ve got his shoes!', 'Billy Connolly'],
  ['A bank is a place that will lend you money if you can prove that you don’t need it.', 'Bob Hope'],
  ['A day without laughter is a day wasted.', 'Charlie Chaplin'],
  ['When I was a boy I was told that anybody could become President. I’m beginning to believe it.', 'Clarence Darrow'],
  ['I’m too drunk to taste this chicken.', 'Colonel Sanders'],
  ['Never under any circumstances take a sleeping pill and a laxative on the same night.', 'Dave Barry'],
  ['I used to jog but the ice cubes kept falling out of my glass.', 'David Lee Roth'],
  ['I refuse to answer that question on the grounds that I don’t know the answer.', 'Douglas Adadms'],
  ['An alcoholic is someone you don’t like who drinks as much as you do.', 'Dylan Thomas'],

]


changeQuoteBtn.addEventListener('click', () => {
  changeQuote();
});

const changeQuote = () => {
  let range = quoteArr.length;
  let arrPosition = Math.floor(Math.random() * range);
  quote.textContent = quoteArr[arrPosition][0];
  credit.textContent = quoteArr[arrPosition][1];
}