export function validateEmployee(v){
 const e={};
 if(!v.name)e.name='Name required';
 if(!v.email)e.email='Email required';
 return e;
}