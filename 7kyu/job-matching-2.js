/* DESCRIPTION:

/* 
Необходимо создать систему поиска работников по трем показателям -
 чувство справедливости у будущего работника (будет true false), 
 минимальный уровень зарплаты, которую он хотел бы получить (должно быть больше 0),
 а также должны совпадать локации где живет (или куда готов переехать кандидат) и 
 локации офисов у работодателя.
*/

/* Работодатель будет предлагать максимальный уровень зарплаты, 
а также булевое значение, готов ли он удовлетворить чувство 
справедливости у будущего работника */

/* 
Работа будет подгодящей, если кандидат не требует справедливости (false) 
и при при этом работодатель ее не предлагает 
Также должно сопадать месторасположение, которое указывает работодатель с 
местами работы, где проживает или готов работать кандидат 
также уровень зарплаты должен быть больше 0.
*/



const candidates = [
    {
        desiresEquity: true, 
        currentLocation: 'New York',
        desiredLocations: ['San Francisco', 'Los Angeles']
    }, 
    {
        desiresEquity: false, 
        currentLocation: 'San Francisco',
        desiredLocations: ['Kentucky', 'New Mexico'] 
    }
];


// const job1 = { equityMax: 0, locations: ['Los Angeles', 'New York'] };
const job2 = { equityMax: 1.2, locations: ['New York', 'Kentucky'] };

function match(job, candidates) {
   for (const candidate of candidates) {
    
    console.log(candidate.currentLocation);
    console.log(candidate.desiredLocations.join(', '));
    console.log(job.locations.join(', '));

    }


    


}
match(job2, candidates);


/* 
[
  {
    desiresEquity: true,
    currentLocation: 'New York',
    desiredLocations: [ 'San Francisco', 'Los Angeles' ]
  },
  {
    desiresEquity: false,
    currentLocation: 'San Francisco',
    desiredLocations: [ 'Kentucky', 'New Mexico' ]
  }
]
*/
