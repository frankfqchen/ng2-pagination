import {ChangeDetectionStrategy, Component, Input} from "@angular/core";
import {PaginatePipe, PaginationControlsCmp} from '../../src/ng2-pagination';


@Component({
    selector: 'basic-example',
    template: require('./basic-example-cmp.html'),
    directives: [PaginationControlsCmp],
    pipes: [PaginatePipe],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class BasicExampleCmp {

    @Input('data') meals: string[] = [];

}