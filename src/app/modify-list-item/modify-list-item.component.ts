import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import { WatchService } from '../service/watch.service';
import { Watch } from '../Shared/Modules/watch';
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-modify-list-item',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NgIf
  ],
  templateUrl: './modify-list-item.component.html',
  styleUrl: './modify-list-item.component.css'
})
export class ModifyListItemComponent implements OnInit {
  watchForm: FormGroup;
  currentWatchId: number | null = null;

  constructor(
    private fb: FormBuilder,
    private watchService: WatchService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.watchForm = this.fb.group({
      id: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
      company: ['', [Validators.required]],
      region: ['', [Validators.required]],
      color: ['', [Validators.required]],
      type: ['', [Validators.required]],

    });
  }

  ngOnInit(): void {
    const id = this.route.snapshot.queryParamMap.get('id');
    if (id) {
      this.currentWatchId = +id;
      this.loadWatchForEditing();
    }
  }

  loadWatchForEditing(): void {
    if (this.currentWatchId !== null) {
      this.watchService.getWatchById(this.currentWatchId).subscribe((watch: Watch | undefined) => {
        if (watch) {
          this.watchForm.patchValue(watch);
        } else {
          alert('Watch not found!');
        }
      });
    }
  }

  onSubmit(): void {
    if (this.watchForm.valid) {
      const watchData: Watch = this.watchForm.value;

      if (this.currentWatchId === null) {
        // Create a new watch
        this.watchService.addWatch(watchData).subscribe(() => {
          this.router.navigate(['/watch']);
        });
      } else {
        // Update the existing watch
        this.watchService.updateWatch(watchData).subscribe(() => {
          this.router.navigate(['/watch']);
        });
      }
    }
  }

  resetForm(): void {
    this.watchForm.reset();
    this.currentWatchId = null;
  }
}
