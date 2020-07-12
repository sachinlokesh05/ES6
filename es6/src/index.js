const square_1 = function (numbers){
  return numbers*numbers;
};

console.log(square_1(5));


const square_2 = numbers => numbers * numbers;

console.log(square_2(5));


const jobs = [
  {id:1 , isActive:true},
  {id:2 , isActive:false},
  {id:3 , isActive:true},
  {id:4 , isActive:false},
]

const activeJobs1 = jobs.filter(function(job){return  job.isActive; });

console.log(activeJobs1);

const activeJobs2 = jobs.filter(job => job.isActive);

console.log(activeJobs2);
