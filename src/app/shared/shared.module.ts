import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import { MaterialModule } from '../material';
import { NgxEchartsModule } from 'ngx-echarts';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SatPopoverModule } from '@ncstate/sat-popover';
import { CenterMenuDirective } from './directives/center-menu.directive';
import { WidgetDialogComponent } from './widget-dialog/widget-dialog.component';
import { JsonDialogComponent } from './json-dialog/json-dialog.component';
@NgModule({
	declarations: [ ConfirmDialogComponent, WidgetDialogComponent, CenterMenuDirective, JsonDialogComponent ],
	imports: [ CommonModule, ReactiveFormsModule, FormsModule, FlexLayoutModule, DragDropModule, MaterialModule ],
	exports: [
		CommonModule,
		FlexLayoutModule,
		DragDropModule,
		MaterialModule,
		NgxEchartsModule,
		ReactiveFormsModule,
		FormsModule,
		SatPopoverModule,
		CenterMenuDirective
	],
	entryComponents: [ ConfirmDialogComponent, WidgetDialogComponent, JsonDialogComponent ]
})
export class SharedModule {}
