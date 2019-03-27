
const sum = (value, ...args) => {
    console.log(args);
    const result = args.filter(item => item >value).reduce((final,curr) => {
        final +=curr;
        return final;
    },0);
    console.log(result);
    args.forEach((a)=> {
        console.log(a);
        
    });
}

sum(1,8,7,6);


console.log([]);
