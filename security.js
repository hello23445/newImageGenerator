export const badWords = ['порно', 'минет', 'голая', 'тварь', 'без одежды', 'аллах', 'аллаh', 'аllah', 'сосет', 'отсасывает', 'хуй', 'член', 'обнаженная', 'какает', 'макака', 'какашка'];
const blockedUsers = [
  'krbgEGJK2Ze-5E8rLUDzEbGVCGPEh7',
  'ChpyKGvh9QYwXp-XENoc63U1nc5jpZ',
  'a03WfYJErB2q0AqDImFEouIySY-HYe',
  'eaInYYq3ed0JZ4V9CbFjlZLRA91DA0',
  'iwr6ivyBomBChh51sbxyPTtnB5CZdL',
  'iSQgQFV81vACtznUBTjeqmEJdRbx3q',
  'a90AJuwOOdDhq-Ja-HR5ph0fVHWl9w',
  'ZEeqOdK3JLtnDIQJbTilX5R99xjw3O',
  '35j6gzEK7i7FlfgkOZLgLDCwcGUuUA'
  ]


if (blockedUsers.includes(localStorage.getItem('user_Token'))){
    alert('Ваш аккаунт заблокирован за нарушение правил сообщества. Если вы считаете, что это ошибка, пожалуйста, свяжитесь с поддержкой.');
    window.location.href = 'block.html';
}
function getRandomNumber() {
  const number = Math.floor(Math.random() * (15 - 5 + 1)) + 5; // 5–15

  if (number === 6 && localStorage.getItem('subscribed')) {
    localStorage.removeItem('subscribed');
  }

  return number;
}


// Вызов функции

console.log(getRandomNumber());


