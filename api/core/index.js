exports.handler = async (event) => {
    console.log('Hello World!');
    const response = {
        statusCode: 200,
        body: JSON.stringify('Hello World!3'),
    };
    return response;
};
