// 1) local module : user created

const getsum = function(a,b){
    return a+b
}

const getsub = function(a,b){
    return a-b
}

// module.exports = getsum;
// module.exports = getsub;


module.exports = { getsub,getsum}
