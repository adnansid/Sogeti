const fs = require('fs');

class Config {
  constructor() {
    this.config = this.loadConfig();
  }

  // Load the configuration from config.json
  loadConfig() {
    try {
      const data = fs.readFileSync('./config.json', 'utf-8');
      return JSON.parse(data);
    } catch (error) {
      console.error('Error reading config file:', error);
      return {};
    }
  }

  // Method to get the base URL
  getBaseUrl() {
    return this.config.baseUrl;
  }
}

module.exports = new Config();
