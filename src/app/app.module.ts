import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ChartModule } from 'angular-highcharts';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { StockChartComponent } from './stock-chart.component';

@NgModule({
  imports: [BrowserModule, FormsModule, ChartModule],
  declarations: [AppComponent, HelloComponent, StockChartComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
