import {Component, OnInit} from '@angular/core';
import {ConfigService} from '../config.service';
// import {Config} from '../config';
import {Worddef} from '../worddef';

@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.css']
})
export class ConfigComponent implements OnInit {
  word: string;
  config: Worddef;
  endstring = '!';

  constructor(private configService: ConfigService) {
  }

  ngOnInit() {
  }

  showConfig() {
    this.configService.getConfig(this.word)
      .subscribe((data: Worddef) => this.config = {...data});
    this.endstring = '?';
  }

  showConfigResponse() {
    this.configService.getConfigResponse()
      .subscribe(resp => {
        // const keys = resp.headers.keys();
        // this.headers = keys.map(key => `${key}: ${resp.headers.get(key)}`);
        this.config = {...resp.body};
      });
  }
}
