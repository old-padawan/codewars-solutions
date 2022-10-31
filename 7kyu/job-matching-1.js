/* 
Необходимо создать систему поиска работников. 
Например, поиск работника по уровню зарплаты 
(чтобы совпадал диапазон той зарплаты, которую может предложить работодатель
и которую хочет получить работник) 
*/

/* 
Например, работник (candidate) хочет  получить зарплату (minSalary) 
на уровне не менее, чем 120000 в год. 
*/

const candidate = {
    minSalary: 120000
  };
  
  console.log(candidate.minSalary); // 120000
  
  /* 
  работодатель (job) может предложить зарплату (maxSalary)
   на уровне не более, чем 140000 в год.
  */ 
  
  const job = {
    maxSalary: 140000
  };
  
  console.log(job.maxSalary); // 140000
  
/* 
Если данные о зарплате (minalary или maxSalary) в объекте работника  или
работодателя остутствуют (проверить на true или false), выдается ошибка TypeError  
*/

/* 
Зарплата кандидата (minSalary) должна быть меньше или 
равна максимальному предложению от работодателя (maxSalary) 
  
При этом работник согласен получать еще меньше, на 10% от своего запроса (minSalary),
потому что он очень любить программирование
*/
  
  console.log(candidate.minSalary);
  
  // SOLUTION

  function match(candidate, job) {
    if (!candidate.minSalary || !job.maxSalary) {
      throw Error('Missing salary!');
    }
    return candidate.minSalary * 0.9 <= job.maxSalary;
  }