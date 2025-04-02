from django.contrib.auth import get_user_model
from django.contrib.auth.forms import UserCreationForm
from Shop.shop_app.models import Profile
from django import forms

User = get_user_model()


class CreateProfileForm(UserCreationForm):
    first_name = forms.CharField(
        max_length=Profile.FIRST_NAME_MAX_LENGTH
    )

    last_name = forms.CharField(
        max_length=Profile.LAST_NAME_MAX_LENGTH
    )

    age = forms.IntegerField()

    profile_picture = forms.ImageField()

    class Meta:
        model = User
        fields = ("email", "password1", "password2")

    def save(self, commit=True):
        account = super(CreateProfileForm, self).save(commit=False)

        if commit:
            account.save()
            profile = Profile(
                first_name=self.cleaned_data['first_name'],
                last_name=self.cleaned_data['last_name'],
                age=self.cleaned_data['age'],
                profile_picture=self.cleaned_data['profile_picture'],
                user=account
            )
            profile.save()

        return account


class EditProfileForm(forms.ModelForm):
    email = forms.EmailField(
        required=True,
        widget=forms.EmailInput(attrs={'placeholder': 'Enter your email'})
    )


    class Meta:
        model = Profile
        exclude = ("user",)

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self.fields['email'].initial = self.instance.user.email

    def save(self, commit=True):
        obj = super().save(commit=False)

        if commit:
            new_email = self.cleaned_data["email"]
            obj.user.email = new_email
            obj.user.save()
            obj.save()

        return obj
