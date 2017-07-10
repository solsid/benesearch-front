import { EventEmitter, Component, Input, Output } from '@angular/core';

@Component({
    selector: 'tool-tip',
    templateUrl: './tool-tip.component.html',
    styleUrls: [ './tool-tip.component.css' ]
})
export class ToolTipComponent {

    @Input() severity: string = 'info';
    @Input() message: string= '';
}
