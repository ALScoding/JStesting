// jest.config.js
// Sync object
export const testEnvironment = 'node'
export const testRegex = '/test/.*\\.(test|spec)?\\.(js|jsx)$'
export const moduleFileExtensions = ['ts', 'tsx', 'js', 'jsx', 'json', 'node']

// Or async function
// module.exports = async () => {
//   return {
//     verbose: true
//   }
// }
