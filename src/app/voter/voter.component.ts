import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-voter',
  templateUrl: './voter.component.html',
  styleUrls: ['./voter.component.scss'],
})
export class VoterComponent {
  @Input() booleanForMakeResult!: boolean;

  @Output()
  infoOfResult = new EventEmitter<boolean>();

  voterArr = ['John', 'James', 'Syuzie', 'Steven', 'Patrick', 'Abby', 'Adam'];
  personsWhoVoted :string[] = [];

  getResult(user:string, bool:boolean) {
    this.personsWhoVoted.push(user);
    this.infoOfResult.emit(bool);
  }

}
