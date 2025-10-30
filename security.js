export const badWords = ['качество', 'размер', 'стиль', 'тон','детализаци', 'ии', 'фон', 'размыт', 'соотношение', 'рамка', 'ракурс', 'количество фото', 'на фото не должно быть', 'трахает', 'порно', 'минет', 'голая', 'тварь', 'без одежды', 'аллах', 'аллаh', 'аllah', 'сосет', 'отсасывает', 'хуй', 'член', 'обнаженная', 'секс', 'ебать', 'ебал', 'пизда', 'пиздец', 'пизду', 'залупа', 'блядь', 'блядина', 'бляди', 'шлюха', 'шлюхи', 'шлюшки', 'сука', 'суки', 'сучка', 'сучки', 'мудак', 'мудаки', 'мудачье', 'гандон', 'гандоны', 'гондон', 'гондоны', 'еблан', 'ебланы', 'пидор', 'пидоры', 'пидорас', 'пидорасы', 'гей', 'геи', 'гей', 'геий', 'лесбиянка', 'лесбиянки', 'лесби', 'трансвестит', 'трансвеститы', 'транссексуал', 'транссексуалы', 'шизофреник', 'шизофреники'];
const blockedUsers = [
  'a03WfYJErB2q0AqDImFEouIySY-HYe',
  'eaInYYq3ed0JZ4V9CbFjlZLRA91DA0',
  'iwr6ivyBomBChh51sbxyPTtnB5CZdL',
  'iSQgQFV81vACtznUBTjeqmEJdRbx3q',
  'a90AJuwOOdDhq-Ja-HR5ph0fVHWl9w',
  'ZEeqOdK3JLtnDIQJbTilX5R99xjw3O',
  '35j6gzEK7i7FlfgkOZLgLDCwcGUuUA',
  'hwlWWZE4wqHKNzbwTO55rCGeVNeYUu',
  '0Pmxo9WKsQT-k7T1dpdWxPGsezduiN',
  'tjqt7fLajDegTDj1fFMh-K0zgbx8np',
  'A7JLrJ3N59hDvkPFtdYMBzwHFUsiEd',
  'wGbCcN-m2v3LFaKet21obTpibwvobI',
  'krbgEGJK2Ze-5E8rLUDzEbGVCGPEh7'
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
