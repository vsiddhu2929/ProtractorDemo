exports.config = {  
    /*seleniumAddress: 'http://localhost:4444/wd/hub',  */
    specs: ['script.js'],  
    baseURL: 'http://localhost:8089/',  
    framework: 'jasmine',  
    commonCapabilities: {
        'browserName': 'chrome',
      },
};