from django.db import models

# Create your models here.
class Video(models.Model):
    title = models.CharField(max_length= 100)
    content = models.FileField()
    res = models.TextField(max_length=100)
    def __str__(self):
        return self.title