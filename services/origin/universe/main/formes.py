from django import forms
from .models import *


class fileinp(forms.Form):
    inp = forms.FileField(widget=forms.ClearableFileInput(attrs={"allow_multiple_selected": True}))