/*
 * @Date: 2021-07-19 13:50:29
 * @LastEditors: Mason.Yang
 * @LastEditTime: 2021-07-19 15:49:49
 * @FilePath: \yunydemo\lall-mason\js.js
 * @Description: $1
 */

let a = {
  "name": "yourwebpart",
  "jest": {
    "verbose": true,
    "moduleFileExtensions": [
      "ts",
      "tsx",
      "js"
    ],
    "transform": {
      "^.+\\.(js|ts|tsx)$": "ts-jest"
    },
    "testMatch": [
      "**/src/**/*.(test|spec).+(ts|tsx|js)"
    ],
    "testResultsProcessor": "jest-junit"
  },
}

{
  "name": "yourwebpart",
  "jest": {
    ...,
    "collectCoverage": true,
    "coverageReporters": [
      "text-summary"
    ]
  }
  ...
}

enum EnvType {
  'Online',
  'On-Premise'
}

export default class SharePoint {

  private _env: EnvType;

  private _version: string;

  constructor() {
      this._env = EnvType.Online;
  }

  public get env(): EnvType {
      return this._env;
  }

  public set env(value: EnvType) {
      if (undefined == EnvType[value]) {
          throw TypeError('EnvType is out of range.');
      }
      this._env = value;
  }

  public get version(): string {
      return this._version;
  }

  public set version(value: string) {
      this._version = value;
  }
}

/// <reference types="jest" />

import SharePoint from './SharePoint';

describe('SharePoint model', () => {
    it('should create a SharePoint instance', () => {
        let s = new SharePoint();
        expect(s).toEqual({
            _env: 0
        });
    });

    it('should set SharePoint._env to the passed argument \'1\'', () => {
        let s = new SharePoint();
        s.env = 1;
        expect(s).toEqual({
            _env: 1
        });
    });

    it('should throw an error when EnvType is out of range', () => {
        let s = new SharePoint();
        expect(() => {
            s.env = 3;
        }).toThrow(TypeError);
    });

    it('should return the \'env\' value when the getter \'env\' called', () => {
        let s = new SharePoint();
        expect(s.env).toEqual(0);
    });

    it('should set SharePoint._version to the passed argument \'15.0.4693.1000\'', () => {
        let s = new SharePoint();
        s.version = '15.0.4693.1000';
        expect(s).toEqual({
            _env: 0,
            _version: '15.0.4693.1000'
        });
    });

    it('should return the \'version\' value when the getter \'version\' called', () => {
        let s = new SharePoint();
        s.version = '15.0.4693.1000';
        expect(s.version).toEqual('15.0.4693.1000');
    });
});



npm i jest@26.4.2 @types/jest@26.0.13 ts-jest@26.3.0 jest-junit@11.1.0 --save-dev