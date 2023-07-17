from django.db import models


class input(models.Model):
    inp = models.FileField(upload_to='bin', default='', help_text='загрузите файл/файлы', blank=True)
