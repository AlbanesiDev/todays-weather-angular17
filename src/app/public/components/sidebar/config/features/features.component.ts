import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component, ViewEncapsulation, inject } from "@angular/core";
import { TranslateModule } from "@ngx-translate/core";
import { DragDropModule } from "primeng/dragdrop";
import { MultiSelectModule } from "primeng/multiselect";
import { OrderListModule } from "primeng/orderlist";
import { PickListModule } from "primeng/picklist";
import { FeaturesService } from "../../../../../core/services/features.service";
import { CheckboxModule } from "primeng/checkbox";
import { FormsModule } from "@angular/forms";

/**
 * The FeaturesComponent is responsible for displaying and managing the order of features.
 */
@Component({
  selector: "app-features",
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    TranslateModule,
    MultiSelectModule,
    OrderListModule,
    DragDropModule,
    PickListModule,
    CheckboxModule,
  ],
  template: `
    <div class="flex flex-column gap-5">
      <p-orderList
        styleClass="border-primary"
        controlsPosition="right"
        [header]="'orden' | translate"
        [value]="featuresService.featureListOrder()"
        [dragdrop]="true"
        [metaKeySelection]="false"
        (onReorder)="featuresService.setLocalStorage('list')"
      >
        <ng-template let-item pTemplate="item">
          <span>{{ item.title }}</span>
        </ng-template>
      </p-orderList>
      <div
        class="flex flex-column justify-content-start align-items-start gap-3 border-1 border-round surface-border w-full px-3 py-4"
      >
        <p-checkbox
          inputId="binary"
          [label]="'features_settings.current' | translate"
          [(ngModel)]="featuresService.featureListActive[0].current"
          [binary]="true"
          (ngModelChange)="featuresService.setLocalStorage('active')"
        />
        <p-checkbox
          inputId="binary"
          [label]="'features_settings.current_details' | translate"
          [(ngModel)]="featuresService.featureListActive[0].currentDetail"
          [binary]="true"
          (ngModelChange)="featuresService.setLocalStorage('active')"
        />
        <p-checkbox
          inputId="binary"
          [label]="'features_settings.forecast_daily' | translate"
          [(ngModel)]="featuresService.featureListActive[0].forecastDaily"
          [binary]="true"
          (ngModelChange)="featuresService.setLocalStorage('active')"
        />
        <p-checkbox
          inputId="binary"
          [label]="'features_settings.forecast_hourly' | translate"
          [(ngModel)]="featuresService.featureListActive[0].forecastHourly"
          [binary]="true"
          (ngModelChange)="featuresService.setLocalStorage('active')"
        />
        <p-checkbox
          inputId="binary"
          [label]="'features_settings.aqi' | translate"
          [(ngModel)]="featuresService.featureListActive[0].aqi"
          [binary]="true"
          (ngModelChange)="featuresService.setLocalStorage('active')"
        />
      </div>
    </div>
  `,
  styles: `
    p-orderList .p-orderlist-controls {
      display: none !important;
    }
  `,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeaturesComponent {
  public featuresService: FeaturesService = inject(FeaturesService);
}
