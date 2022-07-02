
const Mevaluate = function (expression) {
    const result = math.evaluate(expression)
    math.fraction(result)
    return result
};

// THIS FILE IS ONLY FOR DEBUGGING PURPOSES. DO NOT RUN ANY OF THESE FUNCTIONS INSIDE THE MAIN FILE IN PRODUCTION

export {Mevaluate};