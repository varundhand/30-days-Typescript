"use strict";
// const year = document.getElementById('year')!
// const thisYear = new Date().getFullYear().toString()
// year.setAttribute('datetime', thisYear)
// year.textContent = thisYear
// method 1
// let year: HTMLElement | null 
// year = document.getElementById('year')!
// let thisYear: string
// thisYear  = new Date().getFullYear().toString()
// year?.setAttribute('datetime', thisYear)
// year.textContent = thisYear
// method 2
const year = document.getElementById('year');
const thisYear = new Date().getFullYear().toString();
year.setAttribute('datetime', thisYear);
year.textContent = thisYear;
