import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import {EditorChangeContent, EditorChangeSelection, QuillModule} from 'ngx-quill'

@Component({
  selector: 'app-update-chapter',
  standalone: true,
  imports: [RouterModule,  QuillModule, FormsModule],
  templateUrl: './update-chapter.component.html',
  styleUrl: './update-chapter.component.css'
})
export class UpdateChapterComponent {
  changedEditor(event: EditorChangeContent | EditorChangeSelection){
    console.log('Editor changed:', event);
  }
}
