import { Component, OnInit, OnDestroy } from '@angular/core';
import { DevicesService } from './devices.service';
import { interval, Subscription } from 'rxjs';
import { IDevices, ILastData } from './devices.model';
import { DEVICE_ICON_PATH, SCALED_SIZE, CLUSTER_ICON_PATH } from './../../common/constants';

@Component({
    selector: 'app-devices',
    templateUrl: './devices.component.html',
    styleUrls: ['./devices.component.scss']
})
export class DevicesComponent implements OnInit, OnDestroy {

    public readonly latitude = 52.09083;
    public readonly longitude = 5.12222;
    public readonly mapType = 'roadmap';
    public readonly zoom = 8;
    public readonly iconUrl = {
        url: DEVICE_ICON_PATH,
        scaledSize: {
            width: SCALED_SIZE,
            height: SCALED_SIZE
        }
    };
    public readonly clusterImage = CLUSTER_ICON_PATH;
    public devicesMarkers: ILastData[] = [];
    private subscription: Subscription;
    private subscriptionDevice: Subscription;

    constructor(public devicesService: DevicesService) {}

    public ngOnInit(): void {
        this.getLastData();

        // this will make request to api perodicaly , because of "dynamic properties"
        this.subscription = interval(3000).subscribe(() => {
            this.getLastData();
        });
    }

    public ngOnDestroy(): void {
        this.subscription.unsubscribe();
        this.subscriptionDevice.unsubscribe();
    }

    private getLastData(): void {
        this.subscriptionDevice = this.devicesService.getDevicesData().subscribe((data: IDevices[]) => {
            this.devicesMarkers =[];
            data.forEach((element: IDevices) => {
                this.devicesMarkers.push(element.lastData);
            });
        },
        (error) => console.log(error));
    }

}

