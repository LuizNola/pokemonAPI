const { execSync } = require('child_process');

module.exports = () => {
    execSync('npm run migration:create:test'); 
    execSync('npm run migration:run:test');   
}

