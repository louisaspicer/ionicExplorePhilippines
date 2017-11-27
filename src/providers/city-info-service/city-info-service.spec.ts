import { TestBed, inject, async } from '@angular/core/testing';
import { Http, HttpModule, BaseRequestOptions, Response, ResponseOptions } from '@angular/http';
import { MockBackend } from '@angular/http/testing';
import {CityInfoServiceProvider} from "./city-info-service";

describe('Provider: City Info', () => {
  let service: CityInfoServiceProvider;

  beforeEach(async(() => {

    TestBed.configureTestingModule({
      declarations: [],
      providers: [
        CityInfoServiceProvider,
        MockBackend,
        BaseRequestOptions,
        {
          provide: Http,
          useFactory: (mockBackend, options) => {
            return new Http(mockBackend, options);
          },
          deps: [MockBackend, BaseRequestOptions]
        }
      ],
      imports: [
        HttpModule
      ]
    }).compileComponents();

  }));

  beforeEach( inject([CityInfoServiceProvider, MockBackend], (cityInfoService, mockBackend) => {
    service = cityInfoService;

    const pointOfInterestMock = `{
        "title": "A Place",
        "main_image": "http://example.com/img.jpg",
        "details": {
          "short_description": "This is the place",
          "description": "This is the place where dreams come true"
        }
      }`;

    const mockResponse = `
    {
      "points_of_interest": [` +
      pointOfInterestMock + ', ' +
      pointOfInterestMock + ', ' +
      pointOfInterestMock + ', ' +
      pointOfInterestMock +
      `]
    }`;

    mockBackend.connections.subscribe((connection) => {
      connection.mockRespond(new Response(new ResponseOptions({
        body: mockResponse
      })));
    });
  });

  it('should have a non empty array called pointOfInterestCards', () => {
    service.load();

    expect(Array.isArray(service.pointOfInterestCards)).toBeTruthy();
    expect(service.pointOfInterestCards.length).toBeGreaterThan(0);
  });

  it('should not load API data again if already fetched', () => {
    service.load();
    expect(service.pointOfInterestCards.length).toBe(1);

    service.load();
    expect(service.pointOfInterestCards.length).toBe(1);
  });

});
