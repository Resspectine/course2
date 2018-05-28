import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IArticle } from '../news.component';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IPill } from '../../../shared/components/pillsInput/pillsModel';
import { pillsToTags, tagsToPills } from '../../../shared/utils';

@Component({
  selector: 'edit-article',
  templateUrl: 'edit-article.component.html',
})

export class EditArticleComponent implements AfterViewInit, OnInit {
  @Input() article: IArticle;
  @Output() onSubmitClick = new EventEmitter<IArticle>();
  toTags = (pills: IPill[]) => pillsToTags(pills);
  tagPills: IPill[] = [];
  articleEditForm: FormGroup = new FormGroup({
    content: new FormControl('', [Validators.required]),
      title: new FormControl('', [Validators.required, Validators.maxLength(255)]),
      description: new FormControl('', [Validators.required, Validators.maxLength(255)]),
      tags: new FormControl([])
    }
  );

  ngAfterViewInit(): void {
    this.articleEditForm.controls['tags'].setValue(tagsToPills(this.article.tags));
  }

  ngOnInit(): void {
    this.tagPills = tagsToPills(this.article.tags);
    this.articleEditForm.controls['content'].setValue(this.article.content);
    this.articleEditForm.controls['title'].setValue(this.article.title);
    this.articleEditForm.controls['description'].setValue(this.article.description);
    this.articleEditForm.controls['tags'].setValue(this.article.tags);
  }

  onSubmit(): void {
    this.onSubmitClick.emit(this.article)
  }
}
