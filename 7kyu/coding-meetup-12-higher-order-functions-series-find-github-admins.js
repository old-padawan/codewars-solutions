// https://www.codewars.com/kata/582dace555a1f4d859000058/train/javascript

function findAdmin(list, lang) {
  const users = [];
  for (const user of list) {
    if (user.githubAdmin === 'yes' && user.language === lang) {
      users.push(user);
    }
  }
  return users;
}
