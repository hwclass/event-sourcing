import Timestamp from '../src/Timestamp';
import { expect } from 'chai';
import 'mocha';

describe('Timestamp', () => {

  const timestampA = '2019-03-04 04:04:09';
  const timestampB = '2019-03-05 04:04:09';

  describe('toString()', () => {
    it('should return toString for valid timestamp', () => {
      const result = Timestamp.fromString(timestampA);
      expect(result.toString()).to.equal(timestampA);
    });
  });

  describe('equals()', () => {
    it('should return true for equal timestamp', () => {
      const timeA = Timestamp.fromString(timestampA);
      const timeB = Timestamp.fromString(timestampA);
      expect(timeA.equals(timeB)).to.be.true;
    });

    it('should return false for non equal timestamp', () => {
      const timeA = Timestamp.fromString(timestampA);
      const timeB = Timestamp.fromString(timestampB);
      expect(timeB.equals(timeA)).to.be.false;
    });
  });

  describe('isBefore()', () => {
    it('should return true for earlier timestamp', () => {
      const timeA = Timestamp.fromString(timestampA);
      const timeB = Timestamp.fromString(timestampB);
      expect(timeA.isBefore(timeB)).to.be.true;
    });

    it('should return false for later timestamp', () => {
      const timeA = Timestamp.fromString(timestampA);
      const timeB = Timestamp.fromString(timestampB);
      expect(timeB.isBefore(timeA)).to.be.false;
    });
  });

  describe('isAfter()', () => {
    it('should return false for earlier timestamp', () => {
      const timeA = Timestamp.fromString(timestampA);
      const timeB = Timestamp.fromString(timestampB);
      expect(timeA.isAfter(timeB)).to.be.false;
    });

    it('should return true for later timestamp', () => {
      const timeA = Timestamp.fromString(timestampA);
      const timeB = Timestamp.fromString(timestampB);
      expect(timeB.isAfter(timeA)).to.be.true;
    });
  });
});
