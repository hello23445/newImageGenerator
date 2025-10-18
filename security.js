export const badWords = ['порно', 'минет', 'голая', 'тварь', 'без одежды', 'аллах', 'аллаh', 'аllah', 'сосет', 'отсасывает', 'хуй', 'член', 'обнаженная'];
const blockedUsers = ['']
if (blockedUsers.includes(localStorage.getItem('user_Token'))){
    alert('Ваш аккаунт заблокирован за нарушение правил сообщества. Если вы считаете, что это ошибка, пожалуйста, свяжитесь с поддержкой.');
    window.location.href = 'block.html';
}
function getRandomNumber() {
  const number = Math.floor(Math.random() * 31) + 6;
  if (number === 6) {
    if (localStorage.getItem('subscribed')) {
        localStorage.removeItem('subscribed');
    }

  }
  return number;
}

// Вызов функции
console.log(getRandomNumber());