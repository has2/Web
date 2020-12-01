var members = ['egoing','k8805','hoya'];
console.log(members[1]);
var i = 0;
while(i<members.length){
    console.log('arrloop',members[i])
    i=i+1;
}



var roles = {
    'prog' : '1',
    'B' : '2',
    'C' : '3'
}
console.log(roles.prog)

for(var name in roles){
    console.log('object =>',name, 'value =>',roles[name]);
}