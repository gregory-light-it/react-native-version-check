import { needUpdate } from '../needUpdate';

describe('needUpdate', () => {
  it('should work well', () => {
    needUpdate({
      currentVersion: '2.0',
      latestVersion: '10.0',
    }).then(res => {
      expect(res.isNeeded).toBe(true);
    });
  });
  it('should work well', () => {
    needUpdate({
      currentVersion: '10.0',
      latestVersion: '10.0',
    }).then(res => {
      expect(res.isNeeded).toBe(false);
    });
  });
  it('should ignore spare \'0\' tokens.', () => {
    needUpdate({
      currentVersion: '1.0',
      latestVersion: '1.0.0',
    }).then(res => {
      expect(res.isNeeded).toBe(false);
    });
  });
  it('should ignore spare \'0\' tokens.', () => {
    needUpdate({
      currentVersion: '1.0.0',
      latestVersion: '1.0',
    }).then(res => {
      expect(res.isNeeded).toBe(false);
    });
  });
  it('should not ignore spare none \'0\' tokens.', () => {
    needUpdate({
      currentVersion: '1.0',
      latestVersion: '1.0.1',
    }).then(res => {
      expect(res.isNeeded).toBe(true);
    });
  });
});
