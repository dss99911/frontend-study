const player = {score: 1, name: 'Jeff'};

//assign the object's field
const {score, name} = player;

//assign player's name to user field name.
const { user: { name } } = player;

//make object with just value. field name is defined automatically with variable name.
const obj = {score, name};

copy1 = () => {
    let newPlayer = Object.assign({}, player, {score: 2});
};

copy2 = () => {
    const state = {
        a: 1,
        b: 2
    };
    const state2 = {
        ...state,
        b: 3
    };
};


//var VS let
//var: function scoped
//let: block scoped
function discountPrices (prices, discount) {
    let discounted = []

    for (let i = 0; i < prices.length; i++) {
        let discountedPrice = prices[i] * (1 - discount)
        let finalPrice = Math.round(discountedPrice * 100) / 100
        discounted.push(finalPrice)
    }

    console.log(i) // 3
    console.log(discountedPrice) // 150
    console.log(finalPrice) // 150

    return discounted
}

discountPrices([100, 200, 300], .5) // ❌ ReferenceError: i is not defined