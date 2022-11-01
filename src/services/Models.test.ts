import { isValidGlbFormat } from './Models.service';

describe('Models service unit tests', () => {
  describe('#isValidGlbFormat', () => {
    const testCases = [
      { name: 'undefined URL/base64', format: undefined, expected: false },
      { name: 'null URL/base64', format: null, expected: false },
      { name: 'invalid URL', format: '/3d-test-model.fbx', expected: false },
      { name: 'invalid empty URL/base64', format: '', expected: false },
      { name: 'invalid URL with query parameters', format: '/3d-test-model.gl?morphTargets=true', expected: false },
      {
        name: 'invalid base64 format',
        format: 'data:application/octet-stream;base64Z2xURgIAAAC4aKAAqA4CAEpTT...',
        expected: false
      },
      { name: 'valid URL', format: '/3d-test-model.glb', expected: true },
      {
        name: 'valid URL with query parameters',
        format: '/3d-test-model.glb?morphTargets=true&blendShapes=[1,2,3]',
        expected: true
      },
      {
        name: 'valid base64 format',
        format: 'data:application/octet-stream;base64,Z2xURgIAAAC4aKAAqA4CAEpTT...',
        expected: true
      }
    ];

    test.each(testCases)('$name', ({ format, expected }): void => {
      expect(isValidGlbFormat(format)).toBe(expected);
    });
  });
});
