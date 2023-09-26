const { execSync } = require('child_process');

module.exports = () => {
    execSync('npm run migration:clean:test'); 
}