/**
 * User: A node developer
 * Case: Wants to sync tasks from the Todoist API
 * Issue: Never used this library before and is trusting
 *        it to explicitly tell them what's messing up.
 */

//Using require index.js to bypass npm packing for ease
describe('The API-Wrapper package', () => {
  let _API;
  it('should not throw errors when requiring the index.js file', () => {
    expect(() => {return require('./index.js'); }).not.toThrow();
  });
});

