
import { Component, OnInit, OnDestroy } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-responsive-demo-component',
  imports: [CommonModule],
  templateUrl: './responsive-demo-component.html',
  styleUrl: './responsive-demo-component.css',
})
export class ResponsiveDemoComponent implements OnInit,OnDestroy {
   isMobile = false;
  isTablet = false;
  isDesktop = false;

  private subscription!: Subscription;

  constructor(private breakpointObserver: BreakpointObserver) {}

  ngOnInit(): void {
    this.subscription = this.breakpointObserver
      .observe([
        Breakpoints.Handset,   // mobile
        Breakpoints.Tablet,    // tablet
        Breakpoints.Web        // desktop
      ])
      .subscribe((state: BreakpointState) => {
        this.isMobile = this.breakpointObserver.isMatched(Breakpoints.Handset);
        this.isTablet = this.breakpointObserver.isMatched(Breakpoints.Tablet);
        this.isDesktop = this.breakpointObserver.isMatched(Breakpoints.Web);
      });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe(); // prevent memory leak
  }
}
