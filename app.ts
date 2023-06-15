let age = 50;
let name = 'Max';
let toggle = true;
let empty = null;
let notInitialize = undefined;


let anything:any;
anything = -20;
anything = 'Text';
anything = {};


let some:unknown;
some = 'Text';
let str: string;
// Type guard
if (typeof some === 'string') {
    str = some;
}


let person: [string, number];
person = ['Max', 21]


enum Toggle {ENABLE, DISABLE};
const service = {
    status: Toggle.ENABLE,
};

if (service.status === Toggle.ENABLE) {
    console.log('It is active')
}
if (service.status === Toggle.DISABLE) {
    console.log('It is disabled')
}


function showMessage(message: string):void {
    console.log(message);
  }
  
  
  function calc(num1: number, num2: number):number {
    return num1 + num2;
  }
  
  function customError():never {
    throw new Error('Error');
  }

type page1 = {
title: string;
  likes: number;
  accounts: string[];
  details?: {
    createAt: Date;
    updateAt: Date;
  }
}
  const page1 = {
    title: 'The awesome page',
    likes: 100,
    accounts: ['Max', 'Anton', 'Nikita'],
    status: 'open',
    details: {
      createAt: new Date('2021-01-01'),
      updateAt: new Date('2021-05-01'),
    }
  }
  
  type page2 = {
    title: string;
    likes: number;
  accounts: string[];
  status: string;
}
  const page2 = {
    title: 'Python or Js',
    likes: 5,
    accounts: ['Alex'],
    status: 'close',
  }