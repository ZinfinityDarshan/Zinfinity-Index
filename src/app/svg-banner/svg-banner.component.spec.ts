import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SvgBannerComponent } from './svg-banner.component';

describe('SvgBannerComponent', () => {
  let component: SvgBannerComponent;
  let fixture: ComponentFixture<SvgBannerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SvgBannerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SvgBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
